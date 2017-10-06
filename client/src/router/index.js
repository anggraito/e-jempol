import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Waitboard from '@/components/Waitboard'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
