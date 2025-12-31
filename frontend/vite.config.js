import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // 🔥 VERY IMPORTANT
  resolve: {
    alias: {
      "@ckb-lumos/hd": false, // ⛔ block Node-only package
    },
  },

  optimizeDeps: {
    exclude: ["@ckb-lumos/hd"], // ⛔ prevent pre-bundling
  },
});
