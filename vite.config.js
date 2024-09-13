import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    compression: false,
    chunkSizeWarningLimit: 1600,
  },
    plugins: [react()],
})


