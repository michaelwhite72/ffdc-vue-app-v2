import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PendingPaymentRequest from '../views/PendingPaymentRequest.vue';
import Services from '../views/Services.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import PaymentRequest from '../views/PaymentRequest.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/PendingPaymentRequest',
    name: 'Pending_Payment_Request',
    component: PendingPaymentRequest
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/PaymentRequest',
    name: 'Payment_Request',
    component: PaymentRequest
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
