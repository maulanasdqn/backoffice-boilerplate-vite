import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), TanStackRouterVite(), chunkSplitPlugin()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
});

function manualChunks(id: string | string[]) {
  if (id.includes("node_modules")) {
    return "vendor";
  }

  if (
    id.includes("@tanstack/react-router") ||
    id.includes("@tanstack/react-query")
  ) {
    return "@tanstack";
  }

  if (id.includes("@ant-design/icons") || id.includes("antd")) {
    return "@antd";
  }
}
