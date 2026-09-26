import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative asset paths for Cloudflare Pages & GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('html2canvas')) {
              return 'vendor-html2canvas';
            }
            if (id.includes('chart.js')) {
              return 'vendor-chart';
            }
            return 'vendor-libs';
          }
          if (id.includes('questions-') && id.endsWith('.json')) {
            const match = id.match(/questions-([^.]+)\.json$/);
            if (match) {
              return `exam-${match[1]}`;
            }
            return 'exam-questions';
          }
          if (id.includes('khordad1405_traps_analysis')) {
            return 'traps-analysis-data';
          }
          if (id.includes('articlesData')) {
            return 'articles-data';
          }
          if (id.includes('src/views/QuestionBankView') || id.includes('src/data/examsRegistry')) {
            return 'view-question-bank';
          }
          if (id.includes('src/views/ConsultationView') || id.includes('src/components/ConsultationModal')) {
            return 'view-consultation';
          }
          if (id.includes('src/views/') || id.includes('src/components/')) {
            return 'app-ui';
          }
        }
      }
    }
  }
});



