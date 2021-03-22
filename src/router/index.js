import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Classes from '../views/Classes.vue'
import Characters from '../views/Characters.vue'
import BattleTest from '../views/BattleTest.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/classes',
    name: 'Classes',
    component: Classes
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/battle-test',
    name: 'BattleTest',
    component: BattleTest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
