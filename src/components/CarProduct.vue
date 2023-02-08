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
        <a :href="Href" :class="`m-auto text-md select-none ${isLink}`">{{
          subtitle
        }}</a>
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
            <ProductButton :text="Button1Text" theme="Black" />
          </div>
          <div
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
            :delay="500"
          >
            <ProductButton :text="Button2Text" />
          </div>
        </div>
      </div>
      <div v-else>
        <div class="flex m-auto gap-8 justify-center">
          <div
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
            :delay="500"
          >
            <ProductButton text="Shop Now" theme="Black" />
          </div>
        </div>
      </div>
    </div>
    <img
      quality="80"
      :alt="props.Title"
      :src="DesktopImg"
      draggable="false"
      class="md:block hidden object-cover w-screen h-full select-none"
      format="webp"
    />
    <img
      quality="80"
      :alt="props.Title"
      :src="MobileImg"
      draggable="false"
      class="md:hidden block object-cover w-screen h-full select-none"
      format="webp"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMotion } from "@vueuse/motion";

import ProductButton from "./ProductButton.vue";

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

const Button1Text = ref("Buy Now");
const Button2Text = ref("Custom Order");
if (!props.Title?.includes("Model")) {
  Button1Text.value = "Order Now";
  Button2Text.value = "Learn More";
}
</script>
