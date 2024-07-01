import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEntertainmentStore = defineStore(
  'entertainment',
  () => {
    const emergencyList = ref([])
    const getEmergency = async () => {}

    return { getEmergency, emergencyList }
  },
  {
    persist: true
  }
)
