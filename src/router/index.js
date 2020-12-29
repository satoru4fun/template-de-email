import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TemplateEmailDns from '../views/TemplateEmailDns.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/*',
    name: 'Home',
    component: Home,
    children: [
      {
        path:'dns',
        component: TemplateEmailDns
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router