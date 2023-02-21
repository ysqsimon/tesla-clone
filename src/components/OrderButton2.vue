<template>
  <button
    v-bind="{ ...$attrs, ...$props }"
    class="text-center transition-all ease-in-out duration-500 bg-transparent rounded-sm border-2 w-full min-w-[60px] py-[10px] font-Gotham text-sm font-bold cursor-pointer select-none"
    :class="
      props.theme === 'Black'
        ? 'text-white border-white hover:text-black hover:bg-white'
        : 'text-black border-black hover:text-white hover:bg-black'
    "
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "Light",
  },
});
</script>
