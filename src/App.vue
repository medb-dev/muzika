<template>

<!-- Header -->
  <AppHeader/>
  <!-- Introduction -->
  <AppIntro/>
  <!-- Main Content -->
  <AppMain/>
  <!-- Player -->
  <AppPlayer/>
  <!-- Auth Modal -->
  <AppAuth/>

</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppIntro from './components/AppIntro.vue'
import AppMain from './components/AppMain.vue'
import AppPlayer from './components/AppPlayer.vue'
import AppAuth from './components/AppAuth.vue'
export default{
  name:'App',
  components:{AppHeader,AppIntro,AppMain,AppPlayer,AppAuth},
}
</script>

<style lang="scss">
</style>
