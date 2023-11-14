<script setup>
import HeaderComponent from "@/components/ui/Header.vue";
</script>

<template>
  <div class="referall-header">
    <HeaderComponent
      :left="true"
      :right="false"
      :center="true"
      centerText="Реферальная система"
    />
  </div>
  <div class="referall">
    <div class="referall-info">
      <p class="text">
        Выделите и скопируйте промокод, чтобы поделиться с другом
      </p>
      <div class="referall-pole">
        <img src="@/assets/UsersRef.svg" alt="" />
        <p class="referall-code">RT1823FF</p>
        <div></div>
      </div>
      <div class="btn-referall">
        <button class="btn">Скопировать и пригласить</button>
      </div>
    </div>
  </div>
  <p class="history-referall">История приглашения</p>
  <div class="history-items-referall">
    <p class="date">21.07.2023</p>
    <div class="referall-data">
      <div class="referall-time">
        <img src="@/assets/circleCheck.svg" alt="" />
        <p class="time">14:01</p>
      </div>
      <div>
        <p class="telephone">+998 97 *** ** 10</p>
      </div>
      <p class="border-bottom"></p>
    </div>
  </div>
  <div class="history-items-referall">
    <p class="date">20.08.2023</p>
    <div class="referall-data">
      <div class="referall-time">
        <img src="@/assets/circleCheck.svg" alt="" />
        <p class="time">14:10</p>
      </div>
      <div>
        <p class="telephone">+998 96 *** ** 07</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.referall-header {
  max-height: 70px;
  height: 70px;
  overflow: hidden;
}
.referall {
  height: 174px;
  margin: 0 20px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(217, 217, 217, 0.1);
  box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
  backdrop-filter: blur(15px);
  & .text {
    color: #fff;
    font-family: "Golos Text", sans-serif !important;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%; /* 16.2px */
    letter-spacing: 0.5px;
    padding-bottom: 15px;
  }
  & .referall-pole {
    padding: 0 20px;
    height: 40px;
    border-radius: 6px;
    background: #392a8c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .referall-code {
      text-align: center;
      color: #fff;
      font-family: "Golos Text", sans-serif !important;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 2.4px;
    }
  }
  & .btn-referall {
    padding: 10px 0;
    & .btn {
      outline: none;
      border: none;
      height: 40px;
      border: 0;
      width: 100%;
      border-radius: 10px;
      background: #fff;
      font-family: Golos Text, sans-serif !important;
      color: #363845;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  & .history-referall {
    padding-top: 30px;
    color: #fff;
    font-family: Golos Text, sans-serif !important;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.history-referall {
  margin: 30px 20px 20px;
  color: #fff;
  font-family: Golos Text, sans-serif !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.history-items-referall {
  margin: 20px;
  & .date {
    color: #fff;
    font-family: Golos Text, sans-serif !important;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .referall-data {
    position: relative;
    width: 100%;
    height: 24px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .referall-time {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  & .border-bottom {
    position: absolute;
    top: 35px;
    right: 0;
    width: 70%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
  & .time {
    color: #fff;
    font-family: Golos Text, sans-serif !important;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .telephone {
    color: #fff;
    font-family: Golos Text, sans-serif !important;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 100% */
    letter-spacing: 0.16px;
  }
}
</style>
