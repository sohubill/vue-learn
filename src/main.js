import Vue from "vue";
import App from "./App.vue";
import './assets/styles/global.css';
import router from './routes';

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
