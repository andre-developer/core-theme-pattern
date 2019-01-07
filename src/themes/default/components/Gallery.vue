<template>
  <div class="gallery">
    <div v-for="image in gallery" :key="image.id">{{ image.src }}</div>
  </div>
</template>

<script>
  import Gallery from '@/core/components/Gallery.vue'

  export default {
    mixins: [Gallery],
  }
</script>

<style>

</style>
