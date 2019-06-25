<template>
  <div class="top-bar">SOME USEFUL LINKS HERE</div>
</template>

<script>
export default {
  name: "TopBar",
  components: {},
  props: {}
};
</script>


<style lang="scss" scoped>
$backgroundColor: #2f2fa2;

.top-bar {
  display: none;
  color: #fff;
}

@media screen and (min-width: 900px) {
  .top-bar {
    display: block;
    background-color: $backgroundColor;
    width: 100%;
    height: 30px;
  }
}
</style>
