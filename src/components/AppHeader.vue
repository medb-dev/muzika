<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">muzika</a>

      <div class="flex flex-grow justify-end items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <template v-if="!userLoggedIn">
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">
                Login / Register
              </a>
            </li>
          </template>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="logout">Logout</a>
            </li>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
            <li>
              <img
                class="w-8 rounded-full"
                src="../assets/profile-picture.png"
                alt="profile picture"
              />
              <!-- src="userPhotoUrl" -->
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapState(["userLoggedIn", "userPhotoUrl"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal", "toggleAuth"]),
    ...mapActions(["logout"]),
  },
};
</script>
