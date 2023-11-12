import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import directives from "@/directives/index";
import "@/styles/main.scss";
import Ripple from "vue3-whr-ripple-directive/src/ripple";

const pinia = createPinia();
const app = createApp(App);
app.directive("ripple", Ripple);
directives(app);
app.use(router).use(pinia).mount("#app");
