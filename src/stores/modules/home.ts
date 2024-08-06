import { getHomeCategories, getHomeHotSuggests } from "@/services/modules/home";
import { defineStore } from "pinia";
import { ref } from "vue";

const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref<any[]>([])
  const categories = ref<any[]>([])

  async function fetchHotSuggestData() {
    const res = await getHomeHotSuggests()
    hotSuggests.value = res.data
  }

  async function fetchCategoriesData() {
    const res = await getHomeCategories()
    categories.value = res.data
  }

  return {
    hotSuggests,
    categories,
    fetchHotSuggestData,
    fetchCategoriesData
  }
})

export default useHomeStore
