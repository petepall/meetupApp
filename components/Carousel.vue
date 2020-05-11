<template>
  <v-row>
    <v-col xs12>
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="meetup in meetups"
          :key="meetup.id"
          :src="meetup.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <div class="title">{{ meetup.title }}</div>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          id: "1",
          src:
            "https://www.j1.ie/contentfiles/images/J1/bigstock-NEW-YORK-CITY--SEP--Times-S-26078033.jpg",
          title: "Meetup in New York"
        },
        {
          id: "2",
          src:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F621959_paris.jpg&f=1&nofb=1",
          title: "Meetup in Paris"
        }
      ]
    };
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
}
</style>
