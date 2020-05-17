export const state = () => ({
  loadedMeetups: [
    {
      id: "1",
      src:
        "https://www.j1.ie/contentfiles/images/J1/bigstock-NEW-YORK-CITY--SEP--Times-S-26078033.jpg",
      title: "Meetup in New York",
      description: " New York meetup for Javascript",
      date: "2017-07-17"
    },
    {
      id: "2",
      src:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F621959_paris.jpg&f=1&nofb=1",
      title: "Paris meeting",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "2017-07-19"
    }
  ],
  user: {
    id: "abcd",
    registeredMeetups: ["1"]
  }
});

export const mutations = {
  createMeetup(state, payload) {
    state.loadedMeetups.push(payload);
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
    // todo: connect to firebase and store it
    commit("createMeetup", meetup);
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
  }
};
