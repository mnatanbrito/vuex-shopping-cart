<template>
  <div class="container is-widescreen">
    <app-header></app-header>
    <app-nav></app-nav>
    <main>
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
import AppNav from "./components/shared/AppNav.vue";

export default {
  name: "app",
  components: {
    "app-header": AppHeader,
    "app-nav": AppNav,
    "app-footer": AppFooter
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  computed: mapState({
    products: state => state.products
  }),
  created() {
    if (!this.products.hasFetched) {
      this.fetchProducts(null, 0, 10);
    }
  }
};
</script>
