import request from '@/utils/request'

// 查询全部餐厅
export const DiningRoomListService = () => request.get('/activity/catering')

// 查询指定餐厅详情
export const DiningRoomDetailService = (id) =>
  request.get(`/activity/catering/${id}`)

// 查看全部娱乐项目
export const RecreationProjectListService = () =>
  request.get('/activity/entertainment')

// 查看指定娱乐项目详情
export const RecreationProjectDetailService = (id) =>
  request.get(`/activity/entertainment/${id}`)

// 查看全部演出
export const PerformanceListService = () => request.get('/activity/performance')

// 查看指定演出详情
export const PerformanceDetailService = (id) =>
  request.get(`/activity/performance/${id}`)
