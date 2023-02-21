<template>
  <Navbar v-if="!route.path.includes('/order/')" />
  <router-view />
</template>

<script setup>
import Navbar from "./components/NavBar.vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.path, route.params);
</script>

<style scoped></style>
