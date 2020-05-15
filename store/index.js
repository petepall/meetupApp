export const state = () => ({
  loadedMeetups: [
    {
      id: "1",
      src:
        "https://www.j1.ie/contentfiles/images/J1/bigstock-NEW-YORK-CITY--SEP--Times-S-26078033.jpg",
      title: "Meetup in New York",
      date: "2017-07-17"
    },
    {
      id: "2",
      src:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F621959_paris.jpg&f=1&nofb=1",
      title: "Meetup in Paris",
      date: "2017-07-19"
    },
    {
      id: "3",
      src:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F621959_paris.jpg&f=1&nofb=1",
      title: "Meetup in Paris 2",
      date: "2017-07-20"
    },
    {
      id: "4",
      src:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F621959_paris.jpg&f=1&nofb=1",
      title: "Meetup in Paris 3",
      date: "2017-07-21"
    },
    {
      id: "5",
      src:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F621959_paris.jpg&f=1&nofb=1",
      title: "Meetup in Paris 4",
      date: "2017-07-22"
    },
    {
      id: "6",
      src:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F621959_paris.jpg&f=1&nofb=1",
      title: "Meetup in Paris 5",
      date: "2017-07-23"
    }
  ],
  user: {
    id: "abcd",
    registeredMeetups: ["1"]
  }
});

export const mutations = {};
export const actions = {};
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
