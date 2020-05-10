<template>
  <v-app light>
    <v-navigation-drawer v-model="sideNav" app>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>{{ account_supervisor }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
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
        <v-btn text>
          <v-icon left dark>{{ account_supervisor }}</v-icon> View
          Meetups</v-btn
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
import { mdiAccountSupervisor } from "@mdi/js";

export default {
  data: () => ({
    account_supervisor: mdiAccountSupervisor,
    sideNav: false
  })
};
</script>
