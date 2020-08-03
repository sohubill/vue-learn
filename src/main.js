import Vue from "vue";
import App from "./App.vue";
import './services/newsService';

new Vue({
  render: h => h(App)
}).$mount("#app");
