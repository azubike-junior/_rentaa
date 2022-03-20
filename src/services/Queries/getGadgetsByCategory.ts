import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { IGadgets, ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { getUserResponse } from "../../interfaces/index";

export interface IData {
  data: string;
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

export const getGadgetsByCategory = createAsyncThunk(
  "getGadgetsByCategory",
  async (id: string) => {
    try {
      const response = await axiosInstance.get(`/categories/${id}/gadgets`);

      if (response.status === 200) {
        return response?.data?.items;
      }
    } catch (e: any) {
      return e.response.data;
    }
  }
);

const getGadgetsByCategorySlice = createSlice({
  name: "getGadgetsByCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGadgetsByCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getGadgetsByCategory.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getGadgetsByCategory.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getGadgetsByCategorySlice.reducer;
