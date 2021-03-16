import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: createElement => createElement(App)
}).$mount('#app')
