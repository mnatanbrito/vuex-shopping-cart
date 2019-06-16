<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <h1>{{ products.isFetching ? 'Fetching data...' : '' }}</h1>
    <h2>{{ products.hasFetched ? 'Already fecthed data...' : 'Did not fetch data )=' }}</h2>
    <p>{{ JSON.stringify(products.items) }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  components: {},
  methods: {
    ...mapActions(["fetchProducts"])
  },
  computed: mapState({
    products: state => state.products
  }),
  mounted() {
    if (!this.products.hasFetched) {
      this.$store.dispatch("fetchProducts", "Clothes", 0, 10);
    }
  }
};
</script>
