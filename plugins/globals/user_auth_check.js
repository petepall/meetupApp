import firebase from "firebase/app";

export default function({ store }) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      store.dispatch("autoSignIn", user);
      store.dispatch("fetchUserData");
    } else {
      console.log("No user is signed in.");
    }
  });
}
