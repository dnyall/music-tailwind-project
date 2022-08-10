import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import validation from './includes/validation';
import './includes/firebase'
import './assets/tailwind.css';
// import router from './router';

const app = createApp(App);
app.use(store);
app.use(validation);
app.mount('#app');
