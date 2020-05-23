export default {
  createMeetup(state, payload) {
    state.loadedMeetups.push(payload);
  }
};
