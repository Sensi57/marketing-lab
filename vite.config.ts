import { defineConfig, type ConfigEnv, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

const logConfig = (isDev: boolean, isAnalyze: boolean) => {
    console.log(`\nMode: ${isDev ? 'development' : 'production'}`);
    if (isAnalyze) console.log('Bundle Analyzer: Enabled\n');
};

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const isDev = mode === 'development';
    const isAnalyze = process.env.VITE_ANALYZE === 'true';

    logConfig(isDev, isAnalyze);

    return {
        plugins: [
            react({
                jsxRuntime: 'automatic',
            }),
            ...(isAnalyze ? [visualizer({ open: true, gzipSize: true })] : []),
        ],

        server: {
            host: true,
            port: 3001,
            open: true,
            strictPort: false, // если false — Vite попробует следующий свободный порт
            cors: true,
            hmr: true,
            // historyApiFallback: true,
        },

        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        },

        css: {
            modules: {
                scopeBehaviour: 'local',
                generateScopedName: isDev
                    ? 'sensi__[local]__[hash:base64:5]'
                    : 'sensi__[hash:base64:5]',
            },
            // preprocessorOptions: {
            //   scss: {
            //     additionalData: `@import "@/styles/variables.scss";`,
            //   },
            // },
            devSourcemap: isDev,
        },

        build: {
            target: 'esnext',
            outDir: 'dist',
            sourcemap: false,
            cssCodeSplit: true,
            minify: isDev ? false : 'esbuild',
            emptyOutDir: true,
            chunkSizeWarningLimit: 700,

            rollupOptions: {
                external: [/\.stories\.(t|j)sx?$/],
                output: {
                    entryFileNames: 'assets/[name].[hash].js',
                    chunkFileNames: 'assets/chunks/[name].[hash].js',
                    assetFileNames: 'assets/[name].[hash].[ext]',
                    manualChunks: {
                        react: ['react', 'react-dom'],
                        vendor: ['axios'],
                    },
                },
            },
        },

        // ENV переменные
        define: {
            __DEV__: isDev,
            'process.env.NODE_ENV': JSON.stringify(mode),
        },
    };
});
