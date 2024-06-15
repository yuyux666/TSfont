import httpInstance from '@/utils/http'

// 获取banner
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner',
    method: 'GET'
  })
}

// 获取新鲜好物
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

// 获取人气推荐
export const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

// 获取产品列表
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
