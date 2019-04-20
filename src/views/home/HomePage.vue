<template>
  <div id="main">
    <!-- logo和search搜索框 -->
    <div class="header">
      <div class="header-logo">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          alt
        >
      </div>
      <div class="search">
        <van-search placeholder="请输入搜索关键词" v-model="value" disabled="true"/>
      </div>
      <!-- 横向导航 -->
      <van-tabs
        @click="content"
      >
        <van-tab 
          v-for="(item,index) in NavList" 
          :key="index" 
          :title="item.name"
        ></van-tab>
      </van-tabs>
    </div>
    <!-- 首页主体内容切换路由 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 固定小图标 -->
    <router-link tag="a" to="" class="box-icon"></router-link>
  </div>
</template>

<script>
import HomePageRecommend from './children/HomePage-recommend';
import HomePageMenu from './children/HomePage-menu';
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      NavList: [],
      MainList: ["HomeRecommend","HomeMenu"],
    };
  },

  components: {
    HomePageRecommend,
    HomePageMenu,
  },

  methods: {
    /**
     * 通过 axios 请求 首页横向导航模块 的后台数据
     */
    NavMethods() {
      axios.get("http://129.204.72.71:8000/api/catelist").then(res => {
        // console.log(res.data)
        var navArray = [{id:1000001,name:"推荐"}];
        var navlist = res.data.data.map(({id ,name}) =>({id, name}));
        var NavLists = navArray.concat(navlist);
        NavLists = NavLists.map(({id ,name}) =>({id, name}));
        // console.log(NavLists)
        this.NavList = NavLists;
      });
    },

    content(index) {
      // console.log(index)
      this.$router.push({name: this.MainList[index]});
    }
  },

  created() {
    /**
     * 调用首页横向导航方法
     */
    this.NavMethods();
  }
};
</script>

<style lang="less">
@import "../../styles/reset.less";
.main {
  background: #f4f4f4;
}
// header头部部分
.header {
  width: 375px;
  height: 88px;
  position: relative;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;

  .header-logo {
    float: left;
    display: inline-block;
    width: 79px;
    height: 23.99px;
    margin: 10px 10px 10px 15px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .header-search {
    float: left;
    display: inline-block;
  }

  // search组件的样式修改
  .van-search {
    padding: 5px 15px 5px 0;
  }
}

// 固定小图标
.box-icon{
  display: block;
  position: fixed;
  right:0;
  bottom: 150px;
  width:65px;
  height:50px;
  border-radius: 50px 0 0 50px;
  background:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png) no-repeat;
  background-size: 100%;
}
</style>
