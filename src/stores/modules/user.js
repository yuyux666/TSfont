import { userGetUserInfoService } from '@/apis/user'
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
    const user = ref({})
    const getUser = async () => {
      const res = await userGetUserInfoService()
      console.log(res.data)
      user.value = res.data.data
    }
    const setUser = (obj) => {
      user.value = obj
    }

    return { token, setToken, removeToken, user, getUser, setUser }
  },
  {
    persist: true
  }
)
