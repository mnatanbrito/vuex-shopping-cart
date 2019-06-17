<template>
  <div class="product-catalog">
    <section :if="products.hasFetched">
      <h3>Products</h3>
      <ul class="product-list">
        <li class="product-list__product" v-for="(product, index) in products.items" :key="index">
          <span>{{JSON.stringify(product)}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductCatalog",
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
