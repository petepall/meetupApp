<template>
  <v-container>
    <v-row>
      <v-col xs12 sm6 offset-sm3>
        <h4 class="display-1">Create new Meetup</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-text-field
                id="title"
                v-model="title"
                :rules="titleRules"
                name="title"
                label="Title"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-text-field
                id="location"
                v-model="location"
                :rules="locationRules"
                name="location"
                label="Location"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-text-field
                id="image-url"
                v-model="imageUrl"
                :rules="imageUrlRules"
                name="imageUrl"
                label="Image URL"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <img :src="imageUrl" alt="Location image" class="image" />
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-textarea
                id="description"
                v-model="description"
                :rules="descriptionRules"
                name="description"
                label="Description"
                required
                clearable
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-btn class="primary" :disabled="!formIsValid" type="submit"
                >CREATE MEETUP</v-btn
              >
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    title: "",
    titleRules: [(v) => !!v || "Title is required"],
    location: "",
    locationRules: [(v) => !!v || "Location is required"],
    imageUrl: "",
    imageUrlRules: [(v) => !!v || "Image URL is required"],
    description: "",
    descriptionRules: [(v) => !!v || "Description is required"]
  }),
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    }
  }
};
</script>

<style scoped>
.image {
  display: block;
  height: 150px;
  margin: auto;
}
</style>
