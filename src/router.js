/* global Vue */
/* eslint-disable */
import Router from 'vue-router';
import Menu from '@/components/Menu';
import OrderItem from '@/components/OrederItem';

Vue.use(Router);

export const router = new Router({
    routes: [{
            path: '/',
            redirect: '/Menu'
        },
        {
            path: '/Menu',
            component: Menu,
        },
        {
            path: '/OrderItem',
            component: OrderItem,
        },

    ],
});