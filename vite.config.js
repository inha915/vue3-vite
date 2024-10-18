import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { fileURLToPath, URL } from "url"; // 경로 alias 설정을 위한 추가 코드

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Vuetify 자동 임포트 옵션 활성화
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // '@' alias가 'src' 폴더를 가리키도록 설정
    },
  },
});
