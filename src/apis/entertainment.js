import request from '@/utils/request'

// 查询全部餐厅
export const DiningRoomListService = (data) =>
  request.get('/activity/catering', { params: data })

// 查询指定餐厅详情
export const DiningRoomDetailService = (id) =>
  request.get(`/activity/catering/${id}`)

// 查看全部娱乐项目
export const RecreationProjectListService = (data) =>
  request.get('/activity/entertainment', { params: data })

// 查看指定娱乐项目详情
export const RecreationProjectDetailService = (id) =>
  request.get(`/activity/entertainment/${id}`)

// 查看全部演出
export const PerformanceListService = (data) =>
  request.get('/activity/performance', { params: data })

// 查看指定演出详情
export const PerformanceDetailService = (id) =>
  request.get(`/activity/performance/${id}`)
