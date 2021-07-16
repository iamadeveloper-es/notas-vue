<template>
  <button 
  class="btn-custom"
  :class="classes"
  :type="buttonType"
  >{{text}}</button>
</template>

<script>
export default {
    props:{
        text: String,
        classes: Array,
        buttonType: String,
    },
    methods:{
        handleClick(ev){
            this.$emit('CustomClick', ev)
        }
    }
}
</script>

<style lang="scss">
.btn-custom{
    display: inline-block;
    padding: 12px 16px;
    border: none;
    border-radius: 7px;
    line-height: 18px;
    font-size: 16px;
    font-family: $roboto;
    background-color: transparent;
    color: $primaryGrey;
    text-align: center;
    cursor: pointer;
    &.primary-blue{
        background-color: $primaryBlue;
        color: $white;
    }
}
</style>