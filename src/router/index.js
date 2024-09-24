// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Admissions from '../pages/Admissions.vue';
import Privacy from '../pages/Privacy.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/admissions', name: 'Admissions', component: Admissions },
  { path: '/privacy', name: 'Privacy', component: Privacy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;