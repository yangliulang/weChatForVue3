// import store from "../store";
import { getTranstionPageTypeByRoutePath } from "../utils";
import store from "../store";
function configRouter(routerInstance) {
  routerInstance.beforeEach((to, from, next) => {
    const transitionPageType = getTranstionPageTypeByRoutePath(to, from);
    store.commit("setTranstionPageType", transitionPageType);
    // console.log("transitionPageType", transitionPageType);
    next();
  });
  return routerInstance;
}
export default configRouter;
