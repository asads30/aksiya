import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import directives from "@/directives/index";
import "@/styles/main.scss";

const pinia = createPinia();
const app = createApp(App);
directives(app);
app.use(router).use(pinia).mount("#app");
