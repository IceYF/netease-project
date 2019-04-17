 <template>
   <app-scroll class="menu">
     <div class="banner">
       <img :src="data.url"/>
     </div>
     <div class="menu-wrap" v-for="item in data.data" :key="item.id">
       <strong class="title" v-if="item.name">{{item.name}}</strong>
          <ul class="menu-list">
            <li class="menu-item" v-for="value in item.list" :key="value.id">
              <img :src="value.bannerUrl"/>
              <p>{{value.name}}</p>
            </li>
          </ul>
     </div>
   </app-scroll>
 </template>

 <script>
 export default {
   name:'cate-menu',
   props:{
     data:Object 
   }
 }
 </script>
 
 <style lang="less">
 @import '../../styles/reset.less';
  .menu{
    padding: 10px;
    .banner img{
      margin-top:0 ;
        width: 100%;
    }
    .menu-wrap{
        .title{
            &::after{
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                background: #999;
            }
        }
        .menu-list{
            overflow: hidden;
            .menu-item{
                    width: 30.33%;
                    float: left;
                    height: 130px;
                    margin-right: 7px;
                img{
                    width: 80%;
                    margin: 0 auto;
                    margin-top: 5px;
                } 
                p{  
                    line-height: 15px; 
                    font-size: 12px;
                    color: #333;
                    text-align: center;
                }
            }
        }
    }
    }
  

 </style>
 

 
 