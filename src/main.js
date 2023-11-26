import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
require("@/assets/css/style.scss");

Vue.use(router);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors"
});

// Global Mixin
import globalMixin from '@/mixins/global'
Vue.mixin(globalMixin)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
