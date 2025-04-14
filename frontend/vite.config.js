// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      '/usuarios': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  css: {
    postcss: {} // no hace falta plugins vacíos, pero si tenés uno (ej. autoprefixer o tailwind), se carga desde postcss.config.js
  }
})
