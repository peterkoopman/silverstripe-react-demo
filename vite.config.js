
// vite.config.js
import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import path from 'path';

export default defineConfig({
    publicDir: false,
    build: {
        outDir: 'dist', // Output directory relative to the theme root
        sourcemap: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'app/scripts/main.jsx'),
                styles: path.resolve(__dirname, 'app/styles/main.css'), // Optional: for CSS entry
            },
            output: {
                entryFileNames: 'js/[name].jsx', // Output JS in a js subdirectory
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/[name].[ext]'; // Output CSS in a css subdirectory
                    }
                    return 'static/assets/[name].[ext]'; // Other assets
                },
            },
        },
        emptyOutDir: false, // Clean the output directory on build
    },
    plugins: [
        liveReload([
        '../templates/**/*.ss', // Reload on Silverstripe template changes
        ]),
  ],
  server: {
    watch: {
      ignored: [
        '../templates/**/*.ss', // Don't trigger Vite rebuild on template changes (handled by liveReload)
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend'), // Optional: Alias for your frontend directory
    },
  },
});
