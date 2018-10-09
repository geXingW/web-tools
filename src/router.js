import Vue from 'vue'
import VueRouter from 'vue-router'

let urlDecodeRoutes = [
  {
    path: '/',
    name: 'home',
    component: _ => import('components/home/index')
  },
  {
    path: '/url',
    name: 'url',
    component: _ => import('components/url/index')
  },
  {
    path: '/json',
    name: 'json',
    component: _ => import('components/json/index')
  },
  {
    path: '/base64',
    name: 'base64',
    component: _ => import('components/base64/index')
  },
  {
    path: '/excel',
    name: 'excel',
    component: _ => import('components/excel/index')
  },
  {
    path: '/ip',
    name: 'ip',
    component: _ => import('components/ip/index')
  },
  {
    path: '*',
    name: '404',
    component: _ => import('components/404.vue')
  } // Not found
]

export const routes = [...urlDecodeRoutes]

Vue.use(VueRouter)

export const router = new VueRouter({routes})
