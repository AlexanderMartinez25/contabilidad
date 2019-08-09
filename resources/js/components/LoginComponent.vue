<template>
  <!-- <form @submit.prevent="submit">
    <div class="form-group">
      <vs-input
        type="email"
        icon-no-border
        icon="account_circle"
        name="email"
        id="email"
        label-placeholder="Email"
        v-model="fields.email"
      />
      <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
      <div v-if="errors && errors.user" class="text-danger">{{ errors.user }}</div>
    </div>

    <div class="form-group">
      <vs-input
        type="password"
        icon-no-border
        icon="vpn_key"
        name="password"
        id="password"
        label-placeholder="Contraseña"
        v-model="fields.password"
      />
      <div v-if="errors && errors.password" class="text-danger">{{ errors.password[0] }}</div>
    </div>
    <vs-button type="filled" @click="submit" color="primary">Acceder</vs-button>
    <div v-if="success" class="alert alert-success mt-3">Message sent!</div>
  </form>-->
  <div class="login">
    <div v-if="loggingIn" class="container-loading">
      <h1>is login!</h1>
    </div>
    <p v-if="loginError">{{ loginError }}</p>
    <p v-if="loginSuccessful">Login Successful</p>
    <form @submit.prevent="loginSubmit">
      <input type="email" placeholder="E-Mail" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
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

  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["loggingIn", "loginError", "loginSuccessful"])
  },
  methods: {
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
      this.$vs.loading.close();
    }
  }
};
</script>