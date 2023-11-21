import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('C:\\Windows\\System32\\localhost-key.pem'),
      cert: fs.readFileSync('C:\\Windows\\System32\\localhost.pem')
    }
  }
});
