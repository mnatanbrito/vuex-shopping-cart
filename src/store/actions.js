import { fetchProductsByCategory } from '../services/productsService';

export default {
  fetchProducts({ commit }, category, skip, take) {
    commit('FETCH_PRODUCTS_STARTED');

    fetchProductsByCategory(category, skip, take)
      .then(response => {
        commit('FETCH_PRODUCTS_SUCCEEDED', response.data);
      })
      .catch(error => {
        commit('FETCH_PRODUCTS_FAILED', error);
      });
  },
  addItemToCart({ commit }, product) {
    commit('ADD_ITEM_TO_CART', product);
  },
  removeItemFromCart({ commit }, productId) {
    commit('REMOVE_ITEM_FROM_CART', productId);
  }
};
