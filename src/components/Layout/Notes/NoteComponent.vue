<template>
  <div class="single-note-wrapper">
    <div class="single-note"
    @click="handleEvent($event)"
    >
        <slot name="note"></slot>
    </div>          
    <div
    class="hide-content"
    v-if="isEdit"
    >
        <slot name="hide-note"></slot>
      </div>
  </div>
</template>

<script>
export default {
    props:['isEdit'],
    methods:{
        handleEvent(ev){
            console.log(ev)
            this.$emit('CustomClick', ev)
        }
    }
}
</script>

<style lang="scss" scoped>
.single-note-wrapper{
    border: 1px solid $secondaryGrey;
    border-radius: 10px;
    padding: 10px;
    .form-input{
        padding: 0;
    }
    .title{
        font-size: 18px;
    }
    .date{
        font-size: 12px;
        color: $strongGrey;
    }
}
</style>