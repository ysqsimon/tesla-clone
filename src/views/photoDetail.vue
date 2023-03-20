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
      </div>
    </div>
    <div class="p-8 flex justify-center">
      <div class="max-w-[1000px]">
        <h3 class="font-bold text-xl">
          A GORGEOUS FINISH, CARBON FIBER AERO PARTS, A CARBON CERAMIC BIG BRAKE
          KIT, COMPLETE SUSPENSION UPGRADES, AND A SET OF LIGHTWEIGHT UP-02
          FORGED WHEELS, MAKE THIS DEEP BLUE METALLIC TESLA MODEL S PLAID A VERY
          SPECIAL DAILY DRIVER THAT IS BUILT TO WORK FLAWLESSLY ON THE
          OCCASIONAL TRACKDAY.
        </h3>
        <p class="my-4">
          When choosing a paint color for your Tesla Model S Plaid, among the
          more exciting options offered by Tesla, the Deep Blue Metallic finish
          is absolutely stunning when polished into the mirror finish you see
          here at our dedicated paint restoration and protection facility,
          Bulletproof Auto Spa. We might be a little biased, as this particular
          build features that exact finish, but as you’ll see from the media
          gallery below, it suits the Model S Plaid perfectly. Owned by Ravi,
          one of our long-time customers, this Model S Plaid features a
          multitude of Unplugged Performance visual & performance additions.
        </p>
        <p class="my-4">
          In the front, our recently released Autobahn Carbon Fiber Front
          Diffuser adds that perfect visual aggression and improved aerodynamics
          performance to the front end of this vehicle. With the front diffuser,
          the goal of reducing drag and adding downforce while keeping the
          entire package usable on the street was a massive challenge.
        </p>
        <p class="my-4">
          In turn, we developed special removable and replaceable proprietary
          carbon fiber Aero Pads that allow you to run a more track-focused
          setup when desired or opt for maximum ground clearance for daily use
          or split the difference with the half-height pad. As the pads wear,
          they not only are easily replaceable but also protect your diffuser
          from wear and tear. Built from full pre-preg dry carbon fiber
          construction with our unique and easily replaceable Aero Pads, you can
          maximize performance and minimize wear and tear, as well as customize
          the product to your needs.
        </p>
        <div style="position: relative; width: 100%; padding-bottom: 56.25%">
          <iframe
            src="http://player.bilibili.com/player.html?aid=634151915&bvid=BV1Jb4y1t7uv&cid=440784525&page=1"
            scrolling="yes"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
          >
          </iframe>
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
