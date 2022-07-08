import { createStore } from 'vuex';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/includes/firebase";

export default createStore({
  state: {
    authModalShow: false,
    schema: {
      name: "required|alpha_spaces|min:3|max:40",
      email: "required|email|min:5|max:40",
      age: "required|numeric|min_value:18",
      password: "required|min:8|max:40",
      confirm_password: "required|passwords_mismatch:@password",
      country: "required|country_excluded:Morocco,Algeria",
      tos: "tos",
    },
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => (state.authModalShow = !state.authModalShow),
    toggleAuth: (state) => (state.userLoggedIn = !state.userLoggedIn),
  },
  getters: {
    getUserDisplayName(){
      return getAuth().currentUser.displayName
    },
    getUserPhotoUrl(){
      return getAuth().currentUser.photoURL;
    },
  },
  actions: {
    async register({ commit }, payload) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });
      await updateProfile(getAuth().currentUser, {
        displayName: payload.name,
        photoURL: `https://avatars.dicebear.com/api/initials/:${payload.name.charAt(0)}.svg`,
      })
      commit("toggleAuth");
    },
    async login({ commit }, payload) {
      await signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
      commit("toggleAuth");
    },
    async logout({ commit }) {
      const user = auth.currentUser;
      if (user) {
        await signOut(getAuth());
        commit("toggleAuth");
        window.location.reload();
      }
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit("toggleAuth");
      }
    },
  },
  modules: {},
});
