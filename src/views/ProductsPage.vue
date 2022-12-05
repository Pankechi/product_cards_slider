<template>

  <div>

      <Carousel :items-to-show="5" :items-to-scroll="1" >



            <ProductCard
              v-for="product in product_list" 
              :key="product.id" 
              :product_card="product"
            />

      </Carousel>

      <div>
      <button @click="next">next</button>
      <button @click="prev">prev</button>
      </div>

  </div>

</template>

<script>
  
import ProductCard from '../components/ProductCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, } from 'vue3-carousel'


export default {
  components: {
    ProductCard,
    Carousel, 
  },

  props: {
    product_list: Array,
  },

  data() {
    return {
      settings: {
        snapAlign: 'start',
        itemsToScroll: 1,  
        itemsToShow: 4,  
      }
    }
  },

}

</script>

<style>

.product-page-wrapper {
  display: flex;
  gap: 41px;
}

</style>