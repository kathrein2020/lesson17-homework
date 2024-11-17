<template>
    <header class="header">
      
      <div class="header-logo">
        <img src="/src/assets/logo.png" alt="Логотип" class="logo-icon" />
        <span class="logo-text">ДариБроБобро</span>
      </div>
  
      
      <nav class="header-nav">
        <router-link to="/" class="nav-item">Продукция</router-link>
        <router-link to="/partners" class="nav-item">Стать партнером</router-link>
        <router-link to="/about" class="nav-item">О проекте</router-link>
      </nav>
  


      <div class="header-cart">
        <router-link to="/" class="nav-item"><img src="/src/assets/Search.png" alt="Корзина" class="cart-icon" /></router-link>
        <router-link to="/" class="nav-item"><img src="/src/assets/User.png" alt="Корзина" class="cart-icon" /></router-link>
        
        <router-link to="/cart" class="cart-icon-wrapper">
  
          <img src="/src/assets/cart-icon.png" alt="Корзина" class="cart-icon" />
          <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
         
        </router-link>
      </div>
    </header>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from '../store';
  
  export default {
    setup() {
      const store = useStore();
      // Вычисление количества товаров в корзине
      const cartCount = computed(() => store.cart.length);
      return { cartCount };
    }
  };
  </script>
  
  <style scoped>
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .header-logo {
    display: flex;
    align-items: center;
  }
  
  .logo-icon {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
  
  .logo-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .header-nav {
    display: flex;
    gap: 20px;
  }
  
  .nav-item {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    transition: color 0.3s;
  }
  
  .nav-item:hover {
     font-weight: bold;
  }
  
  .header-cart {
    position: relative;
  }
  
  .cart-icon-wrapper {
    position: relative;
    display: inline-block;
  }
  
  .cart-icon {
    width: 24px;
    height: 24px;
  }
  
  .cart-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: rgb(0, 182, 55);
    color: white;
    border-radius: 50%;
    padding: 0 5px;
    font-size: 0.8rem;
  }
  </style>
  