import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import aliasPaths from './jsconfig.paths.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // loadEnv(mode, process.cwd());

  const alias = Object.keys(aliasPaths.compilerOptions.paths)
    .filter((k) => !k.includes('/*'))
    .map((k) => {
      return {
        find: k,
        replacement: path.resolve(__dirname, 'src/' + k.slice(1)),
      };
    });

  return {
    plugins: [
      react({
        fastRefresh: process.env.NODE_ENV !== 'test',
        babel: {
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      }),
    ],
    server: {
      host: true, // open server
      port: 3001,
    },
    resolve: {
      alias: alias,
    },
    build: {
      commonjsOptions: {
        exclude: ['./src/__mocks__', './src/__test__'],
      },
    },
  };
});
