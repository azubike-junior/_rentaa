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
  showNotification: boolean;
  deleteModalOpen: boolean;
  changePasswordOpen: boolean
  changePasswordSuccessOpen: boolean
}

const initialState: initState = {
  contactModalOpen: false,
  reviewModalOpen: false,
  editModalOpen: false,
  showNotification: false,
  deleteModalOpen: false,
  changePasswordOpen: false,
  changePasswordSuccessOpen: false
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
    openNotification(state) {
      state.showNotification = true;
    },
    closeNotification(state) {
      state.showNotification = true;
    },
    toggleDeleteModal(state) {
      state.deleteModalOpen = !state.deleteModalOpen;
    },
    toggleChangePasswordModal(state) {
      state.changePasswordOpen = !state.changePasswordOpen
    },
    toggleChangePasswordSuccessModal(state) {
      state.changePasswordSuccessOpen = !state.changePasswordSuccessOpen
    }
  },
});

export const {
  toggleContactModal,
  toggleEditModal,
  toggleReviewModal,
  openNotification,
  closeNotification,
  toggleDeleteModal,
  toggleChangePasswordModal,
  toggleChangePasswordSuccessModal
} = modalSlice.actions;
export default modalSlice.reducer;
