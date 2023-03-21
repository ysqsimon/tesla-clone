import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";

export default createRouter({
  base: "/tesla-clone/",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/miniEV",
      component: () => import("@/views/miniEV.vue"),
    },
    {
      path: "/order",
      children: [
        {
          path: "miniEV",
          component: () => import("@/views/orderMiniEV.vue"),
        },
      ],
    },
    {
      path: "/modifieds",
      redirect: "/modifieds/modelY",
    },
    {
      path: "/modifieds/:type",
      component: () => import("@/views/modifieds.vue"),
    },
    {
      path: "/modifieds/shop",
      redirect: "/modifieds/shop/modelY",
    },
    {
      path: "/modifieds/shop/:type",
      component: () => import("@/views/modifiedsShop.vue"),
    },
    {
      path: "/product/:carType/:productName",
      component: () => import("@/views/product.vue"),
    },
    {
      path: "/photos",
      redirect: "/photos/modelY",
    },
    {
      path: "/photos/:carType/:photoName",
      component: () => import("@/views/photoDetail.vue"),
    },
    {
      path: "/photos/:carType",
      component: () => import("@/views/photos.vue"),
    },
    {
      path: "/about",
      component: () => import("@/views/aboutUs.vue"),
    },
    { path: "/:pathMatch(.*)*" },
  ],
  //   scrollBehavior: function (to, from, savedPosition) {
  //     if (to.hash) {
  //       return { el: to.hash };
  //     } else {
  //       return { x: 0, y: 0 };
  //     }
  //   },
});
