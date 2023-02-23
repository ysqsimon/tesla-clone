import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
// Vuetify
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import OrderButton from "@/components/OrderButton.vue";
import OrderButton2 from "@/components/OrderButton2.vue";
import Swiper from "@/components/Swiper.vue";

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify();

app.use(pinia);
app.use(router);
app.use(MotionPlugin, {
  directives: {
    default: {
      initial: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 500,
        },
      },
    },
  },
});
app.use(vuetify);

app.component("OrderButton", OrderButton);
app.component("OrderButton2", OrderButton2);
app.component("Swiper", Swiper);
app.mount("#app");
