<template>
    <div class="product-card">
    <img :src="product.image" alt="Изображение товара" class="product-image" />
    <div class="product-info">

      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="product-name-link">
        <h3 class="product-name">{{ product.name }}</h3>
      </router-link>

      <p class="product-status">{{ product.status }}</p>

      <p class="product-price">
        <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} ₸ </span>
        <span :class="{ 'discounted-price': product.oldPrice }">{{ product.price }}₸</span>
      </p>

     <div class="product-seller"><img src="/src/assets/User.png" alt="Корзина" class="cart-icon" />  {{ product.seller }}</div>
    
    </div>
    <button class="add-to-cart-btn" @click="$emit('add-to-cart', product)">+</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
};
</script>


<style scoped>
.product-card {
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.product-info {
  padding: 0.5rem;
}

.product-name-link {
  text-decoration: none;
  color: inherit;
}

.product-name {
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.product-status {
  color: gray;
  font-size: 0.9rem;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 0.5rem;
}

.discounted-price {
  color: red;
}

.product-seller {
  font-size: 0.9rem;
  color: #555;
}

.cart-icon {
    width: 18px;
    height: 18px;
  }

.add-to-cart-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgb(69, 197, 118);
  color: white;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: red;
  cursor: pointer;
}
</style>
