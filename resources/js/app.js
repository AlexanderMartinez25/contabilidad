require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import vuetify from './plugins/vuetify' // path to vuetify export

import store from './store/index';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueRouter, VueAxios, axios);


let routes = [{
        path: '/home',
        name: 'home',
        component: require('./components/ExampleComponent.vue').default
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/LoginComponent.vue').default
    },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login-form', require('./components/LoginComponent.vue').default);


const app = new Vue({
    el: '#app',
    store,
    vuetify,
    router
});
