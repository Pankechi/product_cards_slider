<template>

  <div class="rating">
    
    <FilledStar 
    v-for="star in filled_rating" 
    :key="star" />

    <EmptyStar 
    v-for="em_star in empty_rating" 
    :key="em_star"/>

  </div>

</template>

<script setup>

import FilledStar from './UI/FilledStar.vue'
import EmptyStar from './UI/EmptyStar.vue'
import { computed, ref, defineProps } from 'vue'

const props = defineProps({
  rating: Number
})

const rating_range = 5

const stars = ref(props.rating)

const filled_rating = computed( () => {return [...Array(stars.value).keys()]})

const empty_rating = computed( () => { return [...Array(rating_range - stars.value).keys()]})

</script>

<style>

.rating {
  display: flex;
  gap: 2px;
}

</style>