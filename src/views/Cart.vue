<template>
  <div class="cart">
    <h1>Корзина</h1>
    <ul>
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="product image" class="cart-item-image" />
        <div class="cart-item-info">
          <span>{{ item.name }} - {{ item.price }} ₸ {{ item.selectedOption }}</span>
          <button class="remove-btn" @click="removeFromCart(item.id)">Удалить</button>
        </div>
      </li>
    </ul>
    <p v-if="cart.length === 0">Ваша корзина пуста</p>
    <p v-else><strong>Итоговая сумма: {{ calculateTotal() }} ₸ </strong></p>
  </div>
</template>

<script>
import { useStore } from '../store';

export default {
  setup() {
    const store = useStore();
    return {
      cart: store.cart,
      calculateTotal: store.calculateTotal,
      removeFromCart: store.removeFromCart
    };
  }
};
</script>

<style scoped>
.cart {
  font-family: Arial, sans-serif;
  padding: 20px;
  padding-left: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #c0392b;
}

p {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

p strong {
  color: #e74c3c;
}
</style>
