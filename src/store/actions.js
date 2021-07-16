export default {
    checkIfUser({commit}){
        commit('CHECK_IF_USER')
    },
    createUser({commit}, payload){
        commit('CREATE_USER', payload)
    },
    getUser({commit}){
        commit('GET_USER')
    }
}