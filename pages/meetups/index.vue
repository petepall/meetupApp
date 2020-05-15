<template>
  <v-container>
    <v-row v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card class="info">
          <v-container fluid>
            <v-row>
              <v-col xs="5" sm="4" md="3">
                <v-img :src="meetup.src" height="130px"></v-img>
              </v-col>
              <v-col xs="7" sm="8" md="9">
                <v-card-title class="display-1 mb-0 white--text">{{
                  meetup.title
                }}</v-card-title>
                <v-card-subtitle>{{ meetup.date }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn text :to="'/meetups/' + meetup.id">
                    <v-icon left light>{{ arrow }}</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiArrowRightCircle } from "@mdi/js";

export default {
  data: () => ({
    arrow: mdiArrowRightCircle
  }),
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  }
};
</script>

<style></style>
