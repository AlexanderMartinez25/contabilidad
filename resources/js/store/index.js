import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggingIn: false,
        loginError: null,
        loginSuccessful: false
    },
    mutations: {
        loginStart: state => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
            state.loggingIn = false;
            state.loginError = errorMessage;
            state.loginSuccessful = !errorMessage;
            // console.log('is error', errorMessage);

        }
    },
    actions: {
        doLogin({
            commit
        }, loginData) {
            commit('loginStart');
            console.log(loginData);
            axios.post('/submit', {
                    ...loginData
                })
                .then(response => {
                    commit('loginStop', null);
                })
                .catch(error => {
                    commit('loginStop', error.response.data.message)
                })
        }
    }
})
