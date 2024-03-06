// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin

export default defineConfig({
  // Base URL for your app (adjust as needed)
  base: '/subscriber/',

  // Plugins
  plugins: [react()], // Use the Vite React plugin

  // Other configuration options
  build: {
    // Output directory (adjust as needed)
    outDir: 'dist',
  },
});
