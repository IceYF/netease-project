<template>
  <div id="Heigth">
    <router-view></router-view>
		<div v-if="abc === 0">
			 
    <header class="nav">
			<router-link to="/HomePage">
				<van-icon name="wap-home" />
			</router-link>
      <h1>网易严选</h1>
      <van-icon name="search"/>
      <van-icon name="cart-o"/>
    </header>
    <div style="height:630px;">
      <div class="m-loginTypes">
        <div class="logoWrap">
          <img src="../../assets/yanxuan.png">
        </div>
        <div class="btnWrap">
          <div class="w-button" @click="fn()">
            <van-icon name="orders-o"/>
            <span>手机号登陆</span>
          </div>
          <div class="y-button">
            <van-icon name="envelop-o"/>
            <span>邮箱账号登录</span>
          </div>
          <div class="btn">
            <span href>
              手机号快捷注册
              <van-icon name="arrow"/>
            </span>
          </div>
        </div>
        <div class="thirdWrap">
          <div class="itemWrap">
            <span class="item">
              <van-icon name="chat-o"/>
              <span>微信</span>
            </span>
          </div>
          <div class="itemWrapQQ">
            <span class="item">
              <van-icon name="smile-o"/>
              <span>QQ</span>
            </span>
          </div>
          <div class="itemWrapXL">
            <span class="item">
              <van-icon name="fire-o"/>
              <span>新浪</span>
            </span>
          </div>
        </div>
      </div>
    </div>
		</div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			abc:0,
		}
	}, 
	computed: {
		aaa(){
			if (abc === 1) {
				abc = 0;
			}
		}
	}, 
	methods: {
		fn(){
			this.abc += 1;
			this.$router.push('/Personal/cellphone'); 
		}
	}
}
</script>
<style lang="less">
@import "../../styles/reset.less";
#Heigth {
  height: 100%;
  .nav {
    height: 37px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    background-color: #fafafa;
    h1 {
      font-size: 20px;
      font-weight: 100;
    }
    .van-icon-wap-home {
      margin-left: 15px;
    }
    .van-icon-search {
      position: absolute;
      top: 6px;
      right: 50px;
    }
    .van-icon-cart-o {
      margin-right: 15px;
    }
  }
  .m-loginTypes {
    position: relative;
    height: 100%;
    background: #f2f5f4;
    .logoWrap {
      text-align: center;
      padding: 80px 0;
      img {
        width: 134px;
        height: 45px;
      }
    }
    .btnWrap {
      padding: 0 20px;
      margin-bottom: 146px;
      .w-button {
        margin-bottom: 16px;
        width: 333px;
        height: 45px;
        border: 1px solid #b4282d;
        text-align: center;
        line-height: 45px;
        background-color: #b4282d;
        color: #fff;
        font-size: 16px;
        .van-icon-orders-o {
          font-size: 20px;
          display: flex;
          display: inline-block;
          position: relative;
          top: 4px;
          right: 3px;
        }
      }
      .y-button {
        margin-bottom: 16px;
        width: 333px;
        height: 45px;
        border: 1px solid #b4282d;
        text-align: center;
        line-height: 45px;
        background-color: #fff;
        color: #b4282d;
        font-size: 16px;
        .van-icon-envelop-o {
          font-size: 20px;
          display: flex;
          display: inline-block;
          position: relative;
          top: 4px;
          right: 3px;
        }
      }
      .btn {
        color: #333;
        font-size: 14px;
        text-align: center;
        width: 100%;
      }
      .van-icon-arrow {
        position: relative;
        top: 2px;
        right: 5px;
      }
    }
    .thirdWrap {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 40px;
      height: 20px;
      text-align: center;
      color: #7f7f7f;
      .itemWrap {
        height: 20px;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 20px;
        .item {
          height: 20px;
          position: relative;
          top: 0px;
          font-size: 14px;
          .van-icon-chat-o {
            position: relative;
            top: 2px;
            right: 4px;
          }
        }
      }
      .itemWrapQQ {
        height: 20px;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 20px;
        .item {
          height: 20px;
          position: relative;
          top: 0px;
          font-size: 14px;
          .van-icon-smile-o {
            position: relative;
            top: 2px;
            right: 4px;
          }
        }
      }
      .itemWrapXL {
        height: 20px;
        display: inline-block;
        text-align: center;
        padding: 0 20px;
        .item {
          height: 20px;
          position: relative;
          top: 0px;
          font-size: 14px;
          .van-icon-fire-o {
            position: relative;
            top: 2px;
            right: 4px;
          }
        }
      }
    }
  }
}
</style>
