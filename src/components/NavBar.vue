<template>
  <div class="fixed top-0 z-20 w-screen">
    <div
      class="flex justify-between items-center pt-5"
      :class="route.path === '/miniEV' ? 'text-white' : ''"
    >
      <a class="flex-1 ml-8 lg:ml-12" href="/" aria-label="Tesla Homepage">
        <svg
          class="w-32"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <div class="grow">
        <ul class="flex-row justify-center flex font-Gotham text-sm">
          <li
            v-for="item in menu"
            :key="item.name"
            class="mr-8 lg:block hidden select-none rounded"
          >
            <router-link :to="item.href">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <ul class="flex-row justify-end flex font-Gotham text-sm">
          <li
            class="lg:hidden block mr-8 select-none"
            href="#"
            @click.stop="drawerOpen = !drawerOpen"
          >
            <a>Menu</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <v-layout class="h-full">
    <v-navigation-drawer
      v-model="drawerOpen"
      class="relative h-full"
      location="right"
    >
      <div class="absolute top-5 right-5">
        <v-icon
          icon="mdi-window-close"
          class="cursor-pointer"
          @click="drawerOpen = !drawerOpen"
        ></v-icon>
      </div>
      <v-list class="mt-10">
        <v-list-item
          v-for="item in menu"
          :key="item.name"
          :value="item.name"
          :ripple="false"
          @click="() => redirect(item.href)"
        >
          <template #title>
            <div class="text-black cursor-pointer rounded-sm">
              {{ item.name }}
            </div>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
import { useGlobalStore } from "@/store/global";
import { useRoute, useRouter } from "vue-router";
const globalStore = useGlobalStore();
const menu = globalStore.textData.menu.map((item) => {
  return {
    ...item,
    name: item.name[globalStore.locale],
  };
});

const route = useRoute();
const router = useRouter();

const drawerOpen = ref(false);

const redirect = (href) => {
  router.push({
    path: href,
  });
};
</script>

<style scoped>
li {
  padding: 8px;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

li:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
