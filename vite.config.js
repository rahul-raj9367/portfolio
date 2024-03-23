import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    chunkSizeWarningLimit: 500 * 1024,
    outDir: 'docs', // Change the output directory to 'docs'
  },
  server: {
    host: '0.0.0.0',
  },
});