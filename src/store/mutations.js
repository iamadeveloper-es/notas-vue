export default {
    CHECK_IF_USER(state){
        if(localStorage.getItem('isUser') === null){
            state.isLogin = false
        }else{
            state.isLogin = true
        }
    },
    CREATE_USER(state, payload){
        state.isLogin = true
        state.user = payload
        localStorage.setItem('isUser', true)
        localStorage.setItem('user', JSON.stringify(state.user))
    },
    GET_USER(state){
        let user = JSON.parse(localStorage.getItem('user'));
        console.log('llega')
        state.user = user
    }
}