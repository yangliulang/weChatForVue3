(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["me"],
  {
    "0a99": function(e, n, r) {
      "use strict";
      r.r(n);
      var a = r("5c40"),
        o = { class: "page discover-page" },
        c = Object(a["j"])(" 我 ");
      function t(e, n) {
        var r = Object(a["y"])("NavHeadBar");
        return (
          Object(a["s"])(),
          Object(a["f"])("div", o, [
            Object(a["k"])(
              r,
              {
                title: "我",
                "on-forward": e.onForward,
                "forword-icon": "wx-icon-shezhi"
              },
              null,
              8,
              ["on-forward"]
            ),
            c
          ])
        );
      }
      var d = r("806b"),
        i = {
          name: "Me",
          components: { NavHeadBar: d["a"] },
          setup: function() {
            var e = function() {};
            return { onForward: e };
          }
        };
      i.render = t;
      n["default"] = i;
    }
  }
]);
//# sourceMappingURL=me.f8b126cc.js.map
