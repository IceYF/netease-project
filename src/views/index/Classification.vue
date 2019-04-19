<template>
    <div id="category">
        <van-search placeholder="请输入搜索关键词" v-model="value"  class="ss" disabled="true"/>
        <div class="center">
        <cate-nav :list="navData" v-model="selectIndex"></cate-nav>
        <cate-menu :data="menuData"></cate-menu>
        </div> 
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Scroll from '../../components/Scroll';
import CateNav from "../../components/children/cate-nav";
import CateMenu from "../../components/children/cate-menu"; 
export default {
    data() {
        return {
            value: '',
            selectIndex: 0
        }
    }, 
    components:{
       appScroll: Scroll,
       [CateNav.name]:CateNav,
       [CateMenu.name]:CateMenu
    },
    computed:{
       ...mapState({
        //  左边
          navData:state=>state.category.navData,
        //   右边
          menuData: state=>state.category.menuData
      })
    },
    watch: {
        selectIndex(newVal){
            // 请求选中右边菜单数据
            let id = this.navData[newVal].id;
            this.$store.dispatch('category/getMenuDataAction', {id});
        }
    },
    created(){
        // 左边请求数据
        this.$store.dispatch('category/getNavDataAction');
        // 右边请求数据
        this.$store.dispatch('category/getMenuDataAction',{});
    }
}
</script>

 <style lang="less">
    #category{
        box-sizing: border-box;
        display: flex;
        .van-search__content {
            background-color: #ededed;
            border-radius: .10667rem;
        } 
        .van-field__left-icon {
            margin-left: 100px;
        }           
        .ss{
            width: 100%;
            position: fixed;
            top: 0;
            z-index: 1;
        }
        .center{
           overflow: hidden;
           width: 100%; 
           position: absolute;
           top: 54px;
           bottom:50px;
           display: flex; 
           min-height: 560px;
           font-size: 14px;
           .nav{
            width: 100px;  
            background-color: #fff; 
            .active {
                color: #ab2b2b !important;
            }
            }
            .menu{
                width: 100%; 
                flex: 1;
                background-color: #fff;
            }
        }
    }
 </style>
  
 
 
