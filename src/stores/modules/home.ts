import { getHomeCategories, getHomeHotSuggests, getHomeHouselist } from '@/services/modules/home'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref<any[]>([])
  const categories = ref<any[]>([])
  const currentPage = ref<number>(1)
  const houselist = ref<any[]>([])

  async function fetchHotSuggestData() {
    const res = await getHomeHotSuggests()
    hotSuggests.value = res.data
  }

  async function fetchCategoriesData() {
    const res = await getHomeCategories()
    categories.value = res.data
  }

  async function fetchHouselistData() {
    const res = await getHomeHouselist(currentPage.value)
    // console.log('=========== ', res.data)
    houselist.value.push(...res.data)
    currentPage.value++
  }

  return {
    hotSuggests,
    categories,
    houselist,
    fetchHotSuggestData,
    fetchCategoriesData,
    fetchHouselistData
  }
})

export default useHomeStore
