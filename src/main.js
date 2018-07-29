import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/startScreen.vue';
import AppQuestion from './components/question.vue';
import AppMesage from './components/mesage.vue';
import AppResultScreen from './components/resultScreen.vue';

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppMesage', AppMesage);
Vue.component('AppResultScreen', AppResultScreen);


new Vue({
  el: '#app',
  render: h => h(App)
})
