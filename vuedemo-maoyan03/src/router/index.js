import Vue from 'vue'
import Router from 'vue-router'
// 引入
import index from '@/pages/index'
import movieDetail from '@/pages/movieDetail'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index,
			meta:{
				keepAlive:true // 在meta属性中设置自定义属性，为true则存活
			}
		},
		{
			path: '/movieDetail',
			name: 'movieDetail',
			component: movieDetail
		}
	]
})
