import { defineStore, acceptHMRUpdate } from "pinia";
import data from "@/data.js";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    locale: "ch",
    textData: data,
  }),
  getters: {
    getImgUrl: (state) => (imgName) => {
      return new URL(`/src/assets/img/${imgName}.jpg`, import.meta.url).href;
    },
  },
  actions: {
    setLocale() {
      this.locale = "en";
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
