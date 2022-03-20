import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { baseUrl } from "../../utils/helper";

interface DataProps {
  email: any;
  history: any;
}

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

export const forgetPassword = createAsyncThunk(
  "forgetPassword",
  async ({ email, history }: DataProps, { rejectWithValue }) => {
    console.log(email);
    try {
      const response = await axios.post(`${baseUrl}/auth/forgot-password`, {
        email,
      });
      console.log(">>>>>response", response.status);

      if (response.status === 201) {
        history.push("/forget_password_success_response");
        return response.data;
      }
      if (response.data.status === 404) {
        return response.data;
      }
    } catch (e: any) {  
      return rejectWithValue(e.response.data);
    }
  }
);

const forgetPasswordSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(forgetPassword.rejected, (state, action) => {
      console.log(">>>>>s", action.payload);
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(forgetPassword.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default forgetPasswordSlice.reducer;
