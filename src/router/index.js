import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/components/Main";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
