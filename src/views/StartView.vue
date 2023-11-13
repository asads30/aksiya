<template>
  <div style="max-height: 70px; height: 70dvh; overflow: hidden">
    <HeaderComponent center center-text="Акция 2.0"></HeaderComponent>
  </div>
  <div class="start-container">
    <div class="start-prize">
      <!--      <img src="@/assets/PrizeAnimation.svg" alt="" />-->
      <p class="prize-text">CLICK РАЗЫГРЫВАЕТ</p>
      <p class="prize-sum">{{ [3000000000].toLocaleString() }}</p>
      <p style="text-align: center">сумов</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.start-container {
  max-height: calc(100dvh - 70px);
  height: calc(100dvh - 70px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  & .start-prize {
    padding-top: 30px;
    & .prize-text {
      color: #fff;
      text-align: center;
      font-family: Golos Text, sans-serif !important;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }
    & .prize-sum {
      color: var(--Yellow, #fcfe5d);
      text-align: center;
      font-family: "Abril Fatface", serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
    }
  }
}
</style>

<script setup>
import HeaderComponent from "@/components/ui/Header.vue";
</script>
