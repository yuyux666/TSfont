import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
    // 获取分类数据
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }
  return { categoryList, getCategory }
})
