<template>
  <div class="catalog-page">
    <section :if="products.hasFetched">
      <h3>Product Catalog</h3>
      <loader :show="!products.hasFetched"></loader>
      <product-catalog v-if="products.hasFetched" :products="products.items"></product-catalog>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "../shared/Loader.vue";
import ProductCatalog from "../shared/ProductCatalog.vue";

export default {
  name: "CatalogPage",
  components: {
    loader: Loader,
    "product-catalog": ProductCatalog
  },
  computed: mapState({
    products: state => state.products
  })
};
</script>

<style lang="scss" scoped>
.catalog-page {
  margin-bottom: 50px;
}
</style>
