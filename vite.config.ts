import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  base: '/shrayash25.github.io/',  // Set this to your repository name with a slash
});
