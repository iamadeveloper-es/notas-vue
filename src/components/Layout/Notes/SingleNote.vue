<template>

  <div>
      <note-component
      @CustomClick="toogleEdit($event)"
      :isEdit="isEdit"
      >
          <div slot="note">
            <input type="text" 
            class="form-input title"
            :value="note.title"
            >
            <textarea 
            class="form-input text" 
            :value="note.text"
            ></textarea>
          </div>
          <div slot="hide-note">
                <div class="date">Creada: </div>
                <div class="note-menu">
                    menu
                </div>
          </div>
      </note-component>
  </div>
</template>

<script>
import NoteComponent from './NoteComponent.vue'
export default {
    components: { NoteComponent },
    props:['note'],
    data(){
        return{
            isEdit: false
        }
    },
    methods:{
        toogleEdit(){
            console.log('click')
            this.isEdit = true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>