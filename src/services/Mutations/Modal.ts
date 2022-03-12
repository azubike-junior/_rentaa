import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ITokenDecode, UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";

interface initState {
  contactModalOpen: boolean;
  reviewModalOpen: boolean;
  editModalOpen: boolean;
}

const initialState: initState = {
  contactModalOpen: false,
  reviewModalOpen: false,
  editModalOpen: false,
};

const modalSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {
    toggleContactModal(state) {
      state.contactModalOpen = !state.contactModalOpen;
    },
    toggleReviewModal(state) {
      state.reviewModalOpen = !state.reviewModalOpen;
    },
    toggleEditModal(state) {
      state.editModalOpen = !state.editModalOpen;
    },
  },
});

export const { toggleContactModal, toggleEditModal, toggleReviewModal } =
  modalSlice.actions;
export default modalSlice.reducer;
