import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = () => ({
  loadedMeetups: []
});

export default {
  state,
  actions,
  mutations,
  getters
};
