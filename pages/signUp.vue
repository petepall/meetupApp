<template>
  <v-container>
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
    }
  }
};
</script>

<style></style>
