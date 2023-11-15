import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("AppStore", () => {
  const webSession = ref(null);
  const user = ref(null)

  const setWebSession = (payload) => {
    webSession.value = payload;
  };

  const setUser = (payload) => {
    user.value = payload;
  }

  return { webSession, setWebSession, user, setUser };
});
