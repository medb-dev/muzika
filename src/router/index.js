import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Manage from "../views/ManageView.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "manage",
    path: "/manage",
    alias:'/manage-music',
    component: Manage,
  },
  {
    path:'/admin',
    redirect:'/manage'
  },
  {
    path:'/:catchAll(.*)*',
    redirect:'/'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
});

export default router;
