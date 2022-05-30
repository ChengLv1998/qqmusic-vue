import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/home-page/Index.vue';
import Living from '../views/live-telecast/Living.vue';
import MyMusic from '../views/my/MyMusic.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MyMusic',
    component: MyMusic,
  },
  {
    path: '/home-page',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/Living',
    name: 'Living',
    component: Living,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
