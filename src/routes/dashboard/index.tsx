import { createFileRoute } from "@tanstack/react-router";
import { lazily } from "react-lazily";
import { fallback, zodSearchValidator } from "@tanstack/router-zod-adapter";
import { z } from "zod";

const dashboardSearchSchema = z.object({
  filter: fallback(z.string(), "").default(""),
  sort: fallback(z.enum(["newest", "oldest", "price"]), "newest").default(
    "newest"
  ),
});

const { DashboardModule } = lazily(() => import("@/modules/dashboard/module"));

export const Route = createFileRoute("/dashboard/")({
  validateSearch: zodSearchValidator({
    schema: dashboardSearchSchema,
  }),
  component: () => <DashboardModule />,
});
