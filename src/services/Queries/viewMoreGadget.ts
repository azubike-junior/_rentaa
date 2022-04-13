import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { IGadgets, ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { getUserResponse } from "../../interfaces/index";
import { baseUrl } from "../../utils/helper";

interface DataProps {
  formData: any;
  history: any;
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

export const viewMoreGadget = createAsyncThunk("viewMoreGadgets", async (id: string) => {
  try {
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");

    const response = await axios.get(
      `${baseUrl}/gadgets/view-more?gadgetID=${id}&cover=true`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      return response?.data?.items;
    }
  } catch (e: any) {
    return e.response.data;
  }
});

const viewMoreGadgetSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(viewMoreGadget.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(viewMoreGadget.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(viewMoreGadget.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default viewMoreGadgetSlice.reducer;
