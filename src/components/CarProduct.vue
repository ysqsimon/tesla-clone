<template>
  <div
    :id="props.Title?.replace(' ', '-')"
    class="snap-start relative h-screen"
  >
    <div ref="TitleAnimation" class="absolute top-32 w-full">
      <div class="flex flex-col">
        <h1 class="m-auto font-Gotham font-bold text-[40px] select-none">
          {{ title }}
        </h1>
        <a :class="`m-auto text-md select-none ${isLink}`">{{ subtitle }}</a>
      </div>
    </div>
    <div class="absolute bottom-28 w-full">
      <div v-if="props.Title != `Accessories`">
        <div
          class="flex m-auto gap-8 justify-center flex-col sm:flex-row items-center"
        >
          <div
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
            :delay="500"
          >
            <order-button theme="Black">{{ OrderBtnText }}</order-button>
          </div>
        </div>
      </div>
    </div>
    <img
      :alt="props.Title"
      :src="DesktopImg"
      class="md:block hidden object-cover w-screen h-full select-none"
    />
    <img
      :alt="props.Title"
      :src="MobileImg"
      class="md:hidden block object-cover w-screen h-full select-none"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMotion } from "@vueuse/motion";
import { useGlobalStore } from "@/store/global.js";
import textData from "@/data";

const globalStore = useGlobalStore();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  background: {
    type: String,
  },
  href: {
    type: String,
  },
});

const DesktopImg = new URL(
  `../assets/img/${props.background}-Desktop.jpg`,
  import.meta.url
).href;
const MobileImg = new URL(
  `../assets/img/${props.background}-Mobile.jpg`,
  import.meta.url
).href;

var isLink = "";
if (props.href) {
  isLink = "underline";
}

const TitleAnimation = ref();
useMotion(TitleAnimation, {
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
});

const OrderBtnText = ref(textData.orderBtn[globalStore.locale]);
</script>
