import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Force restart v1.0.1
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
