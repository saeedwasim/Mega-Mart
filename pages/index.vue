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
const orignalCardData = ref([])
const handleCardData = ref([])
const getFilteredData = ref("")
const fetchData = async () => {
  await card.fetchCardsData()
  orignalCardData.value = card.getCardsData
  handleCardData.value = orignalCardData.value

}
const handleFilter = (value) => {
  getFilteredData.value = value

  if (getFilteredData.value === "all") {
    handleCardData.value = orignalCardData.value
  } else {
    handleCardData.value = orignalCardData.value.filter(
      item => item.category.includes(getFilteredData.value)
    )
  }
}

onMounted(async () => {
  await fetchData()
})
</script>
