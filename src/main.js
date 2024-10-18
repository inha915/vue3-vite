// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css"; // Material Design Icons 가져오기
import router from "./router"; // Router를 가져옵니다.

// Vue 앱 생성 및 Vuetify 사용
const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
