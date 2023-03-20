<template>
  <div class="w-screen h-screen flex flex-col lg:flex-row bg-white">
    <div class="w-full lg:h-screen lg:w-2/3">
      <swiper class="text-white h-full" :imgs="imgs"></swiper>
    </div>
    <div class="w-full lg:w-1/3 bg-white h-[100px]">ssss</div>
  </div>
</template>
<script setup>
// use array of 5 to generate 5 swiper imgs
const imgs = [1, 2, 3, 4, 5].map((i) => {
  const name = `blue_PC_${i}`;
  return {
    name,
    url: new URL(`/src/assets/img/${name}.jpg`, import.meta.url).href,
  };
});
</script>
