import { getEmergencyList } from '@/apis/emergency'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmergencyStore = defineStore(
  'emergency',
  () => {
    const emergencyList = ref([])
    const total = ref(0)

    const getEmergency = async ({ page, pageSize }) => {
      const res = await getEmergencyList({ page, pageSize })
      emergencyList.value = res.data.data.records
      total.value = res.data.data.total
    }

    return { getEmergency, emergencyList, total }
  },
  {
    persist: true
  }
)
