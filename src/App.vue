<template>
  <div id="app">
    <div v-if='show' style='width:1080px;margin:0 auto'>
      <!-- <Banner :banners="banners"/> -->
      <Channels />
    </div>
    <!-- <button @click="show=!show">切换</button> -->
  </div>
</template>

<script>
// import Banner from './components/Banner';
import Channels from './components/news/Channels';
export default {
  components:{
    Channels
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

<style>

</style>
