import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import display from '@/components/display/display'
import login from '@/components/login/login'
import register from '@/components/register/register'
import center from '@/components/center/center'
import introduction from '@/components/introduction/introduction'
import search from '@/components/search/search'
import store from '@/components/store/store'
import mymenu from '@/components/mymenu/mymenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/store',
      name: 'store',
      component:store
    },
    {
      path: '/mymenu',
      name: 'mymenu',
      component:mymenu
    },
  ]
})
