import Vue from 'vue'
import App from './App.vue'
import axios from  'axios'
import VueAxios from "vue-axios";
import router from './router'
import './assets/css/base.css'
import './assets/css/index.css'
Vue.use(VueAxios,axios);
//提示开关
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
