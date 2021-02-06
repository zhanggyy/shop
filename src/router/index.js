import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login';
import index from '@/views/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/index',
    name: 'index',
    component: index,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
