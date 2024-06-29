import request from '@/utils/request'

// 获取当地天气
export const getWeatherService = (id) => request.get(`/weather/${id}`)
