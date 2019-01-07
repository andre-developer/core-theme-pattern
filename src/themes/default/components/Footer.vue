<template>
  <div class="footer">
    {{ footerText }}
  </div>
</template>

<script>
  import Footer from '@/core/components/Footer.vue'

  export default {
    mixins: [Footer],
  }
</script>

<style>
  .footer {
    border: 4px solid #DDD1BC;
    padding: 50px;
    text-align: center;
  }
</style>
