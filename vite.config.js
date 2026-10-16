import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: true, // Listen on all local IPs
    strictPort: false, // If 3000 is in use, automatically try next port
  },
});
