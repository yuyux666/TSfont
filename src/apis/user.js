import request from '@/utils/request'

// 注册请求
export const userRegisterService = ({
  username,
  password,
  phoneNumber,
  code
}) => request.post('/user/register', { username, password, phoneNumber, code })

// 登录请求
export const userLoginService = ({ username, password }) =>
  request.get('/user/login', { params: { username, password } })

// 注册发送验证码
export const userSendCodeService = (phoneNumber) =>
  request.get('/user/verify-phone', { params: { phoneNumber } })

// 修改密码 token??
export const userChangePasswordService = (password) =>
  request.put('/user/set-pwd', { password })

// 获取全部订单
export const userGetAllOrderService = () => request.get('/user/order/index')

// 取消酒店订单
export const userCancelOrderService = (id) =>
  request.get(`/user/order/cancel/${id}`)

// 查看订单详情
export const userGetOrderDetailService = (id) =>
  request.get(`/user/order/detail/${id}`)

// 删除指定订单
export const userDeleteOrderService = (id) =>
  request.delete(`/user/order/delete/${id}`)
