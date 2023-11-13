import { defineStore } from "pinia";
import createDeck from "@/features/createDeck.js";
import createGame from "@/features/createGame.js";
import halloweenDeck from "@/data/halloweenDeck.json";
import { ref } from "vue";

export const useGameStore = defineStore("GameStore", {
  state: () => {
    const { cardList } = createDeck(halloweenDeck);
    const { newPlayer, matchCardGame, matchesFound, status } =
      createGame(cardList);

    const cardFlipped = ref(true);
    const userCanFlipCard = ref(false);
    const startedGame = ref(false);
    const countVisibleCard = ref(0);
    const countDown = ref(4);

    const startGame = () => {
      startedGame.value = true;
      countVisibleCard.value = 0;
      cardFlipped.value = false;
      userCanFlipCard.value = true;
    };

    const startCountDown = () => {
      newPlayer.value = false;
      let x = setInterval(() => {
        countDown.value -= 1;
        if (countDown.value < 0) {
          matchCardGame();
          clearInterval(x);
        }
      }, 1000);
    };

    return {
      cardFlipped,
      userCanFlipCard,
      startedGame,
      countDown,
      startCountDown,
      cardList,
      newPlayer,
      startGame,
      matchCardGame,
      matchesFound,
      status,
      countVisibleCard,
    };
  },
});
