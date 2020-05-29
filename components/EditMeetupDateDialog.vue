<template>
  <v-dialog v-model="editDialog" width="350px" persistent>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" accent>
        Edit date
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col xs12>
            <v-card-title>Edit Meetup Date</v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col xs12>
            <v-date-picker v-model="editableDate" style="width: 100%" actions>
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
            </v-date-picker>
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
    editableDate: null
  }),

  methods: {
    onSaveChanges() {
      const newDate = new Date(this.meetup.date);
      const newDay = new Date(this.editableDate).getUTCDate();
      const newMonth = new Date(this.editableDate).getUTCMonth();
      const newYear = new Date(this.editableDate).getUTCFullYear();
      newDate.setUTCDate(newDay);
      newDate.setUTCMonth(newMonth);
      newDate.setUTCFullYear(newYear);
      this.$store.dispatch("updateMeetupData", {
        id: this.meetup.id,
        date: newDate
      });
    },

    created() {
      this.editableDate = new Date(this.meetup.date);
    }
  }
};
</script>

<style></style>
