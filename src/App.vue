<template>
  <div id="app">
    <router-view></router-view>

    <TabBar :tas="tas"></TabBar>
  </div>
</template>

<script>
import TabBar from './components/TabBar';
export default {
  name: 'app',

  data() {
    return {
      tas: [
        { name: '首页', href: '/HomePage', icon: 'wap-home' },
        { name: '分类', href: '/Classification', icon: 'coupon-o' },
        { name: '购物车', href: '/ShoppingCart', icon: 'shopping-cart-o' },
        { name: '个人', href: '/Personal', icon: 'contact' },
      ]
    }
  },

  components: {
    TabBar
  }
}
</script>

