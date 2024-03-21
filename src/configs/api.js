import axios from "axios";
import { getCookie, setCookie } from "../utils/Cookie";
import { getNewToken } from "../services/token";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Concat_Type: "applicaiton/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const token = getCookie("accessToken");
    if (token) {
      request.headers["Authorization"] = `beare ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginialRequest = error.config;
    if (error.response.status == 401 && !orginialRequest._retry) {
      orginialRequest._retry = true;

      const res = await getNewToken();
      if (!res) return;
      setCookie(res.res.data);
      return api(orginialRequest)
    }
  }
);

export { api };
