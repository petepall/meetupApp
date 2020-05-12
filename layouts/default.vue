<template>
  <v-app light>
    <TheHeader />
    <v-content app>
      <nuxt />
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import TheHeader from "../components/TheHeader";
// import {
//   mdiAccountSupervisor,
//   mdiAccount,
//   mdiFace,
//   mdiLockOpen,
//   mdiMapMarker
// } from "@mdi/js";

export default {
  components: {
    TheHeader
  }
  // data: () => ({
  //   sideNav: false,
  //   menuItems: [
  //     { icon: mdiAccountSupervisor, title: "View Meetups", link: "/meetups" },
  //     { icon: mdiMapMarker, title: "Organize Meetup", link: "/createMeetup" },
  //     { icon: mdiFace, title: "Profile", link: "/profile" },
  //     { icon: mdiAccount, title: "Sign-up", link: "/signUp" },
  //     { icon: mdiLockOpen, title: "Sign-in", link: "/signIn" }
  //   ]
  // })
};
</script>
