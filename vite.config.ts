import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), svgr(), tailwindcss()],
  build: {
    // Enable minification
    minify: 'esbuild',
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Vendor chunk for other dependencies
          'vendor-ui': ['react-select'],
        },
      },
    },
    // Generate source maps for debugging (optional, can be disabled for production)
    sourcemap: false,
    // Optimize chunk size warnings threshold
    chunkSizeWarningLimit: 500,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-select'],
  },
})
