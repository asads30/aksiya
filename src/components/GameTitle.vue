<template>
  <div class="game-rules">
    <div v-ripple.click.500="'rgba(255, 255, 255, 0.35)'" class="prizes">
      <div>
        <img src="@/assets/svg/Prize.svg" draggable="false" alt="" />
        <p class="about-prize">О призах</p>
      </div>
    </div>
    <div
      v-ripple.click.500="'rgba(255, 255, 255, 0.35)'"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom"
      aria-controls="offcanvasBottom"
      class="rules"
    >
      <div>
        <button type="button" class="rule-game">Правила игры</button>
        <div></div>
      </div>
      <img draggable="false" src="@/assets/svg/Rules.svg" alt="" />
    </div>
  </div>
  <div class="title-game">
    <p>Найдите пару и получите приз</p>
  </div>
</template>

<style lang="scss" scoped>
.game-rules {
  padding: 0 20px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  & .prizes {
    display: flex;
    align-items: center;
    height: 37px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(15px);
    gap: 15px;
    transition: background 200ms;
    width: 100%;
    & div {
      height: 27px;
      stroke-width: 0.5px;
      stroke: #ffc62f;
      filter: drop-shadow(0px 2px 8px rgba(255, 198, 47, 0.5));
      display: flex;
      align-items: center;
      & img {
        padding-top: 2px;
      }
    }
    & .about-prize {
      color: #f7f7f7;
      text-align: center;
      white-space: nowrap;
      font-family: "Golos Text", sans-serif !important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      padding-left: 18px;
      padding-right: 15px;
      line-height: 20px;
    }
  }
  & .rules {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 37px;
    border-radius: 12px;
    width: 100%;
    transition: background 200ms;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(217, 217, 217, 0.1) center;
    box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(15px);
    & div {
      display: flex;
      align-items: center;
    }
    & .rule-game {
      all: unset;
      margin-left: 15px;
      color: #f7f7f7;
      white-space: nowrap;
      text-align: center;
      font-family: "Golos Text", sans-serif !important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    & img {
      padding-top: 2px;
      align-self: center;
    }
  }
}
.title-game {
  padding: 15px 20px;
  color: #fff;
  text-align: center;
  font-family: "Golos Text", sans-serif !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
  line-height: normal;
}

@media screen and (max-width: 375px) {
  .game-rules {
    & .prizes div img {
      width: 37px;
    }
    & .prizes .about-prize {
      padding-left: 2px;
      padding-right: 10px;
    }
    & .rules img {
      width: 37px;
    }
    .rules {
      .rule-game {
        margin-left: 13px;
      }
    }
  }
}
</style>

<script setup></script>
