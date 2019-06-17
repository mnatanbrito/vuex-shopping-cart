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
  <div>
    <header>
      <p>HEADER CONTENT HERE</p>
    </header>
    <nav>NAVIGATION CONTENT HERE</nav>
    <main id="app">
      <section class="main-content">
        <router-view></router-view>
      </section>
    </main>
    <footer>FOOTER CONTENT HERE</footer>
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
