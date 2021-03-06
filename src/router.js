import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * 引入 vant 组件库
 */
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

export default new VueRouter({
    routes: [
        { path: '/HomePage', component: () => import('./views/HomePage.vue') },
        { path: '/Classification', component: () => import('./views/Classification.vue') },
        { path: '/ShoppingCart', component: () => import('./views/ShoppingCart.vue') },
        { path: '/Personal', component: () => import('./views/Personal.vue') },
    ]
})

