import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import { baseUrl } from "./../../utils/helper";

interface DataProps {
  formData: any;
  navigate: any;
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
  async ({ formData, navigate }: DataProps, { rejectWithValue }) => {
    try {
      const accessToken = JSON.parse(
        localStorage.getItem("accessToken") || "{}"
      );

      const response = await axios.post(`${baseUrl}/gadgets`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
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
