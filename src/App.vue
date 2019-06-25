<template>
  <div>
    <app-header></app-header>
    <nav>NAVIGATION CONTENT HERE</nav>
    <main id="app">
      <section class="main-content">
        <router-view></router-view>
      </section>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import "./styles/CustomStyles.scss";

import AppHeader from "./components/shared/AppHeader.vue";
import AppFooter from "./components/shared/AppFooter.vue";

export default {
  name: "app",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  computed: mapState({
    products: state => state.products
  }),
  mounted() {
    if (!this.products.hasFetched) {
      this.$store.dispatch("fetchProducts", null, 0, 10);
    }
  }
};
</script>
