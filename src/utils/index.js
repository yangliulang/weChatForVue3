export const getTranstionPageTypeByRoutePath = function getTranstionPageTypeByRoutePath(
  to,
  from
) {
  let type = "slide-left";
  const toPath = to.path;
  const fromPath = from.path;
  const toPathDeep = new Set(toPath.split("/")).size;
  const fromPathDeep = new Set(fromPath.split("/")).size;

  toPathDeep > fromPathDeep ? (type = "slide-left") : (type = "slide-right");
  return type;
};
