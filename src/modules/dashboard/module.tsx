import { FC, ReactElement } from "react";
import { useGetDashboard } from "./hook";

export const DashboardModule: FC = (): ReactElement => {
  const { data, error, isError, isLoading } = useGetDashboard();

  console.log("Error on module", error);
  console.log("Data on module", data);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Dashboard Module {isLoading ? "Loading..." : data?.name}</div>;
};
