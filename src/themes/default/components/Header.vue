<template>
    <div class="header">
      {{ headerText }}
    </div>
</template>

<script>
  import HeaderCore from '@/core/components/Header.vue'

  export default {
    mixins: [HeaderCore],
  }
</script>

<style>
    .header {
      border: 4px solid #487B57;
      padding: 50px;
      text-align: center;
    }
</style>
