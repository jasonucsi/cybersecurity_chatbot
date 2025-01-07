// src/main.js
import Vue from 'vue';
import App from './App.vue';
import { app } from './firebase';  // Import your Firebase config

console.log("Firebase app:", app);  // This should not be undefined

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
