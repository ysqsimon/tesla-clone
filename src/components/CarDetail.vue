<template>
  <div class="snap-start relative section-container">
    <div v-motion-default class="absolute top-32 w-full">
      <div class="flex flex-col">
        <h1
          class="m-auto text-white font-Gotham font-bold text-[40px] select-none"
        >
          {{ cover.title }}
        </h1>
      </div>
    </div>
    <div class="absolute bottom-20 w-full">
      <div
        v-motion-default
        class="flex m-auto gap-8 justify-center flex-col sm:flex-row items-center text-white"
      >
        <div class="flex gap-8">
          <div>
            <div class="text-lg font-semibold">3.1s</div>
            <div class="text-xs">0-60mph</div>
          </div>
          <div>
            <div class="text-lg font-semibold">358mi</div>
            <div class="text-xs">Range (EPA est.)</div>
          </div>
          <div>
            <div class="text-lg font-semibold">AWD</div>
            <div class="text-xs">Dual Motor</div>
          </div>
        </div>
        <div>
          <order-button-2 theme="Black" @click="order"
            >Order Now</order-button-2
          >
        </div>
      </div>
    </div>
    <img
      alt="Model-3-Main-Hero-Desktop"
      :src="getImgUrl(cover.background)"
      class="md:block hidden object-cover w-screen h-full select-none"
    />
    <img
      alt="Model-3-Main-Hero-Desktop"
      :src="getImgUrl(cover.background)"
      class="md:hidden block object-cover w-screen h-full select-none"
    />
  </div>
  <div
    class="snap-start relative section-container"
    v-for="section in sections"
    :key="section.name"
  >
    <div class="relative h-2/3 select-none">
      <img
        :alt="section.background"
        :src="getImgUrl(section.background)"
        class="md:block hidden object-cover w-screen h-full"
      />
      <img
        :alt="section.background"
        :src="getImgUrl(section.background)"
        class="md:hidden block object-cover w-screen h-full"
      />
      <div v-motion-default class="absolute bottom-20 w-full">
        <div
          class="flex m-auto gap-8 justify-center flex-col sm:flex-row items-center text-white"
        >
          <div class="flex gap-8">
            <div>
              <div class="text-lg font-semibold">3.1s</div>
              <div class="text-xs">0-60mph</div>
            </div>
            <div>
              <div class="text-lg font-semibold">358mi</div>
              <div class="text-xs">Range (EPA est.)</div>
            </div>
            <div>
              <div class="text-lg font-semibold">AWD</div>
              <div class="text-xs">Dual Motor</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 w-full text-black">
      <div
        class="flex m-auto gap-20 w-5/6 justify-center flex-col sm:flex-row items-center"
      >
        <div class="w-1/4">
          <div class="text-black">
            {{ section.subtitle }}
          </div>
          <div class="font-semibold text-[30px]">{{ section.title }}</div>
          <order-button-2 @click="order">Order Now</order-button-2>
        </div>
        <div class="text-black w-1/2">
          Model 3 comes with the option of dual motor all-wheel drive, 20”
          Überturbine Wheels and Performance Brakes for total control in all
          weather conditions. A carbon fiber spoiler improves stability at high
          speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little
          as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3
          or schedule a demo drive today.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["order"]);
const cover = {
  title: "Model 3",
  background: "Model-3-Main-Hero-Desktop",
};
const sections = [
  {
    name: 1,
    background: "model-3-hero-a-desktop",
  },
  {
    name: 2,
    background: "Model-3-Performance-Hero-Desktop",
    subtitle: "Performance",
    title: "Quickest Acceleration",
  },
  {
    name: 3,
    background: "Model-3-AWD-Hero-Desktop",
  },
];

const getImgUrl = (imgName) => {
  console.log(new URL(`/src/assets/img/${imgName}.jpg`, import.meta.url).href);
  return new URL(`/src/assets/img/${imgName}.jpg`, import.meta.url).href;
};

const order = () => {
  console.log("order");
  emit("order");
};
</script>
<style>
.section-container {
  min-height: 700px;
  height: 100vh;
}
</style>
