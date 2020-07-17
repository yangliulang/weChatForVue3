// 根据路由跳转的meta提供的transtionPageType获取页面转场时的动画
export const getTranstionPageTypeByRoutePath = function getTranstionPageTypeByRoutePath(
  to,
  from
) {
  let type = "slide-left";
  const transitionType =
    to.meta.transtionPageType || from.meta.transtionPageType || "slide";
  const toPath = to.path;
  const fromPath = from.path;
  const toPathDeep = new Set(toPath.split("/")).size;
  const fromPathDeep = new Set(fromPath.split("/")).size;
  if (transitionType === "slide") {
    toPathDeep > fromPathDeep ? (type = "slide-left") : (type = "slide-right");
  }
  if (transitionType === "fade") {
    toPathDeep > fromPathDeep ? (type = "fade-up") : (type = "fade-down");
    // 从fade界面退出
    if (!to.meta.transtionPageType && from.meta.transtionPageType) {
      type = "fade-up";
    }
  }

  return type;
};
