// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.png', '**/*.PNG'], // Add PNG handling
    server: {
        host: true,
        port: 4000,
      }
});
