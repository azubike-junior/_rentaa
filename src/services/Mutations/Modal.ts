import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initState {
  contactModalOpen: boolean;
  reviewModalOpen: boolean;
  editModalOpen: boolean;
  showNotification: boolean;
  deleteModalOpen: boolean;
  changePasswordOpen: boolean;
  changePasswordSuccessOpen: boolean;
  sidebarOpen: boolean;
  logoutOpen: boolean
}

const initialState: initState = {
  contactModalOpen: false,
  reviewModalOpen: false,
  editModalOpen: false,
  showNotification: false,
  deleteModalOpen: false,
  changePasswordOpen: false,
  changePasswordSuccessOpen: false,
  sidebarOpen: false,
  logoutOpen: false
};

const modalSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {
    toggleContactModal(state: initState) {
      state.contactModalOpen = !state.contactModalOpen;
    },
    toggleReviewModal(state: initState) {
      state.reviewModalOpen = !state.reviewModalOpen;
    },
    toggleEditModal(state: initState) {
      state.editModalOpen = !state.editModalOpen;
    },
    openNotification(state: initState) {
      state.showNotification = true;
    },
    closeNotification(state: initState) {
      state.showNotification = true;
    },
    toggleDeleteModal(state: initState) {
      state.deleteModalOpen = !state.deleteModalOpen;
    },
    toggleChangePasswordModal(state: initState) {
      state.changePasswordOpen = !state.changePasswordOpen;
    },
    toggleChangePasswordSuccessModal(state: initState) {
      state.changePasswordSuccessOpen = !state.changePasswordSuccessOpen;
    },
    toggleSidebar(state: initState) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleLogoutModal(state:initState) {
      state.logoutOpen = !state.logoutOpen;
    },
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
  toggleChangePasswordSuccessModal,
  toggleSidebar,
  toggleLogoutModal
} = modalSlice.actions;
export default modalSlice.reducer;
