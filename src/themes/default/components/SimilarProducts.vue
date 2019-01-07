<template>
  <div class="similar">
    There are Similiar Products
  </div>
</template>

<script>
  import SimilarProducts from '@/core/components/SimilarProducts.vue'

  export default {
    mixins: [SimilarProducts],
  }
</script>

<style>
  .similar {
    border: 4px solid #6CA86D;
    padding: 50px;
    text-align: center;
  }
</style>
