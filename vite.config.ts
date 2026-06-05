import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({mode}) => {
  return {
    // No plugins needed — the game is a standalone index.html with inline CSS/JS
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    // Load GOOGLE_CLIENT_ID from .env.local and expose to index.html via Vite's env replacement
    envPrefix: 'GOOGLE_',
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
