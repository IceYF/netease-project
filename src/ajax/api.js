// 开发环境
// const DEV_HOST = 'http://localhost:8080';
// // 测试环境
const SET_HOST = 'http://129.204.72.71:3000';
// 生产环境
// const PRO_HOST = 'http://129.204.72.71:80';

 
/**
 * 分类接口
 * method:GET
 */
const CATE_NAV_API = '/api/category/listmap';

/**
 * 分类数据接口
 * method: GET
   params: categoryId(Y)
 */
const CATE_MENU_API = '/api/category/listmap/group';

export default {
  HOST: SET_HOST,
  CATE_NAV_API,
  CATE_MENU_API
}