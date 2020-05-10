<template>
  <v-app light>
    <v-navigation-drawer v-model="sideNav" app>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark class="primary">
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="sideNav = !sideNav"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menuItems" :key="item.title" text>
          <v-icon left dark>{{ item.icon }}</v-icon
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-content app>
      <nuxt />
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import {
  mdiAccountSupervisor,
  mdiAccount,
  mdiFace,
  mdiLockOpen,
  mdiMapMarker
} from "@mdi/js";

export default {
  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: mdiAccountSupervisor, title: "View Meetups" },
      { icon: mdiMapMarker, title: "Organize Meetup" },
      { icon: mdiFace, title: "Profile" },
      { icon: mdiAccount, title: "Sign-up" },
      { icon: mdiLockOpen, title: "Sign-in" }
    ]
  })
};
</script>
