
require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import moment from 'moment';

/// vue js validation

import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



/// vue js validation
 /// Upercase
Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

/// moment
Vue.filter('myDate',function(created){
   return moment().format('MMMM Do YYYY, h:mm:ss a');
});



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