<template>
  <div class="login-component">
    <div class="wrapper">
        <user-component
        v-if="user.name"
        :name="user.name"
        :userName="true"
        :class="['text-center', 'mb-5', 'big']"
        ></user-component>
        <form class="form" @submit.prevent="createUser()">
            <div class="form-header">
                <h4 class="mb-3 cl-primaryGrey">Crear Usuario</h4>
            </div>
            <input type="text" 
            class="form-input title"
            placeholder="Nombre de Usuario"
            v-model.trim="user.name"
            @keydown="cleanErrorMssg()"
            >
            <!-- <fieldset class="mt-3 color-picker">
                <legend class="cl-primaryGrey">Elige un color</legend>
                <label class="color" v-for="color in colors" :key="color.value" :class="color.class">
                    <input type="radio" :name="color.name" :value="color.value" v-model="user.color">
                </label>
            </fieldset> -->
            <button-component
            :classes="['primary-blue mt-3']"
            :buttonType="'submit'"
            text="Crear"
            ></button-component>
            <div class="error-mssg" v-if="error">{{error}}</div>
        </form>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../../UI/Buttons/ButtonComponent.vue'
import UserComponent from '../../UI/User/UserComponent.vue'
export default {
  components: { ButtonComponent, UserComponent },
    data(){
        return{
            user: {
                name: '',
                color: ''
            },
            error: '',
            colors: [
                {
                    name: 'color',
                    value: 'blue',
                    class: 'blue',
                    active: true
                },
                {
                    name: 'color',
                    value: 'orange',
                    class: 'orange',
                    active: false
                },
                {
                    name: 'color',
                    value: 'yellow',
                    class: 'yellow',
                    active: false
                },
                {
                    name: 'color',
                    value: 'purple',
                    class: 'purple',
                    active: false
                }
            ]
        }
    },
    methods:{
        createUser(){
            let payload = this.user
            payload.name = this.user.name.replace(/\s/g, "").toLowerCase()
            if(this.user.name != ''){
                console.log(payload)
                this.$router.push({path: '/'})
                return this.$store.dispatch('createUser', payload);

            }else{
                this.error = 'Introduce un nombre de usuario'
            }
            
        },
        cleanErrorMssg(){
            if(this.user.name != '' && this.error != '')
                this.error = ''
        }
    }
}
</script>

<style lang="scss" scoped>

.login-component{
    width: 100%;
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper{
        max-width: 300px;
    }
    .form{
        width: 100%;
        padding: 1rem;
        background-color: $white;
        border: 1px solid $secondaryGrey;
        border-radius: 5px;
        box-shadow: 2px 2px 6px rgb(190, 190, 190);
    }
}
.error-mssg{
    padding: 10px;
    background-color: $danger;
    border-radius: 5px;
    margin-top: 10px;
    color: $white;
}
.color-picker{
    input[type="radio"] {
        position: absolute;
        clip: rect(2px, 2px, 2px, 2px);
        height: 2px;
        overflow: hidden;
    }
    .color{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        cursor: pointer;
        &:not(:nth-of-type(1)){
            margin-left: 15px;
        }
        &.blue{
            border: 2px solid #1867cf;
            background-color: $primaryBlue;
        }
        &.orange{
            border: 2px solid #ea9d0c;
            background-color: $orange;
        }
        &.yellow{
            background-color: $yellow;
        }
        &.purple{
            background-color: $purple;
        }
        
    }
}

@media screen and(min-width: 758px){
    .login-component{
        .wrapper{
            min-width: 400px;
            max-width: 400px;
        }
    }
}
</style>