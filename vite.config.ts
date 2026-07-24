import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // User site: https://victory.github.io (repo must be named victory.github.io)
  base: '/',
})
