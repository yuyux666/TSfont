import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    // 需要获取用户基本信息接口
    // const user = ref({})

    return { token, setToken, removeToken }
  },
  {
    persist: true
  }
)
