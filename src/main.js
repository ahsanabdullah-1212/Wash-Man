import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import router from '@/assets/router/router'; // Adjust the import path

const app = createApp(App);
app.use(router); // Use Vue Router in your app
app.mount('#app');
