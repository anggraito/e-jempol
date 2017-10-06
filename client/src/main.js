// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import axios from 'axios'
import FBSignInButton from 'vue-facebook-signin-button'
import * as firebase from 'firebase'

Vue.use(Vuex)
Vue.use(VueFire)
Vue.use(FBSignInButton)
Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBWYmT9q1LHhDPSEGQ2foOpOxl8ny_AaBs',
  authDomain: 'e-jempol.firebaseapp.com',
  databaseURL: 'https://e-jempol.firebaseio.com',
  projectId: 'e-jempol',
  storageBucket: 'e-jempol.appspot.com',
  messagingSenderId: '593156951308'
}
const firebaseApp = firebase.initializeApp(config)

Vue.prototype.$http = axios.create({
  baseURL: `https://35.198.242.87/`
  // baseURL: `http://localhost:3000`
})
Vue.prototype.$db = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
