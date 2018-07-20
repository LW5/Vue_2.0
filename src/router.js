import Vue from 'vue'
import Router from 'vue-router'

import login from './components/app/login.vue'
import reg from './components/app/reg.vue'
import info from './components/app/info.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login/:username',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
