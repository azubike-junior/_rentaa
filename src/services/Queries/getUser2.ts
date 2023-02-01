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
    // console.log(">>>>id", id);
    const { id, dispatch, setImage } = params;
    const accessToken: string = JSON.parse(
      localStorage.getItem("accessToken") || "{}"
    );
    const user: ITokenDecode = jwt_decode(accessToken);

    const defaultOptions = {
      method: "get",
      headers: {
        "Content-Type": "image",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.get(
        id ? `${baseUrl}/users/${id}` : `${baseUrl}/users/${user?.user_id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.statusCode === 200) {
        /**
           if an id is passed when calling the getUserById function, this means we want to get an
           external user image
           * so we get the avatarId from the response, then use it to get the image picture of the external user
          */
       
          localStorage.setItem(
            "avatarId",
            response.data.user.profile?.avatarId
          );
        

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
