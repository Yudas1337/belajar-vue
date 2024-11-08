import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})