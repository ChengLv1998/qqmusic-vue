import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

NutUI.install(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
