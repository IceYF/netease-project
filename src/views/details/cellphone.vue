<template>
  <div id="Heigth">
    <router-view></router-view>
    <header class="nav">
      <router-link to="HomePage" tag="div">
        <van-icon name="wap-home"/>
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
        <div class="padd">
          <van-cell-group>
            <van-field label="手机号" type="textarea" placeholder="请输入电话号码" rows="1" autosize/>
          </van-cell-group>
          <van-cell-group>
            <van-field center clearable label="短信验证码" placeholder="请输入短信验证码">
              <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
          </van-cell-group>
          <router-link to="index/Personal.vue">
            <div class="y-button">
              <span>其他登录方式</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  methods: {
    htuei() {
      this.$router.go(-1);
    }
  }
};
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
    .padd {
      padding: 0 20px;
      .van-cell-group {
        margin-bottom: 20px;
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
      }
    }
  }
}
</style>
 