import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { toggleEditModal } from "./Modal";
import { getUserById } from "./../Queries/getUser";
import { getProfileAvatar } from "../Queries/getProfileAvatar";

interface DataProps {
  formData: any;
  history: any;
  dispatch: any;
  setImage: any;
  avatarId: any;
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

export const editProfile = createAsyncThunk(
  "editProfile",
  async (
    { formData, history, avatarId, setImage, dispatch }: DataProps,
    { rejectWithValue }
  ) => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
    const user: ITokenDecode = jwt_decode(accessToken);

    try {
      const response = await axiosInstance.patch(
        `/users/${user?.user_id}`,
        formData
      );
      // console.log(">>>>>>RESPONSE ", response.data.item);

      if (response.data.status === 201) {
        dispatch(getUserById());
        dispatch(toggleEditModal());
        dispatch(getProfileAvatar({ avatarId, setImage }));
        window.location.reload()
        return response.data;
      }
    } catch (e: any) {
      // console.log(">>>>>>RESPONSE 2 ", e.response.data);
      return rejectWithValue(e.response.data);
    }
  }
);

const editProfileSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editProfile.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(editProfile.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default editProfileSlice.reducer;
