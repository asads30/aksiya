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
      v-ripple.click.500="'rgba(255, 255, 255, 0.35)'"
      :disabled="!gameStore.newPlayer"
      :class="!gameStore.newPlayer ? 'btn-disabled' : 'btn-active'"
    >
      Начать игру
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-game {
  padding: 20px;
  & .btn-active {
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #0073ff;
    height: 50px;
    line-height: 50px;
    border: 0;
    width: 100%;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
  & .btn-disabled {
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #2c2d35;
    height: 50px;
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
