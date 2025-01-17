import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/shrayash25.github.io/', // Your GitHub Pages repo name
});
