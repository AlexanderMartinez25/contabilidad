<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>

  <!-- <form @submit.prevent="loginSubmit">
    <p v-if="loginSuccessful">Login Successful</p>
  <p v-if="loginError">{{ loginError }}</p>-->

  <!-- <div class="form-group">
      <vs-input
        type="email"
        icon-no-border
        icon="account_circle"
        name="email"
        id="email"
        label-placeholder="Email"
        v-model="email"
  />-->
  <!-- <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
  <div v-if="errors && errors.user" class="text-danger">{{ errors.user }}</div>-->
  <!-- </div>

    <div class="form-group">
      <vs-input
        type="password"
        icon-no-border
        icon="vpn_key"
        name="password"
        id="password"
        label-placeholder="Contraseña"
        v-model="password"
  />-->
  <!-- <div v-if="errors && errors.password" class="text-danger">{{ errors.password[0] }}</div> -->
  <!-- </div>
    <vs-button type="filled" @click="loginSubmit" color="primary">Acceder</vs-button>
  </form>-->
  <!-- <div class="login">
    <form @submit.prevent="loginSubmit">
      <input type="email" placeholder="E-Mail" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>-->
</template>

// import FormMixin from "../FormMixin";
// export default {
//   mixins: [FormMixin],

//   data() {
//     return {
//       action: "/submit"
//     };
//   }
// };

<script>
import { mapState, mapActions } from "vuex";
export default {
  // mixins: [FormMixin],
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    password: "",
    email: ""
  }),
  computed: {
    ...mapState(["loggingIn", "loginError", "loginSuccessful"])
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    ...mapActions(["doLogin"]),
    loginSubmit() {
      this.$vs.loading();
      this.doLogin({
        email: this.email,
        password: this.password
      });
    }
  },
  watch: {
    loginError: function(val) {
      // when the hash prop changes, this function will be fired.
      console.log(val);
    }
  }
};
</script>