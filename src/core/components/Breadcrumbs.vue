<script>
  export default {
    computed: {
      breadcrumbs: function () {
        let categories = this.$store.state.categories;
        let breadcrumbs = [];

        breadcrumbs.push({
          slug: 'home',
          anchor: 'Home'
        });

        categories.forEach(function (cat) {
          breadcrumbs.push({
            slug: cat.toLowerCase(),
            anchor: cat
          });
        });

        return breadcrumbs;
      }
    },
  }
</script>
