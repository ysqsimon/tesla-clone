<template>
  <div class="h-screen w-screen bg-white overflow-y-scroll scroll-smooth">
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
            :key="tab.key"
            class="text-white hover:text-white"
            :ripple="false"
            :value="tab.key"
            @click="() => redirect(tab.key)"
            >{{ tab.tab }}</v-tab
          >
        </v-tabs>
      </div>
    </div>
    <div
      class="w-screen px-5 py-10 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(item, index) in currentTabData.album"
        :key="item.title"
        class="menu-container relative overflow-hidden cursor-pointer text-white"
        @click="() => redirectToPhotoDetail(item)"
      >
        <div
          class="absolute z-[1] w-full h-full bg-gradient-to-t from-stone-900"
        ></div>
        <img
          class="menu-img w-full h-full object-cover transition-all duration-300"
          :src="globalStore.getImgUrlFrom(item.img, 'photos')"
        />
        <div class="absolute z-[1] left-1 bottom-1">
          <div class="text-[12px]">
            {{ dayjs().format("DD MMM YYYY") }}
          </div>
          <div
            class="menu-title transition-all duration-500 text-lg font-bold leading-none"
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
import dayjs from "dayjs";
import { useGlobalStore } from "@/store/global";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const globalStore = useGlobalStore();

const tabs = globalStore.textData.photos;
const currentTab = ref(route.params.carType);

const currentTabData = computed(() => {
  return tabs.find((tab) => tab.key === currentTab.value) || {};
});

const redirect = (href) => {
  currentTab.value = href;
  router.push(`/photos/${href}`);
};

const redirectToPhotoDetail = (item) => {
  router.push(`/photos/${route.params.carType}/${item.title}`);
};
</script>

<style lang="scss" scoped>
.menu-container {
  .menu-img {
    filter: brightness(0.9);
  }
  &:hover {
    .menu-img {
      transform: scale(1.1);
      filter: brightness(1.1);
    }
  }
}
</style>
