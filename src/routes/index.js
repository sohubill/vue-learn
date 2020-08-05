import Vue from "vue";
import VueRouter from "vue-router";
import config from "./config";

//1.安装vue-router
Vue.use(VueRouter);

//2.创建路由对象
var router=new VueRouter(
    //配置
    config
);
export default router;