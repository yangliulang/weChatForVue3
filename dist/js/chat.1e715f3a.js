(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chat"],
  {
    "293a": function(a, n, o) {
      "use strict";
      o.r(n);
      var t = o("5c40"),
        c = Object(t["H"])("data-v-4a17db46");
      Object(t["v"])("data-v-4a17db46");
      var e = { class: "page chat-page" };
      Object(t["t"])();
      var r = c(function(a, n) {
          var o = Object(t["y"])("NavHeadBar");
          return (
            Object(t["s"])(),
            Object(t["f"])("div", e, [
              Object(t["k"])(
                o,
                {
                  title: "一只帅蚂蚁",
                  "on-back": a.goToWeChat,
                  "on-forward": a.onForword,
                  "forword-icon": "wx-icon-pengyouquan"
                },
                null,
                8,
                ["on-back", "on-forward"]
              ),
              Object(t["k"])(
                "p",
                {
                  onClick:
                    n[1] ||
                    (n[1] = function() {
                      return a.goToMini.apply(a, arguments);
                    })
                },
                "进入小程序"
              )
            ])
          );
        }),
        u = o("8c4f"),
        d = o("806b"),
        i = {
          name: "Chat",
          components: { NavHeadBar: d["a"] },
          setup: function() {
            var a = Object(u["d"])();
            function n() {
              a.push("/");
            }
            function o() {
              a.push("/applet/10203");
            }
            function t() {
              alert(0), a.push("/applet/10203");
            }
            return { goToWeChat: n, goToMini: o, onForword: t };
          }
        };
      o("b021");
      (i.render = r), (i.__scopeId = "data-v-4a17db46");
      n["default"] = i;
    },
    "6d54": function(a, n, o) {},
    b021: function(a, n, o) {
      "use strict";
      o("6d54");
    }
  }
]);
//# sourceMappingURL=chat.1e715f3a.js.map
