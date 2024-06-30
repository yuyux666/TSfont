import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

// 导出
export default pinia
// 等价于import和export
export * from './modules/user'
export * from './modules/emergency'
export * from './modules/entertainment'
export * from './modules/scene'
export * from './modules/hotel'
