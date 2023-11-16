import { defineStore } from "pinia";
import createDeck from "@/features/createDeck.js";
import createGame from "@/features/createGame.js";
import prizesDeck from "@/data/PrizesName.json";
import { ref } from "vue";

export const useGameStore = defineStore("GameStore", {
  state: () => {
    const { cardList } = createDeck(prizesDeck);
    const { newPlayer, matchCardGame, matchesFound, status } =
      createGame(cardList);

    const customAnimationEnded = ref(false);
    const userCanFlipCard = ref(false);
    const startedGame = ref(false);
    const countVisibleCard = ref(0);
    const countDown = ref(4);
    const startGame = () => {
      countVisibleCard.value = 0;
      userCanFlipCard.value = true;
    };

    const startCountDown = () => {
      newPlayer.value = false;
      startedGame.value = true;
      matchCardGame();
      let x = setInterval(() => {
        countDown.value -= 1;
        if (countDown.value < 0) {
          clearInterval(x);
        }
      }, 1000);
    };

    return {
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
      customAnimationEnded,
    };
  },
});
