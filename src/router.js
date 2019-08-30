/* global Vue */
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import OrderItem  from '@/components/OrederItem';
import home from '@/index1';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/OrderItem',
      component: OrderItem,
    },
  ],
});
