<template>
  <div class="catalog-page">
    <section :if="products.hasFetched">
      <loader :show="!products.hasFetched"></loader>
      <div class="columns" v-if="products.hasFetched">
        <div class="column is-3">
          <product-catalog-filters></product-catalog-filters>
        </div>
        <div class="column">
          <product-catalog :products="products.items"></product-catalog>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "../shared/Loader.vue";
import ProductCatalog from "../shared/ProductCatalog.vue";
import ProductCatalogFilters from "../shared/ProductCatalogFilters.vue";

export default {
  name: "CatalogPage",
  components: {
    loader: Loader,
    "product-catalog": ProductCatalog,
    "product-catalog-filters": ProductCatalogFilters
  },
  computed: mapState({
    products: state => state.products
  }),
  watch: {
    "$route.query"() {
      // do something on filter change
    }
  }
};
</script>

<style lang="scss" scoped>
.catalog-page {
  margin-bottom: 50px;
}
</style>
