/* global Vue */

/* weex initialized here, please do not move this line */
const { router } = require('./router');
// const { vuex } = require('./vuex');
const App = require('@/index.vue');

// // import Vue from 'vue'
// import Vuex from 'vuex'
// // Vuex is auto installed on the web
// if (WXEnvironment.platform !== 'Web') {
//     Vue.use(Vuex)
// }
// const store = new Vuex.Store({
//     state: {
//         count: 123123
//     },
//     getters: {
//         summary() {
//             return this.state.count
//         }
//     },
// })
// App.store = store

/* eslint-disable no-new */
new Vue(
    Vue.util.extend({ el: '#root', router },
        App
    ));
router.push('/');