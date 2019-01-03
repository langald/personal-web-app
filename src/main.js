import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Meta from 'vue-meta';

import { i18n, loadLanguageAsync } from "./common/i18n-setup.js";

//vue-meta are applied asynchronously, that take some time
Vue.use(Meta);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const lang = to.params.locale;
  loadLanguageAsync(lang, to).then(() => next());
});

new Vue({
  router,
  store,
  i18n /** for reading {{$t("somemessage")}} from components*/,
  render: h => h(App),
}).$mount("#app");
