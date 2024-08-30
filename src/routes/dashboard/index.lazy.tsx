import { DashboardModule } from "@/modules/dashboard/module";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/")({
  component: () => <DashboardModule />,
});
