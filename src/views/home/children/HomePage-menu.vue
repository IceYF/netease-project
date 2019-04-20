<template>
  <div class="main">
    <div class="menu-img">
      <img src="" alt="">
    </div>
    <div class="title">
      <h2>{{  }}</h2>
      <p>{{  }}</p>
    </div>
    <div class="menu-list">
      <ul>
        <li
          class="menu-list-li"
        
        >
          <router-link to="" tag="a">
            <div class="menu-list-top">
              <img src="" alt="">
              <span class="menu-list-img"></span>
            </div>
            <div class="menu-list-name"></div>
            <span class="the-price">￥{{  }}</span>
            <span class="preferential">{{  }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {





  methods: {
    /**
       * 通过 axios 请求 商品种类导航模块 的后台数据
     */
    ListOfGoods () {
      axios.get('http://129.204.72.71:8000/api/home/catelist').then(res => {
        // console.log(res.data.data.kingKongList);
        let list = res.data.data.kingKongList;
        let SchemeUrlList = [];
        for (let index = 0; index < list.length; index++) {
          // console.log(list[index].schemeUrl)
          let SchemeUrl = list[index].schemeUrl;
          SchemeUrl = SchemeUrl.split('&');
          SchemeUrl = SchemeUrl[0].split('=');
          SchemeUrl = SchemeUrl[1];
          if (SchemeUrl) {
            SchemeUrlList.push(SchemeUrl);
          }
          // console.log(SchemeUrlList)
        }
        // console.log(SchemeUrlList)
        // for (let index = 0; index < SchemeUrlList.length; index++) {
        //   // console.log(SchemeUrlList[index])
        //   let string = SchemeUrlList[index];
        //   axios.get('http://129.204.72.71:8000/api/home/catelist/itemlist?id=1005000').then(res => {
        //     console.log(res.data)
        //   }).catch(err => {
        //     console.log(err)
        //   })
          
        // }
        axios.get('http://129.204.72.71:8000/api/home/catelist/itemlist',{
          params: {
            id:SchemeUrlList[0]
          }
        }).then(res => {
            // console.log(res.data)
            var ListOfGoodsList = res.data.data.categoryItemList.map(({
              frontDesc,
              name,
              wapBannerUrl,
              itemList
            }) => ({
              frontDesc,
              name,
              wapBannerUrl,
              itemList
            }));
            // console.log(ListOfGoodsList)
          }).catch(err => {
            // console.log(err)
          })
      })
    }
  },

  created () {
    /**
     * 调用首页商品种类方法
     */
    this.ListOfGoods();
  }
}
</script>

<style lang="less">
@import "../../../styles/reset.less";
.main{
  width: 375px;
  min-height: 529px;
  position: absolute;
  top: 88px;
  left: 0;
  bottom: 50px;
  overflow-x: hidden;
  overflow-y: auto;

  .menu-img{
    width:100%;
    height:185px;
    margin-bottom: 10px;

    img{
      width:100%;
      height:100%;
    }
  }  

  .title{
    width:100%;
    height:60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
      font-size: 16px;
    }

    p{
      font-size: 12px;
      color: #999;
      margin-top: 10px;
    }
  }

  .menu-list{
    width: 100%;
    min-height: 2900px;

    ul{
      width:100%;
      height:100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      .menu-list-li{
        width:170px;
        height:280px;
        margin-bottom: 10px;


        a{
          display: block;
          width: 100%;
          height:100%;

          .menu-list-top{
            width:100%;
            height:194px;
            
            .menu-list-img{
              width:100%;
              height:24px;
            }

            img{
              width:100%;
              height:170px;
            }
          }

          .menu-list-name{
            width:100%;
            height:20px;
            margin-top: 7px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 16px;
            color: #333;
          }

          .the-price{
            width:100%;
            height:24px;
            color: #b4282d;
            font-size: 18px;
          }

          .preferential{
            font-size: 12px;
            color: #CE2424;
            height: 16px;

          }
        }
      }
    }
  }
}
</style>
