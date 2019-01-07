<template>
  <div class="reviews">
    There are Reviews
  </div>
</template>

<script>
  import Reviews from '@/core/components/Reviews.vue'

  export default {
    mixins: [Reviews],
  }
</script>

<style>
  .reviews {
    border: 4px solid #B23E39;
    padding: 50px;
    text-align: center;
  }
</style>
