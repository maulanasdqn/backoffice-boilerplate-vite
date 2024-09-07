import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";
import { lazily } from "react-lazily";

const { MainLayout } = lazily(() => import("@/components/ui/layout/main"));

export const Route = createRootRoute({
  component: () => (
    <Suspense fallback={<>Loading...</>}>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <TanStackRouterDevtools />
    </Suspense>
  ),
});
