<template>
  <v-dialog v-model="editDialog" width="350px" persistent>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" accent>
        Edit time
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col xs12>
            <v-card-title>Edit Meetup Time</v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col xs12>
            <v-time-picker
              v-model="editableTime"
              style="width: 100%"
              actions
              format="24hr"
            >
              <template>
                <v-btn
                  class="blue--text darken-1"
                  text
                  @click.native="editDialog = false"
                  >Close</v-btn
                >
                <v-btn
                  class="blue--text darken-1"
                  text
                  @click.native="onSaveChanges"
                  >Save</v-btn
                >
              </template>
            </v-time-picker>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["meetup"],

  data: () => ({
    editDialog: false,
    editableTime: null
  }),

  methods: {
    onSaveChanges() {
      const newDate = new Date(this.meetup.date);
      const hours = this.editableTime.match(/^(\d+)/)[1];
      const minutes = this.editableTime.match(/:(\d+)/)[1];
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      this.$store.dispatch("updateMeetupData", {
        id: this.meetup.id,
        date: newDate
      });
    },

    created() {
      this.editableTime = new Date(this.meetup.date).toTimeString();
    }
  }
};
</script>

<style></style>
