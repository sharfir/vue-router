import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);
//定义组件
const First={template:'<div><h1>我是第一个子页面</h1></div>'};
// const childB={template:'<div><h1>我是第二个子页面</h1></div>'};
import Last from './component/b.vue';

/*
 *创建一个路由器实例
 *配置路由器规则
 */
const router = new VueRouter({
	mode: 'history',
  	base: __dirname,
	routes:[
		{
			path:'/first',
			component:First
		},
		{
			path:'/last',
			component:Last
		}
	]
})

const app=new Vue({
	router:router,
  	render: h => h(App)
}).$mount('#app')