<template>
  <div class="grid grid-cols-5">
    <div v-for="item in cardsData" :key="item.id" class="mb-5 w-[227px] h-[284px] bg-[#f5f5f5] rounded-2xl relative">
      <div
        class="w-[51px] h-[53px] bg-[#008ECC] rounded-tr-2xl rounded-bl-2xl absolute top-0 right-0 flex justify-center items-center">
        <div class="text-[14px] font-light text-white text-center">
          56% OFF
        </div>
      </div>
      <div class="h-[187px] flex justify-center items-center">
        <div>
          <img :src="item.image" alt="" class="h-40">
        </div>
      </div>
      <div class="h-[96px] bg-white rounded-b-2xl px-3">
        <div class="pt-1">
          <p class="text-[16px]  font-light truncate cursor-pointer"
           @mouseenter="openTooltip(item.id)"
           @mouseleave="closeToolip">
            {{ item.title }}</p>
        </div>
        <div class="absolute bottom-24 0 w-[200px] px-3 bg-[#212121] rounded" v-if="showToolTipId === item.id ">
          <p class="text-white text-sm font-light">{{ item.title }}</p>
        </div>
        <div class="pt-1">
          <p class="text-[16px] font-bold">{{ item.price }} $ </p>
        </div>
        <div class="pt-1.5">
          <img src="@/assets/svg/Star.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const showToolTipId = ref(null)
const props = defineProps({
  cardsData: Array
})
const openTooltip = (id) => {
  showToolTipId.value = id
}
const closeToolip = () => {
   showToolTipId.value = null

}
</script>
