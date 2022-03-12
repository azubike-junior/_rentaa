import axios, { AxiosRequestConfig } from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

interface User {
  user_id: string;
  iat: number;
  exp: number;
}

const baseURL = "http://localhost:3002/api/v1";

let accessToken: string = JSON.parse(
  localStorage.getItem("accessToken") || "{}"
)
  ? JSON.parse(localStorage.getItem("accessToken") || "{}")
  : "";
let refresh_token: string = JSON.parse(
  localStorage.getItem("refresh_token") || "{}"
)
  ? JSON.parse(localStorage.getItem("refresh_token") || "{}")
  : "";

export const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${accessToken}` },
});

axiosInstance.interceptors.request.use(async (req: any) => {
  if (!accessToken) {
    accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}")
      ? JSON.parse(localStorage.getItem("accessToken") || "{}")
      : "";
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  const user: User = jwt_decode(accessToken);
  const expired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!expired) return req;

  const response = await axios.post(`${baseURL}/auth/refresh-token`, {
    refresh_token,
  });

  if (response.data.statusCode === 400) {
    //todoo later
  }

  localStorage.setItem(
    "accessToken",
    JSON.stringify(response?.data?.message?.token)
  );
  req.headers.Authorization = `Bearer ${response?.data?.message.token}`;
  return req;
});

// export default axiosInstance;
