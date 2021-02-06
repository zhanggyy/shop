import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login';
import index from '@/views/index';
import Goods from '@/components/Goods'
import Cart from '@/components/Cart'
import Order from '@/components/Order'

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
	{
		path: '/goods',
		name: 'Goods',
		component: Goods,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart,
	},
	{
		path: '/order',
		name: 'Order',
		component: Order,
	},
];

const router = new VueRouter({
  routes,
});

export default router;
