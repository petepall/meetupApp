import firebase from "firebase/app";

export default {
  signUserUp({ commit }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  signUserIn({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
