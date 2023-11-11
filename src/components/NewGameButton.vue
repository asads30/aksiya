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
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #0073ff;
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
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #2c2d35;
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
