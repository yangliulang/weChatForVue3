(function(e) {
  function t(t) {
    for (
      var a, r, i = t[0], u = t[1], s = t[2], d = 0, l = [];
      d < i.length;
      d++
    )
      (r = i[d]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && l.push(o[r][0]),
        (o[r] = 0);
    for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    f && f(t);
    while (l.length) l.shift()();
    return c.push.apply(c, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], a = !0, r = 1; r < n.length; r++) {
        var i = n[r];
        0 !== o[i] && (a = !1);
      }
      a && (c.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { app: 0 },
    o = { app: 0 },
    c = [];
  function i(e) {
    return (
      u.p +
      "js/" +
      ({
        addressBook: "addressBook",
        applet: "applet",
        chat: "chat",
        demo: "demo",
        discover: "discover",
        me: "me"
      }[e] || e) +
      "." +
      {
        addressBook: "ac9c7544",
        applet: "87c118b1",
        chat: "1e715f3a",
        demo: "243799b4",
        discover: "70b867fc",
        me: "f8b126cc"
      }[e] +
      ".js"
    );
  }
  function u(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function(e) {
    var t = [],
      n = { addressBook: 1, chat: 1 };
    r[e]
      ? t.push(r[e])
      : 0 !== r[e] &&
        n[e] &&
        t.push(
          (r[e] = new Promise(function(t, n) {
            for (
              var a =
                  "css/" +
                  ({
                    addressBook: "addressBook",
                    applet: "applet",
                    chat: "chat",
                    demo: "demo",
                    discover: "discover",
                    me: "me"
                  }[e] || e) +
                  "." +
                  {
                    addressBook: "ea8cb7ae",
                    applet: "31d6cfe0",
                    chat: "29e89961",
                    demo: "31d6cfe0",
                    discover: "31d6cfe0",
                    me: "31d6cfe0"
                  }[e] +
                  ".css",
                o = u.p + a,
                c = document.getElementsByTagName("link"),
                i = 0;
              i < c.length;
              i++
            ) {
              var s = c[i],
                d = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === a || d === o)) return t();
            }
            var l = document.getElementsByTagName("style");
            for (i = 0; i < l.length; i++) {
              (s = l[i]), (d = s.getAttribute("data-href"));
              if (d === a || d === o) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function(t) {
                var a = (t && t.target && t.target.src) || o,
                  c = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.request = a),
                  delete r[e],
                  f.parentNode.removeChild(f),
                  n(c);
              }),
              (f.href = o);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(f);
          }).then(function() {
            r[e] = 0;
          }))
        );
    var a = o[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var c = new Promise(function(t, n) {
          a = o[e] = [t, n];
        });
        t.push((a[2] = c));
        var s,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          u.nc && d.setAttribute("nonce", u.nc),
          (d.src = i(e));
        var l = new Error();
        s = function(t) {
          (d.onerror = d.onload = null), clearTimeout(f);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = a),
                (l.request = r),
                n[1](l);
            }
            o[e] = void 0;
          }
        };
        var f = setTimeout(function() {
          s({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = s), document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = a),
    (u.d = function(e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function(e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          u.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (u.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "/"),
    (u.oe = function(e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var f = d;
  c.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "07a5": function(e, t, n) {
    "use strict";
    n("d5d9");
  },
  "25ef": function(e, t, n) {},
  4805: function(e, t, n) {},
  4816: function(e, t, n) {
    "use strict";
    n("4805");
  },
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var a = n("830f"),
      r = n("5c40");
    function o(e, t) {
      var n = Object(r["y"])("router-view");
      return (
        Object(r["s"])(),
        Object(r["f"])(n, null, {
          default: Object(r["G"])(function(t) {
            var n = t.Component;
            return [
              Object(r["k"])(
                a["a"],
                {
                  name: e._transtionPageType,
                  "onAfter-leave": e.onPageLeaved,
                  "onBefore-enter": e.onPageEnter
                },
                {
                  default: Object(r["G"])(function() {
                    return [
                      (Object(r["s"])(),
                      Object(r["f"])(
                        Object(r["z"])(n),
                        { ref: "transtionPageRef" },
                        null,
                        512
                      ))
                    ];
                  }),
                  _: 1
                },
                1032,
                ["name", "onAfter-leave", "onBefore-enter"]
              )
            ];
          }),
          _: 1
        })
      );
    }
    n("2ca0");
    var c = n("a1e9"),
      i = n("5502"),
      u = {
        name: "App",
        setup: function() {
          var e = Object(i["b"])(),
            t = Object(c["h"])(null),
            n = Object(c["h"])(null),
            a = Object(r["e"])(function() {
              return e.state.transtionPageType;
            });
          Object(r["F"])(t, function(e, t) {
            t && ((n.value = e), e.$el.classList.add("page-tranistioning"));
          });
          var o = function() {
              n.value.$el.classList.remove("page-tranistioning"),
                document.querySelector("#app").classList.remove("perspective");
            },
            u = function() {
              a.value.startsWith("fade") &&
                document.querySelector("#app").classList.add("perspective");
            };
          return {
            transtionPageRef: t,
            _transtionPageType: a,
            onPageLeaved: o,
            onPageEnter: u
          };
        }
      };
    n("ac09");
    u.render = o;
    var s = u,
      d = n("8c4f"),
      l = (n("d3b7"), { class: "page home-page" });
    function f(e, t) {
      var n = Object(r["y"])("router-view"),
        a = Object(r["y"])("NavToolBar");
      return (
        Object(r["s"])(),
        Object(r["f"])("div", l, [
          Object(r["k"])(n),
          Object(r["k"])(a, { navs: e.navs }, null, 8, ["navs"])
        ])
      );
    }
    n("b0c0");
    var p = n("ade3"),
      b = Object(r["H"])("data-v-d0703d9a");
    Object(r["v"])("data-v-d0703d9a");
    var v = { class: "nav-bar" };
    Object(r["t"])();
    var m = b(function(e, t) {
        var n = Object(r["y"])("Badge");
        return (
          Object(r["s"])(),
          Object(r["f"])("div", v, [
            (Object(r["s"])(!0),
            Object(r["f"])(
              r["b"],
              null,
              Object(r["w"])(e.navs, function(t) {
                var a;
                return (
                  Object(r["s"])(),
                  Object(r["f"])("nav", { key: t.path }, [
                    t.badge
                      ? Object(r["k"])(
                          n,
                          {
                            key: 0,
                            hidden: "false",
                            type: t.badge.type,
                            value: t.badge.value,
                            class: "my-badge"
                          },
                          null,
                          8,
                          ["type", "value"]
                        )
                      : Object(r["g"])("", !0),
                    Object(r["k"])(
                      "div",
                      {
                        class: [
                          "nav-button wx-iconfont",
                          ((a = {}),
                          Object(p["a"])(a, t.icon, !0),
                          Object(p["a"])(
                            a,
                            "actived",
                            e.currentRoutePath === t.path
                          ),
                          a)
                        ],
                        onClick: function(n) {
                          return e.goToPath(t.path);
                        }
                      },
                      Object(r["C"])(t.name),
                      11,
                      ["onClick"]
                    )
                  ])
                );
              }),
              128
            ))
          ])
        );
      }),
      h = Object(r["H"])("data-v-04227a84"),
      g = h(function(e, t) {
        return (
          Object(r["s"])(),
          Object(r["f"])(
            "span",
            {
              class: [
                "badge",
                { dot: "dot" === e.type, "badge-one": e.isNumberOne }
              ]
            },
            Object(r["C"])(e.value),
            3
          )
        );
      }),
      O =
        (n("a9e3"),
        {
          name: "Badge",
          props: { value: [Number, String], type: String, max: Number },
          setup: function(e) {
            var t = Object(r["e"])(function() {
              var t = "number" === typeof e.value && e.value + "";
              return t && 1 === t.length && !0;
            });
            return { isNumberOne: t };
          }
        });
    n("6b2f");
    (O.render = g), (O.__scopeId = "data-v-04227a84");
    var j = O,
      y = {
        name: "NavToolBarComp",
        components: { Badge: j },
        props: { navs: Array },
        setup: function() {
          var e = Object(d["d"])(),
            t = Object(d["c"])(),
            n = Object(c["n"])(t, "path"),
            a = function(t) {
              e.push(t);
            };
          return { goToPath: a, currentRoutePath: n };
        }
      };
    n("90f0");
    (y.render = m), (y.__scopeId = "data-v-d0703d9a");
    var w = y,
      k = {
        name: "Home",
        components: { NavToolBar: w },
        setup: function() {
          var e = Object(c["g"])([
            {
              name: "微信",
              path: "/",
              icon: "wx-icon-liaotian",
              badge: { type: "number", value: 9, max: 100 }
            },
            { name: "通讯录", path: "/addressBook", icon: "wx-icon-tongxunlu" },
            {
              name: "发现",
              path: "/discover",
              icon: "wx-icon-faxian",
              badge: { type: "dot" }
            },
            { name: "我", path: "/me", icon: "wx-icon-wode" }
          ]);
          return { navs: e };
        }
      };
    k.render = f;
    var B = k,
      P = Object(r["H"])("data-v-06b7bf7a");
    Object(r["v"])("data-v-06b7bf7a");
    var T = { class: "page wechat-page" };
    Object(r["t"])();
    var S = P(function(e, t) {
        var n = Object(r["y"])("NavHeadBar");
        return (
          Object(r["s"])(),
          Object(r["f"])("div", T, [
            Object(r["k"])(
              n,
              {
                title: "微信(90)",
                "on-forward": e.onForward,
                "forword-icon": "wx-icon-shezhi"
              },
              null,
              8,
              ["on-forward"]
            ),
            Object(r["k"])(
              "p",
              {
                onClick:
                  t[1] ||
                  (t[1] = function() {
                    return e.gotoLiaoTian.apply(e, arguments);
                  })
              },
              "聊天"
            )
          ])
        );
      }),
      x = n("806b"),
      _ = {
        name: "WeChatPage",
        components: { NavHeadBar: x["a"] },
        setup: function() {
          var e = Object(d["d"])();
          function t() {
            e.push("/chat/10001");
          }
          function n() {
            alert(10);
          }
          return { gotoLiaoTian: t, onForward: n };
        }
      };
    n("4816");
    (_.render = S), (_.__scopeId = "data-v-06b7bf7a");
    var C = _,
      N = [
        {
          path: "/",
          name: "Home",
          component: B,
          children: [
            { path: "/", name: "WeChat", component: C },
            {
              path: "/addressBook",
              name: "AddressBook",
              component: function() {
                return n.e("addressBook").then(n.bind(null, "a085"));
              }
            },
            {
              path: "/discover",
              name: "Discover",
              component: function() {
                return n.e("discover").then(n.bind(null, "6723"));
              }
            },
            {
              path: "/me",
              name: "Me",
              component: function() {
                return n.e("me").then(n.bind(null, "0a99"));
              }
            }
          ]
        },
        {
          path: "/chat/:userid",
          name: "Chat",
          component: function() {
            return n.e("chat").then(n.bind(null, "293a"));
          }
        },
        {
          path: "/applet/:appletId",
          name: "Mini",
          meta: { transtionPageType: "fade" },
          component: function() {
            return n.e("applet").then(n.bind(null, "2c46"));
          }
        },
        {
          path: "/demo/",
          name: "Demo",
          component: function() {
            return n.e("demo").then(n.bind(null, "680c"));
          }
        }
      ],
      E = N,
      L =
        (n("ac1f"),
        n("6062"),
        n("3ca3"),
        n("1276"),
        n("ddb0"),
        function(e, t) {
          var n = "slide-left",
            a = e.meta.transtionPageType || t.meta.transtionPageType || "slide",
            r = e.path,
            o = t.path,
            c = new Set(r.split("/")).size,
            i = new Set(o.split("/")).size;
          return (
            "slide" === a && (n = c > i ? "slide-left" : "slide-right"),
            "fade" === a &&
              ((n = c > i ? "fade-up" : "fade-down"),
              !e.meta.transtionPageType &&
                t.meta.transtionPageType &&
                (n = "fade-up")),
            n
          );
        }),
      A = i["a"].createStore({
        state: { transtionPageType: "slide-left" },
        mutations: {
          setTranstionPageType: function(e, t) {
            e.transtionPageType = t;
          }
        },
        actions: {},
        modules: {}
      });
    function H(e) {
      return (
        e.beforeEach(function(e, t, n) {
          var a = L(e, t);
          A.commit("setTranstionPageType", a), n();
        }),
        e.afterEach(function() {
          document.documentElement.scrollTop = 0;
        }),
        e
      );
    }
    var I = H,
      F = Object(d["a"])({ history: Object(d["b"])("/"), routes: E });
    I(F);
    var R = F;
    n("61d3");
    Object(a["b"])(s)
      .use(R)
      .use(A)
      .mount("#app");
  },
  "6b2f": function(e, t, n) {
    "use strict";
    n("acfa");
  },
  "806b": function(e, t, n) {
    "use strict";
    var a = n("5c40"),
      r = Object(a["H"])("data-v-53c0e88b");
    Object(a["v"])("data-v-53c0e88b");
    var o = { class: "nav-head-bar" },
      c = { class: "nav-head-title" };
    Object(a["t"])();
    var i = r(function(e, t) {
        return (
          Object(a["s"])(),
          Object(a["f"])("div", o, [
            Object(a["k"])(
              "div",
              {
                class: [
                  "nav-head-left",
                  { "wx-iconfont": e.onBack, "wx-icon-fanhui": e.onBack }
                ],
                onClick:
                  t[1] ||
                  (t[1] = function(t) {
                    return e.onBack && e.onBack();
                  })
              },
              null,
              2
            ),
            Object(a["k"])("div", c, Object(a["C"])(e.title), 1),
            Object(a["k"])(
              "div",
              {
                class: [
                  "nav-head-right",
                  [
                    e.forwordIcon && !e.isRightBySlot ? "wx-iconfont" : "",
                    e.forwordIcon && !e.isRightBySlot ? e.forwordIcon : ""
                  ]
                ],
                onClick:
                  t[2] ||
                  (t[2] = function(t) {
                    return e.onForward && !e.isRightBySlot && e.onForward();
                  })
              },
              [Object(a["x"])(e.$slots, "right")],
              2
            )
          ])
        );
      }),
      u = {
        name: "NavHeadBar",
        props: {
          title: String,
          onBack: Function,
          onForward: Function,
          forwordIcon: String
        },
        setup: function(e, t) {
          var n = t.slots,
            a = n.right;
          return { isRightBySlot: a };
        }
      };
    n("07a5");
    (u.render = i), (u.__scopeId = "data-v-53c0e88b");
    t["a"] = u;
  },
  "832b": function(e, t, n) {},
  "90f0": function(e, t, n) {
    "use strict";
    n("832b");
  },
  ac09: function(e, t, n) {
    "use strict";
    n("25ef");
  },
  acfa: function(e, t, n) {},
  d5d9: function(e, t, n) {}
});
//# sourceMappingURL=app.3c2a706a.js.map
