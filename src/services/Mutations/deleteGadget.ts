import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { IGadgets, ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { getUserResponse } from "../../interfaces/index";
import { toggleDeleteModal } from "./Modal";

interface DataProps {
  formData: any;
  history: any;
}

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: IGadgets[];
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: [],
  isSuccessful: false,
};

export const deleteGadget = createAsyncThunk(
  "deleteGadget",
  async ({ id, history, dispatch }: any) => {
    try {
      const response = await axiosInstance.delete(`/gadgets/${id}`);
      if (response.status === 200) {
        history.push("/profile");
        dispatch(toggleDeleteModal());
        return response?.data?.items;
      }
    } catch (e: any) {
      return e.response.data;
    }
  }
);

const deleteGadgetSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteGadget.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(deleteGadget.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(deleteGadget.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default deleteGadgetSlice.reducer;
