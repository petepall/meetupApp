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
              <v-file-input
                id="image"
                ref="fileInput"
                accept="image/*"
                label="File input"
                @change="onFilePicked"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row v-if="isFileAvailable">
            <v-col xs12 sm6 offset-sm3>
              <img :src="imageUrl" alt="" class="image" />
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
              <h4>Choose a Date & Time</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mb-2" xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{ date }}</p>
            </v-col>
            <v-col xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
              <p>{{ time }}</p>
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
    imageRules: [(v) => !!v || "Image is required"],
    description: "",
    descriptionRules: [(v) => !!v || "Description is required"],
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toISOString().substring(11, 19), // toLocaleTimeString("nl-BE")
    image: null
  }),
  middleware: ["auth-guard"],
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submittableDateTime() {
      const date = new Date(this.date + "T" + this.time);
      return date;
    },
    isFileAvailable() {
      return this.image !== null;
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid || !this.image) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        date: this.submittableDateTime
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    },
    onFilePicked() {
      if (
        typeof event.target.files !== "undefined" &&
        event.target.files.length !== 0
      ) {
        const files = event.target.files;
        const filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          return alert("Please add a valid file!");
        }
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.imageUrl = fileReader.result;
        });
        fileReader.readAsDataURL(files[0]);
        this.image = files[0];
      } else {
        this.imageUrl = "";
        this.image = null;
      }
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
