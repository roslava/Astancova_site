import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueYandexMetrika, {
    id: 61407319,
    router: router,
    env: process.env.NODE_ENV
    // other options
})
