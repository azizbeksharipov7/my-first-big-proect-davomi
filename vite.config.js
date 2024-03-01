import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
      component: `${path.resolve(__dirname, "./src/component")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      assets: `${path.resolve(__dirname, "./src/assets")}`,
      utils: `${path.resolve(__dirname, "./src/utils")}`,
      data: `${path.resolve(__dirname, "./src/data")}`,
    },
  },
})
