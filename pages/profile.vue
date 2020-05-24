<template>
  <v-container>
    <v-row v-if="error">
      <v-col xs12 sm6 offset-sm3>
        <app-alert :text="error.message" @dismissed="onDismissed"></app-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignout">
                <v-row>
                  <v-col>
                    <v-btn type="submit" :disabled="loading" :loading="loading">
                      Sign out
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>$loading</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-col>
                </v-row>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),

  middleware: ["auth-guard"],

  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },

  watch: {
    user(val) {
      if (val !== null && val !== undefined) {
        this.$router.push("/");
      }
    }
  },

  methods: {
    onSignout() {
      this.$store.dispatch("signUserOut", {});
    },

    onDismissed() {
      this.$store.commit("clearError");
    }
  }
};
</script>

<style></style>
