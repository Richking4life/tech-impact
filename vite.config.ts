import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticPlugin from 'vite-plugin-static';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    staticPlugin({
      base: '/repository-name/',  // Replace with your repository name
    }),
  ],
});
