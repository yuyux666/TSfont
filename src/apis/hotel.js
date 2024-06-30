import request from '@/utils/request'

// 游客查询酒店列表
export const hotelSearchService = ({
  name,
  stars,
  lowestPrice,
  pageSize,
  pageNum,
  checkIn,
  checkOut
}) =>
  request.get('/hotel/index', {
    params: { name, stars, lowestPrice, pageSize, pageNum, checkIn, checkOut }
  })

// 游客查看预定酒店详情
export const hotelDetailService = ({
  roomId,
  hotelId,
  checkinTime,
  checkoutTime
}) =>
  request.get('/hotel/booking', {
    params: { roomId, hotelId, checkinTime, checkoutTime }
  })

// 游客提交预定表单
export const hotelBookingService = (data) =>
  request.post('/hotel/booking', data)
