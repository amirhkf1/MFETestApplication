import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    federation({
      remotes: {
        mfe1: "http://localhost:3001/assets/remoteEntry.js",
        mfe2: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
});
