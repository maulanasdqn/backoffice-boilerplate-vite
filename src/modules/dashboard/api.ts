import { api } from "@/libs/axios";
import { TDashboardResponse } from "./type";

export const getDashboard = async (): Promise<TDashboardResponse> => {
  const { data } = await api.get<TDashboardResponse>("/dashboard");
  return data;
};
