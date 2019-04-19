 <template>
    <app-scroll class="nav">
      <div v-for="(item,index) in list" :key="item.id"
        :class="{active: value === index}"
         @click="selectAction(index)">
        {{item.name}}
      </div>
    </app-scroll>
 </template>

 <script>
 export default {
   name:'cate-nav',
   props:{
     list: Array,
     value : Number
   },
   methods:{
     selectAction(index){
       this.$emit('input',index);
     }
   }
 }
 </script>
 <style lang="less">
    .scroll{
<<<<<<< HEAD
      text-align: center; 
=======
      text-align: center;
>>>>>>> ff634f9d46d4dabfc74d999074f06ad85c2139e7
      line-height: 44px
    }
    .active{
      color: red ;
    }
 </style>
 
 
 