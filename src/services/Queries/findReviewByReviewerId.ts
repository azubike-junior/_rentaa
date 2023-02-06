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

export const findReviewsByReviewerId = createAsyncThunk(
  "findReviewsByReviewerId",
  async (reviewer: string | any, { rejectWithValue }) => {
    console.log(">>>>>>>>>reviewer", reviewer)
    const token = JSON.parse(localStorage.getItem("accessToken") || "{}");
    try {
      const response = await axios.get(`${baseUrl}/reviews?revieweeID=${reviewer.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(">>>>>>>response from revieweer", response.status)
      if (response.status === 200) {
        return response.data
      }
      
      rejectWithValue(response.data);
      
    } catch (e: any) {
      rejectWithValue( e.response.data);
    }
  }
);

const findReviewsByReviewerIdSlice = createSlice({
  name: "findReviewByReviewerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findReviewsByReviewerId.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(findReviewsByReviewerId.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(findReviewsByReviewerId.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default findReviewsByReviewerIdSlice.reducer;
