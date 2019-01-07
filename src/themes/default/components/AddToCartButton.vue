<template>
  <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
</template>

<script>
  import AddToCartButton from '@/core/components/AddToCartButton.vue';

  export default {
    mixins: [AddToCartButton]
  }
</script>

<style>
  .add-to-cart {
    font-size: 2em;
    background-color: #222;
    color: #fff;
    padding: 10px 20px;
    margin: 20px 0;
  }
</style>
