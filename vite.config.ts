import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticPlugin from 'vite-plugin-static';

export default defineConfig({
  base: '/tech-impact/',  // Replace 'repository-name' with your actual repository name
  plugins: [
    react(),
    staticPlugin(),
  ],
});
