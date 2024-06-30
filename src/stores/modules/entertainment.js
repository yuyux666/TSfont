import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmergencyStore = defineStore(
  'emergency',
  () => {
    const emergencyList = ref([])
    const getEmergency = async () => {}

    return { getEmergency, emergencyList }
  },
  {
    persist: true
  }
)
