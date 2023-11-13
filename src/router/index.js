import { createRouter, createWebHistory } from "vue-router";
import { useGameStore } from "@/stores/GameStore";
import { storeToRefs } from "pinia";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/GameView"),
    beforeEnter: (to, from) => {
      if (to.name === "game" && from.name === "prize") {
        return false;
      }
    },
  },
  {
    path: "/prize",
    name: "prize",
    component: () => import("@/views/PrizeView.vue"),
  },
  {
    path: "/referral",
    name: "referral",
    component: () => import("@/views/ReferallView.vue"),
  },
  {
    path: "/start",
    name: "start",
    component: () => import("@/views/StartView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  const gameStore = useGameStore();
  const { startedGame } = storeToRefs(gameStore);
  if (startedGame.value && from.name === "game" && to.name === "home") {
    return false;
  }
});

export default router;
