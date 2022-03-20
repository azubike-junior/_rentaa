import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { IGadgets, ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { baseUrl } from "../../utils/helper";

interface IResponse {
  statusCode: number;
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
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/auth/verify-email/${token}`);
      if (response.data.statusCode === 200) {
        return response?.data;
      }
      if (response.data.statusCode === 400) {
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
  extraReducers: (builder) => {
    builder.addCase(verifyEmail.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(verifyEmail.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(verifyEmail.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default verifyEmailSlice.reducer;
