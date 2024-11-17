<template>
  <div class="cart">
    <h1>Корзина покупок</h1>
    <ul>
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image"  class="cart-item-image" />
        <div class="cart-text">
      {{ item.name }}  
           <p> <strong> {{ item.price }} ₸  </strong>  </p>
                  {{ item.selectedOption }}
  </div>
          <button class="remove-btn" @click="removeFromCart(item.id)">Удалить</button>        
      </li>
    </ul>

    <p v-if="cart.length === 0">Корзина пуста, налетай заполняй!</p>
    <p v-else>Итоговая сумма: <strong> {{ calculateTotal() }} ₸ </strong></p>
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
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
}

.cart-text {
  padding-left: 10px; 
  text-align: center ;
  padding-right: 10px; 
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
  /* align-items: center; */
}

.remove-btn:hover {
  background-color: #c0392b;
}

p {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  /* align-items: center; */
}

p strong {
  color: #e74c3c;
}
</style>
