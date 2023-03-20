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
        <div class="text-[3vw] font-bold text-white uppercase">
          {{ aboutUsData.title?.toUpperCase() }}
        </div>
        <div class="text-[1vw] font-bold text-white uppercase">
          {{ aboutUsData.subtitle?.toUpperCase() }}
        </div>
      </div>
    </div>
    <div class="p-8 flex justify-center">
      <div class="max-w-[1000px]">
        <p v-for="item in aboutUsData.descriptions" :key="item" class="my-4">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGlobalStore } from "@/store/global";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const globalStore = useGlobalStore();

const aboutUsData = globalStore.textData.aboutUs;
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
