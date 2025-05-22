<template>
  <div>
    <div>
      <Header @filterData="handleFilter" />
    </div>
    <div class="bg-[#e1e1e1] px-20 py-5 min-h-[86vh]">
      <div>
        <p class="text-[#008ECC] text-[32px] font-medium">Results</p>
      </div>
      <div class="mt-10">
        <Card :cardsData="handleCardData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { showCard } from "~/store/cards"
const card = showCard()
const handleCardData = ref([])
const getFilteredData = ref("")
const fetchData = async () => {
  handleCardData.value = card.getCardsData
  await card.fetchCardsData()
}
const handleFilter = (value) => {
  getFilteredData.value = value
  console.log("getFilteredData.value", getFilteredData.value)
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
