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
            location: obj[key].location,
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
      .then(() => {
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
      .then(() => {
        console.log("meeting created");
      })
      .catch((error) => {
        console.error("error: " + error);
      });
  },

  updateMeetupData({ commit }, payload) {
    commit("setLoading", true);
    const updateObj = {};
    if (payload.title) {
      updateObj.title = payload.title;
    }
    if (payload.description) {
      updateObj.description = payload.description;
    }
    if (payload.date) {
      updateObj.date = payload.date;
    }

    firebase
      .database()
      .ref("meetups")
      .child(payload.id)
      .update(updateObj)
      .then(() => {
        commit("setLoading", false);
        commit("updateMeetupData", payload);
      })
      .catch((error) => {
        console.log(error);
        commit("setLoading", false);
      });
  }
};
