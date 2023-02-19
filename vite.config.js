import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, './')
const outDir = resolve(__dirname, 'dist')

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        clipboard: resolve(root, 'projects/01-clipboard', 'index.html')
      }
    }
  }
})
