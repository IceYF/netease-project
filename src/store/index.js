import Vue from 'vue';
import Vuex from 'vuex';
import category from './moduls/category';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
      category
    }
  });
export default store;