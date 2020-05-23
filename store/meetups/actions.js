export default {
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
  }
};
