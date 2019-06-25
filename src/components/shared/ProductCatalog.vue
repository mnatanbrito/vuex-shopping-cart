<template>
  <div class="product-catalog">
    <h3 class="is-title">Products</h3>
    <div class="products-list">
      <div class="products-list__product" v-for="(product, index) in products" :key="index">
        <product-card :product="product"></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductCatalog",
  components: {
    "product-card": ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.products-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;

  .products-list__product {
    flex-grow: 1;
  }
}
</style>
