/* global Vue */
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import OrderList from '@/components/OrderList';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld'
    },
    {
      path: '/HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/orderList',
      component: OrderList,
    },

  ],
});
