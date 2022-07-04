<template>
  <form @submit="login">
    <!-- Alert -->
    <div
      class="text-white text-center font-bold p-5 mb-4"
      :class="login_alert_variant"
      v-show="login_alert_show"
    >
      {{ login_alert_message }}
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <input
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
        v-model="email"
      />
      <div
        class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2"
        v-if="!email.includes('@', 1) && email.includes() && email != ''"
      >
        Invalid email
      </div>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <input
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <!-- Submit -->
    <button
      type="submit"
      :disabled="login_in_submission && userLoggedIn"
      @click.prevent="login"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </form>

  <!-- <form :validation-schema="schema" @submit="login" >
    <div
      class="text-white text-center font-bold p-5 mb-4"
      :class="login_alert_variant"
      v-show="login_alert_show"
    >
      {{ login_alert_message }}
    </div>
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <input
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <input
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button
      type="submit"
      :disabled="login_in_submission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </form> -->
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      login_in_submission: false,
      login_alert_show: false,
      login_alert_message: "Please wait! We are loggin you in.",
      login_alert_variant: "bg-blue-400",
    };
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
    async login() {
      this.login_in_submission = true;
      this.login_alert_show = true;
      this.login_alert_message = "Please wait! We are loggin you in.";
      this.login_alert_variant = "bg-blue-400";
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_message = "Invalid login details.";
        this.login_alert_variant = "bg-red-400";
        // console.error(error);
        return;
      }
      this.login_alert_message = "Success! You are logged in.";
      this.login_alert_variant = "bg-green-400";
      setTimeout(() => {
        this.login_alert_show = false;
        this.login_alert_message = "Please wait! We are loggin you in.";
        this.login_alert_variant = "bg-blue-400";
        this.email = "";
        this.password = "";
        this.toggleAuthModal();
      }, 700);

      window.location.reload();
    },
  },
  computed: {
    ...mapState(["schema", "userLoggedIn"]),
  },
};
</script>
