import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './components/i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
Vue.prototype.$Bus = new Vue()
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale:'zh',
  messages
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
