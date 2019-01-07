<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState([
      'colors'
    ]),
    methods: {
      setColor: function () {
        alert('Picked color');
      },
    },
  }
</script>
