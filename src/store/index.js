import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import { createLogger } from './plugins';

// import the vuex library
Vue.use(Vuex);

const state = {
  cart: {
    items: []
  },
  products: {
    viewType: 'th',
    hasFetched: false,
    isFetching: false,
    appliedFilters: [],
    items: [],
    total: 0
  },
  filters: {
    hasFetched: false,
    isFetching: false,
    items: [],
    total: 0
  }
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [process.env.NODE_ENV === 'development' ? createLogger() : null]
});

export default store;
