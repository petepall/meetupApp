<template>
  <v-list>
    <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>{{ item.title }}</v-list-item-content>
    </v-list-item>
    <v-list-item v-if="userIsAuthenticated" @click="onLogout">
      <v-list-item-action>
        <v-icon>mdi-logout</v-icon>
      </v-list-item-action>
      <v-list-item-content>Logout</v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import navBarMixin from "@/mixins/navBarMixin";

export default {
  mixins: [navBarMixin],
  props: {
    menuItems: {
      type: Array[String],
      default: []
    }
  }
};
</script>

<style></style>
