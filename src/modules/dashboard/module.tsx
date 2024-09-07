import { FC, ReactElement } from "react";
import { useGetDashboard } from "./hook";
import { useErrorBoundary } from "react-error-boundary";

export const DashboardModule: FC = (): ReactElement => {
  const { data, error, isError, isLoading } = useGetDashboard();
  const { showBoundary } = useErrorBoundary();

  if (isError) {
    showBoundary(error);
  }

  return <div>Dashboard Module {isLoading ? "Loading..." : data?.name}</div>;
};
