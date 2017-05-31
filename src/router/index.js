import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import xiangqing from '@/views/xiangqing'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    }
  ]
})
