import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/home-page/Index.vue';
import QQmusic from '../views/QQmusic.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'QQmusic',
    component: QQmusic,
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
