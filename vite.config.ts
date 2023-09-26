import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { compilerOptions } from './tsconfig.json';

const alias = Object.keys(compilerOptions.paths)
  .filter((k) => !(k.includes('/*') || k.startsWith('@chimplanet')))
  .map((k) => {
    return {
      find: k,
      replacement: resolve(__dirname, compilerOptions.baseUrl, k.slice(1)),
    };
  });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    const { VITE_UI_PACKAGE_PATH } = loadEnv(mode, process.cwd());

    console.log(VITE_UI_PACKAGE_PATH);

    alias.push({
      find: '@chimplanet/ui',
      replacement: resolve(__dirname, VITE_UI_PACKAGE_PATH),
    });
  }

  console.log(alias);

  return {
    plugins: [react()],
    server: {
      host: true,
      port: 3001,
    },
    resolve: {
      alias,
    },
  };
});
