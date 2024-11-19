import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // гл. стран
import ProductDetail from '../views/ProductDetail.vue';  //подробнее о товара после клика
import Cart from '../views/Cart.vue';  //корзина покупок

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