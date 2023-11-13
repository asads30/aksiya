<template>
  <div class="start-container">
    <div style="height: 70px; max-height: 70px; overflow: hidden">
      <HeaderComponent center center-text="Акция 2.0"></HeaderComponent>
    </div>
    <div class="start-prize">
      <div>
        <p class="prize-text">CLICK РАЗЫГРЫВАЕТ</p>
        <p class="prize-sum">{{ [3000000000].toLocaleString() }}</p>
        <p class="valyuta" style="text-align: center">сумов</p>
      </div>
      <div class="prizes-tabs">
        <ul class="nav nav-tabs" id="prizesTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click="!getActiveTab"
              :class="getActiveTab === true ? 'nav-link' : 'nav-link active'"
              id="prizes-tab"
              data-bs-toggle="tab"
              data-bs-target="#prizes-tab-pane"
              type="button"
              role="tab"
              aria-controls="prizes-tab-pane"
              aria-selected="true"
            >
              У меня есть промокод
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click="!getActiveTab"
              :class="getActiveTab === false ? 'nav-link' : 'nav-link active'"
              id="chances-tab"
              data-bs-toggle="tab"
              data-bs-target="#chances-tab-pane"
              type="button"
              role="tab"
              aria-controls="chances-tab-pane"
              aria-selected="false"
            >
              Я самостоятельно узнал(а) об акции
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-content" id="prizesTabContent">
      <div
        :class="
          getActiveTab === true ? 'tab-pane fade' : 'tab-pane fade show active'
        "
        id="prizes-tab-pane"
        role="tabpanel"
        aria-labelledby="prizes-tab"
        tabindex="0"
      >
        <div class="prizes-wrapper">
          <div class="container">
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
      <div
        :class="
          getActiveTab === false ? 'tab-pane fade' : 'tab-pane fade show active'
        "
        id="chances-tab-pane"
        role="tabpanel"
        aria-labelledby="chances-tab"
        tabindex="0"
      >
        <div class="prizes-wrapper">
          <div class="container">
            <div class="prizes-list">
              <p>Loremdkivmdk sdovsdmvo</p>
              <!--              <Chance-->
              <!--                v-for="item in getPrizesChances?.data"-->
              <!--                :key="item.id"-->
              <!--                :background="item.prize.background"-->
              <!--                :text="item.prize.name_ru"-->
              <!--                :textEN="item.prize.name_en"-->
              <!--                :textUZ="item.prize.name_uz"-->
              <!--                :img="item.prize.photo"-->
              <!--                :id="item.id"-->
              <!--                @click="sendEventChanceItem(item)"-->
              <!--              />-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.start-container {
  height: 100dvh;
  max-height: 100dvh;
  width: 100%;
  background-image: url("@/assets/StartPage.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
  & .start-prize {
    padding: 103px 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
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
      color: #fcfe5d;
      text-align: center;
      font-family: "Abril Fatface", serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
    }
    & .valyuta {
      color: #fff;
      text-align: center;
      font-family: Golos Text, sans-serif !important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
.nav-tabs > li.nav-item > a,
.nav-tabs > li.active > a:focus,
.nav-tabs > li.active > a:hover {
  border: 0;
  background-color: #fff;
}
.prizes-tabs {
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(217, 217, 217, 0.1);
  display: flex;
  align-items: center;
  height: 54px;
  margin-bottom: 8px;
  flex-wrap: nowrap;
  .nav-item {
    border-radius: 7px;
    width: 50%;
    .nav-link {
      background: rgba(255, 255, 255, 0.12);
      width: 100%;
      border-radius: 0;
      font-size: 12px;
      color: var(--text);
      border: 0;
      &.active {
        height: 44px;
        border-radius: 7px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: var(--Yellow, #fcfe5d);
        color: #fff;
      }
    }
    &:first-child {
      .nav-link {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
    &:last-child {
      .nav-link {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
}
</style>

<script setup>
import HeaderComponent from "@/components/ui/Header.vue";
import { ref } from "vue";

const getActiveTab = ref(true);
</script>
