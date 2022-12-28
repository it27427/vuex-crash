import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/** 
** BOOTSTRAP CSS AND BOOTSTRAP BUNDLE JS
**/
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";


/** 
** APP CSS (CUSTOM)
**/
import "./sass/app.scss";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
