import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { IGadgets, ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { getUserResponse } from "../../interfaces/index";
import { baseUrl } from './../../utils/helper';

export interface IContact {
  phone_number: string
  twitter: string
  instagram: string
}

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: IContact;
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: <IContact>{},
  isSuccessful: false,
};

export const findContact = createAsyncThunk("findContact", async (userId: string) => {
  try {
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
    const response = await axios.get(
      `${baseUrl}/users/findContact?userID=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    // console.log(">>>>>>.contact", response)
    if (response.status === 200) {
      return response?.data?.item;
    }
  } catch (e: any) {
    return e.response.data;
  }
});

const findContactSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findContact.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(findContact.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(findContact.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default findContactSlice.reducer;
