<template>

  <div class="product-page__wrapper">

      <div class="arrow__wrapper">
        <ArrowButtonLeft   />
        <ArrowButtonRight   />
      </div>

      <Carousel 
        :settings="settings"
        ref="ProdCarusel" 
        :items-to-show= "5"
        :items-to-scroll= "1">

            <Slide 
              v-for="product in props.product_list" 
              :key="product.id">

              <ProductCard 
                :key="product.id" 
                :product_card="product"
              />

            </Slide>

            <template #addons>
              <Navigation class="nav" />
              <Pagination />
            </template>

      </Carousel>

  </div>

</template>

<script setup> 
  
import ProductCard from '../components/ProductCard.vue'
import ArrowButtonLeft from '../components/UI/ArrowButtonLeft.vue'
import ArrowButtonRight from '../components/UI/ArrowButtonRight.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { defineProps } from 'vue'

const props = defineProps({
  product_list: Array
})

const settings = {
  breakpoints: {
    390: {
        itemsToShow: 1,
      },
      756: {
        itemsToShow: 3,
  },
  1024: {
    itemsToShow: 4,
  },
  1800: {
    itemsToShow: 5,
  }
}
}

// const products = ref([...props.product_list])

</script>

<style>

.product-page__wrapper {
  gap: 10px;
  display: flex;
  flex-direction: column;
}

.arrow__wrapper {
  display: flex;
  gap: 5px;
  justify-content: flex-end;
}

.product-page-wrapper {
  display: flex;
  gap: 41px;
}


</style>