import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TDashboardResponse } from "./type";
import { TMetaError } from "@/entities/types/meta-type";
import { getDashboard } from "./api";

export const useGetDashboard = (): UseQueryResult<
  TDashboardResponse,
  TMetaError
> => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => await getDashboard(),
  });
};
