import {api,request} from '../../ajax'


const state = {
  navData: [],
  menuData: {
      url: '',
      data: []
  }
}

const mutations = {
   setNavData(state,param){
     state.navData = param;
   },
   setMenuData(state,param){
    state.menuData = param;
  }
}

const actions = {
  async getNavDataAction(context){
    let result = await request.get(api.CATE_NAV_API);
    let newData = result.data.data.map(({id,name})=>({id,name}));
    context.commit('setNavData',newData);
  },
  async getMenuDataAction(context,{id}){
    let result = await request.get(api.CATE_MENU_API,{categoryId:id});
    let url = result.data.data.currentCategory.wapBannerUrl;
    let newData = result.data.data.categoryGroupList.map(({id,name,categoryList})=>{
      let list = categoryList.map(({id,name,wapBannerUrl})=>({id,name,bannerUrl:wapBannerUrl}));
      return{
        id,
        name,
        list 
      }
    })
    context.commit('setMenuData',{url,data:newData});
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}