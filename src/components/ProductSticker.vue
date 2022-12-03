<template>

  <div class="stickers">

    <div 
      class="new-prod"
      v-if="stickers.includes('new')">
      Новинка
    </div>

    <div 
      class="promo-prod"
      v-if="stickers.includes('promo')">
      Промо
    </div>

  </div>

</template>

<script>

export default {
  props: {
    stickers: Array
  },
  data() {
    return {
      new: this.stickers
    }
  }
}

</script>

<style>

.stickers {
  display: flex;
  color: aliceblue;
  flex-direction: column;
  gap: 3px;
  position: absolute;
  top: -20px;
  left: -15px;
  text-align: center;

}

.new-prod {
  width: 74px;
  height: 28px;
  background-color: #6776B7;
  border-radius: 5px;
}

.promo-prod {
  width: 74px;
  height: 28px;
  background-color: #7F65B7;
  border-radius: 5px;
}

</style>