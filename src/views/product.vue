<template>
  <div class="mt-24 w-screen bg-white px-[3vw] py-[20px]">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="w-full md:w-2/3">
        <swiper :imgs="imgs"></swiper>
      </div>
      <div class="w-full md:w-1/3 bg-white">
        <h3 class="">sssss</h3>
        <div class="text-red">$1900</div>
        <v-divider class="border-opacity-100" :thickness="1"></v-divider>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
          aliquet nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies
          lacinia, nisl nisl aliquet nisl, ut aliquet nisl nisl sit amet nisl.
          Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
          aliquet nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies
        </div>
        <order-button-2>Order now</order-button-2>
      </div>
    </div>
    <div class="flex flex-col align-center">
      <div class="font-bold py-[40px]" style="font-size: max(20px, 3vw)">
        PRODUCT DESCRIPTION
      </div>
      <div class="max-w-[800px]" style="font-size: max(14px, 1.5vw)">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        consectetur, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
        aliquet nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies
        lacinia, nisl nisl aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed
        euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
        aliquet nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies
        lacinia, nisl nisl aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed
        euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
        aliquet nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies
        lacinia, nisl nisl aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed
        euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
        aliquet nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies
        lacinia, nisl nisl aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed
        euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
        aliquet nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies
        lacinia, nisl nisl aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed
        euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
        aliquet nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies
        lacinia, nisl nisl aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed
        euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl,
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-12">
        <div v-for="item in imgs" :key="item.name">
          <img
            :src="item.url"
            :alt="item.name"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// use array of 5 to generate 5 swiper imgs
const imgs = [1, 2, 3, 4, 5].map((i) => {
  const name = `blue_PC_${i}`;
  return {
    name,
    url: new URL(`/src/assets/img/${name}.jpg`, import.meta.url).href,
  };
});
</script>
