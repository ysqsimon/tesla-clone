import router from "@/router";

const redirectFunction = (route) => {
  router.push(route);
};

export const redirect = {
  mounted(el, binding) {
    el.addEventListener("click", () => redirectFunction(binding.value));
  },
  unMounted(el, binding) {
    el.removeEventListener("click", () => redirectFunction(binding.value));
  },
};
