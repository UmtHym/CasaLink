import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "",
  plugins: [
    react(),
    ,
    svgr({
      svgrOptions: {
        icon: true,
        dimensions: false,
        expandProps: "end",
      },
    }),
  ],
  server: {
    host: true,
    open: true,
    port: 3000,
  },
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html",
    },
  },
});
``