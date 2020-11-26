
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
   return moment(created).format('MMMM Do YYYY');
});

//// VueProgressBar

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
  })

import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.toast = toast;


window.Fire = new Vue();



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