import VueRouter from 'vue-router';

import CatalogPage from './components/pages/CatalogPage.vue';

const routes = [
  {
    path: '/catalog',
    component: CatalogPage
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
