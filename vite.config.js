
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/portfolio/',

  server: {
    allowedHosts: [
      "695060a0d4bf.ngrok-free.app",
      "*"
    ]
  }
})
