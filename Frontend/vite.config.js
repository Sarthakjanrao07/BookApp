import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  root: '.',
=======
  root:'.',
>>>>>>> 4db2e40b1299de4d32d8e68c40e37db48d547534
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
  },
})
