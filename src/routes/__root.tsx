import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { MainLayout } from "../components/ui/layout/main";
import { Fragment } from "react";

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <TanStackRouterDevtools />
    </Fragment>
  ),
});
