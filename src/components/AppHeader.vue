<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">muzika</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <a class="px-2 text-white" href="#" v-if="!userLoggedIn"
            @click.prevent="toggleAuthModal">Login / Register</a>
            <a class="px-2 text-white" href="#" v-else
            @click.prevent="toggleAuth">Logout</a>
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
export default {
    name:'AppHeader',
    computed:{
      ...mapState(['userLoggedIn'])
    },
    methods:{
      ...mapMutations(['toggleAuthModal','toggleAuth'])
    },
}
</script>