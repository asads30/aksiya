<template>
  <div class="aheader">
    <div class="container">
      <div class="header-left">
        <router-link v-if="left && leftText" to>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="black"
            v-if="color === 'black'"
          >
            <path
              d="M8.00004 14.6668L1.33337 8.00016L8.00004 1.3335"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-else
          >
            <path
              d="M8.00004 14.6668L1.33337 8.00016L8.00004 1.3335"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
        <router-link v-if="left && !leftText" to>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00004 14.6668L1.33337 8.00016L8.00004 1.3335"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
      <div class="header-center">
        <div
          v-if="center"
          class="header-center-text"
          :style="color === 'black' ? 'color: #000;' : ''"
        >
          {{ centerText }}
        </div>
      </div>
      <div class="header-right">
        <div v-if="right" class="header-right-text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
defineProps({
  left: {
    type: Boolean,
  },
  leftText: {
    type: String,
  },
  center: {
    type: Boolean,
  },
  centerText: { type: String, required: true },
  right: { type: Boolean },
  rightText: { type: String },
  color: { type: String },
});
</script>

<style lang="scss" scoped>
.aheader {
  padding: 30px 5px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-left {
      a {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
        justify-content: center;
        svg {
          path {
            stroke: #ffffff;
          }
        }
        svg.black {
          path {
            stroke: #ffffff;
          }
        }
      }
    }
    .header-center {
      .header-center-text {
        color: #fff;
        text-align: center;
        font-family: "Golos Text", sans-serif !important;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      width: 10px;
      .header-right-text {
        text-align: right;
        justify-content: flex-end;
      }
      button {
        background: none;
        padding: 0;
        border: 0;
      }
    }
  }
}
</style>
