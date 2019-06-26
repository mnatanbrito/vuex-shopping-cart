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
        <a class="navbar-item">Home</a>
        <a class="navbar-item">Outlet</a>
        <a class="navbar-item">Arrivals</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppNav"
};
</script>
