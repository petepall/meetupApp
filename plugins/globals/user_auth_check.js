import firebase from "firebase/app";

export default function({ store }) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      store.dispatch("autoSignIn", user);
    } else {
      console.log("No user is signed in.");
    }
  });
}
