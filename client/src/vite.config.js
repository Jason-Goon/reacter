import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/dev/',
    plugins: [react()],
    server: {
        port: 3006,
        proxy: {
            '/dev': 'http://localhost:3005'
        }
    }
});
