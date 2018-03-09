import Vue from 'vue';
import ScrollView from 'vue-scrollview';

import App from './App.vue';
import store from './store';
import './registerServiceWorker';

Vue.use(ScrollView);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
