<template>
  <div class="product-catalog">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
