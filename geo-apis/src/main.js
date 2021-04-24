import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: function(){
    return {
        api_key: 'AIzaSyCHki8t8Ayr63B9HcVIG5g3cf7QnbrX2QM', //api key
    }
  },
  render: h => h(App)
}).$mount('#app')
