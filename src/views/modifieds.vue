<template>
  <div class="h-screen w-screen overflow-y-scroll scroll-smooth">
    <div class="min-h-[200px] h-[50vh] md:h-[65vh] relative">
      <img
        class="w-screen h-full object-cover"
        src="/src/assets/img/cybertrunk.jpg"
      />
      <div
        class="absolute top-0 h-full w-full flex flex-col items-center justify-center"
      >
        <div class="text-[1vw] font-bold text-white">
          {{ currentTabData.subtitle?.toUpperCase() }}
        </div>
        <div class="text-[3vw] font-bold text-white">
          {{ currentTabData.title?.toUpperCase() }}
        </div>
        <div class="max-w-[600px] text-center text-white">
          {{ currentTabData.description?.toUpperCase() }}
        </div>
        <v-tabs v-model="currentTab" align-tabs="center">
          <v-tab
            v-for="tab in tabs"
            :key="tab.href"
            class="hover:text-white"
            :ripple="false"
            :value="tab.href"
            @click="() => redirect(tab.href)"
            >{{ tab.type }}</v-tab
          >
        </v-tabs>
      </div>
    </div>
    <div class="w-screen px-5 py-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        v-for="item in shopMenu"
        :key="item.title"
        v-redirect="{
          path: `shop/${currentTabData.href}`,
          query: {
            category: item.title,
          },
        }"
        class="menu-container relative overflow-hidden"
        :class="`${
          currentTabData.available.some((el) => el.name === item.title)
            ? 'cursor-pointer'
            : 'disabled'
        }`"
      >
        <div
          class="absolute z-[1] w-full h-full bg-gradient-to-t from-stone-900"
        ></div>
        <img
          class="menu-img w-full h-full object-cover transition-all duration-300"
          :class="
            currentTabData.available.some((el) => el.name === item.title)
              ? 'opacity-100 hover:scale-125 cursor-pointer'
              : 'opacity-70 grayscale disabled'
          "
          :src="globalStore.getImgUrl(item.img)"
        />
        <div class="absolute z-[1] left-1 bottom-1">
          <div class="text-[12px]">
            {{ item.subtitle }}
          </div>
          <div
            class="menu-title transition-all duration-500 text-lg font-bold leading-none"
            :class="
              currentTabData.available.some((el) => el.name === item.title)
                ? ''
                : 'disabled'
            "
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useGlobalStore } from "@/store/global";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const globalStore = useGlobalStore();

const tabs = globalStore.textData.modifieds.carTypes;
const shopMenu = globalStore.textData.modifieds.shopMenu;
const currentTab = ref(route.params.type);

const currentTabData = computed(() => {
  return tabs.find((tab) => tab.href === currentTab.value);
});

const redirect = (href) => {
  currentTab.value = href;
  router.push(`/modifieds/${href}`);
};
</script>
<style lang="scss" scoped>
.menu-container {
  &:hover :not(.disabled) {
    &.menu-img {
      transform: scale(1.1);
    }
    &.menu-title {
      color: rgb(59 130 246);
    }
  }
}
</style>
