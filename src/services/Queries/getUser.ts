import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/helper";
import { getUserResponse } from "./../../interfaces/index";

type dataProps = {
  id?: string;
  setImage?: any;
  dispatch?: any;
};

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: getUserResponse;
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: <getUserResponse>{},
  isSuccessful: false,
};

export const getUserById = createAsyncThunk(
  "getUser",
  async (params: dataProps | any, {rejectWithValue}) => {
    console.log(">>>>>>>>>>e=hellooooooo")
    const { id } = params;

    console.log(">>>>id", id);

    const accessToken: string = JSON.parse(
      localStorage.getItem("accessToken") || "{}"
    );

    try {
      const response = await axios.get(
       `${baseUrl}/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.statusCode === 200) {
      return response.data.user
      }
      rejectWithValue(response.data)

    } catch (e: any) {
      return  rejectWithValue(e.response.data);
    }
  }
);

const getUserSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getUserById.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getUserSlice.reducer;
