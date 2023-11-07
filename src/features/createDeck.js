import { ref } from 'vue';
import { useGameStore } from '@/stores/GameStore';
import { storeToRefs } from 'pinia';

const cardList = ref([]);

const initDeck = deckData => {
  deckData?.forEach(item => {
    cardList.value.push({
      value: item,
      variant: 1,
      visible: true,
      position: null,
      matched: false,
      opened: false,
    });

    cardList.value.push({
      value: item,
      variant: 2,
      visible: true,
      position: null,
      matched: false,
      opened: false,
    });
  });
};

const updateCardPosition = () => {
  cardList.value = cardList.value.map((card, index) => {
    return {
      ...card,
      position: index,
    };
  });
};

export default function createDeck(deckData = null) {
  const gameStore = useGameStore();
  const { startedGame } = storeToRefs(gameStore);
  initDeck(deckData);
  updateCardPosition();
  const visibleAllCard = () => {
    if (startedGame) {
      const copyCardList = JSON.stringify(cardList.value);
      cardList.value = JSON.parse(copyCardList);
    }
  };
  return {
    visibleAllCard,
    cardList,
  };
}
