import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The built site goes to docs/ so GitHub Pages can serve it directly from the main branch.
// If the repository name is not <username>.github.io, set base: '/your-repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'docs', emptyOutDir: true }
});
