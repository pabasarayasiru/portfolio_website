import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   // base: process.env.VITE_BASE_PATH || "/portfolio",
//   base: import.meta.env.VITE_BASE_PATH || "/react_dev",
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_PATH || "/react_dev",
  };
});
