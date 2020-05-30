<template>
  <v-app>
    <TheHeader />
    <v-content app>
      <nuxt />
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader
  },

  data: () => ({
    setTheme: true
  }),

  created() {
    this.$vuetify.theme.dark = this.setTheme;
  }
};
</script>
