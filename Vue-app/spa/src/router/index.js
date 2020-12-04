import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/login/login.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'on',   //更改路由默认类名
  model:history,
  routes: [
    {
      path: '/',
      redirect:'/msite'
    },
    {
      path: '/msite',
      name: 'msite',
      component: Msite,
      meta:{title:true}
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta:{title:true}
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta:{title:true}
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{title:true}
    },
    {
      path:'/login',
      name:' login',
      component: Login
    }
  ]
})
