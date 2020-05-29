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
          registeredMeetups: [],
          fbKeys: {}
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
          registeredMeetups: [],
          fbKeys: {}
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("setLoading", false);
        commit("setError", error);
      });
  },
  autoSignIn({ commit }, payload) {
    commit("setUser", { id: payload.uid, registeredMeetups: [], fbKeys: {} });
  },
  logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setUser", null);
        this.$router.push("/");
      });
  },
  fetchUserData({ commit, getters }) {
    commit("setLoading", true);
    firebase
      .database()
      .ref("/users/" + getters.user.id + "/registrations")
      .once("value")
      .then((data) => {
        const dataPairs = data.val();
        const userRegisteredMeetups = [];
        const swappedPairs = {};
        for (const key in dataPairs) {
          userRegisteredMeetups.push(dataPairs[key]);
          swappedPairs[dataPairs[key]] = key;
        }
        const updateUser = {
          id: getters.user.id,
          registeredMeetups: userRegisteredMeetups,
          fbKeys: swappedPairs
        };
        commit("setLoading", false);
        commit("setUser", updateUser);
      })
      .catch((error) => {
        console.log(error);
        commit("setLoading", false);
      });
  },

  registerUserForMeetup({ commit, getters }, payload) {
    commit("setLoading", true);
    const user = getters.user;
    firebase
      .database()
      .ref("/users/" + user.id)
      .child("/registrations/")
      .push(payload)
      .then((data) => {
        commit("setLoading", false);
        commit("registerUserForMeetup", { id: payload, fbKey: data.key });
      })
      .catch((error) => {
        console.log(error);
        commit("setLoading", false);
      });
  },

  unregisterUserFromMeetup({ commit, getters }, payload) {
    commit("setLoading", true);
    const user = getters.user;
    if (!user.fbKeys) {
      return;
    }
    const fbKey = user.fbKeys[payload];
    firebase
      .database()
      .ref("/users/" + user.id + "/registrations/")
      .child(fbKey)
      .remove()
      .then(() => {
        commit("setLoading", false);
        commit("unregisterUserFromMeetup", payload);
      })
      .catch((error) => {
        console.log(error);
        commit("setLoading", false);
      });
  }
};
