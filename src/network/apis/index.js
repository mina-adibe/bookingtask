import axios from "axios";
import {
  requestHandler,
  successHandler,
  errorHandler,
} from "../interceptors/interceptor";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

//Handle request process
axiosInstance.interceptors.request.use((request) => {
  return requestHandler(request);
});

//Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);
