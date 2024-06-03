import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/website/', // Cập nhật tên repo mới
  plugins: [react()],
  build: {
    outDir: 'build', // Đảm bảo rằng thư mục build là 'build'
  },
});
