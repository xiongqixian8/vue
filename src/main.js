import Vue from 'vue'
import App from './App'
import router from './router'
// 顶部固定引入
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
// 底部固定样式引入
import './dist/mui/css/mui.min.css'

Vue.component(Header.name, Header)

new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
