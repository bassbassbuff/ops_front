import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import './style.css'

axios.defaults.baseURL = 'https://start-bvtwuypbsq-km.a.run.app:8000/operations'

createApp(App).use(store).use(router, axios).mount("#app");
