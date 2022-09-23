import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import axios from "axios";
import { baseUrl } from "./../../utils/helper";
import {
  toggleChangePasswordModal,
  toggleChangePasswordSuccessModal,
} from "./Modal";

interface DataProps {
  data: any;
  dispatch: any;
}

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: any;
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const changePassword = createAsyncThunk(
  "updatePassword",
  async ({ data, dispatch }: DataProps, { rejectWithValue }) => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
    try {
      const response = await axios.post(
        `${baseUrl}/users/update-password`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      if (response.status === 201) {
        // history.push("/profile");
        dispatch(toggleChangePasswordModal());
        dispatch(toggleChangePasswordSuccessModal());
        return response.data;
      }
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

const changePasswordSlice = createSlice({
  name: "updatePassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changePassword.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(changePassword.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default changePasswordSlice.reducer;
