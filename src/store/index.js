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
    hasFetched: false,
    isFetching: false,
    filters: [],
    items: []
  }
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [process.env.NODE_ENV === 'development' ? createLogger() : null]
});

export default store;
