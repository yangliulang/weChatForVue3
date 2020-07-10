import { createApp } from "vue";
// 总入口
import App from "./App.vue";
// 路由相关
import router from "./router";
// vuex相关
import store from "./store";
// 安装移动端css重置库并引入
import "mobile-reset.css";
// 创建app -> createApp
// 使用安装 -> use
// 取消了filter 尽量用计算属性或方法实现
createApp(App)
  .use(router)
  .use(store)
  .mount("#wechat");
