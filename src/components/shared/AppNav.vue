<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" style="margin-bottom: 15px;">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="customNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="customNav" class="navbar-menu">
      <div class="navbar-start">
        <router-link tag="a" to="/" class="navbar-item">Home</router-link>
        <router-link tag="a" to="/" class="navbar-item">Outlet</router-link>
        <router-link tag="a" to="/" class="navbar-item">Arrivals</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppNav"
};
</script>
