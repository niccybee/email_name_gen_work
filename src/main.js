import Vue from "vue";
import VueClipboard2 from "vue-clipboard2";
import VueToasted from "vue-toasted";
import App from "./App.vue";

Vue.use(VueClipboard2);
Vue.use(VueToasted);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
