<template>
  <div>
      <Center>
          新闻{{$route.params.id}}
      </Center>
      <div>
          <Pager :page="page" :total="total" :limit="limit" :panelNumber="panelNumber" @changePage="handleChange"/>
      </div>
  </div>
</template>

<script>
import Center from "../components/Center";
import Pager from "../components/Pager";
export default {
    components:{
        Center,
        Pager
    },
    data(){
        return{
            page:3,
            total:1201,
            limit:10,
            panelNumber:6
        }

    },
    methods:{
        handleChange(newPage){
            this.page=newPage;
        }
    }
}
</script>

<style>

</style>