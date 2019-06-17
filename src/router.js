import VueRouter from 'vue-router';

import ProductCatalog from './components/ProductCatalog.vue';

const routes = [
  {
    path: '/catalog',
    component: ProductCatalog
  },
  {
    path: '/',
    redirect: '/catalog'
  }
];

const router = new VueRouter({
  routes
});

export default router;
