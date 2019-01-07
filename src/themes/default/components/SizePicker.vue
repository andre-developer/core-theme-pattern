<template>
  <div class="size-picker">
    <div v-for="size in sizes" class="size" @click="setSizeExtended()">
      {{ size }}
    </div>
  </div>
</template>

<script>
  import SizePicker from '@/core/components/SizePicker.vue'

  export default {
    mixins: [SizePicker],
    methods: {
      setSizeExtended: function () {
        this.setSize();
        alert('Additional actions');
      },
    },
  }
</script>

<style>
  .size-picker .size {
    display: inline-block;
    border: 1px solid gray;
    padding: 15px;
    margin: 15px;
  }
</style>
