import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import veeValidation from "./includes/validation.js";
import { auth } from "./includes/firebase.js";
import "./assets/tailwind.css";
import "./assets/main.css";

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(store);
    app.use(router);
    app.use(veeValidation);
    app.mount("#app");
  }
});
