export default {
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
