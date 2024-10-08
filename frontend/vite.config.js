import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows network access
    port: 5173, // Specify the port if needed
  },
  resolve: {
    alias: {
      "react-helmet-async": "react-helmet-async",
    },
  },
});
