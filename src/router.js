/* global Vue */
/* eslint-disable */
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import OrderItem from '@/components/OrederItem';
import OrderList from '@/components/OrderList';
import home from '@/index1';

Vue.use(Router);

export const router = new Router({
    routes: [{
            path: '/',
            redirect: '/HelloWorld'
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

        {
            path: '/OrderList',
            component: OrderList,
        },
    ],
});