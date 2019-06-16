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
  }
};
