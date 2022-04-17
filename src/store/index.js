import { createStore } from 'vuex';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {addDoc} from 'firebase/firestore'
import {auth,usersCollection} from '@/includes/firebase'

export default createStore({
  state: {
    authModalShow:false,
    schema : {
        name:'required|alpha_spaces|min:3|max:40',
        email:'required|email|min:5|max:40',
        age:'required|numeric|min_value:18',
        password:'required|min:8|max:40',
        confirm_password:'required|passwords_mismatch:@password',
        country:'required|country_excluded:Morocco,Algeria',
        tos:'tos'
    },
    userLoggedIn:false
  },
  mutations:{
    toggleAuthModal: (state) => state.authModalShow = !state.authModalShow,
    toggleAuth: (state) => state.userLoggedIn = !state.userLoggedIn,
  },
  getters: {
  },
  actions: {
    async register({commit},payload){
      await createUserWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
          )
      await addDoc(usersCollection,{
          name:payload.name,
          email:payload.email,
          age:payload.age,
          country:payload.country,
        })
      commit('toggleAuth')
    }
  },
  modules: {
  },
});
