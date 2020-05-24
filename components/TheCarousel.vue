<template>
  <v-container>
    <v-row>
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
    <v-row v-if="!loading">
      <v-col xs12>
        <v-carousel
          style="cursor: pointer"
          cycle
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },

    loading() {
      return this.$store.getters.loading;
    }
  },

  methods: {
    onLoadMeetup(id) {
      this.$router.push(`/meetups/${id}`);
    }
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem !important;
  bottom: 50px;
  padding: 10px;
}
</style>
