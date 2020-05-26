import firebase from "firebase/app";
import "firebase/storage";

export default {
  loadMeetups({ commit }) {
    commit("setLoading", true);
    firebase
      .database()
      .ref("meetups")
      .once("value")
      .then((data) => {
        const meetups = [];
        const obj = data.val();
        for (const key in obj) {
          meetups.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            src: obj[key].src,
            date: obj[key].date,
            creatorId: obj[key].creatorId
          });
        }
        commit("setLoadedMeetups", meetups);
        commit("setLoading", false);
      })
      .catch((err) => {
        console.log(err);
        commit("setLoading", false);
      });
  },

  createMeetup({ commit, getters }, payload) {
    // image is passed as file, need to upload it and then store the imageUrl
    const dbRef = firebase
      .database()
      .ref("meetups")
      .push();
    const key = dbRef.key;
    const filename = payload.image.name;
    const ext = filename.slice(filename.lastIndexOf("."));
    const storageRef = firebase
      .storage()
      .ref("meetups")
      .child(key + "." + ext);

    storageRef
      .put(payload.image)
      .then((uploadTask) => {
        // file uploaded
        return storageRef.getDownloadURL();
      })
      .then((downloadUrl) => {
        const meetup = {
          title: payload.title,
          location: payload.location,
          description: payload.description,
          date: payload.date.toISOString(),
          id: key,
          creatorId: getters.user.id,
          src: downloadUrl
        };
        commit("createMeetup", meetup);
        return dbRef.set(meetup);
      })
      .then((data) => {
        console.log("meeting created");
      })
      .catch((error) => {
        console.error("error: " + error);
      });
  }
};
