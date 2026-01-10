import inicio  from "../components/inicio.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: inicio
    }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;