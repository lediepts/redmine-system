import axios from "axios";
import { ActionTree, GetterTree, MutationTree } from "vuex";

export type Issue = {
  id: number;
  subject: string;
  description: string;
  createdOn: string;
};

export type State = {
  loading: boolean;
  issues: Issue[];
};

// initial state
const state: State = {
  loading: false,
  issues: [
    // {
    //   description: "sasa",
    //   id: 1222,
    //   journals: {
    //     createdOn: "dsds",
    //     id: 2,
    //     note: "dasds",
    //     user: {
    //       id: 2
    //     }
    //   },
    //   subject: "dsdsds"
    // }
  ]
};

// getters
const getters: GetterTree<State, State> = {
  issues: state => {
    return state.issues;
  },
  loading: state => state.loading
};

// actions
const actions: ActionTree<State, State> = {
  async getIssues({ commit }): Promise<Issue[]> {
    let issues: Issue[] = [];
    commit("setLoading", true);
    try {
      const { data } = await axios.get(
        `https://admin-api-omega.vercel.app/api/cors?uri="https://www.redmine.org/issues.json?limit=20"`
      );
      issues = data.issues?.map((issue: any) => {
        return {
          id: issue.id,
          subject: issue.subject,
          description: issue.description,
          createdOn: issue.updated_on
        };
      });
    } catch (error) {
      console.log(error);
    }
    commit("setIssues", issues);
    commit("setLoading", false);
    return issues;
  }
};

// mutations
const mutations: MutationTree<State> = {
  setIssues(state, issues: Issue[]) {
    state.issues = issues;
  },
  setLoading(state, loading: boolean) {
    state.loading = loading;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
