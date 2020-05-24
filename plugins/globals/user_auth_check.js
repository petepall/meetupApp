import firebase from "firebase/app";

export default function({ store }) {
  console.log("Auth check");
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const userData = {
        id: user.uid,
        registeredMeetups: []
      };
      store.dispatch("setUser", userData);
    } else {
      console.log("No user is signed in.");
    }
  });
}
