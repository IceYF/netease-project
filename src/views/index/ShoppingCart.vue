<template>
  <div class="main">
    <div class="blank">
      <div class="hearder-nav">
        <h2>购物车</h2>
        <router-link to="" tag="a">领券</router-link>
      </div>
      <div class="shopping-main">
        <div class="security">
          <ul>
            <li>
              <i></i>
              <span>30天无忧退货</span>
            </li>
            <li>
              <i></i>
              <span>48小时快速退款</span>
            </li>
            <li>
              <i></i>
              <span>满88元免邮费</span>
            </li>
          </ul>
        </div>
        <div class="shopping-login">
          <div class="img"></div>
          <p>去添加点东西吧</p>
          <span @click="login()">登录</span>
        </div>
      </div>
    </div>
    <div class="buy">
      <div class="hearder-nav">
        <h2>购物车</h2>
        <div class="header-right">
          <router-link to="" tag="a">领券</router-link>
          <span>编辑</span>
        </div>
        <span>完成</span>
      </div>
      <div class="shopping-main">
        <div class="security">
          <span>已满足免邮条件</span>
          <div>
            <span>再购元满足免邮条件</span>
            <i>></i>
          </div>
        </div>
        <div class="goods">
          <ul>
            <li>
              <div class="goods-content">
                <i class="goods-icon"></i>
                <div class="goods-img">
                  <img src="" alt="">
                </div>
                <div class="goods-right">
                  <span class="title">adkalsdjaksdjasdasdaddsaskldjs</span>
                  <div class="goods-style">
                    <span>{{  }}</span>
                    <i>v</i>
                  </div>
                  <div class="the-price">
                    <span>￥{{  }}</span>
                  </div>
                  <div class="choose-number">
                    <div class="increase">-</div>
                    <div class="choose"><span>{{  }}</span></div>
                    <div class="to-reduce">+</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="meiyongde">
            <div class="settlement">
              <div class="settlement-left">
                <div>
                  <i class="settlement-icon"></i>
                  <span>已选({{  }})</span>
                </div>
                <span>合计：￥{{  }}</span>
              </div>
              <div class="settlement-right">下单</div>
              <div class="settlement-right ha">删除所选</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
@import '../../styles/reset.less';
// 没有商品添加在购物车时显示的页面
.blank{
  width: 375px;
  height:617px;
  display: none;

  .hearder-nav{
    display: flex;
    width: 100%;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;

    h2{
      font-size: 17px;
      color: #333;
      font-weight: 100;
    }

    a{
      display: block;
      width:44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 17px;
      color: #B4282D;
    }
  }

  .shopping-main{
    width:100%;
    height:573px;
    position: relative;
    background: #f4f4f4;

    .security{
      width:100%;
      height:35px;

      ul{
        width:100%;
        height:35px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li{
          color: #666;
          font-size: 12px;

          i{
            display: inline-block;
            width: 3px;
            height: 3px;
            border:1px solid #999;
            border-radius: 50%;
            margin-right: 3px;
            position: relative;
            top:-2px;
          }
        }
      }
    }

    .shopping-login{
      position: absolute;
      left:0;
      right:0;
      bottom: 186.5px;
      top:186.5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      div{
        width:124px;
        height:124px;
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png) no-repeat;
        background-size: 100%;
      }

      p{
        font-size: 14px;
        color: #999;
      }

      span{
        width:240px;
        height:46px;
        line-height: 46px;
        font-size: 16px;
        color: #fff;
        background: #b4282d;
        text-align: center;
        border-radius: 2px;
        position: relative;
        top: 20px;
      }
    }
  }
}

