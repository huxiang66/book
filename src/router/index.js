import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import display from '@/components/display/display'
import login from '@/components/login/login'
import register from '@/components/register/register'
import center from '@/components/center/center'
import details from '@/components/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/display',
      name: 'display',
      component: display
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/center',
      name: 'center',
      component: center
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
  ]
})
