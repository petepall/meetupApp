import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = () => ({
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
  ]
});

export default {
  state,
  actions,
  mutations,
  getters
};
