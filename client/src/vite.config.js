import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/dev/',
    plugins: [react()],
    server: {
        port: 3006,
        proxy: {
            '/dev/api': {
                target: 'http://localhost:3005',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/dev\/api/, '/dev')
            }
        }
    }
});
