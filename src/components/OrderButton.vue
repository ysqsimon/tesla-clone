<template>
  <div
    :class="`text-center w-64 py-[10px] rounded-md font-Gotham text-sm font-bold ${backColor} ${foreColor} cursor-pointer select-none`"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: "Light",
  },
});

const foreColor = ref("text-black");
const backColor = ref("bg-gray-100");
if (props.Theme == "Black") {
  foreColor.value = "text-white";
  backColor.value = "bg-neutral-700";
}
</script>
