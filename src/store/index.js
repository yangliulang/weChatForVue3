import Vuex from "vuex";

export default Vuex.createStore({
  state: {
    transtionPageType: "slide-left"
  },
  mutations: {
    setTranstionPageType(state, payload) {
      state.transtionPageType = payload;
    }
  },
  actions: {},
  modules: {}
});
