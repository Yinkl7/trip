import type { dateType } from '@/utils/formatDate'
import { defineStore } from 'pinia'
import { ref } from 'vue'


const useMainStore = defineStore('main', () => {
  const isLoading = ref(false)

  const startDate = ref<dateType>(undefined)
  const endDate = ref<dateType>(undefined)

  return { isLoading, startDate, endDate }
})

export default useMainStore
