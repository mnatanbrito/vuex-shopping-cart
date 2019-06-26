<template>
  <div class="box filters">
    <aside class="menu">
      <p class="menu-label">Filter your search</p>
      <ul class="menu-list">
        <li>
          <router-link :to="{path:'/catalog', query: { 'productType': 'Jeans'}}">Jeans</router-link>
        </li>
        <li>
          <router-link :to="{path:'/catalog', query: { 'productType': 'Tops'}}">Tops</router-link>
        </li>
        <li>
          <router-link :to="{path:'/catalog', query: { 'productType': 'Underware'}}">Underware</router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: "ProductCatalogFilters"
};
</script>

<style lang="scss" scoped>
.filters {
  width: 80% !important;
}
</style>


