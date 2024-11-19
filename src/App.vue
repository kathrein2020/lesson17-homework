<template>
  <div id="app">
    <Header />
   <router-view />      <!--  /router/index.js -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'; //шаблон ссылка навверх стр
import Footer from './components/Footer.vue';  // шаблон ссылка навверх стр

export default {   // тиражирование на каждую стр. хедер и футер
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
</style>
