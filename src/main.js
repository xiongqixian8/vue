import Vue from 'vue'
import App from './App'
import router from './router'

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)


// 顶部固定引入
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header)
// 底部固定样式引入
import './dist/mui/css/mui.min.css'
import './dist/mui/css/icons-extra(1).css'

// 轮播图引入
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)



new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
