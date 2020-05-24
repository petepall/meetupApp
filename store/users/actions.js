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
      });
  },
  signUserIn({ commit }, payload) {
    commit("setLoading", true);
    commit("clearError");
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password);
      })
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
      });
  },
  autoSignIn({ commit }, payload) {
    commit("setUser", { id: payload.uid, registeredMeetups: [] });
  },
  signUserOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then((user) => {
        console.log("User logged out");
        commit("setLoading", false);
        commit("setUser", user);
        this.$router.push("/");
      })
      .catch((error) => {
        console.log(error);
        commit("setLoading", false);
        commit("setError", error);
      });
  }
};
