<template>
  <beat-loader :loading="show" :color="'#36d7b7'" :size="15" :margin="'15'"></beat-loader>
</template>

<script>
import { BeatLoader } from "@saeris/vue-spinners";
import { mapState } from "vuex";

export default {
  name: "Loader",
  components: {
    "beat-loader": BeatLoader
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
};
</script>
