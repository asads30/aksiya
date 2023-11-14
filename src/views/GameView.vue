<script setup>
import { computed, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "@/stores/GameStore";
import GameBoard from "@/components/GameBoard.vue";
import NewGameButton from "@/components/NewGameButton.vue";
import ModalWindow from "@/components/ui/ModalWindow.vue";
import GameTitle from "@/components/GameTitle.vue";
import HeaderComponent from "@/components/ui/Header.vue";
import createDeck from "@/features/createDeck";
import router from "@/router";

const userSelection = ref([]);
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

const screenWidth = computed(()=> {
  let a = window.screen.width - 60
  return a / 3
})
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
      startedGame.value = false;
      router.push({ name: "prize" });
    }, 3000);
  }
});

watch(
  userSelection,
  (currentValue) => {
    if (currentValue.length === 2) {
      const cardOne = currentValue[0];
      const cardTwo = currentValue[1];
      userCanFlipCard.value = false;
      if (cardOne.faceValue === cardTwo.faceValue) {
        cardList.value[cardOne.position].matched = true;
        cardList.value[cardTwo.position].matched = true;
        userCanFlipCard.value = false;
      } else {
        setTimeout(() => {
          startedGame.value = false;
          isModalLoseVisible.value = true;
        }, 3000);
      }
      userSelection.value.length = 0;
    }
  },
  { deep: true }
);

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
    <HeaderComponent center-text="Найди пару" center left></HeaderComponent>
    <div class="game-wrapper">
      <GameTitle />
      <GameBoard :cardList="cardList" :status="status" @flip-card="flipCard" :screenWidth="screenWidth" />
    </div>
    <NewGameButton />
  </div>
  <div v-if="countDown <= 3 && countDown >= 1" class="started-game-count">
    <p class="count-time">{{ countDown }}</p>
  </div>
  <ModalWindow
    btnName="Закрыть"
    v-if="isModalLoseVisible"
    @close="isModalLoseVisible = false"
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
  <div
    style="height: 65%"
    data-bs-scroll="true"
    class="offcanvas offcanvas-bottom rounded-top-5"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div
      class="offcanvas-btn mx-auto"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></div>
    <div style="padding: 15px 0" class="offcanvas-header mx-auto">
      <h5
        style="font-family: 'Golos Text', sans-serif !important"
        class="offcanvas-title text-center text-nowrap fs-2 fw-bold"
        id="offcanvasBottomLabel"
      >
        Информация об призах
      </h5>
    </div>
    <div style="padding: 0 20px" class="offcanvas-body">
      <div class="mb-4">
        <p class="info-prize">
          Чтобы стать участником акции – необходимо пройти идентификацию в
          приложении Click Up и зайти в раздел «Акция». После этого пользователь
          автоматически становится участником и получает 1 шанс на участие в
          розыгрыше основных призов.
        </p>
        <p class="info-prize">
          Главная задача участника – накопить как можно больше шансов для
          выигрыша одного или нескольких основных призов. Копите шансы,
          приглашая друзей по своему промокоду.
        </p>
        <p class="info-prize">
          Вы можете следить за ходом розыгрышей основных призов в прямых эфирах
          на официальных страничках компании:
        </p>
      </div>
      <h1
        style="
          font-family: 'Golos Text', sans-serif !important;
          margin-bottom: 15px;
        "
        class="text-center text-nowrap fs-2 fw-bold"
      >
        Описание призов
      </h1>
      <div class="prizes-description">
        <div>
          <div class="prize-item">
            <img src="@/assets/prize-photo.svg" draggable="false" alt="" />
          </div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в
            приложении Click Up и зайти в раздел «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item">
            <img src="@/assets/prize-photo.svg" draggable="false" alt="" />
          </div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в
            приложении Click Up и зайти в раздел «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item">
            <img src="@/assets/prize-photo.svg" draggable="false" alt="" />
          </div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в
            приложении Click Up и зайти в раздел «Акция».
          </p>
        </div>
      </div>
      <div class="prizes-description">
        <div>
          <div class="prize-item">
            <img src="@/assets/prize-photo-2.svg" draggable="false" alt="" />
          </div>
          <p class="prize-text">
            Чтобы стать участником акции – необходимо пройти идентификацию в
            приложении Click Up и зайти в раздел «Акция».
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.game-container {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  max-height: 100dvh;
  overflow: hidden;
}
.game-wrapper{
  height: calc(100dvh - 170px);
  max-height: calc(100dvh - 170px);
  overflow-x: hidden;
  overflow-y: auto;
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
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  overflow: hidden;
  max-height: 100%;
  height: 100%;
  justify-content: center;
  width: 100%;
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
