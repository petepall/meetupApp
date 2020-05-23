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
              <form @submit.prevent="onSignup">
                <v-row>
                  <v-col xs12>
                    <v-text-field
                      id="email"
                      v-model="email"
                      name="email"
                      label="Mail"
                      type="email"
                      required
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs12>
                    <v-text-field
                      id="password"
                      v-model="password"
                      name="password"
                      label="Password"
                      type="password"
                      required
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs12>
                    <v-text-field
                      id="confirmPassword"
                      v-model="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password"
                      type="confirmPassword"
                      :rules="[comparePasswords]"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn type="submit">Sign up</v-btn>
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
  data: () => ({
    email: "",
    password: "",
    confirmPassword: ""
  }),

  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : true;
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
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
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password
      });
    },

    onDismissed() {
      console.log("Dismissed Alert!");
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style></style>
