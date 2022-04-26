import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Container de acesso aos
export default new Vuex.Store({
  state: {
    count: 0,
  },
  // Usa as actions para invocar as mutations
  actions: {},
  //realiza commit para trackear as mudanças do state, pois são as mutations que mudam os estados
  mutations: {
    // Elas precisam ser SINCRONAS
    setCount(state, payload) {
      state.count = payload;
    },
  },
  // fazer buscas nos estados sem alterar eles
  getters: {},
});
