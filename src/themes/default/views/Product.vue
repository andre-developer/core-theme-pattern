<template>
  <div class="product">
    <div class="product-description">
      <Gallery></Gallery>
      <div class="product-details">
        <Breadcrumbs></Breadcrumbs>
        <h1>{{ productName }}</h1>
        <h2>Price: {{ productPrice }}</h2>
        <h2>Quantity: {{ productQuantity }}</h2>
        <ColorPicker></ColorPicker>
        <SizePicker></SizePicker>
        <AddToCartButton></AddToCartButton>
      </div>
    </div>
    <Reviews></Reviews>
    <SimilarProducts></SimilarProducts>
  </div>
</template>

<script>
  import Product from '@/core/views/Product.vue';
  import Gallery from '../components/Gallery.vue';
  import Breadcrumbs from '../components/Breadcrumbs.vue';
  import SizePicker from '../components/SizePicker.vue';
  import ColorPicker from '../components/ColorPicker.vue';
  import AddToCartButton from '../components/AddToCartButton.vue';
  import Reviews from '../components/Reviews.vue';
  import SimilarProducts from '../components/SimilarProducts.vue';

  export default {
    mixins: [Product],
    components: {
      Gallery,
      Breadcrumbs,
      SizePicker,
      ColorPicker,
      AddToCartButton,
      Reviews,
      SimilarProducts
    }
  }
</script>

<style>
  .product-description {
    display: flex;
  }
  .product-description > div {
    flex-grow: 1;
  }
</style>
