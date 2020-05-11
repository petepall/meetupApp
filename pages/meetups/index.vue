<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card class="info">
          <v-container fluid>
            <v-row>
              <v-col xs="5" sm="4" md="3">
                <v-img
                  src="https://www.j1.ie/contentfiles/images/J1/bigstock-NEW-YORK-CITY--SEP--Times-S-26078033.jpg"
                  height="130px"
                ></v-img>
              </v-col>
              <v-col xs="7" sm="8" md="9">
                <v-card-title class="display-1 mb-0 white--text"
                  >My Meetup</v-card-title
                >
                <v-card-subtitle>17th July 2017</v-card-subtitle>
                <v-card-actions>
                  <v-btn text to="/meetups/1">
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
  })
};
</script>

<style></style>
