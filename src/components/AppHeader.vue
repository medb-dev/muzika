<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-2xl mr-4" :to="{name:'home'}" exact-active-class="no-active">
        muzika
      </router-link>

      <div class="flex flex-grow justify-end items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-0 justify-center">
          <!-- Navigation Links -->
          <template v-if="!userLoggedIn">
            <li>
              <router-link class="px-2 font-semibold text-white" :to="{name:'home'}" @click.prevent="toggleAuthModal" exact-active-class="no-active">
                Login / Register
              </router-link>
            </li>
          </template>
          <template v-else>
            <li class="flex items-center">
              <router-link class="px-2 font-semibold text-white" :to="{name:'home'}" @click.prevent="logout" exact-active-class="no-active">
                Logout
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link class="px-2 font-semibold text-white" :to="{name:'manage'}"
              >Manage</router-link>
            </li>
            <li class="flex items-center">
              <div
                class="w-9 h-9 rounded-full bg-cover bg-center"
                :style="{
                  backgroundImage: `url(${getUserPhotoUrl})`,
                  backgroundPosition: 'center center',
                  backgroundSize: '100%',
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
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapState(["userLoggedIn"]),
    ...mapGetters(["getUserDisplayName","getUserPhotoUrl"])
  },
  methods: {
    ...mapMutations(["toggleAuthModal", "toggleAuth"]),
    ...mapActions(["logout"]),
  },
};
</script>
