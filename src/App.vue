<template>
  <div id="app">
    <h1>
      你好 vue
    </h1>
    <p v-if='show' style='width:1080px;margin:0 auto'>
      <Banner :banners="banners"/>
    </p>
    <button @click="show=!show">切换</button>
  </div>
</template>

<script>
import Banner from './components/Banner'
export default {
  components:{
    Banner
  },
  data(){
    return {
      banners:[
        {
          url:require("./assets/banner/banner1.jpg"),
          link:"www.baidu.com"
        },
                {
          url:require("./assets/banner/banner2.jpg"),
          link:"www.qq.com"
        },
                {
          url:require("./assets/banner/banner3.jpg"),
          link:"www.taobao.com"
        }
      ],
      show:true
    }
  }
}
</script>


