<template>
    <van-tabbar 
      v-model="active"
      active-color="orange"
    >
      <van-tabbar-item 
        v-for="(item,index) in tas"
        :key="index"
        :icon="item.icon"
        :to="item.href"
      >
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  data (){
    let activeNumber = this.$route.meta.tabIndex;
    return{
      active: activeNumber,
    }
  },

  props: {
    tas: {
      type: Array
    }
  }
}
</script>
