import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
// import "element-ui/lib/theme-default/index.css";

Vue.config.productionTip = false;

Vue.use(Element);
Vue.config.silent = true;

new Vue({
  render: h => h(App)
}).$mount("#app");
