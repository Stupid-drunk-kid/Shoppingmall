import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.use(Element);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')



