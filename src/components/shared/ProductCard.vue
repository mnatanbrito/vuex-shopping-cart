<template>
  <div class="product">
    <div class="product__discount">
      <span>-20%</span>
    </div>
    <div class="product__thumbnail">
      <img :src="thumbnail" :title="product.name || 'Product Name'" :alt="product.name">
    </div>

    <div class="product__info">{{JSON.stringify(product)}}</div>
  </div>
</template>

<script>
import thumbnail from "../../assets/thumbnail.png";

export default {
  name: "ProductCard",
  data: function() {
    return {
      thumbnail
    };
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.product {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 250px;
  height: 250px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }

  .product__discount {
    text-align: right;
    flex-shrink: 100%;
    flex-basis: 100%;

    span {
      position: relative;
      right: 20px;
      border: 1pt solid #dedede;
      border-radius: 5px;
      padding: 5px 10px;
      display: inline-block;
      margin-bottom: 5px;
    }
  }

  .product__thumbnail {
    flex-basis: 100%;
    flex-shrink: 100%;

    img {
      width: 213px;
      height: 213px;
    }
  }

  .product__info {
    flex-basis: 100%;
    flex-shrink: 100%;
  }
}
</style>

