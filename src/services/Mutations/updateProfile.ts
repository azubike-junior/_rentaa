import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";

interface DataProps {
  formData: any;
  navigate: any;
  photoId: string;
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

export const updateGadget = createAsyncThunk(
  "register",
  async ({ formData, navigate, photoId }: DataProps, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        `/gadgets/${photoId}`,
        formData
      );
      console.log(">>>>>response", response);

      if (response.data.status === 201) {
        navigate("/profile");
        return response.data;
      }
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

const updateGadgetSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateGadget.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(updateGadget.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(updateGadget.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default updateGadgetSlice.reducer;
