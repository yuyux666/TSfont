import axios from 'axios'
import router from '@/router'
import { useUserStore } from '@/stores'
import { showFailToast } from 'vant'

const baseURL = 'http://192.168.42.28:8080'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const useStore = useUserStore()
    if (useStore.token) {
      console.log(useStore.token)
      config.headers.Authorization = useStore.token
      console.log(config.headers)
      config.headers.token = useStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    console.log(res)
    if (res.data.status === 100) {
      // 成功
      return res
    }
    // 失败
    showFailToast('服务异常！')
    // ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    // 错误的特殊情况 => 401 权限不足 或 token 过期 => 拦截到登录
    if (err.response?.status === 401) {
      router.push('/login')
    }

    // 错误的默认情况 => 只要给提示
    showFailToast('错误！')
    // ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
