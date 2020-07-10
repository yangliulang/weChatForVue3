import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "mobile-reset.css";
import "./assets/styles/index.less";
createApp(App)
  .use(router)
  .use(store)
  .mount("#wechat");
