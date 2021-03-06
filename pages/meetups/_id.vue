<template>
  <v-container>
    <v-row v-if="loading">
      <v-col xs12 class="text-sm-center centered">
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="primary"
          :width="7"
          :size="70"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col xs="12">
        <v-card>
          <v-card-title>
            <h5 class="primary--text">{{ meetup.title }}</h5>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <editMeetupDetailsDialog :meetup="meetup" />
            </template>
          </v-card-title>
          <v-img :src="meetup.src" height="400px"></v-img>
          <v-card-text>
            <div class="info--text">
              {{ meetup.date | date }} - {{ meetup.location }}.
              <div>
                <editMeetupDateDialog :meetup="meetup" v-if="userIsCreator" />
                <editMeetupTimeDialog :meetup="meetup" v-if="userIsCreator" />
              </div>
            </div>
            <div>
              {{ meetup.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <registerDialog
              v-if="userIsAuthenticated && !userIsCreator"
              :meetup-id="meetup.id"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import editMeetupDetailsDialog from "@/components/EditMeetupDetailsDialog.vue";
import editMeetupDateDialog from "@/components/EditMeetupDateDialog.vue";
import editMeetupTimeDialog from "@/components/EditMeetupTimeDialog.vue";
import registerDialog from "@/components/RegisterDialog.vue";

export default {
  middleware: ["preload-meetups"],
  components: {
    editMeetupDetailsDialog,
    editMeetupDateDialog,
    editMeetupTimeDialog,
    registerDialog
  },
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.$route.params.id);
    },

    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },

    userIsCreator() {
      if (!this.userIsAuthenticated) {
        return false;
      }
      return this.$store.getters.user.id === this.meetup.creatorId;
    },

    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style></style>
