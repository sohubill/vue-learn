<template>
  <div class="container">
      <div class="container">
          <Banner :banners="banners"/>
      </div>
      <div class="container">
        <Channels @change="handleChannel"/>
      </div>
      <div class="container">
          <div v-show="isLoading">
              <Loading />
          </div>
          <div v-show="!isLoading">
              <NewsList :news="news"/>
          </div>
      </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Loading from "../components/Loading";
import Channels from "../components/news/Channels";
import NewsList from "../components/news/NewsList";
import { getNews } from "../services/newsService";
export default {
    components:{
        Banner,
        Loading,
        Channels,
        NewsList
    },
    data(){
        return{
            banners:[
                {
                    url:require('../assets/banner/banner1.jpg'),
                    link:"http://www.baidu.com"
                },
                {
                    url:require('../assets/banner/banner2.jpg'),
                    link:"http://www.baidu.com"
                },
                {
                    url:require('../assets/banner/banner3.jpg'),
                    link:"http://www.baidu.com"
                },
            ],
            chooseId:null,
            news:[],
            isLoading:true
        }
    },
    methods:{
        async handleChannel(channelId){
            this.isLoading=true;
            this.chooseId=channelId;
            var resp = await getNews(channelId);
            console.log(resp);
            this.isLoading=false;
            this.news=resp.contentlist;

        }
    }
}
</script>

<style>

</style>