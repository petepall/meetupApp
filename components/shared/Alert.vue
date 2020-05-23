<template>
  <v-alert :value="true" type="error" dismissible @input="onClose">
    Message: {{ text }}
  </v-alert>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["text"],
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>

<style scoped></style>
