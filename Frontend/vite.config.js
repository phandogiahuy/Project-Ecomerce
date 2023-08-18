import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
