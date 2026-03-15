import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'USSNCC-1701/WebDev2', // Replace <your-repo-name> with your actual GitHub repository name
});