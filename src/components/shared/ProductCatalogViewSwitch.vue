<template>
  <div class="product-catalog-view-switch is-pulled-left">
    <span
      :class="{'icon is-medium': true, 'is-selected': viewType === 'th' }"
      @click="$emit('switch-view', 'th')"
    >
      <i class="fas fa-th"></i>
    </span>
    <span
      :class="{'icon is-medium': true, 'is-selected': viewType === 'bars' }"
      @click="$emit('switch-view', 'bars')"
    >
      <i class="fas fa-bars"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "ProductCatalogViewSwitch",
  props: {
    viewType: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$default-color: #dedede;
$selected-color: #bebebe;
.product-catalog-view-switch {
  color: $default-color;

  & > .icon.is-selected {
    color: $selected-color;
  }

  & > .icon:hover {
    cursor: pointer;

    color: $selected-color;
  }
}
</style>


