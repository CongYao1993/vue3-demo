import { createApp } from "vue";
import App from "@/App.vue";
import { createMyRouter } from '@/router/index'
import "@/assets/base.css";


const app = createApp(App);
app.use(createMyRouter());
app.mount("#app");