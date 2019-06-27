<template>
  <div class="catalog-page">
    <section v-if="products.hasFetched">
      <loader :show="!products.hasFetched"></loader>
      <div class="columns" v-if="products.hasFetched">
        <div class="column is-3">
          <product-catalog-filters></product-catalog-filters>
        </div>
        <div class="column">
          <div class="columns is-multiline">
            <div class="column is-12">
              <div class="columns">
                <div class="column is-10">
                  <h2 class="subtitle is-size-6 is-pulled-right">{{ products.total }} products</h2>
                </div>
                <div class="column is-2">
                  <product-catalog-view-switch
                    :view-type="products.viewType"
                    @switch-view="switchView"
                  ></product-catalog-view-switch>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <product-catalog :products="products.items"></product-catalog>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loader from "../shared/Loader.vue";
import ProductCatalog from "../shared/ProductCatalog.vue";
import ProductCatalogFilters from "../shared/ProductCatalogFilters.vue";
import ProductCatalogViewSwitch from "../shared/ProductCatalogViewSwitch.vue";

export default {
  name: "CatalogPage",
  components: {
    loader: Loader,
    "product-catalog": ProductCatalog,
    "product-catalog-filters": ProductCatalogFilters,
    "product-catalog-view-switch": ProductCatalogViewSwitch
  },
  computed: mapState({
    products: state => state.products
  }),
  watch: {
    "$route.query"() {
      // do something on filter change
    }
  },
  methods: {
    ...mapActions(["switchProductCatalogView"]),
    switchView: function(viewType) {
      this.switchProductCatalogView(viewType);
    }
  }
};
</script>

<style lang="scss" scoped>
.catalog-page {
  margin-bottom: 50px;
}
</style>
