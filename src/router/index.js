import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


export default new VueRouter({
	routes: [
		{
			path: '/',
			component: () => import('../views/index/Index.vue'),
			children: [
				{ path: 'HomePage', name: 'HomePage', component: () => import('../views/home/HomePage.vue'), meta: { tabIndex: 0 }, children:[
					{ path: 'HomeRecommend', name: 'HomeRecommend', component: () => import('../views/home/children/HomePage-recommend.vue')},
					{ path: 'HomeMenu', name: 'HomeMenu', component: () => import('../views/home/children/HomePage-menu.vue')},
					{ path: '', redirect: '/HomePage-recommend.vue'}
				]
				},
				{ path: 'Classification', name: 'Classification', component: () => import('../views/index/Classification.vue'), meta: { tabIndex: 1 } },
				{ path: 'ShoppingCart', name: 'ShoppingCart', component: () => import('../views/index/ShoppingCart.vue'), meta: { tabIndex: 2 } },

				{ path: '', redirect: '/HomePage' }
			]
		},
		{ path: '/merchants/:id', name: 'merchants', component: () => import('../views/details/index.vue') },
		{
			path: '/Personal',
			name: 'Personal',
			component: () => import('../views/index/Personal.vue'),
			meta: { tabIndex: 3 },
			children: [
				{ path: "cellphone", component: () => import('../views/details/cellphone.vue') },
			]
		},
		{ path: '*', redirect: '/HomePage' }
	]
})

