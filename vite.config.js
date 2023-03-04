import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { BASE_NAME } from './src/constants';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // loadEnv(mode, process.cwd());
  return {
    base: BASE_NAME, // 반드시 배포할 때는 수정해야함.
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
