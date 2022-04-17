import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import veeValidation from './includes/validation.js'
import './includes/firebase.js'
import './assets/tailwind.css'
import './assets/main.css'

let vm = createApp(App)
vm.use(store)
vm.use(router)
vm.use(veeValidation)

vm.mount('#app');
