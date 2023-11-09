<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "@/stores/GameStore";
import { launchConfetti } from "@/utilities/confetti";
import GameBoard from "@/components/GameBoard.vue";
import NewGameButton from "@/components/NewGameButton.vue";
import ModalWindow from "@/components/ui/ModalWindow.vue";
import GameTitle from "@/components/GameTitle.vue";
import HeaderComponent from "@/components/ui/Header.vue";
import createDeck from "@/features/createDeck";

const userSelection = ref([]);

const isModalWinVisible = ref(false);
const isModalLoseVisible = ref(false);

const gameStore = useGameStore();
const {
  cardList,
  matchesFound,
  status,
  countDown,
  startedGame,
  userCanFlipCard,
  countVisibleCard,
} = storeToRefs(gameStore);

const deckCard = createDeck();
const flipCard = (payload) => {
  if (userCanFlipCard.value) {
    cardList.value[payload.position].visible = true;
    cardList.value[payload.position].opened = true;

    if (userSelection.value[0]) {
      if (
        userSelection.value[0].position === payload.position &&
        userSelection.value[0].faceValue === payload.faceValue
      ) {
        return false;
      } else {
        userSelection.value[1] = payload;
      }
    } else {
      userSelection.value[0] = payload;
    }
  } else {
    return false;
  }
};

watch(matchesFound, (currentValue) => {
  if (currentValue === 1) {
    setTimeout(() => {
      isModalWinVisible.value = true;
      launchConfetti();
    }, 3000);
  }
});

watch(
  userSelection,
  (currentValue) => {
    if (currentValue.length === 2) {
      const cardOne = currentValue[0];
      const cardTwo = currentValue[1];
      // Disable ability to flip cards
      userCanFlipCard.value = false;
      if (cardOne.faceValue === cardTwo.faceValue) {
        cardList.value[cardOne.position].matched = true;
        cardList.value[cardTwo.position].matched = true;
        userCanFlipCard.value = false;
      } else {
        setTimeout(() => {
          isModalLoseVisible.value = true;
        }, 3000);
      }
      // else {
      //   setTimeout(() => {
      //     cardList.value[cardOne.position].visible = false;
      //     cardList.value[cardTwo.position].visible = false;
      //     // Allow user to flip a new card
      //     userCanFlipCard.value = true;
      //   }, 2000);
      // }
      userSelection.value.length = 0;
    }
  },
  { deep: true }
);
const closeEndModal = () => {
  if (isModalWinVisible.value) {
    isModalWinVisible.value = false;
  } else {
    isModalLoseVisible.value = false;
  }
};

watch(
  () => startedGame.value,
  (value) => {
    if (!value && countVisibleCard.value === 2) {
      setTimeout(() => {
        deckCard.visibleAllCard();
      }, 3000);
    }
  }
);
</script>

<template>
  <div class="game-container">
    <div style="max-height: 70px; height: 70px; overflow: hidden">
      <HeaderComponent
        center-text="Найди пару"
        center
        left
        leftLink="/"
      ></HeaderComponent>
    </div>
    <div
      style="
        height: calc(100dvh - 70px);
        max-height: calc(100dvh - 70px);
        overflow: hidden;
      "
    >
      <GameTitle />
      <GameBoard :cardList="cardList" :status="status" @flip-card="flipCard" />
    </div>
    <NewGameButton />
  </div>
  <div v-if="countDown <= 5 && countDown >= 1" class="started-game-count">
    <p class="count-time">{{ countDown }}</p>
  </div>
  <ModalWindow
    btnName="Закрыть"
    v-if="isModalWinVisible"
    @close="closeEndModal"
  >
    <template v-slot:header>
      <img
        draggable="false"
        src="@/assets/svg/end-survey.svg"
        loading="lazy"
        class="header-end-image"
        alt=""
      />
      <p class="header-text">ПОЗДРАВЛЯЕМ!!!</p>
      <div class="border-header"></div>
    </template>
    <template v-slot:body>
      <p class="modal-body-content">Вы выиграли приз от компании клик</p>
    </template>
    <template v-slot:footer></template>
  </ModalWindow>
  <ModalWindow
    btnName="Закрыть"
    v-if="isModalLoseVisible"
    @close="closeEndModal"
  >
    <template v-slot:header>
      <img
        draggable="false"
        src="@/assets/svg/end-survey.svg"
        loading="lazy"
        class="header-end-image"
        alt=""
      />
      <p class="header-text">Испытайте удачу по позже, ничего не выиграли</p>
      <div class="border-header"></div>
    </template>
    <template v-slot:body>
      <p class="modal-body-content">Испытайте удачу по позже в клике</p>
    </template>
    <template v-slot:footer></template>
  </ModalWindow>
</template>

<style lang="scss">
.game-container {
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-height: 100dvh;
  overflow: hidden;
}
.started-game-count {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100dvh;
  max-height: 100dvh;
  z-index: 100;
  background-color: rgba(26, 27, 37, 0.8);
  & .count-time {
    z-index: 1;
    padding: 0 20px 10px;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    overflow: hidden;
    color: #fff;
    font-family: "Golos Text", sans-serif !important;
    font-size: 128px;
    font-style: normal;
    text-align: center;
    font-weight: 700;
    line-height: normal;
  }
}
.game-board {
  display: grid;
  overflow: hidden;
  max-height: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(3, 28%);
  grid-template-rows: repeat(4, 23%);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

@media screen and (max-width: 320px) {
  .game-board {
    grid-template-columns: repeat(3, 27%);
    grid-template-rows: repeat(4, 22%);
  }
}

.header-end-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 15px auto;
}
.header-text {
  margin: 0;
  color: #363845;
  text-align: center;
  font-family: "Golos Text", sans-serif !important;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: break-spaces;
}
.border-header {
  margin: 15px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.modal-body-content {
  margin-bottom: 15px;
  color: #363845;
  text-align: center;
  font-family: Golos Text, sans-serif !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
