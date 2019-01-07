<template>
  <div class="color-picker">
    <div v-for="color in colors" class="color" @click="setColorExtended()">
      {{ color }}
    </div>
  </div>
</template>

<script>
  import ColorPicker from '@/core/components/ColorPicker.vue';

  export default {
    mixins: [ColorPicker],
    methods: {
      setColorExtended: function () {
        this.setColor();
        alert('Additional actions');
      },
    },
  }
</script>

<style>
  .color-picker .color {
    display: inline-block;
    border: 1px solid gray;
    padding: 15px;
    margin: 15px;
  }
</style>
