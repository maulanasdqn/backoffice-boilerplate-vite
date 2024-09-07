import { TMetaError } from "@/entities/types/meta-type";
import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
};

export const api = axios.create(config);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: TMetaError) => {
    if (error.response?.data?.message) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);
