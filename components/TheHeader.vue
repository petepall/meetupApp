<template>
  <v-container>
    <v-app-bar app dark class="primary">
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.prevent="sideNav = !sideNav"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor: pointer"
          >DevMeetup
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menuItems" :key="item.title" text :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="sideNav" temporary app>
      <TheNavDrawer :menu-items="menuItems" />
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import {
  mdiAccountSupervisor,
  mdiAccount,
  mdiFace,
  mdiLockOpen,
  mdiMapMarker
} from "@mdi/js";

import TheNavDrawer from "@/components/TheNavDrawer";

export default {
  components: { TheNavDrawer },
  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: mdiAccountSupervisor, title: "View Meetups", link: "/meetups" },
      { icon: mdiMapMarker, title: "Organize Meetup", link: "/createMeetup" },
      { icon: mdiFace, title: "Profile", link: "/profile" },
      { icon: mdiAccount, title: "Sign-up", link: "/signUp" },
      { icon: mdiLockOpen, title: "Sign-in", link: "/signIn" }
    ]
  })
};
</script>

<style></style>
