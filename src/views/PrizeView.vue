<template>
  <div class="header">
    <HeaderComponent center center-text="Ваш приз"></HeaderComponent>
  </div>
  <div class="winners-container">
    <div>
      <p class="winner-title">Поздравляем, вы выиграли!</p>
      <p class="winner-prize">{{ winPrizeData?.value }}</p>
    </div>
    <div style="position: relative; z-index: 1000" class="img-prize">
      <img
        :srcset="`/images/${winPrizeData?.value}@2x.png 2x, /images/${winPrizeData?.value}.png 1x`"
        :src="`/images/${winPrizeData?.value}.png`"
        :alt="winPrizeData?.value"
      />
    </div>
    <img
      class="prize-animation"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -415px;
        margin-left: -470px;
      "
      src="@/assets/PrizeAnimation.svg"
      alt=""
    />
    <div class="btn-prize">
      <button class="btn">Получить награду</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  max-height: 70px;
  height: 70px;
  overflow: hidden;
}
.winners-container {
  width: 100%;
  height: calc(100dvh - 70px);
  max-height: calc(100dvh - 70px);
  overflow: hidden;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & div {
    width: 100%;
    padding: 0 20px;
  }
  & .winner-title {
    color: #fff;
    text-align: center;
    font-family: Golos Text, sans-serif !important;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 9px;
  }
  & .winner-prize {
    color: #fff;
    white-space: break-spaces;
    text-align: center;
    font-family: Golos Text, sans-serif !important;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  & .img-prize {
    align-self: center;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  & .btn-prize {
    width: 100%;
    padding: 0 20px 15px;
    & .btn {
      outline: none;
      border: none;
      height: 40px;
      border: 0;
      width: 100%;
      border-radius: 10px;
      background: #fff;
      color: #363845;
      text-align: center;
      font-family: Golos Text, sans-serif !important;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  & .prize-animation {
    animation-name: example;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes example {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>

<script setup>
import HeaderComponent from "@/components/ui/Header.vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "@/stores/GameStore";
import { computed, onMounted } from "vue";
import { launchConfetti } from "@/utilities/confetti";

const gameStore = useGameStore();
const { cardList } = storeToRefs(gameStore);

const winPrizeData = computed(() => {
  return cardList.value?.find((prize) => prize.visible === true);
});

onMounted(() => {
  launchConfetti();
});
</script>
