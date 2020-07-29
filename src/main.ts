import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import VueScrollReveal from "vue-scroll-reveal";

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
