<template>
  <div class="guest">
    <HeaderComponent center center-text="Акция"></HeaderComponent>
    <div class="main">
      <div class="top">
        <div class="guest-top">
          <router-link to="/" class="guest-user">
            <div class="guest-user-img">
              <img src="@/assets/user.svg" alt="" />
            </div>
            <div class="guest-user-text">
              <div class="guest-user-name">
                <span>Ulugbek</span>
                <div class="guest-user-more">
                  <img src="@/assets/next.svg" alt="" />
                </div>
              </div>
              <div class="guest-user-profile">Профиль</div>
            </div>
          </router-link>
          <div class="guest-top-right">
            <div class="guest-about">
              <img src="@/assets/info.svg" alt="" />
              <span>Об акции</span>
            </div>
            <div class="guest-about">
              <img src="@/assets/gift.svg" alt="" />
              <span>Мои призы</span>
            </div>
          </div>
        </div>
        <div class="guest-info">
          <div class="guest-chance">
            <div class="guest-chance-icon">⭐️</div>
            <div class="guest-chance-text">
              <div class="guest-chance-des">Мои шансы</div>
            </div>
          </div>
          <div class="guest-chance">
            <div class="guest-chance-icon">😎</div>
            <div class="guest-chance-text">
              <div class="guest-chance-des">Я пригласил</div>
            </div>
          </div>
        </div>
        <div class="guest-task">
          <div class="guest-task-left">
            <div class="guest-task-icon">💪</div>
            <div class="guest-task-text">
              <div class="guest-task-name">Задания</div>
            </div>
          </div>
          <div class="guest-task-progress">
            <div class="guest-task-progress-title">Выполнено 50%</div>
            <div
              class="progress guest-progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>
        </div>
        <div class="guest-win">
          <img class="coin-1" src="@/assets/prize/coin.png" alt="" />
          <img class="money-1" src="@/assets/prize/money.svg" alt="" />
          <img class="money-2" src="@/assets/prize/money.svg" alt="" />
          <img class="coin-2" src="@/assets/prize/coin.png" alt="" />
          <img class="coin-3" src="@/assets/prize/coin.png" alt="" />
          <div class="guest-win-date">30.11.2023 — 30.01.2024</div>
          <div class="guest-win-title">Click разыгрывает</div>
          <div class="guest-win-total">1 000 000 000</div>
          <div class="guest-win-curr">сумов</div>
          <button class="guest-win-btn">Узнать подробнее</button>
        </div>
      </div>
      <div class="attention-banner">
        <p class="text">Внимание!!!</p>
        <p class="border-bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="264"
            height="2"
            viewBox="0 0 264 2"
            fill="none"
          >
            <path d="M0 0.865234H264" stroke="#D9D9D9" stroke-opacity="0.1" />
          </svg>
        </p>
        <p class="attention-description">
          Уважаемый пользователь вы пока не являетесь участником акции, для того
          чтобы стать участником, сделайте перевод между картами на сумму
          <span class="sum"> 100 000 сумов</span>
        </p>
        <div class="money-transfer">
          <p class="text-transfer">Сделать перевод</p>
          <img class="img-transfer" src="@/assets/svg/transfer.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: calc(100dvh - 79px);
  max-height: calc(100dvh - 79px);
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
}
.guest {
  background: url(../assets/home_bg.jpg) 100% no-repeat;
  background-size: cover;
  background-position: left top;

  &-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    &-right {
      display: flex;
      gap: 15px;
    }
  }

  &-user {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #fff;

    &-name {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      gap: 9px;
    }

    &-profile {
      font-size: 10px;
    }

    &-img {
      img {
        width: 42px;
        height: 42px;
      }
    }
  }

  &-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;

    img {
      width: 24px;
      height: 24px;
    }

    span {
      font-size: 10px;
      color: #fff;
    }
  }

  &-info {
    opacity: 0.3;
    display: flex;
    gap: 4px;
  }

  &-chance {
    width: 100%;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    padding: 8px 10px;
    gap: 6px;
    color: #fff;
    &-icon {
      font-size: 24px;
    }
    &-des {
      font-size: 10px;
      color: #d3d6e9;
    }
  }

  &-task {
    opacity: 0.2;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 10px;
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 10px;

    &-left {
      display: flex;
      align-items: center;
    }

    &-icon {
      font-size: 24px;
      margin-right: 6px;
    }

    &-number {
      font-size: 16px;
      font-weight: 600;
      color: #fff;

      span {
        color: rgba(255, 255, 255, 0.35);
      }
    }

    &-name {
      font-size: 10px;
      color: #d3d6e9;
    }

    &-progress {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: calc(100% - 81.75px);

      &-title {
        font-size: 10px;
        color: #fff;
        font-weight: 600;
      }
    }
  }

  &-progress {
    width: 100%;
    --bs-progress-height: 4px;
    border-radius: 90px;
    --bs-progress-bg: #242429;

    .progress-bar {
      background: #8fff0e;
    }
  }

  &-win {
    position: relative;
    border-radius: 12px;
    border: 1px solid #fbfe5e;
    background: rgba(217, 217, 217, 0.1);
    box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(15px);
    margin-top: 29px;
    margin-left: -20px;
    width: calc(100% + 40px);
    padding: 32px 0 16px;
    text-align: center;
    & .coin-1 {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 5px;
      left: 0;
      animation: Coin1 6s linear infinite;
    }
    @keyframes Coin1 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(1turn);
      }
    }
    & .money-1 {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 5px;
      right: 10px;
      animation: Money1 10s linear infinite reverse;
    }
    @keyframes Money1 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(1turn);
      }
    }
    & .money-2 {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 10px;
      bottom: 50px;
      animation: Money2 10s linear infinite reverse;
    }
    @keyframes Money2 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(1turn);
      }
    }
    & .coin-2 {
      width: 50px;
      height: 50px;
      position: absolute;
      bottom: 45px;
      right: 10px;
      animation: Coin2 6s linear infinite;
    }
    @keyframes Coin2 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(1turn);
      }
    }
    & .coin-3 {
      width: 50px;
      height: 50px;
      position: absolute;
      bottom: 40px;
      left: 100px;
      animation: Coin3 6s linear infinite;
    }
    @keyframes Coin3 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(1turn);
      }
    }
    &-date {
      font-size: 10px;
      font-weight: 600;
      color: #363845;
      padding: 3px 20px 4px;
      border-radius: 0 0 8px 8px;
      background: #fcfe5d;
      width: max-content;
      position: absolute;
      left: calc(50% - 80.12px);
      top: 0;
    }

    &-title {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }

    &-total {
      font-size: 40px;
      color: #fcfe5d;
      line-height: 54px;
      font-family: "Abril Fatface", serif;
      text-transform: uppercase;
    }

    &-curr {
      font-size: 12px;
      color: #fff;
      margin-top: -5px;
      margin-bottom: 20px;
    }

    &-btn {
      width: calc(100% - 40px);
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      color: #d3d6e9;
      text-align: center;
      border: 0;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &-result {
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(217, 217, 217, 0.1);
    box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(15px);
    margin: 20px 0;

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }

    &-step {
      border-radius: 12px 0;
      background: #fff;
      height: 28px;
      line-height: 28px;
      padding: 0 25px;
      font-size: 16px;
      font-weight: 700;
    }

    &-date {
      font-size: 10px;
      color: #fff;
      padding-right: 10px;
    }

    &-prizes {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      margin-bottom: 10px;
    }

    &-prize {
      display: flex;
      flex-direction: column;

      &-title {
        font-size: 10px;
        font-weight: 500;
        color: #d3d6e9;
        margin-bottom: 3px;
      }

      &-num {
        font-size: 14px;
        font-weight: 700;
        color: #fcfe5d;

        span {
          color: #fff;
        }
      }
    }

    &-prize.right {
      text-align: right;
    }

    &-progress {
      padding: 40px 10px 10px;
      position: relative;

      &-box {
        display: flex;
        justify-content: space-between;
      }

      &-left {
        font-size: 10px;
        color: #d3d6e9;

        span {
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }
      }

      &-right {
        font-size: 10px;
        color: #d3d6e9;

        span {
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }
      }
    }
  }
  & .attention-banner {
    margin-top: 35px;
    display: flex;
    padding: 25px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(217, 217, 217, 0.1);
    box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(15px);
    & .text {
      color: #fff;
      text-align: center;
      font-family: Golos Text, sans-serif !important;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & .border-bottom {
      width: 100%;
      margin-top: -15px;
    }
    & .attention-description {
      color: #d3d6e9;
      text-align: center;
      font-family: Golos Text, sans-serif !important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 135%;
      & span {
        color: #fcfe5d;
        font-family: Golos Text, sans-serif !important;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 135%;
      }
    }
    & .money-transfer {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 40.268px;
      border-radius: 10px;
      gap: 9px;
      background: var(--Yellow, #fcfe5d);
    }
    //& .img-transfer {
    //  position: absolute;
    //  top: 10px;
    //  right: 60px;
    //}
  }
}
</style>
<script setup>
import HeaderComponent from "@/components/ui/Header.vue";
</script>
