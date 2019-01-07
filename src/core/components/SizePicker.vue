<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState([
      'sizes'
    ]),
    methods: {
      setSize: function () {
        alert('Picked size');
      }
    }
  }
</script>
