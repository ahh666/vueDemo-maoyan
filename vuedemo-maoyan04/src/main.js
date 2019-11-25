// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import pageTitle from './components/pageTitle'
import pageFooter from './components/pageFooter'
import loading from './layout/loading'
import icon from './layout/icon'

// 注册全局组件
Vue.component('pageTitle',pageTitle)
Vue.component('pageFooter',pageFooter)
Vue.component('loading',loading)
Vue.component('icon',icon)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
import errorImg from '../src/assets/img/error.png'
import loadingImg from '../src/assets/img/loading.gif'

// 加载图片懒加载插件
Vue.use(VueLazyload,{
  error: errorImg,
  loading: loadingImg
})

// 在生产环境下把注释全部去掉
Vue.config.productionTip = false

// 是否启动代码检查，不要删除
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
