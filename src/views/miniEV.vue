<template>
  <div
    class="snap-y snap-mandatory h-screen w-screen overflow-y-scroll scroll-smooth bg-white"
  >
    <CarDetail @order="redirectToOrderPage" />
  </div>
</template>
<script setup>
import CarDetail from "@/components/CarDetail.vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const redirectToOrderPage = () => {
  router.push({
    path: "/order/miniEV",
  });
};
</script>
