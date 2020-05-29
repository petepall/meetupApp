export default {
  createMeetup(state, payload) {
    state.loadedMeetups.push(payload);
  },

  updateMeetupData(state, payload) {
    const meetup = state.loadedMeetups.find((meetups) => {
      return meetups.id === payload.id;
    });
    if (payload.title) {
      meetup.title = payload.title;
    }
    if (payload.description) {
      meetup.description = payload.description;
    }
    if (payload.date) {
      meetup.date = payload.date;
    }
  },

  setLoadedMeetups(state, payload) {
    state.loadedMeetups = payload;
  }
};
