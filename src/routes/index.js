import { createRouter, createWebHistory } from 'vue-router'
import home from './home'
import about from './about'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    home,
    about
  ]
})
