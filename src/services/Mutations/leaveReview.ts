import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";
import axios from "axios";
import { getUserById } from "./../Queries/getUser";
import { baseUrl } from "../../utils/helper";
import { toggleReviewModal } from "./Modal";

interface DataProps {
  data: any;
  dispatch: any;
  id: string;
  setImage: any
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

export const leaveReview = createAsyncThunk(
  "leaveReview",
  async ({ data, id, dispatch, setImage }: DataProps, { rejectWithValue }) => {
    console.log(">>>data", data)
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");

    try {
      const response = await axios.post(
        `${baseUrl}/reviews?revieweeID=${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(">>>>>response", response);

      if (response.status === 201) {
        // history.push("/profile");
        dispatch(getUserById({id, setImage}));
        dispatch(toggleReviewModal());
        return response.data;
      }
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

const leaveReviewSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(leaveReview.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(leaveReview.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(leaveReview.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default leaveReviewSlice.reducer;
