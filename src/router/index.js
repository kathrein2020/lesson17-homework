import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Cart from '../views/Cart.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail, name: 'ProductDetail' },
  { path: '/cart', component: Cart }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;