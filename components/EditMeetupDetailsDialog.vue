<template>
  <v-dialog v-model="editDialog" width="350px" persistent>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" fab accent>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col xs12>
            <v-card-title>Edit Meetup</v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col xs12>
            <v-card-text>
              <v-text-field
                id="title"
                v-model="editedTitle"
                :rules="titleRules"
                name="title"
                label="Title"
                required
              ></v-text-field>
              <v-textarea
                id="description"
                v-model="editedDescription"
                :rules="descriptionRules"
                name="description"
                label="Description"
                required
                clearable
              ></v-textarea>
            </v-card-text>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col xs12>
            <v-card-actions>
              <v-btn text class="blue--text darken-1" @click="onClose"
                >Close</v-btn
              >
              <v-btn text class="blue--text darken-1" @click="onSaveChanges"
                >Save</v-btn
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
  props: ["meetup"],
  data() {
    return {
      editDialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description,
      titleRules: [(v) => !!v || "Title is required"],
      descriptionRules: [(v) => !!v || "Description is required"]
    };
  },

  methods: {
    onSaveChanges() {
      if (
        this.editedTitle.trim() === "" ||
        this.editedDescription.trim() === ""
      ) {
        return;
      }
      this.$store.dispatch("updateMeetupData", {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription
      });
      this.meetup.description = this.editedDescription;
      this.meetup.title = this.editedTitle;
      this.editDialog = false;
    },

    onClose() {
      this.editDialog = false;
      this.editedDescription = this.meetup.description;
      this.editedTitle = this.meetup.title;
    }
  }
};
</script>

<style></style>
