import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { IRegistration, UserResponse } from "../../interfaces";
import { axiosInstance } from "./../../utils/axiosInstance";
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

export const registerUser = createAsyncThunk(
  "register",
  async ({ navigate, ...rest }: IRegistration, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/registration`, rest);
      // console.log(">>>>response", response);

      if (response.status === 201) {
        navigate("/verify_email");
        return response.data;
      }
    } catch (e: any) {
      // console.log(">>>>>>RESPONSE 2 ", e.response.data);
      return rejectWithValue(e.response.data);
    }
  }
);

export const RegisterSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default RegisterSlice.reducer;
