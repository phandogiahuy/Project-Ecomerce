import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import path, { resolve } from "path";

// https://vitejs.dev/config/
const aliases = {
  "@crema": "src/@crema",
  core: "src/core",
  assets: "src/assets",
  "@hook": "src/@hook",
  components: "src/components",
  features: "src/features",
  guards: "src/guards",
  pages: "src/pages",
  types: "src/types",
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    resolve(__dirname, value),
  ])
);
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react", // ignore react stuff
        "react-dom",
      ],
    },
  },
  resolve: {
    alias: {
      ...resolvedAliases,
      "./runtimeConfig": "./runtimeConfig.browser",
      "jss-plugin-{}": "jss-plugin-global",
    },
  },
});
