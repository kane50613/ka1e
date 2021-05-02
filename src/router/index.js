import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/components/Main";
import NotFound from "@/components/NotFound";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
