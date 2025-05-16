<template>
  <div>
    <div class="flex cursor-pointer" @click="openDrawer">
      <p class="text-[14px] font-normal text-[#666666]">{{ selectedOption }}</p>
      <img src="@/assets/svg/Down.svg" alt="" class="ml-3 mt-1">

    </div>
    <div class="bg-[#F3F9FB] rounded-lg  w-[147px] absolute top-[70px] " v-if="isVisible">
      <div class="py-2 border-b last:border-b-0" v-for="item in items" :key="item.id">
        <p class="text-[#666666] text-[14px] font-normal cursor-pointer px-4" @click="selectOption(item.title)">{{
          item.title }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
const isVisible = ref(false)
const selectedOption = ref("All")
const items = [
  { id: 1, title: "Mobiles" },
  { id: 2, title: "Games" },
  { id: 3, title: "Toys" },
  { id: 4, title: "Deals" },
  { id: 5, title: "Books" },
]
const openDrawer = () => {
  isVisible.value = !isVisible.value
}
const selectOption = (item) => {
  console.log(item, "item")
  isVisible.value = false
  selectedOption.value = item
}
</script>
