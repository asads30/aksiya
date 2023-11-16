<template>
  <div class="start-container">
    <div style="height: 70px; max-height: 70px; overflow: hidden">
      <HeaderComponent center center-text="Акция 2.0"></HeaderComponent>
    </div>
    <div class="start-content">
      <div></div>
      <div class="start-prize">
        <img class="coin-1" src="@/assets/prize/coin.png" alt="" />
        <img class="money-1" src="@/assets/prize/money.svg" alt="" />
        <img class="money-2" src="@/assets/prize/money.svg" alt="" />
        <img class="coin-2" src="@/assets/prize/coin.png" alt="" />
        <img class="coin-3" src="@/assets/prize/coin.png" alt="" />
        <img class="coin-4" src="@/assets/prize/coin.png" alt="" />
        <p class="prize-text">CLICK РАЗЫГРЫВАЕТ</p>
        <p class="prize-sum">{{ [1000000000].toLocaleString() }}</p>
        <p class="valyuta" style="text-align: center; margin-top: -8px">
          сумов
        </p>
      </div>
      <div style="max-height: 27dvh; height: 27dvh">
        <div class="pushtab">
          <div class="container">
            <ul class="nav nav-tabs pushtab-nav" id="promoTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  @click="!getActiveTab.promo, activeTabSet('promo')"
                  :class="
                    getActiveTab.promo === true ? 'nav-link' : 'nav-link active'
                  "
                  id="promo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#promo-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="promo-tab-pane"
                  aria-selected="true"
                >
                  У меня есть промокод
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  @click="!getActiveTab.aksiya, activeTabSet('aksiya')"
                  :class="
                    getActiveTab.aksiya === false
                      ? 'nav-link'
                      : 'nav-link active'
                  "
                  id="aksiya-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#aksiya-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="aksiya-tab-pane"
                  aria-selected="false"
                >
                  Я самостоятельно узнал(а) об акции
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content" id="promoTabContent">
          <div
            :class="
              getActiveTab.promo === true
                ? 'tab-pane fade'
                : 'tab-pane fade show active'
            "
            id="promo-tab-pane"
            role="tabpanel"
            aria-labelledby="promo-tab"
            tabindex="0"
          >
            <div class="promo-wrapper">
              <div class="container">
                <p class="promo-text">
                  Введите промокод от друга, чтобы увеличить шансы на победу у
                  обоих!
                </p>
                <div v-for="i in 2" :key="i">
                  <div class="rules-promo">
                    <img src="@/assets/svg/check.svg" alt="" />
                    <p>возможность поиграть в игру</p>
                  </div>
                </div>
                <form ref="submitForm">
                  <input
                    class="promo-input"
                    :class="validCode.msg ? 'border-red' : 'border-green'"
                    type="text"
                    :pattern="/[A-Z0-9]/"
                    inputmode="text"
                    required
                    v-model="referallCode"
                    maxlength="8"
                    placeholder="Введите код приглашения"
                  />
                  <span
                    style="
                      color: red;
                      font-family: 'Golos Text', sans-serif !important;
                    "
                    v-if="validCode.msg"
                    >{{ validCode.msg }}</span
                  >
                </form>
              </div>
            </div>
          </div>
          <div
            :class="
              getActiveTab.aksiya === false
                ? 'tab-pane fade'
                : 'tab-pane fade show active'
            "
            id="aksiya-tab-pane"
            role="tabpanel"
            aria-labelledby="aksiya-tab"
            tabindex="0"
          >
            <div class="aksiya-wrapper">
              <div class="container">
                <p class="aksiya-text">После нажатия вы получите:</p>
                <div v-for="i in 2" :key="i">
                  <div class="rules-aksiya">
                    <img src="@/assets/svg/check.svg" alt="" />
                    <p>возможность поиграть в игру</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offerta container">
        <p class="text-offerta">
          Нажимая кнопку Участвовать в акции, вы соглашаетесь
          <span>с условиями</span> акции «ID марафон»
        </p>
        <div class="btn-game">
          <button
            v-ripple.click.500="'rgba(255, 255, 255, 0.35)'"
            v-if="isPromoTab"
            :disabled="validCode.disabled"
            @click="sendRequestCode"
            :class="validCode.disabled ? 'btn-disabled' : 'btn-active'"
          >
            Участвовать
          </button>
          <button
            v-ripple.click.500="'rgba(255, 255, 255, 0.35)'"
            v-else
            @click="sendAksiyaAccept"
            class="btn-active"
          >
            Участвовать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.start-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("@/assets/StartPage.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  & .start-content {
    height: calc(100dvh - 70px);
    max-height: calc(100dvh - 70px);
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    & .coin-1 {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 5%;
      left: 2%;
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
      top: 93%;
      left: 45%;
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
      top: -50px;
      left: 50%;
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
      top: 90%;
      left: 15%;
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
      top: -20px;
      right: 6%;
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
    & .coin-4 {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 80%;
      left: 82%;
      bottom: 50px;
      animation: Coin4 6s linear infinite;
    }
    @keyframes Coin4 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(1turn);
      }
    }
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .start-prize {
      position: relative;
      padding: 0 20px 10px;
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
    .pushtab {
      &-top {
        padding-bottom: 8px;
      }
      &-nav {
        width: 100%;
        border-radius: 12px;
        background: rgba(217, 217, 217, 0.1);
        display: flex;
        border: 0;
        .nav-item {
          width: 50%;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          .nav-link {
            height: 44px;
            width: 90%;
            padding: 5px;
            border: 0;
            color: #fff;
            white-space: break-spaces;
            text-align: center;
            font-family: Golos Text, sans-serif !important;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          .nav-link.active {
            height: 44px;
            padding: 5px;
            color: #363845;
            text-align: center;
            font-family: Golos Text, sans-serif !important;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            border-radius: 7px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            background: #fcfe5d;
          }
        }
      }
    }
    .promo-wrapper {
      padding-top: 8px;
      & .promo-text {
        color: #fff;
        font-family: Golos Text, sans-serif !important;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 135%;
      }
      & .rules-promo {
        padding-top: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        & p {
          color: #fff;
          font-family: Golos Text, sans-serif !important;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 135%;
        }
      }
      & .promo-input {
        margin-top: 16px;
        width: 100%;
        height: 40px;
        padding: 10px;
        border-radius: 10px;
        background: #e2e4f0;
        border: 1px solid rgba(255, 255, 255, 0.5);
        text-align: center;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--Main_background_color_dark, #242429);
        font-family: Golos Text, sans-serif !important;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2px;
      }
      .promo-input:focus.border-green {
        border: 1px solid #0073ff;
      }
      .promo-input.border-red {
        border: 1px solid #ff706f;
      }
      .promo-input::placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-top: -15px;
        font-size: 14px;
      }
    }
    .aksiya-wrapper {
      padding-top: 8px;
      & .aksiya-text {
        color: #fff;
        font-family: Golos Text, sans-serif !important;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 135%;
      }
      & .rules-aksiya {
        padding-top: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        & p {
          color: #fff;
          font-family: Golos Text, sans-serif !important;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 135%;
        }
      }
    }
    & .offerta {
      padding-top: 20px;
      width: 100%;
      & .text-offerta {
        color: #fff;
        text-align: center;
        font-family: Golos Text, sans-serif !important;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      & span {
        color: #fff;
        font-family: Golos Text, sans-serif !important;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
      }
    }
    .btn-game {
      padding: 10px 0 15px;
      & .btn-active {
        font-family: Golos Text, sans-serif !important;
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
        line-height: 50px;
        border: 0;
        width: 100%;
        color: #575965;
        text-align: center;
        font-family: Golos Text, sans-serif !important;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .start-container {
    & .start-content {
      & .start-prize {
        padding: 30px 20px 10px;
      }
    }
  }
}
@media screen and (max-width: 280px) {
  .start-container {
    & .start-content {
      & .start-prize {
        & .prize-sum {
          font-size: 30px;
        }
      }
    }
  }
}
</style>

<script setup>
import HeaderComponent from "@/components/ui/Header.vue";
import { reactive, ref, watch } from "vue";
import { useAppStore } from "@/stores/AppStore";

const appStore = useAppStore();

const submitForm = ref(null);
const isPromoTab = ref(true);
const getActiveTab = reactive({
  promo: false,
  aksiya: false,
});
const activeTabSet = (nameTab) => {
  isPromoTab.value = nameTab === "promo";
};
const referallCode = ref(null);

const validCode = reactive({
  msg: null,
  disabled: true,
});

watch(referallCode, (value) => {
  validateCode(value);
});

const sendAksiyaAccept = async () => {
  const data = {
    web_session: appStore.webSession,
    activate: 1,
  };
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };
  let response = await fetch("/api/getMe", request);
  console.log(response.json);
};

const sendRequestCode = async () => {
  const data = {
    web_session: appStore.webSession,
    activate: 1,
    username: referallCode.value.toUpperCase(),
  };
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };
  let response = await fetch("/api/getMe", request);
  console.log(response.json);
};
const validateCode = (value) => {
  if (!/[A-Z0-9]/.test(value)) {
    validCode.msg = "Invalid Format Referall Code";
    validCode.disabled = false;
  } else if (value.length < 8) {
    validCode.msg = "Invalid Length Code";
    validCode.disabled = true;
  } else {
    validCode.msg = "";
    validCode.disabled = false;
    // sendRequestCode();
  }
};
</script>
