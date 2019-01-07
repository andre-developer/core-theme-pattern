<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState([
      'productName',
      'productPrice',
      'productImage',
      'productQuantity'
    ])
  }
</script>
