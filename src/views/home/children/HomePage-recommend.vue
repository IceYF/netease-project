<template>
  <!-- 商品主体部分 -->
  <div class="main">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in BannerList" :key="index">
        <img :src="item.picUrl" width="100%" height="185px" dispaly="block">
      </van-swipe-item>
    </van-swipe>
    <div class="security">
      <a href="javascript:void(0)" v-for="(item,index) in Security" :key="index">
        <img :src="item.imgUrl" alt="">
        {{ item.text }}
      </a>
    </div>
    <!-- 商品类型导航 -->
    <div class="commodity-type">
      <a href="#" v-for="(item,index) in CommodityTypeList" :key="index">
        <div class="imgage">
          <img :src="item.picUrl" alt>
        </div>
        <p>{{ item.text }}</p>
      </a>
    </div>
    <!-- 新人专享礼 -->
    <div class="new-exclusive">
      <div class="title">
        <h2>新人专享礼</h2>
      </div>
      <div class="exclusive-list">
        <div class="exclusive-left">
          <a href="#">
            <span>
              <p>新人专享礼包</p>
            </span>
            <div>
              <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
          </a>
        </div>
        <div class="exclusive-right">
          <div class="exclusive-right-top">
            <a href="#">
              <div class="exclusive-text">
                <span>福利社</span>
                <p>今日特惠</p>
              </div>
              <div class="exclusive-img">
                <img src="https://yanxuan.nosdn.127.net/f9a8291c259678a0a2bfbeffe7d04d0e.png" alt=""> 
                <div class="exclusive-icon">
                  <span>￥83.8</span>
                  <p>￥120</p>
                </div>
              </div>
            </a>
          </div>
          <div class="exclusive-right-top exclusive-right-bottom">
            <a href="#">
              <div class="exclusive-text">
                <span>新人拼团</span>
                <p></p>
                <i>一元起包邮</i>
              </div>
              <div class="exclusive-img">
                <img src="https://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt=""> 
                <div class="exclusive-icon">
                  <span>￥313</span>
                  <p>￥380</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 品牌制造商直供 -->
    <div class="brand-supplier">
      <div class="title">
        <h2>品牌制造商直供</h2>
        <a href="#">更多></a>
      </div>
      <div class="brand-supplier-main">
        <a href="#" 
          v-for="(item,index) in BrandSupplierList"
          :key="index"
        >
          <img :src="item.picUrl" alt="">
          <div class="brand-supplier-title">
            <h4>{{ item.name }}</h4>
            <div>
              <span>{{ item.floorPrice }}元起</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div class="hot-product">
      <div class="hot-product-title">
        <h2>类目热销榜</h2>
      </div>
      <div class="hot-product-main">
        <div class="top">
          <a href="javascript:void(0)"
            v-for="(item,index) in TopList"
            :key="index"
          >
            <span>{{ item.categoryName }}</span>
            <img :src="item.picUrl" alt="">
          </a>
        </div>
        <div class="bottom">
          <a href="javascript:void(0)"
            v-for="(item,index) in BottomList"
            :key="index"
          >
            <span>{{ item.categoryName }}</span>
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 限时购 -->
    <div class="Time-limit">
      <div class="Time-limit-title">
        <h2>限时购</h2>
        <div>更多></div>
      </div>
      <div class="Time-limit-main">
        <router-link
          class="Time-limit-List"
          v-for="(item,index) in TimeLimitList"
          :key="index"
          to=""
        >
          <div class="Time-limit-listImg">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="Time-limit-text">
            <span class="actualPrice">￥{{ item.activityPrice }}</span>
            <span class="retailPrice">￥{{ item.originPrice }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <!-- 购物指南 -->
    <div class="guide">
      <router-link 
        class="guide-List"
        v-for="(item,index) in GuideList"
        :key="index"
        to=""
      >
        <div class="guide-top">
          <h3>{{ item.styleItem.title }}</h3>
          <span>{{ item.styleItem.desc }}</span>
        </div>
        <div class="guide-bottom">
          <img :src="item.styleItem.picUrlList[0]" alt="">
          <img :src="item.styleItem.picUrlList[1]" alt="">
        </div>
      </router-link>
    </div>
    <!-- 推荐列表 -->
    <div class="recommended">
      <div class="recommended-list"
        v-for="(item,index) in RecommendedList"
        :key="index"
      >
        <router-link to="" class="recommended-imgs">
          <img :src="item.titlePicUrl" alt="">
        </router-link>
        <div class="recommended-bottom">
          <div class="perspective">
            <div class="perspective-list">
              <router-link 
                class="recommended-Child-List"
                to=""
                v-for="(list,index) in item.itemList"
                :key="index"
              >
                <div class="list-img">
                  <img :src="list.listPicUrl" alt="">
                </div>
                <div class="list-text">
                  <p>{{ list.name }}</p>
                  <div class="i">
                    <i>
                      ￥{{ list.retailPrice }}
                    </i>
                  </div>
                  <div class="span">
                    <span
                      v-show="list.promTag"
                    >
                      {{ list.promTag }}
                    </span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部版权信息 -->
    <div class="footer">
      <div class="download">
        <span>下载APP</span>
        <span>电脑版</span>
      </div>
      <div class="copy">
        <p>网易公司版权所有 © 1997-2020</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    let HomeCOntentNumber = this.$route.meta.HomeCOntent;
    return {
      BannerList: [],
      // 消费保障数据获取
      Security: [
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png",
          text: "网易自营品牌"
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png",
          text: "30天无忧退货"
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png",
          text: "48小时快速退款"
        }
      ],
      CommodityTypeList: [],
      BrandSupplierList: [],
      TopList: [],
      BottomList: [],
      TimeLimitList: [],
      GuideList: [],
      RecommendedList: [],
      vModel: HomeCOntentNumber,
    }
  },

  methods: {
    /**
     * 通过 axios 请求 首页轮播图模块 的后台数据
     */
    BannerMethods() {
      axios.get("http://129.204.72.71:8000/api/home/bannerlist").then(res => {
        // console.log(res.data)
        this.BannerList = res.data.data;
      });
    },

    /**
     * 通过 axios 请求 商品种类导航模块 的后台数据
     */
    CommodityTypeMethods() {
      axios.get("http://129.204.72.71:8000/api/home/catelist").then(res => {
        // console.log(res.data)
        this.CommodityTypeList = res.data.data.kingKongList;
      });
    },

    /**
     * 通过 axios 请求 品牌制造商直供模块 的后台数据
     */
    BrandSupplierMethods () {
      axios.get("http://129.204.72.71:8000/api/home/tagList").then(res => {
        // console.log(res.data)
        this.BrandSupplierList = res.data.data;
      })
    },

    /**
     * 通过 axios 请求 类目热销榜模块 的后台数据
     */
    HotProductMethods () {
      axios.get("http://129.204.72.71:8000/api/home/catehotsell").then(res => {
        // console.log(res.data.data.categoryList)
        var HPList = res.data.data.categoryList;
        this.TopList = HPList.slice(0,2);
        this.BottomList = HPList.slice(2);
      })
    },

    /**
     * 通过 axios 请求 限时购模块 的后台数据
     */
    TimeLimitMethods () {
      axios.get("http://129.204.72.71:8000/api/home/flashsale").then(res => {
        // console.log(res.data)
        this.TimeLimitList = res.data.data.itemList
      })
    },

    /**
     * 通过 axios 请求 购物指南模块 的后台数据
     */
    GuideMethods () {
      axios.get("http://129.204.72.71:8000/api/home/shoppingguide").then(res => {
        // console.log(res.data)
        this.GuideList = res.data.data
      })
    },

    /**
     * 通过 axios 请求 推荐列表模块 的后台数据
     */
    RecommendedMethods () {
      axios.get("http://129.204.72.71:8000/api/home/top/catelist").then(res => {
        // console.log(res.data)
        this.RecommendedList = res.data.data
      })
    }
  },

  created () {
    /**
     * 调用首页轮播图方法
     */
    this.BannerMethods();

    /**
     * 调用首页商品种类方法
     */
    this.CommodityTypeMethods();

    /**
     * 调用 品牌制造商直供模块 方法
     */
    this.BrandSupplierMethods()

    /**
     * 调用 类目热销榜模块 方法
     */
    this.HotProductMethods()

    /**
     * 调用 显示购模块 方法
     */
    this.TimeLimitMethods()

    /**
     * 调用 购物指南模块 方法
     */
    this.GuideMethods()

    /**
     * 调用 推荐列表模块 方法
     */
    this.RecommendedMethods()
  }
}
</script>

