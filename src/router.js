/* global Vue */
/* eslint-disable */
import Router from 'vue-router';
import Menu from '@/components/Menu';
import OrderItem from '@/components/OrederItem';
import HomePage from '@/components/HomePage';
import MenuItem from '@/components/MenuItem';

Vue.use(Router);

export const router = new Router({
    routes: [{
            path: '/',
            redirect: '/HomePage'
        },
        {
            path: '/Menu',
            component: Menu,
        },
        {
            path: '/OrderItem',
            component: OrderItem,
        },
        {
            path: '/HomePage',
            component: HomePage,
        },
        {
            path: '/MenuItem',
            component: MenuItem,
        }
    ],
});