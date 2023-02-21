import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";

export default createRouter({
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
