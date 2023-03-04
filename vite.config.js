import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // loadEnv(mode, process.cwd());
  return {
    plugins: [
      react({
        fastRefresh: process.env.NODE_ENV !== 'test',
      }),
    ],
    server: {
      host: true, // open server
      port: 3001,
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
    build: {
      commonjsOptions: {
        exclude: ['./src/__mocks__', './src/__test__'],
      },
    },
  };
});
