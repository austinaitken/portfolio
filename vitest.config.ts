import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        imagetools(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
    },
})
