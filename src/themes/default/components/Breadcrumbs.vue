<template>
  <div class="breadcrumbs">
    <div v-for="breadcrumb in breadcrumbs" class="breadcrumb">
      <a :href="breadcrumb.slug">{{ breadcrumb.anchor }}</a>
      <span class="divider"> / </span>
    </div>
  </div>
</template>

<script>
  import Breadcrumbs from '@/core/components/Breadcrumbs.vue'

  export default {
    mixins: [Breadcrumbs],
  }
</script>

<style>
  .breadcrumbs .breadcrumb {
    display: inline;
  }
</style>
