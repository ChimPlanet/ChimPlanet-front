import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { compilerOptions } from './tsconfig.json';

const alias = Object.keys(compilerOptions.paths)
  .filter((k) => !k.includes('/*'))
  .map((k) => {
    return {
      find: k,
      replacement: resolve(__dirname, 'src/' + k.slice(1)),
    };
  });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3001,
  },
  resolve: {
    alias,
  },
});
