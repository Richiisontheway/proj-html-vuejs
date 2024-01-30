import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/pages/Homepage.vue';
<<<<<<< HEAD
import ourTeam from './components/pages/ourTeam.vue'
=======
import page2 from './components/pages/page2.vue'
>>>>>>> 4258562feb86ccdb16f92c249187e130f8d9fce7
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
<<<<<<< HEAD
      path:'/ourTeam',
      name:'ourTeam',
      component: ourTeam,
=======
      path: '/offer',
      name: 'main2',
      component: page2,
>>>>>>> 4258562feb86ccdb16f92c249187e130f8d9fce7
    },
  ],
});
export { router };
