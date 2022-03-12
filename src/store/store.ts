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
