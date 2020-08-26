import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import configRouter from "./config";
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
// 对router就行配置鉴权等
configRouter(router);
//对配置完的router导出给createApp.use使用
export default router;
