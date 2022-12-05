<template>

 <div class="arrow_left" />
 
</template>

<script>

export default {
  
}
</script>

<style>

.arrow_left {
  width: 22px;
  height: 15px;
  background-image: url(@/icons/ArrowLeftGray.svg);
  background-repeat: no-repeat;
  transition: 1s;
}

.arrow_left:hover {
  background-image: url(@/icons/ArrowLeftBlue.svg);
  transition: 1s;
}
  
</style>