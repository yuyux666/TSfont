import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const lazyPlugin = {
  install(app) {
    // 定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el是指令绑定前的元素img
        // binding.value 等号后绑定的表达式的值 图片url
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting)
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value
            stop() // 停止监听以免内存浪费
          }
        })
      }
    })
  }
}
