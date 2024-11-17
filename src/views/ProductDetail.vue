<template>
  <div class="product-page" v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="product image" class="product-image" />
    <div class="product-details">
      <p><strong>Цена:</strong> {{ product.price }} ₸</p>
      <p><strong>Продавец:</strong> {{ product.seller }}</p>
      <p><strong>Статус:</strong> {{ product.status }}</p>
      <p><strong>Описание:</strong> {{ product.description }}</p>
    </div>
    <button class="add-to-cart-btn" @click="addToCart">
      Добавить в корзину
    </button>
  </div>
  <div v-else>
    <p>Загрузка...</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from '../store/';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const productId = parseInt(route.params.id, 10);

    store.loadProductById(productId);
   
    const product = store.currentProduct;

    
    const addToCart = () => {
      store.addToCart(product);
    };

    return { product, addToCart };
  }
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-image {
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 20px;
}

.product-details {
  text-align: left;
  max-width: 600px;
  margin-bottom: 20px;
}

.add-to-cart-btn {
  background-color: grey;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: red;
}
</style>
