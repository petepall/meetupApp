import firebase from "firebase/app";

export default {
  signUserUp({ commit }, payload) {
    commit("setLoading", true);
    commit("clearError");
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit("setLoading", false);
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserIn({ commit }, payload) {
    commit("setLoading", true);
    commit("clearError");
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit("setLoading", false);
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  }
};
