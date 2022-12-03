<template>

  <div class="app-wrapper">

    <ProductsPage
      :product_list="this.store.state.products" 
    />

  </div>
  
</template>

<script>

import { useStore } from 'vuex'
import ProductsPage from "./views/ProductsPage.vue";

export default {
  name: 'App',


  components: {
    ProductsPage,
  },

  setup() {
    const store = useStore()
    return {
      store,
    }
  },

  data() {
    return {
   
    }
  },

  mounted() {
    this.store.dispatch('getProducts')
  },
  
}
</script>

<style>
  @font-face {
    font-family: 'Jost Regular';
    src: url(./fonts/Jost-Regular.ttf);
  }

  @font-face {
    font-family: 'Jost Medium';
    src: url(./fonts/Jost-Medium.ttf);
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost Regular';
  }

  .app-wrapper {
    margin: 91px 91px 61px 91px;
  }
</style>
