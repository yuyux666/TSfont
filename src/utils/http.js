// axios基础封装
import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', // 设置默认的请求地址
  timeout: 5000 // 设置请求超时时间
})
// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e)
  }
)
export default httpInstance
