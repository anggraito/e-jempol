import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Waitboard from '@/components/Waitboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ejempol',
      name: 'Waitboard',
      component: Waitboard
    }
  ]
})
