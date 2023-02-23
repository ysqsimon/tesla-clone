<template>
  <swiper
    :modules="modules"
    navigation
    class="text-white h-full"
    :pagination="{ type: 'fraction' }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in imgs" :key="item.name" class="object-cover">
      <img
        :src="item.url"
        :alt="item.name"
        class="object-cover h-full w-full"
      />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { computed } from "vue";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const props = defineProps({
  imgs: {
    type: Array,
    default: () => [],
  },
});

const onSwiper = (swiper) => {};
const onSlideChange = () => {
  // console.log("slide change");
};
const modules = [Navigation, Pagination];
</script>