<style lang="less">
@import "../../../styles/reset.less";
// main主体部分
.main {
  width: 375px;
  min-height: 529px;
  position: absolute;
  top: 88px;
  left: 0;
  bottom: 50px;
  overflow-x: hidden;
  overflow-y: auto;

  // 轮播图部分
  .van-swipe__indicators {
    bottom: 20px;

    .van-swipe__indicator {
      border-radius: 0;
      height: 2px;
      width: 20px;
      background: #fff;
      opacity: 0.4;
    }
    .van-swipe__indicator--active {
      opacity: 1;
      background: #fff;
    }
  }

  //消费权益保障部分
  .security {
    width: 100%;
    height: 36px;
    display: flex;
    background: #fff;
    overflow: hidden;

    a {
      color: #b4282d;
      font-size: 10px;
      display: flex;
      height: 100%;
      flex: 1;
      justify-content: center;
      align-items: center;

      img {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
      }
    }
  }

  // 商品种类导航部分
  .commodity-type {
    box-sizing: border-box;
    padding-bottom: 30px;
    width: 375px;
    flex-wrap: wrap;
    display: flex;

    a {
      display: flex;
      flex: 0 0 20%;
      height: 78px;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      .imgage {
        display: block;
        width: 55px;
        height: 55px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      p {
        font-size: 12px;
        color: #333;
      }
    }
  }

  // 新人专享礼
  .new-exclusive {
    width: 100%;
    height: 279px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    .title {
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        font-size: 18px;
        font-weight: 100;
        position: relative;

        &::before {
          content: "";
          width: 12px;
          height: 1.5px;
          background: #333;
          position: absolute;
          top: 12px;
          left: -22px;
        }

        &::after {
          content: "";
          width: 12px;
          height: 1.5px;
          background: #333;
          position: absolute;
          top: 12px;
          right: -22px;
        }
      }
    }

    .exclusive-list {
      width: 345px;
      height: 219px;
      display: flex;
      justify-content: space-between;

      .exclusive-left {
        width: 171.5px;
        height: 100%;
        background: #f9e9cf;

        a{
          display: block;
          width:100%;
          height:100%;
  
          span{
            display: block;
            width: 100%;
            height:50px;
            box-sizing: border-box;
            padding:20px 0 0 20px;

            p{
              font-size: 16px;
              color: #333;
            }
          }

          div{
            width: 100%;
            height:150px;
            display: flex;
            justify-content: center;
            align-items: center;

            img{
              width:129px;
              height:129px;
            }
          }
        }
      }

      .exclusive-right {
        width: 171.5px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .exclusive-right-top {
          width: 100%;
          height: 108.5px;
          background: #fbe2d3;
          position: relative;

          a {
            display: block;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 10px 0 0 13px;

            .exclusive-text {

              span {
                font-size: 18px;
                font-family: PingFangSC-Medium;
                color: #333;
              }

              p {
                color: #7f7f7f;
              }

              i{
                height: 16px;
                line-height: 16px;
                color: #fff;
                background: #CBB693;
                border-radius: 2px;
                text-align: center;
                box-sizing: border-box;
                padding:0 5px;
              }
            }

            .exclusive-img {
              width: 100px;
              height: 100px;
              position: absolute;
              right: 0;
              bottom: 0;

              img{
                width: 100%;
                position: absolute;
              }

              .exclusive-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #F59524;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: absolute;
                right: 15px;

                span{
                  font-size: 10px;
                  color: #fff;
                }

                p{
                  font-size: 8px;
                  color: #fff;
                  text-decoration: line-through;
                }
              }
            }
          }
        }

        .exclusive-right-bottom {
          width: 100%;
          height: 108.5px;
          background: #ffecc2;
        }
      }
    }
  }

  // 品牌制造商直供
  .brand-supplier{
    width:100%;
    height:341px;
    background: #fff;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding:0 20px 20px 20px;

    .title{
      width:100%;
      height:50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2{
        color: #333;
        font-weight: 100;
        font-size: 18px;
      }

      a{
        color: #333;
        font-weight: 100;
        font-size: 18px;
      }
    }

    .brand-supplier-main{
      width:100%;
      height:291px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      flex-wrap: wrap;

      a{
        width:166.5px;
        height: 130px;
        display: flex;
        justify-content: flex-start;
        margin-bottom:2px; 

        img{
          width:100%;
          height:100%;
          position: relative;
        }

        .brand-supplier-title{
          position: absolute;
          height: 50px;
          width: 166.5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;

          h4{
            font-size: 14px;
            font-weight: 100;
            color: #333;
          }

          div{


            span{
              font-size: 10px;
              color: #7f7f7f;
            
            }
          }

          div:first-of-type{
            &::after{
              content: "上新";
              text-align: center;
              height:16px;
              font-size: 10px;
              line-height: 16px;
              color: #fff;
              background: #CBB693;
              padding: 0 5px;
              margin-left: 5px;
              border-radius: 2px;
            }
          }
        }
      }
    }
  }

  // 类目热销榜
  .hot-product{
    width:375px;
    height:360px;
    background: #fff;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding:0 20px 20px 20px;
    
    .hot-product-title{
      width:100%;
      height:50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      h2{
        font-size: 18px;
        font-weight: 100;
      }
    }

    .hot-product-main{
      width:100%;
      height:295px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .top{
        width:100%;
        height: 100px;
        display: flex;
        justify-content: space-between;

        a{
          display: block;
          width:165px;
          height:100px;
          position: relative;
          background: #EBEFF6;

          span{
            font-size: 14px;
            color: #333;
            position: absolute;
            top: 30px;
            left: 10px;

            &::before{
              content: '';
              position: absolute;
              left: 0;
              bottom: -10px;
              width: 24px;
              height: 2px;
              background: #333;
            }
          }

          img{
            width:100px;
            height:100px;
            position: absolute;
            top:0;
            right:0;
          }
        }

        a:first-child{
          background: #F9F3E4;
        }

      }

      .bottom{
        width: 100%;
        height:190px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        a{
          display: flex;
          width:80px;
          height:90px;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          background: #F5F5F5;

          span{
            font-size: 12px;
            color: #333;
          }

          img{
            width:60px;
            height:60px;
          }
        }
      }
    }
  }

  //限时购 
  .Time-limit{
    width:100%;
    height:349px;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 0 20px 20px 20px;
    background: #fff;

    .Time-limit-title{
      width:100%;
      height:50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      color: #333;

      div{
        font-size: 16px;
      }
    }

    .Time-limit-main{
      width:100%;
      height:299px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: space-between;

      .Time-limit-List{
        display: flex;
        width: 108px;
        height: 150px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .Time-limit-listImg{
          width:108px;
          height:108px;
          background: #F5F5F5;
          
          img{
            width:108px;
            height:108px;
          }
        }

        .Time-limit-text{


          .actualPrice{
            font-size: 16px;
            color: #b4282d;
          }

          .retailPrice{
            font-size: 12px;
            color: #7F7F7F;
            text-decoration: line-through;
          }
        }
      }
    }
  }

  // 购物指南
  .guide{
    width:100%;
    height:285px;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 8px 20px 17px 20px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    .guide-List{
      width:166px;
      height:128px;
      background: #F5F5F5;

      .guide-top{
        width:100%;
        height:57px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-sizing: border-box;
        padding-left: 10px;
        

        h3{
          font-size: 14px;
          color: #333;
          font-weight: 100;
        }

        span{
          font-size: 10px;
          color: #7f7f7f
        }
      }

      .guide-bottom{
        display: flex;
        width:100%;
        height:75px;
        justify-content: space-around;

        img{
          width:75px;
          height:75px;
        }
      }
    }
  }

  // 推荐列表
  .recommended{
    width:100%;
    min-height: 2400px;

    .recommended-list{
      width:100%;
      height:390px;
      margin-bottom: 10px;
      background: #fff;

      .recommended-imgs{
        display: block;
        width:100%;
        height:185px;
        margin-bottom: 10px;

        img{
        width: 100%;
        height: 100%;
        }
      }

      .recommended-bottom{
        width:100%;
        height:195px;
        box-sizing: border-box;
        padding: 0 20px 20px 20px;

        .perspective{
          width:100%;
          height:100%;
          overflow-y: hidden;
          overflow-x: auto;

          .perspective-list{
            min-width:990px;
            height:100%;


            .recommended-Child-List{
              display: block;
              float: left;
              width:100px;
              height:175px;
              margin-right: 10px;

              .list-img{
                width:100px;
                height:100px;
                background: #f4f4f4;

                img{
                  width:100%;
                  height:100%;
                }
              }

              .list-text{
                width:100px;
                height:75px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;

                p{
                  font-size: 12px;
                  color: #333;
                  width:100%;
                  min-height:18px;
                  max-height:36px;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp:2;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }

                i{
                  font-size: 12px;
                  color: #b4282d;
                }

                span{
                  height:16px;
                  line-height: 16px;
                  padding: 0 5px;
                  color: #CE2424;
                  border: 1px solid #CE2424;
                  border-radius: 5px; 
                }
              }
            }
          }
        }
      }
    }
  }

  // 底部版权信息
  .footer{
    width:100%;
    height:125px;
    background: #414141;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .download{
      width:100%;
      height: 33px;
      display: flex;
      justify-content: center;

      span{
        display:block;
        width:86px;
        height:31px;
        margin:0 15px;
        border:1px solid #999;
        border-radius: 2px;
        color: #fff;
        text-align: center;
        line-height: 31px;
        

      }
    }

    .copy{
      margin-top: 15px;
      color: #999;
      text-align: center;
    }
  }
}
</style>
