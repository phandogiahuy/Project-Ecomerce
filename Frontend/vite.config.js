import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import path, { resolve } from "path";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
