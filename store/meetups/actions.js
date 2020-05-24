import firebase from "firebase/app";

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
    const meetup = {
      title: payload.title,
      location: payload.location,
      src: payload.imageUrl,
      description: payload.description,
      date: payload.date.toISOString(),
      creatorId: getters.user.id
    };

    firebase
      .database()
      .ref("meetups")
      .push(meetup)
      .then((data) => {
        const key = data.key;
        commit("createMeetup", { ...meetup, id: key });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
