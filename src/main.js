import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Vant from 'vant';

import 'vant/lib/index.css';
import store from './store'//引入store
import Scroll from './components/Scroll.vue';
Vue.component(Scroll.name,Scroll);

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,//使用store
}).$mount('#app')


 
 