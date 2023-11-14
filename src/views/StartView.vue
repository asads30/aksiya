<template>
  <div class="start-container">
    <div style="height: 70px; max-height: 70px; overflow: hidden">
      <HeaderComponent center center-text="Акция 2.0"></HeaderComponent>
    </div>
    <div class="start-content">
      <div class="start-prize">
        <p class="prize-text">CLICK РАЗЫГРЫВАЕТ</p>
        <p class="prize-sum">{{ [3000000000].toLocaleString() }}</p>
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
                  @click="!getActiveTab"
                  :class="
                    getActiveTab === true ? 'nav-link' : 'nav-link active'
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
                  @click="!getActiveTab"
                  :class="
                    getActiveTab === false ? 'nav-link' : 'nav-link active'
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
              getActiveTab === true
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
                <form>
                  <input
                    class="promo-input"
                    type="text"
                    inputmode="text"
                    pattern="/^[A-Z0-9]*$/"
                    required
                    minlength="5"
                    maxlength="8"
                    placeholder=""
                  />
                </form>
              </div>
            </div>
          </div>
          <div
            :class="
              getActiveTab === false
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
          <button class="btn-active">Участвовать</button>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("@/assets/StartPage.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  & .start-content {
    max-height: calc(100dvh - 70px);
    height: calc(100dvh - 70px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .start-prize {
      padding: 100px 20px 10px;
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
            height: 54px;
            width: 90%;
            border: 0;
            padding: 0;
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
      //.promo-input:required {
      //  border: 1px solid #ff706f;
      //}
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
        height: 40px;
        line-height: 40px;
        border: 0;
        width: 100%;
        color: #ffffff;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
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
</style>

<script setup>
import HeaderComponent from "@/components/ui/Header.vue";
import { ref } from "vue";

const getActiveTab = ref(true);

// const errorData = (event) => {
//   console.log(event);
// };
</script>
