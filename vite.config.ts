// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin

export default defineConfig({
  // Plugins
  plugins: [react()], // Use the Vite React plugin

  // Other configuration options
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: '[name].js', // currently does not work for the legacy bundle
        assetFileNames: '[name].[ext]', // currently does not work for images
      },
    },
    // Output directory (adjust as needed)
    outDir: 'dist',
  },
});
