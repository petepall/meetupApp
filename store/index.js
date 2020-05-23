import Vuex from "vuex";
import meetups from "./meetups";
import users from "./users";

const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      meetups,
      users
    }
  });
};

export default store;
