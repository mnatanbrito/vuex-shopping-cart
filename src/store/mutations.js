import { uniq } from 'lodash/array';

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
  }
};
