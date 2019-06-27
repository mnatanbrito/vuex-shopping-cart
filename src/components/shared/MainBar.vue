<template>
  <div class="main-bar columns is-centered">
    <div class="column is-10">
      <div class="columns">
        <div class="column is-3">
          <img
            class="main-bar__logo"
            src="https://placehold.it/175x65"
            alt="Application Logo"
            title="Application Logo"
          >
        </div>
        <div class="column is-9 main-bar__search-bar">
          <form novalidate @submit.prevent="searchProducts">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input class="input is-large" type="text" placeholder="Find your product (=">
              </div>
              <div class="control">
                <button type="submit" class="button is-info is-large">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBar",
  methods: {
    searchProducts: function() {
      alert("SEARCH");
    }
  }
};
</script>

<style lang="scss" scoped>
.main-bar {
  height: 125px;

  .main-bar__logo,
  .main-bar__search-bar {
    position: relative;
    top: 15px;
  }
}
</style>
