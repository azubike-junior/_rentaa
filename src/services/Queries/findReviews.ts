import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/helper";

interface DataProps {
  userId: string
}

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: any;
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: [],
  isSuccessful: false,
};

export const findReviews = createAsyncThunk(
  "findReviews",
  async () => {
    const token = JSON.parse(localStorage.getItem("accessToken") || "{}");
    try {
      const response = await axios.get(`${baseUrl}/reviews`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
      // console.log("<<<<<<<<responswe", response)
      return response.data

    } catch (e: any) {
      return e.response.data;
    }
  }
);

const findReviewsSlice = createSlice({
  name: "findReviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findReviews.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(findReviews.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(findReviews.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default findReviewsSlice.reducer;
