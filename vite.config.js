import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@api",
        replacement: path.resolve(__dirname, "src/api"),
      },
      {
        find: "@atoms",
        replacement: path.resolve(__dirname, "src/atoms"),
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/constants"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/hooks"),
      },
      {
        find: "@layout",
        replacement: path.resolve(__dirname, "src/layout"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@query",
        replacement: path.resolve(__dirname, "src/query"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils"),
      },
    ],
  },
});
