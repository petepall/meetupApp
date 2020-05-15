<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <v-card>
          <v-card-title>
            <h5 class="primary--text">{{ meetup.title }}</h5>
          </v-card-title>
          <v-img :src="meetup.src" height="400px"></v-img>
          <v-card-text>
            <div class="info--text">
              {{ meetup.date }} - Where it takes place.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident sit maiores possimus vel odit quidem quam, veniam
              ratione asperiores. Deserunt quaerat reiciendis veritatis sed
              libero magni eum iusto aspernatur itaque?
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.$route.params.id);
    }
  }
};
</script>

<style></style>
