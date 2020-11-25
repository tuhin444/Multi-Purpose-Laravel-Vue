
require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

/// vue js validation

import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



/// vue js validation

let routes = [{
    path: '/dashboard',
    component: require('./components/Dashboard.vue').default
  },
  {
    path: '/profile',
    component: require('./components/Profile.vue').default
  },
  {
    path: '/users',
    component: require('./components/Users.vue').default
  }
]


const router = new VueRouter({
	mode: 'history',
  routes // short for `routes: routes`
})

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
	el:'#app',
  router
});