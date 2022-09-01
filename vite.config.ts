import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import shimReactPdf from "vite-plugin-shim-react-pdf";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), shimReactPdf(), NodeGlobalsPolyfillPlugin(), typescript()],
  server: {
    port: 3000
  },
  preview: {
    port: 8080
  },
  define: {
    global: {},
    'process.env': {}
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }

  }
})