// 当有商品被添加进购物车时显示的页面
.buy{
  width: 375px;
  height:617px;
  background: #f4f4f4;

  .hearder-nav{
    display: flex;
    width: 100%;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
    background: #fff;

    h2{
      font-size: 18px;
      color: #333;
      font-weight: 100;
    }

    .header-right{
      width: 88px;
      height: 44px;
      display: flex;

      a{
        color: #B4282D !important;
      }

      a,span{
        display: block;
        width:44px;
        height:44px;
        text-align: center;
        line-height: 44px;
        color: #333;
        font-size: 18px;
      }
    }

    span{
      display: none;
      width:44px;
      height:44px;
      text-align: center;
      line-height: 44px;
      color: #333;
      font-size: 18px;
    }
  }

  .shopping-main{
    width:100%;
    height:573px;

    .security{
      width:100%;
      height:40px;
      background: #fff8d8;
      box-sizing: border-box;
      padding: 0 15px;
      position: relative;

      span{
        display: none;
        height:40px;
        line-height: 40px;
        font-size: 16px;
        color: #f48f18;
        position: absolute;
        left: 15px;
      }

      div{
        display: block;

        span{
          display: block;
          height:40px;
          line-height: 40px;
          font-size: 16px;
          color: #f48f18;
          position: absolute;
          left: 15px;
        }

        i{
          height:40px;
          line-height: 40px;
          font-size: 16px;
          color: #f48f18;
          position: absolute;
          right: 15px;
        }
      }
    }

    .goods{
      width:100%;
      min-height:170px;

      ul{
        width:100%;
        min-height:120px;
        margin:0;

        li{
          width:100%;
          height: 110px;
          margin-bottom: 10px;
          padding: 0 15px 0 45px;
          box-sizing: border-box;
          background: #fff;

          .goods-content{
            width:315px;
            height:110px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .goods-icon{
              display: block;
              width:19px;
              height:19px;
              position: absolute;
              left: 13px;
              background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-s5f04b3d871-9579353f4b.png) no-repeat;
              // background-position: 0 -244px; //未选择状态
              background-position: 0 -116px;  //选择状态
              background-size: 100%;
            }

            .goods-img{
              width:85px;
              height:85px;
              background: #f48f18;

              img{
                width:85px;
                height:85px;
              }
            }

            .goods-right{
              display: block;
              width:220px;
              height:85px;
              position: relative;

              .title{
                font-size: 16px;
                color: #333;
                width: 220px;
                min-height:18px;
                max-height:36px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp:2;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              .goods-style{
                padding: 0 3px;
                height:19px;
                background: #FAFAFA;
                border: 1px solid #EFEFEF;
                border-radius: .02667rem;
                margin-top: 4px;

                span{
                  color: #7F7F7F;
                }

                i{
                  display: inline-block;
                  width:19px;
                  height:19px;
                  font-size: 14px;
                  line-height: 19px;
                  text-align: center;
                }
              }

              .the-price{
                position: absolute;
                left: 0;
                bottom: 0;
                color: #333;
                font-size: 14px;
              }

              .choose-number{
                position: absolute;
                right: 0;
                bottom: 0;
                width: 82px;
                height: 28px;
                display: flex;
                border:1px solid #EFEFEF;

                .increase{
                  width:26px;
                  height:26px;
                  line-height: 26px;
                  text-align: center;
                  font-size: 22px;
                  color: #999;
                }

                .choose{
                  width:28px;
                  height:26px;
                  border-left:1px solid #EFEFEF;
                  border-right:1px solid #EFEFEF;
                }

                .to-reduce{
                  width:26px;
                  height:26px;
                  line-height: 26px;
                  text-align: center;
                  font-size: 16px;
                  color: #999;
                }
              }
            }
          }
        }
      }

      .meiyongde{
        width:100%;
        height:50px;

        .settlement{
          width:100%;
          height:50px;
          position: fixed;
          left:0;
          bottom:49px;
          display: flex;

          .settlement-left{
            width:262px;
            height:50px;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;


            div{
              display: flex;

              .settlement-icon{
                display: inline-block;
                width:19px;
                height:19px;
                margin:0 7px 0 15px;
                background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-s5f04b3d871-9579353f4b.png) no-repeat;
                // background-position: 0 -244px; //未选择状态
                background-position: 0 -116px;  //选择状态
                background-size: 100%;
              }

              span{
                font-size: 14px;
                color: #7f7f7f;

              }
            }

            span{
              color: #b4282d;
              font-size: 14px;
            }
          }

          .settlement-right{
            width:113px;
            height:50px;
            line-height: 50px;
            text-align: center;
            font-size: 15px;
            background: #b4282d;
            color: #fff;
          }

          .settlement-frous{
            background: #ccc !important;
          }
        }
      }
    }
  }
}

.ha{
  display: none;
}
</style>