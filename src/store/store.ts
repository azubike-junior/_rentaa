import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import leaveReviewReducer from "../services/Mutations/leaveReview";
import findReviewsByReviewerSlice from "../services/Queries/findReviewByReviewerId";
import findReviewsSlice from "../services/Queries/findReviews";
import getProfileAvatarReducer from "../services/Queries/getProfileAvatar";
import { queries } from "../services/Queries/queries";
import changePasswordReducer from './../services/Mutations/changePassword';
import deleteGadgetReducer from "./../services/Mutations/deleteGadget";
import editProfileReducer from "./../services/Mutations/editProfile";
import forgetPasswordReducer from "./../services/Mutations/forgetPassword";
import loginReducer from "./../services/Mutations/login";
import modalReducer from "./../services/Mutations/Modal";
import postGadgetReducer from "./../services/Mutations/postGadget";
import registerReducer from "./../services/Mutations/register";
import resetPasswordReducer from "./../services/Mutations/resetPassword";
import findGadgetReducer from "./../services/Queries/findGadget";
import findContactReducer from "./../services/Queries/findUserContact";
import getCategoriesReducer from "./../services/Queries/getCategories";
import getGadgetReducer from "./../services/Queries/getGadgets";
import getGadgetsByCategoryReducer from "./../services/Queries/getGadgetsByCategory";
import getReviewerImageReducer from './../services/Queries/getReviewerImage';
import getUserById from "./../services/Queries/getUser";
import getUserById2 from "./../services/Queries/getUser2";
import verifyEmailReducer from "./../services/Queries/verifyEmail";
import viewMoreGadgetReducer from './../services/Queries/viewMoreGadget';




export const store = configureStore({
  reducer: {
    [queries.reducerPath]: queries.reducer,
    modalReducer,
    postGadgetReducer,
    registerReducer,
    loginReducer,
    getUserById,
    editProfileReducer,
    getGadgetReducer,
    getProfileAvatarReducer,
    forgetPasswordReducer,
    getGadgetsByCategoryReducer,
    verifyEmailReducer,
    findContactReducer,
    findGadgetReducer,
    leaveReviewReducer,
    deleteGadgetReducer,
    getCategoriesReducer,
    resetPasswordReducer,
    changePasswordReducer,
    viewMoreGadgetReducer,
    getReviewerImageReducer,
    getUserById2,
    findReviewsSlice,
    findReviewsByReviewerSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(queries.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: (data?: any) => AppDispatch = useDispatch; 

// export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
