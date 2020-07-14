// import store from "../store";
import { getTranstionPageTypeByRoutePath } from "../utils";
import store from "../store";
function configRouter(routerInstance) {
  // 导航开始前拦截
  routerInstance.beforeEach((to, from, next) => {
    const transitionPageType = getTranstionPageTypeByRoutePath(to, from);
    store.commit("setTranstionPageType", transitionPageType);
    next();
  });
  // 当行结束后拦截
  routerInstance.afterEach(() => {
    // 每次页面过度前把滚动条置顶
    document.documentElement.scrollTop = 0;
  });
  return routerInstance;
}
export default configRouter;
