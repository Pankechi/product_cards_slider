<template>

  <div>

      <Carousel v-bind="settings">



            <ProductCard
              v-for="product in product_list" 
              :key="product.id" 
              :product_card="product"
            />

            <template>
            <Navigation />
          </template>

      </Carousel>

  </div>

</template>

<script>
  
import ProductCard from '../components/ProductCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation  } from 'vue3-carousel'


export default {
  components: {
    ProductCard,
    Carousel, 
    Navigation

    
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