import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/website-n-t-t-nghi-p/', // Thay thế 'website-n-t-t-nghi-p' bằng tên repo của bạn
  plugins: [react()],
  build: {
    outDir: 'build', // Đảm bảo rằng thư mục build là 'build'
  },
});
