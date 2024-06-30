import { defineStore } from 'pinia'
import { ref } from 'vue'
import { hotelSearchService } from '@/apis/hotel'

export const useHotelStore = defineStore(
  'hotel',
  () => {
    const hotelList = ref([])
    const total = ref(0)
    const getHotelList = async (data) => {
      const res = await hotelSearchService(data)
      const result = res.data
      // 更新数据
      hotelList.value = result.data.records
      total.value = result.data.total
    }
    return { hotelList, getHotelList, total }
  },
  {
    persist: true
  }
)
