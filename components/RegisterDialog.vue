<template>
  <v-dialog v-model="registerDialog" persistent>
    <template v-slot:activator="{ on }">
      <v-btn class="primary" accent v-on="on">
        {{ userIsRegistered ? "Unregister" : "Register" }}
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col xs12>
            <v-card-title v-if="userIsRegistered"
              >Unregister from Meetup?</v-card-title
            >
            <v-card-title v-else>Register from Meetup?</v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col xs12>
            <v-card-text
              >You can always change your decision later on.</v-card-text
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col xs12>
            <v-card-actions>
              <v-btn
                class="red--text darken-1"
                text
                @click.native="registerDialog = false"
                >Cancel</v-btn
              >
              <v-btn class="green--text darken-1" text @click.native="onAgree"
                >Confirm</v-btn
              >
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["meetupId"],

  data: () => ({
    registerDialog: false
  }),

  computed: {
    userIsRegistered() {
      return (
        this.$store.getters.user.registeredMeetups.findIndex((meetupId) => {
          return meetupId === this.meetupId;
        }) >= 0
      );
    }
  },

  methods: {
    onAgree() {
      if (this.userIsRegistered) {
        this.$store.dispatch("unregisterUserFromMeetup", this.meetupId);
      } else {
        this.$store.dispatch("registerUserForMeetup", this.meetupId);
      }
    }
  }
};
</script>

<style></style>
