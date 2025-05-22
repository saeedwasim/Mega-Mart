<template>
    <div class="w-full h-[90px] flex justify-between items-center px-20">
        <div class="flex">
            <div class="bg-[#f3f9fb] w-[48px] h-[48px] rounded-lg flex justify-center items-center">
                <img src="@/assets/svg/M.svg" alt="">
            </div>
            <div class="flex items-center ml-3">
                <img src="@/assets/svg/MegaMart.svg" alt="">
            </div>
        </div>
        <div class="h-[48px] w-[507px] bg-[#F3F9FB] flex justify-between items-center rounded-lg px-5">
            <div>
                <Dropdown @handleFilterData="toFilterData"/>
            </div>
            <div>
                <input type="text" class="w-[360px] outline-none bg-[#F3F9FB]" placeholder="Search here...">
            </div>
            <div>
                <img src="@/assets/svg/Search.svg" alt="" class="cursor-pointer">
            </div>
        </div>
        <div class="flex">
            <div>
                <img src="@/assets/svg/Buy.svg" alt="">
            </div>
            <div class="ml-3">
                <p class="text-[16px] font-bold text-[#666666]">Cart</p>
            </div>
            <div class="ml-3 h-[20px] w-[20px] rounded-full bg-[#008ECC] flex justify-center items-center">
                <p class="text-white text-[10px]">1</p>
            </div>

        </div>
    </div>
</template>
<script setup>
const filterCategories = ref("")
const emit = defineEmits(['filterData'])
const toFilterData=(val)=>{
    filterCategories.value=val
    emit("filterData",filterCategories.value)
    console.log("filterData",filterCategories.value)
}
</script>
