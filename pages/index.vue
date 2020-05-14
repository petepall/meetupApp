<template>
  <v-container>
    <v-row class="mt-2">
      <v-col xs12 sm6 class="text-center text-sm-right">
        <v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
      </v-col>
      <v-col xs12 sm6 class=" text-center text-sm-left">
        <v-btn large to="/createMeetup" class="info">Organize Meetups</v-btn>
      </v-col>
    </v-row>
    <TheCarousel />
    <v-row class="mt-2">
      <v-col xs12 class="text-center">
        <p>Join our awesome meetups!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheCarousel from "@/components/TheCarousel";

export default {
  components: {
    TheCarousel
  }
};
</script>
