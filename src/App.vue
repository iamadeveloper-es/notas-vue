<template>
  <div id="app">
    <the-header></the-header>
    <main class="main" role="main">
      <router-view/>
    </main>    
  </div>
</template>
<script>
import TheHeader from './components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
