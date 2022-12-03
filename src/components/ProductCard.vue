<template>
  <div class="card">

    <div class="pic-wrapper">

      <ProductSticker
        v-if="sticker"
        :stickers="sticker" />

      <img 
        class="pic" 
        :src="image" 
        alt="img"
      >

  </div>

    <p 
      class="product__article"
      >
      {{ article }}
    </p> 

    <p 
      class="product__name"
      >
      {{ category }} {{ title }}
    </p>

    <p>
      {{ rating }}
    </p>

    <p 
      class="product__old-price"
      v-if="price.old"
      >
      {{ price.old }} {{ price.currency }}
    </p>

    <p 
      class="product__old-price_none"
      v-else
      >
       
    </p>


    <p 
      class="product__current-price"
      >
      {{ price.current }} {{price.currency}}
    </p>

    <div class="buttons__wrapper">

      <ProductButton></ProductButton>
      <LikeButton></LikeButton>
      <ChartButton></ChartButton>

    </div>

  </div>

</template>


<script>

import ProductButton from './UI/ProductButton.vue';
import LikeButton from './UI/LikeButton.vue';
import ChartButton from './UI/ChartButton.vue'
import ProductSticker from './ProductSticker.vue';

export default {
  props: {
    product_card: Object
  },

  components: {
    ProductButton,
    LikeButton,
    ChartButton,
    ProductSticker
  },

  data() {
    return {
    image: this.product_card.image,
    article: this.product_card.article,
    category: this.product_card.category,
    title: this.product_card.title,
    rating: this.product_card.rating,
    price: this.product_card.price,
    sticker: this.product_card.stickers,
    }
  },
}

</script>


<style>

.card {
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 5px;
  flex-direction: column;
  width: 253px;
  height: 590px;
  padding: 40px 30px 30px 30px;
  margin-left: 41px;
  text-align: left;
}

.pic-wrapper {
  width: 193px;
  height: 193px;
  display: flex;
  justify-content: center;
  position: relative;
}

.pic {
  width: 155px;
  height: 193px;
}

.product__article {
  font-size: 13px;
  line-height: 24px;
  color: #969696;
}

.product__name {
  font-size: 14px;
  line-height: 24px;
  font-family: 'Jost Medium';
  color: #000000;
  height: 80px;
}

.product__old-price {
  font-size: 14px;
  line-height: 28px;
  text-decoration-line: line-through;
}

.product__old-price_none {
  width: 200px;
  height: 28px;
}

.product__current-price {
  font-family: 'Jost Medium';
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}

.buttons__wrapper {
  display: flex;
  align-items: center;
  gap: 26px;
}

</style>