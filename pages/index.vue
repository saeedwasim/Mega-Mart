<template>
  <div>
    <div>
       <Header  @click="handleFilter"/>
    </div>
    <div class="bg-[#e1e1e1] px-20 py-5 min-h-[86vh]">
      <div>
        <p class="text-[#008ECC] text-[32px] font-medium">Results</p>
      </div>
      <div class="mt-10">
        <Card :cardsData="handleCardData" @filterData="handleFilter" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { showCard } from "~/store/cards"
const card = showCard()
const handleCardData = ref([])
const fetchData = async () => {
  handleCardData.value = card.getCardsData
  await card.fetchCardsData()
}
const handleFilter = (value) => {
  console.log("Searching for:", value)
}

watch(
  () => card.getCardsData,
  (newValue, oldValue) => {
    handleCardData.value = newValue
    console.log(newValue, "This is State Watch")
  },
  { deep: true }
)
onMounted(async () => {
  await fetchData()
})
</script>
