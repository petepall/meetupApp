import * as firebase from "firebase";

export const state = () => ({
  loadedMeetups: [
    {
      id: "1",
      src:
        "https://www.j1.ie/contentfiles/images/J1/bigstock-NEW-YORK-CITY--SEP--Times-S-26078033.jpg",
      title: "Meetup in New York",
      description: " New York meetup for Javascript",
      date: new Date(),
      location: "New York"
    },
    {
      id: "2",
      src:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F621959_paris.jpg&f=1&nofb=1",
      title: "Paris meeting",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: new Date(),
      location: "Paris"
    }
  ],
  user: null
});

export const mutations = {
  createMeetup(state, payload) {
    state.loadedMeetups.push(payload);
  },
  setUser(state, payload) {
    state.user = payload;
  }
};
export const actions = {
  createMeetup({ commit }, payload) {
    const meetup = {
      title: payload.title,
      location: payload.location,
      src: payload.imageUrl,
      description: payload.description,
      date: payload.date,
      id: "100"
    };
    commit("createMeetup", meetup);
  },
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
export const getters = {
  loadedMeetups(state) {
    return state.loadedMeetups;
  },
  featuredMeetups(state) {
    const sortedMeetups = [...state.loadedMeetups].sort((meetupA, meetupB) => {
      return meetupA.date > meetupB.date;
    });
    return sortedMeetups.slice(0, 5);
  },
  loadedMeetup(state) {
    return (meetupId) => {
      return state.loadedMeetups.find((meetup) => {
        return meetup.id === meetupId;
      });
    };
  },
  user(state) {
    return state.user;
  }
};
