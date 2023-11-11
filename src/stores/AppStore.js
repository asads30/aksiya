import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("AppStore", () => {
  const webSession = ref(null);

  const setWebSession = (payload) => {
    console.log(payload);
    webSession.value = payload;
  };

  return { webSession, setWebSession };
});
