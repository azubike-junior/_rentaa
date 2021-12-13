import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // [openAccountApi.reducerPath]: openAccountApi.reducer,
    // bvnReducer,
    // otpReducer,
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
