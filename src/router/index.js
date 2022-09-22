import { createRouter, createWebHistory } from 'vue-router'


import HomePage from "@/pages/HomePage.vue";
import SelectPage from "@/pages/select-component/SelectPage.vue";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/select',
    name: 'SelectPage',
    component: SelectPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
