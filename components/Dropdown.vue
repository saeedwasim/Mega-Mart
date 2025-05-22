<template>
  <div class="w-20">
    <div class="flex cursor-pointer" @click="openDrawer">
      <p class="text-[14px] font-normal text-[#666666]">{{ selectedOption }}</p>
      <img src="@/assets/svg/Down.svg" alt="" class="ml-auto mr-0 mt-1">

    </div>
    <div class="bg-[#F3F9FB] rounded-lg  w-[147px] absolute top-[70px] z-50" v-if="isVisible">
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
const emit = defineEmits(["handleFilterData"])
const items = [
  { id: 1, title: "all" },
  { id: 2, title: "men's clothing" },
  { id: 3, title: "jewelery" },
  { id: 4, title: "electronics" },
  { id: 5, title: "women's clothing" },
]
const openDrawer = () => {
  isVisible.value = !isVisible.value
}
const selectOption = (item) => {
  console.log(item, "item")
  isVisible.value = false
  selectedOption.value = item
  emit("handleFilterData", selectedOption.value)
}

</script>
