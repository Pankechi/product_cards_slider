<template>

  <button class="button">

    <div class="button__img">
    </div>

  </button>

</template>

<script>

export default {
  
}

</script>

<style >
  
.button {
  width: 100px;
  height: 60px;
  background-color: rgba(46, 59, 110, 1);
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button__img {
  background-image: url(@/icons/Cart.svg);
  width: 24px;
  height: 24px;
}

.button:hover {
  cursor: pointer;
}

</style>