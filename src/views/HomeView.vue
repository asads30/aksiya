<template>
  <div class="home page">
    <HeaderComponent center center-text="Акция"></HeaderComponent>
    <div class="main">
      <div class="top">
        <div class="home-top">
          <router-link to="/" class="home-user">
            <div class="home-user-img">
              <img src="@/assets/user.svg" alt="" />
            </div>
            <div class="home-user-text">
              <div class="home-user-name">
                <span>Ulugbek</span>
                <div class="home-user-more">
                  <img src="@/assets/next.svg" alt="" />
                </div>
              </div>
              <div class="home-user-profile">Профиль</div>
            </div>
          </router-link>
          <div class="home-top-right">
            <div class="home-about">
              <img src="@/assets/info.svg" alt="" />
              <span>Об акции</span>
            </div>
            <div class="home-about">
              <img src="@/assets/gift.svg" alt="" />
              <span>Мои призы</span>
            </div>
          </div>
        </div>
        <div class="home-info">
          <div class="home-chance">
            <p style="user-select: all; color: white">
              {{ getCookie() }}
            </p>
            <div class="home-chance-icon">⭐️</div>
            <div class="home-chance-text">
              <div class="home-chance-number">144</div>
              <div class="home-chance-des">Мои шансы</div>
            </div>
          </div>
          <div class="home-chance">
            <div class="home-chance-icon">😎</div>
            <div class="home-chance-text">
              <div class="home-chance-number">1225</div>
              <div class="home-chance-des">Я пригласил</div>
            </div>
          </div>
        </div>
        <div class="home-task">
          <div class="home-task-left">
            <div class="home-task-icon">💪</div>
            <div class="home-task-text">
              <div class="home-task-number">2/<span>4</span></div>
              <div class="home-task-name">Задания</div>
            </div>
          </div>
          <div class="home-task-progress">
            <div class="home-task-progress-title">Выполнено 50%</div>
            <div
              class="progress home-progress"
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
        <div class="home-win">
          <div class="home-win-date">30.11.2023 — 30.01.2024</div>
          <div class="home-win-title">Click разыгрывает</div>
          <div class="home-win-total">3 000 000 000</div>
          <div class="home-win-curr">сумов</div>
          <button class="home-win-btn">Узнать подробнее</button>
        </div>
        <div class="home-result">
          <div class="home-result-top">
            <div class="home-result-step">1 этап</div>
            <div class="home-result-date">30.11.2023 — 05.05.2024</div>
          </div>
          <div class="home-result-prizes">
            <div class="home-result-prize">
              <div class="home-result-prize-title">Приз</div>
              <div class="home-result-prize-num">
                50 000 000 <span>сумов</span>
              </div>
            </div>
            <div class="home-result-prize right">
              <div class="home-result-prize-title">
                Наберем 400 000 участников
              </div>
              <div class="home-result-prize-num">
                100 000 000 <span>сумов</span>
              </div>
            </div>
          </div>
          <div class="home-result-progress">
            <div class="home-result-progressinfo">
              <div class="home-result-progressinfo-icon">😎</div>
              <div class="home-result-progressinfo-num">200 000</div>
            </div>
            <div
              class="progress home-result-progressbar"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar home-result-progress-bar"
                style="width: 50%"
              >
                (50%)
              </div>
            </div>
            <div class="home-result-progress-box">
              <div class="home-result-progress-left">
                Участников <span>200 000</span>
              </div>
              <div class="home-result-progress-right">
                Цель <span>400 000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-ripple.click.400="'rgba(47,47,47,0.35)'" class="bottom">
        <button class="play" @click="goGame">
          <div class="play-left">
            <div class="play-left-title">Играть</div>
            <div class="play-left-chance">
              <img src="@/assets/chance.svg" alt="" />
              <span>158</span>
            </div>
          </div>
          <div class="play-img">
            <img src="@/assets/play.png" alt="" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 79px);
  max-height: calc(100vh - 79px);
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    height: calc(100vh - 179px);
    max-height: calc(100vh - 179px);
  }
}
.home {
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
    &-number {
      font-size: 16px;
      font-weight: 600;
    }
    &-des {
      font-size: 10px;
      color: #d3d6e9;
    }
  }
  &-task {
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
    border-radius: 12px;
    border: 1px solid #fbfe5e;
    background: rgba(217, 217, 217, 0.1);
    box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(15px);
    margin-top: 20px;
    margin-left: -20px;
    width: calc(100% + 40px);
    padding: 32px 0 16px;
    text-align: center;
    position: relative;
    &-date {
      font-size: 10px;
      font-weight: 600;
      color: #363845;
      padding: 3px 20px 4px;
      border-radius: 0px 0px 8px 8px;
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
      border-radius: 12px 0px;
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
    &-progressbar {
      --bs-progress-height: 16px;
      --bs-progress-bg: #242429;
      border-radius: 6px;
      --bs-progress-bar-color: #101025;
      --bs-progress-bar-bg: #fcfe5d;
      margin-bottom: 4px;
      position: relative;
    }
    &-progressinfo {
      border-radius: 8px;
      background: #fcfe5d;
      padding: 4px 8px;
      position: absolute;
      right: calc(50% - 47px);
      display: flex;
      gap: 4px;
      bottom: 55px;
      &-icon {
        font-size: 14px;
      }
      &-num {
        font-size: 14px;
        color: #242429;
        font-weight: 700;
      }
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-top: 10px solid #fcfe5d;
        bottom: -8px;
        left: calc(50% - 8px);
      }
    }
  }
}
.play {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: #fff;
  box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
  backdrop-filter: blur(15px);
  padding: 0 20px;
  height: 50px;
  &-left {
    display: flex;
    align-items: center;
    gap: 10px;
    &-title {
      font-size: 16px;
      color: #363845;
      font-weight: 700;
    }
    &-chance {
      border-radius: 6px;
      background: #392a8c;
      display: flex;
      gap: 5px;
      padding: 8px;
      span {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  &-img {
    margin-bottom: 40px;
  }
}
</style>

<script setup>
import { getCookie } from "@/utilities/util";
import HeaderComponent from "@/components/ui/Header.vue";
import { computed, reactive } from "vue";
import { getMeUserData } from "@/services/app.api";
import { useAppStore } from "@/stores/AppStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const { webSession } = storeToRefs(appStore);

const cookie = computed(() => getCookie("web-session"));
const data = reactive({
  web_session: cookie.value ? cookie.value : webSession.value,
  active: 1,
});

const router = useRouter();

async function getUserInfo() {
  try {
    const response = await getMeUserData(data);
    console.log(response.data);
    appStore.setWebSession(response.data?.web_session);
  } catch (err) {
    console.log(err);
  }
}
function goGame() {
  router.push("game");
}
getUserInfo();
</script>
