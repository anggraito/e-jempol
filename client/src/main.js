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
  apiKey: 'AIzaSyC-vlVuDnJEuApFiDnhD035OPE0yz7XbUU',
  authDomain: 'ejempol-1ae38.firebaseapp.com',
  databaseURL: 'https://ejempol-1ae38.firebaseio.com',
  projectId: 'ejempol-1ae38',
  storageBucket: 'ejempol-1ae38.appspot.com',
  messagingSenderId: '1001850137006'
}
const firebaseApp = firebase.initializeApp(config)

Vue.prototype.$http = axios.create({
  baseURL: `http://35.198.242.87/`
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
