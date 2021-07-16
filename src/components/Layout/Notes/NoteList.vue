<template>
  <div class="note-list grid">
      <single-note
      v-for="(note, index) in notes"
      :key="index"
      :note="note"
      ></single-note>
  </div>
</template>

<script>
import SingleNote from './SingleNote.vue'
export default {
  components: { SingleNote },
  props:['newNote'],
    data(){
        return{
            notes: [
                {
                    title: 'prueba',
                    text: 'content',
                    done: false
                },
                {
                    title: 'prueba',
                    text: 'content',
                    done: false
                },
                
            ]
        }
    },
    updated(){
        this.notes.push(this.newNote)
    }
}
</script>

<style lang="scss" scoped>
.grid{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
}
</style>