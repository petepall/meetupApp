<template>
  <v-app light>
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
  }
};
</script>
