export default {
  createMeetup(state, payload) {
    state.loadedMeetups.push(payload);
  },

  setLoadedMeetups(state, payload) {
    state.loadedMeetups = payload;
  }
};
