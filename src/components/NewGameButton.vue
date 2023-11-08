<script setup>
import { useGameStore } from "@/stores/GameStore.js";

const gameStore = useGameStore();

const startGame = () => {
  gameStore.startCountDown();
};
</script>

<template>
  <div class="btn-game">
    <button
      @click.once="startGame"
      :disabled="!gameStore.newPlayer"
      :class="!gameStore.newPlayer ? 'btn-disabled' : 'btn-active'"
    >
      Начать игру
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-game {
  padding: 0 20px 15px;
  & .btn-active {
    border-radius: 10px;
    background: linear-gradient(0deg, #0073ff 0%, #00c2ff 100%), #fff;
    height: 40px;
    line-height: 40px;
    border: 0;
    width: 100%;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
  & .btn-disabled {
    border-radius: 10px;
    background: #2c2d35;
    height: 40px;
    border: 0;
    width: 100%;
    color: #575965;
    text-align: center;
    font-family: Golos Text, sans-serif !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
</style>
