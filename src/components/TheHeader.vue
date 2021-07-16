<template>
  <div class="app-header">
      <b-container fluid>
          <b-row>
              <b-col cols="12">
                  <div class="grid">
                      <div class="span-8 app-title">
                          <h1 class="cl-primaryGrey">Notas Vue</h1>
                      </div>
                      <div v-if="isLogin" class="span-5 search-bar">
                          <input type="text" class="form-input" placeholder="Buscar...">
                          <span class="fas fa-times"></span>
                      </div>
                      <div v-if="isLogin" class="span-2 nav-menu">
                          <nav class="nav justify-content-end">
                              <ul class="ul-reset d-flex align-items-center">
                                  <li class="p-2">
                                      <span class="fas fa-th-list"></span>
                                  </li>
                                  <li class="p-2">
                                      <span class="fas fa-cog"></span>
                                  </li>
                                  <li class="p-2">
                                      <user-component
                                        :name="this.getUserInfo.name"
                                        :userName="false"
                                        :class="['small']"
                                      ></user-component>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import UserComponent from './UI/User/UserComponent.vue'
import {mapState} from 'vuex'
export default {
  components: { UserComponent },
    props:['isLogin'],
    computed:{
        ...mapState(['user']),
        getUserInfo(){
            return this.user
        }
    },
    mounted(){
        this.getUserInfo
    }
}
</script>

<style lang="scss" scoped>
.app-header{
    padding: 15px;
    border-bottom: 1px solid rgba(217, 217, 217, .8);
}
.grid{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    gap: 20px;
}
.span-8{
    grid-column: 1 / -1;
}
.span-5{
    grid-column: 1 / -1;
}
.span-2{
    grid-column: 1 / -1;
}
.search-bar{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid $secondaryGrey;
    border-radius: 10px;
    overflow: hidden;
    .fas{
        width: 30px;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
}
.form-input{
    height: 100%;
}


@media screen and(min-width: 992px){
    .app-header{
        padding: 30px;
    }
    .span-8{
        grid-column: 1 / 3;
    }
    .span-5{
    grid-column: 3 / 6;
    }
    .span-2{
        grid-column: 8 / -1;
    }
}
</style>