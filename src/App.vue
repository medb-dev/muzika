<template>
  <!-- Header -->
  <AppHeader />
  <router-view></router-view>
  <!-- Player -->
  <AppPlayer />
  <!-- Auth Modal -->
  <AppAuth />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppPlayer from "./components/AppPlayer.vue";
import AppAuth from "./components/AppAuth.vue";
export default {
  name: "App",
  components: { AppHeader, AppPlayer, AppAuth },
  created() {
    this.$store.dispatch("init_login");
  },
};
</script>

<style lang="scss"></style>
