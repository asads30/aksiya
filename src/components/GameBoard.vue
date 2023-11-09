<script setup>
import Card from "@/components/CardBoard.vue";
import { useGameStore } from "@/stores/GameStore";
import { useMinuteCountDown } from "@/utilities/useMinuteCountDown";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import ModalWindow from "@/components/ui/ModalWindow.vue";

defineProps({
  cardList: {
    type: Array,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const timelineGame = useMinuteCountDown();
const gameStore = useGameStore();
const { newPlayer, startedGame, countVisibleCard, userCanFlipCard } =
  storeToRefs(gameStore);
const progressGame = ref(null);

const isModalTimeEnded = ref(false);
const emits = defineEmits(["flip-card"]);

const selectCard = (payload) => {
  if (!newPlayer.value) {
    emits("flip-card", payload);
  }
};

watch(
  () => timelineGame.timeEnded.value,
  (value) => {
    if (countVisibleCard.value < 2 && value) {
      isModalTimeEnded.value = true;
      userCanFlipCard.value = false;
      startedGame.value = false;
    }
  }
);

watch(
  () => startedGame.value,
  (value) => {
    if (value) {
      progressGame.value.classList.add("timeline-anim");
      timelineGame.startCountDownGame();
    } else {
      clearInterval(timelineGame.intervalTimeout.value);
    }
  }
);
</script>

<template>
  <div
    :style="
      timelineGame.secondsTimeLine.value !== 0 ? 'opacity: 1' : 'opacity: 0.3'
    "
    class="game-status"
  >
    <p class="opened-card">
      Открыто карт <span class="count-opened"> {{ countVisibleCard }}</span
      ><span class="line">/</span><span class="total-chances">2</span>
    </p>
    <p class="timeline">
      {{
        timelineGame.secondsTimeLine.value < 10 &&
        timelineGame.secondsTimeLine.value > 0
          ? `00:0${timelineGame.secondsTimeLine.value}`
          : timelineGame.secondsTimeLine.value >= 10
          ? `00:${timelineGame.secondsTimeLine.value}`
          : timelineGame.secondsTimeLine.value === 0
          ? "01:00"
          : timelineGame.secondsTimeLine.value < 0
          ? `01:00`
          : "00:00"
      }}
    </p>
  </div>
  <div class="myProgress">
    <div
      ref="progressGame"
      :style="{ animationPlayState: !startedGame ? 'paused' : 'running' }"
    >
      <img
        :style="
          timelineGame.secondsTimeLine.value !== 0
            ? 'opacity: 1'
            : 'opacity: 0.3'
        "
        src="@/assets/svg/TimeLineProgress.png"
        class="myBar"
        alt=""
      />
    </div>
  </div>
  <div style="height: calc(100% - 150px)">
    <transition-group tag="section" class="game-board" name="shuffle-card">
      <Card
        v-for="card in cardList"
        :key="`${card.value}-${card.variant}`"
        :matched="card.matched"
        :value="card.value"
        :visible="card.visible"
        :position="card.position"
        :opened="card.opened"
        @select-card="selectCard"
      />
    </transition-group>
  </div>
  <ModalWindow
    btnName="Закрыть"
    v-if="isModalTimeEnded"
    @close="isModalTimeEnded = false"
  >
    <template v-slot:header>
      <img
        src="@/assets/svg/end-survey.svg"
        loading="lazy"
        class="header-end-image"
        alt=""
      />
      <p class="header-text">Ууууупс время истекло</p>
      <div class="border-header"></div>
    </template>
    <template v-slot:body>
      <p class="modal-body-content">Вы потеряли один шанс розыгрыша в игре.</p>
    </template>
    <template v-slot:footer></template>
  </ModalWindow>
</template>

<style lang="scss" scoped>
.game-status {
  padding: 0 20px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .opened-card {
    color: #fff;
    font-family: "Golos Text", sans-serif !important;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .count-opened {
    color: #fff;
    font-family: "Golos Text", sans-serif !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .line {
    color: #fff;
    font-family: "Golos Text", sans-serif !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .total-chances {
    color: #b3b7ce;
    font-family: "Golos Text", sans-serif !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .timeline {
    color: #b3b7ce;
    font-family: "Golos Text", sans-serif !important;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
.myProgress {
  height: 10px;
  width: auto;
  border-radius: 100px;
  background-color: #34353f;
  margin: 0 20px 15px;
  & .myBar {
    height: 10px;
    width: 100%;
    border-radius: 12px;
    margin-top: -10px;
  }
}
.myProgress .timeline-anim {
  width: 100%;
  height: 10px;
  clip-path: content-box;
  animation-name: progress;
  animation-timing-function: ease-in;
  animation-duration: 59s;
}
@keyframes progress {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
