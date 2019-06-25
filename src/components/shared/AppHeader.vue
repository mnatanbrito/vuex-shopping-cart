<template>
  <header>
    <top-bar></top-bar>
    <main-bar></main-bar>
  </header>
</template>

<script>
import { BeatLoader } from "@saeris/vue-spinners";

import TopBar from "./TopBar.vue";
import MainBar from "./MainBar.vue";

export default {
  name: "AppHeader",
  components: {
    "top-bar": TopBar,
    "main-bar": MainBar
  },
  props: {}
};
</script>
