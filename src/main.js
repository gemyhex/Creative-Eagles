import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Imported Files
// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Global
import "./assets/scss/global.scss";

createApp(App).use(store).use(router).mount("#app");
