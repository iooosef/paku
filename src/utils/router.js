import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Admissions from '../pages/Admissions.vue';
import Privacy from '../pages/Privacy.vue';

import Register from '../pages/RegisterAuth.vue';
import BasicNfoReg from '../pages/BasicNfoReg.vue';
import Login from '../pages/Login.vue';

import Summary from '../pages/regform/Summary.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/admissions', name: 'Admissions', component: Admissions },
  { path: '/privacy', name: 'Privacy', component: Privacy },

  
  { path: '/accounts.html', name: 'Register', component: Register },
  { path: '/accounts.html/login', name: 'Login', component: Login },
  { path: '/accounts.html/basic-info', name: 'BasicNfoReg', component: BasicNfoReg },

  { path: '/registration', name: 'Summary', component: Summary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;