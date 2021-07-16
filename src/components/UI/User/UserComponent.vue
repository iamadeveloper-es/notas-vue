<template>
  <div class="user-component">
    <div class="user-pic"
    :class="userName ? 'mb-3' : ''"
    >
        {{name | firstChar}}
    </div>
    <div class="user-name"
    v-if="userName"
    >
        {{name | removeSpaces}}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        classes: Array,
        userName: Boolean
    }
}
</script>

<style lang="scss" scoped>
.user-component{
    .user-pic{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 100%;
        overflow: hidden;
        background-color: $primaryBlue;
        margin-left: auto;
        margin-right: auto;
        color: $white;
        
    }
    &.big{
        padding: 15px;
        font-size: 40px;
        .user-pic{
            width: 100px;
            height: 100px;
        }
    } 
    &.small .user-pic{
        width: 30px;
        height: 30px;
    }
}
</style>