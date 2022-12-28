import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Homeview.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/employees',
    name: 'EmployeesView',
    component: () => import('../views/Employeesview.vue')
  },
  {
    path: '/users',
    name: 'UsersView',
    component: () => import('../views/Usersview.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
