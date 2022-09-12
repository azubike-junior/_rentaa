import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { IGadgets, ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { baseUrl } from "../../utils/helper";

interface IResponse {
  status: number;
  message: string;
}

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: IResponse;
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: <IResponse>{},
  isSuccessful: false,
};

export const verifyEmail = createAsyncThunk(
  "verifyEmail",
  async (token: string, { rejectWithValue }: any) => {
    try {
      const response = await axios.get(`${baseUrl}/auth/verify-email/${token}`);
      console.log(">>>>>tokn", response);
      if (response.status === 200) {
        return response?.data;
      }
      if (response.status === 400) {
        return response?.data;
      }
    } catch (e: any) {
      //   console.log(e.response);
      return rejectWithValue(e.response.data);
    }
  }
);

const verifyEmailSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(verifyEmail.rejected, (state: any, action: any) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(verifyEmail.fulfilled, (state: any, action: any) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(verifyEmail.pending, (state: any, action: any) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default verifyEmailSlice.reducer;
