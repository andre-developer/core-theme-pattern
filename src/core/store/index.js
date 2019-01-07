import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  headerText: 'This is HEADER.',
  footerText: 'This is FOOTER',
  productName: 'Grand Lipstick',
  productPrice: '$40',
  productQuantity: 40,
  gallery: [{id: 1, src: 'img1.jpg'}, {id: 2, src: 'img2.jpg'}, {id: 3, src: 'img3.jpg'}],
  categories: ['Woman', 'Sweaters', 'Branded'],
  colors: ['yellow', 'blue', 'green'],
  sizes: ['M', 'L', 'XL'],
  reviews: [],
  similar: []
};

const mutations = {
};

const actions = {
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  },
});


export default store;
