<template>

  <div class="app-wrapper">

    <ProductsPage
      :product_list="store.state.products" 
    />

  </div>
  
</template>

<script setup>

import { useStore } from 'vuex'
import { onMounted } from 'vue'
import ProductsPage from "./views/ProductsPage.vue";

const store = useStore()

onMounted( () => store.dispatch('getProducts'))

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
