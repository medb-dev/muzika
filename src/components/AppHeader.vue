<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-2xl mr-4" to="/">
        muzika
      </router-link>

      <div class="flex flex-grow justify-end items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1 justify-center">
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
              <router-link class="px-2 text-white" to="/manage">Manage</router-link>
            </li>
            <li>
              <div
                class="w-8 h-8 rounded-full bg-cover bg-center"
                :style="{
                  backgroundImage: `url(${require('@/assets/profile-picture.png')})`,
                  backgroundPosition: 'center center',
                  backgroundSize: '80%',
                }"
              ></div>
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
