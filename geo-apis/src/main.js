import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: function(){
    return {
        api_key: process.env.api_key, //api key
    }
  },
  render: h => h(App)
}).$mount('#app')
