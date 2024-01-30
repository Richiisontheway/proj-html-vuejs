import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/pages/Homepage.vue';
import page2 from './components/pages/page2.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/offer',
      name: 'main2',
      component: page2,
    },
  ],
});
export { router };
