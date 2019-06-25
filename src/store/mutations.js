import { uniq, remove } from 'lodash/array';

export default {
  FETCH_PRODUCTS_STARTED(state) {
    state.products.isFetching = true;

    return state;
  },
  FETCH_PRODUCTS_SUCCEEDED(state, products) {
    state.products.isFetching = false;
    state.products.hasFetched = true;
    state.products.items = uniq([...state.products.items, ...products.items]);
    state.products.total = products.total;

    return state;
  },
  FETCH_PRODUCTS_FAILED(state, error) {
    state.products.isFetching = false;
    state.products.hasFetched = true;
    state.products.error = error;

    return state;
  },
  ADD_ITEM_TO_CART(state, product) {
    state.cart.items.push(product);

    return state;
  },
  REMOVE_ITEM_FROM_CART(state, productId) {
    remove(state.cart.items, product => product.id === productId);
    return state;
  }
};
