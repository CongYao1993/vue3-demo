import { createApp } from "vue";
import { createRouter,createWebHashHistory  } from "vue-router";
import "@/assets/base.css";
import App from "@/App.vue";
import Home from "@/pages/home.vue";
import Blog from "@/pages/blog.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/blog", component: Blog },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");