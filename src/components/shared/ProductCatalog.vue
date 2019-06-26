<template>
  <div class="product-catalog">
    <div class="products-list columns is-multiline">
      <div class="products-list__product column" v-for="(product, index) in products" :key="index">
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
// .products-list {
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   justify-content: space-around;

//   .products-list__product {
//     flex-grow: 1;
//   }
// }
</style>
