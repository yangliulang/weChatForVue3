(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["discover"],
  {
    6723: function(r, e, n) {
      "use strict";
      n.r(e);
      var o = n("5c40"),
        a = { class: "page discover-page" },
        c = Object(o["j"])(" 发现 ");
      function t(r, e) {
        var n = Object(o["y"])("NavHeadBar");
        return (
          Object(o["s"])(),
          Object(o["f"])("div", a, [
            Object(o["k"])(
              n,
              {
                title: "发现",
                "on-forward": r.onForward,
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
      var i = n("806b"),
        d = {
          name: "Discover",
          components: { NavHeadBar: i["a"] },
          setup: function() {
            var r = function() {};
            return { onForward: r };
          }
        };
      d.render = t;
      e["default"] = d;
    }
  }
]);
//# sourceMappingURL=discover.70b867fc.js.map
