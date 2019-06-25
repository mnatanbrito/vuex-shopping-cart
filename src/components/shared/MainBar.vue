<template>
  <div class="main-bar columns is-centered">
    <div class="column is-10">
      <div class="columns">
        <div class="column is-2">
          <img
            class="main-bar__logo"
            src="https://placehold.it/175x65"
            alt="Application Logo"
            title="Application Logo"
          >
        </div>
        <div class="column is-6"></div>
        <div class="column is-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBar"
};
</script>

<style lang="scss" scoped>
.main-bar {
  height: 125px;

  .main-bar__logo {
    position: relative;
    top: 15px;
  }
}
</style>
