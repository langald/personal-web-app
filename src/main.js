import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {i18n, loadLanguageAsync} from './common/i18n-setup.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  //const lang = to.params.lang
  const lang = 'de'
  loadLanguageAsync(lang).then(() => next())  
})

new Vue({
  router,
  store,
  i18n, /** for reading {{$t("somemessage")}} from components*/
  render: h => h(App)
}).$mount('#app')
