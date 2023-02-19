import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ChimPlanet-front/",
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== "test",
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  build: {
    commonjsOptions: {
      exclude: ["./src/__mocks__", "./src/__test__"],
    },
  },
});
