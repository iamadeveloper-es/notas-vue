<template>
  <div id="app">
    <the-header :isLogin="isLogin"></the-header>
    <main class="main" role="main">
      <router-view/>
    </main>    
  </div>
</template>
<script>
import TheHeader from './components/TheHeader.vue'
import { mapState, mapActions} from 'vuex'
export default {
  components: {
    TheHeader
  },
  methods:{
    ...mapActions(['checkIfUser', 'getUser']),
    routeHandler(status){
      if(!status && this.$route.path != '/login'){
        return this.$router.push({path: 'login'})
      }else{
        return this.getUser()
        
      }
    }
  },
  computed: mapState(['isLogin']),
  created(){
    this.checkIfUser()
    this.routeHandler(this.isLogin)
  }
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
