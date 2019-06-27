<template>
  <div class="product">
    <div class="product__discount">
      <span v-if="product.hasDiscount" class="is-pulled-right">-{{product.discount}}%</span>
    </div>
    <div class="product__thumbnail">
      <img :src="thumbnail" :title="product.name || 'Product Name'" :alt="product.name">
    </div>

    <div class="product__info has-text-centered">
      <h2 class="product__brand subtitle has-text-weight-bold is-size-6">{{product.brand}}</h2>
      <h3 class="subtitle product__name is-size-7">{{product.name}}</h3>
      <span
        :class="{'product_price subtitle is-size-7': true, 'has-text-weight-bold': !product.hasDiscount, 'old-price': product.hasDiscount}"
      >${{product.originalPrice}}</span>
      &nbsp;&nbsp;
      <span
        v-if="product.hasDiscount"
        class="subtitle is-size-7 has-text-weight-bold"
      >${{formatNumber(product.originalPrice * (product.discount/100))}}</span>
    </div>
  </div>
</template>

<script>
import { formatNumber } from "../../utils/formatters";
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
  },
  methods: {
    formatNumber: formatNumber
  }
};
</script>

<style lang="scss">
$cardWidth: 250px;
$cardHeight: 375px;

.product {
  width: $cardWidth;
  height: $cardHeight;
  padding: 5px;

  &:hover {
    cursor: pointer;
    border: 1pt solid #dedede;
    border-radius: 5px;
  }

  .product__discount {
    height: 45px;
    span {
      border: 1pt solid #dedede;
      border-radius: 5px;
      padding: 5px 10px;
      display: inline-block;
      margin-bottom: 5px;
    }
  }

  .product__info {
    margin-bottom: 20px;
    .product__brand,
    .product__name {
      margin-bottom: 5px !important;
    }

    .product_price.old-price {
      text-decoration: line-through;
    }
  }
}
</style>

