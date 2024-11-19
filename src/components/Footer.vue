<template>

    <footer class="footer">

      <router-link to="/"> 
      <div class="footer__logo">
        <img src="/src/assets/img/logo.png" alt="Логотип" class="logo-icon" />
        ДариБроДобро</div>
      </router-link>


      <div class="header-cart">
        <router-link to="/cart" class="cart-icon-wrapper">
          <img src="/src/assets/img/FacebookLogo.png" alt="facebook" class="cart-icon" />
          <img src="/src/assets/img/Instagramlogo.png" alt="instagram" class="cart-icon" />
          <img src="/src/assets/img/twitterlogo.png" alt="twitter" class="cart-icon" />
          <img src="/src/assets/img/youtubelogo.png" alt="youtube" class="cart-icon" />
        </router-link>
      </div>


      <nav class="footer__nav">
        <router-link to="/partner">Стать партнером</router-link>
        <router-link to="/delivery">Доставка</router-link>
        <router-link to="/about">О проекте</router-link>
      </nav>

  

    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f4f4f4;
    border-top: 1px solid #ddd;
    margin-top: auto; /* Чтобы футер всегда находился внизу */
  }
  
  .footer__logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #353535;
  }
  
  .footer__nav {
    display: flex;
    gap: 1rem;
  }
  
  .footer__nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  
  .footer__nav a:hover {

    font-weight: bolder;
  }

  .header-cart {
    position: relative;
  }

  .logo-icon {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
  

  .cart-icon {
    width: 24px;
    height: 24px;
  }
  </style>
  