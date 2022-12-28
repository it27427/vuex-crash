import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// BOOTSTRAP
// import ''

// CUSTOM CSS
import "./sass/style.scss";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
