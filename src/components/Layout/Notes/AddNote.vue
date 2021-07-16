<template>
  <div class="add-note">
      <note-component
      :isEdit="isEdit"
      @CustomClick="toogleEdit($event)"
      >
        <div slot="note">
            <input type="text" 
            class="form-input title"
            placeholder="Nueva nota"
            v-model="newNote.title"
            >
        </div>
        <div slot="hide-note">
            <textarea 
            class="form-input text" 
            placeholder="Texto"
            v-model="newNote.text"
            >
            </textarea>
            <div class="note-menu">
                <button @click="handleEvent($event)">Crear</button>
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
  data(){
      return{
          isEdit: false,
          newNote: {
            title: '',
            text: ''
          }
      }
  },
  methods:{
    toogleEdit(){
        console.log('click')
        this.isEdit = true
    },
    handleEvent(){
        this.$emit('NewNote', this.newNote)
    }
  }

}
</script>

<style>

</style>