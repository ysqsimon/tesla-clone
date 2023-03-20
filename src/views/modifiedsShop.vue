<template>
  <div class="bg-slate-200 w-screen h-screen">
    <div class="min-h-[200px] h-[50vh] md:h-[65vh] relative">
      <img
        class="w-screen h-full object-cover"
        src="/src/assets/img/cybertrunk.jpg"
      />
      <div
        class="absolute top-0 h-full w-full flex flex-col items-center justify-center"
      >
        <div class="text-[1vw] font-bold text-white">{{}}</div>
        <div class="text-[3vw] font-bold text-white">{{}}</div>
        <div class="max-w-[600px] text-center text-white">{{}}</div>
      </div>
    </div>
    <div
      class="p-[8%] bg-white flex flex-col md:flex-row gap-[20px] justify-center"
    >
      <div class="w-full md:w-[30%] md:max-w-[300px] select-none">
        <div class="font-bold text-xl">SHOP BY VEHICLE</div>
        <v-list
          v-model:opened="state.menuOpenKey"
          v-model:selected="state.menuSelected"
          mandatory
          open-strategy="single"
        >
          <v-list-group
            v-for="item in menu"
            :key="item.value"
            :value="item.value"
          >
            <template #activator="{ props }">
              <v-list-item
                :ripple="false"
                v-bind="props"
                :title="item.title"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="subMenu in item.children"
              :key="subMenu.value"
              :ripple="false"
              :title="subMenu.title"
              :value="subMenu.value"
            ></v-list-item>
          </v-list-group>
        </v-list>
      </div>
      <div
        class="w-full md:w-[70%] max-w-[1000px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        <div
          v-for="item in currentShopItems"
          :key="item.title"
          v-redirect="{ path: `/product/${route.params.type}/${item.title}` }"
          class="shop-item-container cursor-pointer flex-col align-center justify-center"
        >
          <img
            class="shop-item-img w-full object-cover transition-all duration-300"
            :src="globalStore.getImgUrl(item.img)"
          />
          <div class="text-center">
            {{ item.title }}
          </div>
          <div class="text-center">${{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, computed } from "vue";
import { useGlobalStore } from "@/store/global";
import { useRoute, useRouter } from "vue-router";

const globalStore = useGlobalStore();
const route = useRoute();
const router = useRouter();

const menu = globalStore.textData.modifieds.carTypes.map((item) => ({
  title: item.type,
  value: item.href,
  children: item.available.map((subItem) => ({
    title: subItem.name,
    value: item.href + "/" + subItem.name,
  })),
}));

const state = reactive({
  menuOpenKey: [route.params.type],
  menuSelected: [menu[0].children[0].value],
});

const updateMenu = () => {
  if (route.params.type) {
    state.menuOpenKey = [route.params.type];
  }

  if (route.query.category) {
    state.menuSelected = [route.params.type + "/" + route.query.category];
  }
};
updateMenu();

const currentShopItems = computed(() => {
  const currentCar = globalStore.textData.modifieds.carTypes.find(
    (item) => state.menuSelected[0].split("/")[0] === item.href
  );
  const currentCarPart = currentCar?.available.find(
    (item) => state.menuSelected[0].split("/")[1] === item.name
  );
  return currentCarPart?.lists;
});

watch(
  () => state.menuSelected,
  (val) => {
    const [carType, carPart] = val[0].split("/");
    router.push({
      path: "/modifieds/shop/" + carType,
      query: {
        category: carPart,
      },
    });
  }
);
watch(route, () => {
  updateMenu();
});
</script>
<style lang="scss" scoped>
.shop-item-container {
  &:hover {
    .shop-item-img {
      transform: translateY(-8px);
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
  }
}
</style>
