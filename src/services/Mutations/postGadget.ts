import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";

interface DataProps {
  formData: any;
  history: any;
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

export const postGadget = createAsyncThunk(
  "register",
  async ({ formData, history }: DataProps, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/gadgets", formData);
      console.log(">>>>>response", response);

      if (response.data.status === 201) {
        history.push("/profile");
        return response.data;
      }
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

const postGadgetSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postGadget.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(postGadget.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(postGadget.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default postGadgetSlice.reducer;
