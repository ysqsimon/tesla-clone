<template>
  <div
    id="Products"
    class="snap-y snap-mandatory h-screen w-screen overflow-y-scroll scroll-smooth"
  >
    <Product
      v-for="product in products"
      :key="product.Title"
      :title="product.Title"
      :subtitle="product.Subtitle"
      :background="product.Background"
      :href="product.Href"
    />
  </div>
</template>

<script setup>
import Product from "@/components/CarProduct.vue";
var products = [
  {
    Title: "Model 3",
    Background: "Model-3-Bg-Image",
    Href: "#",
  },
  {
    Title: "Model Y",
    Background: "Model-Y-Bg-Image",
    Href: "#",
  },
  {
    Title: "Model S",
    Background: "Model-S-Bg-Image",
    Href: "#",
  },
  {
    Title: "Model X",
    Background: "Model-X-Bg-Image",
    Href: "#",
  },
  {
    Title: "Solar Panels",
    Subtitle: "Lowest Cost Solar Panels in America",
    Background: "Solar-Panels",
  },
  {
    Title: "Solar Roof",
    Subtitle: "Produce Clean Energy From Your Roof",
    Background: "Solar-Roof",
  },
  { Title: "Accessories", Background: "Accessories" },
];
</script>

<style scoped></style>
