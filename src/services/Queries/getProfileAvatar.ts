import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { getUserResponse } from "./../../interfaces/index";
import { baseUrl } from './../../utils/helper';

interface DataProps {
  avatarId?: any;
  setImage?: any;
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
  data: "",
  isSuccessful: false,
};

export const getProfileAvatar = createAsyncThunk(
  "getProfileAvatar",
  async ({ avatarId, setImage }: DataProps) => {
    console.log(">>>>>>avatarIdin prof ", avatarId, setImage);
    const token = JSON.parse(localStorage.getItem("accessToken") || "{}");
    const defaultOptions = {
      method: "get",
      headers: {
        "Content-Type": "image",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${baseUrl}/users/profile-avatar?avatarID=${avatarId}`,
        { ...defaultOptions }
      );

      console.log(">>>>>>response avatar", response.body)

      if (response.status === 200) {
        const reader = response?.body?.getReader();
        // window.location.reload()

        let chunks: any = [];
        reader?.read().then(function processText({ done, value }: any): any {
          if (done) {
            const blob = new Blob([chunks], { type: "image" });

            setImage(URL.createObjectURL(blob));

            // console.log(">>>>>url", URL.createObjectURL(blob));
            return URL.createObjectURL(blob);
          }
          const tempArray = new Uint8Array(chunks.length + value.length);
          tempArray.set(chunks);
          tempArray.set(value, chunks.length);
          chunks = tempArray;

          return reader.read().then(processText);
        });
      }
      if (response.status === 404) {
        return response.statusText;
      }
    } catch (e: any) {
      return e.response.data;
    }
  }
);

const getProfileAvatarSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileAvatar.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getProfileAvatar.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      // console.log("=============", state.data);
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getProfileAvatar.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getProfileAvatarSlice.reducer;
