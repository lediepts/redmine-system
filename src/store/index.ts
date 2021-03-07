import Vue from "vue";
import Vuex from "vuex";
import issues, { Issue, State } from "./modules/issues";

Vue.use(Vuex);


export default new Vuex.Store<State>({
  modules: {
    issues
  }
});

