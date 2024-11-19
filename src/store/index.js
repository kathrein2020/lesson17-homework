import { defineStore } from 'pinia';

// определение массива продуктов тут, так как нет внешнего бд  и подключения его
export const useStore = defineStore('main', {
  state: () => ({
    cart: [],
       products: [
      { id: 1, name: 'Худи “Barcode”', status: 'В наличии', price: 93500, seller: 'Ержан Г.', image: '../src/assets/img/goods/hoodie.png', description: 'Типа описание' },
      { id: 2, name: 'Минималистичный стул', status: 'В наличии', price: 15000, seller: 'GreenTal', image: '../src/assets/img/goods/chair.png', description: 'Типа описание' },
      { id: 3, name: 'Ковёр в национальном стиле с орнаментом', status: 'В наличии', price: 27000, seller: 'Руслан А.', image: '../src/assets/img/goods/carpet.png', description: 'Типа описание' },
      { id: 4, name: 'Светильник из стали', status: 'Под заказ (1-2 недели)', price: 56990, seller: 'Мадина И.', image: '../src/assets/img/goods/lamp.png', description: 'Типа описание' },
      { id: 5, name: 'Лофт-комплект из стола и стула', status: 'Под заказ (2-4 недели)', oldPrice: 93500, price: 89990, seller: 'СП «Медиалайн»', image: '../src/assets/img/goods/loft.png', description: 'Типа описание' }
            ]
  }),
  
  actions: {
    addToCart(product) {     //-добавить продукт в корзину  через push
      this.cart.push(product);
    },
    removeFromCart(productId) {   //удалить через splice найдя по индексу продукта
          const index = this.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    //общая сумма товаров в корзине
    calculateTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
    //связка продукта с айди и вызов для загрузки в полсдеующем
    loadProductById(id) {
      this.currentProduct = this.products.find(product => product.id === id);
    }
  }
});
