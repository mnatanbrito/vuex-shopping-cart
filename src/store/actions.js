import { fetchProductsByCategory } from '../services/productsService';

import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCEEDED,
  FETCH_PRODUCTS_FAILED,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SWITCH_PRODUCT_CATALOG_VIEW
} from './mutationTypes';

export default {
  fetchProducts({ commit }, category, skip, take) {
    commit(FETCH_PRODUCTS_STARTED);

    fetchProductsByCategory(category, skip, take)
      .then(response => {
        commit(FETCH_PRODUCTS_SUCCEEDED, response.data);
      })
      .catch(error => {
        commit(FETCH_PRODUCTS_FAILED, error);
      });
  },
  addItemToCart({ commit }, product) {
    commit(ADD_ITEM_TO_CART, product);
  },
  removeItemFromCart({ commit }, productId) {
    commit(REMOVE_ITEM_FROM_CART, productId);
  },
  switchProductCatalogView({ commit }, viewType) {
    commit(SWITCH_PRODUCT_CATALOG_VIEW, viewType);
  }
};
