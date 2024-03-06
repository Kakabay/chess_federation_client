// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin

export default defineConfig({
  // Plugins
  plugins: [react()], // Use the Vite React plugin

  assetsInclude: /\.(png|jpe?g|gif)$/i, // Exclude SVG files

  // Other configuration options
  build: {
    // Output directory (adjust as needed)
    outDir: 'dist',
  },
});
