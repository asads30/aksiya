import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/GameView"),
  },
  {
    path: "/prize",
    name: "prize",
    component: () => import("@/views/PrizeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
