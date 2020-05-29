export default {
  setUser(state, payload) {
    state.user = payload;
  },

  setLoading(state, payload) {
    state.loading = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },

  clearError(state) {
    state.error = null;
  },

  registerUserForMeetup(state, payload) {
    const id = payload.id;
    if (
      state.user.registeredMeetups.findIndex((meetup) => meetup.id === id) >= 0
    ) {
      return;
    }
    state.user.registeredMeetups.push(id);
    state.user.fbKeys[id] = payload.fbKey;
  },

  unregisterUserFromMeetup(state, payload) {
    const registeredMeetups = state.user.registeredMeetups;
    registeredMeetups.splice(
      registeredMeetups.findIndex((meetup) => meetup.id === payload.id),
      1
    );
    Reflect.deleteProperty(state.user.fbKeys, payload);
  }
};
