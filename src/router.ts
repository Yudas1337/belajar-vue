import {createRouter, createWebHistory} from 'vue-router'
import homeRouter from "@/router/homeRouter";
import authRouter from "@/router/authRouter";

const routes = [
  ...homeRouter,
  ...authRouter
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
