import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import registerReducer from "./../services/Mutations/register";
import loginReducer from "./../services/Mutations/login";
import { category } from "../services/Queries/category";
import postGadgetReducer from "./../services/Mutations/postGadget";
import getGadgetReducer from "../services/Queries/getGadgets";
import getUserById from "./../services/Queries/getUser";
import modalReducer from "./../services/Mutations/Modal";
import editProfileReducer from "./../services/Mutations/editProfile";
import getProfileAvatarReducer from "../services/Queries/getProfileAvatar";
import forgetPasswordReducer from './../services/Mutations/forgetPassword';
import getGadgetsByCategoryReducer from './../services/Queries/getGadgetsByCategory';
import verifyEmailReducer from './../services/Queries/verifyEmail';
import findContactReducer from './../services/Queries/findUserContact';


export const store = configureStore({
  reducer: {
    [category.reducerPath]: category.reducer,
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
    findContactReducer
  },
  // middleware: (gdm) => gdm().concat(openAccountApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
