import Vue from "vue";
import Vuex from "vuex";
import issues from "./modules/issues";

Vue.use(Vuex);

export type RootState = {
  issues: any
};

export default new Vuex.Store<RootState>({
  modules: {
    issues
  }
});
