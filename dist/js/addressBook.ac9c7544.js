(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["addressBook"],
  {
    "60db": function(a, e, n) {
      "use strict";
      n("ebb7");
    },
    a085: function(a, e, n) {
      "use strict";
      n.r(e);
      var o = n("5c40"),
        t = Object(o["H"])("data-v-b2ff2112");
      Object(o["v"])("data-v-b2ff2112");
      var r = { class: "page" },
        c = Object(o["j"])(" 通讯录 ");
      Object(o["t"])();
      var d = t(function(a, e) {
          var n = Object(o["y"])("NavHeadBar");
          return (
            Object(o["s"])(),
            Object(o["f"])("div", r, [
              Object(o["k"])(
                n,
                {
                  title: "通讯录",
                  "on-forward": a.onForward,
                  "forword-icon": "wx-icon-shezhi"
                },
                null,
                8,
                ["on-forward"]
              ),
              c
            ])
          );
        }),
        b = n("806b"),
        s = {
          name: "AddressBook",
          components: { NavHeadBar: b["a"] },
          setup: function() {
            var a = function() {};
            return { onForward: a };
          }
        };
      n("60db");
      (s.render = d), (s.__scopeId = "data-v-b2ff2112");
      e["default"] = s;
    },
    ebb7: function(a, e, n) {}
  }
]);
//# sourceMappingURL=addressBook.ac9c7544.js.map
