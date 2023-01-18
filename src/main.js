import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'jquery';
import "popper.js"; 
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/app.scss";
import AOS from 'aos';
import "aos/dist/aos.css"

Vue.config.productionTip = false;


new Vue({
  created(){
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount("#app");
