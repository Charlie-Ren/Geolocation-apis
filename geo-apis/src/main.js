import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: function(){
    console.log(process.env.VUE_APP_API_KEY);
    return {
        api_key: process.env.VUE_APP_API_KEY, //api key
    }
  },
  render: h => h(App)
}).$mount('#app')
