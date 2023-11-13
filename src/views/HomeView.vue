<script setup>
import { getCookie } from "@/utilities/util";
import HeaderComponent from "@/components/ui/Header.vue";
import { computed, reactive } from "vue";
import { postMeUserData } from "@/services/app.api";
import { useAppStore } from "@/stores/AppStore";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { webSession } = storeToRefs(appStore);

const cookie = computed(() => getCookie("web-session"));
const data = reactive({
  web_session: cookie.value ? cookie.value : webSession.value,
  active: 1,
});
// const getUserInfo = () => {
//   return postMeUserData(`web_session=${cookie.value}`).then((response) => {
//     console.log(response);
//   });
// };

async function getUserInfo() {
  try {
    const response = await postMeUserData(data);
    console.log(response.data);
    appStore.setWebSession(response.data?.web_session);
  } catch (err) {
    console.log(err);
  }
}
getUserInfo();
// if (!store.state.questionsList?.length) {
//   store.dispatch("getQuestionsList", queryQuestionsList);
// }
</script>

<template>
  <div class="user-container">
    <HeaderComponent center-text=""></HeaderComponent>
    <div class="user-data">
      <img src="@/assets/svg/avatar.svg" draggable="false" alt="" />
      <div class="user-text">
        <p class="user-name">Ulugbek</p>
        <p>97 754 32 10</p>
      </div>
    </div>
    <p style="user-select: all" class="web-session">
      {{ getCookie("web-session") }}
    </p>
    <!--    <p style="user-select: all" class="web-session">-->
    <!--      {{ getCookie() }}-->
    <!--    </p>-->
    <div
      v-ripple.400="'rgba(80,79,79,0.35)'"
      @click="$router.push({ name: 'game' })"
      class="bottom-content"
    >
      <div class="text-bottom">
        <p class="attempts">5 попыток</p>
        <p class="start-game">
          Играть в игру
          <svg
            style="vertical-align: top"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.5312 4.02925C5.79155 3.7689 6.21366 3.7689 6.47401 4.02925L10.474 8.02925C10.7344 8.2896 10.7344 8.71171 10.474 8.97206L6.47401 12.9721C6.21366 13.2324 5.79155 13.2324 5.5312 12.9721C5.27085 12.7117 5.27085 12.2896 5.5312 12.0292L9.0598 8.50065L5.5312 4.97206C5.27085 4.71171 5.27085 4.2896 5.5312 4.02925Z"
              fill="black"
            />
          </svg>
        </p>
      </div>
      <div class="img-bottom">
        <img src="@/assets/svg/bottom.svg" draggable="false" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-container {
  padding: 20px;
  max-height: 100dvh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  & .user-data {
    display: flex;
    align-items: center;
    gap: 10px;
    & .user-text {
      color: #fff;
      font-family: "Golos Text", sans-serif !important;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & .user-name {
      padding-bottom: 3px;
    }
  }
  & .web-session {
    padding-top: 10px;
    color: #fff;
    font-family: "Golos Text", sans-serif !important;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .bottom-content {
    margin-top: auto;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    & .attempts {
      color: rgba(54, 56, 69, 0.6);
      font-family: "Golos Text", sans-serif !important;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & .start-game {
      font-family: "Golos Text", sans-serif !important;
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
    & .img-bottom {
      margin-top: -25px;
    }
  }
}
</style>
