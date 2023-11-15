import { computed, ref } from "vue";
import { useGameStore } from "@/stores/GameStore";

export default function createGame(deck) {
  const newPlayer = ref(true);
  const gameStore = useGameStore();
  const matchCardGame = () => {
    deck.value = deck.value.map((card, index) => {
      return {
        ...card,
        matched: false,
        position: index,
        visible: false,
      };
    });
  };

  const status = computed(() => {
    if (matchesFound.value === 1 && gameStore.countVisibleCard === 2) {
      gameStore.startedGame = false;
      return true;
    } else if (!matchesFound.value && gameStore.countVisibleCard === 2) {
      gameStore.startedGame = false;
      if (navigator in window) {
        navigator.vibrate(300);
      }
      return false;
    } else {
      return false;
    }
  });

  const matchesFound = computed(() => {
    const matchedCards = deck.value.filter(
      (card) => card.matched === true
    ).length;
    return matchedCards / 2;
  });

  return {
    matchesFound,
    newPlayer,
    matchCardGame,
    status,
  };
}
