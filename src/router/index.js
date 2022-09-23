import { createRouter, createWebHistory } from 'vue-router'


import HomePage from "@/pages/HomePage.vue";
import SelectPage from "@/pages/select-component/SelectPage.vue";
import FormPage from "@/pages/form-component/FormPage.vue";

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/select',
    name: 'select-page',
    component: SelectPage
  },
  {
    path: '/form',
    name: 'form-page',
    component: FormPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
