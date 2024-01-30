import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/pages/Homepage.vue';
import ourTeam from './components/pages/ourTeam.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path:'/ourTeam',
      name:'ourTeam',
      component: ourTeam,
    },
  ],
});
export { router };
