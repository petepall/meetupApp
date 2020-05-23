import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = () => ({
  user: null,
  loading: false,
  authError: null,
  error: ""
});

export default {
  state,
  actions,
  mutations,
  getters
};
