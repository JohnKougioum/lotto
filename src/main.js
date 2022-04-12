import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import axios from 'axios';
import firebase from 'firebase/compat/app';
import vuetify from './plugins/vuetify'


Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {

  apiKey: process.env.VUE_APP_FIREBASE_KEY,

  authDomain: "project-lotto-5df00.firebaseapp.com",

  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,

  projectId: "project-lotto-5df00",

  storageBucket: "project-lotto-5df00.appspot.com",

  messagingSenderId: "243416475105",

  appId: "1:243416475105:web:12059e3b6185b49d869ea0",

  measurementId: "G-7TYCT7DJZ9"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
