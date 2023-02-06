import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ITokenDecode } from "../../interfaces";
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

export const getUserById2 = createAsyncThunk(
  "getUser2",
  async (params: dataProps | any) => {
    const accessToken: string = JSON.parse(
      localStorage.getItem("accessToken") || "{}"
    );
    const user: ITokenDecode = jwt_decode(accessToken);

    try {
      const response = await axios.get(
       `${baseUrl}/users/${user?.user_id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("<>>>>>>>>user respone", response.data)

      if (response.data.statusCode === 200) {    
        return response?.data?.user;
      }
    } catch (e: any) {
      // console.log(">>>>>>RESPONSE 2 ", e.response.data);
      return e.response.data;
    }
  }
);

const getUserSlice = createSlice({
  name: "getUser2",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById2.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getUserById2.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getUserById2.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getUserSlice.reducer;
