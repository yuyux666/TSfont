import request from '@/utils/request'

// 获取所有应急信息
export const getEmergencyList = ({ page, pageSize }) =>
  request.get('/emergency', { params: { page, pageSize } })
