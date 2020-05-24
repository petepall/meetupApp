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
        <v-btn v-if="userIsAuthenticated" text>
          <v-icon left dark>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="sideNav" temporary app>
      <TheNavDrawer :menu-items="menuItems" />
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import TheNavDrawer from "@/components/TheNavDrawer";
import navBarMixin from "@/mixins/navBarMixin";

export default {
  components: { TheNavDrawer },
  mixins: [navBarMixin],
  data: () => ({
    sideNav: false
  }),

  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-account", title: "Sign-up", link: "/signUp" },
        { icon: "mdi-lock-open", title: "Sign-in", link: "/signIn" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          {
            icon: "mdi-account-supervisor",
            title: "View Meetups",
            link: "/meetups"
          },
          {
            icon: "mdi-map-marker",
            title: "Organize Meetup",
            link: "/createMeetup"
          },
          { icon: "mdi-face", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    }
  }
};
</script>

<style></style>
