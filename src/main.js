import './styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Toast } from 'vant'
//吴炫境
// 引入懒加载插件并注册
import { lazyPlugin } from './directives'
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(createPinia().use(persist))
app.use(Toast)

app.mount('#app')
