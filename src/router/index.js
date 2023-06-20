import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/LoginView.vue';
import Main from '@/views/MainView.vue';

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/MainView',
    component: Main
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router