<template>
  <div class="home">
    <note-list></note-list>
  </div>
</template>

<script>
import NoteList from '../components/Layout/Notes/NoteList.vue'


export default {
  components: { NoteList },
  
  name: 'Notes',
  
}
</script>
