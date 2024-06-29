import request from '@/utils/request'

// 游客提交一条投诉
export const complaintSubmitService = ({ title, content }) =>
  request.post('/complaint/submit', { title, content })

// 游客查看自己投诉
export const complaintViewService = ({ currPage, size }) =>
  request.get('/complaint/my', { params: { currPage, size } })

// 游客回复投诉处理结果（等待）
export const complaintReplyService = (id, data) =>
  request.post(`/complaint/review/${id}`, data)

// 游客查看某个投诉详情
export const complaintViewDetailService = (id) =>
  request.get(`/complainant/conclude/${id}`)

// 游客确认投诉结案
export const complaintConfirmService = (id) =>
  request.put(`/complainant/conclude/${id}`)

// 游客评分投诉结果
export const complaintScoreService = (id, grade) =>
  request.put(`/grading/${id}`, { grade })
