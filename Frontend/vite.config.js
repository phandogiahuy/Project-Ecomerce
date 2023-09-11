import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import path, { resolve } from "path";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://ecommercecafe.onrender.com",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
