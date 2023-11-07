<template>
  <div class="header">
    <div class="container">
      <div class="header-left">
        <router-link :to="leftLink ? leftLink : '/'" v-if="left" class="header-left-link"
          ><img src="@/assets/svg/back.svg" alt=""
        /></router-link>
      </div>
      <div class="header-center">
        <div v-if="center" class="header-center-text">{{ centerText }}</div>
      </div>
      <div class="header-right"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderComponent',
    inheritAttrs: false,
    customOptions: {},
  };
</script>

<script setup>
  defineProps({
    left: {
      type: Boolean,
    },
    leftLink: {
      type: String,
    },
    center: {
      type: Boolean,
    },
    centerText: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .header {
    padding: 30px 0 20px;
    .container {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-left {
      display: flex;
      align-items: center;
      width: 20px;
      &-link {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      width: 20px;
      &-link {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .header-center {
      width: calc(100% - 40px);
      display: flex;
      text-align: center;
      justify-content: center;
      &-text {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        line-height: 20px;
      }
    }
  }
</style>
