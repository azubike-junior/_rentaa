import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ILogin, ITokenDecode, UserResponse } from "../../interfaces";
import { baseUrl } from "./../../utils/helper";

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: UserResponse;
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: <UserResponse>{},
  isSuccessful: false,
};

export const loginUser = createAsyncThunk(
  "login",
  async ({ navigate, ...rest }: ILogin, { rejectWithValue }) => {
    // const accessToken: string = localStorage.getItem("accessToken") || "";
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, rest);
      if (response.data.statusCode === 200) {
        const { token, refreshToken } = response.data.message.results;
        const user: ITokenDecode = jwt_decode(token);

        localStorage.setItem("avatarId", user?.avatar_id);
        localStorage.setItem("accessToken", JSON.stringify(token));
        localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
        localStorage.setItem(
          "userData",
          JSON.stringify(response?.data?.message.userData)
        );

        navigate("/dashboard");
        return response.data;
      }
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default loginSlice.reducer;
