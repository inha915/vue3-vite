// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/MainLay",
    name: "MainLay",
    // Lazy-loaded 방식으로 컴포넌트 로드
    component: () => import("../views/MainLay.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
