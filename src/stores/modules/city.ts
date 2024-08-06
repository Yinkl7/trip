import { getAllCity } from '@/services'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type Obj = {
  [key: string]: any
}

type cityObj = {
  cityName: string
  [key: string]: any
}

const useCityStore = defineStore('city', () => {
  const allCities = ref<Obj>({})

  async function fetchAllCitiesData() {
    const res = await getAllCity()
    allCities.value = res.data
  }

  const currentCity = ref<cityObj>({
    cityName: '上海'
  })

  return { allCities, currentCity, fetchAllCitiesData }
})

export default useCityStore
