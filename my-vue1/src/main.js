import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD:project/src/main.js

import axios from "axios"
Vue.prototype.$http=axios
=======
>>>>>>> 7084d321b7188466e427dc8e0736ce01745503a5:my-vue1/src/main.js

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
