import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { getUserResponse } from "./../../interfaces/index";

interface DataProps {
  formData: any;
  history: any;
}

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: getUserResponse;
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: <getUserResponse>{},
  isSuccessful: false,
};

export const getUserById = createAsyncThunk("getUser", async () => {
  const accessToken: string = localStorage.getItem("accessToken") || "";
  const user: ITokenDecode = jwt_decode(accessToken);

  try {
    const response = await axiosInstance.get(`/users/${user?.user_id}`);
    console.log(">>>>>>>it called getUser in dashboard");
    if (response.data.statusCode === 200) {
      return response?.data?.user;
    }
  } catch (e: any) {
    console.log(">>>>>>RESPONSE 2 ", e.response.data);
    return e.response.data;
  }
});

const getUserSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      // console.log(">>>>>>state", action?.payload?.profile?.avatarId);
      localStorage.setItem("avatarId", action?.payload?.profile?.avatarId);
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getUserById.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getUserSlice.reducer;
