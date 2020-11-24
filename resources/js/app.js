
require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)



let routes = [{
    path: '/dashboard',
    component: require('./components/Dashboard.vue')
  },
  {
    path: '/profile',
    component: require('./components/Profile.vue')
  }
]


const router = new VueRouter({
	mode: 'history',
  routes // short for `routes: routes`
})

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
	el:'#app',
  router
});