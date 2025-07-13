!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "a0a00299-582a-461d-9491-b89569bca3e9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a0a00299-582a-461d-9491-b89569bca3e9"));
  } catch (e) {}
})();
var _global =
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
(_global.SENTRY_RELEASE = { id: "keyword-gap@3737d08d" }),
  (self.webpackChunkkeyword_gap = self.webpackChunkkeyword_gap || []).push([
    [752],
    {
      97116: (e, t, a) => {
        var r = {
          "./limit_api.svg": [95423, 250, 423],
          "./limit_databases.svg": [60201, 250, 201],
          "./limit_excel.svg": [26678, 250, 678],
          "./limit_historical.svg": [57705, 250, 705],
          "./limit_keyword_per_report.svg": [26943, 250, 943],
          "./limit_reports_per_day.svg": [35561, 250, 561],
          "./limit_subdomain.svg": [71205, 250, 205],
        };
        function n(e) {
          if (!a.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            n = t[0];
          return Promise.all(t.slice(1).map(a.e)).then(() => a(n));
        }
        (n.keys = () => Object.keys(r)), (n.id = 97116), (e.exports = n);
      },
      98981: (e, t, a) => {
        var r = {
          "./de/countries.json": [52255, 65],
          "./en/countries.json": [63431, 61],
          "./es/countries.json": [49540, 294],
          "./fr/countries.json": [59084, 990],
          "./it/countries.json": [41361, 919],
          "./ja/countries.json": [66405, 843],
          "./ko/countries.json": [70030, 956],
          "./nl/countries.json": [40142, 208],
          "./pl/countries.json": [49892, 570],
          "./pt/countries.json": [83308, 578],
          "./sv/countries.json": [94277, 567],
          "./tr/countries.json": [59210, 936],
          "./vi/countries.json": [65409, 975],
          "./zh/countries.json": [82742, 424],
        };
        function n(e) {
          if (!a.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            n = t[0];
          return a.e(t[1]).then(() => a.t(n, 19));
        }
        (n.keys = () => Object.keys(r)), (n.id = 98981), (e.exports = n);
      },
      20006: (e, t, a) => {
        var r = {
          "./de/translation.json": [51770, 580],
          "./en/translation.json": [10946, 72],
          "./es/translation.json": [91489, 531],
          "./fr/translation.json": [23369, 435],
          "./it/translation.json": [44164, 154],
          "./ja/translation.json": [48416, 478],
          "./ko/translation.json": [49115, 761],
          "./nl/translation.json": [31003, 277],
          "./pl/translation.json": [20014, 503],
          "./pt/translation.json": [35017, 271],
          "./sv/translation.json": [54304, 346],
          "./tr/translation.json": [94831, 717],
          "./vi/translation.json": [13588, 714],
          "./zh/translation.json": [3555, 557],
        };
        function n(e) {
          if (!a.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            n = t[0];
          return a.e(t[1]).then(() => a.t(n, 19));
        }
        (n.keys = () => Object.keys(r)), (n.id = 20006), (e.exports = n);
      },
      59367: (e, t, a) => {
        var r = {
          "./find-insights.svg": [22995, 250, 995],
          "./select-keywords-type.svg": [95548, 250, 548],
          "./type-competitor.svg": [52845, 250, 845],
        };
        function n(e) {
          if (!a.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            n = t[0];
          return Promise.all(t.slice(1).map(a.e)).then(() => a(n));
        }
        (n.keys = () => Object.keys(r)), (n.id = 59367), (e.exports = n);
      },
      752: (e, t, a) => {
        "use strict";
        var r = {};
        a.r(r), a.d(r, { RANKING_TYPES: () => Dn, stateKey: () => Mn });
        var n = a(96540),
          l = a(5338),
          o = a(69733),
          i = a(97673),
          s = a(57971);
        const c = (0, s.zR)();
        var d = a(20827),
          p = a.n(d);
        const u = new (function () {
            function e(e, t, a) {
              const r = new Date();
              r.setTime(r.getTime() + 24 * a * 60 * 60 * 1e3);
              const n = `; expires=${r.toGMTString()}`;
              document.cookie = `${e}=${t}${n}; path=/`;
            }
            function t(t) {
              e("localStorage", JSON.stringify(t), 365);
            }
            let a = (function () {
              const e = (function () {
                const e = "localStorage=",
                  t = document.cookie.split(";");
                let a;
                for (let r = 0; r < t.length; r += 1) {
                  for (a = t[r]; " " === a.charAt(0); )
                    a = a.substring(1, a.length);
                  if (0 === a.indexOf(e)) return a.substring(13, a.length);
                }
                return null;
              })();
              return e ? JSON.parse(e) : {};
            })();
            function r() {
              return Object.keys(a).length;
            }
            return {
              clear() {
                (a = {}), e("localStorage", "", 365), (this.length = r());
              },
              getItem(e) {
                const t = encodeURIComponent(e);
                return void 0 === a[t] ? null : a[t];
              },
              key(e) {
                const t = Object.keys(a).filter((t, a) => a === e)[0];
                return null != t ? decodeURIComponent(t) : null;
              },
              removeItem(e) {
                const n = encodeURIComponent(e);
                delete a[n], t(a), (this.length = r());
              },
              setItem(e, n) {
                const l = encodeURIComponent(e);
                (a[l] = String(n)), t(a), (this.length = r());
              },
              length: 0,
            };
          })(),
          m = void 0 === window.localStorage ? u : localStorage,
          y = {
            set(e, t) {
              try {
                m.setItem(e, JSON.stringify(t));
              } catch (e) {
                console.log(e);
              }
            },
            get(e) {
              let t;
              try {
                t = m.getItem(e);
              } catch (e) {
                console.log(e);
              }
              return (function (e) {
                try {
                  JSON.parse(e);
                } catch (e) {
                  return !1;
                }
                return !0;
              })(t)
                ? JSON.parse(t)
                : t;
            },
          },
          g = "gaEvents",
          b = Boolean(window.ga)
            ? window.ga.bind(window)
            : (...e) => {
                const t = y.get(g) || [];
                for (; t.length > 200; ) t.shift();
                t.push(
                  ((e, t, a, ...r) => ({
                    timestamp: e,
                    actionType: t,
                    action: a,
                    value: r,
                  }))(Date.now(), ...e)
                ),
                  y.set(g, t),
                  console.info(`ga(${JSON.stringify(e)})`),
                  void 0 !== window.ga && window.ga(...e);
              },
          h = () => {
            b("set", "page", window.location.pathname + window.location.search),
              b("send", "pageview");
          },
          f = (e) => {
            const t = e.category || p().gaCategory,
              a = [t, e.action];
            void 0 !== e.label && e.label.length > 0 && a.push(e.label),
              void 0 !== e.value &&
                ("number" == typeof e.value || e.value.length > 0) &&
                a.push(e.value);
            const r = {};
            e.dimension100 && (r.dimension100 = JSON.stringify(e.dimension100)),
              e.dimension101 &&
                (r.dimension101 = JSON.stringify(e.dimension101));
            const [n, l, o, i] = a;
            b("send", {
              hitType: "event",
              eventCategory: n,
              eventAction: l,
              eventLabel: o,
              eventValue: i,
              ...r,
            }),
              (({ category: e, action: t = "", label: a = "", ...r }) => {
                const n = e || p().gaCategory,
                  l = {
                    event: n,
                    eventCategory: n,
                    eventAction: t,
                    eventLabel: a,
                    ...r,
                  };
                "undefined" == typeof dataLayer
                  ? (console.groupCollapsed("DataLayer push"),
                    console.info("dataLayer", l),
                    console.groupEnd())
                  : dataLayer.push(l);
              })({ category: t, label: e.label, action: e.action, ...r });
          };
        var E = a(5556),
          v = a.n(E),
          w = a(20265),
          T = a(23364);
        const k = () => {
            window.location.reload();
          },
          A = ({ locale: e, children: t }) =>
            n.createElement(
              T.tH,
              { fallback: n.createElement(w.A, { onClick: k, locale: e }) },
              t
            );
        A.propTypes = {
          locale: v().string.isRequired,
          children: v().node.isRequired,
        };
        const C = A;
        var S,
          x,
          R = a(38798),
          L = a(61785),
          O = a(53797),
          _ = a(55497),
          P =
            P ||
            (function () {
              function e(e, a = { decode: !0 }) {
                var r,
                  n,
                  l,
                  o,
                  d,
                  p,
                  u = Object.create(null);
                if (((this[i] = u), (this.decodeOn = a.decode), e))
                  if ("string" == typeof e)
                    for (
                      "?" === e.charAt(0) && (e = e.slice(1)),
                        d = 0,
                        p = (o = e.split("&")).length;
                      d < p;
                      d++
                    )
                      -1 < (r = (l = o[d]).indexOf("="))
                        ? s(
                            u,
                            c(l.slice(0, r), this.decodeOn),
                            c(l.slice(r + 1), this.decodeOn)
                          )
                        : l.length && s(u, c(l, this.decodeOn), "");
                  else if (t(e))
                    for (d = 0, p = e.length; d < p; d++)
                      s(u, (l = e[d])[0], l[1]);
                  else for (n in e) s(u, n, e[n]);
              }
              var t = Array.isArray,
                a = e.prototype,
                r = /[!'\(\)~]|%20|%00/g,
                n = /\+/g,
                l = {
                  "!": "%21",
                  "'": "%27",
                  "(": "%28",
                  ")": "%29",
                  "~": "%7E",
                  "%20": "+",
                  "%00": "\0",
                },
                o = function (e) {
                  return l[e];
                },
                i = "__URLSearchParams__:" + Math.random();
              function s(e, a, r) {
                a in e ? e[a].push("" + r) : (e[a] = t(r) ? r : ["" + r]);
              }
              function c(e, t) {
                return t ? decodeURIComponent(e.replace(n, " ")) : e;
              }
              function d(e, t) {
                return t ? encodeURIComponent(e).replace(r, o) : e;
              }
              (a.append = function (e, t) {
                s(this[i], e, t);
              }),
                (a.delete = function (e) {
                  delete this[i][e];
                }),
                (a.get = function (e) {
                  var t = this[i];
                  return e in t ? t[e][0] : null;
                }),
                (a.getAll = function (e) {
                  var t = this[i];
                  return e in t ? t[e].slice(0) : [];
                }),
                (a.has = function (e) {
                  return e in this[i];
                }),
                (a.set = function (e, t) {
                  this[i][e] = ["" + t];
                }),
                (a.forEach = function (e, t) {
                  var a = this[i];
                  Object.getOwnPropertyNames(a).forEach(function (r) {
                    a[r].forEach(function (a) {
                      e.call(t, a, r, this);
                    }, this);
                  }, this);
                }),
                (a.toJSON = function () {
                  return {};
                }),
                (a.toString = function () {
                  var e,
                    t,
                    a,
                    r,
                    n = this[i],
                    l = [];
                  for (t in n)
                    for (
                      a = d(t, this.decodeOn), e = 0, r = n[t];
                      e < r.length;
                      e++
                    )
                      l.push(a + "=" + d(r[e]));
                  return l.join("&");
                });
              var p = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                m = function (t) {
                  var r = t.append;
                  (t.append = a.append),
                    e.call(t, t._usp.search.slice(1)),
                    (t.append = r);
                },
                y = function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError(
                      "'searchParams' accessed on an object that does not implement interface " +
                        t.name
                    );
                },
                g = function (t) {
                  var r,
                    n,
                    l = t.prototype,
                    o = u(l, "searchParams"),
                    i = u(l, "href"),
                    s = u(l, "search");
                  !o &&
                    s &&
                    s.set &&
                    ((n = (function (e) {
                      function t(t, r) {
                        a.append.call(this, t, r),
                          (t = this.toString()),
                          e.set.call(this._usp, t ? "?" + t : "");
                      }
                      function r(t) {
                        a.delete.call(this, t),
                          (t = this.toString()),
                          e.set.call(this._usp, t ? "?" + t : "");
                      }
                      function n(t, r) {
                        a.set.call(this, t, r),
                          (t = this.toString()),
                          e.set.call(this._usp, t ? "?" + t : "");
                      }
                      return function (e, a) {
                        return (
                          (e.append = t),
                          (e.delete = r),
                          (e.set = n),
                          p(e, "_usp", {
                            configurable: !0,
                            writable: !0,
                            value: a,
                          })
                        );
                      };
                    })(s)),
                    (r = function (e, t) {
                      return (
                        p(e, "_searchParams", {
                          configurable: !0,
                          writable: !0,
                          value: n(t, e),
                        }),
                        t
                      );
                    }),
                    Object.defineProperties(l, {
                      href: {
                        get: function () {
                          return i.get.call(this);
                        },
                        set: function (e) {
                          var t = this._searchParams;
                          i.set.call(this, e), t && m(t);
                        },
                      },
                      search: {
                        get: function () {
                          return s.get.call(this);
                        },
                        set: function (e) {
                          var t = this._searchParams;
                          s.set.call(this, e), t && m(t);
                        },
                      },
                      searchParams: {
                        get: function () {
                          return (
                            y(this, t),
                            this._searchParams ||
                              r(this, new e(this.search.slice(1)))
                          );
                        },
                        set: function (e) {
                          y(this, t), r(this, e);
                        },
                      },
                    }));
                };
              return (
                g(HTMLAnchorElement),
                /^function|object$/.test(typeof URL) && URL.prototype && g(URL),
                e
              );
            })();
        (S = P.prototype),
          (x = (function () {
            try {
              return !!Symbol.iterator;
            } catch (e) {
              return !1;
            }
          })()),
          "forEach" in S ||
            (S.forEach = function (e, t) {
              var a = Object.create(null);
              this.toString()
                .replace(/=[\s\S]*?(?:&|$)/g, "=")
                .split("=")
                .forEach(function (r) {
                  r.length &&
                    !(r in a) &&
                    (a[r] = this.getAll(r)).forEach(function (a) {
                      e.call(t, a, r, this);
                    }, this);
                }, this);
            }),
          "keys" in S ||
            (S.keys = function () {
              var e = [];
              this.forEach(function (t, a) {
                e.push(a);
              });
              var t = {
                next: function () {
                  var t = e.shift();
                  return { done: void 0 === t, value: t };
                },
              };
              return (
                x &&
                  (t[Symbol.iterator] = function () {
                    return t;
                  }),
                t
              );
            }),
          "values" in S ||
            (S.values = function () {
              var e = [];
              this.forEach(function (t) {
                e.push(t);
              });
              var t = {
                next: function () {
                  var t = e.shift();
                  return { done: void 0 === t, value: t };
                },
              };
              return (
                x &&
                  (t[Symbol.iterator] = function () {
                    return t;
                  }),
                t
              );
            }),
          "entries" in S ||
            (S.entries = function () {
              var e = [];
              this.forEach(function (t, a) {
                e.push([a, t]);
              });
              var t = {
                next: function () {
                  var t = e.shift();
                  return { done: void 0 === t, value: t };
                },
              };
              return (
                x &&
                  (t[Symbol.iterator] = function () {
                    return t;
                  }),
                t
              );
            }),
          x && !(Symbol.iterator in S) && (S[Symbol.iterator] = S.entries),
          "sort" in S ||
            (S.sort = function () {
              for (
                var e,
                  t,
                  a,
                  r = this.entries(),
                  n = r.next(),
                  l = n.done,
                  o = [],
                  i = Object.create(null);
                !l;

              )
                (t = (a = n.value)[0]),
                  o.push(t),
                  t in i || (i[t] = []),
                  i[t].push(a[1]),
                  (l = (n = r.next()).done);
              for (o.sort(), e = 0; e < o.length; e++) this.delete(o[e]);
              for (e = 0; e < o.length; e++)
                (t = o[e]), this.append(t, i[t].shift());
            });
        const I = P,
          M = { searchItem: "", searchType: "domain", keywordType: "organic" },
          D = "keywordGap.opportunities",
          { defaultLocale: F } = i.Constants,
          j = "keyword-gap",
          q = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"A tool that helps you compare your keyword profile with your competitors.","buttons.compare":"Compare","howToUse.typeCompetitors.title":"Enter your competitors","panel.addAllCompetitors":"Add up to {NUM} competitors","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Database:","header.currency":"Currency:","header.date":"Date:","header.device":"Device:","header.userManual":"User manual","buttons.cancel":"Cancel","opportunities.title":"Top Opportunities","kgTable.competitorSelector.label":"All keyword details for:","pdf.exportButton":"Export to PDF","feedback.sendFeedback":"Send feedback","searchTypes.domainType":"Root domain","searchTypes.subdomainType":"Subdomain","searchTypes.urlType":"Exact URL","searchTypes.subfolderType":"Subfolder","panel.selectMultipleKwType":"Select keyword type for each domain","keywordTypes.organicPills":"Organic keywords","keywordTypes.adwordsPills":"Paid keywords","keywordTypes.plaPills":"PLA keywords","keywords.missing":"Missing","keywords.weak":"Weak","opportunities.keyword":"Keyword","opportunities.volume":"Volume","overlapChart.caption":"Keyword Overlap","":""}'
          ),
          N = JSON.parse(
            '{"reportTitle.keywordGap":"å…³é”®è¯å·®å¼‚","landing.description":"æœ‰åŠ©äºŽæ¯”è¾ƒæ‚¨ä¸Žç«žäº‰å¯¹æ‰‹çš„å…³é”®è¯æ•´ä½“æƒ…å†µçš„å·¥å…·ã€‚","buttons.compare":"æ¯”è¾ƒ","howToUse.typeCompetitors.title":"è¾“å…¥æ‚¨çš„ç«žäº‰å¯¹æ‰‹","panel.addAllCompetitors":"æ·»åŠ å¤šè¾¾ {NUM} ä¸ªç«žäº‰å¯¹æ‰‹","page.breadcrumbs.domain_analytics":"åŸŸååˆ†æž","page.breadcrumbs.keyword_gap":"å…³é”®è¯å·®å¼‚","header.database":"æ•°æ®åº“ï¼š","header.currency":"è´§å¸ï¼š","header.date":"æ—¥æœŸï¼š","header.device":"è®¾å¤‡ï¼š","header.userManual":"ç”¨æˆ·æ‰‹å†Œ","buttons.cancel":"å–æ¶ˆ","opportunities.title":"æœ€ä½³æœºä¼š","kgTable.competitorSelector.label":"æ‰€æœ‰å…³é”®è¯è¯¦ç»†ä¿¡æ¯ï¼š","pdf.exportButton":"å¯¼å‡ºæˆ PDF","feedback.sendFeedback":"å‘é€åé¦ˆ","searchTypes.domainType":"æ ¹åŸŸå","searchTypes.subdomainType":"å­åŸŸå","searchTypes.urlType":"ç²¾ç¡® URL","searchTypes.subfolderType":"å­æ–‡ä»¶å¤¹","panel.selectMultipleKwType":"ä¸ºæ¯ä¸ªåŸŸåé€‰æ‹©å…³é”®è¯ç±»åž‹","keywordTypes.organicPills":"è‡ªç„¶æœç´¢å…³é”®è¯","keywordTypes.adwordsPills":"ä»˜è´¹å…³é”®è¯","keywordTypes.plaPills":"è°·æ­Œè´­ç‰©å¹¿å‘Šå…³é”®è¯","keywords.missing":"ç¼ºå¤±","keywords.weak":"å¼±","opportunities.keyword":"å…³é”®è¯","opportunities.volume":"æœç´¢é‡","overlapChart.caption":"å…³é”®è¯é‡å ","":""}'
          ),
          U = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword-Gap","landing.description":"Dieses Tool ermÃ¶glicht Ihnen umfassende Vergleiche zwischen Ihren Keywords und den Keywords Ihrer Mitbewerber.","buttons.compare":"Vergleichen","howToUse.typeCompetitors.title":"Mitbewerber eingeben","panel.addAllCompetitors":"Bis zu {NUM}Â Mitbewerber hinzufÃ¼gen","page.breadcrumbs.domain_analytics":"Domain Analytics","page.breadcrumbs.keyword_gap":"Keyword-Gap","header.database":"Datenbank:","header.currency":"WÃ¤hrung:","header.date":"Datum:","header.device":"GerÃ¤t:","header.userManual":"Anleitung fÃ¼r Benutzer","buttons.cancel":"Abbrechen","opportunities.title":"Top-Chancen","kgTable.competitorSelector.label":"Alle Keyword-Details fÃ¼r:","pdf.exportButton":"Export als PDF","feedback.sendFeedback":"Feedback senden","searchTypes.domainType":"Root-Domain","searchTypes.subdomainType":"Subdomain","searchTypes.urlType":"Exakte URL","searchTypes.subfolderType":"Unterordner","panel.selectMultipleKwType":"WÃ¤hlen Sie einen Keyword-Typ pro Domain","keywordTypes.organicPills":"Organische Keywords","keywordTypes.adwordsPills":"Bezahlte Keywords","keywordTypes.plaPills":"PLA-Keywords","keywords.missing":"Fehlend","keywords.weak":"Schwach","opportunities.keyword":"Keyword","opportunities.volume":"Suchvolumen","overlapChart.caption":"Keyword-Ãœberschneidung","":""}'
          ),
          $ = JSON.parse(
            '{"reportTitle.keywordGap":"Brecha de palabras clave","landing.description":"Una herramienta que te ayuda a comparar tu perfil de palabras clave con el de tus competidores.","buttons.compare":"Comparar","howToUse.typeCompetitors.title":"Introduce tus competidores","panel.addAllCompetitors":"AÃ±ade hasta {NUM} competidores","page.breadcrumbs.domain_analytics":"AnÃ¡lisis de dominio","page.breadcrumbs.keyword_gap":"Brecha de palabras clave","header.database":"Base de datos:","header.currency":"Moneda:","header.date":"Fecha:","header.device":"Dispositivo:","header.userManual":"Manual de usuario","buttons.cancel":"Cancelar","opportunities.title":"Principales oportunidades","kgTable.competitorSelector.label":"Detalles de palabras clave de:","pdf.exportButton":"Exportar a PDF","feedback.sendFeedback":"Enviar opiniÃ³n","searchTypes.domainType":"Dominio raÃ­z","searchTypes.subdomainType":"Subdominio","searchTypes.urlType":"URL exacta","searchTypes.subfolderType":"Subcarpeta","panel.selectMultipleKwType":"Selecciona el tipo de palabra clave para cada dominio","keywordTypes.organicPills":"Palabras clave orgÃ¡nicas","keywordTypes.adwordsPills":"Palabras clave de pago","keywordTypes.plaPills":"Palabras clave de PLA","keywords.missing":"Faltantes","keywords.weak":"DÃ©biles","opportunities.keyword":"Palabra clave","opportunities.volume":"Volumen","overlapChart.caption":"SuperposiciÃ³n de palabras clave","":""}'
          ),
          V = JSON.parse(
            '{"reportTitle.keywordGap":"PossibilitÃ©s de mots clÃ©s","landing.description":"Un outil qui vous aide Ã  comparer votre profil de mots clÃ©s Ã  celui de vos concurrents.","buttons.compare":"Comparer","howToUse.typeCompetitors.title":"Saisissez vos concurrents","panel.addAllCompetitors":"Ajoutez jusqu\'Ã  {NUM} concurrents","page.breadcrumbs.domain_analytics":"Analyse de domaine","page.breadcrumbs.keyword_gap":"PossibilitÃ©s de mots clÃ©s","header.database":"Base de donnÃ©esÂ :","header.currency":"DeviseÂ :","header.date":"DateÂ :","header.device":"AppareilÂ :","header.userManual":"Manuel de l\'utilisateur","buttons.cancel":"Annuler","opportunities.title":"Top opportunitÃ©s","kgTable.competitorSelector.label":"DÃ©tails des mots clÃ©s pour :","pdf.exportButton":"Exporter vers PDF","feedback.sendFeedback":"Envoyer des commentaires","searchTypes.domainType":"Domaine racine","searchTypes.subdomainType":"Sous-domaine","searchTypes.urlType":"URL exacte","searchTypes.subfolderType":"Sous-dossier","panel.selectMultipleKwType":"SÃ©lectionnez un type de mot clÃ© pour chaque domaine","keywordTypes.organicPills":"Mots clÃ©s organiques","keywordTypes.adwordsPills":"Mots clÃ©s payants","keywordTypes.plaPills":"Mots clÃ©s PLA","keywords.missing":"Manquants","keywords.weak":"Faibles","opportunities.keyword":"Mot clÃ©","opportunities.volume":"Volume","overlapChart.caption":"Chevauchement des mots clÃ©s","":""}'
          ),
          z = JSON.parse(
            '{"reportTitle.keywordGap":"Gap di keyword","landing.description":"Uno strumento che aiuta a confrontare il tuo profilo di keyword con i tuoi competitor.","buttons.compare":"Confronta","howToUse.typeCompetitors.title":"Inserisci i tuoi competitor","panel.addAllCompetitors":"Aggiungi fino a {NUM} competitor","page.breadcrumbs.domain_analytics":"Analisi dominio","page.breadcrumbs.keyword_gap":"Gap di keyword","header.database":"Database:","header.currency":"Valuta:","header.date":"Data:","header.device":"Dispositivo:","header.userManual":"Manuale utente","buttons.cancel":"Annulla","opportunities.title":"Migliori opportunitÃ ","kgTable.competitorSelector.label":"Tutti i dettagli delle keyword per:","pdf.exportButton":"Esporta in formato PDF","feedback.sendFeedback":"Invia feedback","searchTypes.domainType":"Dominio principale","searchTypes.subdomainType":"Sottodominio","searchTypes.urlType":"URL esatto","searchTypes.subfolderType":"Sottocartella","panel.selectMultipleKwType":"Seleziona tipo di keyword per ogni dominio","keywordTypes.organicPills":"Keyword organiche","keywordTypes.adwordsPills":"Keyword a pagamento","keywordTypes.plaPills":"Keyword PLA","keywords.missing":"Mancanti","keywords.weak":"Deboli","opportunities.keyword":"Keyword","opportunities.volume":"Volume","overlapChart.caption":"Sovrapposizione di keyword","":""}'
          ),
          K = JSON.parse(
            '{"reportTitle.keywordGap":"Lacunas nas palavras-chave","landing.description":"Uma ferramenta que ajuda vocÃª a comparar seu perfil de palavras-chave com seus concorrentes.","buttons.compare":"Comparar","howToUse.typeCompetitors.title":"Digite os concorrentes","panel.addAllCompetitors":"Acrescente atÃ© {NUM} concorrentes","page.breadcrumbs.domain_analytics":"AnÃ¡lises de domÃ­nio","page.breadcrumbs.keyword_gap":"Lacunas nas palavras-chave","header.database":"Banco de dados:","header.currency":"Moeda:","header.date":"Data:","header.device":"Dispositivo:","header.userManual":"Manual do usuÃ¡rio","buttons.cancel":"Cancelar","opportunities.title":"Principais oportunidades","kgTable.competitorSelector.label":"Detalhes das palavras-chave de:","pdf.exportButton":"Exportar para PDF","feedback.sendFeedback":"Enviar comentÃ¡rios","searchTypes.domainType":"DomÃ­nio raiz","searchTypes.subdomainType":"SubdomÃ­nio","searchTypes.urlType":"URL exata","searchTypes.subfolderType":"Subpasta","panel.selectMultipleKwType":"Selecione o tipo de palavra-chave para cada domÃ­nio","keywordTypes.organicPills":"Palavras-chave orgÃ¢nicas","keywordTypes.adwordsPills":"Palavras-chave pagas","keywordTypes.plaPills":"Palavras-chave de PLA","keywords.missing":"Ausentes","keywords.weak":"Fracas","opportunities.keyword":"Palavra-chave","opportunities.volume":"Volume","overlapChart.caption":"SobreposiÃ§Ã£o de palavras-chave","":""}'
          ),
          B = JSON.parse(
            '{"reportTitle.keywordGap":"ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰æ¯”è¼ƒ","landing.description":"ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰ãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ã‚’ç«¶åˆä»–ç¤¾ã¨æ¯”è¼ƒã™ã‚‹ãŸã‚ã®ãƒ„ãƒ¼ãƒ«ã§ã™ã€‚","buttons.compare":"æ¯”è¼ƒ","howToUse.typeCompetitors.title":"ç«¶åˆä»–ç¤¾ã‚’å…¥åŠ›","panel.addAllCompetitors":"ç«¶åˆä»–ç¤¾ã‚’{NUM}ç¤¾ã¾ã§è¿½åŠ ","page.breadcrumbs.domain_analytics":"ãƒ‰ãƒ¡ã‚¤ãƒ³åˆ†æž","page.breadcrumbs.keyword_gap":"ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰æ¯”è¼ƒ","header.database":"ãƒ‡ãƒ¼ã‚¿ãƒ™ãƒ¼ã‚¹ï¼š","header.currency":"é€šè²¨ï¼š","header.date":"æ—¥ä»˜ï¼š","header.device":"ãƒ‡ãƒã‚¤ã‚¹ï¼š","header.userManual":"ãƒ¦ãƒ¼ã‚¶ãƒ¼ãƒžãƒ‹ãƒ¥ã‚¢ãƒ«","buttons.cancel":"å–ã‚Šæ¶ˆã™","opportunities.title":"çµ¶å¥½ã®æ©Ÿä¼š","kgTable.competitorSelector.label":"ã™ã¹ã¦ã®ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰è©³ç´°ï¼š","pdf.exportButton":"PDFã«ã‚¨ã‚¯ã‚¹ãƒãƒ¼ãƒˆ","feedback.sendFeedback":"ãƒ•ã‚£ãƒ¼ãƒ‰ãƒãƒƒã‚¯ã‚’é€ä¿¡","searchTypes.domainType":"ãƒ«ãƒ¼ãƒˆãƒ‰ãƒ¡ã‚¤ãƒ³","searchTypes.subdomainType":"ã‚µãƒ–ãƒ‰ãƒ¡ã‚¤ãƒ³","searchTypes.urlType":"æ­£ç¢ºãªURL","searchTypes.subfolderType":"ã‚µãƒ–ãƒ•ã‚©ãƒ«ãƒ€","panel.selectMultipleKwType":"å„ãƒ‰ãƒ¡ã‚¤ãƒ³ã«ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰ã‚¿ã‚¤ãƒ—ã‚’é¸æŠž","keywordTypes.organicPills":"ã‚ªãƒ¼ã‚¬ãƒ‹ãƒƒã‚¯æ¤œç´¢ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰","keywordTypes.adwordsPills":"æ¤œç´¢é€£å‹•åž‹åºƒå‘Šã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰","keywordTypes.plaPills":"PLAã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰","keywords.missing":"æ¬ ã‘ã¦ã„ã‚‹","keywords.weak":"å¼±ã„","opportunities.keyword":"ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰","opportunities.volume":"ãƒœãƒªãƒ¥ãƒ¼ãƒ ","overlapChart.caption":"ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰ã®é‡è¤‡","":""}'
          ),
          J = JSON.parse(
            '{"reportTitle.keywordGap":"í‚¤ì›Œë“œ ê°­","landing.description":"ë‚˜ì˜ í‚¤ì›Œë“œ í”„ë¡œí•„ê³¼ ê²½ìŸìžì˜ í‚¤ì›Œë“œ í”„ë¡œí•„ì„ ë¶„ì„í•  ìˆ˜ ìžˆëŠ” ë„êµ¬ìž…ë‹ˆë‹¤.","buttons.compare":"ë¹„êµ","howToUse.typeCompetitors.title":"ê²½ìŸìž ìž…ë ¥","panel.addAllCompetitors":"ìµœëŒ€ {NUM}ê°œì˜ ê²½ìŸìž ì¶”ê°€","page.breadcrumbs.domain_analytics":"ë„ë©”ì¸ ë¶„ì„","page.breadcrumbs.keyword_gap":"í‚¤ì›Œë“œ ê°­","header.database":"ë°ì´í„°ë² ì´ìŠ¤:","header.currency":"í†µí™”:","header.date":"ë‚ ì§œ:","header.device":"ê¸°ê¸°:","header.userManual":"ì‚¬ìš©ìž ë§¤ë‰´ì–¼","buttons.cancel":"ì·¨ì†Œ","opportunities.title":"ìƒìœ„ ê¸°íšŒ","kgTable.competitorSelector.label":"í‚¤ì›Œë“œ ìƒì„¸ì •ë³´:","pdf.exportButton":"PDFë¡œ ë‚´ë³´ë‚´ê¸°","feedback.sendFeedback":"í”¼ë“œë°± ë³´ë‚´ê¸°","searchTypes.domainType":"ë£¨íŠ¸ ë„ë©”ì¸","searchTypes.subdomainType":"ì„œë¸Œë„ë©”ì¸","searchTypes.urlType":"ì •í™•í•œ URL","searchTypes.subfolderType":"í•˜ìœ„ í´ë”","panel.selectMultipleKwType":"ë„ë©”ì¸ë³„ í‚¤ì›Œë“œ ìœ í˜• ì„ íƒí•˜ê¸°","keywordTypes.organicPills":"ìžì—° í‚¤ì›Œë“œ","keywordTypes.adwordsPills":"ìœ ë£Œ í‚¤ì›Œë“œ","keywordTypes.plaPills":"PLA í‚¤ì›Œë“œ","keywords.missing":"ëˆ„ë½","keywords.weak":"ì•½í•¨","opportunities.keyword":"í‚¤ì›Œë“œ","opportunities.volume":"ê²€ìƒ‰ëŸ‰","overlapChart.caption":"í‚¤ì›Œë“œ ì¤‘ë³µ","":""}'
          ),
          W = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"Má»™t cÃ´ng cá»¥ giÃºp báº¡n so sÃ¡nh há»“ sÆ¡ tá»« khÃ³a cá»§a mÃ¬nh vá»›i Ä‘á»‘i thá»§ cáº¡nh tranh.","buttons.compare":"So sÃ¡nh","howToUse.typeCompetitors.title":"Nháº­p cÃ¡c Ä‘á»‘i thá»§ cáº¡nh tranh","panel.addAllCompetitors":"ThÃªm tá»‘i Ä‘a {NUM} Ä‘á»‘i thá»§","page.breadcrumbs.domain_analytics":"PhÃ¢n tÃ­ch tÃªn miá»n","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"CÆ¡ sá»Ÿ dá»¯ liá»‡u:","header.currency":"ÄÆ¡n vá»‹ tiá»n tá»‡:","header.date":"NgÃ y:","header.device":"Thiáº¿t bá»‹:","header.userManual":"HÆ°á»›ng dáº«n sá»­ dá»¥ng","buttons.cancel":"Há»§y","opportunities.title":"Tiá»m nÄƒng hÃ ng Ä‘áº§u","kgTable.competitorSelector.label":"Táº¥t cáº£ cÃ¡c chi tiáº¿t tá»« khÃ³a cho:","pdf.exportButton":"Xuáº¥t file PDF","feedback.sendFeedback":"Gá»­i gÃ³p Ã½","searchTypes.domainType":"Domain gá»‘c","searchTypes.subdomainType":"Domain phá»¥","searchTypes.urlType":"URL chÃ­nh xÃ¡c","searchTypes.subfolderType":"ThÆ° má»¥c con","panel.selectMultipleKwType":"Chá»n loáº¡i tá»« khÃ³a cho má»—i domain","keywordTypes.organicPills":"Tá»« khÃ³a tá»± nhiÃªn","keywordTypes.adwordsPills":"Tá»« khÃ³a tráº£ phÃ­","keywordTypes.plaPills":"Tá»« khÃ³a PLA","keywords.missing":"Thiáº¿u","keywords.weak":"Yáº¿u","opportunities.keyword":"Tá»« khÃ³a","opportunities.volume":"Sá»‘ lÆ°á»£ng","overlapChart.caption":"TrÃ¹ng tá»« khÃ³a","":""}'
          ),
          G = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"Rakiplerinizin anahtar kelimeleri ile anahtar kelimenizin tam analizini yapmanÄ±zÄ± saÄŸlayan bir araÃ§.","buttons.compare":"KarÅŸÄ±laÅŸtÄ±r","howToUse.typeCompetitors.title":"Rakiplerinizi girin","panel.addAllCompetitors":"{NUM} Rakibe kadar ekleyin","page.breadcrumbs.domain_analytics":"Alan AdÄ± Analizleri","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Veri tabanÄ±:","header.currency":"Para Birimi:","header.date":"Tarih:","header.device":"Cihaz:","header.userManual":"KullanÄ±m kÄ±lavuzu","buttons.cancel":"Ä°ptal Et","opportunities.title":"En iyi FÄ±rsatlar","kgTable.competitorSelector.label":"Åžunun iÃ§in tÃ¼m anahtar kelime detaylarÄ±:","pdf.exportButton":"PDF\'ye aktar","feedback.sendFeedback":"Geri bildirim gÃ¶nder","searchTypes.domainType":"KÃ¶k alan adÄ±","searchTypes.subdomainType":"Alt Alan AdÄ±","searchTypes.urlType":"Tam URL","searchTypes.subfolderType":"Alt klasÃ¶r","panel.selectMultipleKwType":"Her alan adÄ± iÃ§in anahtar kelime tÃ¼rÃ¼nÃ¼ seÃ§in","keywordTypes.organicPills":"Organik anahtar kelimeler","keywordTypes.adwordsPills":"Ãœcretli anahtar kelimeler","keywordTypes.plaPills":"ÃœLR anahtar kelimeleri","keywords.missing":"Eksik","keywords.weak":"ZayÄ±f","opportunities.keyword":"Anahtar Kelime","opportunities.volume":"Hacim","overlapChart.caption":"Anahtar Kelime Ã‡akÄ±ÅŸmasÄ±","":""}'
          ),
          Y = JSON.parse(
            '{"reportTitle.keywordGap":"Luka sÅ‚Ã³w kluczowych","landing.description":"NarzÄ™dzie pomagajÄ…ce porÃ³wnaÄ‡ wÅ‚asny profil sÅ‚Ã³w kluczowych z konkurentami.","buttons.compare":"PorÃ³wnaj","howToUse.typeCompetitors.title":"WprowadÅº swoich konkurentÃ³w","panel.addAllCompetitors":"Dodaj maksymalnie {NUM} konkurentÃ³w","page.breadcrumbs.domain_analytics":"Analizy domen","page.breadcrumbs.keyword_gap":"Luka sÅ‚Ã³w kluczowych","header.database":"Baza danych:","header.currency":"Waluta:","header.date":"Data:","header.device":"UrzÄ…dzenie:","header.userManual":"Instrukcja obsÅ‚ugi","buttons.cancel":"Anuluj","opportunities.title":"NajwiÄ™ksze moÅ¼liwoÅ›ci","kgTable.competitorSelector.label":"SzczegÃ³Å‚y wszystkich sÅ‚Ã³w kluczowych dla:","pdf.exportButton":"Eksportuj do pliku PDF","feedback.sendFeedback":"WyÅ›lij opiniÄ™","searchTypes.domainType":"Domena gÅ‚Ã³wna","searchTypes.subdomainType":"Poddomena","searchTypes.urlType":"DokÅ‚adny adres URL","searchTypes.subfolderType":"Podfolder","panel.selectMultipleKwType":"Wybierz typ sÅ‚owa kluczowego dla kaÅ¼dej domeny","keywordTypes.organicPills":"Organiczne sÅ‚owa kluczowe","keywordTypes.adwordsPills":"PÅ‚atne sÅ‚owa kluczowe","keywordTypes.plaPills":"SÅ‚owa kluczowe PLA","keywords.missing":"BrakujÄ…ce","keywords.weak":"SÅ‚abe","opportunities.keyword":"SÅ‚owo kluczowe","opportunities.volume":"Wolumen","overlapChart.caption":"NakÅ‚adanie siÄ™ sÅ‚Ã³w kluczowych","":""}'
          ),
          H = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"Ett verktyg som hjÃ¤lper dig att jÃ¤mfÃ¶ra din nyckelordsprofil med dina konkurrenter.","buttons.compare":"JÃ¤mfÃ¶r","howToUse.typeCompetitors.title":"Ange dina konkurrenter","panel.addAllCompetitors":"LÃ¤gg till upp till {NUM} konkurrenter","page.breadcrumbs.domain_analytics":"DomÃ¤nanalys","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Databas:","header.currency":"Valuta:","header.date":"Datum:","header.device":"Enhet:","header.userManual":"AnvÃ¤ndarmanual","buttons.cancel":"Avbryt","opportunities.title":"FrÃ¤msta mÃ¶jligheter","kgTable.competitorSelector.label":"Alla nyckelordsdetaljer fÃ¶r:","pdf.exportButton":"Exportera till PDF","feedback.sendFeedback":"Skicka feedback","searchTypes.domainType":"RotdomÃ¤n","searchTypes.subdomainType":"UnderdomÃ¤n","searchTypes.urlType":"Exakt URL","searchTypes.subfolderType":"Undermapp","panel.selectMultipleKwType":"VÃ¤lj nyckelordstyp fÃ¶r varje domÃ¤n","keywordTypes.organicPills":"Organiska nyckelord","keywordTypes.adwordsPills":"Betalda nyckelord","keywordTypes.plaPills":"PLA-nyckelord","keywords.missing":"Saknade","keywords.weak":"Svaga","opportunities.keyword":"Nyckelord","opportunities.volume":"Volym","overlapChart.caption":"Ã–verlappning av nyckelord","":""}'
          ),
          Q = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"Een tool waarmee je jouw zoekwoordprofiel kunt vergelijken met dat van je concurrenten.","buttons.compare":"Vergelijken","howToUse.typeCompetitors.title":"Voer je concurrenten in","panel.addAllCompetitors":"Voeg tot {NUM} concurrenten toe","page.breadcrumbs.domain_analytics":"Domain Analytics","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Database:","header.currency":"Valuta:","header.date":"Datum:","header.device":"Apparaat:","header.userManual":"Gebruiksaanwijzing","buttons.cancel":"Annuleren","opportunities.title":"Topkansen","kgTable.competitorSelector.label":"Alle zoekwoorddetails voor:","pdf.exportButton":"Exporteren naar PDF","feedback.sendFeedback":"Feedback sturen","searchTypes.domainType":"Rootdomein","searchTypes.subdomainType":"Subdomein","searchTypes.urlType":"Exacte URL","searchTypes.subfolderType":"Submap","panel.selectMultipleKwType":"Selecteer een zoekwoordtype voor elk domein","keywordTypes.organicPills":"Organische zoekwoorden","keywordTypes.adwordsPills":"Betaalde zoekwoorden","keywordTypes.plaPills":"PLA-zoekwoorden","keywords.missing":"Ontbrekend","keywords.weak":"Zwak","opportunities.keyword":"Zoekwoorden","opportunities.volume":"Volume","overlapChart.caption":"Zoekwoordoverlapping","":""}'
          ),
          Z = new Set(),
          X = new I(window.location.search);
        let ee = _.A?.locale || F;
        const te = X.get("test_lang");
        [
          "en",
          "zh",
          "es",
          "de",
          "fr",
          "it",
          "pt",
          "ja",
          "ko",
          "vi",
          "tr",
          "pl",
          "sv",
          "nl",
        ].includes(ee) || (ee = F),
          te && Z.has(te) && (ee = te);
        const ae = {
            en: q,
            zh: N,
            es: $,
            de: U,
            fr: V,
            it: z,
            pt: K,
            ja: B,
            ko: J,
            vi: W,
            tr: G,
            pl: Y,
            sv: H,
            nl: Q,
          },
          re = Reflect.has(ae, ee) ? ee : F,
          ne = re === F ? ae[re] : { ...ae[F], ...ae[re] },
          le = ({ children: e }) => {
            const t = ((e) => {
                const [t, r] = (0, n.useState)(ne),
                  { setLoading: l } = (0, L.useTextSmoothLoading)();
                return (
                  (0, n.useEffect)(() => {
                    var t;
                    Promise.all(
                      ((t = e),
                      [
                        () => a(20006)(`./${t}/translation.json`),
                        () => a(98981)(`./${t}/countries.json`),
                      ]).map((e) => e())
                    ).then(([e, t]) => {
                      r({ ...ne, ...e.default, ...t.default }), l(!1);
                    });
                  }, [r, l, e]),
                  t
                );
              })(re),
              r = (0, O.useIntlWithMessages)(re, t);
            return n.createElement(R.Kq, { value: r }, e);
          },
          oe = ({ children: e }) =>
            n.createElement(
              L.TextSmoothLoadingProvider,
              null,
              n.createElement(le, null, e)
            );
        (le.propTypes = { children: v().node.isRequired }),
          (oe.propTypes = { children: v().node.isRequired });
        const ie = oe;
        var se = a(38267),
          ce = a(65254),
          de = a(6442),
          pe = a(29555),
          ue = a.n(pe),
          me = a(41486);
        const ye = ["report", "landing"],
          ge = { report: "Report", landing: "Landing page" },
          be = n.createContext({ pageType: ye[0], gaAction: ge[ye[0]] }),
          he = ({ pageType: e = "report", children: t }) => {
            const a = (0, n.useMemo)(
              () => ({ pageType: e, gaAction: ge[e] }),
              [e]
            );
            return n.createElement(be.Provider, { value: a }, t);
          };
        he.propTypes = {
          children: v().element.isRequired,
          pageType: v().oneOf(["landing", "report"]),
        };
        const fe = he;
        var Ee = a(78270);
        const ve = (0, Ee.VP)("requestDatabasesConfig"),
          we = (0, Ee.VP)("getDbsSuccess", (e) => ({ data: e })),
          Te = (0, Ee.VP)("getCurrenciesSuccess", (e, t, a) => ({
            data: e,
            date: a ? "live" : t,
          })),
          ke = (0, Ee.VP)("getTimepointsSuccess", (e, t, a, r) => ({
            data: e,
            db: t,
            device: a,
            dateType: r,
          })),
          Ae = (0, Ee.VP)("reloadAll"),
          Ce = (0, Ee.VP)("connectDatabase", (e) => ({ db: e }));
        var Se = a(49785),
          xe = a(75564);
        const Re = new RegExp(/^\s.*\s?$/, "i"),
          Le = (e) => e.filter(({ searchItem: e }) => e?.length).length,
          Oe = (e) => !Re.test(e) && !(0, xe.performValidation)(e),
          _e = (e) => Le(e) > 0;
        var Pe = a(7053),
          Ie = a(61160),
          Me = a.n(Ie),
          De = a(48379);
        const Fe = (e) =>
            (function (e) {
              const t = new (Me())(
                (function (e) {
                  try {
                    const t = new URL(e);
                    return Boolean(t.protocol.slice(0, -1));
                  } catch (e) {
                    return !1;
                  }
                })(e)
                  ? e
                  : `//${e}`
              );
              return (
                (t.hostname = De.Ay.toASCII(decodeURIComponent(t.hostname))),
                (t.host = De.Ay.toASCII(decodeURIComponent(t.host))),
                t
              );
            })(e).hostname,
          je = (e) =>
            null == e || 0 === e?.length
              ? Pe.SEARCH_TYPES.domain
              : (window?.sm2?.navigation &&
                  window.sm2.navigation.getAvailableSearchTypeByQuery(e)) ||
                Pe.SEARCH_TYPES.domain,
          qe = (e) => {
            if (window?.sm2?.navigation) {
              const [{ searchItem: t, searchType: a }, ...r] = e;
              window.sm2.navigation.submitSearchbar({
                q: t,
                searchType: a,
                compareWith: window.sm2.navigation.encodeCompareWith(
                  r
                    .filter(({ searchItem: e }) => Boolean(e))
                    .map((e) => ({ ...e, q: encodeURIComponent(e.searchItem) }))
                ),
              });
            } else console.log("Set searchbar data ", e);
          },
          Ne = (e, t) => {
            return (
              (window?.sm2?.navigation &&
                ("string" ==
                typeof (a = window.sm2.navigation.getQueryBySearchType(e, t))
                  ? a.replace(/^\./, "")
                  : a)) ||
              e
            );
            var a;
          },
          Ue = (e) => {
            window?.sm2?.navigation &&
            null != e &&
            !(() => {
              const { searchType: e } = (() => {
                if (window.navigation)
                  return window.navigation.getSearchbarData();
              })();
              return !e || "keyword" === e;
            })()
              ? window.sm2.navigation.submitSearchbar({ db: e })
              : console.log("Set default db ", { db: e });
          },
          $e = (e) => {
            e &&
              0 !== Object.keys(e).length &&
              (window?.sm2?.navigation
                ? window.sm2.navigation.submitSearchbar(e)
                : console.log("Set params to SM2 navigation:", e));
          },
          Ve = (0, n.createContext)({}),
          ze = ({ context: e, children: t }) =>
            n.createElement(Ve.Provider, { value: e }, t);
        ze.propTypes = {
          context: v().object.isRequired,
          children: v().node.isRequired,
        };
        const Ke = () => (0, n.useContext)(Ve),
          Be = (0, n.memo)(({ competitor: e, index: t }) => {
            const { setValue: a } = Ke();
            return (
              ((e, t, a = []) => {
                const r = (0, n.useRef)(Date.now());
                (0, n.useEffect)(() => {
                  const a = setTimeout(() => {
                    Date.now() - r.current >= t &&
                      (e(), (r.current = Date.now()));
                  }, t - (Date.now() - r.current));
                  return () => {
                    clearTimeout(a);
                  };
                }, [t, e, ...a]);
              })(
                (0, n.useCallback)(() => {
                  const r = je(e.searchItem);
                  a(`competitors.${t}.searchType`, r);
                }, [e.searchItem, a, t]),
                400,
                [e.searchItem]
              ),
              null
            );
          }),
          Je = () => {
            const { control: e } = Ke(),
              t = (0, Se.FH)({ name: "competitors", control: e });
            return null == t
              ? null
              : t.map((e, t) =>
                  n.createElement(Be, {
                    key: [e, t].join("-"),
                    competitor: e,
                    index: t,
                  })
                );
          };
        var We = a(64683);
        const Ge = n.createContext({
            competitors: [],
            searchItem: "",
            setSearchItem: () => {},
          }),
          Ye = "user/SET_USER",
          He = (e) => ({ ...e, type: Ye }),
          Qe = (0, Ee.VP)("setTrialStatus", (e) => ({ isTrialAllowed: e })),
          Ze = {
            exportLimit: 0,
            isTrialAllowed: !1,
            isHistoryAllowed: !1,
            isPlaAllowed: !1,
          },
          Xe = "user",
          et = (e = Ze, { type: t, ...a }) => {
            switch (t) {
              case Ye:
                return { ...e, ...a };
              case Qe.getType():
                return { ...e, isTrialAllowed: a.payload.isTrialAllowed };
              case "user/RESET_USER":
                return { ...Ze };
              default:
                return e;
            }
          },
          tt = (e) => e.user,
          at = (e) => tt(e).exportLimit,
          rt = (e) => tt(e).isHistoryAllowed,
          nt = (e) => tt(e).isTrialAllowed,
          lt = (e) => tt(e).isPlaAllowed,
          ot = () => {
            const e = (0, o.d4)(at),
              t = (0, o.d4)(rt),
              a = (0, o.d4)(nt),
              r = (0, o.d4)(lt),
              {
                isAdmin: n,
                isPaid: l,
                hasProduct: i,
                productGroup: s,
                isGuest: c,
              } = _.A;
            return {
              hasUserPaid: l,
              hasUserProduct: i,
              userRole: s,
              isGuest: c,
              exportLimit: e,
              isHistoryAllowed: t,
              isTrialAllowed: a,
              isPlaAllowed: r,
              isAdmin: n,
            };
          };
        var it = a(39309),
          st = a(5445),
          ct = a(26832),
          dt = a.n(ct);
        const pt = "guest",
          { apiKey: ut, productGroup: mt } = _.A,
          { spectrumUrl: yt, exportUrl: gt } = p(),
          bt = new (dt())(yt, gt, mt === pt ? pt : ut),
          ht = async ({ requestId: e, db: t, device: a, searchItem: r }) => {
            const n = { requestId: e, report: st.REPORT_NAME.meta },
              l = {
                target: {
                  type: st.TARGET_TYPE.domain,
                  value: Ne(r, st.TARGET_TYPE.domain),
                },
                database: (0, it.prepareDatabase)(t, a),
              };
            return (await bt.fetchData("/Demo/DomainCompetitors", n, l))
              .domains;
          };
        var ft = a(9852),
          Et = a(35938);
        const vt = () => {
            const e = (0, Et.A)(new Date(), 1);
            return (0, ft.A)(
              new Date(e.valueOf() + 60 * e.getTimezoneOffset() * 1e3),
              "yyyyMMdd"
            );
          },
          wt = () => vt(),
          Tt = {
            Daily: 0,
            Monthly: 1,
            ToString(e) {
              switch (e) {
                case 0:
                default:
                  return "daily";
                case 1:
                  return "monthly";
              }
            },
          };
        var kt = a(82658);
        ((e) => {
          const t = new Date(e);
          t.getUTCFullYear(),
            String(t.getUTCMonth() + 1).padStart(2, 0),
            String(t.getUTCDate()).padStart(2, 0);
        })(wt());
        const At = (e) => {
            return ((t = Fe(e || "")), (e) => e.replace(t, De.Ay.toUnicode(t)))(
              (e || "").replace(/_%26_/g, "&")
            );
            var t;
          },
          Ct = (e) => {
            try {
              return decodeURI(At(e || ""));
            } catch (t) {
              return At(e || "");
            }
          },
          St = (e) => e.replace(De.Ay.toUnicode(Fe(e)), Fe(e)),
          xt = (e) =>
            Object.keys(e)
              .map((t) => (e[t] ? `${t}=${e[t]}` : null))
              .filter(Boolean)
              .join("&"),
          Rt = () => {
            const {
              competitors: e,
              searchItem: t,
              setSearchItem: a,
            } = (0, n.useContext)(Ge);
            return { competitors: e, searchItem: t, setSearchItem: a };
          },
          Lt = ({ children: e }) => {
            const [t, a] = (0, n.useState)(""),
              r = (0, o.d4)(We.Lf),
              l = (0, o.d4)(We.Pf),
              i = (0, o.d4)(We.dW),
              s = ((e, t, a) => {
                const [r, l] = (0, n.useState)([]),
                  { isGuest: o } = ot(),
                  i = o();
                return (
                  (0, n.useEffect)(() => {
                    (async () => {
                      if (null == e || null == t || null == a || "" === a || i)
                        l([]);
                      else
                        try {
                          const r = await ht({
                            db: e,
                            device: t,
                            searchItem: St(a),
                          });
                          l(r);
                        } catch (e) {
                          console.warn(e), l([]);
                        }
                    })();
                  }, [e, t, a, i]),
                  r
                );
              })(r || i?.db, l || i?.device, t);
            return n.createElement(
              Ge.Provider,
              { value: { competitors: s, searchItem: t, setSearchItem: a } },
              e
            );
          };
        Lt.propTypes = { children: v().node.isRequired };
        const Ot = Lt,
          _t = () => ({
            gaChangeSearchType: (e) => {
              return f({
                category: "keyword-gap:landing-page",
                action: "click:scope",
                label: "scope:changed",
                value:
                  ((t = e),
                  { domain: 1, url: 2, subdomain: 3, subfolder: 4 }[t]),
              });
              var t;
            },
            gaChangeKeywordType: (e) => {
              return f({
                category: "keyword-gap:landing-page",
                action: "click:keyword-type",
                label: "keyword-type:changed",
                value: ((t = e), { organic: 1, adwords: 2, pla: 3 }[t]),
              });
              var t;
            },
            gaAddCompetitors: (e) =>
              f({
                category: "keyword-gap:landing-page",
                action: "click:add-competitors",
                label: "competitors:added",
                value: e,
              }),
            gaValidationError: (e) => {
              return f({
                category: "keyword-gap:landing-page",
                action: "click:compare",
                label: "error:showed",
                value:
                  ((t = e),
                  { enterOne: 1, enterCompetitor: 2, domainErr: 3 }[t]),
              });
              var t;
            },
            gaDBChange: (e) =>
              f({
                category: "keyword-gap:landing-page",
                action: "click:database",
                label: "database:changed",
                value: `select DB - ${e}`,
              }),
          }),
          Pt = ({ control: e }) => {
            const {
                errors: { competitors: t },
              } = (0, Se.lN)({ control: e, name: "competitors" }),
              { gaValidationError: a } = _t(),
              r = t && t.filter((e) => !!e)?.[0]?.searchItem?.type;
            return r && a(r), null;
          };
        var It = a(72719);
        const { MEDIA_Q: Mt } = i.MediaQ,
          [Dt, Ft] = (0, It.useBreakpointNameFactory)(Mt);
        var jt = a(32030),
          qt = a(58065),
          Nt = a(69958),
          Ut = a(34587),
          $t = a(89961);
        const Vt = (e, t, a) => {
          const r = t.reduce((t, a) => ({ ...t, [a]: `${e}/${a}` }), {}),
            n = a.reduce(
              (t, a) => ({
                ...t,
                [a]: `${e}/${a}`,
                [`${a}_REQUEST`]: `${e}/${a}_REQUEST`,
                [`${a}_FAILURE`]: `${e}/${a}_FAILURE`,
                [`${a}_SUCCESS`]: `${e}/${a}_SUCCESS`,
              }),
              {}
            );
          return { ...r, ...n };
        };
        var zt = a(67072);
        const Kt = Vt(
            zt.stateKey,
            [
              "SET_DB",
              "SET_DOMAIN",
              "SET_DATE",
              "SET_DATE_TYPE",
              "SET_DEVICE",
              "SET_DB_AND_DEVICE",
              "SET_CURRENCY",
              "SET_SCOPE",
              "SET_SCOPE_AND_DOMAIN",
              "SET_SCOPE_AND_DOMAIN_AND_SEARCH_ITEM",
              "SET_SEARCH_ITEM",
            ],
            []
          ),
          Bt = (0, Ee.VP)("requestSetDb", (e) => ({ db: e })),
          Jt = (0, Ee.VP)("requestSetDevice", (e) => ({ device: e })),
          Wt = (0, Ee.VP)("requestSetDate", (e, t, a) => ({
            date: e,
            dateType: t,
            isLive: a,
          })),
          Gt =
            ((0, Ee.VP)("requestSetSearchItem", (e) => ({ searchItem: e })),
            (0, Ee.VP)("setDb", (e) => ({ db: e }))),
          Yt = (0, Ee.VP)("setDevice", (e) => ({ device: e })),
          Ht = (0, Ee.VP)("setDate", (e, t, a) => ({
            date: e,
            dateType: t,
            isLive: a,
          })),
          Qt = (0, Ee.VP)("setDateFromString", (e) => ({ dateString: e })),
          Zt = (0, Ee.VP)("setDBFromString", (e) => ({ dbString: e })),
          Xt = (0, Ee.VP)("setDeviceFromString", (e) => ({ deviceString: e })),
          ea = (0, Ee.VP)("setCurrency", (e) => ({ currency: e })),
          ta = (0, Ee.VP)("updateNextReportParams", (e) => ({ nextParams: e })),
          aa = (0, Ee.VP)("flashNextPageParams"),
          ra = (0, Ee.VP)("setDefaultDb", ({ db: e, isMobile: t }) => ({
            db: e,
            device: t ? $t.W.mobile : $t.W.desktop,
          })),
          na = (0, Ee.VP)("requestSetDefaultDb", (e) => ({ dbString: e }));
        var la = a(1081),
          oa = a(58156),
          ia = a.n(oa),
          sa = a(7309),
          ca = a.n(sa);
        const da = "Access",
          pa = "usd",
          ua = [pa],
          ma = (e) => e.data.reportConfig.statusDbs.isLoading,
          ya = (e) => e.data.reportConfig.statusTimepoints.isLoading,
          ga = (e) => e.data.reportConfig.statusCurrencies.isLoading,
          ba = (0, la.Mz)([ma, ya, ga], (e, t, a) => e || t || a),
          ha = (0, la.Mz)(ba, (e) => null === e || e),
          fa = (0, la.Mz)(ya, (e) => null === e || e),
          Ea = (0, la.Mz)(ma, (e) => null === e || e),
          va = (e) =>
            e.data.reportConfig.statusDbs.hasError ||
            e.data.reportConfig.statusTimepoints.hasError ||
            e.data.reportConfig.statusCurrencies.hasError,
          wa = (0, la.Mz)(
            [(e) => ba(e), (e) => ya(e), ga],
            (e, t, a) => e || t || a
          ),
          Ta = (e) => e.data.reportConfig.data.currencies,
          ka = (0, la.Mz)([We.pp, We.VG], (e, t) => (t ? "live" : e)),
          Aa = ["dh", "us", "uk", "de", "fr"],
          Ca = ({ code: e }) => Aa.includes(e),
          Sa = ({ code: e }) => !Aa.includes(e),
          xa = (e, t) => Aa.indexOf(e.code) - Aa.indexOf(t.code),
          Ra = (e, t) => e.code.localeCompare(t.code),
          La = (e) => e.data.reportConfig.data.databases,
          Oa = (0, la.Mz)(La, (e) => {
            if (!e) return null;
            let t = ((e, t) =>
              Object.values(e).filter((e) => (0, kt.qF)(e.code) === t))(
              e,
              $t.W.desktop
            );
            return (
              (t = t.map((e) => {
                const t = (0, kt.m_)(e.code);
                return {
                  value: e.code,
                  label: `db.${t}`,
                  code: e.code,
                  country: t,
                  available: e.available,
                  type: e.type,
                };
              })),
              [...t.filter(Ca).sort(xa), ...t.filter(Sa).sort(Ra)]
            );
          }),
          _a = (0, la.Mz)(Oa, (e) => (e ? e.slice(0, 3) : null)),
          Pa = (0, la.Mz)(Oa, (e) => (e ? e.slice(3) : null)),
          Ia = (0, la.Mz)(
            [
              (e) => (0, We.Lf)(e),
              (e) => (0, We.Pf)(e),
              (e) => ((e) => ia()(e.data.reportConfig, "data.timepoints"))(e),
            ],
            (e, t, a) => {
              const r = `${e}/${t}`,
                n = ia()(a, `${r}.daily`) || [],
                l = ia()(a, `${r}.monthly`) || [];
              return [
                ...n.map((e) => ({ date: e, dateType: $t.J5.daily })),
                ...l.map((e) => ({ date: e, dateType: $t.J5.monthly })),
              ].sort((e, t) => t.date - e.date);
            }
          ),
          Ma = (0, la.Mz)(
            (e) => (0, We.Lf)(e),
            La,
            (e, t) =>
              t
                ? Object.keys(t)
                    .filter((t) => (0, kt.m_)(t, !1) === e)
                    .map(kt.qF)
                    .sort()
                : []
          ),
          Da = (0, la.Mz)(
            La,
            (e, t) => t,
            (e, t) =>
              e
                ? Object.keys(e)
                    .filter((e) => (0, kt.m_)(e) === t)
                    .map(kt.qF)
                : []
          ),
          Fa = (0, la.Mz)([We.Lf, We.Pf], (e, t) => (0, kt.Z0)(e, t)),
          ja = (0, la.Mz)([Fa, La], (e, t) => t?.[e]),
          qa = (0, la.Mz)(
            La,
            (e, t) => t,
            (e) => e,
            (e, t, a) =>
              ia()(a.data.reportConfig.data.databases, `${t}.currencies`) || [
                pa,
              ]
          ),
          Na = (e) => {
            const t = (0, kt.Z0)((0, We.Lf)(e), (0, We.Pf)(e));
            return (
              ia()(
                e.data.reportConfig.data.databases,
                `${t}.supportedCurrencies`
              ) || ua
            );
          },
          Ua = (0, la.Mz)(
            (e) => (0, We.Ke)(e),
            Na,
            (e, t) =>
              "default" === e
                ? pa
                : ((e) => {
                    const t = ca()(e, (e) => e !== pa);
                    return void 0 !== t ? t : pa;
                  })(t)
          ),
          $a = (e, t, a) => {
            const r = ia()(Ta(e), ka(e), {});
            return ia()(r, `${t.toUpperCase()}.rate`, 1) * a;
          },
          Va = (0, la.Mz)(
            [We.Lf, We.dW, We.pp, We.Lk, We.VG, We.Pf],
            (e, t, a, r, n, l) => ({
              db: e,
              defaultDb: t,
              date: a,
              dateType: r,
              isLive: n,
              device: l,
            })
          ),
          za = (e, t, a) =>
            ia()(e.data.reportConfig.data, `timepoints.${t}/${a}`, null),
          Ka = (e, t, a) =>
            ia()(
              e.data.reportConfig.data,
              `currencies.${a ? "live" : t}`,
              null
            ),
          Ba = (0, la.Mz)(Ia, (e) =>
            Array.isArray(e) && e.length > 0 ? e[0] : null
          ),
          Ja = (0, la.Mz)([Oa], (e) => e.filter(({ type: e }) => e === da)),
          Wa = (0, la.Mz)(
            [Ja],
            (e) => e.filter(({ available: e }) => e)?.length ?? 0
          ),
          Ga = (0, la.Mz)([ja], (e) => e?.type === da),
          Ya = (0, la.Mz)([ja], (e) => !!e?.available),
          Ha = (e, t = 0) => {
            const { formatMessage: a } = (0, de.A)(),
              r = e
                .slice(t)
                .map((e) => ({ ...e, labelLocale: a({ id: e.label }) }))
                .sort((e, t) => e.labelLocale.localeCompare(t.labelLocale));
            return [...e.slice(0, t), ...r];
          };
        var Qa = a(44750),
          Za = a(99975),
          Xa = a(42443),
          er = a.n(Xa),
          tr = a(50974),
          ar = a.n(tr),
          rr = a(75450),
          nr = a(54051);
        const lr = () =>
          n.createElement(
            jt.A,
            null,
            n.createElement(nr.A, { size: 200, color: "gray60" }, "n/a")
          );
        var or = a(67222);
        const ir = () =>
          n.createElement(
            or.A,
            { height: 8, width: 40 },
            n.createElement("rect", {
              x: "0",
              y: "0",
              rx: "4",
              ry: "4",
              width: "40",
              height: "8",
            })
          );
        function sr() {
          return (
            (sr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            sr.apply(null, arguments)
          );
        }
        const cr = ({
          topDatabases: e = [],
          restDatabases: t = [],
          selectedDatabase: a = null,
          shortDbTitle: r = !0,
          loading: l = !1,
          hasError: o = !1,
          size: i = "m",
          tagProps: s = {},
          gaAction: c = "",
          onChange: d = () => {},
          ...p
        }) => {
          const { formatMessage: u } = (0, de.A)(),
            m = (0, n.useCallback)(
              (e) => {
                e && f({ action: c, label: "show DB" });
              },
              [c]
            ),
            y = (0, n.useCallback)(
              (e) => {
                f({ action: c, label: `select DB - ${e}` });
              },
              [c]
            );
          return l
            ? n.createElement(jt.A, { w: "40px" }, n.createElement(ir, null))
            : o
            ? n.createElement(lr, null)
            : n.createElement(
                ce.A,
                sr({ "aria-label": u({ id: "ariaLabel.selectCountry" }) }, p),
                n.createElement(
                  er(),
                  {
                    onChange: d,
                    loading: l,
                    topDatabases: e || [],
                    restDatabases: t || [],
                    selectedDatabase: a,
                    hasError: !1,
                    inline: !1,
                    onVisibleChange: m,
                    selectDbGa: y,
                    showCounters: !1,
                    tag: Za.A,
                    size: i,
                    tagProps: s,
                  },
                  a
                    ? n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                          Qa.Ay.Trigger.Addon,
                          null,
                          n.createElement(ar(), { db: a })
                        ),
                        n.createElement(
                          Qa.Ay.Trigger.Text,
                          null,
                          n.createElement(rr.DbTitle, { db: a, short: r })
                        )
                      )
                    : null
                )
              );
        };
        cr.propTypes = {
          topDatabases: v().any,
          restDatabases: v().any,
          selectedDatabase: v().any,
          tagProps: v().any,
          onChange: v().func,
          loading: v().bool,
          hasError: v().bool,
          gaAction: v().string,
          size: v().string,
          shortDbTitle: v().bool,
        };
        const dr = cr;
        function pr() {
          return (
            (pr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            pr.apply(null, arguments)
          );
        }
        const ur = ({
          onChange: e,
          gaAction: t,
          databases: a = [],
          selectedDatabase: r = null,
          tagProps: l = {},
          size: o = "m",
          shortDbTitle: i = !0,
          ...s
        }) => {
          const c = Ha(a, 4);
          return n.createElement(
            dr,
            pr(
              {
                onChange: e,
                loading: !1,
                hasError: !1,
                topDatabases: c,
                restDatabases: null,
                selectedDatabase: r,
                gaAction: t,
                size: o,
                shortDbTitle: i,
                wMax: 240,
                tagProps: l,
              },
              s
            )
          );
        };
        ur.propTypes = {
          databases: v().any,
          selectedDatabase: v().any,
          tagProps: v().any,
          onChange: v().func.isRequired,
          gaAction: v().string.isRequired,
          size: v().string,
          shortDbTitle: v().bool,
        };
        const mr = (0, n.memo)(ur);
        function yr() {
          return (
            (yr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            yr.apply(null, arguments)
          );
        }
        const gr = new I(window.location.search),
          { db: br } = (0, kt.um)(gr.get("db")),
          hr = ({
            shortDbTitle: e = !0,
            size: t = "m",
            gaAction: a = "",
            gaDBChange: r = () => {},
            w: l = "100%",
            ...i
          }) => {
            const s = (0, n.useMemo)(() => ({ w: l, wMin: "100px" }), [l]),
              c = (0, o.wA)(),
              [d, p] = (0, n.useState)(br),
              [u, m] = (0, n.useState)([]),
              y = (0, o.d4)(Ea),
              g = (0, o.d4)(We.dW),
              b = (0, o.d4)(Oa),
              h = (0, n.useCallback)(() => {
                const e = br || g?.db || kt.nR;
                p(e), c(Gt(e));
              }, [g?.db, c]),
              f = (0, n.useCallback)(() => {
                var e;
                y && 0 === u.length
                  ? m([
                      ((e = br || g?.db || kt.nR),
                      { value: e, label: `db.${e}`, code: e, country: e }),
                    ])
                  : b && m(b);
              }, [y, u.length, g?.db, b]);
            return (
              (0, n.useEffect)(() => {
                d || h();
              }, [d, h]),
              (0, n.useEffect)(() => {
                f();
              }, [f]),
              n.createElement(
                mr,
                yr(
                  {
                    databases: u,
                    selectedDatabase: d,
                    onChange: (e) => {
                      r(e), p(e), c(Gt(e));
                    },
                    gaAction: a,
                    size: t,
                    shortDbTitle: e,
                    tagProps: s,
                    w: l,
                  },
                  i
                )
              )
            );
          };
        hr.propTypes = {
          gaAction: v().string,
          size: v().string,
          gaDBChange: v().func,
          w: v().string,
          shortDbTitle: v().bool,
        };
        const fr = hr;
        var Er = a(10070);
        const { MEDIA_NAMES: vr } = i.MediaQ,
          wr = {
            addButton: { amount: { [vr.mobile]: 1, [vr.desktop]: 3 } },
            row: {
              controlsLength: { [vr.mobile]: 1, [vr.desktop]: 2 },
              tooltipPlacement: {
                [vr.mobile]: "top-start",
                [vr.desktop]: "left",
              },
            },
            landingInputs: {
              isOneColumn: { [vr.mobile]: !0, [vr.desktop]: !1 },
            },
            formButtons: { w: { [vr.mobile]: "100%", [vr.desktop]: "auto" } },
            dbSelector: {
              w: { [vr.mobile]: "100%", [vr.desktop]: "auto" },
              short: { [vr.mobile]: !1, [vr.desktop]: !0 },
            },
          },
          Tr = (0, It.useMediaValuesFactory)(wr, Ft, vr);
        function kr() {
          return (
            (kr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            kr.apply(null, arguments)
          );
        }
        const Ar = ({ onClick: e, ...t }) => {
          const { formatMessage: a } = (0, de.A)(),
            [r] = Tr("addButton.amount");
          return n.createElement(
            Nt.A,
            kr(
              {
                size: "l",
                use: "tertiary",
                onClick: () => {
                  e(r);
                },
                "data-at": `add-competitors-btn add-${r}`,
                "aria-label": a({ id: "ariaLabel.addCompetitors" }),
                "aria-expanded": "false",
              },
              t
            ),
            n.createElement(Nt.A.Addon, { tag: Er.A }),
            n.createElement(
              Nt.A.Text,
              null,
              1 === r
                ? n.createElement(qt.A, { id: "panel.addCompetitor" })
                : n.createElement(qt.A, {
                    id: "panel.addAllCompetitors",
                    values: { NUM: r },
                  })
            )
          );
        };
        Ar.propTypes = { onClick: v().func.isRequired };
        const Cr = (0, n.memo)(Ar),
          Sr = (0, se.default)(jt.A)`
  justify-content: space-between;
  margin: 0 auto;
  display: ${({ isOneColumn: e }) => (e ? "block" : "flex")};
`,
          xr = (0, se.default)(jt.A)`
  display: ${({ isOneColumn: e }) => (e ? "block" : "flex")};
  margin-left: auto;
`,
          Rr = ({
            onCompareClick: e,
            onAppendFields: t,
            canAddMoreFields: a = !1,
          }) => {
            const [[r, l, o, i]] = Tr([
                "landingInputs.isOneColumn",
                "formButtons.w",
                "dbSelector.short",
                "dbSelector.w",
              ]),
              { formatMessage: s } = (0, de.A)(),
              { gaDBChange: c } = _t();
            return n.createElement(
              Sr,
              { wMax: "732px", mt: r ? 3 : 8, isOneColumn: r },
              a && n.createElement(Cr, { onClick: t, w: l }),
              r && n.createElement(Ut.A, { my: 6 }),
              n.createElement(
                xr,
                { isOneColumn: r },
                n.createElement(
                  ce.A,
                  { "data-at": "select-db", w: l },
                  n.createElement(fr, {
                    size: "l",
                    shortDbTitle: o,
                    wMax: "100%",
                    w: i,
                    gaAction: "Landing",
                    gaDBChange: c,
                  })
                ),
                n.createElement(
                  Nt.A,
                  {
                    theme: "success",
                    use: "primary",
                    onClick: e,
                    ml: r ? 0 : 3,
                    mt: r ? 3 : 0,
                    "data-at": "compare-btn",
                    "aria-label": s({ id: "ariaLabel.compareDomains" }),
                    size: "l",
                    w: l,
                  },
                  n.createElement(qt.A, { id: "buttons.compare" })
                )
              )
            );
          };
        Rr.propTypes = {
          onCompareClick: v().func.isRequired,
          onAppendFields: v().func.isRequired,
          canAddMoreFields: v().bool,
        };
        const Lr = n.memo(Rr),
          Or = (0, n.createContext)(),
          _r = ({ index: e, children: t }) =>
            n.createElement(Or.Provider, { value: { index: e } }, t);
        _r.propTypes = {
          index: v().oneOf([0, 1, 2, 3, 4]).isRequired,
          children: v().node.isRequired,
        };
        const Pr = () => {
          const { index: e } = (0, n.useContext)(Or);
          return e;
        };
        var Ir = a(91731),
          Mr = a(6247),
          Dr = a(24016),
          Fr = a.n(Dr);
        const jr = (0, n.createContext)({}),
          qr = ({ context: e, children: t }) =>
            n.createElement(jr.Provider, { value: e }, t);
        qr.propTypes = {
          context: v().object.isRequired,
          children: v().node.isRequired,
        };
        var Nr = a(5672);
        const Ur = ({ onClear: e }) => {
          const { formatMessage: t } = (0, de.A)();
          return n.createElement(Ir.A.Addon, {
            tag: Nr.A,
            interactive: !0,
            onClick: e,
            onKeyUp: (t) => {
              t.nativeEvent.stopImmediatePropagation(),
                ("Enter" !== t.key && "Space" !== t.key) || e();
            },
            "data-at": "clear-competitor",
            "aria-label": t({ id: "ariaLabel.clearInput" }),
          });
        };
        Ur.propTypes = { onClear: v().func.isRequired };
        const $r = Ur;
        var Vr = a(46522);
        const zr = () =>
          n.createElement(
            Vr.A,
            {
              color: "blue-500",
              size: "m",
              theme: "primary",
              "data-at": "tag-you",
            },
            n.createElement(
              Vr.A.Text,
              null,
              n.createElement(
                nr.A,
                { color: "blue-500" },
                n.createElement(qt.A, { id: "panel.you" })
              )
            )
          );
        function Kr() {
          return (
            (Kr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Kr.apply(null, arguments)
          );
        }
        const Br = (0, se.default)(jt.A)`
  display: inline-block;
  border-radius: 50%;
`,
          Jr = ({
            color: e = "green",
            radius: t = 10,
            inactive: a = !1,
            ...r
          }) =>
            n.createElement(
              Br,
              Kr(
                {
                  style: {
                    background: a ? "#E0E1E9" : e,
                    width: `${t}px`,
                    height: `${t}px`,
                  },
                },
                r
              )
            );
        Jr.propTypes = {
          color: v().string,
          radius: v().number,
          inactive: v().bool,
        };
        const Wr = n.memo(Jr),
          Gr = {
            0: "#2BB3FF",
            1: "#59DDAA",
            2: "#FF8C43",
            3: "#AB6CFE",
            4: "#FDC23C",
          },
          Yr = (e) => (void 0 !== Gr[e] ? Gr[e] : Gr[0]),
          Hr = ({ index: e = 0, inactive: t = !1 }) =>
            0 === e
              ? n.createElement(zr, null)
              : n.createElement(Wr, {
                  radius: 12,
                  inactive: t,
                  color: Yr(e),
                  "data-at": `competitor-circle comp-circle-${
                    t ? "inactive" : e
                  }`,
                });
        Hr.propTypes = {
          inactive: v().bool,
          index: v().oneOf([0, 1, 2, 3, 4]),
        };
        const Qr = Hr,
          { useFocusOnInput: Zr } = Fr(),
          Xr = (0, se.default)(Ir.A)`
  &:focus-within {
    position: relative;
    z-index: 100;
  }
`,
          en = ({
            inputRef: e,
            value: t = "",
            index: a = 0,
            errorType: r = null,
            size: l = "l",
            placement: o = "left",
            onChange: i = () => {},
            onSubmit: s = () => {},
            onClear: c = () => {},
            onBlur: d = () => {},
            onFocus: p = () => {},
          }) => {
            const [[u]] = Tr(["row.controlsLength"]),
              { formatMessage: m } = (0, de.A)(),
              y = (0, n.useRef)(),
              [g, b, h] = ((e) => {
                const [t, a] = (0, n.useState)(!1);
                return (
                  (0, n.useEffect)(() => {
                    e.length > 0 && a(!0);
                  }, [e]),
                  [
                    t,
                    (0, n.useCallback)(() => {
                      a(!0);
                    }, []),
                    (0, n.useCallback)(() => {
                      0 === e.length && a(!1);
                    }, [e]),
                  ]
                );
              })(t),
              [f, E] = (0, n.useState)(!1),
              v = (0, n.useId)(),
              {
                setEntered: w = () => {},
                setDisabled: T = () => {},
                selected: k,
                resetSelectedStatus: A = () => {},
              } = (0, n.useContext)(jr),
              [C, S] = (0, n.useState)(null != r);
            var x, R;
            (x = () => {
              S(null != r);
            }),
              (R = [r, S]),
              (0, n.useEffect)(() => {
                const e = setTimeout(() => x(), 200);
                return () => clearTimeout(e);
              }, [...(R || []), 200, x]);
            const L = C && r;
            ((e, t) => {
              Zr(0 === e ? t : null);
            })(a, y),
              (0, n.useEffect)(() => {
                0 === t.length && w(!1);
              }, [t, w]),
              (0, n.useEffect)(() => {
                e(y.current);
              }, [e, y]);
            const O = (0, n.useMemo)(() => {
              try {
                return Ct(t);
              } catch {
                return t;
              }
            }, [t]);
            return n.createElement(
              Mr.Ay,
              { theme: "warning", visible: f && L, inline: !1, placement: o },
              n.createElement(
                Mr.Ay.Trigger,
                { w: "100%" },
                n.createElement(
                  Xr,
                  {
                    neighborLocation: 2 === u && "right",
                    size: l,
                    state: L ? "invalid" : "normal",
                  },
                  n.createElement(
                    Ir.A.Addon,
                    null,
                    n.createElement(Qr, { inactive: !g, index: a })
                  ),
                  n.createElement(Ir.A.Value, {
                    onChange: i,
                    onFocus: () => {
                      E(!0), A(), b(), p();
                    },
                    onBlur: () => {
                      E(!1),
                        h(),
                        t.length > 0 &&
                          setTimeout(() => {
                            w(!0);
                          }, 300),
                        setTimeout(() => {
                          d();
                        }, 300);
                    },
                    onKeyUp: (e) => {
                      e.nativeEvent.stopImmediatePropagation(),
                        "Enter" === e.key &&
                          (k
                            ? A()
                            : (s(), T(!0), setTimeout(() => T(!1), 100)));
                    },
                    value: O,
                    ref: y,
                    placeholder: m({ id: "panel.addDomain" }),
                    "data-at": "competitor-value",
                    autoComplete: 0 === a ? "on" : "off",
                    required: 0 === a || 1 === a,
                    "aria-label": m({ id: "ariaLabel.enterUrl" }),
                    "aria-describedby": L ? v : void 0,
                  }),
                  t.length > 0 &&
                    n.createElement($r, {
                      onClear: () => {
                        w(!1), c();
                      },
                    })
                )
              ),
              n.createElement(
                Mr.Ay.Popper,
                { id: v, "aria-label": r ? m({ id: `form.errors.${r}` }) : "" },
                r &&
                  n.createElement(
                    "span",
                    null,
                    n.createElement(qt.A, { id: `ariaLabel.errors.${r}` })
                  )
              )
            );
          };
        en.propTypes = {
          value: v().string,
          placement: v().string,
          onChange: v().func,
          onSubmit: v().func,
          onClear: v().func,
          onBlur: v().func,
          onFocus: v().func,
          index: v().oneOf([0, 1, 2, 3, 4]),
          errorType: v().oneOfType([v().string, v().bool]),
          size: v().string,
          inputRef: v().any.isRequired,
        };
        const tn = n.memo(en),
          an = (e) => 0 === e.length || Oe(e),
          rn = ({ onFocusChange: e = () => {} }) => {
            const t = Pr(),
              { clearErrors: a, control: r, onSubmit: l, setFocus: o } = Ke(),
              [i] = Tr("row.tooltipPlacement"),
              {
                field: { onChange: s, onBlur: c, value: d, ref: p },
                fieldState: { error: u },
              } = (0, Se.as)({
                name: `competitors.${t}.searchItem`,
                defaultValue: "",
                rules: { validate: { domainErr: an } },
                control: r,
              }),
              m = ((e) => {
                const { setSearchItem: t } = Rt(),
                  a = (0, n.useCallback)(
                    (a) => {
                      0 === e && t(Ne(a, "domain"));
                    },
                    [e, t]
                  );
                return a;
              })(t),
              y = (0, n.useCallback)(
                (e) => {
                  s(e), u && a(`competitors.${t}.searchItem`);
                },
                [s, a, u, t]
              ),
              g = (0, n.useCallback)(() => {
                ((e) => {
                  f({
                    category: "keyword-gap:landing-page",
                    action: "click:delete",
                    label: "scope:deleted",
                    value: e,
                  });
                })(t),
                  s(""),
                  o(`competitors.${t}.searchItem`),
                  a(`competitors.${t}.searchItem`);
              }, [s, t, a, o]),
              b = (0, n.useCallback)(() => {
                m(d), c(), e(!1);
              }, [d, m, c, e]),
              h = (0, n.useCallback)(() => e(!0), [e]);
            return n.createElement(tn, {
              index: t,
              value: d,
              onChange: y,
              onBlur: b,
              onClear: g,
              onSubmit: l,
              errorType: u?.type,
              inputRef: p,
              placement: i,
              onFocus: h,
            });
          };
        rn.propTypes = { onFocusChange: v().func };
        const nn = rn,
          ln = (0, se.default)(Qa.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          on = me.vM.map((e) => ({ value: e, children: e })),
          sn = ({
            value: e = me.vM[0],
            defaultValue: t = me.vM[0],
            index: a = 0,
            size: r = "l",
            onChange: l = () => {},
          }) => {
            const { formatMessage: o } = (0, de.A)(),
              [[i]] = Tr(["row.controlsLength"]),
              s = (0, n.useCallback)(
                (e) => {
                  l(e, a);
                },
                [l, a]
              );
            return n.createElement(
              Qa.Ay,
              {
                size: r,
                onChange: s,
                value: e,
                "data-at": "search-type-select",
              },
              n.createElement(
                Qa.Ay.Trigger,
                {
                  tag: Za.A,
                  "data-at": "search-type-trigger",
                  neighborLocation: 2 === i && "left",
                  "aria-label": o({ id: "ariaLabel.selectUrlType" }),
                },
                n.createElement(
                  Qa.Ay.Trigger.Text,
                  null,
                  n.createElement(qt.A, {
                    id: `searchTypes.${e.length ? e : t}Type`,
                  })
                )
              ),
              n.createElement(
                ln,
                { "data-at": "search-type-dd" },
                on.map(({ value: e }) =>
                  n.createElement(
                    Qa.Ay.Option,
                    {
                      value: e,
                      key: e,
                      direction: "row",
                      flexWrap: !0,
                      "data-at": `option-${e}`,
                    },
                    n.createElement(qt.A, { id: `searchTypes.${e}Type` })
                  )
                )
              )
            );
          };
        sn.propTypes = {
          value: v().oneOf([...me.vM]),
          defaultValue: v().string,
          onChange: v().func,
          index: v().oneOf([0, 1, 2, 3, 4]),
          size: v().string,
        };
        const cn = n.memo(sn),
          dn = () => {
            const e = Pr(),
              { control: t } = Ke(),
              { gaChangeSearchType: a } = _t(),
              {
                field: { onChange: r, onBlur: l, value: o },
              } = (0, Se.as)({
                name: `competitors.${e}.searchType`,
                defaultValue: "",
                control: t,
              }),
              i = (0, n.useCallback)(
                (e) => {
                  a(e), r(e);
                },
                [a, r]
              );
            return n.createElement(cn, {
              index: e,
              value: o,
              onChange: i,
              onBlur: l,
            });
          },
          pn = new Map([["pla", (e) => !e.isPlaAllowed]]);
        function un() {
          return (
            (un = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            un.apply(null, arguments)
          );
        }
        const mn = (0, se.default)(Qa.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          yn = me.CT.map((e) => ({ value: e, label: e })),
          gn = ({
            value: e = me.CT[0],
            defaultValue: t = me.CT[0],
            isFeatureLimited: a = !1,
            size: r = "l",
            onChange: l = () => {},
            openModal: o = () => {},
            ...i
          }) => {
            const { formatMessage: s } = (0, de.A)(),
              c = (() => {
                const e = ot();
                return (0, n.useCallback)(
                  (t) => {
                    let a = !1;
                    return pn.has(t) && (a = pn.get(t)(e)), a;
                  },
                  [e]
                );
              })(),
              d = (0, n.useCallback)(
                (e) => {
                  a && c(e) ? o() : l(e);
                },
                [a, c, o, l]
              );
            return n.createElement(
              Qa.Ay,
              {
                placeholder: s({ id: `keywordTypes.${t}Keywords` }),
                onChange: d,
                value: e,
                size: r,
                tag: Za.A,
                "data-at": "keyword-type-selector",
              },
              n.createElement(
                Qa.Ay.Trigger,
                un(
                  {
                    "aria-label": s({ id: "ariaLabel.selectScope" }),
                    "data-at": "keyword-type-selector-trigger",
                  },
                  i
                ),
                n.createElement(qt.A, { id: `keywordTypes.${e}Keywords` })
              ),
              n.createElement(
                mn,
                { "data-at": "keyword-type-selector-dd" },
                yn.map(({ value: e }) =>
                  n.createElement(
                    Qa.Ay.Option,
                    {
                      value: e,
                      key: e,
                      direction: "row",
                      "data-at": `option-${e}`,
                      flexWrap: !0,
                    },
                    n.createElement(qt.A, { id: `keywordTypes.${e}Keywords` })
                  )
                )
              )
            );
          };
        gn.propTypes = {
          value: v().oneOf([...me.CT]),
          defaultValue: v().string,
          onChange: v().func,
          isFeatureLimited: v().bool,
          openModal: v().func,
          size: v().string,
        };
        const bn = n.memo(gn);
        function hn() {
          return (
            (hn = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            hn.apply(null, arguments)
          );
        }
        const fn = ({ ...e }) => {
          const t = Pr(),
            { control: a } = Ke(),
            { gaChangeKeywordType: r } = _t(),
            {
              field: { onChange: l, onBlur: o, value: i },
            } = (0, Se.as)({
              name: `competitors.${t}.keywordType`,
              defaultValue: "",
              control: a,
            }),
            s = (0, n.useCallback)(
              (e) => {
                r(e), l(e);
              },
              [r, l]
            );
          return n.createElement(
            bn,
            hn({ index: t, value: i, onChange: s, onBlur: o }, e)
          );
        };
        var En = a(91733);
        const vn = ({
          children: e,
          competitors: t = [],
          disable: a = !1,
          isVisible: r = !1,
          onChange: l = () => {},
        }) => {
          const [o, i] = (0, n.useState)(!1),
            [s, c] = (0, n.useState)(!a),
            [d, p] = (0, n.useState)(!1);
          (0, n.useEffect)(() => c(d), [d]);
          const u = (0, n.useCallback)(
              (e) => () => {
                i(!0), l(e);
              },
              [i, l]
            ),
            m = (0, n.useCallback)(() => {
              i(!1);
            }, [i]),
            y = (0, n.useMemo)(
              () => ({
                selected: o,
                resetSelectedStatus: m,
                setEntered: p,
                setDisabled: c,
              }),
              [o, m, p, c]
            );
          return n.createElement(
            En.A,
            { value: null },
            n.createElement(
              En.A.Trigger,
              { w: "100%", tag: "div" },
              n.createElement(qr, { context: y }, e)
            ),
            !s &&
              !a &&
              n.createElement(
                En.A.Menu,
                { visible: r, "data-at": "competitors-list-suggest-dd" },
                ({ highlightedIndex: e }) =>
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      En.A.ItemTitle,
                      null,
                      n.createElement(qt.A, {
                        id: "targets.suggestCompetitors.header",
                      })
                    ),
                    t.map((t, a) =>
                      n.createElement(
                        En.A.Item,
                        {
                          value: t,
                          key: t,
                          onClick: u(t),
                          direction: "row",
                          flexWrap: !0,
                          "data-at": "option",
                          "aria-label": Ct(t),
                          "aria-selected": a === e,
                        },
                        Ct(t)
                      )
                    )
                  )
              )
          );
        };
        vn.propTypes = {
          children: v().element.isRequired,
          competitors: v().array,
          onChange: v().func,
          disable: v().bool,
          isVisible: v().bool,
        };
        const wn = vn,
          Tn = ({ children: e, isVisible: t = !1 }) => {
            const a = Pr(),
              { competitors: r } = Rt(),
              { setValue: l, control: o, clearErrors: i } = Ke(),
              s = (0, Se.FH)({ name: "competitors", control: o }),
              c = (0, n.useMemo)(
                () => s.map(({ searchItem: e }) => e.toLowerCase()),
                [s]
              ),
              d = (0, n.useMemo)(() => {
                const { searchItem: e } = s[a];
                return r
                  .filter((t) => t.startsWith(e))
                  .filter((e) => !c.includes(e.toLowerCase()))
                  .slice(0, 5);
              }, [r, s, c, a]),
              p = (0, n.useCallback)(
                (e) => {
                  l(`competitors.${a}.searchItem`, e),
                    i(`competitors.${a}.searchItem`);
                },
                [l, a, i]
              );
            return n.createElement(
              wn,
              {
                competitors: d,
                onChange: p,
                disable: 0 === a || 0 === d.length,
                index: a,
                isVisible: t,
              },
              e
            );
          };
        Tn.propTypes = {
          isVisible: v().bool,
          children: v().oneOfType([v().element, v().array]).isRequired,
        };
        const kn = Tn;
        function An() {
          return (
            (An = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            An.apply(null, arguments)
          );
        }
        const Cn = (0, se.default)(jt.A)`
  display: contents;
  margin-top: 24px;
`,
          Sn = (0, se.default)(ce.A)`
  flex-grow: 1;
`,
          xn = ({ index: e, ...t }) => {
            const { formatMessage: a } = (0, de.A)(),
              [[r]] = Tr(["landingInputs.isOneColumn"]),
              [l, o] = (0, n.useState)(!1),
              i = (0, n.useCallback)((e) => o(e), []);
            return n.createElement(
              _r,
              { index: e },
              n.createElement(
                Cn,
                An(
                  {
                    "data-at": "target-input",
                    role: "group",
                    "aria-label": a(
                      {
                        id:
                          "ariaLabel.targets." +
                          (0 === e ? "yourDomain" : "competitor"),
                      },
                      { NUM: e }
                    ),
                  },
                  t
                ),
                n.createElement(
                  Sn,
                  null,
                  n.createElement(
                    kn,
                    { isVisible: l },
                    n.createElement(nn, { onFocusChange: i })
                  )
                ),
                n.createElement(dn, null),
                n.createElement(fn, { ml: r ? 0 : 3, mb: r ? 3 : 0 })
              )
            );
          };
        xn.propTypes = { index: v().oneOf([0, 1, 2, 3, 4]).isRequired };
        const Rn = xn,
          Ln = (0, se.default)(jt.A)`
  display: grid;
  grid-template-columns: ${({
    isOneColumn: e,
    wSearchType: t = "142px",
    wKeywordType: a = "196px",
  }) => (e ? "1fr" : `auto ${t} ${a}`)};
  row-gap: ${({ isOneColumn: e }) => (e ? "12px" : "16px")};
  margin: 0 auto;
  max-width: 732px;
`,
          On = ({ children: e }) => {
            const [t] = Tr("landingInputs.isOneColumn");
            return n.createElement(Ln, { isOneColumn: t }, e);
          };
        On.propTypes = { children: v().node.isRequired };
        const _n = On,
          Pn = ({ onSubmit: e, fields: t }) => {
            const { formatMessage: a } = (0, de.A)(),
              r = (() => {
                const { setFocus: e } = Ke(),
                  t = (() => {
                    const e = (0, n.useRef)(0),
                      { control: t } = Ke(),
                      a = (0, Se.FH)({ name: "competitors", control: t }),
                      r = a.map(({ searchItem: e }) => e).join("");
                    return (
                      (0, n.useEffect)(() => {
                        let t;
                        for (t = 0; t < a.length; t++) {
                          const { searchItem: e } = a[t];
                          if ("" === e) break;
                        }
                        e.current = t;
                      }, [r, a]),
                      e
                    );
                  })();
                return (0, n.useCallback)(() => {
                  setTimeout(
                    () => e(`competitors.${t.current}.searchItem`),
                    100
                  );
                }, [e, t]);
              })(),
              { gaAddCompetitors: l } = _t(),
              [o, i] = (0, n.useState)(2),
              s = o < 5;
            return n.createElement(
              jt.A,
              { w: "100%" },
              n.createElement(
                "form",
                {
                  action: "",
                  "aria-label": a({ id: "ariaLabel.reportSetup" }),
                  onSubmit: (e) => {
                    e.preventDefault(), e.stopPropagation();
                  },
                },
                n.createElement(
                  _n,
                  null,
                  t
                    .slice(0, o)
                    .map((e, t) => n.createElement(Rn, { key: e.id, index: t }))
                ),
                n.createElement(Lr, {
                  canAddMoreFields: s,
                  onCompareClick: e,
                  onAppendFields: (e) => {
                    l(e), i((t) => t + e), r();
                  },
                })
              )
            );
          };
        Pn.propTypes = {
          onSubmit: v().func.isRequired,
          fields: v().arrayOf(v().object).isRequired,
        };
        const In = n.memo(Pn),
          Mn = "keyword_gap",
          Dn = Object.values(me.SJ),
          Fn = Vt(
            Mn,
            [
              "SET_MODE",
              "SET_KEYWORD_TYPE",
              "SET_INTERSECTION_TYPE",
              "SET_TOP_KEYWORD_TYPE",
            ],
            []
          ),
          jn = (0, Ee.VP)(Fn.SET_MODE, (e) => ({ mode: e })),
          qn = (0, Ee.VP)(Fn.SET_KEYWORD_TYPE, (e) => ({ keywordType: e })),
          Nn = (0, Ee.VP)(
            "requestSetIntersectionType",
            ({ intersectionType: e, intersectionSetByUser: t = !0 }) => ({
              intersectionType: e,
              intersectionSetByUser: t,
            })
          ),
          Un = (0, Ee.VP)(
            Fn.SET_INTERSECTION_TYPE,
            ({ intersectionType: e, intersectionSetByUser: t = !0 }) => ({
              intersectionType: e,
              intersectionSetByUser: t,
            })
          ),
          $n = (0, Ee.VP)("requestSetRankingTypeFromString", (e) => ({
            type: e,
          })),
          Vn = (0, Ee.VP)("clearIntersectionType"),
          zn = Vt(Pe.stateKey, ["SET_TARGETS"], []),
          Kn = (0, Ee.VP)(zn.SET_TARGETS, (e, t = !1) => ({
            targets: e,
            isLanding: t,
          })),
          Bn = (0, Ee.VP)("requestSetTargetsFromString", (e) => ({
            targets: e,
          })),
          Jn = (0, Ee.VP)("setTargetsFromString", (e) => ({ targets: e })),
          Wn = (0, Ee.VP)("requestSetQFromString", (e) => ({ q: e })),
          Gn = (0, Ee.VP)("requestSetSearchTypeFromString", (e) => ({
            searchType: e,
          })),
          Yn = (0, Ee.VP)("requestSetKeywordTypeFromString", (e) => ({
            keywordType: e,
          })),
          Hn = (0, Ee.VP)("requestSetCompareWithFromString", (e) => ({
            compareWith: e,
          })),
          Qn = ({ searchItem: e }) => "" !== e,
          Zn = { competitors: [me.Kv, me.Kv, me.Kv, me.Kv, me.Kv] },
          Xn = () => {
            const {
                handleSubmit: e,
                setError: t,
                clearErrors: a,
                control: r,
                watch: l,
                setValue: i,
                setFocus: s,
              } = (0, Se.mN)({
                defaultValues: Zn,
                reValidateMode: "onBlur",
                mode: "onBlur",
              }),
              { fields: c, replace: d } = (0, Se.jz)({
                control: r,
                name: "competitors",
              }),
              p = (({ handleSubmit: e, setError: t, replace: a }) => {
                const r = (0, o.wA)(),
                  l = (0, o.d4)(Ba),
                  i = (0, n.useCallback)(() => {
                    e(({ competitors: e }) => {
                      let n = e.filter(({ searchItem: e }) => e.length > 0);
                      const o = 5 - n.length;
                      n = [...n, ...new Array(o).fill(me.Kv)];
                      const i = e.filter(
                        ({ searchItem: e }) => e.length
                      ).length;
                      if (i < 2) {
                        const r = ((e) =>
                          [
                            [
                              "competitors.0.searchItem",
                              { type: "enterOne", message: "" },
                              { shouldFocus: !0 },
                            ],
                            [
                              "competitors.1.searchItem",
                              { type: "enterCompetitor", message: "" },
                              { shouldFocus: !0 },
                            ],
                          ][e])(i);
                        return (
                          e
                            .map(({ searchItem: e }) => !!e.length)
                            .reduce(
                              (e, t, a, r) =>
                                null != r[a - 1] && r[a - 1] !== r[a]
                                  ? e + 1
                                  : e,
                              0
                            ) > 1 && a(n),
                          void setTimeout(() => t(...r), 0)
                        );
                      }
                      ((e) => {
                        const t = e.filter((e) => "" !== e.searchItem);
                        let a = "";
                        t.forEach((e) => {
                          a += ` ${e.searchType}`;
                        }),
                          f({
                            category: "keyword-gap:landing-page",
                            action: "click:compare",
                            label: "report:load",
                            value: `${t.length} +${a}`,
                          });
                      })(n),
                        r(
                          Wt(
                            l?.date ?? (0, ft.A)(new Date(), "yyyyMMdd"),
                            $t.J5.daily,
                            !0
                          )
                        ),
                        r(qn(n[0].keywordType)),
                        r(
                          jn(
                            ((e) => {
                              const t = e
                                .filter(Qn)
                                .map(({ keywordType: e }) => e);
                              return new Set(t).size > 1;
                            })(n)
                              ? me.vV.advanced
                              : me.vV.simple
                          )
                        ),
                        r(Kn(n, !0));
                    })();
                  }, [r, e, a, t, l]);
                return i;
              })({ handleSubmit: e, setError: t, replace: d }),
              u = (0, n.useMemo)(
                () => ({
                  control: r,
                  setValue: i,
                  clearErrors: a,
                  watch: l,
                  setFocus: s,
                  onSubmit: p,
                }),
                [r, a, i, l, p, s]
              );
            return (
              (0, n.useEffect)(() => {
                const e = new URLSearchParams(window.location.search),
                  t = e.get("q"),
                  a = e.get("searchType");
                t &&
                  Oe(t) &&
                  (i("competitors.0.searchItem", t),
                  i("competitors.0.searchType", a));
              }, [i]),
              n.createElement(
                ze,
                { context: u },
                n.createElement(Pt, { control: r }),
                n.createElement(
                  Dt,
                  null,
                  n.createElement(Je, null),
                  n.createElement(
                    Ot,
                    null,
                    n.createElement(In, { fields: c, onSubmit: p })
                  )
                )
              )
            );
          },
          el = ({ ga: e }) => {
            const [t, a] = (0, n.useState)(!1);
            (0, n.useEffect)(() => {
              const e = setTimeout(() => a(!0), 1e3);
              return () => clearTimeout(e);
            }, []);
            const [r, l] = (() => {
              const [e, t] = (({
                  root: e = null,
                  rootMargin: t,
                  threshold: a = 0,
                }) => {
                  const [r, l] = (0, n.useState)({}),
                    [o, i] = (0, n.useState)(null),
                    s = (0, n.useRef)(
                      new window.IntersectionObserver(([e]) => l(e), {
                        root: e,
                        rootMargin: t,
                        threshold: a,
                      })
                    );
                  return (
                    (0, n.useEffect)(() => {
                      const { current: e } = s;
                      return (
                        e.disconnect(), o && e.observe(o), () => e.disconnect()
                      );
                    }, [o]),
                    [i, r]
                  );
                })({}),
                [a, r] = (0, n.useState)(t?.isIntersecting);
              return (
                (0, n.useEffect)(() => {
                  a || r(t?.isIntersecting);
                }, [t?.isIntersecting, r, a]),
                [e, a]
              );
            })();
            return (
              (0, n.useEffect)(() => {
                t && l && e();
              }, [l, t]),
              t ? n.createElement("div", { ref: r }) : null
            );
          };
        el.propTypes = { ga: v().func.isRequired };
        const tl = el,
          al = ({
            index: e,
            isTextLoading: t,
            title: r = "",
            description: l = "",
            imgName: o = "",
            direction: i = "default",
          }) => {
            const { formatMessage: s } = (0, de.A)(),
              c = (0, n.useCallback)(() => {
                return f({
                  category: "keyword-gap:landing",
                  action: `scroll:block-${(t = e + 1)}`,
                  label: `block-${t}:show`,
                });
                var t;
              }, [e]);
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(ue().DescriptionItem, {
                title: s({ id: r }),
                description: s({ id: l }),
                direction: i,
                index: e,
                imageLoader: ((d = o), () => a(59367)(`./${d}.svg`)),
                isTextLoading: t,
              }),
              n.createElement(tl, { ga: c })
            );
            var d;
          };
        al.propTypes = {
          title: v().string,
          description: v().string,
          imgName: v().string,
          isTextLoading: v().bool.isRequired,
          index: v().number.isRequired,
          direction: v().oneOf(["default", "reverse"]),
        };
        const rl = n.memo(al),
          nl = [
            {
              id: "step1",
              imgName: "type-competitor",
              title: "howToUse.typeCompetitors.title",
              description: "howToUse.typeCompetitors.description",
            },
            {
              id: "step2",
              imgName: "select-keywords-type",
              title: "howToUse.chooseTypes.title",
              description: "howToUse.chooseTypes.description",
            },
            {
              id: "step3",
              imgName: "find-insights",
              title: "howToUse.findInsights.title",
              description: "howToUse.findInsights.description",
            },
          ],
          ll = () => {
            const { formatMessage: e } = (0, de.A)(),
              { isLoading: t } = (0, L.useTextSmoothLoading)();
            (0, n.useEffect)(() => {
              y.set(D, me.SJ.missing);
            }, []),
              (0, n.useEffect)(() => {
                f({
                  category: "keyword-gap:landing-page",
                  action: "show:load",
                  label: "landing:loaded",
                });
              }, []);
            const a = (0, o.wA)();
            return (
              (0, n.useEffect)(() => {
                a(ve());
              }, [a]),
              n.createElement(
                ue(),
                null,
                n.createElement(
                  ue().HeaderCard,
                  {
                    title: e({ id: "reportTitle.keywordGap" }),
                    description: e({ id: "landing.description" }),
                    "aria-label": e({ id: "ariaLabel.kgHeader" }),
                  },
                  n.createElement(
                    fe,
                    { pageType: "landing" },
                    n.createElement(Xn, null)
                  )
                ),
                n.createElement(
                  ue().DescriptionCard,
                  { "aria-label": e({ id: "ariaLabel.kgFeatures" }) },
                  nl.map((e, a) =>
                    n.createElement(rl, {
                      direction: a % 2 > 0 ? "default" : "reverse",
                      title: e.title,
                      description: e.description,
                      imgName: e.imgName,
                      key: e.id,
                      index: a,
                      isTextLoading: t,
                    })
                  )
                )
              )
            );
          };
        var ol = a(42534);
        const il = (e) => (e[Mn] ? e[Mn] : {}),
          sl = (e) => il(e).mode,
          cl = (e) => il(e).keywordType,
          dl = (e) => il(e).intersectionSetByUser,
          pl = (e) => il(e).intersectionType,
          ul = (e) => il(e).nextIntersectionType,
          ml = (0, la.Mz)(ol.G9, (e) =>
            e.split("_").filter((e) => "organic" !== e).length
              ? "mixed"
              : "organic"
          ),
          yl = (e) => il(e).intersectionType,
          gl = (e) => e.data.keywordsTotal,
          bl = (e) => gl(e).data?.overlaps || [],
          hl = (0, la.Mz)(
            (e) => gl(e).status.isLoading,
            (e) => null === e || e
          ),
          fl = (0, la.Mz)(bl, (e) =>
            e.map(({ targetIndexes: e, commonKeywords: t }) => ({
              sets: e.map((e) => `${e}`),
              size: t,
            }))
          ),
          El = (0, la.Mz)([hl, fl], (e, t) => e || t.length > 0),
          vl = (0, la.Mz)([ol.N3, bl], (e, t) =>
            (t?.filter(({ targetIndexes: e }) => 1 === e.length) ?? []).map(
              ({ commonKeywords: t, targetIndexes: [a] }, r) => ({
                size: t,
                id: `${a}`,
                target: Ct(e[r]?.searchItem ?? ""),
                searchType: e[r]?.searchType ?? "",
                keywordType: e[r]?.keywordType ?? "",
              })
            )
          ),
          wl = (e) => (gl(e).data.targetsKeywords || [])[0],
          Tl = (0, la.Mz)([wl, yl], (e, t) => e?.[t] ?? 0),
          kl = (0, la.Mz)(wl, (e = {}) =>
            Object.values(e).some((e) => 0 !== e)
          ),
          Al = (0, la.Mz)(
            (e) => gl(e).status,
            (e) => e.hasError
          ),
          Cl = (0, la.Mz)([at, Tl], (e, t) => (e < t ? e : t)),
          Sl = "keywordsTop",
          xl = (e) => e.data[Sl].status.isLoading,
          Rl = (0, la.Mz)([xl, wa], (e, t) => null === e || e || t),
          Ll = (e) => e.data[Sl].status.hasError,
          Ol = (0, la.Mz)(
            (e) => e.data[Sl].data,
            (e) => {
              if (e)
                return { missing: e.missing, weak: e.weak, common: e.common };
            }
          ),
          _l = (0, la.Mz)(Ol, (e) => e),
          Pl =
            ((0, la.Mz)([Rl, _l], (e, t) => e || (t && t.length > 0)),
            (0, la.Mz)(
              [Rl, Ol],
              (e, t) =>
                !e &&
                (null == t ||
                  Object.values(t).every((e) => null == e || 0 === e.length))
            )),
          Il = (0, la.Mz)(
            (e) => ((e) => e.data.keywordsTop)(e).status,
            (e) => e.hasError
          ),
          Ml = (e) => e.filters,
          Dl = (e) => Ml(e).volume,
          Fl = (e) => Ml(e).position,
          jl = (e) => Ml(e).search,
          ql = (e) => Ml(e).keywordDifficulty,
          Nl = (e) => Ml(e).intent,
          Ul = (e) => Ml(e).advanced,
          $l = (e, t) => Ul(e)?.[t],
          Vl = (e) => Ml(e).advancedApplied,
          zl = (e) => {
            const t = Ml(e),
              a = {
                volume: t.volume,
                position: t.position,
                search: t.search,
                keywordDifficulty: t.keywordDifficulty,
                intent: t.intent,
                advancedApplied: t.advancedApplied,
              };
            return Object.values(a).every(
              (e) => null == e || 0 === Object.keys(e).length
            )
              ? null
              : a;
          },
          Kl = (0, la.Mz)([zl], (e) => Boolean(e)),
          Bl = (e) => e.kgTable.currentPage,
          Jl = (e) => e.kgTable.prevPage,
          Wl = (e) => e.kgTable.sorting.field,
          Gl = (e) => e.kgTable.sorting.direction,
          Yl =
            ((0, la.Mz)([Wl, Gl], (e, t) => ({
              sortField: e,
              sortDirection: t,
            })),
            (0, la.Mz)(
              [
                Va,
                ol.Dv,
                pl,
                Bl,
                Wl,
                Gl,
                (e) => {
                  const t = Ml(e);
                  return {
                    volume: t.volume,
                    position: t.position,
                    search: t.search,
                    keywordDifficulty: t.keywordDifficulty,
                    intent: t.intent,
                    advancedApplied: t.advancedApplied,
                  };
                },
              ],
              (e, t, a, r, n, l, o) => {
                let i = t
                  .filter(({ value: e }) => e.length > 0)
                  .map((e) => ({ ...e, value: St(e.value) }));
                return (
                  _.A.isSearchTypesLimited() &&
                    (i = i.map((e) => ({ ...e, type: "domain" }))),
                  {
                    targets: i,
                    type: a,
                    page: r,
                    sortField: n,
                    sortDirection: l,
                    filter: o,
                    ...e,
                  }
                );
              }
            )),
          Hl = ({ page: e, ...t }) =>
            Object.keys(t)
              .sort()
              .map((e) => JSON.stringify(t[e]))
              .join("/"),
          Ql = (e) => e.data.keywords,
          Zl = (0, la.Mz)(
            (e) => Ql(e).status.isLoading,
            (e) => null === e || e
          ),
          Xl = (0, la.Mz)(
            (e) => Ql(e).status,
            (e) => e.hasError
          ),
          eo = (e) => Ql(e).meta,
          to = (e) => Ql(e).data,
          ao = (0, la.Mz)([eo, Yl], (e, t) => e?.[Hl(t)]?.[t.page] ?? null),
          ro = (0, la.Mz)([to, ao], (e, t) => t?.map((t) => e[t]) ?? []),
          no = (0, la.Mz)([eo, (e, t) => t], (e, t) =>
            Boolean(e?.[Hl(t)]?.[t.page] ?? !1)
          ),
          lo = (e) => e.data.ranks.data,
          oo = (0, la.Mz)(
            (e) => e.data.ranks.status,
            (e) => null !== e.isLoading && !e.hasError
          ),
          io = (0, la.Mz)([hl, Rl, Zl], (e, t, a) => e || t || a),
          so = (0, la.Mz)([Il, Al, Xl], (e, t, a) => e || t || a);
        var co = a(33402),
          po = a.n(co),
          uo = a(35970),
          mo = a.n(uo),
          yo = a(17465),
          go = a.n(yo);
        const bo = {
            0: "target1",
            1: "target2",
            2: "target3",
            3: "target4",
            4: "target5",
          },
          ho = {
            phrase: "Ph",
            keyword: "Ph",
            position: "Po",
            positions: "Po",
            positionDiff: "Po",
            keywords: "Pc",
            changeOfTraffic: "Tr",
            volume: "Nq",
            keywordDifficulty: "Kd",
            kd: "Kd",
            cpc: "Cp",
            url: "Ur",
            traffic: "Tr",
            trafficRelative: "Tr",
            trafficPercent: "Tr",
            trafficCost: "Tc",
            comp: "Co",
            results: "Nr",
            serpFeatures: "Fl",
            keywordType: "Br",
            wordsCount: "Wc",
            crawledTime: "Ts",
            category: "Ca",
            competitionLvl: "Cr",
            commonKeywords: "Np",
            intent: "In",
            ...bo,
          },
          fo = {
            comp: "comp",
            cpc: "cpc",
            keywordDifficulty: "kd",
            results: "results",
            volume: "volume",
            ...bo,
          },
          Eo = {
            containing: "Co",
            wordMatch: "Wm",
            exactMatch: "Eq",
            begins: "Bw",
            ends: "Ew",
            "=": "Eq",
            ">": "Gt",
            "<": "Lt",
            "": "",
          },
          vo = {
            serpFeatures: (e) => `${parseInt(e, 10)}`,
            crawledTime: (e) => e.map((e) => `${e}000`).join(";"),
          },
          wo = (e, t) => {
            const a = e?.[t] ?? "";
            let r = "";
            if (
              ((r = "object" == typeof a ? `${a?.from}-${a?.to}` : a),
              0 === r.length)
            )
              return [];
            const n = { isIncludes: !0, field: t },
              [l, o] = r.split("-");
            return l === o
              ? [{ ...n, criteria: "=", value: l }]
              : [
                  o
                    ? { ...n, criteria: "<", value: parseInt(o, 10) + 1 }
                    : null,
                  l
                    ? {
                        ...n,
                        criteria: ">",
                        value: parseInt(l, 10) > 0 ? parseInt(l, 10) - 1 : 0,
                      }
                    : null,
                ].filter((e) => Boolean(e));
          },
          To = (e) => (e ? "+" : "-"),
          ko = (e) => Eo[e] || Eo.exactMatch,
          Ao = (e, t) => (vo[e] || ((e) => e))(t),
          Co = (e) => {
            const t = e?.intent ?? [];
            return Array.isArray(t) && t.length > 0
              ? t.map((e) => ({
                  isIncludes: !0,
                  field: "intent",
                  criteria: "exactMatch",
                  value: yo.INTENT_IDS.getID(e),
                }))
              : [];
          },
          So = {
            kg_competitors: (e) =>
              e.reduce(
                (e, t) =>
                  `${e}${"" === e ? "" : "|"}${[
                    encodeURIComponent(t.value),
                    st.TARGET_TYPE[t.type],
                    st.PRODUCT_TYPE[t.dataType],
                  ].join(":")}`,
                ""
              ),
            device_type: (e) => (1 === e ? "Mobile" : "Desktop"),
            kg_display_sort: (e) => {
              return `${((t = e[0]), fo[t] || t)}_${e[1]}`.toLowerCase();
              var t;
            },
            kg_display_filter: (e) =>
              mo()(
                [
                  ...Object.values(e?.advancedApplied ?? {}),
                  ...wo(e, "volume"),
                  ...wo(e, "keywordDifficulty"),
                  ...Co(e),
                ].map((e) => {
                  return [
                    To(e.isIncludes),
                    ((t = e.field), ho[t] || t),
                    ko(e.criteria),
                    Ao(e.field, e.value),
                  ];
                  var t;
                })
              )
                .concat(
                  (e?.search ?? "").length > 0
                    ? ["+", "Ph", "Co", e.search]
                    : []
                )
                .join("|"),
            positions_filter: (e) =>
              ((e) => {
                const { position: t } = e;
                if (t) {
                  let e, a;
                  return (
                    "object" == typeof t.value
                      ? ({ from: e, to: a } = t.value)
                      : ([e, a] = t.value.split("-")),
                    [t.type, e, a].join(":")
                  );
                }
                return "";
              })(e),
            description: (e) => (e ? "on" : "off"),
            report_subtitle: (e) =>
              e.reduce(
                (e, t) =>
                  `${e}${"" === e ? "" : "\n"}${
                    window?.sm2?.navigation
                      ? window.sm2.navigation.getQueryBySearchType(
                          t.value,
                          "domain"
                        )
                      : Fe(t.value)
                  }`,
                ""
              ),
          };
        var xo = a(78832);
        const Ro = ({ options: e, isFeatureLimited: t = !1 }) => {
          const { formatMessage: a } = (0, de.A)(),
            [r, l] = (0, n.useState)(!1);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement("div", { id: "my-reports-lite-order" }),
            n.createElement(
              Nt.A,
              {
                onClick: () => {
                  if (
                    (f({
                      category: "keyword-gap:export",
                      action: "click:export-button",
                      label: "export:show-popup",
                    }),
                    t)
                  )
                    return !1;
                  window.liteOrder
                    ? (window.liteOrder.init({
                        templateType: e.type,
                        templateParameters: e,
                      }),
                      window.liteOrder.toggleVisibility())
                    : (l(!0),
                      fetch("/my_reports/api/v1/lite-order")
                        .then((e) => e.json())
                        .then((t) => {
                          l(!1);
                          const { status: a } = t;
                          if ("success" === a) {
                            const {
                                result: { script: a, styles: r },
                              } = t,
                              n = document.createElement("script");
                            n.src = a;
                            const l = document.createElement("link");
                            (l.rel = "stylesheet"),
                              (l.href = r),
                              document.head.append(l),
                              document.body.append(n),
                              n.addEventListener("load", () => {
                                window.liteOrder.init({
                                  templateType: e.type,
                                  templateParameters: e,
                                });
                              });
                          } else console.error(a);
                        })
                        .catch((e) => {
                          l(!1), console.error(e);
                        }));
                },
                loading: r,
                className: "js-button-pdf",
                "aria-label": a({ id: "ariaLabel.pdfButton" }),
                "aria-haspopup": "dialog",
              },
              n.createElement(Nt.A.Addon, null, n.createElement(xo.A, null)),
              n.createElement(
                Nt.A.Text,
                null,
                n.createElement(qt.A, { id: "pdf.exportButton" })
              )
            )
          );
        };
        Ro.propTypes = {
          options: v().object.isRequired,
          isFeatureLimited: v().bool,
        };
        const Lo = Ro;
        var Oo = a(67724);
        function _o() {
          return (
            (_o = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            _o.apply(null, arguments)
          );
        }
        v().bool,
          v().bool.isRequired,
          v().string.isRequired,
          v().number.isRequired,
          v().bool,
          v().bool;
        const Po = (e) => (t) => {
            const a = _.A.isPaid,
              r = _.A.hasProduct(),
              l = _.A.productGroup,
              i = (0, o.d4)(at),
              s = (0, o.d4)(rt),
              c = (0, o.d4)(nt);
            return n.createElement(
              e,
              _o(
                {
                  hasUserPaid: a,
                  hasUserProduct: r,
                  userRole: l,
                  exportLimit: i,
                  isHistoryAllowed: s,
                  isTrialAllowed: c,
                },
                t
              )
            );
          },
          Io = {
            [i.USER_ROLES.guest]: "Payment Guest",
            [i.USER_ROLES.free]: "Payment FREE",
            [i.USER_ROLES.appCenter]: "Payment AppCenter",
            [i.USER_ROLES.pro]: "Payment PRO",
            [i.USER_ROLES.guru]: "Payment GURU",
            [i.USER_ROLES.business]: "Payment BUSINESS",
            [i.USER_ROLES.customPlan]: "Payment BUSINESS",
          },
          Mo = "success",
          Do = (0, se.default)(ce.A)`
  transform: translateZ(0);
  position: sticky;
  margin-top: 150px;
  margin-bottom: 50px;
  top: 150px;
`,
          Fo = {
            historical_panel: "HD panel",
            historical: "HD",
            filter: "filter",
            filters: "filter",
            filter_panel: "filter panel",
            export: "export",
            export_panel: "export panel",
            sorting: "sorting",
            table: "table",
            table_tiny: "table_tiny",
            report_per_day: "report tariff",
          };
        class jo extends n.PureComponent {
          static propTypes = {
            title: v().string.isRequired,
            description: v().oneOfType([v().string, v().element]),
            contextText: v().string,
            features: v().array,
            onOk: v().func,
            onCancel: v().func,
            cancelText: v().string,
            okText: v().string,
            needSticky: v().bool,
            userRole: v().string.isRequired,
          };
          static defaultProps = {
            description: "",
            features: [],
            onOk() {},
            onCancel: null,
            contextText: "",
            needSticky: !1,
            cancelText: "limitBlock.cancelBtnModal",
            okText: "limitBlock.plansAndPricingBtn",
          };
          constructor() {
            super(),
              (this.handleOKClick = this.handleOKClick.bind(this)),
              (this.handleCancelClick = this.handleCancelClick.bind(this));
          }
          componentDidMount() {
            this.sendGa("show limit popup");
          }
          sendGa(e = "") {
            const { userRole: t, gaContext: a } = this.props;
            f({
              action: Io?.[t] ?? "Payment",
              label: `${Fo?.[a] ?? a} - ${e}`,
            });
          }
          handleOKClick() {
            const { onOk: e } = this.props;
            this.sendGa("see plans"), e();
          }
          handleCancelClick() {
            const { onCancel: e } = this.props;
            e();
          }
          renderFeature(
            { img: e = "", description: t, imgType: r = "svg" },
            l
          ) {
            return n.createElement(
              ce.A,
              {
                direction: "column",
                justifyContent: "center",
                key: l,
                ml: l ? 10 : 0,
                w: 120,
              },
              n.createElement(
                jt.A,
                { mb: 3, hMin: 97 },
                "png" === r
                  ? n.createElement("img", { src: `/img/${e}.png`, alt: "" })
                  : n.createElement(rr.AsyncSvgImage, {
                      loader: ((o = e), () => a(97116)(`./${o}.svg`)),
                      usePreview: !0,
                      "aria-hidden": "true",
                      role: "img",
                    })
              ),
              n.createElement(
                nr.A,
                {
                  size: "200",
                  textAlign: "center",
                  "data-at": `item-desc-${l}`,
                },
                n.createElement(qt.A, { id: t })
              )
            );
            var o;
          }
          renderFeaturesList() {
            const { features: e } = this.props;
            if (0 !== e.length)
              return n.createElement(
                ce.A,
                { justifyContent: "center", mb: 8, "data-at": "feature-items" },
                e.map((e, t) => this.renderFeature(e, t))
              );
          }
          renderCancelBtn() {
            const { cancelText: e, onCancel: t } = this.props;
            if (e && t)
              return n.createElement(
                Nt.A,
                {
                  onClick: this.handleCancelClick,
                  ml: 3,
                  size: "l",
                  "data-at": "cancel-btn",
                },
                n.createElement(qt.A, { id: e })
              );
          }
          renderOkBtn() {
            const { okText: e } = this.props;
            return n.createElement(
              Nt.A,
              {
                onClick: this.handleOKClick,
                size: "l",
                use: "primary",
                "data-at": "upgrade-btn",
                theme: "success",
              },
              n.createElement(qt.A, { id: e })
            );
          }
          render() {
            const {
                needSticky: e,
                title: t,
                contextText: a,
                description: r,
              } = this.props,
              l = e ? Do : ce.A;
            return n.createElement(
              l,
              {
                justifyContent: "center",
                direction: "column",
                "data-at": "limit-block",
                w: 440,
              },
              n.createElement(
                nr.A,
                {
                  size: 500,
                  tag: "p",
                  lineHeight: 1.12,
                  mb: 4,
                  medium: !0,
                  "data-at": "title",
                  textAlign: "center",
                },
                n.createElement(qt.A, { id: t })
              ),
              n.createElement(
                nr.A,
                {
                  size: 200,
                  tag: "p",
                  mb: 8,
                  "data-at": "description",
                  textAlign: "center",
                },
                a.length > 0 &&
                  n.createElement(
                    "span",
                    null,
                    n.createElement(qt.A, { id: a }),
                    "Â "
                  ),
                n.createElement(qt.A, {
                  id: r,
                  values: { br: n.createElement("br", null) },
                })
              ),
              this.renderFeaturesList(),
              n.createElement(
                ce.A,
                { justifyContent: "center" },
                this.renderOkBtn(),
                this.renderCancelBtn()
              )
            );
          }
        }
        const qo = Po(jo),
          No = "trialplan",
          Uo = {
            [i.USER_ROLES.pro]: {
              title: "limitBlock.pro.title",
              description: "limitBlock.pro.description",
              okText: "limitBlock.pro.upgradeText",
              features: [
                {
                  img: "limit_keyword_per_report",
                  description: "limitBlock.pro.feature_1",
                },
                { img: "limit_excel", description: "limitBlock.pro.feature_2" },
                {
                  img: "limit_databases",
                  description: "limitBlock.pro.feature_3",
                },
              ],
            },
            [i.USER_ROLES.guru]: {
              title: "limitBlock.guru.title",
              description: "limitBlock.guru.description",
              okText: "limitBlock.guru.upgradeText",
              features: [
                {
                  img: "limit_subdomain",
                  description: "limitBlock.guru.feature_1",
                },
                {
                  img: "limit_historical",
                  description: "limitBlock.guru.feature_2",
                },
                {
                  img: "limit_keyword_per_report",
                  description: "limitBlock.guru.feature_3",
                },
              ],
            },
            [i.USER_ROLES.business]: {
              title: "limitBlock.business.title",
              description: "limitBlock.business.description",
              okText: "limitBlock.business.upgradeText",
              features: [
                {
                  img: "limit_reports_per_day",
                  description: "limitBlock.business.feature_1",
                },
                {
                  img: "limit_keyword_per_report",
                  description: "limitBlock.business.feature_2",
                },
                {
                  img: "limit_api",
                  description: "limitBlock.business.feature_3",
                },
              ],
            },
            [i.USER_ROLES.customPlan]: {
              title: "limitBlock.customPlan.title",
              description: "limitBlock.customPlan.description",
              okText: "limitBlock.requestCustomBtn",
            },
            [No]: {
              title: "limitBlock.trialPlan.title",
              description: "limitBlock.trialPlan.description",
              okText: "limitBlock.getTrial",
            },
          },
          $o = {
            results: "limitBlock.context.results",
            filter_sorting: "limitBlock.context.filter_sorting",
            filters: "limitBlock.context.filters",
            sorting: "limitBlock.context.filter_sorting",
            historical: "limitBlock.context.historical",
            report_per_day: "limitBlock.context.report_per_day",
            export: "limitBlock.context.export",
            pla: "limitBlock.context.pla",
          },
          Vo = {
            filters: "limitBlock.notNow",
            historical: "limitBlock.notNow",
            default: "limitBlock.cancelBtnModal",
            export: "limitBlock.notNow",
          },
          zo = ({
            planType: e = i.USER_ROLES.pro,
            cancelText: t = "",
            limitContext: a = "",
            needSticky: r = !1,
            gaContext: l = "",
            onCancel: o = null,
            onClose: s = () => {},
          }) => {
            const c = (0, n.useCallback)(() => {
                const t = ((e) => {
                  switch (e) {
                    case i.USER_ROLES.customPlan:
                      return () => i.BillingUI.customPlanRequest(!0);
                    case No:
                      return () =>
                        window.open(
                          `${window.location.origin}/subscribe/?src=pricing&offer=pro-free-trial`
                        );
                    default:
                      return () =>
                        i.BillingUI.quickUpgradePopup({
                          upgradeTo: e,
                          source: j,
                        });
                  }
                })(e);
                t(), s({ closeByMainAction: !0 });
              }, [e, s]),
              d = Uo[e],
              p = ((e) => (e && void 0 !== $o[e] ? $o[e] : ""))(a),
              u = t || ((e) => (e && void 0 !== Vo[e] ? Vo[e] : ""))(a),
              m = void 0 !== d.okText ? d.okText : void 0;
            return n.createElement(qo, {
              title: d.title,
              contextText: p,
              description: d.description,
              features: d.features,
              cancelText: u,
              okText: m,
              onCancel: o,
              onOk: c,
              needSticky: r,
              planType: e,
              gaContext: l || a,
            });
          };
        zo.propTypes = {
          planType: v().oneOf([...i.USER_ROLES.getList(), No]),
          onCancel: v().func,
          onClose: v().func,
          cancelText: v().string,
          limitContext: v().oneOf([
            "results",
            "filter_sorting",
            "filters",
            "sorting",
            "historical",
            "report_per_day",
            "export",
            "pla",
            "",
          ]),
          needSticky: v().bool,
          gaContext: v().string,
        };
        const Ko = zo,
          Bo = ({
            visible: e = !1,
            planType: t = i.USER_ROLES.pro,
            limitContext: a = "",
            gaContext: r = "",
            onClose: l = () => {},
            onCancel: o = () => {},
          }) =>
            n.createElement(
              Oo.A,
              { onClose: l, visible: e },
              n.createElement(
                Oo.A.Overlay,
                { zIndex: 800 },
                n.createElement(
                  Oo.A.Window,
                  { p: "24px 104px 32px 104px" },
                  n.createElement(Ko, {
                    limitContext: a,
                    gaContext: r,
                    planType: t,
                    onCancel: o,
                    onClose: l,
                  })
                )
              )
            );
        Bo.propTypes = {
          visible: v().bool,
          onClose: v().func,
          onCancel: v().func,
          planType: v().oneOf(i.USER_ROLES.getList()),
          limitContext: v().string,
          gaContext: v().string,
        };
        const Jo = Bo,
          Wo = {
            historical_panel: "HD panel",
            historical: "HD",
            filters: "filter",
            filter_panel: "filter panel",
            export: "export",
            sorting: "sorting",
            table: "table",
            table_tiny: "table_tiny",
            pla: "pla",
          },
          Go = (e = "", t, a, r) => {
            let n = e;
            const l = t || a,
              o = Io?.[r] ?? "Payment",
              i = Wo?.[l] ?? "Unknown context";
            "filter" === i && (n = "view available data"),
              f({ action: o, label: `${i} - ${n}` });
          },
          Yo = ({
            requiredPlan: e = i.USER_ROLES.pro,
            limitContext: t = "",
            gaContext: a = "",
            onCancelClick: r = () => {},
            children: l,
          }) => {
            const { isHistoryAllowed: o, userRole: s } = ot(),
              [c, d] = (0, n.useState)(!1),
              p = (0, n.useCallback)(
                ({ closeByMainAction: e } = {}, r) => {
                  r?.stopPropagation(),
                    r?.preventDefault(),
                    e || Go("not now", a, t, s),
                    d(!1);
                },
                [d, s, a, t]
              ),
              u = (0, n.useCallback)(
                (e) => {
                  e?.stopPropagation(), e?.preventDefault(), d(!0);
                },
                [d]
              ),
              m = (0, n.useCallback)(
                (e) => {
                  (" " !== e.key && "Enter" !== e.key) || u(e);
                },
                [u]
              ),
              y = (0, n.useCallback)(() => {
                Go("not now", a, t, s), d(!1), r();
              }, [s, a, t, r]);
            let g;
            if (
              ((g = "historical" === t ? !o : i.USER_ROLES.isLowPlan(s, e)),
              "function" == typeof l)
            )
              return n.createElement(
                n.Fragment,
                null,
                l({ isFeatureLimited: g, openModal: u }),
                n.createElement(Jo, {
                  visible: c,
                  onClose: p,
                  onCancel: y,
                  userRole: s,
                  planType: e,
                  limitContext: t,
                  gaContext: a,
                })
              );
            if (!g) return l;
            const b = n.Children.map(l, (e) =>
              n.cloneElement(e, { featureIsLimited: !0, openModal: u })
            );
            return n.createElement(
              jt.A,
              { wMin: 0 },
              n.createElement(
                jt.A,
                {
                  onClickCapture: u,
                  onKeyDownCapture: m,
                  "aria-haspopup": "dialog",
                },
                b
              ),
              n.createElement(Jo, {
                visible: c,
                onClose: p,
                onCancel: y,
                userRole: s,
                planType: e,
                limitContext: t,
                gaContext: a,
              })
            );
          };
        Yo.propTypes = {
          requiredPlan: v().string,
          children: v().oneOfType([v().node, v().func]).isRequired,
          limitContext: v().string,
          gaContext: v().string,
          onCancelClick: v().func,
        };
        const Ho = Yo,
          Qo = i.USER_ROLES.pro,
          Zo = () => {
            const {
                db: e,
                date: t,
                dateType: a,
                device: r,
                filter: l,
                sortField: i,
                sortDirection: s,
                type: c,
                page: d,
                targets: p,
              } = (0, o.d4)(Yl),
              u = (0, o.d4)(Ua);
            if (!p || 0 === p.length) return null;
            const m =
              ((y = {
                type: "dpa_keyword_gap",
                kg_competitors: p,
                device_type: r,
                database: (0, kt.Z0)(e, r),
                database_date:
                  a === $t.J5.daily
                    ? t
                    : t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1$2"),
                currency: u,
                keywords_type: c,
                kg_display_filter: l,
                positions_filter: l,
                display_page: Number.parseInt(d, 10),
                kg_display_sort: [i, s],
                show_description: "on",
                report_subtitle: p,
              }),
              Object.entries(y)
                .map((e) =>
                  Reflect.has(So, e[0]) ? [e[0], So[e[0]](e[1])] : [e[0], e[1]]
                )
                .reduce((e, t) => ((e[t[0]] = t[1]), e), {}));
            var y;
            return n.createElement(
              Ho,
              { limitContext: "export", requiredPlan: Qo },
              n.createElement(Lo, { options: m })
            );
          };
        var Xo = a(43211);
        const ei = "Report",
          ti = () => f({ action: ei, label: "show DB" }),
          ai = (e) => f({ action: ei, label: `select DB - ${e}` }),
          ri = () => ({ gaVisibleChange: ti, gaChangeDb: ai }),
          ni = () => {
            const e = (0, o.wA)(),
              { gaVisibleChange: t, gaChangeDb: a } = ri(),
              { formatMessage: r } = (0, de.A)(),
              l = (0, o.d4)(Ea),
              i = (0, o.d4)(We.Lf),
              s = (0, o.d4)(va),
              c = (0, o.d4)(_a) || [],
              d = (0, o.d4)(Pa) || [],
              p = Ha(d, 1),
              u = (0, n.useCallback)((e) => {
                e && t();
              }, []),
              m = !l && s;
            return n.createElement(
              ce.A,
              { "aria-label": r({ id: "ariaLabel.selectCountry" }) },
              n.createElement(
                er(),
                {
                  topDatabases: c,
                  restDatabases: p,
                  selectedDatabase: i,
                  hasError: m,
                  loading: l,
                  onChange: (t) => e(Bt(t)),
                  onVisibleChange: u,
                  selectDbGa: a,
                  showCounters: !1,
                  tag: Xo.A,
                },
                i
                  ? n.createElement(
                      n.Fragment,
                      null,
                      n.createElement(
                        Xo.A.Addon,
                        null,
                        n.createElement(ar(), { db: i })
                      ),
                      n.createElement(
                        Xo.A.Text,
                        null,
                        n.createElement(rr.DbTitle, { db: i })
                      )
                    )
                  : null
              )
            );
          };
        var li = a(55910),
          oi = a.n(li);
        const ii = () =>
            n.createElement(
              jt.A,
              null,
              n.createElement(
                nr.A,
                { color: "gray-500", size: 200 },
                n.createElement(qt.A, { id: "message.n_a" })
              )
            ),
          si = n.memo(ii),
          ci = () =>
            n.createElement(
              jt.A,
              { w: 40 },
              n.createElement(
                or.A,
                { height: 8 },
                n.createElement(or.A.Text, { y: "0", width: "100%" })
              )
            ),
          di = "Report",
          pi = () => {
            const e = (0, o.wA)(),
              t = (() => {
                const { formatMessage: e } = (0, de.A)(),
                  t = (0, o.d4)(Ma);
                return (0, n.useMemo)(
                  () =>
                    t.map((t) => ({
                      value: t,
                      label: e({ id: `device.${$t.W.ToString(t)}` }),
                    })),
                  [t, e]
                );
              })(),
              a = (0, o.d4)(We.Pf),
              r = (0, o.d4)(Ea),
              l = (0, o.d4)(va),
              i = !r && l,
              s = (0, n.useCallback)(
                (t) => {
                  e(Jt(t)),
                    ((e) => {
                      f({ action: di, label: "device", value: e });
                    })($t.W.ToString(t.value));
                },
                [e]
              ),
              c = (0, n.useCallback)((e) => {
                e && f({ action: di, label: "device", value: "show" });
              }, []);
            return r
              ? n.createElement(ci, null)
              : i
              ? n.createElement(si, null)
              : n.createElement(oi(), {
                  devices: t,
                  selectedDevice: a,
                  onChange: s,
                  onVisibleChange: c,
                  tag: Xo.A,
                });
          };
        var ui = a(65124),
          mi = a.n(ui);
        const yi = {
            historical_panel: "HD panel",
            historical: "HD",
            filter: "filter",
            filter_panel: "filter panel",
            export: "export panel",
            export_panel: "export panel",
            sorting: "sorting",
            table: "table",
            table_tiny: "table_tiny",
            pla: "pla",
          },
          gi = ({
            visible: e,
            limitContext: t,
            requiredPlan: a,
            onClose: r,
            gaContext: l,
          }) => {
            const o = _.A.productGroup,
              [i, s] = (0, n.useState)(e);
            (0, n.useEffect)(() => {
              s(e);
            }, [e]);
            const c = ({ closeByMainAction: e } = {}) => {
              r(!1),
                e ||
                  f({
                    action: void 0 !== Io[o] ? Io[o] : "Payment",
                    label: `${
                      void 0 !== yi[l] ? yi[l] : "Unknown context"
                    } - not now`,
                    addReportName: !0,
                  });
            };
            return n.createElement(Jo, {
              visible: i,
              onClose: c,
              onCancel: c,
              userRole: o,
              planType: a,
              limitContext: t,
              gaContext: l,
            });
          },
          bi = (e, t, a) => {
            const { isHistoryAllowed: r } = ot();
            let l = !1;
            return (
              (l = "historical" === e ? !r : _.A.isLowPlan(t)),
              {
                isLimited: l,
                openLimitPopup: () => {
                  console.log("openLimitPopup");
                },
                RenderModal: ({ visible: r, onClose: l }) =>
                  n.createElement(gi, {
                    visible: r,
                    onClose: l,
                    limitContext: e,
                    requiredPlan: t,
                    gaContext: a,
                  }),
              }
            );
          },
          hi = i.USER_ROLES.guru,
          fi = "historical",
          Ei = "Report",
          vi = () => {
            const e = (0, o.wA)(),
              t = (0, o.d4)(ha),
              a = (0, o.d4)(fa),
              r = t || a,
              l = (0, o.d4)(va),
              i = !r && l,
              s = (0, o.d4)(We.pp),
              c = (0, o.d4)(We.Lk),
              d = (0, o.d4)(Ia),
              {
                isLimited: p,
                onLimited: u,
                RenderLimitedModal: m,
              } = (() => {
                const [e, t] = (0, n.useState)(!1),
                  {
                    isLimited: a,
                    openLimitPopup: r,
                    RenderModal: l,
                  } = bi("historical", hi, "historical_panel");
                return {
                  isLimited: a,
                  onLimited: () => {
                    r(), t(!0);
                  },
                  RenderLimitedModal: () =>
                    n.createElement(l, {
                      visible: e,
                      onClose: () => t(!1),
                      gaContext: fi,
                    }),
                };
              })(),
              y = (0, n.useCallback)(
                (t) => {
                  e(Wt(t.date, t.dateType, t.dateType === $t.J5.daily));
                },
                [e]
              ),
              g = (0, n.useCallback)(
                (e) => {
                  y(e),
                    ((e) => {
                      f({
                        action: Ei,
                        label: "historical data",
                        value:
                          1 === e.dateType ? `select HD - ${e.date}` : "LD",
                      });
                    })(e);
                },
                [y]
              );
            return i
              ? n.createElement(si, null)
              : n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(mi(), {
                    selectedDate: { date: s, dateType: c },
                    dates: d,
                    lodaing: r,
                    onChange: p ? u : g,
                    onVisibleChange: (e) => {
                      e &&
                        f({
                          action: Ei,
                          label: "historical data",
                          value: "show",
                        });
                    },
                  }),
                  n.createElement(m, null)
                );
          };
        var wi = a(61325),
          Ti = a.n(wi);
        const ki = () => {
          const e = (0, o.wA)(),
            t = (() => {
              const e = (0, o.d4)(ba),
                t = (0, o.d4)(ga);
              return e || t;
            })(),
            a = (0, o.d4)(Na),
            r = (() => {
              const e = (0, o.d4)(Na),
                t = (0, o.d4)(We.Ke),
                a = ((e) =>
                  e.reduce(
                    (e, t) => ((e["usd" === t ? "default" : "local"] = t), e),
                    {}
                  ))(e);
              return a[t];
            })(),
            l = (0, n.useCallback)((t) => e(ea(t)), [e]);
          return n.createElement(Ti(), {
            currencies: a,
            selectedCurrency: r,
            onChange: l,
            loading: t,
          });
        };
        var Ai = a(2094);
        const Ci = (e) => () =>
            f({
              category: "keyword-gap:header",
              action: "click:breadcrumbs",
              label: `${e}:open`,
            }),
          Si = {
            organic: "/analytics/organic/",
            backlinks: "/analytics/backlinks/",
            overview: "/analytics/overview/",
            da: "/analytics/da/",
          },
          xi = () => {
            const { locale: e } = (0, de.A)(),
              t = (() => {
                const {
                    db: e,
                    currency: t,
                    device: a,
                    date: r,
                    dateType: n,
                  } = (0, o.d4)(We.eF),
                  { searchItem: l, searchType: i } = (0, o.d4)(ol.qG);
                return (({
                  db: e,
                  device: t,
                  currency: a,
                  date: r,
                  dateType: n,
                  searchItem: l,
                  searchType: o,
                }) => {
                  const i = {
                    db: e,
                    device: $t.W.ToString(t),
                    currency: a,
                    date: n === $t.J5.monthly ? r.slice(0, 6) : "",
                    searchType: o,
                  };
                  return [Si.overview, xt({ ...i, q: l })].join("?");
                })({
                  searchItem: l,
                  searchType: i,
                  db: e,
                  device: a,
                  currency: t,
                  date: r,
                  dateType: n,
                });
              })();
            return n.createElement(
              Ai.A,
              { tag: "nav", locale: e, "data-at": "breadcrumbs" },
              n.createElement(
                Ai.A.Item,
                { onClick: Ci("projects"), href: "/projects/" },
                n.createElement(qt.A, { id: "page.breadcrumbs.projects" })
              ),
              n.createElement(
                Ai.A.Item,
                {
                  onClick: Ci("domain-overview"),
                  href: t || "/analytics/overview/",
                },
                n.createElement(qt.A, {
                  id: "page.breadcrumbs.domain_overview",
                })
              ),
              n.createElement(
                Ai.A.Item,
                { active: !0 },
                n.createElement(qt.A, { id: "page.breadcrumbs.keyword_gap" })
              )
            );
          },
          Ri = n.memo(xi);
        var Li = a(22007),
          Oi = a.n(Li);
        const _i = ({ experimentName: e = "" }) => {
          const { searchItem: t, db: a, date: r, device: l } = (0, o.d4)(We.eF),
            [i, s] = (0, n.useState)("default"),
            [c, d] = (0, n.useState)({
              description: "",
              email: _.A.email || "",
            });
          return n.createElement(Oi(), {
            email: c.email,
            status: i,
            onSubmit: async (n) => {
              s("loading");
              try {
                const o = await (({
                  text: e,
                  section: t,
                  email: a,
                  id: r,
                  isPaid: n,
                  emailReplyTo: l,
                  database: o,
                  date: i,
                  query: s,
                  URL: c,
                }) =>
                  fetch(p().feedbackBackendUrl, {
                    method: "post",
                    body: JSON.stringify({
                      isGuest: !r,
                      email: a,
                      id: r,
                      message: e,
                      c: t,
                      isPaid: n,
                      emailReplyTo: l,
                      database: o,
                      date: i,
                      query: s,
                      URL: c,
                    }),
                  }))({
                  text: `${n.feedback}\nURL: ${window.location.href}`,
                  section: "keyword_gap:spa",
                  email: _.A.email,
                  id: _.A.id,
                  isPaid: _.A.isPaid ? "yes" : "no",
                  emailReplyTo: n.email,
                  database: (0, kt.Z0)(a, l),
                  experimentName: e,
                  date: r,
                  query: t,
                });
                o.ok ? s("success") : s("failed");
              } catch (e) {
                console.warn(e), s("failed");
              }
            },
            onChange: (e, t) => d({ ...c, [t]: e }),
            onVisibleChange: (e) => {
              e || "success" !== i || s("default");
            },
            ga: f,
            "data-at": "feedback",
            showBetaTesterButton: !0,
            source: "kg",
          });
        };
        _i.propTypes = { experimentName: v().string };
        const Pi = n.memo(_i);
        var Ii = a(97067),
          Mi = a(70853);
        const Di = () => {
            f({
              action: "Report",
              label: "tutorial",
              value: "user manual link - Report",
            });
          },
          Fi = () =>
            n.createElement(
              Ii.A,
              {
                href: "/kb/28-keyword-gap",
                onClick: Di,
                target: "_blank",
                "data-at": "user-manual",
              },
              n.createElement(Ii.A.Addon, { tag: Mi.A }),
              n.createElement(
                Ii.A.Text,
                null,
                n.createElement(qt.A, { id: "header.userManual" })
              )
            ),
          ji = n.memo(Fi),
          qi = () => {
            const { formatMessage: e } = (0, de.A)();
            return n.createElement(po(), {
              toolName: e({ id: "reportTitle.keywordGap" }),
              breadcrumbs: n.createElement(Ri, null),
              links: [
                n.createElement(ji, { key: "user-manual" }),
                n.createElement(Pi, { key: "feedback" }),
              ],
              pdfButton: n.createElement(Zo, null),
              databaseSelector: n.createElement(ni, null),
              deviceSelector: n.createElement(pi, null),
              dateSelector: n.createElement(vi, null),
              currencySelector: n.createElement(ki, null),
              databaseLabel: e({ id: "header.database" }),
              deviceLabel: e({ id: "header.device" }),
              dateLabel: e({ id: "header.date" }),
              currencyLabel: e({ id: "header.currency" }),
              useSearchItem: !1,
              "aria-label": e({ id: "ariaLabel.kgHeader" }),
              tag: "section",
            });
          },
          Ni = n.memo(qi);
        var Ui = a(57229);
        const $i = ({ searchItem: e }) => "" !== e,
          Vi = () =>
            [...new Array(5)].fill({
              searchItem: "",
              searchType: "domain",
              keywordType: "organic",
            }),
          zi = () => {
            const { gaAction: e } = (0, n.useContext)(be),
              t = (0, n.useCallback)(
                () => f({ action: e, label: "click to Cancel" }),
                [e]
              ),
              a = (0, n.useCallback)(
                (t, a) =>
                  f({
                    action: e,
                    label: `Select keyword type for domain ${a + 1}`,
                    value: "adwords" === t ? "paid" : t,
                  }),
                [e]
              ),
              r = (0, n.useCallback)(
                (t) =>
                  f({ action: e, label: "delete filled domain", value: t + 1 }),
                [e]
              ),
              l = (0, n.useCallback)(
                (t) =>
                  f({
                    action: e,
                    label: "domain validation error",
                    value: t + 1,
                  }),
                [e]
              ),
              o = (0, n.useCallback)(
                (t, a, r) =>
                  f({
                    action: e,
                    label: "change search type manually",
                    value: `${t} - ${a} - ${r}`,
                  }),
                [e]
              ),
              i = (0, n.useCallback)(
                (t) =>
                  f({
                    action: e,
                    label: "click to search type selector",
                    value: t,
                  }),
                [e]
              ),
              s = (0, n.useCallback)(
                (t) =>
                  f({
                    action: e,
                    label: `Ð¡lick to ${
                      "simple" === t ? "mixed" : "single"
                    } keyword type`,
                  }),
                [e]
              );
            return (0, n.useMemo)(
              () => ({
                gaCancelClick: t,
                gaClickKeywordType: a,
                gaClickClose: r,
                gaValidationError: l,
                gaChangeSearchType: o,
                gaOpenSearchType: i,
                gaModeChange: s,
              }),
              [t, a, r, l, o, i, s]
            );
          },
          Ki = "Report";
        var Bi = a(75059);
        const Ji = "pla",
          Wi = i.USER_ROLES.business,
          Gi = ({ value: e = "organic", onTypeClick: t = () => {} }) => {
            const { formatMessage: a } = (0, de.A)(),
              r = ot(),
              [l, o] = (0, n.useState)(!1),
              { RenderModal: i } = bi(Ji, Wi, Ji);
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                Bi.A,
                {
                  onChange: (e) => {
                    pn.has(e) && pn.get(e)(r)
                      ? o(!0)
                      : (((e) => {
                          f({
                            action: Ki,
                            label: "change keyword type by pills",
                            value: "adwords" === e ? "paid" : e,
                          });
                        })(e),
                        t(e));
                  },
                  value: e,
                  "data-at": "simple-keyword-types",
                  "aria-label": a({ id: "ariaLabel.form.keywordType.simple" }),
                },
                me.CT.map((e) =>
                  n.createElement(
                    Bi.A.Item,
                    { key: e, value: e, "data-at": `pill-${e}` },
                    n.createElement(
                      Bi.A.Item.Text,
                      null,
                      n.createElement(qt.A, { id: `keywordTypes.${e}Pills` })
                    )
                  )
                )
              ),
              n.createElement(i, {
                visible: l,
                onClose: () => o(!1),
                gaContext: Ji,
              })
            );
          };
        Gi.propTypes = { value: v().oneOf([...me.CT]), onTypeClick: v().func };
        const Yi = n.memo(Gi);
        var Hi = a(92485);
        function Qi() {
          return (
            (Qi = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Qi.apply(null, arguments)
          );
        }
        const Zi = ({ ...e }) => {
            const t = (0, o.wA)(),
              a = (0, o.d4)(sl),
              { gaModeChange: r } = zi(),
              l = () => {
                t(jn(a === me.vV.simple ? me.vV.advanced : me.vV.simple)), r(a);
              };
            return n.createElement(
              Hi.A,
              Qi(
                {
                  size: 200,
                  onClick: l,
                  onKeyUp: (e) => {
                    "Enter" === e.key && l();
                  },
                  "data-at": `mode-switcher to-mode-${a}`,
                  role: "button",
                  "aria-expanded": a === me.vV.advanced,
                },
                e
              ),
              n.createElement(
                Hi.A.Text,
                null,
                n.createElement(qt.A, {
                  id: `panel.select${
                    a === me.vV.simple ? "Multiple" : "Single"
                  }KwType`,
                })
              )
            );
          },
          Xi = ({ targets: e = [], onClick: t = () => {} }) => {
            const a = _e(e),
              { gaCancelClick: r } = zi();
            return a
              ? n.createElement(
                  jt.A,
                  { ml: 2 },
                  n.createElement(
                    Nt.A,
                    {
                      w: "100%",
                      use: "secondary",
                      onClick: () => {
                        r(), jn(me.vV.simple), t();
                      },
                      "data-at": "cancel-btn",
                    },
                    n.createElement(qt.A, { id: "buttons.cancel" })
                  )
                )
              : null;
          };
        Xi.propTypes = { onClick: v().func, targets: v().array };
        const es = n.memo(Xi);
        var ts = a(34164);
        const as = ({ onClick: e = () => {} }) =>
          n.createElement(
            Nt.A,
            {
              theme: "success",
              use: "primary",
              onClick: e,
              w: "50%",
              ml: 2,
              "data-at": "compare-btn",
              wMin: 0,
            },
            n.createElement(
              Nt.A.Text,
              { tag: ts.A },
              n.createElement(qt.A, { id: "buttons.compare" })
            )
          );
        as.propTypes = { onClick: v().func };
        const rs = as,
          ns = (0, se.default)(jt.A)`
  width: 100%;
  display: grid;
  column-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(102px, 1fr));
`,
          ls = ({ index: e, inactive: t = !1, isMain: a = !1 }) =>
            t
              ? n.createElement(Wr, {
                  radius: 12,
                  inactive: t,
                  "data-at": "competitor-circle comp-circle-inactive",
                })
              : a
              ? n.createElement(zr, null)
              : n.createElement(Wr, {
                  radius: 12,
                  color: Yr(e),
                  "data-at": `competitor-circle comp-circle-${e}`,
                });
        ls.propTypes = {
          inactive: v().bool,
          isMain: v().bool,
          index: v().number.isRequired,
        };
        const os = n.memo(ls),
          is = ({
            triggerRef: e,
            hasError: t = !1,
            errorType: a = "",
            errorTooltipId: r = null,
            children: l = null,
          }) => {
            const o = t,
              { formatMessage: i } = (0, de.A)();
            return n.createElement(
              Mr.Ay,
              { theme: "warning", visible: o, inline: !1 },
              n.createElement(
                Mr.Ay.Trigger,
                { w: "100%" },
                n.createElement(
                  Ir.A,
                  { size: "m", ref: e, state: t ? "invalid" : "normal" },
                  l
                )
              ),
              n.createElement(
                Mr.Ay.Popper,
                { id: r, "aria-label": a ? i({ id: `form.errors.${a}` }) : "" },
                a &&
                  n.createElement(
                    "span",
                    null,
                    n.createElement(qt.A, { id: `ariaLabel.errors.${a}` })
                  )
              )
            );
          };
        is.propTypes = {
          triggerRef: v().oneOfType([
            v().func,
            v().shape({ current: v().instanceOf(Element) }),
          ]).isRequired,
          children: v().node,
          hasError: v().bool,
          errorType: v().string,
          errorTooltipId: v().string,
        };
        const ss = n.memo(is),
          cs = ({
            searchItem: e = "",
            isMain: t = !1,
            hasError: a = !1,
            selected: r = !1,
            index: l = 0,
            errorType: o = "",
            onChange: i = () => {},
            onSubmit: s = () => {},
            getTriggerProps: c = () => {},
            resetSelectedStatus: d = () => {},
          }) => {
            const { formatMessage: p } = (0, de.A)(),
              u = (0, n.useRef)(),
              { gaClickClose: m, gaValidationError: y } = zi(),
              [g, b] = (0, n.useState)(!0),
              [h, f] = (0, n.useState)(e),
              [E, v] = (0, n.useState)(!1),
              w = (0, n.useId)(),
              T = (0, n.useCallback)(
                (e) => {
                  e && !Oe(e) ? (v("domainErr"), y(l)) : v("");
                },
                [l, y]
              );
            (0, n.useEffect)(() => {
              t && 0 === e.length && u.current.focus();
            }, [t, e.length]),
              (0, n.useEffect)(() => {
                f(e), e.length > 0 && (b(!1), T(e));
              }, [e, T]);
            const k = () => {
                b(!1), d();
              },
              A = () => {
                0 === h.length && (b(!0), v("")), e !== h && (T(h), i(h, l));
              },
              { ref: C } = c({ onBlur: A, onFocus: k });
            return n.createElement(
              ss,
              {
                hasError: E || a,
                errorType: E || o,
                triggerRef: C,
                errorTooltipId: w,
              },
              n.createElement(
                Ir.A.Addon,
                null,
                n.createElement(os, { inactive: g, isMain: t, index: l })
              ),
              n.createElement(Ir.A.Value, {
                onChange: (e) => f(e),
                onFocus: k,
                onBlur: A,
                onKeyUp: (e) => {
                  e.nativeEvent.stopImmediatePropagation(),
                    "Enter" === e.key && (r ? d() : (A(), s()));
                },
                value: h,
                ref: u,
                placeholder: p({
                  id: "panel.add" + (t ? "Domain" : "Competitor"),
                }),
                "aria-label": p({ id: "ariaLabel.enterUrl" }),
                "aria-describedby": a ? w : void 0,
                "data-at": "competitor-value",
              }),
              h.length > 0 &&
                n.createElement(Ir.A.Addon, {
                  tag: Nr.A,
                  interactive: !0,
                  onClick: () => {
                    f(""), v(""), i("", l), m(l);
                  },
                  "data-at": "clear-competitor",
                  "aria-label": p({ id: "ariaLabel.clearInput" }),
                })
            );
          };
        cs.propTypes = {
          searchItem: v().string,
          onChange: v().func,
          onSubmit: v().func,
          isMain: v().bool,
          index: v().oneOf([0, 1, 2, 3, 4]),
          getTriggerProps: v().func,
          hasError: v().bool,
          errorType: v().oneOfType([v().string, v().bool]),
          selected: v().bool,
          resetSelectedStatus: v().func,
        };
        const ds = n.memo(cs),
          ps = (0, se.default)(Qa.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          us = (0, se.default)(jt.A)`
  cursor: default;
  pointer-events: none;
  padding: 6px 8px;
`,
          ms = ({
            children: e,
            suggestions: t = [],
            index: a = 0,
            onChange: r = () => {},
          }) => {
            const [l, o] = (0, n.useState)(!1),
              i = () => {
                o(!1);
              };
            return n.createElement(
              Qa.Ay,
              {
                interaction: "focus",
                onChange: (e) => {
                  o(!0), r(e, a);
                },
                value: null,
              },
              n.createElement(
                Qa.Ay.Trigger,
                {
                  w: "100%",
                  tag: "div",
                  "data-at": "competitor-input-trigger",
                },
                ({ getTriggerProps: t }) =>
                  n.cloneElement(e, {
                    getTriggerProps: t,
                    index: a,
                    onChange: r,
                    selected: l,
                    resetSelectedStatus: i,
                  })
              ),
              t.length > 0 &&
                n.createElement(
                  ps,
                  { "data-at": "competitors-list-suggest-dd" },
                  n.createElement(
                    us,
                    null,
                    n.createElement(
                      nr.A,
                      {
                        color: "gray-800",
                        bold: !0,
                        size: 200,
                        "data-at": "menu-title",
                      },
                      n.createElement(qt.A, {
                        id: "targets.suggestCompetitors.header",
                      })
                    )
                  ),
                  t.map((e) =>
                    n.createElement(
                      Qa.Ay.Option,
                      {
                        value: e,
                        key: e,
                        direction: "row",
                        flexWrap: !0,
                        "data-at": "option",
                      },
                      Ct(e)
                    )
                  )
                )
            );
          };
        ms.propTypes = {
          suggestions: v().array,
          index: v().oneOf([0, 1, 2, 3, 4]),
          onChange: v().func,
          children: v().element.isRequired,
        };
        const ys = ms,
          gs = ({
            domain: e,
            suggestions: t,
            errorIndex: a,
            index: r,
            errorType: l = null,
            onChangeSearchItem: o = () => {},
            onClickSearchItem: i = () => {},
            onSubmitSearchItem: s = () => {},
          }) =>
            n.createElement(
              ys,
              { suggestions: t, index: r, onChange: o },
              n.createElement(ds, {
                isMain: 0 === r,
                searchItem: Ct(e),
                index: r,
                hasError: !!l && a === r,
                errorType: l,
                onChange: o,
                onSubmit: s,
                onClick: i,
              })
            );
        gs.propTypes = {
          domain: v().string.isRequired,
          suggestions: v().array.isRequired,
          onChangeSearchItem: v().func,
          onClickSearchItem: v().func,
          onSubmitSearchItem: v().func,
          errorType: v().oneOfType([v().string, v().bool]),
          errorIndex: v().number.isRequired,
          index: v().number.isRequired,
        };
        const bs = n.memo(gs),
          hs = (0, se.default)(Qa.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          fs = me.vM.map((e) => ({ value: e, children: e })),
          Es = ({
            selectedValue: e = me.vM[0],
            defaultValue: t = me.vM[0],
            index: a = 0,
            view: r = "link",
            onChange: l = () => {},
          }) => {
            const { formatMessage: o } = (0, de.A)(),
              { gaChangeSearchType: i, gaOpenSearchType: s } = zi();
            return n.createElement(
              Qa.Ay,
              {
                size: "m",
                onChange: (t) => {
                  l(t, a), i(e, t, a + 1);
                },
                stretch: !1,
                value: e,
                onVisibleChange: (e) => {
                  e && s(a + 1);
                },
                "data-at": "search-type-select",
              },
              n.createElement(
                Qa.Ay.Trigger,
                {
                  color: "gray-800",
                  w: "100%",
                  tag: "link" === r ? Xo.A : Za.A,
                  "data-at": "search-type-trigger",
                  inline: !1,
                  "aria-label": o({ id: "ariaLabel.form.selectScope" }),
                },
                n.createElement(
                  Qa.Ay.Trigger.Text,
                  null,
                  n.createElement(qt.A, {
                    id: `searchTypes.${e.length ? e : t}Type`,
                  })
                )
              ),
              n.createElement(
                hs,
                { "data-at": "search-type-dd" },
                fs.map(({ value: e }) =>
                  n.createElement(
                    Qa.Ay.Option,
                    {
                      value: e,
                      key: e,
                      direction: "row",
                      flexWrap: !0,
                      "data-at": `option-${e}`,
                    },
                    n.createElement(qt.A, { id: `searchTypes.${e}Type` })
                  )
                )
              )
            );
          };
        Es.propTypes = {
          selectedValue: v().oneOf([...me.vM]),
          defaultValue: v().string,
          onChange: v().func,
          index: v().oneOf([0, 1, 2, 3, 4]),
          view: v().oneOf(["link", "btn"]),
        };
        const vs = n.memo(Es),
          ws = (0, se.default)(Qa.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          Ts = me.CT.map((e) => ({ value: e, label: e })),
          ks = ({
            selectedValue: e = me.CT[0],
            defaultValue: t = me.CT[0],
            isActive: a = !0,
            isFeatureLimited: r = !1,
            index: l = 0,
            openModal: o = () => {},
            onChange: i = () => {},
          }) => {
            const { formatMessage: s } = (0, de.A)(),
              { gaClickKeywordType: c } = zi(),
              d = ot();
            return n.createElement(
              Qa.Ay,
              {
                placeholder: s({ id: `keywordTypes.${t}Keywords` }),
                onChange: (e) => {
                  let t = !1;
                  pn.has(e) && (t = pn.get(e)(d)),
                    r && t ? o() : (c(e, l), i(e, l));
                },
                value: e,
                disabled: !a,
                size: "m",
                tag: Za.A,
                "data-at": "keyword-type-selector",
              },
              n.createElement(
                Qa.Ay.Trigger,
                {
                  w: "100%",
                  "data-at": "keyword-type-selector-trigger",
                  "aria-label": s({ id: "ariaLabel.form.keywordType.adv" }),
                },
                n.createElement(qt.A, { id: `keywordTypes.${e}Keywords` })
              ),
              n.createElement(
                ws,
                { "data-at": "keyword-type-selector-dd" },
                Ts.map(({ value: e }) =>
                  n.createElement(
                    Qa.Ay.Option,
                    {
                      value: e,
                      key: e,
                      direction: "row",
                      "data-at": `option-${e}`,
                      flexWrap: !0,
                    },
                    n.createElement(qt.A, { id: `keywordTypes.${e}Keywords` })
                  )
                )
              )
            );
          };
        ks.propTypes = {
          selectedValue: v().oneOf([...me.CT]),
          defaultValue: v().string,
          onChange: v().func,
          index: v().oneOf([0, 1, 2, 3, 4]),
          isFeatureLimited: v().bool,
          openModal: v().func,
          isActive: v().bool,
        };
        const As = n.memo(ks),
          Cs = "enterOne",
          Ss = ({ searchItem: e }) => !(0 === e.length || Oe(e)),
          xs = () => {
            const [e, t] = (0, n.useState)("");
            return {
              resetError: () => t(""),
              error: e,
              setError: t,
              validateTargets: (e) => {
                return (
                  !e.some(Ss) &&
                  (_e(e)
                    ? ((a = e),
                      (r = me.an),
                      Le(a) >= r || (t("enterCompetitor"), !1))
                    : (t(Cs), !1))
                );
                var a, r;
              },
              findErrorIndex: (t) =>
                e === Cs ? 0 : t.findIndex(({ searchItem: e }) => !e),
            };
          },
          Rs = ({
            targets: e,
            panelMode: t,
            onChangeSearchItem: a,
            onClickSearchItem: r,
            onSubmitSearchItem: l,
            onSearchTypeChange: o,
            onKeywordTypeChange: s,
            errorType: c = "",
            suggestions: d = [],
          }) => {
            const { findErrorIndex: p } = xs(),
              { formatMessage: u } = (0, de.A)(),
              m = e.filter($i).map(({ searchItem: e }) => e),
              y = ((g = d),
              (b = m),
              g?.filter((e) => !b.includes(e)) ?? []).slice(0, 4);
            var g, b;
            const h = p(e);
            return n.createElement(
              ns,
              { "data-at": "competitors-inputs" },
              e.map(
                ({ searchType: e, keywordType: d, searchItem: p = "" }, m) =>
                  n.createElement(
                    ce.A,
                    {
                      direction: "column",
                      rowGap: 2,
                      key: m,
                      role: "group",
                      "data-at": "competitor-form",
                      "aria-label": u(
                        {
                          id:
                            "ariaLabel.targets." +
                            (0 === m ? "yourDomain" : "competitor"),
                        },
                        { NUM: m }
                      ),
                    },
                    n.createElement(vs, {
                      index: m,
                      selectedValue: e,
                      onChange: o,
                    }),
                    n.createElement(bs, {
                      index: m,
                      domain: p,
                      errorType: c,
                      errorIndex: h,
                      suggestions: y,
                      onChangeSearchItem: a,
                      onClickSearchItem: r,
                      onSubmitSearchItem: l,
                    }),
                    t === me.vV.advanced &&
                      n.createElement(
                        Ho,
                        {
                          requiredPlan: i.USER_ROLES.business,
                          limitContext: "pla",
                        },
                        ({ isFeatureLimited: e, openModal: t }) =>
                          n.createElement(As, {
                            index: m,
                            isActive: void 0 !== p && p.length > 0,
                            selectedValue: d,
                            onChange: s,
                            isFeatureLimited: e,
                            openModal: t,
                          })
                      )
                  )
              )
            );
          };
        Rs.propTypes = {
          targets: v().array.isRequired,
          suggestions: v().array,
          errorType: v().string,
          panelMode: v().oneOf([me.vV.simple, me.vV.advanced]).isRequired,
          onChangeSearchItem: v().func.isRequired,
          onClickSearchItem: v().func.isRequired,
          onSubmitSearchItem: v().func.isRequired,
          onSearchTypeChange: v().func.isRequired,
          onKeywordTypeChange: v().func.isRequired,
        };
        const Ls = Rs,
          Os = ({
            targets: e,
            suggestions: t,
            error: a,
            onTypeTabClick: r,
            onCancel: l,
            onCompareClick: i,
            onKeywordTypeChange: s,
            onSearchTypeChange: c,
            onSearchItemClick: d,
            onChangeSearchItem: p,
          }) => {
            const u = (0, o.d4)(cl),
              [m, y] = (0, n.useState)(u),
              g = (0, o.d4)(sl),
              b = (0, n.useCallback)(
                (t) => {
                  t === me.vV.simple &&
                    y(((e) => (e[0] ? e[0].keywordType : "organic"))(e));
                },
                [e]
              ),
              h = () => {
                ((e) => {
                  const t = e.filter(({ searchItem: e }) => "" !== e),
                    a = t.map(({ searchType: e }) => e).join(" ");
                  f({
                    action: Ki,
                    label: "submit domains",
                    value: `${t.length} + ${a}`,
                  }),
                    f({ action: Ki, label: `Load - ${t.length}` });
                })(e),
                  i(m);
              };
            return n.createElement(
              ce.A,
              {
                wMin: 730,
                w: "100%",
                direction: "column",
                "data-at": "target-input",
              },
              n.createElement(
                "form",
                {
                  "aria-label": "Report setup",
                  onSubmit: (e) => {
                    e.preventDefault(), e.stopPropagation();
                  },
                },
                n.createElement(
                  ce.A,
                  null,
                  n.createElement(Ls, {
                    targets: e,
                    errorType: a,
                    suggestions: t,
                    panelMode: g,
                    onChangeSearchItem: p,
                    onClickSearchItem: d,
                    onSubmitSearchItem: h,
                    onSearchTypeChange: c,
                    onKeywordTypeChange: s,
                  }),
                  n.createElement(
                    ce.A,
                    { wMin: 180, pt: "26px", direction: "column" },
                    n.createElement(
                      ce.A,
                      null,
                      n.createElement(rs, { onClick: h }),
                      n.createElement(es, {
                        targets: e,
                        onClick: () => {
                          y("organic"), l();
                        },
                      })
                    ),
                    g === me.vV.advanced &&
                      n.createElement(
                        jt.A,
                        { pl: 2, pt: 3 },
                        n.createElement(Zi, { onChange: b })
                      )
                  )
                ),
                g === me.vV.simple &&
                  n.createElement(
                    ce.A,
                    { alignItems: "center", mt: 2, justifyContent: "left" },
                    n.createElement(Yi, {
                      value: m,
                      onTypeClick: (e) => {
                        y(e), r(e);
                      },
                    }),
                    n.createElement(
                      jt.A,
                      { pl: 2, wMin: 180, boxSizing: !0 },
                      n.createElement(Zi, { onChange: b })
                    )
                  )
              )
            );
          };
        Os.propTypes = {
          onCancel: v().func.isRequired,
          targets: v().array.isRequired,
          suggestions: v().array.isRequired,
          onTypeTabClick: v().func.isRequired,
          onCompareClick: v().func.isRequired,
          onKeywordTypeChange: v().func.isRequired,
          onSearchTypeChange: v().func.isRequired,
          onSearchItemClick: v().func.isRequired,
          onChangeSearchItem: v().func.isRequired,
          error: v().string.isRequired,
        };
        const _s = Os,
          Ps = () => {
            const e = (0, o.wA)(),
              { error: t, resetError: a, validateTargets: r } = xs(),
              l = (0, o.d4)(ol.N3),
              i = (0, o.d4)(sl),
              s = (0, o.d4)(We.Lf),
              c = (0, o.d4)(We.Pf),
              d = (0, o.d4)(We.dW),
              p = (0, n.useMemo)(() => s || d?.db, [s, d]),
              u = (0, n.useMemo)(() => c || d?.device, [c, d]),
              [m, y] = (0, n.useState)([]),
              [g, b] = (0, n.useState)(l.length ? l : Vi());
            (0, n.useEffect)(() => b(l), [l]);
            const h = (0, n.useMemo)(() => {
                const e = g.filter($i);
                if (0 !== e.length) return e[0].searchItem;
              }, [g]),
              E = (0, n.useCallback)(async () => {
                if (null == p) return;
                const e = { db: p, device: u, searchItem: St(h) },
                  t = Ui.requestIdStore.getRequestId(e),
                  a = await ht({ ...e, requestId: t });
                y(a);
              }, [p, u, h]);
            (0, n.useEffect)(() => {
              ((e) => {
                const t = e.filter((e) => "" !== e.searchItem);
                f({ action: Ki, label: `Load - ${t.length}` });
              })(g);
            }, [s, c, h]),
              (0, n.useEffect)(() => {
                E();
              }, [E]);
            const v = () => y([]),
              w = (0, n.useCallback)(
                (e, t, a) => {
                  const r = g;
                  (r[a] = { ...r[a], [e]: St(t.trim()) }),
                    b([...r]),
                    0 === r.filter($i).length && v();
                },
                [g]
              ),
              T = (0, n.useCallback)(
                (t) => {
                  if (!r(g)) return;
                  let a = g.map((e) => ({
                    ...e,
                    keywordType: i === me.vV.simple ? t : e.keywordType,
                  }));
                  (a = a.sort((e, t) => (t.searchItem.length ? 1 : -1))),
                    b([...a]),
                    e(qn(t)),
                    e(Kn([...a]));
                },
                [g, i, e, r]
              ),
              k = (0, n.useCallback)((e, t) => w("searchType", e, t), [w]),
              A = (0, n.useCallback)(
                (e, t) => {
                  a(),
                    w("searchItem", e, t),
                    w("searchType", je(e), t),
                    0 === t && E();
                },
                [a, w, E]
              ),
              C = (0, n.useCallback)(
                (e, t) => {
                  w("keywordType", e, t);
                },
                [w]
              ),
              S = (0, n.useCallback)(() => {
                b(Vi()), v();
              }, []);
            return n.createElement(_s, {
              targets: g,
              suggestions: m,
              error: t,
              onCancel: S,
              onTypeTabClick: T,
              onCompareClick: T,
              onKeywordTypeChange: C,
              onSearchTypeChange: k,
              onSearchItemClick: a,
              onChangeSearchItem: A,
            });
          },
          Is = n.memo(Ps);
        var Ms = a(11608),
          Ds = a(96443);
        function Fs() {
          return (
            (Fs = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Fs.apply(null, arguments)
          );
        }
        const js = ({ style: e = {}, children: t = null, ...a }) =>
          n.createElement(
            Ds.A,
            Fs({ boxSizing: "border-box", p: 0, style: e, tag: "section" }, a),
            n.createElement(Ds.A.Body, { p: 0 }, t)
          );
        js.propTypes = {
          children: v().oneOfType([v().element, v().array]),
          style: v().object,
        };
        const qs = js;
        function Ns() {
          return (
            (Ns = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Ns.apply(null, arguments)
          );
        }
        const Us = ({ children: e = null, dividerProps: t = {}, ...a }) =>
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              ce.A,
              Ns(
                {
                  py: 2,
                  px: 5,
                  justifyContent: "space-between",
                  alignItems: "center",
                },
                a
              ),
              e
            ),
            n.createElement(Ut.A, Ns({ orientation: "horizontal", mb: 5 }, t))
          );
        Us.propTypes = { children: v().element, dividerProps: v().object };
        const $s = Us,
          Vs = "topOpportunities",
          zs = "keywordOverlapChart",
          Ks = "keywordsTable",
          Bs = () => {
            const e = (0, o.wA)(),
              t = (0, n.useCallback)((t) => e(Nn(t)), [e]);
            return t;
          };
        function Js() {
          return (
            (Js = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Js.apply(null, arguments)
          );
        }
        const Ws = ({
          value: e,
          types: t = [],
          onClick: a = () => {},
          ...r
        }) => {
          const { formatMessage: l } = (0, de.A)();
          return n.createElement(
            Bi.A,
            Js(
              {
                value: e,
                onChange: a,
                "data-at": "top-opp-type-switcher",
                "aria-label": l({ id: "ariaLabel.keywordType" }),
                "aria-controls": Vs,
              },
              r
            ),
            t.map((e) =>
              n.createElement(
                Bi.A.Item,
                {
                  value: e,
                  key: e,
                  "data-at": `top-opp-type-pill-${e}`,
                  tag: Mr.Ay,
                  timeout: $t.a4,
                  title: n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      nr.A,
                      { bold: !0 },
                      n.createElement(qt.A, { id: `keywords.${e}Keywords` })
                    ),
                    n.createElement(
                      jt.A,
                      { mt: 1 },
                      n.createElement(qt.A, { id: `keywords.${e}Tooltip` })
                    )
                  ),
                },
                n.createElement(qt.A, { id: `keywords.${e}` })
              )
            )
          );
        };
        Ws.propTypes = {
          value: v().string.isRequired,
          types: v().array,
          onClick: v().func,
        };
        const Gs = Ws;
        var Ys = a(25761),
          Hs = a(82152);
        function Qs() {
          return (
            (Qs = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Qs.apply(null, arguments)
          );
        }
        const Zs = ({ height: e = 8, width: t = "100%", ...a }) =>
          n.createElement(
            or.A,
            Qs({ height: e, width: t }, a),
            n.createElement(or.A.Text, { amount: 1, width: t })
          );
        Zs.propTypes = {
          height: v().number,
          width: v().oneOfType([v().string, v().number]),
        };
        const Xs = (0, n.memo)(Zs);
        function ec() {
          return (
            (ec = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ec.apply(null, arguments)
          );
        }
        const tc = ({
          keyword: e,
          db: t = "us",
          device: a = "desktop",
          date: r = null,
          dateType: l = 0,
          gaAction: o = "",
          currency: i = "usd",
          ...s
        }) => {
          const { formatMessage: c } = (0, de.A)(),
            d = (0, n.useCallback)(() => {
              o && f({ action: o, label: "click to keyword" });
            }, [o]),
            p = (({
              db: e,
              date: t,
              dateType: a,
              keyword: r,
              device: n,
              currency: l,
            }) => {
              const o = {
                db: e,
                currency: l,
                device: $t.W[n],
                date: a === $t.J5.monthly ? t.slice(0, 6) : "",
                q: encodeURIComponent(r),
              };
              return `/analytics/keywordoverview/?${xt(o)}`;
            })({
              db: t,
              date: r,
              dateType: l,
              device: a,
              keyword: e,
              currency: i,
            });
          return n.createElement(
            Ii.A,
            ec(
              {
                onClick: d,
                href: p,
                noWrap: !1,
                inline: !0,
                size: 200,
                "aria-label": c(
                  { id: "ariaLabel.keywordOverview.keywordLink" },
                  { KEYWORD: e }
                ),
              },
              s
            ),
            e
          );
        };
        tc.propTypes = {
          db: v().string,
          date: v().oneOfType([v().number, v().string]),
          dateType: v().number,
          device: v().oneOf(["desktop", "mobile"]),
          keyword: v().string.isRequired,
          gaAction: v().string,
          currency: v().string,
        };
        const ac = (0, o.Ng)((e) => {
          const {
            db: t,
            date: a,
            device: r,
            dateType: n,
            currency: l,
          } = (0, We.eF)(e);
          return {
            db: t,
            date: a,
            device: 0 === r ? "desktop" : 1 === r ? "mobile" : r,
            dateType: n,
            currency: l,
          };
        })(tc);
        var rc = a(15651),
          nc = a(40097),
          lc = a.n(nc);
        const oc = {
          informational: 0,
          navigational: 1,
          commercial: 2,
          transactional: 3,
        };
        function ic() {
          return (
            (ic = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ic.apply(null, arguments)
          );
        }
        const sc = ({
          positionRef: e = null,
          kd: t = null,
          intents: a = [],
          phrase: r,
          cpc: l,
          volume: i,
        }) => {
          (0, rc.setPosition)(e, 0);
          const { locale: s } = (0, de.A)(),
            {
              db: c,
              currency: d,
              device: p,
              date: u,
              dateType: m,
            } = (0, o.d4)(We.eF),
            y = (0, n.useMemo)(() => ((0, nc.isNAValue)(t) ? null : t), [t]),
            g = ((e) =>
              e.map((e) =>
                Number.isInteger(e) ? oc[yo.INTENT_IDS.getType(e)] : oc[e]
              ))(a),
            b = ((e, t) => (0, o.d4)((a) => $a(a, t, e)))(l, d);
          return n.createElement(
            ce.A,
            { inline: !0, "data-at": "mini-ko" },
            n.createElement(
              rc.make,
              ic(
                {
                  userId: _.A.id,
                  apiKey: _.A.apiKey,
                  language: s,
                  productGroup: _.A.productGroup.toLowerCase(),
                  phrase: r,
                  cpc: b,
                  volume: i,
                  kd: y,
                  intents: g,
                  database: (0, kt.m_)(c),
                  currency: d.toUpperCase(),
                  device: p === $t.W.desktop ? "desktop" : "phone",
                  disablePortal: !1,
                  showTriggerIconTooltip: !0,
                },
                m === Tt.Monthly ? { date: u.slice(0, 6) } : {}
              )
            )
          );
        };
        sc.propTypes = {
          phrase: v().string.isRequired,
          positionRef: v().oneOfType([v().func, v().object]),
          cpc: v().number.isRequired,
          volume: v().number.isRequired,
          kd: v().number,
          intents: v().array,
        };
        const cc = sc;
        function dc() {
          return (
            (dc = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            dc.apply(null, arguments)
          );
        }
        const pc = (0, se.default)(jt.A)`
  position: relative;
  display: inline;
  word-break: break-all;
  white-space: break-spaces;
`,
          uc = ({
            keyword: e = "",
            data: t = {},
            gaAction: a = "",
            positionRef: r = () => {},
            ...l
          }) =>
            n.createElement(
              pc,
              { pr: 5 },
              n.createElement(ac, dc({ keyword: e, gaAction: a }, l)),
              e?.length > 0 &&
                n.createElement(
                  jt.A,
                  { position: "absolute", ml: 1, mt: "2px", inline: !0 },
                  n.createElement(cc, {
                    phrase: e,
                    volume: t.volume,
                    cpc: t.cpc,
                    kd: t.keywordDifficulty,
                    intents: t.intents,
                    positionRef: r,
                  })
                )
            );
        uc.propTypes = {
          keyword: v().string,
          data: v().object,
          positionRef: v().any,
          gaAction: v().string,
        };
        const mc = uc,
          yc = "Top Opportunities",
          gc = (e) => () => f({ action: "No data", label: `${e} - all` }),
          bc = (e) => {
            return f({
              action: yc,
              label: `click ${
                ((t = e), `${t.charAt(0).toUpperCase()}${t.slice(1)}`)
              } tab`,
            });
            var t;
          },
          hc = (e) => () => f({ action: e, label: "click Clear filters" }),
          fc = (e) => () => f({ action: e, label: "show Clear filters" }),
          Ec = (e) => (t) => f({ action: "No data", label: `${e} - ${t}` }),
          vc = (e) => () => f({ action: e, label: "click View details" }),
          wc = () => {
            const e = "organic" === (0, o.d4)(ml) ? yc : "Top Shared Keywords";
            return {
              gaNoData: gc(e),
              gaClearFilter: hc(e),
              gaShowClearFilter: fc(e),
              gaShowNoData: Ec(e),
              gaClickDetails: vc(e),
              gaChangeType: bc,
              getGaContext: () => e,
            };
          },
          Tc = ({ value: e, data: t = {}, positionRef: a = {} }) => {
            const { getGaContext: r } = wc();
            return n.createElement(mc, {
              keyword: e,
              data: t,
              positionRef: a,
              gaAction: r(),
              size: 200,
              "data-at": "top-opp-keyword",
            });
          };
        Tc.propTypes = {
          value: v().string.isRequired,
          data: v().object,
          positionRef: v().object,
        };
        const kc = Tc,
          Ac = ({ isLoading: e = !1, data: t = [] }) => {
            const a = (0, n.useRef)(),
              { formatMessage: r } = (0, de.A)();
            return n.createElement(
              Hs.Ay,
              {
                data: e ? Array(5).fill({ keyword: "", volume: 0 }) : t,
                use: "secondary",
              },
              n.createElement(
                Hs.Ay.Head,
                null,
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "keyword",
                    justifyContent: "flex-start",
                    pl: 5,
                    pr: 0,
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    title: r({ id: "opportunities.keyword.tooltip" }),
                    placement: "top-start",
                  },
                  n.createElement(qt.A, { id: "opportunities.keyword" })
                ),
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "volume",
                    justifyContent: "flex-end",
                    px: 5,
                    ref: a,
                    wMin: 120,
                    flex: 0,
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    title: r({ id: "opportunities.volume.tooltip" }),
                    placement: "top",
                  },
                  n.createElement(qt.A, { id: "opportunities.volume" })
                )
              ),
              n.createElement(
                Hs.Ay.Body,
                null,
                n.createElement(Hs.Ay.Row, null, () => ({
                  "data-at": "top-opp-row",
                })),
                n.createElement(
                  Hs.Ay.Cell,
                  { name: "keyword", alignItems: "center", pl: 5, pr: 2 },
                  ({ name: t }, r) => ({
                    children: e
                      ? n.createElement(Xs, { width: "170px" })
                      : n.createElement(kc, {
                          value: r?.[t],
                          data: r,
                          positionRef: a,
                        }),
                    "data-at": "top-opp-cell-keyword",
                  })
                ),
                n.createElement(
                  Hs.Ay.Cell,
                  { name: "volume", alignItems: "baseline", pl: 2, pr: 5 },
                  ({ name: t }, a) => ({
                    children: e
                      ? n.createElement(Xs, { width: "90px" })
                      : n.createElement(
                          nr.A,
                          { size: 200, "data-at": "top-opp-volume" },
                          n.createElement(Ys.FormattedNumber, { value: a?.[t] })
                        ),
                    "data-at": "top-opp-cell-volume",
                  })
                )
              )
            );
          };
        Ac.propTypes = { isLoading: v().bool, data: v().array };
        const Cc = n.memo(Ac),
          Sc = (e, t = 0) => {
            const a = document.getElementById(e);
            if (!a) return;
            const r =
              a.getBoundingClientRect().top + window.pageYOffset - 61 + t;
            window.scrollTo({ top: r, behavior: "smooth" });
          },
          xc = ({ onClick: e = () => {}, isFeatureLimited: t = !1 }) => {
            const { formatMessage: a } = (0, de.A)(),
              { gaClickDetails: r } = wc();
            return n.createElement(
              Nt.A,
              {
                onClick: () => {
                  t ||
                    (r(),
                    setTimeout(() => {
                      Sc("kg_table_header", -5);
                    }, 100),
                    e());
                },
                theme: "info",
                use: "primary",
                "data-at": "top-opp-view-full-report-btn",
                "aria-label": a({ id: "ariaLabel.viewDetails" }),
              },
              n.createElement(qt.A, { id: "buttons.viewDetails" })
            );
          };
        xc.propTypes = { onClick: v().func, isFeatureLimited: v().bool };
        const Rc = xc;
        var Lc = a(3360);
        const Oc = (0, se.default)(ce.A)`
  color: #a6b0b3;

  &:hover {
    color: #64787e;
  }
`;
        function _c() {
          return (
            (_c = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            _c.apply(null, arguments)
          );
        }
        const Pc = (0, se.default)(Mr.Ay.Popper)`
  font-family: Inter, sans-serif;
`,
          Ic = ({ tooltip: e = null, ...t }) =>
            e
              ? n.createElement(
                  Oc,
                  null,
                  n.createElement(
                    Mr.Ay,
                    null,
                    n.createElement(
                      Mr.Ay.Trigger,
                      _c({ tabIndex: 0, tag: ce.A, alignItems: "center" }, t),
                      n.createElement(Lc.A, null)
                    ),
                    n.createElement(Pc, { ignorePortalsStacking: !0 }, e)
                  )
                )
              : null;
        Ic.propTypes = { tooltip: v().oneOfType([v().string, v().object]) };
        const Mc = Ic,
          Dc = ({ keywordType: e = "organic" }) => {
            const { formatMessage: t } = (0, de.A)();
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                Ms.WidgetTitle,
                null,
                n.createElement(
                  ts.A,
                  null,
                  n.createElement(qt.A, {
                    id:
                      "opportunities." +
                      ("organic" === e ? "title" : "titleCommon"),
                  })
                )
              ),
              n.createElement(
                jt.A,
                null,
                "organic" === e
                  ? n.createElement(
                      jt.A,
                      { inline: !0, ml: 2 },
                      n.createElement(zr, null)
                    )
                  : n.createElement(Mc, {
                      tooltip: t({ id: "opportunities.titleCommonTooltip" }),
                    })
              )
            );
          };
        Dc.propTypes = { keywordType: v().string };
        const Fc = n.memo(Dc),
          jc = (0, Ee.VP)("clearAllFilters"),
          qc = (e) => {
            const t = e.toUpperCase(),
              a = ((e) =>
                (0, Ee.VP)(`${e}/requestSetFilter`, (t) => ({
                  value: t,
                  name: e,
                })))(t),
              r = ((e) => (0, Ee.VP)(`${e}/setFilter`, (e) => ({ value: e })))(
                t
              ),
              n = ((e) => (0, Ee.VP)(`${e}/clearFilter`, () => ({})))(t);
            return { requestSetFilter: a, setFilter: r, clearFilter: n };
          },
          Nc = qc("position"),
          Uc = qc("volume"),
          $c = qc("search"),
          Vc = qc("keywordDifficulty"),
          zc = qc("intent"),
          Kc = (0, Ee.VP)("setAdvancedFilter", (e) => ({ data: e })),
          Bc = (0, Ee.VP)("requestApplyAdvancedFilter", (e = !1) => ({
            skipGa: e,
          })),
          Jc = (0, Ee.VP)("requestApplyAdvancedFilter", (e) => ({
            filters: e,
          })),
          Wc = (0, Ee.VP)("addEmptyAdvancedFilter"),
          Gc = (0, Ee.VP)("removeAdvancedFilter", (e) => ({ id: e })),
          Yc = (0, Ee.VP)("setAdvancedFieldValue", (e, t, a) => ({
            id: e,
            name: t,
            value: a,
          })),
          Hc = (0, Ee.VP)("clearAdvancedAppliedFilter"),
          Qc = (0, Ee.VP)("applyFilters"),
          Zc = (0, Ee.VP)("setFromURL", (e) => ({ data: e })),
          Xc = (0, Ee.VP)("filterReady"),
          ed = {
            position: Nc,
            volume: Uc,
            search: $c,
            keyworddifficulty: Vc,
            intent: zc,
          },
          td = ({ type: e }) => {
            const {
                gaClearFilter: t,
                gaShowClearFilter: a,
                gaShowNoData: r,
              } = wc(),
              l = (0, o.wA)(),
              i = (0, o.d4)(Kl);
            return (
              (0, n.useEffect)(() => {
                i ? a() : r(e);
              }, [i, e, a, r]),
              n.createElement(
                ce.A,
                {
                  w: "100%",
                  direction: "column",
                  alignItems: "center",
                  mt: 10,
                  px: 5,
                  boxSizing: !0,
                },
                n.createElement(
                  rr.Header,
                  { tag: "h6", mb: 1, color: "gray-500" },
                  n.createElement(qt.A, { id: `noresults.${e}Title` })
                ),
                n.createElement(
                  nr.A,
                  { color: "gray-500", size: 200, textAlign: "center" },
                  n.createElement(qt.A, { id: `noresults.${e}Keywords` })
                ),
                i &&
                  n.createElement(
                    jt.A,
                    { mt: 4 },
                    n.createElement(
                      Nt.A,
                      {
                        theme: "muted",
                        onClick: () => {
                          t(), l(jc());
                        },
                      },
                      n.createElement(qt.A, { id: "noresults.clearFilters" })
                    )
                  )
              )
            );
          };
        td.propTypes = {
          type: v().oneOf([me.SJ.missing, me.SJ.weak, me.SJ.common]).isRequired,
        };
        const ad = td,
          rd = [me.SJ.missing, me.SJ.weak],
          nd = (0, se.default)(qs)`
  flex-shrink: 0;
`,
          ld = () => {
            const { formatMessage: e } = (0, de.A)(),
              { gaNoData: t, gaChangeType: a } = wc(),
              [r, l] = (0, n.useState)(y.get(D) || me.SJ.missing),
              i = (0, o.d4)(_l),
              s = (0, o.d4)(Rl),
              c = (0, o.d4)(Pl),
              d = (0, o.d4)(Ll),
              p = (0, o.d4)(ml),
              u = Bs(),
              m = "organic" === p ? r : me.SJ.common,
              g = i?.[m] ?? [],
              b = 0 === g.length;
            return n.createElement(
              nd,
              {
                className: "style-module__card___kg06z",
                hMin: 370,
                "data-at": "top-opportunities",
                "aria-label": e({
                  id:
                    "opportunities." +
                    ("organic" === p ? "title" : "titleCommon"),
                }),
              },
              n.createElement(
                $s,
                { justifyContent: "flex-start" },
                n.createElement(Fc, { keywordType: p })
              ),
              n.createElement(
                Ms.WidgetContent,
                {
                  isNoData: c,
                  isError: d,
                  type: "table",
                  px: c ? 5 : 0,
                  onNoData: t,
                },
                n.createElement(
                  jt.A,
                  null,
                  "organic" === p &&
                    n.createElement(Gs, {
                      onClick: (e) => {
                        l(e), a(e), y.set(D, e);
                      },
                      value: r,
                      types: rd,
                      ml: 5,
                      mb: 5,
                    }),
                  n.createElement(
                    jt.A,
                    { "data-at": "top-opp-table", id: Vs },
                    n.createElement(Cc, { data: g, isLoading: s }),
                    !s && !g.length && n.createElement(ad, { type: m })
                  )
                ),
                n.createElement(
                  jt.A,
                  { m: 5 },
                  !(b || c || "organic" !== p) &&
                    n.createElement(
                      Ho,
                      { limitContext: "filters" },
                      n.createElement(Rc, {
                        onClick: () => {
                          u({ intersectionType: r });
                        },
                      })
                    )
                )
              )
            );
          };
        var od = a(13719);
        const id = (0, Ee.VP)("requestKeywordsTotal"),
          sd = (0, Ee.VP)("getKeywordsTotalSuccess", (e) => ({ data: e }));
        var cd = a(19153);
        const dd = (e) => [...e, ...new Array(5 - e.length).fill(M)],
          pd = (e, t) => {
            const a = Number.parseInt(t, 10),
              r = [...e];
            return (
              !Number.isNaN(a) && r?.[a] && ([r[0], r[a]] = [r[a], r[0]]), dd(r)
            );
          },
          ud = (e) => (Array.isArray(e) ? e.join("/") : ""),
          md = (e) => ("string" != typeof e ? [] : e.split("/")),
          yd = (e, t) => Ne(e, t),
          gd = ({ type: e }) =>
            n.createElement(
              jt.A,
              { pl: 5 },
              n.createElement(
                nr.A,
                { size: 100, color: "gray-500" },
                n.createElement(qt.A, { id: `keywordTypes.short.${e}` })
              )
            );
        gd.propTypes = {
          type: v().oneOf(["organic", "adwords", "pla"]).isRequired,
        };
        const bd = gd;
        var hd = a(4243);
        const fd = () =>
            n.createElement(
              Mr.Ay,
              { interaction: "hover", placement: "right" },
              n.createElement(
                Mr.Ay.Trigger,
                null,
                n.createElement(
                  jt.A,
                  { ml: 2 },
                  n.createElement(hd.A, { color: "#ff7f00" })
                )
              ),
              n.createElement(
                Mr.Ay.Popper,
                { theme: "warning" },
                n.createElement(qt.A, {
                  id: "noresults.keywordOverlap.recomendation",
                })
              )
            ),
          { useIntlHelpers: Ed } = Fr(),
          vd = (0, se.default)(cd.A)`
  width: 100%;
`,
          wd = ({
            target: e,
            searchType: t,
            value: a,
            id: r,
            active: l,
            onChangeVisible: o,
            keywordType: i,
            showType: s,
            isLoading: c,
          }) => {
            const { formatCompactNumber: d } = Ed(),
              p = yd(e, t);
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                ce.A,
                { direction: "column", "data-at": "overlap-competitor" },
                n.createElement(
                  vd,
                  { theme: Yr(r), "aria-label": e },
                  n.createElement(cd.A.Value, {
                    mr: 1,
                    checked: l,
                    onChange: () => o(r),
                    "data-at": "competitor-checkbox",
                  }),
                  n.createElement(
                    nr.A,
                    { tag: ts.A, size: 200, color: "gray-800" },
                    p
                  )
                ),
                s ? n.createElement(bd, { type: i }) : null
              ),
              n.createElement(
                ce.A,
                { justifyContent: "flex-end" },
                c
                  ? n.createElement(
                      or.A,
                      { hidden: !1, w: 48, h: 20 },
                      n.createElement(or.A.Text, { y: "6px", width: "100%" })
                    )
                  : n.createElement(
                      ce.A,
                      { alignItems: "center" },
                      n.createElement(
                        nr.A,
                        {
                          size: 200,
                          color: "gray-800",
                          "data-at": "overlap-competitor-size",
                        },
                        d(a)
                      ),
                      0 === a && n.createElement(fd, null)
                    )
              )
            );
          };
        wd.propTypes = {
          target: v().string.isRequired,
          id: v().string.isRequired,
          active: v().bool.isRequired,
          onChangeVisible: v().func.isRequired,
          keywordType: v().oneOf([...me.CT]).isRequired,
          searchType: v().oneOf([...me.vM]).isRequired,
          showType: v().bool.isRequired,
          value: v().number.isRequired,
          isLoading: v().bool.isRequired,
        };
        const Td = n.memo(wd),
          kd = () => (0, o.d4)(ol.lG),
          Ad = "Keyword Overlap";
        function Cd() {
          return (
            (Cd = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Cd.apply(null, arguments)
          );
        }
        const Sd = (0, se.default)(jt.A)`
  display: grid;
  grid-template-columns: minmax(20px, 1fr) auto;
  grid-row-gap: 8px;
  grid-column-gap: 16px;
`,
          xd = ({
            hiddenIds: e,
            domains: t = [],
            onChangeVisible: a = () => {},
            isLoading: r = !1,
          }) => {
            const l = (0, n.useMemo)(
              () =>
                t.reduce((e, { keywordType: t }) => (e.add(t), e), new Set())
                  .size > 1,
              [t]
            );
            return (
              (() => {
                const e = (0, o.d4)(vl).filter((e) => 0 === e.size).length;
                (0, n.useEffect)(() => {
                  e > 0 && f({ action: Ad, label: `show 0 keywords - ${e}` });
                }, [e]);
              })(),
              n.createElement(
                Sd,
                { "data-at": "overlap-competitors-list", "aria-controls": zs },
                t.map((t) =>
                  n.createElement(
                    Td,
                    Cd({}, t, {
                      value: t.size,
                      key: t.id,
                      active: !e.has(t.id),
                      onChangeVisible: a,
                      showType: l,
                      isLoading: r,
                    })
                  )
                )
              )
            );
          };
        xd.propTypes = {
          domains: v().array,
          hiddenIds: v().object.isRequired,
          onChangeVisible: v().func,
          isLoading: v().bool,
        };
        const Rd = n.memo(xd);
        var Ld = a(92654),
          Od = a(3884),
          _d = a(99054),
          Pd = a(49840);
        const Id = ({ dataKey: e, data: t = {} }) => {
          const a = e.length > 1;
          return n.createElement(
            ce.A,
            {
              justifyContent: "space-between",
              direction: "row",
              pb: 2,
              "data-at": "overlap-tooltip-caption",
            },
            n.createElement(qt.A, {
              id: "venn.tooltip.caption." + (a ? "overlap" : "single"),
            }),
            a
              ? n.createElement(
                  nr.A,
                  {
                    color: "gray-800",
                    fontWeight: "bold",
                    "data-at": "overlap-tooltip-caption-value",
                  },
                  n.createElement(Ys.FormattedNumber, { value: t[e] })
                )
              : null
          );
        };
        Id.propTypes = { dataKey: v().string.isRequired, data: v().object };
        const Md = Id,
          Dd = (0, se.default)(jt.A)`
  min-width: 80px;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`,
          Fd = ({
            name: e = "",
            size: t = 0,
            fill: a = "#cccccc",
            searchType: r = "domain",
          }) =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                ce.A,
                {
                  alignItems: "center",
                  "data-at": "overlap-tooltip-item-name",
                },
                n.createElement(Wr, { color: a }),
                n.createElement(Dd, { pl: 1, inline: !0 }, yd(e, r))
              ),
              n.createElement(
                ce.A,
                {
                  justifyContent: "right",
                  inline: !0,
                  "data-at": "overlap-tooltip-item-value",
                },
                n.createElement(Ys.FormattedNumber, { value: t })
              )
            );
        Fd.propTypes = {
          name: v().string,
          size: v().number,
          fill: v().string,
          searchType: v().string,
        };
        const jd = Fd,
          qd = (0, se.default)(jt.A)`
  padding-top: 8px;
  display: grid;
  grid-template-columns: minmax(20px, 1fr) auto;
  grid-row-gap: 8px;
  grid-column-gap: 16px;
`,
          Nd = ({ dataKey: e, searchItems: t, data: a = {} }) => {
            const r = md(e);
            return n.createElement(
              jt.A,
              { "data-at": "overlap-tooltip" },
              n.createElement(Md, { dataKey: e, data: a }),
              n.createElement(Ut.A, null),
              n.createElement(
                qd,
                null,
                r.map((e) =>
                  n.createElement(jd, {
                    key: e,
                    name: Ct(t[e].searchItem),
                    searchType: t[e].searchType,
                    size: a[e],
                    fill: Yr(e),
                  })
                )
              )
            );
          };
        Nd.propTypes = {
          dataKey: v().string.isRequired,
          data: v().object,
          searchItems: v().array.isRequired,
        };
        const Ud = Nd,
          $d = { UNIQUE: me.SJ.unique, COMMON: me.SJ.common },
          Vd = { cursor: "pointer" },
          zd = ({
            series: e,
            searchItems: t,
            isFeatureLimited: a = !1,
            openModal: r = () => {
              console.log("D3Venn > openModal > Not implemented");
            },
          }) => {
            const l = (0, o.wA)(),
              i = (0, o.d4)(ol.qG),
              s = (0, o.d4)(ol.yo),
              c = (0, o.d4)(pl),
              [[d, p], u] = (0, n.useState)([0, 0]),
              m = e.reduce((e, t) => ({ ...e, [ud(t.sets)]: t.size }), {}),
              y = (e) => {
                if (a) return void r();
                const t = md(e);
                var n;
                if (
                  ((n = t.length),
                  f({
                    action: Ad,
                    label: n > 1 ? `click intersect ${n}` : "click unique",
                  }),
                  1 === t.length)
                ) {
                  const e = s[t[0]];
                  return (
                    (e.searchItem === i.searchItem &&
                      e.searchType === i.searchType &&
                      e.keywordType === i.keywordType) ||
                      l(Kn(pd(s, t[0]))),
                    void (
                      c !== $d.UNIQUE && l(Nn({ intersectionType: $d.UNIQUE }))
                    )
                  );
                }
                if (t.length !== s.length) {
                  const e = s.filter((e, a) => t.includes(`${a}`));
                  l(Kn(dd(e)));
                }
                c !== $d.COMMON && l(Nn({ intersectionType: $d.COMMON }));
              };
            return n.createElement(
              Ld.A,
              { h: 308, w: "99.5%", onResize: u, id: zs },
              n.createElement(
                Od.A,
                { width: d, height: p, data: m },
                Object.keys(m).length > 0
                  ? n.createElement(
                      _d.A,
                      { minRadius: 6 },
                      Object.keys(m).map((e) =>
                        e.length > 1
                          ? n.createElement(_d.A.Intersection, {
                              onClick: () => y(e),
                              key: e,
                              dataKey: e,
                              duration: 0,
                              "data-at": `venn-intersection-${e}`,
                              "aria-haspopup": !!a && "dialog",
                              style: Vd,
                            })
                          : n.createElement(_d.A.Circle, {
                              onClick: () => y(e),
                              key: e,
                              dataKey: e,
                              color: Yr(e),
                              duration: 0,
                              "data-at": `venn-${e}`,
                              "aria-haspopup": !!a && "dialog",
                              style: Vd,
                            })
                      ),
                      n.createElement(
                        Pd.A,
                        null,
                        ({ dataKey: e, data: a }) => ({
                          children: n.createElement(Ud, {
                            dataKey: e,
                            data: a,
                            searchItems: t,
                          }),
                        })
                      )
                    )
                  : null
              )
            );
          };
        zd.propTypes = {
          series: v().array.isRequired,
          searchItems: v().array.isRequired,
          isFeatureLimited: v().bool,
          openModal: v().func,
        };
        const Kd = zd;
        function Bd() {
          return (
            (Bd = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Bd.apply(null, arguments)
          );
        }
        const Jd = (0, se.default)(ce.A)`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 288px;
`,
          Wd = ({ ...e }) => {
            const { formatMessage: t } = (0, de.A)(),
              a = (0, o.wA)(),
              [r, l] = (0, n.useState)(new Set()),
              i = (0, o.d4)(hl),
              s = (0, o.d4)(El),
              c = (0, o.d4)(Al),
              d = (0, o.d4)(fl),
              p = (0, o.d4)(vl),
              u = (0, n.useMemo)(
                () =>
                  p.map(({ target: e, searchType: t }) => ({
                    searchItem: e,
                    searchType: t,
                  })),
                [p]
              ),
              m = (0, n.useMemo)(
                () => d.filter(({ sets: e }) => e.every((e) => !r.has(e))),
                [d, r]
              ),
              y = (0, n.useCallback)(
                (e) => {
                  var t;
                  (t = r.has(e)),
                    f({
                      action: Ad,
                      label: "click checkbox - " + (t ? "on" : "off"),
                    }),
                    r.has(e)
                      ? l(new Set([...r].filter((t) => t !== e)))
                      : l(new Set(r.add(e)));
                },
                [r]
              ),
              g = (0, n.useCallback)(() => a(id()), [a]);
            return n.createElement(
              qs,
              Bd({ hMin: 370, wMin: 605, flex: "1 1 auto" }, e, {
                "data-at": "overlap",
                "aria-label": t({ id: "overlapChart.caption" }),
              }),
              n.createElement(
                $s,
                { justifyContent: "flex-start" },
                n.createElement(
                  Ms.WidgetTitle,
                  null,
                  n.createElement(qt.A, { id: "overlapChart.caption" })
                )
              ),
              n.createElement(
                Ms.WidgetContent,
                { isNoData: !s, isError: c, onReload: g, type: "venn-chart" },
                n.createElement(
                  ce.A,
                  { mx: 5 },
                  n.createElement(
                    jt.A,
                    { mr: 6, wMin: 345, wMax: 450 },
                    n.createElement(
                      Ho,
                      { limitContext: "filters" },
                      ({ isFeatureLimited: e, openModal: t }) =>
                        i
                          ? n.createElement(
                              Jd,
                              null,
                              n.createElement(od.A, { w: 200 })
                            )
                          : n.createElement(Kd, {
                              series: m,
                              searchItems: u,
                              isFeatureLimited: e,
                              openModal: t,
                            })
                    )
                  ),
                  n.createElement(
                    jt.A,
                    { wMin: 224 },
                    n.createElement(Rd, {
                      domains: p,
                      hiddenIds: r,
                      onChangeVisible: y,
                      isLoading: i,
                    })
                  )
                )
              )
            );
          },
          Gd = n.memo(Wd),
          Yd = function (e) {
            const t = (0, n.useMemo)(() => (Array.isArray(e) ? e : [e]), [e]),
              a = Boolean(window?.matchMedia),
              [r, l] = (0, n.useState)(
                t.map((e) => !!a && !!window.matchMedia(e).matches)
              );
            return (
              (0, n.useLayoutEffect)(() => {
                if (!a) return;
                const e = t.map((e) => window.matchMedia(e)),
                  r = e.map((e, t) => {
                    const a = () =>
                      l((a) => a.map((a, r) => (t === r ? !!e.matches : a)));
                    return (
                      null != e.addEventListener
                        ? e.addEventListener("change", a)
                        : e.addListener(a),
                      a
                    );
                  });
                return () => {
                  e.forEach((e, t) => {
                    null != e.addEventListener
                      ? e.removeEventListener("change", r[t])
                      : e.removeListener(r[t]);
                  });
                };
              }, [a, t, e]),
              r
            );
          },
          Hd = (0, se.default)(ce.A)`
  max-width: calc(100vw - 20px);
  min-width: 970px;
`,
          Qd = (0, se.default)(ce.A)`
  margin-left: 8px;

  &:first-child {
    margin-left: 0;
  }
`;
        function Zd() {
          return (
            (Zd = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Zd.apply(null, arguments)
          );
        }
        const Xd = ({ style: e = {}, children: t = null, ...a }) =>
          n.createElement(
            Qd,
            Zd({}, a, { style: { ...(e || {}) } }),
            n.createElement(jt.A, { w: "100%" }, t)
          );
        Xd.propTypes = { children: v().node, style: v().object };
        const ep = Xd,
          tp = (0, n.createContext)({});
        function ap() {
          return (
            (ap = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ap.apply(null, arguments)
          );
        }
        const rp = (e, t, a) => {
            const r = a.indexOf(!0);
            return -1 === r ? {} : e.get(t[r]) || {};
          },
          np = ({ config: e = {}, children: t = null, ...a }) => {
            const r = (0, n.useMemo)(() => [...e.keys()], [e]),
              l = Yd(r),
              { formatMessage: o } = (0, de.A)(),
              i = (0, n.useCallback)((e) => {
                e.preventDefault(), e.stopPropagation();
              }, []),
              s = (0, n.useMemo)(
                () => ({ ...e.get("default"), ...rp(e, r, l) }),
                [e, r, l]
              );
            return n.createElement(
              Hd,
              ap(
                {
                  tag: "form",
                  action: "",
                  onSubmit: i,
                  "aria-label": o({ id: "ariaLabel.filters" }),
                },
                a
              ),
              n.createElement(
                tp.Provider,
                { value: s },
                t.map((e) =>
                  null != e
                    ? n.createElement(
                        ep,
                        ap({ key: e.props.name }, s[e.props.name] || {}),
                        e
                      )
                    : null
                )
              )
            );
          };
        np.propTypes = { children: v().node, config: v().object };
        const lp = np;
        var op = a(37378),
          ip = a.n(op);
        const sp = (e) => null == e || "" === e,
          cp = ({ from: e = null, to: t = null, minValue: a, maxValue: r }) => {
            const { formatNumber: l } = (0, de.A)(),
              o = sp(e) ? a : e,
              i = sp(t) ? r : t;
            let s = "";
            return (
              sp(i) && (s = "+"),
              sp(o) || sp(i) || o === i
                ? sp(o)
                  ? sp(i)
                    ? void 0
                    : n.createElement("span", null, l(i))
                  : n.createElement("span", null, l(o), s)
                : n.createElement("span", null, `${l(o)}â€“${l(i)}`)
            );
          };
        cp.propTypes = {
          from: v().number,
          to: v().number,
          minValue: v().number.isRequired,
          maxValue: v().number.isRequired,
        };
        const dp = n.memo(cp),
          pp = "all_domains",
          up = "you_domain",
          mp = "competitors",
          yp = [
            {
              type: pp,
              labelId: "positionFilter.label.all_domains",
              tooltipId: "positionFilter.tooltip.all_domains",
            },
            {
              type: up,
              labelId: "positionFilter.label.you_domain",
              tooltipId: "positionFilter.tooltip.you_domain",
            },
            {
              type: mp,
              labelId: "positionFilter.label.competitors",
              tooltipId: "positionFilter.tooltip.competitors",
            },
          ],
          gp = [
            {
              value: "0-50",
              labelId: "positionFilter.label.top50",
              gaIndex: 1,
              gaLabel: "top_50",
            },
            {
              value: "0-20",
              labelId: "positionFilter.label.top20",
              gaIndex: 2,
              gaLabel: "top_20",
            },
            {
              value: "0-10",
              labelId: "positionFilter.label.top10",
              gaIndex: 3,
              gaLabel: "top_10",
            },
          ],
          bp = ({ value: e = null, type: t = null }) => {
            if (!e) return null;
            const a =
              "string" == typeof e
                ? n.createElement(qt.A, {
                    id: `positionFilter.label.top${e.split("-")[1]}`,
                  })
                : n.createElement(dp, {
                    from: e.from,
                    to: e.to,
                    maxValue: 100,
                    minValue: 1,
                  });
            return n.createElement(
              "span",
              null,
              n.createElement(qt.A, { id: "quickFilter.positions.prefix" }),
              "Â ",
              n.createElement(qt.A, {
                id: "positionFilter.value",
                values: {
                  TYPE: n.createElement(qt.A, {
                    id: `positionFilter.value.type.${t}`,
                  }),
                  VAL: a,
                },
              })
            );
          };
        bp.propTypes = {
          value: v().oneOfType([v().string, v().object, v().instanceOf(null)]),
          type: v().oneOfType([v().string, v().instanceOf(null)]),
        };
        const hp = bp,
          fp = (e, t) => {
            const a = t ? "-custom" : "";
            switch (e) {
              case pp:
                return `positionFilter.tooltip.applied.all${a}`;
              case up:
                return `positionFilter.tooltip.applied.you${a}`;
              case mp:
                return `positionFilter.tooltip.applied.com${a}`;
              default:
                return "positionFilter.tooltip";
            }
          },
          Ep = ({ value: e = null, type: t = null }) => {
            const a = "string" != typeof e,
              r =
                "string" == typeof e
                  ? e.substring(2)
                  : [e?.from || 1, e?.to || 100].join("-");
            return n.createElement(qt.A, {
              id: fp(t, a),
              values: { range: r },
            });
          };
        Ep.propTypes = {
          type: v().string,
          value: v().oneOfType([v().string, v().object]),
        };
        const vp = Ep;
        var wp = a(45852),
          Tp = a.n(wp),
          kp = a(86087);
        const Ap = new i.GA4("keyword_gap", void 0),
          Cp = "keyword-gap:filters",
          Sp = "keyword_gap.table.filters.positions",
          xp = [150, 150],
          Rp = ({ onClickApply: e }) => {
            const { setVisibility: t } = (0, n.useContext)(
                op.VisibilityContext
              ),
              a = (0, o.d4)(Fl),
              r = a?.value,
              l = a?.type,
              i =
                "string" == typeof r
                  ? r.substring(2)
                  : [r?.from, r?.to].join("-"),
              s = (a) => {
                t(!1), e(a);
              };
            return n.createElement(
              En.A.List,
              null,
              yp.map((e) => {
                const t = e.type === l;
                return n.createElement(
                  En.A.Nesting,
                  { key: e.type },
                  n.createElement(
                    En.A,
                    {
                      placement: "right-start",
                      interaction: "hover",
                      timeout: xp,
                    },
                    n.createElement(
                      En.A.Trigger,
                      {
                        tag: En.A.Nesting.Trigger,
                        selected: t,
                        "aria-selected": t,
                        "data-at": e.type,
                      },
                      n.createElement(
                        ce.A,
                        { "data-at": "qf-option-label" },
                        n.createElement(qt.A, { id: e.labelId }),
                        n.createElement(Mc, {
                          ml: 1,
                          tooltip: n.createElement(qt.A, { id: e.tooltipId }),
                          "data-at": "qf-option-info",
                        })
                      ),
                      n.createElement(En.A.Nesting.Addon, {
                        tag: kp.A,
                        color: "icon-secondary-neutral",
                      })
                    ),
                    n.createElement(
                      En.A.Popper,
                      { "data-at": "qf-top100-dd-side", wMin: 200 },
                      n.createElement(
                        En.A.List,
                        null,
                        gp.map((a) => {
                          const l = t && r === a.value;
                          return n.createElement(
                            En.A.Item,
                            {
                              key: a.value,
                              value: a.value,
                              "data-at": `item-${a.value}`,
                              selected: l,
                              "aria-selected": l,
                              onClick: () => {
                                var t, r, n, l;
                                s({ value: a.value, type: e.type }),
                                  (t = e.type),
                                  (r = a.gaIndex),
                                  f({
                                    category: Cp,
                                    action: "click:positions-preset-value",
                                    label: `positions:preset-value:${t}:1-3`,
                                    value: r,
                                  }),
                                  (n = e.type),
                                  (l = a.gaLabel),
                                  Ap.track(Ap.eventName.applyFilter, {
                                    item_location: Sp,
                                    item_label: l,
                                    state: n,
                                  });
                              },
                            },
                            n.createElement(qt.A, { id: a.labelId })
                          );
                        })
                      ),
                      n.createElement(Ut.A, { my: 1 }),
                      n.createElement(Tp(), {
                        onApply: ({ min: t, max: a }) => {
                          var r, n;
                          s({ value: { from: t, to: a }, type: e.type }),
                            (r = e.type),
                            f({
                              category: Cp,
                              action: "click:positions-apply",
                              label: `positions:apply-filter:${r}:from`,
                              value: (n = t) ? parseInt(n || 0, 10) : void 0,
                            }),
                            ((e, t) => {
                              f({
                                category: Cp,
                                action: "click:positions-apply",
                                label: `positions:apply-filter:${e}:to`,
                                value: t ? parseInt(t || 0, 10) : void 0,
                              });
                            })(e.type, a),
                            (({ from: e, to: t, state: a }) => {
                              Ap.track(Ap.eventName.applyFilter, {
                                item_location: Sp,
                                item_label: `${parseInt(e || 0, 10)}_${parseInt(
                                  t || 0,
                                  10
                                )}`,
                                state: a,
                              });
                            })({ from: t, to: a, state: e.type });
                        },
                        defaultValue: l === e.type ? i : null,
                      })
                    )
                  )
                );
              })
            );
          };
        Rp.propTypes = { onClickApply: v().func.isRequired };
        const Lp = Rp,
          Op = ({ isFeatureLimited: e = !1 }) => {
            const { formatMessage: t } = (0, de.A)(),
              a = (0, o.wA)(),
              r = (0, o.d4)(Fl),
              l = r?.value,
              i = r?.type,
              s = ((e, t) => {
                const { formatMessage: a } = (0, de.A)(),
                  r = (0, Dr.useFilterRangeText)({
                    from: t?.from,
                    to: t?.to,
                    defaultFrom: 1,
                    defaultTo: 100,
                  });
                if (!t) return a({ id: "ariaLabel.filter.position.empty" });
                const n =
                    "string" == typeof t
                      ? a({ id: `positionFilter.label.top${t.split("-")[1]}` })
                      : r,
                  l = a(
                    { id: "positionFilter.value" },
                    {
                      TYPE: a({ id: `positionFilter.value.type.${e}` }),
                      VAL: n,
                    }
                  );
                return a(
                  { id: "ariaLabel.filter.position.applied" },
                  { VALUE: l }
                );
              })(i, l);
            return n.createElement(
              ip(),
              {
                onVisibleChange: (e) => {
                  e &&
                    f({
                      category: Cp,
                      action: "click:positions",
                      label: "positions:show",
                    });
                },
                disabled: e,
              },
              n.createElement(
                ip().Trigger,
                {
                  placeholder: t({ id: "positionFilter.placeholder" }),
                  empty: null == l,
                  onClear: () => {
                    a(Nc.clearFilter()),
                      f({
                        category: Cp,
                        action: "click:positions-clear",
                        label: "positions:clear-filter",
                      });
                  },
                  "data-at": "qf-top100",
                  "data-path": Sp,
                  "aria-label": s,
                  value: l,
                  tooltip: n.createElement(vp, { value: l, type: i }),
                },
                n.createElement(hp, { value: l, type: i })
              ),
              n.createElement(
                ip().Popper,
                { w: 200, "data-at": "qf-top100-dd" },
                n.createElement(Lp, {
                  onClickApply: (t) => {
                    e || (a(Nc.requestSetFilter(t)), a(Qc()));
                  },
                })
              )
            );
          };
        Op.propTypes = { isFeatureLimited: v().bool };
        const _p = Op;
        var Pp = a(2549),
          Ip = a.n(Pp);
        const Mp = "keyword-gap:filters",
          Dp = "keyword_gap.table.filters.volume",
          Fp = () => {
            f({ category: Mp, action: "click:volume", label: "volume:show" });
          },
          jp = () => {
            f({
              category: Mp,
              action: "click:volume-clear",
              label: "volume:clear-filter",
            });
          },
          qp = (e) => {
            f({
              category: Mp,
              action: "click:volume-preset-value",
              label: "volume:preset-value:1-6",
              value: e,
            });
          },
          Np = (e) => {
            f({
              category: Mp,
              action: "click:volume-apply",
              label: "volume:apply-filter:from",
              value: e ? parseInt(e || 0, 10) : void 0,
            });
          },
          Up = (e) => {
            f({
              category: Mp,
              action: "click:volume-apply",
              label: "volume:apply-filter:to",
              value: e ? parseInt(e || 0, 10) : void 0,
            });
          },
          $p = {
            1: "1_10",
            2: "11_100",
            3: "101_1000",
            4: "1001_10000",
            5: "10001_100000",
            6: "100001_more",
          },
          Vp = ({ isFeatureLimited: e = !1 }) => {
            const t = (0, o.wA)(),
              {
                resetFilterGA: a,
                showFilterGA: r,
                applyPresetFilterGA: l,
                applyRangeToFilterGA: i,
                applyRangeFromFilterGA: s,
              } = {
                showFilterGA: Fp,
                resetFilterGA: jp,
                applyPresetFilterGA: qp,
                applyRangeFromFilterGA: Np,
                applyRangeToFilterGA: Up,
              },
              { requestSetFilter: c, clearFilter: d } = Uc;
            let p = (0, o.d4)(Dl);
            if (p && "object" == typeof p) {
              const { from: e, to: t } = p;
              p = [e, t].join("-");
            }
            return n.createElement(
              ce.A,
              { "data-path": Dp },
              n.createElement(Ip(), {
                selectedValue: p || "",
                disabled: e,
                onVisibleChange: (e) => {
                  e && r();
                },
                onOptionClick: (e) => (a) => {
                  l(e),
                    ((e) => {
                      Ap.track(Ap.eventName.applyFilter, {
                        item_location: Dp,
                        item_label: $p[e],
                      });
                    })(e),
                    t(c(a)),
                    t(Qc());
                },
                onApplyRange: ({ min: e, max: a }) => {
                  var r, n;
                  s(e),
                    i(a),
                    (r = e),
                    (n = a),
                    Ap.track(Ap.eventName.applyFilter, {
                      item_location: Dp,
                      item_label: `${parseInt(r || 0, 10)}_${parseInt(
                        n || 0,
                        10
                      )}`,
                    }),
                    t(c({ from: e, to: a })),
                    t(Qc());
                },
                onClear: () => {
                  t(d()), a();
                },
              })
            );
          };
        Vp.propTypes = { isFeatureLimited: v().bool };
        const zp = Vp;
        var Kp = a(20212),
          Bp = a.n(Kp);
        const Jp = "keyword-gap:filters",
          Wp = "keyword_gap.table.filters.kd",
          Gp = ({
            requestSetFilter: e,
            clearFilter: t,
            applyFilters: a,
            isFeatureLimited: r = !1,
            selectedValue: l = "",
          }) => {
            let o = l;
            if (o && "object" == typeof l) {
              const { from: e, to: t } = l;
              o = [e, t].join("-");
            }
            return n.createElement(
              ce.A,
              { "data-path": Wp },
              n.createElement(Bp(), {
                selectedValue: o || "",
                disabled: r,
                onVisibleChange: (e) => {
                  e &&
                    f({ category: Jp, action: "click:kd", label: "kd:show" });
                },
                onOptionClick: (t) => (r) => {
                  e(r),
                    a(),
                    ((e) => {
                      const t = parseInt(e || 0, 10) + 1;
                      f({
                        category: Jp,
                        action: "click:kd-preset-value",
                        label: "kd:preset-value:1-6",
                        value: t,
                      });
                    })(t),
                    ((e) => {
                      Ap.track(Ap.eventName.applyFilter, {
                        item_location: Wp,
                        item_label: e ? `${e.replace("-", "_")}` : "",
                      });
                    })(r);
                },
                onApplyRange: ({ min: t, max: r }) => {
                  var n, l, o;
                  e({ from: t, to: r }),
                    a(),
                    f({
                      category: Jp,
                      action: "click:kd-apply",
                      label: "kd:apply-filter:from",
                      value: (n = t) ? parseInt(n || 0, 10) : void 0,
                    }),
                    ((e) => {
                      f({
                        category: Jp,
                        action: "click:kd-apply",
                        label: "kd:apply-filter:to",
                        value: e ? parseInt(e || 0, 10) : void 0,
                      });
                    })(r),
                    (l = t),
                    (o = r),
                    Ap.track(Ap.eventName.applyFilter, {
                      item_location: Wp,
                      item_label: `${parseInt(l || 0, 10)}_${parseInt(
                        o || 0,
                        10
                      )}`,
                    });
                },
                onClear: () => {
                  t(),
                    f({
                      category: Jp,
                      action: "click:kd-clear",
                      label: "kd:clear-filter",
                    });
                },
              })
            );
          };
        Gp.propTypes = {
          requestSetFilter: v().func.isRequired,
          clearFilter: v().func.isRequired,
          applyFilters: v().func.isRequired,
          selectedValue: v().oneOfType([v().string, v().object]),
          isFeatureLimited: v().bool,
        };
        const Yp = (0, o.Ng)((e) => ({ selectedValue: ql(e) }), {
          requestSetFilter: Vc.requestSetFilter,
          applyFilters: Qc,
          clearFilter: Vc.clearFilter,
        })(Gp);
        var Hp = a(33283),
          Qp = a.n(Hp);
        const Zp = () => {
            const e = (0, o.wA)();
            return () => e(Hc());
          },
          Xp = () => {
            const e = (0, o.d4)(Ul);
            return e?.order ?? [];
          },
          eu = "keyword-gap:filters",
          tu = () => {
            const { formatMessage: e } = (0, de.A)(),
              t = (0, o.d4)(jl),
              a = (0, o.wA)(),
              r = (0, n.useCallback)(
                (e) => {
                  a($c.requestSetFilter(e)), a(Qc());
                },
                [a]
              ),
              l = (0, n.useCallback)(() => {
                f({
                  category: eu,
                  action: "click:filter-by-keyword",
                  label: "filter-by-keyword:focus",
                });
              }, []);
            return n.createElement(
              "div",
              {
                "data-at": "qf_keyword",
                "data-path": "keyword_gap.table.filters.filter_by_keyword",
              },
              n.createElement(Qp(), {
                placeholder: e({ id: "keywordFilter.placeholder" }),
                value: t || "",
                onApply: (e) => {
                  e !== t &&
                    (r(e),
                    f({
                      category: eu,
                      action: "click:filter-by-keyword-apply",
                      label: "filter-by-keyword:apply",
                    }),
                    Ap.track(Ap.eventName.applyFilter, {
                      item_location:
                        "keyword_gap.table.filters.filter_by_keyword",
                    }));
                },
                onFocus: l,
                onClear: () => {
                  t &&
                    (r(""),
                    f({
                      category: eu,
                      action: "click:filter-by-keyword-clear",
                      label: "filter-by-keyword:clear",
                    }));
                },
                w: "100%",
              })
            );
          },
          au = "keyword_gap.table.filters.intent",
          ru = (0, se.default)(go())`
  display: block !important;
`,
          nu = () => {
            const e = (0, o.d4)(Nl),
              t = (0, o.wA)();
            return n.createElement(
              ce.A,
              { "data-path": au },
              n.createElement(ru, {
                value: e || [],
                onApply: (e) => {
                  t(zc.requestSetFilter(e)),
                    t(Qc()),
                    ((e) => {
                      f({
                        category: "keyword-gap:filters",
                        action: "click:intent-apply",
                        label: `intent:${e.join(",")}`,
                        value: e.length,
                      });
                    })(e),
                    ((e) => {
                      Ap.track(Ap.eventName.applyFilter, {
                        item_location: au,
                        item_label: e.join("_"),
                      });
                    })(e);
                },
                onClear: () => {
                  t(zc.clearFilter()),
                    f({
                      category: "keyword-gap:filters",
                      action: "click:intent-clear",
                      label: "intent:clear-filter",
                    });
                },
                onVisibilityChange: (e) => {
                  e &&
                    f({
                      category: "keyword-gap:filters",
                      action: "click:intent",
                      label: "intent:show",
                    });
                },
              })
            );
          };
        var lu = a(62944);
        const ou = "keyword-gap:filters",
          iu = (e) => {
            const t = Object.values(e).map((e) => ({
              option: e.isIncludes ? "includes" : "excludes",
              criteria: e.criteria,
              field: e.field,
              value: e.value,
            }));
            t.forEach((e) => {
              const a = `apply ${e.option} - ${e.field} - ${e.criteria}${
                e.value ? ` - ${e.value}` : ""
              }`;
              f({
                category: ou,
                action: "click:advanced-filter-apply",
                label: a,
                dimension101: { filtered_response: t },
              });
            });
          },
          su = { "=": "equal", ">": "greater_than", "<": "less_than" },
          cu = ({ onClose: e, onApply: t }) => {
            const a = Zp(),
              r = (0, n.useCallback)(() => {
                a(),
                  setTimeout(() => e(), 150),
                  f({
                    category: ou,
                    action: "click:advanced-clear-all",
                    label: "advanced-filter:clear-filter",
                  });
              }, [a, e]);
            return n.createElement(
              ce.A,
              { mx: 4, justifyContent: "space-between" },
              n.createElement(
                Nt.A,
                { use: "primary", onClick: t, "data-at": "qf-apply-advanced" },
                n.createElement(qt.A, { id: "filter.advanced.apply" })
              ),
              n.createElement(
                Nt.A,
                {
                  use: "tertiary",
                  theme: "muted",
                  onClick: r,
                  "data-at": "qf-clear-advanced",
                },
                n.createElement(Nt.A.Addon, null, n.createElement(Nr.A, null)),
                n.createElement(
                  Nt.A.Text,
                  null,
                  n.createElement(qt.A, { id: "advancedFilter.clearFilter" })
                )
              )
            );
          };
        cu.propTypes = {
          onClose: v().func.isRequired,
          onApply: v().func.isRequired,
        };
        const du = cu,
          pu = (0, n.forwardRef)(function ({ onAdd: e }, t) {
            const a = (0, o.wA)();
            return n.createElement(
              Nt.A,
              {
                theme: "info",
                use: "tertiary",
                onClick: () => {
                  e(), a(Wc());
                },
                "data-at": "af-add-condition",
                ref: t,
              },
              n.createElement(Nt.A.Addon, null, n.createElement(Er.A, null)),
              n.createElement(
                Nt.A.Text,
                null,
                n.createElement(qt.A, { id: "advancedFilter.addCondition" })
              )
            );
          });
        (pu.propTypes = { onAdd: v().func }),
          (pu.defaultProps = { onAdd: () => {} });
        const uu = pu,
          mu = [
            {
              value: !0,
              label: n.createElement(qt.A, {
                id: "advancedFilter.includeStatus.include",
              }),
            },
            {
              value: !1,
              label: n.createElement(qt.A, {
                id: "advancedFilter.includeStatus.exclude",
              }),
            },
          ],
          yu = ({ value: e, focused: t = !1, onChange: a = () => {} }) => {
            const r = (0, n.useRef)(null),
              { formatMessage: l } = (0, de.A)();
            return (
              (0, n.useEffect)(() => {
                t && r.current.focus();
              }, [t]),
              n.createElement(
                Qa.Ay,
                { value: e, onChange: a },
                n.createElement(
                  Qa.Ay.Trigger,
                  {
                    w: 140,
                    "data-at": "af-item-include",
                    ref: r,
                    type: "button",
                    "aria-label": l({
                      id: "ariaLabel.advancedFilters.selectIncludeStatus",
                    }),
                  },
                  mu.find(({ value: t }) => t === e)?.label ?? ""
                ),
                n.createElement(
                  Qa.Ay.Menu,
                  { "data-at": "select-include-status-dd" },
                  mu.map((e, t) => {
                    const { label: a, value: r } = e;
                    return n.createElement(
                      Qa.Ay.Option,
                      { value: r, key: t, direction: "row", flexWrap: !0 },
                      n.createElement(
                        jt.A,
                        { "data-at": `option-${r}` },
                        n.createElement(nr.A, { size: 200 }, a)
                      )
                    );
                  })
                )
              )
            );
          };
        yu.propTypes = {
          value: v().string.isRequired,
          onChange: v().func,
          focused: v().bool,
        };
        const gu = yu,
          bu = ["results"],
          hu = (e, t) =>
            bu.includes(e) && t
              ? n.createElement(qt.A, {
                  id: "advancedFilter.field.addon.desktopOnly",
                })
              : null,
          fu = ({
            value: e,
            fields: t = [],
            isDeviceMobile: a = !1,
            onChange: r = () => {},
          }) => {
            const { formatMessage: l } = (0, de.A)();
            return n.createElement(
              Qa.Ay,
              { value: e, onChange: r },
              n.createElement(
                Qa.Ay.Trigger,
                {
                  w: 140,
                  "data-at": "af-item-field",
                  type: "button",
                  "aria-label": l({
                    id: "ariaLabel.advancedFilters.selectField",
                  }),
                },
                n.createElement(qt.A, { id: `advancedFilter.field.${e}` }),
                " ",
                hu(e, a)
              ),
              n.createElement(
                Qa.Ay.Menu,
                { "data-at": "select-field-dd" },
                t.map((e, t) =>
                  n.createElement(
                    Qa.Ay.Option,
                    {
                      value: e,
                      key: t,
                      direction: "row",
                      flexWrap: !0,
                      "data-at": `option-${e}`,
                    },
                    n.createElement(
                      jt.A,
                      null,
                      n.createElement(
                        nr.A,
                        { size: 200 },
                        n.createElement(qt.A, {
                          id: `advancedFilter.field.${e}`,
                        }),
                        " ",
                        hu(e, a)
                      )
                    )
                  )
                )
              )
            );
          };
        fu.propTypes = {
          onChange: v().func,
          value: v().string.isRequired,
          fields: v().array,
          isDeviceMobile: v().bool,
        };
        const Eu = fu;
        var vu = a(76078);
        const wu = ({ id: e, onRemove: t = () => {} }) => {
          const a = (0, o.wA)();
          return n.createElement(
            Nt.A,
            {
              size: "s",
              use: "tertiary",
              className: "filter_line-module__removeButton___NJn6g",
              onClick: () => {
                a(Gc(e)), t();
              },
              ml: 4,
              "data-at": "qf-remove-filter",
            },
            n.createElement(vu.A, null)
          );
        };
        wu.propTypes = { id: v().string.isRequired, onRemove: v().func };
        const Tu = wu,
          ku = ({
            fieldsConfig: e,
            id: t,
            onApply: a,
            focused: r = !1,
            onRemove: l = () => {},
          }) => {
            const i = Xp().length > 1,
              {
                isIncludes: s,
                field: c,
                criteria: d,
                value: p,
              } = ((e) => (0, o.d4)((t) => $l(t, e)))(t),
              u = (0, o.wA)(),
              { device: m } = (0, o.d4)(We.eF),
              y = m === $t.W.mobile;
            return n.createElement(
              ce.A,
              {
                px: 4,
                alignItems: "center",
                role: "group",
                "data-at": "af-filter-row",
              },
              n.createElement(
                jt.A,
                {
                  mr: i ? 0 : 8,
                  className: "filter_line-module__fields___J7x_W",
                },
                n.createElement(gu, {
                  value: s,
                  onChange: (e) => u(Yc(t, "isIncludes", e)),
                  focused: r,
                }),
                n.createElement(Eu, {
                  value: c,
                  fields: e.map((e) => e.field),
                  onChange: (e) => u(Yc(t, "field", e)),
                  isDeviceMobile: y,
                }),
                e
                  .find((e) => e.field === c)
                  .render({
                    criteria: d,
                    value: p,
                    onApply: a,
                    setValue: (e) => u(Yc(t, "value", e)),
                    setCriteria: (e) => u(Yc(t, "criteria", e)),
                  })
              ),
              i && n.createElement(Tu, { id: t, onRemove: l })
            );
          };
        ku.propTypes = {
          fieldsConfig: v().arrayOf(v().object).isRequired,
          id: v().string.isRequired,
          onApply: v().func.isRequired,
          onRemove: v().func,
          focused: v().bool,
        };
        const Au = ku,
          Cu = ["=", ">", "<"],
          Su = ["containing", "wordMatch", "exactMatch", "begins", "ends"],
          xu = ["branded", "notBranded", "forOther"],
          Ru = ["criteria", "field", "isIncludes", "value"],
          Lu = ({
            criteria: e,
            criteriesList: t = [],
            className: a = "",
            setCriteria: r = () => {},
          }) => {
            const { formatMessage: l } = (0, de.A)();
            return n.createElement(
              Qa.Ay,
              { value: e, onChange: r },
              n.createElement(
                Qa.Ay.Trigger,
                {
                  w: 140,
                  className: a,
                  "data-at": "af-item-criteria",
                  type: "button",
                  "aria-label": l({
                    id: "ariaLabel.advancedFilters.selectCriteria",
                  }),
                },
                n.createElement(qt.A, { id: `advancedFilter.criteria.${e}` })
              ),
              n.createElement(
                Qa.Ay.Menu,
                { "data-at": "select-criteria-dd" },
                t.map((e, t) =>
                  n.createElement(
                    Qa.Ay.Option,
                    {
                      value: e,
                      key: t,
                      direction: "row",
                      flexWrap: !0,
                      "data-at": `option-${e}`,
                    },
                    n.createElement(
                      jt.A,
                      null,
                      n.createElement(
                        nr.A,
                        { size: 200 },
                        n.createElement(qt.A, {
                          id: `advancedFilter.criteria.${e}`,
                        })
                      )
                    )
                  )
                )
              )
            );
          };
        Lu.propTypes = {
          criteria: v().string.isRequired,
          setCriteria: v().func,
          criteriesList: v().array,
          className: v().string,
        };
        const Ou = Lu,
          _u = ({
            criteria: e,
            value: t,
            onApply: a,
            setCriteria: r = () => {},
            setValue: l = () => {},
            dataPath: o = "",
          }) => {
            const { formatMessage: i } = (0, de.A)(),
              s = (0, n.useCallback)(
                (e) => {
                  "Enter" === e.key && a();
                },
                [a]
              );
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(Ou, {
                criteria: e,
                setCriteria: r,
                criteriesList: Su,
              }),
              n.createElement(
                Ir.A,
                { w: 140, "data-at": "af-item-value", "data-path": o },
                n.createElement(Ir.A.Value, {
                  placeholder: "",
                  value: t,
                  onChange: (e) => l(e),
                  "data-at": "input-text",
                  onKeyUp: s,
                  "aria-label": i({ id: "ariaLabel.filter.enterValue" }),
                })
              )
            );
          };
        _u.propTypes = {
          setCriteria: v().func,
          setValue: v().func,
          onApply: v().func.isRequired,
          criteria: v().string.isRequired,
          value: v().string.isRequired,
          dataPath: v().string,
        };
        const Pu = _u;
        var Iu = a(71308);
        const Mu = ({
          setCriteria: e,
          setValue: t,
          criteria: a,
          onApply: r,
          step: l = 1,
          value: o = null,
          dataPath: i = "",
        }) => {
          const { formatMessage: s } = (0, de.A)(),
            c = (0, n.useCallback)(
              (e) => {
                t("" !== e ? Number(e) : null);
              },
              [t]
            ),
            d = (0, n.useCallback)(
              (e) => {
                "Enter" === e.key && r();
              },
              [r]
            );
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(Ou, {
              criteria: a,
              setCriteria: e,
              criteriesList: Cu,
            }),
            n.createElement(
              Iu.A,
              {
                w: 140,
                state: "normal",
                "data-at": "af-item-value",
                "data-path": i,
              },
              n.createElement(Iu.A.Value, {
                min: 0,
                step: l,
                value: o,
                onChange: c,
                onKeyUp: d,
                "data-at": "input-number",
                "aria-label": s({ id: "ariaLabel.filter.enterValue" }),
              }),
              n.createElement(Iu.A.Controls, null)
            )
          );
        };
        Mu.propTypes = {
          setCriteria: v().func.isRequired,
          setValue: v().func.isRequired,
          onApply: v().func.isRequired,
          criteria: v().oneOf(Cu).isRequired,
          value: v().number,
          step: v().number,
          dataPath: v().string,
        };
        const Du = Mu,
          Fu = ({
            onApply: e,
            value: t = null,
            step: a = 1,
            onChange: r = () => {
              console.warn("onChange function is not defined");
            },
            dataPath: l = "",
          }) => {
            const { formatMessage: i } = (0, de.A)(),
              s = (0, o.d4)(Ua),
              c = (0, o.d4)((e) =>
                ((e, t) => {
                  const a = ia()(Ta(e), ka(e), {});
                  return ia()(a, `${t.toUpperCase()}.rate`, 1);
                })(e, s)
              ),
              [d, p] = (0, n.useState)(
                null != t
                  ? ((e, t) => Math.round(e * t * 100) / 100)(t, c)
                  : null
              ),
              u = (0, n.useCallback)(
                (e) => {
                  p(e),
                    r(
                      ((e, t) => Math.round((e / t) * 100) / 100)(Number(e), c)
                    );
                },
                [r, c]
              ),
              m = (0, n.useCallback)(
                (t) => {
                  "Enter" === t.key && e();
                },
                [e]
              );
            return n.createElement(
              Iu.A,
              {
                w: 140,
                state: "normal",
                "data-at": "af-item-value",
                "data-path": l,
              },
              n.createElement(Iu.A.Value, {
                min: 0,
                step: a,
                value: null === d ? "" : d,
                onChange: u,
                onKeyUp: m,
                "data-at": "input-currency",
                "aria-label": i({ id: "ariaLabel.filter.enterValue" }),
              }),
              n.createElement(Iu.A.Controls, null)
            );
          };
        Fu.propTypes = {
          value: v().number,
          step: v().number,
          onChange: v().func,
          onApply: v().func.isRequired,
          dataPath: v().string,
        };
        const ju = Fu,
          qu = ({
            criteria: e,
            value: t,
            step: a,
            onApply: r,
            setCriteria: l = () => {},
            setValue: o = () => {},
            dataPath: i = "",
          }) =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(Ou, {
                criteria: e,
                setCriteria: l,
                criteriesList: Cu,
              }),
              n.createElement(ju, {
                value: t,
                onChange: (e) => o(Number(e)),
                step: a,
                onApply: r,
                dataPath: i,
              })
            );
        qu.propTypes = {
          setCriteria: v().func,
          setValue: v().func,
          criteria: v().string.isRequired,
          value: v().string.isRequired,
          step: v().number.isRequired,
          onApply: v().func.isRequired,
          dataPath: v().string,
        };
        const Nu = qu;
        function Uu() {
          return (
            (Uu = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Uu.apply(null, arguments)
          );
        }
        const $u = [
            {
              field: "keyword",
              render: (e) =>
                n.createElement(
                  Pu,
                  Uu({ dataPath: "keyword_gap.table.filters.keyword" }, e)
                ),
            },
            {
              field: "volume",
              render: (e) =>
                n.createElement(
                  Du,
                  Uu({ dataPath: "keyword_gap.table.filters.volume" }, e)
                ),
            },
            {
              field: "cpc",
              render: (e) =>
                n.createElement(
                  Nu,
                  Uu(
                    { dataPath: "keyword_gap.table.filters.cpc", step: 0.01 },
                    e
                  )
                ),
            },
            {
              field: "comp",
              render: (e) =>
                n.createElement(
                  Du,
                  Uu(
                    { dataPath: "keyword_gap.table.filters.comp", step: 0.01 },
                    e
                  )
                ),
            },
            {
              field: "results",
              render: (e) =>
                n.createElement(
                  Du,
                  Uu({ dataPath: "keyword_gap.table.filters.results" }, e)
                ),
            },
          ],
          Vu = ({ onApply: e, isFocusOn: t = !1, onRemove: a = () => {} }) => {
            const r = Xp();
            return n.createElement(
              ce.A,
              {
                direction: "column",
                py: 4,
                className: "filters_list-module__list___Aad4h",
                "data-at": "filter-list",
              },
              r.map((l, o) =>
                n.createElement(Au, {
                  key: l,
                  id: l,
                  focused: t && r.length - 1 === o,
                  fieldsConfig: $u,
                  onApply: e,
                  onRemove: a,
                })
              )
            );
          };
        Vu.propTypes = {
          onRemove: v().func,
          onApply: v().func.isRequired,
          isFocusOn: v().bool,
        };
        const zu = Vu,
          Ku = ({ onClose: e = () => {} }) => {
            const t = (0, n.useRef)(null),
              a = (() => {
                const e = (0, o.wA)();
                return (t) => e(Bc(t));
              })(),
              r = (0, n.useRef)(null),
              [l, i] = (0, n.useState)(!1),
              { formatMessage: s } = (0, de.A)(),
              { gaApplyFilter: c } = (() => {
                const e = (() => {
                  const e = (0, o.d4)(Ul),
                    { order: t, ...a } = e;
                  return Object.values(a);
                })();
                return {
                  gaApplyFilter: () => {
                    Ap.track(Ap.eventName.applyFilter, {
                      item_location:
                        "keyword_gap.table.filters.advanced_filters",
                      item_label: `${e.length}`,
                    }),
                      e.forEach((e) => {
                        Ap.track(Ap.eventName.applyFilter, {
                          item_location: `keyword_gap.table.filters.${e.field}`,
                          state: su?.[e.criteria] ?? e.criteria,
                          status: e.isIncludes ? "include" : "exclude",
                        });
                      });
                  },
                };
              })(),
              d = (0, n.useCallback)(() => {
                setTimeout(() => {
                  t.current &&
                    (t.current.children[0].scrollTop =
                      t.current.children[0].scrollHeight - 186);
                }, 10);
              }, []);
            (0, n.useEffect)(() => {
              d();
            }, [d]);
            const p = (0, n.useCallback)(() => {
              a(), c(), setTimeout(() => e(), 150);
            }, [a, e, c]);
            return n.createElement(
              jt.A,
              {
                role: "group",
                "aria-label": s({ id: "advancedFilter.placeholder" }),
                className: "advanced_filters_content-module__wrapper___FlwYX",
              },
              n.createElement(
                lu.Ay,
                { hMax: 186, ref: t, tabIndex: -1 },
                n.createElement(zu, {
                  isFocusOn: l,
                  onApply: p,
                  onRemove: () => {
                    i(!1), r.current.focus();
                  },
                })
              ),
              n.createElement(
                jt.A,
                { ml: 4 },
                n.createElement(uu, {
                  ref: r,
                  onAdd: () => {
                    i(!0), d();
                  },
                })
              ),
              n.createElement(Ut.A, {
                orientation: "horizontal",
                theme: "default",
                use: "primary",
                mt: 4,
                mb: 4,
              }),
              n.createElement(du, { onApply: p, onClose: e })
            );
          };
        Ku.propTypes = { onClose: v().func };
        const Bu = Ku;
        var Ju = a(54911);
        const Wu = ({ counter: e = 0 }) =>
          n.createElement(
            ce.A,
            { alignItems: "center" },
            n.createElement(
              jt.A,
              { mr: 2 },
              n.createElement(qt.A, { id: "advancedFilter.placeholder" })
            ),
            !!e && n.createElement(Ju.A, { theme: "light-blue" }, e)
          );
        Wu.propTypes = { counter: v().number };
        const Gu = Wu,
          Yu = ({ isFeatureLimited: e = !1 }) => {
            const t = (() => {
                const e = (0, o.d4)(Vl);
                return Object.keys(e).length;
              })(),
              a = Zp(),
              { formatMessage: r } = (0, de.A)(),
              [l, i] = (0, n.useState)(!1),
              s =
                0 === t
                  ? r({ id: "ariaLabel.filter.advanced.empty" })
                  : r(
                      { id: "ariaLabel.filter.advanced.applied" },
                      { COUNT: t }
                    );
            return n.createElement(
              ip(),
              {
                visible: l,
                onVisibleChange: (e) => {
                  i(e),
                    e &&
                      f({
                        category: ou,
                        action: "click:advanced-filter",
                        label: "advanced-filter:show",
                      });
                },
                disabled: e,
              },
              n.createElement(
                ip().Trigger,
                {
                  onClear: () => {
                    a(),
                      f({
                        category: ou,
                        action: "click:advanced-clear",
                        label: "advanced-filter:clear-filter",
                      });
                  },
                  placeholder: r({ id: "advancedFilter.placeholder" }),
                  "data-at": "af-button",
                  "data-path": "keyword_gap.table.filters.advanced_filters",
                  "aria-label": s,
                  empty: 0 === t,
                },
                n.createElement(Gu, { counter: t })
              ),
              n.createElement(
                ip().Popper,
                {
                  hMax: 400,
                  placement: "bottom-end",
                  "data-at": "af-dropdown",
                },
                n.createElement(Bu, {
                  onClose: () => {
                    i(!1);
                  },
                })
              )
            );
          };
        Yu.propTypes = { isFeatureLimited: v().bool };
        const Hu = Yu,
          Qu = new Map([
            [
              "default",
              {
                keywordSearch: {
                  w: "240px",
                  style: { flexShrink: 0, overflow: "visible" },
                },
                positions: { style: { flexShrink: 0 } },
                volume: { style: { flexShrink: 0 } },
                kd: { style: { flexShrink: 0 } },
                advanced: { style: { minWidth: "135px", flexShrink: 0 } },
              },
            ],
            [
              "(max-width: 1350px)",
              {
                keywordSearch: {
                  w: "140px",
                  style: { flexShrink: 0, overflow: "visible" },
                },
                sf: { style: { flexShrink: 1 } },
                intent: { style: { flexShrink: 1 } },
                advanced: { style: { minWidth: "135px", flexShrink: 0 } },
              },
            ],
          ]),
          Zu = (0, se.default)(jt.A)`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: #f4f5f9;
  z-index: 4;
  margin-bottom: 1px; /* need this becouse filters overlap bottom cards*/
  box-shadow: -1px 0px 0px 0px #f4f5f9, 1px 0px 0px 0px #f4f5f9; /* fix visible borders from underline blocks */

  border-bottom: ${({ isSticky: e }) => (e ? "1px solid #ccc" : "none")};
`,
          Xu = () => {
            const [e, t] = (0, n.useState)(!1),
              a = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                const e = a.current,
                  r = new IntersectionObserver(
                    ([e]) => {
                      const a = e.isIntersecting;
                      t(a);
                    },
                    { rootMargin: "0px 0px -100% 0px", threshold: 0 }
                  );
                return (
                  r.observe(e),
                  function () {
                    r.unobserve(e);
                  }
                );
              }, []),
              n.createElement(
                Zu,
                { py: 4, px: 0, isSticky: e, ref: a },
                n.createElement(
                  lp,
                  { config: Qu, "data-at": "filters-panel" },
                  n.createElement(
                    Ho,
                    { limitContext: "filters", name: "keywordSearch" },
                    n.createElement(tu, null)
                  ),
                  n.createElement(
                    Ho,
                    { limitContext: "filters", name: "positions" },
                    n.createElement(_p, null)
                  ),
                  n.createElement(
                    Ho,
                    { limitContext: "filters", name: "volume_ui" },
                    n.createElement(zp, null)
                  ),
                  n.createElement(
                    Ho,
                    { limitContext: "filters", name: "kd" },
                    n.createElement(Yp, null)
                  ),
                  n.createElement(
                    Ho,
                    { limitContext: "filters", name: "intent" },
                    n.createElement(nu, null)
                  ),
                  n.createElement(
                    Ho,
                    { limitContext: "filters", name: "advanced" },
                    n.createElement(Hu, null)
                  )
                )
              )
            );
          },
          em = n.memo(Xu);
        var tm = a(60522);
        const am = () => {
            const e = (0, o.d4)(We.al),
              [t, a] = (0, n.useState)(!0);
            return e
              ? n.createElement(
                  tm.A,
                  {
                    theme: "warning",
                    closable: !0,
                    label: n.createElement(hd.A, null),
                    hidden: !t,
                    onClose: () => a(!1),
                    mt: 4,
                  },
                  n.createElement(
                    jt.A,
                    { "data-at": "notice-text" },
                    n.createElement(qt.A, {
                      id: "searchTypeNotice.text",
                      values: { b: (e) => n.createElement("b", null, e) },
                    })
                  ),
                  n.createElement(
                    Nt.A,
                    {
                      mt: 3,
                      size: "m",
                      use: "primary",
                      theme: "success",
                      onClick: () => {
                        i.BillingUI.quickUpgradePopup({
                          upgradeTo: i.USER_ROLES.guru,
                          source: j,
                        });
                      },
                      "data-at": "btns-container",
                    },
                    n.createElement(qt.A, { id: "limitBlock.guru.upgradeText" })
                  )
                )
              : null;
          },
          rm = n.memo(am),
          nm = se.createGlobalStyle`
  #root-content {
    min-width: 1050px;
  }
  html {
    scroll-padding-top: 100px;
  }
`,
          lm = (0, se.default)(ce.A)`
  flex-grow: 1;
`,
          om = (0, se.default)(jt.A)`
  justify-self: stretch;
  align-self: stretch;
  flex-grow: 1;
`,
          im = "Table",
          sm = (0, se.default)(ts.A)`
  word-break: break-all;
`,
          cm = () => {
            const { formatMessage: e } = (0, de.A)(),
              t = (0, o.d4)(ol.yo),
              a = (0, o.wA)();
            if (0 === t.length) return null;
            const r = ((e) =>
                e.map(({ searchItem: e, searchType: t }, a) => ({
                  label: yd(Ct(e), t),
                  value: a,
                })))(t),
              l = r[0];
            return n.createElement(
              Qa.Ay,
              {
                value: l?.value,
                onChange: (e) => {
                  a(Kn(pd(t, e))),
                    f({ action: im, label: "select you-domain" });
                },
                onVisibleChange: (e) => {
                  e && f({ action: im, label: "click change you-domain" });
                },
                "data-at": "competitor-switcher",
              },
              n.createElement(
                Qa.Ay.Trigger,
                {
                  wMax: 180,
                  "data-at": "competitor-switcher-trigger",
                  "aria-label": e(
                    { id: "ariaLabel.selectYouDomain" },
                    { DOMAIN: l?.label }
                  ),
                },
                n.createElement(ts.A, null, l.label)
              ),
              n.createElement(
                Qa.Ay.Menu,
                { wMax: 180, "data-at": "competitor-switcher-dd" },
                r.map(({ value: e, label: t }, a) =>
                  n.createElement(
                    Qa.Ay.Option,
                    {
                      value: e,
                      key: e,
                      wMax: 180,
                      direction: "row",
                      "data-at": `option-${e}`,
                    },
                    n.createElement(
                      ce.A,
                      null,
                      n.createElement(
                        Qa.Ay.Trigger.Addon,
                        { mr: 2, "data-at": "option-circle" },
                        n.createElement(Wr, {
                          color: Yr(a),
                          "data-at": `competitor-circle-${a}`,
                        })
                      ),
                      n.createElement(
                        Qa.Ay.Trigger.Text,
                        { tag: sm, maxLine: 3 },
                        t
                      )
                    )
                  )
                )
              )
            );
          },
          dm = () =>
            n.createElement(
              ce.A,
              { alignItems: "center", id: "kg_table_header" },
              n.createElement(
                Ms.WidgetTitle,
                { mr: 2 },
                n.createElement(qt.A, {
                  id: "kgTable.competitorSelector.label",
                })
              ),
              n.createElement(jt.A, { mr: 2 }, n.createElement(cm, null)),
              n.createElement(zr, null)
            ),
          pm = (e) =>
            e === i.USER_ROLES.guest
              ? "Payment FREE"
              : e
              ? Io[e]
              : "Payment NOT DEFINED",
          um = (e) => {
            let t = null;
            switch (e) {
              case "total":
                t = "all keywords";
                break;
              case "common":
                t = "shared";
                break;
              default:
                t = e;
            }
            return t;
          },
          mm = () => (0, o.d4)(Cl),
          ym = ({ name: e }) => {
            const { formatNumber: t } = (0, de.A)(),
              { formatCompactNumber: a } = (0, O.useIntlHelpers)(),
              r = (0, o.d4)(hl),
              l = (0, o.d4)(wl),
              i = l?.[e];
            return n.createElement(
              ce.A,
              { wMin: 5 },
              r
                ? n.createElement(
                    or.A,
                    { hidden: !1, height: 10, width: 10 },
                    n.createElement(or.A.Text, {
                      y: 1,
                      width: 10,
                      "data-at": "pill-loading",
                    })
                  )
                : n.createElement(
                    nr.A,
                    {
                      size: 200,
                      color: "gray-500",
                      "data-at": "pill-volume",
                      "aria-label": t(i),
                    },
                    a(i)
                  )
            );
          };
        ym.propTypes = { name: v().string.isRequired };
        const gm = n.memo(ym),
          bm = ({ isFeatureLimited: e = !1 }) => {
            const t = (() => {
                const e = (0, o.d4)(yl);
                return (0, o.d4)(ul) || e;
              })(),
              a = Bs(),
              { formatMessage: r } = (0, de.A)(),
              l = (0, n.useCallback)(
                (t) => {
                  var r;
                  e ||
                    (a({ intersectionType: t }),
                    f({ action: "Table", label: `select tab ${um(t)}` }),
                    (r = t),
                    Ap.track(Ap.eventName.applyFilter, {
                      item_label: r,
                      item_location: "keyword_gap.table.filters.pills",
                    }));
                },
                [e, a]
              );
            return n.createElement(
              ce.A,
              { alignItems: "center", "data-at": "keyword-filters", wMin: 0 },
              n.createElement(
                Bi.A,
                {
                  value: t,
                  onChange: l,
                  "data-at": "table-keyword-type-pills",
                  "data-path": "keyword_gap.table.filters.pills",
                  "aria-label": r({ id: "ariaLabel.keywordType" }),
                  wMin: 0,
                  "aria-controls": Ks,
                  behavior: "manual",
                },
                Dn.map((e) =>
                  n.createElement(
                    Bi.A.Item,
                    {
                      value: e,
                      key: e,
                      "data-at": `table-keyword-type-pill-${e}`,
                      tag: Mr.Ay,
                      timeout: $t.a4,
                      title: r({ id: `intersectionTypePills.tooltip.${e}` }),
                    },
                    n.createElement(
                      Bi.A.Item.Text,
                      { "data-at": "pill-text", wMin: 0 },
                      n.createElement(
                        ts.A,
                        { tooltip: !1 },
                        r({ id: `keywords.${e}` })
                      )
                    ),
                    n.createElement(
                      Bi.A.Item.Addon,
                      null,
                      n.createElement(
                        ce.A,
                        { wMin: 5 },
                        n.createElement(gm, { name: e })
                      )
                    )
                  )
                )
              )
            );
          };
        bm.propTypes = { isFeatureLimited: v().bool };
        const hm = bm,
          fm = (e) => e.kgTable.limitError,
          Em = (0, la.Mz)([Tl], (e) => Math.ceil(e / 100)),
          vm = (0, la.Mz)(
            [(e) => e.kgTable.selectedKeywords, (e) => Yl(e)],
            (e, t) => {
              const a = Hl(t);
              return e?.[a] ?? [];
            }
          ),
          wm = (0, la.Mz)([vm, (e, t) => t], (e, t) =>
            Boolean(e.find((e) => e === t) || !1)
          ),
          Tm = (0, la.Mz)(
            [(e) => ao(e), vm],
            (e, t) => e?.every((e) => t?.includes(e) ?? !1) ?? !1
          ),
          km = (0, la.Mz)(
            [(e) => ao(e), vm],
            (e, t) => e?.some((e) => t?.includes(e) ?? !1) ?? !1
          ),
          Am = (0, la.Mz)([vm, (e) => to(e)], (e, t) => e.map((e) => t[e]));
        (0, la.Mz)([(e) => ro(e)], (e) => {
          let t;
          for (let a = 0; a < e.length; a++)
            if ("" === e[a].keyword) {
              t = a;
              break;
            }
          return t;
        });
        var Cm = a(38259);
        const Sm = () => {
            const { locale: e } = (0, de.A)();
            return (
              (0, n.useEffect)(() => {
                f({
                  action: "Something went wrong",
                  label: "Table - Keyword Gap",
                });
              }, []),
              n.createElement(
                jt.A,
                { mt: 10 },
                n.createElement(Cm.A, { locale: e })
              )
            );
          },
          xm = n.memo(Sm);
        function Rm() {
          return (
            (Rm = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Rm.apply(null, arguments)
          );
        }
        const Lm = { duration: 0, "data-at": "non-loading-skeleton" },
          Om = ({ fields: e = "", blurred: t = !1 }) =>
            n.createElement(
              Hs.Ay.Body,
              null,
              n.createElement(Hs.Ay.Cell, { name: e, h: 44 }, () => ({
                children: n.createElement(
                  ce.A,
                  { alignItems: "center" },
                  n.createElement(Xs, Rm({ width: "90%" }, t ? Lm : {}))
                ),
              })),
              n.createElement(
                Hs.Ay.Cell,
                { name: "id", justifyContent: "center" },
                () => ({
                  children: n.createElement(
                    cd.A,
                    { size: "m", disabled: !0 },
                    n.createElement(cd.A.Value, null)
                  ),
                })
              )
            );
        Om.propTypes = { fields: v().string, blurred: v().bool };
        const _m = n.memo(Om);
        var Pm = a(55885),
          Im = a(71325),
          Mm = a.n(Im);
        const Dm = (0, Ee.VP)("requestSetTableSorting", (e) => ({ field: e })),
          Fm = (0, Ee.VP)("setTableSorting", (e, t) => ({
            field: e,
            direction: t,
          })),
          jm = (0, Ee.VP)("setTableLimitError", (e) => ({ limitError: e })),
          qm = (0, Ee.VP)("requestSetCurrentPage", (e) => ({
            page: Number(e),
          })),
          Nm = (0, Ee.VP)("updateCurrentPage", (e) => ({ page: e })),
          Um = (0, Ee.VP)("setCurrentPage", (e) => ({ page: e })),
          $m = (0, Ee.VP)("setPrevPage", (e) => ({ page: e })),
          Vm = (0, Ee.VP)("requestToggleSelectionKeyword", (e) => ({ id: e })),
          zm = (0, Ee.VP)("toggleSelectionKeyword", (e, { page: t, ...a }) => ({
            id: e,
            params: a,
          })),
          Km = (0, Ee.VP)("selectAllKeywords", (e, { page: t, ...a }) => ({
            ids: e,
            params: a,
          })),
          Bm = (0, Ee.VP)("selectAllKeywords", (e, { page: t, ...a }) => ({
            ids: e,
            params: a,
          })),
          Jm = (0, Ee.VP)("toggleAllSelection"),
          Wm = (0, Ee.VP)("clearSlectedKeywords"),
          Gm = () => (0, o.d4)(vm),
          Ym = () => {
            const e = Gm();
            return e?.length ?? 0;
          },
          Hm = () => (0, o.d4)(fm),
          Qm = async ({ requestId: e, database: t }) => {
            const a = { requestId: e, report: st.REPORT_NAME.meta },
              r = {
                database: t,
                api_key: _.A.apiKey,
                report_type: st.REPORT_NAME.gap,
              };
            return await bt.fetchData("/Meta/UserPermissions", a, r);
          },
          Zm = async ({ requestId: e }) => {
            const t = { requestId: e, report: st.REPORT_NAME.meta },
              a = { api_key: _.A.apiKey };
            return (await bt.fetchData("/Meta/UserDatabases", t, a)).databases;
          },
          Xm = async ({ requestId: e, db: t, device: a }) => {
            const r = { requestId: e, report: st.REPORT_NAME.gap },
              n = { database: (0, it.prepareDatabase)(t, a) },
              { daily: l, monthly: o } = await bt.fetchData(
                "/Meta/SnapshotDates",
                r,
                n
              );
            return {
              daily: [l[l.length - 1]].map(it.dateObjectToString),
              monthly: o.map(it.dateObjectToString),
            };
          },
          ey = (0, Ee.VP)("requestKeywords", ({ reload: e = !1 }) => ({
            reload: e,
          })),
          ty = (0, Ee.VP)("getKeywordsSuccess", (e, t) => ({
            data: e,
            pageParams: t,
          })),
          ay = (0, Ee.VP)("startFetchKeywords", (e) => ({ params: e })),
          ry = (0, Ee.VP)("dataFound"),
          ny = () => {
            const e = (0, o.wA)(),
              [t, a] = (0, n.useState)(!1),
              [r, l] = (0, n.useState)(!1),
              i = (0, o.d4)(We.Lf),
              s = (0, o.d4)(We.Pf);
            return {
              isConnectDBInProcess: r,
              isConnectDBError: t,
              onConnectDb: () => {
                l(!0),
                  (async () => {
                    try {
                      const t = await (async ({ db: e, device: t }) => {
                        const a = { report: st.REPORT_NAME.meta },
                          r = {
                            database: (0, it.prepareDatabase)(e, t),
                            api_key: _.A.apiKey,
                          };
                        return await bt.fetchData(
                          "/Meta/SetUserDatabasePermission",
                          a,
                          r
                        );
                      })({ db: i, device: s });
                      l(!1),
                        null != t?.code
                          ? a(!0)
                          : (e(ey({ reload: !0 })), e(Ce((0, kt.Z0)(i, s))));
                    } catch (e) {
                      console.warn(e), l(!1), a(!0);
                    }
                  })();
              },
            };
          },
          ly = ({ connectedDBCount: e, maxDbCount: t }) =>
            e < t
              ? 0 === e
                ? n.createElement(qt.A, {
                    id: "tinydbLandings.connectDatabases",
                    values: { NUM: t, br: () => n.createElement("br", null) },
                  })
                : n.createElement(qt.A, {
                    id: "tinydbLandings.seeResults",
                    values: {
                      countOpen: e,
                      countAvailable: t,
                      br: () => n.createElement("br", null),
                    },
                  })
              : n.createElement(qt.A, {
                  id: "tinydbLandings.connectSales",
                  values: { br: () => n.createElement("br", null) },
                });
        ly.propTypes = {
          connectedDBCount: v().number.isRequired,
          maxDbCount: v().number.isRequired,
        };
        const oy = ly,
          iy = (0, se.default)(ce.A)`
  position: relative;
  top: 130px;
`,
          sy = ({
            connectedDBCount: e,
            maxDbCount: t,
            isConnectLoading: a,
            onContactSalesClick: r,
            onConnectDbClick: l,
          }) => {
            const o = e < t;
            return n.createElement(
              iy,
              { direction: "column", alignItems: "center", hMin: 400 },
              n.createElement(
                ce.A,
                { direction: "column", alignItems: "center" },
                n.createElement(
                  nr.A,
                  { size: 500, tag: "p", lineHeight: 1.12, mb: 4, medium: !0 },
                  n.createElement(qt.A, { id: "tinydbLandings.title" })
                ),
                n.createElement(
                  nr.A,
                  { size: 200, tag: "p", mb: 8, textAlign: "center" },
                  n.createElement(oy, { connectedDBCount: e, maxDbCount: t })
                ),
                n.createElement(
                  ce.A,
                  { direction: "column", alignItems: "center" },
                  n.createElement(
                    Nt.A,
                    {
                      size: "l",
                      use: "primary",
                      theme: "success",
                      onClick: o ? l : r,
                      loading: a,
                      loadingTip: n.createElement(qt.A, {
                        id: "tinydbLandings.loading",
                      }),
                    },
                    o
                      ? n.createElement(qt.A, {
                          id: "tinydbLandings.connectToMore",
                        })
                      : n.createElement(qt.A, {
                          id: "tinydbLandings.contactSales",
                        })
                  )
                )
              )
            );
          };
        sy.propTypes = {
          connectedDBCount: v().number.isRequired,
          maxDbCount: v().number.isRequired,
          isConnectLoading: v().bool.isRequired,
          onContactSalesClick: v().func.isRequired,
          onConnectDbClick: v().func.isRequired,
        };
        const cy = sy,
          dy = ({ userRole: e }) => {
            const { isConnectDBInProcess: t, onConnectDb: a } = ny(),
              r = (0, o.d4)(Wa),
              l = (0, o.d4)(We.Lf);
            (0, n.useEffect)(() => {
              t ||
                f({
                  action: pm(void 0),
                  label: "table tiny - show limit popup",
                });
            }, [t]);
            const s = r >= 2;
            return (
              (0, n.useEffect)(
                () =>
                  ((e, t) =>
                    f({ action: pm(e), label: `table tiny - ${t} limit` }))(
                    e,
                    l
                  ),
                [s, e, l]
              ),
              n.createElement(
                jt.A,
                { hMin: 400 },
                n.createElement(cy, {
                  connectedDBCount: r,
                  maxDbCount: 2,
                  isConnectLoading: t,
                  onContactSalesClick: () => {
                    ((e) => {
                      f({ action: pm(e), label: "table tiny - contact sales" });
                    })(e),
                      i.BillingUI.customPlanRequest(!0);
                  },
                  onConnectDbClick: () => {
                    ((e, t) => {
                      f({ action: pm(e), label: `table tiny - connect ${t}` });
                    })(e, l),
                      a();
                  },
                })
              )
            );
          };
        dy.propTypes = { userRole: v().string.isRequired };
        const py = dy;
        function uy() {
          return (
            (uy = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            uy.apply(null, arguments)
          );
        }
        const my = ({ userRole: e, onLogin: t }) =>
          i.USER_ROLES.isGuest(e)
            ? n.createElement(
                Nt.A,
                { theme: "link", type: "primary", size: "m", onClick: t },
                n.createElement(qt.A, { id: "buttons.logIn" })
              )
            : null;
        my.propTypes = {
          userRole: v().string.isRequired,
          onLogin: v().func.isRequired,
        };
        const yy = my,
          gy = (0, se.default)(ce.A)`
  position: relative;
  top: 130px;
`,
          by = ({ userRole: e, onPlansClick: t, onLogin: a }) =>
            n.createElement(
              gy,
              { direction: "column", alignItems: "center", hMin: 400 },
              n.createElement(
                ce.A,
                { direction: "column", alignItems: "center" },
                n.createElement(
                  nr.A,
                  { size: 500, tag: "p", lineHeight: 1.12, mb: 4, medium: !0 },
                  n.createElement(qt.A, { id: "tinydbLandings.title" })
                ),
                n.createElement(
                  nr.A,
                  { size: 200, tag: "p", mb: 8 },
                  n.createElement(qt.A, { id: "tinydbLandings.text" })
                ),
                n.createElement(
                  ce.A,
                  { direction: "column", alignItems: "center" },
                  n.createElement(
                    ce.A,
                    null,
                    n.createElement(
                      Nt.A,
                      {
                        size: "l",
                        use: "primary",
                        theme: "success",
                        onClick: t,
                      },
                      n.createElement(qt.A, {
                        id: "limitBlock.pro.upgradeText",
                      })
                    )
                  ),
                  n.createElement(yy, { userRole: e, onLogin: a })
                )
              )
            );
        by.propTypes = {
          userRole: v().string.isRequired,
          onPlansClick: v().func.isRequired,
          onLogin: v().func.isRequired,
        };
        const hy = by,
          fy = ({ userRole: e, onSubscribe: t, onLogin: a }) =>
            n.createElement(
              jt.A,
              { hMin: 400 },
              n.createElement(hy, {
                userRole: e,
                onPlansClick: () => {
                  ((e) => {
                    f({ action: pm(e), label: "table tiny - see plans" });
                  })(e),
                    t(i.USER_ROLES.pro);
                },
                onLogin: a,
              })
            );
        fy.propTypes = {
          userRole: v().string.isRequired,
          onSubscribe: v().func.isRequired,
          onLogin: v().func.isRequired,
        };
        const Ey = ((e) => {
            const t = ({
              modalComponent: t,
              onLoginClick: a = () => {},
              onSubscribeClick: r = () => {},
              onRegisterClick: l = () => {},
              onPageChange: s = () => {},
              ...c
            }) => {
              const [d, p] = (0, n.useState)(!1),
                u = (0, o.d4)(Jl),
                m = (0, o.d4)(Bl);
              return n.createElement(
                ce.A,
                { direction: "column", h: "100%" },
                n.createElement(
                  e,
                  uy(
                    {
                      onLogin: () => {
                        window?.sm2?.authentication
                          ? window.sm2.authentication.open({
                              tab: "login",
                              login_callback: `${window.location.href}`,
                            })
                          : console.warn("can't open log in window"),
                          a();
                      },
                      onSubscribe: (e) => {
                        i.BillingUI.quickUpgradePopup({
                          upgradeTo: e,
                          source: j,
                        }),
                          r();
                      },
                      onRegister: () => {
                        window?.sm2?.authentication
                          ? window.sm2.authentication.open({
                              tab: "register",
                              registration_callback: `${window.location.href}`,
                            })
                          : console.warn("can't open register window"),
                          l();
                      },
                      onPrevPage: () => {
                        s(u);
                      },
                      onModalOpen: () => {
                        p(!0);
                      },
                      page: m,
                    },
                    c
                  )
                ),
                n.createElement(
                  Oo.A,
                  {
                    visible: d,
                    onClose: () => {
                      p(!1);
                    },
                  },
                  t
                )
              );
            };
            return (
              (t.propTypes = {
                modalComponent: v().element,
                onSubscribeClick: v().func,
                onLoginClick: v().func,
                onRegisterClick: v().func,
                onPageChange: v().func,
              }),
              (t.defaultProps = {
                modalComponent: n.createElement("span", null, "this is modal"),
                onSubscribeClick: () => {},
                onLoginClick: () => {},
                onRegisterClick: () => {},
                onPageChange: () => {},
              }),
              t
            );
          })(fy),
          vy = () => {
            const { userRole: e } = ot();
            return i.USER_ROLES.hasProduct(e)
              ? n.createElement(py, { userRole: e })
              : n.createElement(Ey, { userRole: e });
          },
          wy = (0, se.default)(jt.A)`
  min-height: ${(e) => (e.isFree ? "400px" : "0")};
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  word-break: break-all;
`,
          Ty = () => {
            const { userRole: e, isTrialAllowed: t } = ot(),
              a = (0, o.d4)(Ga),
              r = (0, o.d4)(Ya),
              l = (() => {
                const e = (0, o.wA)(),
                  t = (0, n.useCallback)(
                    (t) => {
                      e(qm(t));
                    },
                    [e]
                  );
                return t;
              })(),
              s = (() => {
                const e = (0, o.wA)();
                return (0, n.useCallback)(() => {
                  e(jm(!1));
                }, [e]);
              })(),
              c = (0, n.useCallback)(() => window.location.reload(), []),
              d = (0, n.useCallback)(() => {
                const t = (0, Im.getLastAvailablePage)(e);
                s(), l(t);
              }, [l, s, e]);
            return a && !r
              ? n.createElement(
                  jt.A,
                  { position: "absolute", zIndex: 2, w: "100%" },
                  n.createElement(vy, null)
                )
              : n.createElement(
                  wy,
                  {
                    position: "absolute",
                    zIndex: 2,
                    w: "100%",
                    isFree: !i.USER_ROLES.hasProduct(e),
                  },
                  n.createElement(
                    rr.ConditionalWrapper,
                    {
                      condition: !i.USER_ROLES.hasProduct(e),
                      wrapper: (e) => n.createElement(Pm.A, null, e),
                    },
                    n.createElement(
                      jt.A,
                      { pt: 46 },
                      n.createElement(Mm(), {
                        ga: f,
                        userRole: e,
                        onUpgradeSuccess: c,
                        onViewLastPage: d,
                        isTrialAllowed: t && i.USER_ROLES.canUseTrial(e),
                        source: j,
                      })
                    )
                  )
                );
          },
          ky = (0, se.default)(jt.A)`
  background: #fff;
  opacity: 0.8;
`,
          Ay = ({ fields: e = "" }) =>
            n.createElement(
              jt.A,
              { position: "relative" },
              n.createElement(ky, {
                w: "100%",
                h: "100%",
                position: "absolute",
                zIndex: 1,
              }),
              n.createElement(_m, { fields: e, blurred: !0 })
            );
        Ay.propTypes = { fields: v().string };
        const Cy = n.memo(Ay);
        var Sy = a(27394);
        function xy() {
          return (
            (xy = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            xy.apply(null, arguments)
          );
        }
        const Ry = ({
          title: e = null,
          description: t = null,
          withButton: a = !1,
          withIcon: r = !1,
          onClick: l = null,
          ...o
        }) =>
          n.createElement(
            Sy.A,
            xy({ icon: !!r && (0, Sy.h)("table") }, o),
            n.createElement(
              Sy.A.Title,
              null,
              e || n.createElement(qt.A, { id: "noresults.title" })
            ),
            n.createElement(
              Sy.A.Description,
              null,
              t || n.createElement(qt.A, { id: "noresults.body" })
            ),
            a && Boolean(l)
              ? n.createElement(
                  jt.A,
                  { mt: 4 },
                  n.createElement(
                    Nt.A,
                    { onClick: l },
                    n.createElement(qt.A, { id: "noresults.clearFilters" })
                  )
                )
              : null
          );
        Ry.propTypes = {
          title: v().oneOfType([v().object, v().string]),
          description: v().oneOfType([v().object, v().string]),
          withButton: v().bool,
          withIcon: v().bool,
          onClick: v().func,
        };
        const Ly = Ry,
          Oy = () => {
            const e = (0, o.d4)(Kl),
              t = (0, o.wA)(),
              a = (0, o.d4)(yl),
              r = (0, n.useCallback)(() => {
                t(jc()),
                  f({
                    action: "Table",
                    label: `click Clear filters - ${um(a)}`,
                  });
              }, [t]);
            return (
              (0, n.useEffect)(() => {
                f(
                  e
                    ? {
                        action: "Table",
                        label: `show Clear filters - ${um(a)}`,
                      }
                    : { action: "No data", label: `Table - ${um(a)}` }
                );
              }, []),
              n.createElement(
                jt.A,
                { mt: 6 },
                n.createElement(Ly, {
                  title: n.createElement(qt.A, {
                    id: "noresults.table.title",
                    values: {
                      intersectionType: n.createElement(qt.A, {
                        id: `noresults.table.intersectionType.${a}`,
                      }),
                    },
                  }),
                  description: n.createElement(qt.A, {
                    id: `noresults.table.body.${a}`,
                  }),
                  withButton: e,
                  onClick: r,
                  withIcon: !0,
                })
              )
            );
          },
          _y = ({
            isFetching: e = !1,
            hasData: t = !0,
            isLoaded: a = !1,
            hasError: r = !1,
            fields: l = "",
            showLimit: o = !1,
            children: i = null,
          }) =>
            e
              ? n.createElement(_m, { fields: l })
              : !t && a
              ? n.createElement(jt.A, { mt: 10 }, n.createElement(Oy, null))
              : r
              ? n.createElement(xm, null)
              : o
              ? n.createElement(
                  n.Fragment,
                  null,
                  i,
                  n.createElement(
                    ce.A,
                    { position: "relative", direction: "column" },
                    n.createElement(Cy, { fields: l }),
                    n.createElement(Ty, null)
                  )
                )
              : i;
        _y.propTypes = {
          isFetching: v().bool,
          hasData: v().bool,
          isLoaded: v().bool,
          hasError: v().bool,
          children: v().any,
          fields: v().string,
          showLimit: v().bool,
        };
        const Py = _y;
        var Iy = a(61105);
        const My = "Pagination",
          Dy = () => {
            f({ action: My, label: "first page" });
          },
          Fy = () => {
            f({ action: My, label: "prev" });
          },
          jy = () => {
            f({ action: My, label: "next" });
          },
          qy = () => {
            f({ action: My, label: "last page" });
          },
          Ny = (e) => {
            f({ action: My, label: "page number + enter", value: e });
          },
          Uy = (e) => {
            f({ action: My, label: "page number + button", value: e });
          },
          $y = (e) => {
            f({ action: My, label: "page number", value: e });
          },
          Vy = () => ({
            gaClickFirstPage: Dy,
            gaClickPrevPage: Fy,
            gaClicNextPage: jy,
            gaSubmitInput: Ny,
            gaClickEnter: Uy,
            gaClickLastPage: qy,
            gaClickPage: $y,
          });
        function zy() {
          return (
            (zy = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            zy.apply(null, arguments)
          );
        }
        const Ky = ({ ...e }) => {
            const {
                gaClickFirstPage: t,
                gaClickPrevPage: a,
                gaClicNextPage: r,
                gaSubmitInput: l,
                gaClickLastPage: i,
                gaClickPage: s,
              } = Vy(),
              { locale: c } = (0, de.A)(),
              d = (0, o.d4)(Bl),
              p = (0, o.d4)(Em),
              u = Hm(),
              [m, y] = (0, n.useState)(d);
            (0, n.useEffect)(() => {
              u || y(d);
            }, [y, d, u]);
            const g = (0, o.wA)(),
              b = (0, n.useCallback)(
                (e) => {
                  s(e),
                    g(qm(e)),
                    setTimeout(() => {
                      Sc(Ks);
                    }, 100);
                },
                [g]
              );
            return p <= 1
              ? null
              : n.createElement(
                  ce.A,
                  zy({}, e, { alignItems: "center" }),
                  n.createElement(
                    Iy.A,
                    {
                      currentPage: m,
                      onCurrentPageChange: b,
                      totalPages: p,
                      locale: c,
                      "aria-controls": Ks,
                    },
                    n.createElement(Iy.A.FirstPage, { onClick: t }),
                    n.createElement(Iy.A.PrevPage, { onClick: a }),
                    n.createElement(Iy.A.NextPage, { onClick: r }),
                    n.createElement(Iy.A.PageInput, {
                      onKeyPress: ({ key: e }) => {
                        "Enter" === e && l();
                      },
                    }),
                    n.createElement(Iy.A.TotalPages, { mr: 4, onClick: i })
                  )
                );
          },
          By = ({
            fields: e = [],
            isLimitedItems: t = !1,
            isLimited: a = !1,
            children: r = null,
            isFetching: l = !1,
            hasData: o = !1,
            isLoaded: i = !1,
            hasError: s = !1,
          }) => {
            const c = t || a;
            return n.createElement(
              Py,
              {
                isFetching: l,
                hasData: o,
                isLoaded: i,
                hasError: s,
                fields: e.join("/"),
                showLimit: c,
              },
              !a && r,
              !c && n.createElement(Ky, { ml: 5, mt: 5 })
            );
          };
        By.propTypes = {
          isLimitedItems: v().bool,
          isLimited: v().bool,
          children: v().oneOfType([v().element, v().array]),
          isFetching: v().bool,
          hasData: v().bool,
          isLoaded: v().bool,
          hasError: v().bool,
          fields: v().array,
        };
        const Jy = By;
        function Wy() {
          return (
            (Wy = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Wy.apply(null, arguments)
          );
        }
        const Gy = [1e3, 10],
          Yy = { overflow: "hidden" },
          Hy = ({ children: e, ...t }) =>
            n.createElement(
              Mr.Ay.Trigger,
              Wy({ "data-at": "tooltip-trigger" }, t),
              e
            ),
          Qy = ({ children: e, ...t }) => n.createElement(Mr.Ay.Popper, t, e),
          Zy = ({ children: e, ...t }) =>
            n.createElement(
              Mr.Ay,
              Wy({ interaction: "hover", timeout: Gy }, t),
              e
            ),
          Xy = ({ title: e, children: t, ...a }) =>
            n.createElement(
              Mr.Ay,
              Wy({ interaction: "hover", timeout: Gy }, a),
              n.createElement(
                Mr.Ay.Trigger,
                { "data-at": "tooltip-trigger", style: Yy },
                t
              ),
              n.createElement(Mr.Ay.Popper, { "data-at": "tooltip-popper" }, e)
            );
        (Xy.propTypes = {
          title: v().oneOfType([v().string, v().object]).isRequired,
          children: v().element.isRequired,
        }),
          (Zy.propTypes = { children: v().node.isRequired }),
          (Qy.propTypes = { children: v().node.isRequired }),
          (Hy.propTypes = { children: v().node.isRequired });
        (Hy.displayName = "Trigger"),
          (Qy.displayName = "Popper"),
          (Zy.Trigger = Hy),
          (Zy.Popper = Qy);
        v().oneOfType([v().string, v().element]),
          v().oneOfType([v().string, v().element]),
          v().number,
          v().number,
          v().number;
        const eg = (e) => e.filter(({ visible: e }) => void 0 === e || e),
          tg = (e, t) =>
            [...new Array(t)].map(() =>
              Object.fromEntries(e.map(({ name: e }) => [e, ""]))
            ),
          ag = i.USER_ROLES.pro,
          rg = ({
            data: e = [],
            sort: t = [],
            tableFields: a = [],
            tableId: r = "",
            children: l = null,
            isFetching: o = !1,
            isLimited: i = !1,
            onSort: s = () => {},
          }) => {
            const [c, d] = (0, n.useState)(!1),
              {
                isLimited: p,
                openLimitPopup: u,
                RenderModal: m,
              } = bi("filter_sorting", ag),
              y = (0, n.useMemo)(
                () =>
                  i
                    ? ((e) => tg(e, 10))(eg(a))
                    : o
                    ? ((e) => tg(e, 3))(eg(a))
                    : e,
                [i, o, e, a]
              );
            return n.createElement(
              Hs.Ay,
              {
                data: y,
                sort: t,
                id: r,
                onSortChange: (e) => {
                  return p
                    ? (u(), void d(!0))
                    : (s(...e),
                      f({
                        action: "Table sort",
                        label: `sort by ${e[0]} ${e[1].toUpperCase()}`,
                      }),
                      (t = e[0]),
                      (a = e[1]),
                      Ap.track(Ap.eventName.sortItems, {
                        item_location: "keyword_gap.table.sort",
                        item_label: t,
                        type: a,
                      }),
                      !1);
                  var t, a;
                },
                "data-at": "data-table",
                "data-path": "keyword_gap.table.sort",
                compact: !0,
              },
              l,
              n.createElement(m, {
                visible: c,
                onClose: () => d(!1),
                gaContext: "sorting",
              })
            );
          };
        rg.propTypes = {
          data: v().array,
          sort: v().array,
          tableId: v().string,
          onSort: v().func,
          children: v().oneOfType([v().element, v().array]),
          isFetching: v().bool,
          isLimited: v().bool,
          tableFields: v().array,
        };
        const ng = n.memo(rg);
        a(90655);
        v().number.isRequired, v().object;
        const lg = ({
          items: e = [],
          sortField: t = "traffic",
          sortDirection: a = "desc",
          isLoaded: r = !1,
          tableId: l = "table",
          tableName: o = "table",
          tableFields: i = [],
          isFetching: s = !1,
          hasData: c = !1,
          hasError: d = !1,
          isLimited: p = !1,
          thead: u = null,
          children: m = null,
          page: y = 0,
          total: g = 0,
          onSort: b = () => {},
        }) => {
          const h = (({
              total: e,
              itemsCount: t,
              page: a,
              itemsOnPage: r = 100,
            }) =>
              t <
              (({ itemsOnPage: e = 100, total: t, page: a }) =>
                a <
                (({ itemsOnPage: e = 100, total: t }) => Math.ceil(t / e))({
                  itemsOnPage: e,
                  total: t,
                })
                  ? e
                  : t % e)({ itemsOnPage: r, total: e, page: a }))({
              page: y,
              total: g,
              itemsCount: e.length,
            }),
            f = (0, n.useMemo)(() => [t, a], [t, a]),
            E = (0, n.useMemo)(() => i.map(({ name: e }) => e), [i]);
          return n.createElement(
            ng,
            {
              data: e,
              sort: f,
              tableId: l,
              tableName: o,
              tableFields: i,
              isFetching: s,
              isLimited: p,
              onSort: b,
            },
            u,
            n.createElement(
              Jy,
              {
                tableId: l,
                isLoaded: r,
                fields: E,
                isLimitedItems: h,
                isFetching: s,
                hasData: c,
                hasError: d,
                isLimited: p,
              },
              m
            )
          );
        };
        lg.propTypes = {
          items: v().array,
          sortField: v().string,
          sortDirection: v().oneOf(["asc", "desc"]),
          isLoaded: v().bool,
          tableId: v().string,
          tableName: v().string,
          tableFields: v().array,
          thead: v().element,
          isFetching: v().bool,
          hasData: v().bool,
          hasError: v().bool,
          isLimited: v().bool,
          onSort: v().func,
          children: v().element,
          page: v().number,
          total: v().number,
        };
        const og = n.memo(lg),
          ig = "position_",
          sg =
            (i.USER_ROLES.pro,
            () => {
              const e = (0, o.d4)(ro);
              return Array.isArray(e) && e.length > 0;
            }),
          cg = () => {
            const e = (0, o.d4)(Zl),
              t = (0, o.d4)(ao),
              a = sg();
            return { isLoading: e || null === t, showSkeleton: e && !a };
          },
          dg = ({ value: e }) => {
            const t = (0, o.d4)(Ua),
              a = (0, o.d4)((a) => $a(a, t, e));
            return n.createElement(Ys.FormattedNumber, {
              style: "decimal",
              value: a,
              minimumFractionDigits: 2,
            });
          };
        dg.propTypes = { value: v().number.isRequired };
        const pg = n.memo(dg);
        var ug = a(350);
        const mg = (e) => (0, o.d4)((t) => wm(t, e)),
          yg = ({ id: e, data: t = [], keyword: a = "" }) => {
            const r = (0, o.wA)(),
              l = mg(e);
            return n.createElement(
              ce.A,
              { mt: "2px" },
              n.createElement(ug.IntentCells, {
                id: e,
                data: t,
                keyword: a,
                onClick: (e) => {
                  r(zc.requestSetFilter([e])),
                    r(Qc()),
                    f({
                      category: "keyword-gap:table",
                      action: "click:intent",
                      label: "table:filter-by-intent",
                    });
                },
                onVisibleChange: (e) => {
                  e &&
                    f({
                      category: "keyword-gap:table",
                      action: "show:intent-tooltip",
                      label: "tooltip:show",
                    });
                },
                inverted: l,
                size: "16px",
              })
            );
          };
        yg.propTypes = {
          id: v().string.isRequired,
          data: v().array,
          keyword: v().string,
        };
        const gg = n.memo(yg),
          bg = () =>
            n.createElement(
              or.A,
              { w: "16px", h: "16px" },
              n.createElement("circle", { cx: "8", cy: "8", r: "8" })
            ),
          hg = (0, n.lazy)(() => a.e(838).then(a.bind(a, 81801))),
          fg = (e) =>
            n.createElement(
              n.Suspense,
              { fallback: n.createElement(bg, null) },
              n.createElement(hg, e)
            ),
          Eg = ({ keyword: e, data: t = {}, positionRef: a = {} }) =>
            n.createElement(
              ce.A,
              null,
              n.createElement(
                jt.A,
                { pr: 1, position: "relative", top: "2px" },
                n.createElement(fg, { keyword: e })
              ),
              n.createElement(mc, {
                keyword: e,
                data: t,
                positionRef: a,
                size: 200,
              })
            );
        Eg.propTypes = {
          keyword: v().string.isRequired,
          data: v().object,
          positionRef: v().object,
        };
        const vg = n.memo(Eg),
          { useIntlHelpers: wg } = Fr(),
          Tg = ({ value: e }) => {
            const { formatCompactNumber: t } = wg();
            return t(e);
          };
        Tg.propTypes = { value: v().number.isRequired };
        const kg = n.memo(Tg),
          Ag = (e) => new RegExp(`${ig}\\d`).test(e),
          Cg = (e) => `${ig}${e}`,
          Sg = new Map([
            ["searchItems", "asc"],
            ["volume", "desc"],
            ["keywordDifficulty", "desc"],
            ["cpc", "desc"],
            ["comp", "desc"],
            ["results", "desc"],
          ]);
        var xg = a(59399),
          Rg = a(45133),
          Lg = a(11175),
          Og = a(55412);
        const _g = "Table",
          Pg = () => f({ action: _g, label: "Position URL Show" }),
          Ig = () => f({ action: _g, label: "Position URL Copy" }),
          Mg = () => f({ action: _g, label: "Position URL Open" }),
          Dg = () => f({ action: _g, label: "Position URL Click" }),
          Fg = () => ({
            gaChangeVisibility: Pg,
            gaCopyClick: Ig,
            gaOpenUrl: Mg,
          }),
          jg = (0, se.default)(jt.A)`
  text-align: right;
  cursor: pointer;
`,
          qg = (0, se.default)(Mr.Ay.Trigger)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,
          Ng = (0, se.default)(jt.A)`
  word-break: break-all;
`,
          Ug = (e) => {
            const { children: t, url: a } = e,
              [r, l] = (0, n.useState)(!1),
              { gaChangeVisibility: o, gaCopyClick: i, gaOpenUrl: s } = Fg(),
              [c, d] = (0, n.useState)(!1);
            return n.createElement(
              Mr.Ay,
              {
                placement: "top-end",
                timeout: [750, 100],
                wMin: 250,
                onVisibleChange: (e) => {
                  e ? r || e === c || o() : l(!1), d(e);
                },
              },
              n.createElement(
                qg,
                { "data-at": "tooltip-trigger", tabIndex: 0 },
                n.createElement(jg, null, t)
              ),
              r
                ? n.createElement(
                    Mr.Ay.Popper,
                    { "data-at": "tooltip-popper" },
                    n.createElement(
                      ce.A,
                      { alignItems: "center" },
                      n.createElement(Og.A, { mr: 2, color: "green" }),
                      n.createElement(
                        nr.A,
                        { size: 200, color: "green" },
                        n.createElement(qt.A, {
                          id: "kgTable.linkTooltip.linkCopied",
                        })
                      )
                    )
                  )
                : n.createElement(
                    Mr.Ay.Popper,
                    { "data-at": "tooltip-popper", wMax: "min-content" },
                    n.createElement(
                      ce.A,
                      { direction: "column" },
                      n.createElement(Ng, { mb: 2, onClick: Dg }, a),
                      n.createElement(
                        ce.A,
                        null,
                        n.createElement(
                          xg.CopyToClipboard,
                          {
                            text: a,
                            onCopy: () => {
                              l(!0), i();
                            },
                          },
                          n.createElement(
                            Nt.A,
                            { mr: 2 },
                            n.createElement(
                              Nt.A.Addon,
                              null,
                              n.createElement(Rg.A, null)
                            ),
                            n.createElement(
                              Nt.A.Text,
                              null,
                              n.createElement(qt.A, {
                                id: "kgTable.linkTooltip.copyUrl",
                              })
                            )
                          )
                        ),
                        n.createElement(
                          Nt.A,
                          {
                            onClick: () => {
                              window.open(a, "_blank"), s();
                            },
                          },
                          n.createElement(
                            Nt.A.Addon,
                            null,
                            n.createElement(Lg.A, null)
                          ),
                          n.createElement(
                            Nt.A.Text,
                            null,
                            n.createElement(qt.A, {
                              id: "kgTable.linkTooltip.openUrl",
                            })
                          )
                        )
                      )
                    )
                  )
            );
          };
        Ug.propTypes = {
          children: v().node.isRequired,
          url: v().string.isRequired,
        };
        const $g = n.memo(Ug),
          Vg = ({ url: e, value: t = 0 }) =>
            t
              ? n.createElement(
                  $g,
                  { url: e },
                  n.createElement(Ys.FormattedNumber, { value: t })
                )
              : n.createElement(Ys.FormattedNumber, { value: t });
        Vg.propTypes = { url: v().string.isRequired, value: v().number };
        const zg = {
            Intent: gg,
            Keyword: vg,
            SearchItem: n.memo(Vg),
            Number: kg,
            hooks: {
              useWinnerCell: () => {
                const e = (0, o.d4)(ol.S3),
                  t = kd(),
                  a = t?.length ?? 0;
                return {
                  getTheme: (t, r = []) => {
                    const n = e
                      ? ((e, t) => {
                          if (null == e || 0 === e.length) return 0;
                          const { index: a } = [...Array(t)]
                            .map((t, a) => e[a])
                            .reduce(
                              (e, t, a) =>
                                null != t && t < e.min
                                  ? { min: t, index: a }
                                  : e,
                              { min: Number.MAX_VALUE, index: null }
                            );
                          return a;
                        })(r, a)
                      : null;
                    return t === Cg(n) ? "success" : null;
                  },
                };
              },
            },
          },
          Kg = () =>
            f({
              category: "keyword-gap:table",
              action: "click:intent-detail",
              label: "kb:show",
            }),
          Bg = () => ({ gaKBShow: Kg }),
          Jg = () => {
            const { gaKBShow: e } = Bg(),
              t = (0, n.useCallback)(() => {
                e();
              }, [e]);
            return n.createElement(
              Ii.A,
              { href: "/kb/28-keyword-gap ", target: "_blank", onClick: t },
              n.createElement(qt.A, { id: "featurePopover.intent.kbLink" })
            );
          },
          Wg = ({ title: e = "", children: t = null }) =>
            n.createElement(
              n.Fragment,
              null,
              e &&
                n.createElement(
                  nr.A,
                  {
                    size: 200,
                    bold: !0,
                    tag: "p",
                    mb: 1,
                    "data-at": "tooltip-title",
                  },
                  e
                ),
              n.createElement(
                nr.A,
                { size: 200, tag: "p", "data-at": "tooltip-text" },
                t
              )
            );
        Wg.propTypes = {
          title: v().oneOfType([v().element, v().string]),
          children: v().oneOfType([v().element, v().string]),
        };
        const Gg = Wg,
          Yg = () => {
            const e = (0, o.wA)(),
              t = (0, n.useRef)(null),
              a = sg(),
              { isLoading: r } = cg(),
              { formatMessage: l } = (0, de.A)(),
              i = (0, o.d4)(Tm),
              s = (0, o.d4)(km),
              c = (0, n.useCallback)(() => {
                e(Jm()),
                  f({
                    action: "Select rows",
                    label: t.current.checked ? "all on page" : "deselect all",
                  });
              }, [e]),
              d = a && !r && i,
              p = a && !r && s && !i;
            return n.createElement(
              ce.A,
              { h: 14 },
              n.createElement(
                cd.A,
                {
                  size: "m",
                  "aria-label": l({ id: "ariaLabel.selectAllKeywords" }),
                },
                n.createElement(cd.A.Value, {
                  mt: 0,
                  ref: t,
                  checked: d,
                  indeterminate: p,
                  onChange: c,
                })
              )
            );
          };
        function Hg() {
          return (
            (Hg = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Hg.apply(null, arguments)
          );
        }
        const Qg = ({ index: e, ...t }) =>
          n.createElement(Wr, Hg({ color: Yr(e) }, t));
        Qg.propTypes = { index: v().number.isRequired };
        const Zg = Qg,
          Xg = () =>
            (0, la.Mz)([ol.N3, (e, t) => t, sl], (e, t, a) => ({
              ...e[t],
              mode: a,
            })),
          eb = () => {
            const e = (0, o.d4)(Wl),
              t = (0, o.d4)(Gl);
            return ["number" == typeof e ? `${ig}${e}` : e, t];
          },
          tb = { asc: "desc", desc: "asc" },
          ab = (0, se.default)(jt.A)`
  width: 100%;
  overflow: hidden;

  ${({ searchItemsLength: e }) =>
    e > 2 ? "@media screen and (min-width: 1540px) {width: 120px;}" : ""}
`,
          rb = (0, se.default)(ce.A)`
  text-transform: capitalize;
  color: #6c6e79;
`,
          nb = ({ index: e, setRef: t, searchItemsLength: a = 0 }) => {
            const {
              searchItem: r,
              searchType: l,
              keywordType: i,
              mode: s,
            } = ((e) => {
              const t = (0, n.useMemo)(Xg, []);
              return (0, o.d4)((a) => t(a, e));
            })(e);
            return n.createElement(
              ab,
              { searchItemsLength: a, ref: t },
              n.createElement(
                ce.A,
                { alignItems: "center" },
                n.createElement(
                  jt.A,
                  { w: 12, h: 12, pr: 1 },
                  n.createElement(Zg, { index: e, radius: 12 })
                ),
                n.createElement(ts.A, { tooltip: !1 }, yd(Ct(r), l))
              ),
              "advanced" === s &&
                n.createElement(
                  rb,
                  { ml: 4 },
                  n.createElement(qt.A, { id: `keywordTypes.short.${i}` })
                )
            );
          };
        nb.propTypes = {
          index: v().number.isRequired,
          searchItemsLength: v().number,
        };
        const lb = n.memo(nb),
          ob = ({ miniKOPositionRef: e }) => {
            const [t, a] = eb(),
              { getSortByAriaLabel: r } = ((e, t) => {
                const { formatMessage: a } = (0, de.A)();
                return {
                  getSortByAriaLabel: (r, n = "") => {
                    const l = Ag(r),
                      o = e === r ? tb[t] : l ? "asc" : "desc",
                      i = l ? Ct(n) : a({ id: `kgTable.header.${r}` });
                    return a(
                      { id: "ariaLabel.sortByField" },
                      { DIR: a({ id: `ariaLabel.${o}Order` }), FIELD: i }
                    );
                  },
                };
              })(t, a),
              l = "advanced" === (0, o.d4)(sl) ? 60 : 40,
              i = kd(),
              s = i?.length ?? 0;
            return n.createElement(
              Pm.A,
              { zIndex: 3, top: 60 },
              n.createElement(
                Hs.Ay.Head,
                { wMin: 1040, h: l },
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "id",
                    "data-at": "id-header",
                    justifyContent: "center",
                    wMin: 49,
                    flex: 0,
                  },
                  n.createElement(Yg, null)
                ),
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "keyword",
                    "data-at": "keyword-header",
                    flex: "1 0 150px",
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    placement: "top-start",
                    title: n.createElement(
                      Gg,
                      {
                        title: n.createElement(qt.A, {
                          id: "kgTable.header.keyword",
                        }),
                      },
                      n.createElement(qt.A, {
                        id: "kgTable.header.tooltip.keyword",
                      })
                    ),
                  },
                  n.createElement(
                    ts.A,
                    { tooltip: !1 },
                    n.createElement(qt.A, { id: "kgTable.header.keyword" })
                  )
                ),
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "intents",
                    "data-at": "intents-header",
                    alignItems: "left",
                    wMin: 52,
                    wMax: 52,
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    title: n.createElement(
                      Gg,
                      {
                        title: n.createElement(qt.A, { id: "columns.intent" }),
                      },
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(qt.A, {
                          id: "tooltips.column.positions.intents",
                        }),
                        n.createElement(Jg, null)
                      )
                    ),
                  },
                  n.createElement(
                    ts.A,
                    { tooltip: !1 },
                    n.createElement(qt.A, { id: "columns.intent" })
                  )
                ),
                i.map((t, a) => {
                  const l = Cg(a);
                  return n.createElement(
                    Hs.Ay.Column,
                    {
                      name: l,
                      "data-at": `${l}-header`,
                      key: l,
                      sortable: "asc",
                      flex: "0 0 100px",
                      wMax: 150,
                      justifyContent: "flex-end",
                      "aria-label": r(l, t),
                      tag: Mr.Ay,
                      timeout: $t.a4,
                      title: n.createElement(qt.A, {
                        id: "kgTable.header.tooltip.competitor",
                      }),
                    },
                    n.createElement(lb, {
                      index: a,
                      setRef: 0 === a ? e : null,
                      searchItemsLength: s,
                    })
                  );
                }),
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "volume",
                    "data-at": "volume-header",
                    sortable: !0,
                    wMin: 69,
                    wMax: 80,
                    justifyContent: "flex-end",
                    "aria-label": r("volume"),
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    title: n.createElement(
                      Gg,
                      {
                        title: n.createElement(qt.A, {
                          id: "kgTable.header.volume",
                        }),
                      },
                      n.createElement(qt.A, {
                        id: "kgTable.header.tooltip.volume",
                      })
                    ),
                  },
                  n.createElement(
                    ts.A,
                    { tooltip: !1 },
                    n.createElement(qt.A, { id: "kgTable.header.volume" })
                  )
                ),
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "keywordDifficulty",
                    "data-at": "keywordDifficulty-header",
                    sortable: !0,
                    wMin: 64,
                    wMax: 80,
                    justifyContent: "flex-end",
                    "aria-label": r("kd"),
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    title: n.createElement(
                      Gg,
                      {
                        title: n.createElement(qt.A, {
                          id: "kgTable.header.kd",
                        }),
                      },
                      n.createElement(
                        jt.A,
                        null,
                        n.createElement(qt.A, {
                          id: "kgTable.header.tooltip.kd",
                        }),
                        n.createElement(
                          jt.A,
                          null,
                          n.createElement(
                            Ii.A,
                            {
                              href: "/kb/257-keyword-overview#kdscore",
                              target: "_blank",
                            },
                            n.createElement(qt.A, {
                              id: "kgTable.header.tooltip.kbLink",
                            })
                          )
                        )
                      )
                    ),
                  },
                  n.createElement(qt.A, { id: "kgTable.header.kd" })
                ),
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "cpc",
                    "data-at": "cpc-header",
                    sortable: !0,
                    wMin: 69,
                    wMax: 80,
                    justifyContent: "flex-end",
                    "aria-label": r("cpc"),
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    title: n.createElement(
                      Gg,
                      {
                        title: n.createElement(qt.A, {
                          id: "kgTable.header.cpc",
                        }),
                      },
                      n.createElement(qt.A, {
                        id: "kgTable.header.tooltip.cpc",
                      })
                    ),
                  },
                  n.createElement(qt.A, { id: "kgTable.header.cpc" })
                ),
                n.createElement(
                  Hs.Ay.Column,
                  {
                    name: "comp",
                    "data-at": "comp-header",
                    sortable: !0,
                    wMin: 57,
                    wMax: 80,
                    justifyContent: "flex-end",
                    "aria-label": r("competitive"),
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    title: n.createElement(
                      Gg,
                      {
                        title: n.createElement(qt.A, {
                          id: "kgTable.header.competitive",
                        }),
                      },
                      n.createElement(qt.A, {
                        id: "kgTable.header.tooltip.comp",
                      })
                    ),
                  },
                  n.createElement(qt.A, { id: "kgTable.header.competitive" })
                ),
                n.createElement(
                  Hs.Ay.Column,
                  {
                    "data-at": "results-header",
                    name: "results",
                    sortable: !0,
                    wMin: 81,
                    wMax: 92,
                    justifyContent: "flex-end",
                    "aria-label": r("results"),
                    tabIndex: 0,
                    tag: Mr.Ay,
                    timeout: $t.a4,
                    title: n.createElement(
                      Gg,
                      {
                        title: n.createElement(qt.A, {
                          id: "kgTable.header.results",
                        }),
                      },
                      n.createElement(qt.A, {
                        id: "kgTable.header.tooltip.results",
                      })
                    ),
                  },
                  n.createElement(qt.A, { id: "kgTable.header.results" })
                )
              )
            );
          },
          ib = ({ id: e, keyword: t }) => {
            const a = (0, o.wA)(),
              r = (0, n.useRef)(null),
              { formatMessage: l } = (0, de.A)(),
              i = mg(e),
              s = (0, n.useCallback)(() => {
                a(Vm(e)),
                  f({
                    action: "Select rows",
                    label:
                      (r.current.checked ? "select" : "unselect") + " specific",
                  });
              }, [e, a]);
            return n.createElement(
              cd.A,
              {
                size: "m",
                "aria-label": l(
                  { id: "ariaLabel.selectKeyword" },
                  { KEYWORD: t }
                ),
              },
              n.createElement(cd.A.Value, { ref: r, checked: i, onChange: s })
            );
          };
        ib.propTypes = {
          id: v().string.isRequired,
          keyword: v().string.isRequired,
        };
        const sb = n.memo(ib),
          cb = [
            { name: "id", align: "right" },
            { name: "keyword", align: "right" },
            { name: "intents", align: "center" },
            { name: "volume", align: "right", sortable: !0 },
            { name: "keywordDifficulty", align: "right", sortable: !0 },
            { name: "cpc", align: "right", sortable: !0 },
            { name: "comp", align: "right", sortable: !0 },
            { name: "results", align: "right", sortable: !0 },
          ],
          db = cb.map(({ name: e }) => e),
          { useWinnerCell: pb } = zg.hooks,
          ub = () => {
            const e = (0, n.useRef)(),
              { formatNumber: t, formatMessage: a } = (0, de.A)(),
              r = (0, o.wA)(),
              { isKeywordSelected: l } = (() => {
                const e = (0, o.d4)(vm);
                return {
                  isKeywordSelected: (0, n.useCallback)(
                    (t) => e.includes(t),
                    [e]
                  ),
                };
              })(),
              i = (0, o.d4)(Tl),
              s = (0, o.d4)(Bl),
              { isLoading: c } = cg(),
              d = (() => {
                const e = (0, o.d4)(ro).map((e) => {
                  const t = e.positions.reduce(
                    (e, t, a) => ({ ...e, [`${ig}${a}`]: t }),
                    {}
                  );
                  return { ...e, ...t };
                });
                return e;
              })(),
              p = sg(),
              u = (0, o.d4)(Xl),
              [m, y] = eb(),
              g = (0, o.d4)(fm),
              b = kd(),
              { getTheme: h } = pb(),
              f = (0, n.useCallback)(
                (e) => {
                  const t = Ag(e) ? Number(e.match(/\d+/)[0]) : e;
                  return (
                    r(Dm(t)),
                    setTimeout(() => {
                      Sc(Ks);
                    }, 100),
                    !1
                  );
                },
                [r]
              ),
              E = ((e, t) =>
                e && 0 !== e.length
                  ? [e[0], ...t.map((e, t) => ({ name: Cg(t) })), ...e.slice(1)]
                  : [])(cb, b),
              v = b.map((e, t) => Cg(t));
            return n.createElement(
              "div",
              { id: Ks, "data-at": "keywordgap-table" },
              n.createElement(
                og,
                {
                  tableId: "kg_table",
                  tableName: "kg_table",
                  tableFields: E,
                  items: d,
                  sortField: m,
                  sortDirection: y,
                  onSort: f,
                  isFetching: c,
                  isLoaded: !c,
                  hasData: !c && p,
                  hasError: u,
                  isLimited: g,
                  thead: n.createElement(ob, { miniKOPositionRef: e }),
                  total: i,
                  page: s,
                },
                n.createElement(
                  Hs.Ay.Body,
                  null,
                  n.createElement(Hs.Ay.Row, null, ({ theme: e }, t) => ({
                    theme: l(t.id) ? "info" : e,
                  })),
                  n.createElement(Hs.Ay.Cell, {
                    name: [...db, ...v].join("/"),
                    alignItems: "baseline",
                    justifyContent: "flex-end",
                  }),
                  n.createElement(
                    Hs.Ay.Cell,
                    {
                      name: "id",
                      alignItems: "baseline",
                      justifyContent: "center",
                    },
                    ({ name: e }, t) => ({
                      children: n.createElement(sb, {
                        id: t?.[e],
                        keyword: t?.keyword,
                      }),
                    })
                  ),
                  n.createElement(
                    Hs.Ay.Cell,
                    { name: "keyword", justifyContent: "flex-start" },
                    ({ name: t }, a) => ({
                      children: n.createElement(zg.Keyword, {
                        keyword: a[t],
                        data: a,
                        positionRef: e,
                      }),
                    })
                  ),
                  n.createElement(
                    Hs.Ay.Cell,
                    { name: "intents", justifyContent: "center" },
                    ({ name: e }, t) => ({
                      children: n.createElement(zg.Intent, {
                        data: t[e],
                        id: t?.id,
                        keyword: t?.keyword,
                      }),
                    })
                  ),
                  b.map((e, t) => {
                    const r = Cg(t);
                    return n.createElement(
                      Hs.Ay.Cell,
                      { key: `${r}${e}`, name: r },
                      ({ name: l }, o) => {
                        const i = a(
                          { id: "ariaLabel.tableCell.competitor" },
                          { DOMAIN: e, KEYWORD: o?.keyword, VALUE: o[r] }
                        );
                        return {
                          theme: h(l, o?.positions ?? []),
                          children: n.createElement(
                            jt.A,
                            { "aria-label": i },
                            n.createElement(zg.SearchItem, {
                              url: o.urls[t],
                              value: o[l],
                            })
                          ),
                        };
                      }
                    );
                  }),
                  n.createElement(
                    Hs.Ay.Cell,
                    { name: "volume/results" },
                    ({ name: e }, t) => ({
                      children: n.createElement(
                        jt.A,
                        {
                          "aria-label": a(
                            { id: `ariaLabel.tableCell.${e}` },
                            { VALUE: t[e] }
                          ),
                        },
                        n.createElement(zg.Number, { value: t[e] })
                      ),
                    })
                  ),
                  n.createElement(
                    Hs.Ay.Cell,
                    { name: "keywordDifficulty" },
                    ({ name: e }, t) => ({
                      children: n.createElement(
                        jt.A,
                        {
                          "aria-label": a(
                            { id: "ariaLabel.tableCell.kd" },
                            { VALUE: t[e] }
                          ),
                        },
                        n.createElement(lc(), { value: t[e] })
                      ),
                    })
                  ),
                  n.createElement(
                    Hs.Ay.Cell,
                    { name: "cpc" },
                    ({ name: e }, t) => ({
                      children: n.createElement(
                        jt.A,
                        {
                          "aria-label": a(
                            { id: "ariaLabel.tableCell.cpc" },
                            { VALUE: t[e] }
                          ),
                        },
                        n.createElement(pg, { value: t[e] })
                      ),
                    })
                  ),
                  n.createElement(
                    Hs.Ay.Cell,
                    { name: "comp" },
                    ({ name: e }, r) => {
                      const l = t(r[e]);
                      return {
                        children: n.createElement(
                          jt.A,
                          {
                            "aria-label": a(
                              { id: "ariaLabel.tableCell.comp" },
                              { VALUE: l }
                            ),
                          },
                          l
                        ),
                      };
                    }
                  )
                )
              )
            );
          };
        var mb = a(69420);
        const yb = "all",
          gb = "selected",
          bb = "first";
        var hb = a(56590),
          fb = a.n(hb),
          Eb = a(2404),
          vb = a.n(Eb);
        const wb = { phrase: "keyword", kd: "keywordDifficulty" },
          Tb = (e, t) => ({
            isIncludes: !0,
            type: 1,
            field: t,
            criteria: "containing",
            value: e,
          }),
          kb = (e) => {
            if (!e) return {};
            let t, a;
            return (
              "object" == typeof e
                ? ({ from: t, to: a } = e)
                : ([t, a] = e.split("-")),
              t !== a
                ? {
                    ...(t
                      ? {
                          "-3": {
                            isIncludes: !0,
                            type: 0,
                            field: "volume",
                            criteria: ">",
                            value:
                              0 !== parseInt(t, 10) ? parseInt(t, 10) - 1 : t,
                          },
                        }
                      : {}),
                    ...(a
                      ? {
                          "-4": {
                            isIncludes: !0,
                            type: 0,
                            field: "volume",
                            criteria: "<",
                            value: parseInt(a, 10) + 1,
                          },
                        }
                      : {}),
                  }
                : {
                    "-3": {
                      isIncludes: !0,
                      type: 0,
                      field: "volume",
                      criteria: "=",
                      value: t,
                    },
                  }
            );
          },
          Ab = (e) => {
            if (!e) return {};
            let t, a;
            return (
              "object" == typeof e
                ? ({ from: t, to: a } = e)
                : ([t, a] = e.split("-")),
              t !== a
                ? {
                    ...(t && 0 !== parseInt(t, 10)
                      ? {
                          "-6": {
                            isIncludes: !0,
                            type: 0,
                            field: "keywordDifficulty",
                            criteria: ">",
                            value:
                              0 !== parseInt(t, 10)
                                ? parseInt(t, 10) - 1
                                : parseInt(t, 10),
                          },
                        }
                      : {}),
                    ...(a && 0 !== parseInt(a, 10)
                      ? {
                          "-7": {
                            isIncludes: !0,
                            type: 0,
                            field: "keywordDifficulty",
                            criteria: "<",
                            value: parseInt(a, 10) + 1,
                          },
                        }
                      : {}),
                  }
                : {
                    "-6": {
                      isIncludes: !0,
                      type: 0,
                      field: "keywordDifficulty",
                      criteria: "=",
                      value: t,
                    },
                  }
            );
          },
          Cb = (e) => {
            if (!e) return {};
            let t, a;
            return (
              "object" == typeof e.value
                ? ({ from: t, to: a } = e.value)
                : ([t, a] = e.value.split("-")),
              ((e, t, a) =>
                e !== t
                  ? {
                      ...(e && 0 !== parseInt(e, 10)
                        ? {
                            [`${a}-from`]: {
                              isIncludes: !0,
                              field: a,
                              criteria: ">",
                              value:
                                0 !== parseInt(e, 10) ? parseInt(e, 10) - 1 : e,
                            },
                          }
                        : {}),
                      ...(t && 100 !== parseInt(t, 10)
                        ? {
                            [`${a}-to`]: {
                              isIncludes: !0,
                              field: a,
                              criteria: "<",
                              value: +t + 1,
                            },
                          }
                        : {}),
                    }
                  : {
                      [a]: {
                        isIncludes: !0,
                        field: a,
                        criteria: "=",
                        value: e,
                      },
                    })(t, a, "position")
            );
          },
          Sb = new Map([
            [
              "keywordType",
              (e) => ({ branded: 3, notBranded: 0, forOther: 1 }[e]),
            ],
          ]),
          xb = (e) =>
            Sb.has(e.field)
              ? { value: Sb.get(e.field)(e.value) }
              : { operation: e.criteria, value: e.value },
          Rb = (e) => ("number" == typeof e ? `target${e + 1}` : e),
          Lb = (e, t = "", a = "") => {
            if (!e || !Array.isArray(e))
              throw TypeError("getSpectrumTargets: targets is not an array");
            if (e.length < 2)
              throw Error("getSpectrumTargets: targets length less than 2");
            return e.map((e, r) => {
              let n = "";
              if (0 !== t.length && 0 !== a.length)
                switch (a) {
                  case pp:
                    n = t;
                    break;
                  case mp:
                    n = 0 !== r ? t : "";
                    break;
                  case up:
                    n = 0 === r ? t : "";
                    break;
                  default:
                    n = "";
                }
              return {
                product_type: st.PRODUCT_TYPE[e.dataType],
                type: st.TARGET_TYPE[e.type],
                value: Ne(e.value, e.type),
                filters: n,
              };
            });
          },
          Ob = new (fb())(st.KEYWORDS_LIST_COLUMN),
          _b = (e) => {
            const t = ((e, t = {}) => {
                const { searchAs: a = "phrase" } = t;
                if (!e || vb()(e, {})) return {};
                const r = {
                  ...e.advancedApplied,
                  ...(e.search ? { [-1]: Tb(e.search, a) } : {}),
                  ...(e.volume ? kb(e.volume) : {}),
                  ...(e.keywordDifficulty ? Ab(e.keywordDifficulty) : {}),
                  ...(e.intent
                    ? ((n = e.intent),
                      n.reduce(
                        (e, t, a) => (
                          (e[`i${a}`] = {
                            isIncludes: !0,
                            type: 0,
                            field: "intents",
                            value: yo.INTENT_IDS.getID(t),
                          }),
                          e
                        ),
                        {}
                      ))
                    : {}),
                  ...(e.position ? Cb(e.position) : {}),
                };
                var n;
                return Object.values(r).reduce((e, t) => {
                  const a = ((r = t.field), wb[r] || r);
                  var r;
                  const n = e[a] || [];
                  return (
                    n.push({
                      sign: t.isIncludes ? "+" : "-",
                      ...xb(t),
                      ...t.parameters,
                    }),
                    (e[a] = n),
                    e
                  );
                }, {});
              })(e),
              { position: a = [], ...r } = t,
              n = a.length > 0 ? e.position.type : "";
            return {
              positionFilter: Ob.generateQuery({ positions: a }),
              restFilters: Ob.generateQuery(r),
              positionFilterType: n,
            };
          },
          Pb = { all: "all", selected: "selected", first: "preselected" };
        var Ib = a(11075);
        const Mb = [5e4, 3e4, 1e4, 3e3, 1e3, 500, 100],
          Db = ({
            exportType: e,
            exportLimit: t,
            setExportType: a,
            setExportLimit: r,
            maxExportLimitCounter: l,
          }) => {
            const { formatMessage: i } = (0, de.A)(),
              s = Ym(),
              c = (0, o.d4)(at),
              d = Mb.reverse()
                .filter((e) => e <= l)
                .map((e) => ({
                  value: e,
                  children: n.createElement(Ys.FormattedNumber, { value: e }),
                }));
            return n.createElement(
              ce.A,
              { direction: "column", "data-at": "amount-selector" },
              n.createElement(
                Ib.z6,
                {
                  name: "export_amount_selector",
                  value: e,
                  onChange: (e) => {
                    a(e);
                  },
                  "aria-label": i({ id: "ariaLabel.export.amountSelector" }),
                  "aria-required": "true",
                },
                n.createElement(
                  Ib.Ay,
                  { mb: 2, alignItems: "center" },
                  n.createElement(Ib.Ay.Value, {
                    value: yb,
                    checked: e === yb,
                    "data-at": "amount-all-radio",
                  }),
                  n.createElement(
                    Ib.Ay.Text,
                    { "data-at": "amount-all-text" },
                    n.createElement(
                      ce.A,
                      null,
                      n.createElement(qt.A, { id: "export.type.all" }),
                      c <= l
                        ? n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                              nr.A,
                              {
                                color: "gray-400",
                                ml: 1,
                                "data-at": "amount-all-value",
                              },
                              n.createElement(qt.A, {
                                id: "export.type.all.info",
                                values: { amount: l },
                              })
                            ),
                            " ",
                            n.createElement(Mc, {
                              tooltip: n.createElement(qt.A, {
                                id: "export.limitMessage",
                                values: { total: l },
                              }),
                            })
                          )
                        : n.createElement(
                            nr.A,
                            {
                              color: "gray-400",
                              ml: 1,
                              "data-at": "amount-all-value",
                            },
                            n.createElement(Ys.FormattedNumber, { value: l })
                          )
                    )
                  )
                ),
                n.createElement(
                  Ib.Ay,
                  { disabled: 0 === s, mb: 2, alignItems: "center" },
                  n.createElement(Ib.Ay.Value, {
                    value: gb,
                    checked: e === gb,
                    "data-at": "amount-selected-radio",
                  }),
                  n.createElement(
                    Ib.Ay.Text,
                    { "data-at": "amount-selected-text" },
                    n.createElement(qt.A, { id: "export.type.selected" }),
                    " (",
                    n.createElement(Ys.FormattedNumber, {
                      value: s,
                      "data-at": "amount-all-value",
                    }),
                    ")"
                  )
                ),
                d.length > 0
                  ? n.createElement(
                      Ib.Ay,
                      { alignItems: "center" },
                      n.createElement(Ib.Ay.Value, {
                        value: bb,
                        checked: e === bb,
                        "data-at": "amount-first-radio",
                      }),
                      n.createElement(
                        Ib.Ay.Text,
                        { "data-at": "amount-first-text" },
                        n.createElement(qt.A, { id: "export.type.first" }),
                        n.createElement(Qa.Ay, {
                          ml: 1,
                          options: d,
                          size: "m",
                          value: t,
                          onChange: (e) => r(e),
                          "data-at": "amount-first-value",
                          type: "button",
                        })
                      )
                    )
                  : null
              )
            );
          },
          Fb = ({ gaAction: e = "" }) =>
            n.createElement(
              jt.A,
              null,
              n.createElement(
                nr.A,
                { size: 200 },
                n.createElement(qt.A, { id: "export.export_all" }),
                "Â "
              ),
              n.createElement(
                Ii.A,
                {
                  href: "/company/custom_report/",
                  onClick: () => f({ action: e, label: "custom report link" }),
                },
                n.createElement(
                  nr.A,
                  { size: 200 },
                  n.createElement(qt.A, { id: "export.export_all.link" })
                )
              )
            );
        Fb.propTypes = { gaAction: v().string };
        const jb = Fb,
          qb = ({ onSubmit: e, gaAction: t = "Export" }) => {
            const { formatMessage: a } = (0, de.A)(),
              [r, l] = (0, n.useState)(yb),
              [o, i] = (0, n.useState)(!1),
              [s, c] = (0, n.useState)(100),
              d = mm(),
              p = Ym(),
              u = (a) => {
                f({
                  action: t,
                  label: `export ${r} to ${a}`,
                  value: { [yb]: d, [gb]: p, [bb]: s }[r],
                }),
                  e({
                    exportType: r,
                    fileType: a,
                    exportLimit: s,
                    clearSelected: o,
                  });
              };
            return n.createElement(
              jt.A,
              { tag: "form", action: "", wMax: 280, "data-at": "export-popup" },
              n.createElement(
                jt.A,
                { mb: 4 },
                n.createElement(
                  nr.A,
                  {
                    size: 200,
                    bold: !0,
                    color: "gray-800",
                    "data-at": "popup-title",
                  },
                  n.createElement(qt.A, { id: "export.caption" })
                )
              ),
              n.createElement(Db, {
                exportType: r,
                exportLimit: s,
                setExportType: l,
                setExportLimit: c,
                maxExportLimitCounter: d,
              }),
              n.createElement(
                jt.A,
                { mt: 3, "data-at": "select-counters" },
                n.createElement(
                  jt.A,
                  null,
                  0 !== p &&
                    n.createElement(
                      cd.A,
                      { mb: 4, disabled: r !== gb },
                      n.createElement(cd.A.Value, {
                        onChange: () => {
                          i(!o),
                            o ||
                              f({
                                action: t,
                                label: "clear selected keywords",
                              });
                        },
                        checked: o,
                        "data-at": "clear-selected",
                      }),
                      n.createElement(
                        cd.A.Text,
                        null,
                        n.createElement(qt.A, { id: "export.clearSelected" })
                      )
                    )
                ),
                n.createElement(
                  ce.A,
                  { mt: 4 },
                  n.createElement(
                    Nt.A,
                    {
                      use: "primary",
                      onClick: () => u("xlsx"),
                      "data-at": "btn-xls",
                      mr: 2,
                      "aria-label": a({ id: "ariaLabel.export.fileType.xlsx" }),
                    },
                    n.createElement(qt.A, { id: "export.menu_item.xls" })
                  ),
                  n.createElement(
                    Nt.A,
                    {
                      onClick: () => u("csv"),
                      "data-at": "btn-csv",
                      mr: 2,
                      "aria-label": a({ id: "ariaLabel.export.fileType.csv" }),
                    },
                    n.createElement(qt.A, { id: "export.menu_item.csv" })
                  ),
                  n.createElement(
                    Nt.A,
                    {
                      onClick: () => u("stdcsv"),
                      "data-at": "btn-stdcsv",
                      "aria-label": a({
                        id: "ariaLabel.export.fileType.stdcsv",
                      }),
                    },
                    n.createElement(qt.A, { id: "export.menu_item.stdcsv" })
                  )
                )
              ),
              n.createElement(Ut.A, { my: 4, pr: 8, ml: -4 }),
              n.createElement(jb, { gaAction: t })
            );
          };
        qb.propTypes = { onSubmit: v().func.isRequired, gaAction: v().string };
        const Nb = qb,
          Ub = "Export",
          $b = ({ isFeatureLimited: e = !1 }) => {
            const { formatMessage: t } = (0, de.A)(),
              [a, r] = (0, n.useState)(!1),
              l = (() => {
                const [e] = Yd("(max-width: 1360px)");
                return e;
              })(),
              { fetchExport: i, isLoading: s } = (() => {
                const e = (0, o.wA)(),
                  [t, a] = (0, n.useState)(!1),
                  r = (0, o.d4)(Yl),
                  l = (0, o.d4)(to),
                  i = mm(),
                  s = Gm(),
                  c = (0, o.d4)(Ua);
                return {
                  fetchExport: async (t) => {
                    a(!0);
                    const n = {};
                    (n.exportType = t.exportType), (n.fileType = t.fileType);
                    try {
                      if ("object" != typeof t)
                        throw new Error(
                          "requestExport: params should be object"
                        );
                      if (r.targets.length < 2)
                        throw new Error(
                          "requestExport: targets should be >= 2"
                        );
                      let e,
                        a = [];
                      switch (t.exportType) {
                        case yb:
                          e = i;
                          break;
                        case gb:
                          (e = s?.length ?? 0), (a = s);
                          break;
                        case bb:
                          e = t.exportLimit;
                          break;
                        default:
                          return;
                      }
                      n.keywordsCount = e;
                      const o = {
                        ...r,
                        ...t,
                        count: e,
                        currency: c,
                        selected: a.map((e) => l[e].keyword),
                      };
                      await (async ({
                        targets: e,
                        date: t,
                        isLive: a,
                        db: r,
                        device: n,
                        fileType: l,
                        exportType: o,
                        currency: i,
                        count: s,
                        selected: c,
                        type: d = "common",
                        filter: p = {},
                        sortField: u = "volume",
                        sortDirection: m = "desc",
                      }) => {
                        const y = { report: st.REPORT_NAME.gap },
                          {
                            positionFilter: g,
                            restFilters: b,
                            positionFilterType: h,
                          } = _b(p),
                          f = (0, it.prepareDatabase)(r, n),
                          E = {
                            currency: i,
                            selected:
                              o === gb ? c.map((e) => ({ keyword: e })) : [],
                            request: {
                              targets: Lb(e, g, h),
                              date: a ? null : (0, it.dateStringToObject)(t),
                              database: f,
                              type: st.KEYWORDS_TYPE[d],
                              range: { limit: s, offset: 0 },
                              columns: [
                                st.KEYWORDS_LIST_COLUMN.keyword,
                                st.KEYWORDS_LIST_COLUMN.intent,
                                st.KEYWORDS_LIST_COLUMN.volume,
                                st.KEYWORDS_LIST_COLUMN.keywordDifficulty,
                                st.KEYWORDS_LIST_COLUMN.cpc,
                                st.KEYWORDS_LIST_COLUMN.comp,
                                st.KEYWORDS_LIST_COLUMN.positions,
                                st.KEYWORDS_LIST_COLUMN.urls,
                                st.KEYWORDS_LIST_COLUMN.results,
                              ],
                              order: {
                                column: st.KEYWORDS_LIST_ORDER_COLUMN[Rb(u)],
                                direction: st.ORDER_DIRECTION[m],
                              },
                              filters: b,
                            },
                          };
                        await bt.fetchExport("/GapKeywordsList", y, E, l);
                      })(o),
                        (n.status = Mo);
                    } catch (e) {
                      console.error("Something went wrong with export", e, {
                        params: t,
                      }),
                        (n.status = "sww");
                    } finally {
                      a(!1),
                        t.clearSelected && e(Wm()),
                        (({
                          keywordsCount: e,
                          exportType: t,
                          fileType: a,
                          status: r,
                        }) => {
                          Ap.track(Ap.eventName.exportData, {
                            item_label: `${e}`,
                            item_location: "keyword_gap.table.export",
                            state: Pb[t],
                            type: a,
                            status: r,
                          });
                        })(n);
                    }
                  },
                  isLoading: t,
                };
              })(),
              c = (0, n.useCallback)(
                (t) => {
                  e || (r(t), f({ action: Ub, label: t ? "show" : "cancel" }));
                },
                [e]
              );
            return n.createElement(
              mb.A,
              { visible: a, onVisibleChange: c, placement: "bottom-end" },
              n.createElement(
                mb.A.Trigger,
                null,
                n.createElement(
                  Nt.A,
                  {
                    "data-at": "export",
                    "data-path": "keyword_gap.table.export",
                    loading: s,
                    disabled: s,
                    "aria-label": t({ id: "ariaLabel.tableExport" }),
                  },
                  n.createElement(
                    Nt.A.Addon,
                    null,
                    n.createElement(xo.A, null)
                  ),
                  !l &&
                    n.createElement(
                      Nt.A.Text,
                      null,
                      n.createElement(qt.A, { id: "export.button" })
                    )
                )
              ),
              n.createElement(
                mb.A.Popper,
                { p: 4, wMin: 280 },
                n.createElement(Nb, {
                  gaAction: Ub,
                  onSubmit: (e) => {
                    i(e), r(!1);
                  },
                })
              )
            );
          };
        $b.propTypes = { isFeatureLimited: v().bool };
        const Vb = $b;
        var zb = a(57005);
        function Kb() {
          return (
            (Kb = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Kb.apply(null, arguments)
          );
        }
        const Bb = (0, se.default)(jt.A)`
  // insert ellipsis to 'Add to list' button
  overflow: hidden;

  & > div {
    display: flex;
    overflow: hidden;

    & > div {
      min-width: 0;
      display: flex;
    }
  }

  button {
    min-width: 0;
  }

  span[data-ui-name='Button.Text'] {
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline;
    min-width: 0;
  }
`,
          Jb = (e) => {
            const t = (0, o.d4)(Am),
              a = (0, o.d4)(We.Lf),
              r = (0, n.useMemo)(
                () =>
                  t
                    .filter((e) => "" !== e.keyword)
                    .map(({ keyword: e }) => ({
                      phrase: e,
                      database: (0, kt.m_)(a),
                    })),
                [t, a]
              ),
              l = (() => {
                const [e] = Yd("(max-width: 1360px)");
                return e;
              })();
            return n.createElement(
              Bb,
              Kb({ "data-at": "ts-keywordmanager", wMin: 0 }, e),
              n.createElement(zb.ExportToKMSelected, {
                selected: r,
                seedKeyword: null,
                group: "",
                hasShortLabel: l,
              })
            );
          },
          Wb = () => {
            const { formatMessage: e } = (0, de.A)();
            return n.createElement(
              qs,
              { "aria-label": e({ id: "ariaLabel.keywordsTableSection" }) },
              n.createElement(
                $s,
                { justifyContent: "flex-start" },
                n.createElement(dm, null)
              ),
              n.createElement(
                Ms.WidgetContent,
                { isNoData: !1, isError: !1, type: "venn-chart" },
                n.createElement(
                  ce.A,
                  {
                    mb: 5,
                    mx: 5,
                    justifyContent: "space-between",
                    "data-at": "widget-header",
                  },
                  n.createElement(
                    Ho,
                    { requiredPlan: i.USER_ROLES.pro, limitContext: "filters" },
                    n.createElement(hm, null)
                  ),
                  n.createElement(
                    ce.A,
                    { ml: 2, wMin: 0 },
                    n.createElement(Jb, { mr: 2 }),
                    n.createElement(
                      jt.A,
                      null,
                      n.createElement(
                        Ho,
                        {
                          requiredPlan: i.USER_ROLES.pro,
                          limitContext: "export",
                        },
                        n.createElement(Vb, null)
                      )
                    )
                  )
                ),
                n.createElement(jt.A, { pb: 5 }, n.createElement(ub, null))
              )
            );
          },
          Gb = () => {
            const e = (0, o.wA)();
            return (
              (0, n.useEffect)(() => {
                f({ action: "Something went wrong", label: "all" });
              }, []),
              n.createElement(
                Sy.A,
                { icon: (0, Sy.h)("warning") },
                n.createElement(
                  Sy.A.Title,
                  null,
                  n.createElement(qt.A, { id: "errors.serverError" })
                ),
                n.createElement(
                  Sy.A.Description,
                  null,
                  n.createElement(qt.A, { id: "errors.tryAgain.text" })
                ),
                n.createElement(
                  jt.A,
                  { mt: 4 },
                  n.createElement(
                    Nt.A,
                    {
                      onClick: () => {
                        e(Ae());
                      },
                    },
                    n.createElement(qt.A, { id: "errors.tryAgain.btnText" })
                  )
                )
              )
            );
          },
          Yb = ({ children: e = null }) =>
            (0, o.d4)(so) ? n.createElement(Gb, null) : e;
        Yb.propTypes = { children: v().node };
        const Hb = Yb,
          Qb = () => {
            const { formatMessage: e } = (0, de.A)(),
              t = (0, o.d4)(Kl),
              a = (0, o.wA)(),
              r = (0, n.useCallback)(() => {
                a(jc()),
                  f({
                    action: "Nothing found blocks",
                    label: "clear filters click",
                  });
              }, [a]);
            return (
              (0, n.useEffect)(() => {
                f({
                  action: "Nothing found blocks",
                  label: "clear filters show",
                });
              }, []),
              n.createElement(Ly, {
                title: e({ id: "global.notFound.clearFilters.title" }),
                description: e({
                  id: "global.notFound.clearFilters.description",
                }),
                withButton: t,
                onClick: r,
                withIcon: !0,
                mt: 11,
              })
            );
          },
          Zb = (0, Ee.VP)("fetchRanksRequest"),
          Xb = (0, Ee.VP)("fetchRanksSuccess", (e) => e),
          eh =
            ((0, Ee.VP)("fetchRanksFailure", (e) => e),
            () =>
              n.createElement(
                "div",
                { style: { width: "266px", height: "106px" } },
                n.createElement(
                  or.A,
                  { height: 106, width: 266 },
                  n.createElement("rect", {
                    x: "0",
                    y: "0",
                    rx: "4",
                    ry: "4",
                    width: "150",
                    height: "20",
                  }),
                  n.createElement("rect", {
                    x: "0",
                    y: "40",
                    rx: "4",
                    ry: "4",
                    width: "266",
                    height: "8",
                  }),
                  n.createElement("rect", {
                    x: "0",
                    y: "60",
                    rx: "4",
                    ry: "4",
                    width: "266",
                    height: "8",
                  }),
                  n.createElement("rect", {
                    x: "0",
                    y: "80",
                    rx: "4",
                    ry: "4",
                    width: "175",
                    height: "8",
                  })
                )
              )),
          th = (e, t) =>
            1 === e.slice(0, t + 1).reduce((e, t) => e + Number(t), 0),
          ah = ({ children: e = null }) => {
            const t = ((e) => e.filter((e) => e))(e),
              [a, r] = (0, n.useState)(
                [...Array(n.Children.count(t)).keys()].reduce(
                  (e, t) => ((e[t] = null), e),
                  {}
                )
              ),
              l = (0, n.useCallback)(
                (e, t) => r((a) => ({ ...a, [e]: t })),
                [r]
              ),
              o = (0, n.useMemo)(
                () => Object.values(a).some((e) => null === e),
                [a]
              ),
              i = (0, n.useCallback)(
                (e) => {
                  return (
                    a[e] &&
                    ((t = e),
                    Object.values(a)
                      .slice(0, t + 1)
                      .reduce((e, t) => (t ? e + 1 : e), 0) < 4) &&
                    !o
                  );
                  var t;
                },
                [a, o]
              ),
              s = [...Array(n.Children.count(t)).keys()].map((e) => i(e));
            return n.createElement(
              n.Fragment,
              null,
              o &&
                n.createElement(
                  ce.A,
                  { direction: "row" },
                  t.map((e, t) =>
                    n.createElement(
                      ce.A,
                      { key: t },
                      t > 0 &&
                        n.createElement(Ut.A, {
                          mx: 6,
                          orientation: "vertical",
                          theme: "default",
                          use: "primary",
                        }),
                      n.createElement(eh, null)
                    )
                  )
                ),
              n.createElement(
                ce.A,
                { direction: "row" },
                t.map((e, t) =>
                  n.createElement(
                    ce.A,
                    { key: t },
                    t > 0 &&
                      i(t - 1) &&
                      n.createElement(Ut.A, {
                        mx: 6,
                        orientation: "vertical",
                        theme: "default",
                        use: "primary",
                      }),
                    n.createElement(
                      jt.A,
                      {
                        "data-is-first": !!th(s, t) || void 0,
                        "data-is-last": !!s[t] || void 0,
                      },
                      n.cloneElement(e, {
                        index: t,
                        blockHasData: l,
                        display: i(t),
                      })
                    )
                  )
                )
              )
            );
          };
        ah.propTypes = { children: v().node };
        const rh = ah,
          nh = "Nothing found blocks",
          lh = () => f({ action: "No data", label: "all" }),
          oh = () => {
            f({ action: nh, label: "country click" }),
              f({
                action: "Not found in seleÑted DB",
                label: "click to suggested DB",
              });
          },
          ih = (e, t) => {
            f({ action: nh, label: "country show" }),
              f({
                action: "Not found in seleÑted DB",
                label: `${e} - ${t.map((e) => e.database).join(" ")}`,
              });
          },
          sh = () => {
            f({ action: nh, label: "device click" });
          },
          ch = () => f({ action: nh, label: "device show" }),
          dh = () => f({ action: nh, label: "change request show" }),
          ph = () => f({ action: nh, label: "try another date click" }),
          uh = () => f({ action: nh, label: "try another date show" }),
          mh = () => ({
            gaNoData: lh,
            gaClickDb: oh,
            gaDbShow: ih,
            gaClickDevice: sh,
            gaShowDevice: ch,
            gaShowChangeRequest: dh,
            gaClickDate: ph,
            gaShowDate: uh,
          }),
          yh = ({
            title: e,
            dataAt: t,
            actionButtons: a = null,
            children: r = null,
          }) =>
            n.createElement(
              ce.A,
              { direction: "column", height: "100%", width: 266, "data-at": t },
              n.createElement(rr.Header, { tag: "h6", mb: 3 }, e),
              n.createElement("div", null, r),
              a ? n.createElement(jt.A, { pt: 1 }, a) : null
            );
        yh.propTypes = {
          title: v().string.isRequired,
          dataAt: v().string.isRequired,
          children: v().node,
          actionButtons: v().element,
        };
        const gh = yh,
          { useIntlHelpers: bh } = Fr(),
          hh = ({ value: e }) => {
            const { formatCompactNumber: t } = bh();
            return n.createElement(
              nr.A,
              {
                ml: 2,
                size: 200,
                color: "gray-500",
                "data-at": "positions-number",
              },
              t(e)
            );
          };
        hh.propTypes = { value: v().number.isRequired };
        const fh = hh,
          Eh = ({
            database: e,
            positions: t,
            setDb: a = () => {},
            deviceByString: r = !1,
          }) => {
            const l = r ? (0, kt.m_)(e, !1) : e,
              o = (0, kt.lg)(e) ? "mobile" : "desktop";
            return n.createElement(
              ce.A,
              {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                w: "100%",
              },
              n.createElement(
                ce.A,
                { "data-at": "other-db-item" },
                n.createElement(ar(), { db: e }),
                n.createElement(
                  Ii.A,
                  {
                    ml: 1,
                    mr: 4,
                    size: 200,
                    onClick: () => a(e),
                    "data-at": "other-db-name",
                  },
                  n.createElement(qt.A, { id: `db.${l}` }),
                  "Â ",
                  r ? n.createElement(qt.A, { id: `device.${o}` }) : null
                )
              ),
              n.createElement(fh, { value: t })
            );
          };
        Eh.propTypes = {
          database: v().string.isRequired,
          positions: v().number.isRequired,
          setDb: v().func,
          deviceByString: v().bool,
        };
        const vh = Eh;
        function wh() {
          return (
            (wh = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            wh.apply(null, arguments)
          );
        }
        const Th = ({ setDb: e, dbs: t = [] }) =>
          n.createElement(
            ce.A,
            {
              alignItems: "center",
              mt: 2,
              justifyContent: "space-between",
              "data-at": "nf-other-countries",
            },
            n.createElement(
              Qa.Ay,
              null,
              n.createElement(
                Qa.Ay.Trigger,
                { tag: Za.A },
                n.createElement(
                  Qa.Ay.Trigger.Text,
                  null,
                  n.createElement(qt.A, {
                    id: "global.notFound.otherdatabases.other",
                  })
                )
              ),
              n.createElement(
                Qa.Ay.Popper,
                null,
                n.createElement(
                  Qa.Ay.List,
                  { hMax: "240px", wMAx: 240 },
                  t.map((t) =>
                    n.createElement(
                      Qa.Ay.Option,
                      { value: t.database, key: t.database, direction: "row" },
                      n.createElement(
                        vh,
                        wh({ deviceByString: !0, setDb: e }, t)
                      )
                    )
                  )
                )
              )
            ),
            n.createElement(fh, {
              value: t.reduce((e, t) => e + t.positions, 0),
            })
          );
        Th.propTypes = { setDb: v().func.isRequired, dbs: v().array };
        const kh = Th;
        function Ah() {
          return (
            (Ah = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Ah.apply(null, arguments)
          );
        }
        const Ch = ({ setDb: e, dbs: t = [] }) => {
          const { formatMessage: a } = (0, de.A)(),
            [r, l] = (0, n.useMemo)(() => [t.slice(0, 4), t.slice(4)], [t]);
          return n.createElement(
            gh,
            {
              title: a({ id: "global.notFound.otherdatabases.title" }),
              dataAt: "nf-database",
            },
            n.createElement(
              "div",
              { "data-at": "dbs-list" },
              r.map((t, a) =>
                n.createElement(
                  jt.A,
                  { mt: a > 0 ? 2 : 0, key: t.database },
                  n.createElement(
                    vh,
                    Ah({ deviceByString: !0 }, t, { setDb: e })
                  )
                )
              )
            ),
            l.length > 0 &&
              (l.length > 1
                ? n.createElement(kh, { dbs: l, setDb: e })
                : n.createElement(
                    jt.A,
                    { mt: 2 },
                    n.createElement(
                      vh,
                      Ah({ deviceByString: !0 }, l[0], { setDb: e })
                    )
                  ))
          );
        };
        Ch.propTypes = { dbs: v().array, setDb: v().func.isRequired };
        const Sh = Ch,
          xh = (e) =>
            ({
              organic: "organicPositions",
              adwords: "adwordsPositions",
              pla: "plaPositions",
            }[e]),
          Rh = (e = "organic") => {
            const t = (0, o.d4)(lo);
            return (0, n.useMemo)(
              () =>
                t.map((t) => ({
                  database: t.database,
                  positions: Number(t.metrics[xh(e)]),
                })),
              [t, e]
            );
          },
          Lh = (e, t) => (0, kt.um)(e).db !== (0, kt.um)(t).db,
          Oh = ({
            isLoaded: e,
            display: t = !1,
            index: a = 0,
            blockHasData: r = () => {},
          }) => {
            const { gaClickDb: l, gaDbShow: i } = mh(),
              s = (0, o.d4)(We.Pf),
              c = (0, o.d4)(We.Lf),
              d = (0, o.d4)(ol.zW),
              p = Rh(d),
              u = (0, o.wA)(),
              m = (0, n.useCallback)(
                (e) => {
                  const t = (0, kt.um)(e);
                  u(Bt(t.db)), l();
                },
                [u, l]
              ),
              y = (0, n.useMemo)(() => {
                const e = p.filter(
                    (e) => (0, kt.lg)(e.database) === (0, kt.jb)(s)
                  ),
                  t = p.filter((e) => (0, kt.lg)(e.database) !== (0, kt.jb)(s)),
                  a = [];
                for (let r = 0; r < Math.max(e.length, t.length); r++)
                  e[r] && a.every((t) => Lh(t.database, e[r].database))
                    ? a.push(e[r])
                    : t[r] &&
                      a.every((e) => Lh(e.database, t[r].database)) &&
                      a.push(t[r]);
                return a
                  .filter(({ positions: e }) => e > 0)
                  .sort((e, t) => t.positions - e.positions);
              }, [p, s]);
            return (
              (0, n.useEffect)(() => {
                e && r(a, y.length > 0);
              }, [e, y, a, r]),
              (0, n.useEffect)(() => {
                t && y.length > 0 && i(c, y);
              }, [t, y, c, i]),
              t ? n.createElement(Sh, { dbs: y, setDb: m }) : null
            );
          };
        Oh.propTypes = {
          display: v().bool,
          blockHasData: v().func,
          index: v().number,
          isLoaded: v().bool.isRequired,
        };
        const _h = Oh;
        var Ph = a(59614),
          Ih = a(484);
        const Mh = (e) => {
          const { db: t, positions: a, isDBMobile: r, setOtherDevice: l } = e,
            { formatMessage: o } = (0, de.A)(),
            i = (0, n.useMemo)(() => (r ? "mobile" : "desktop") + "data", [r]),
            s = (0, n.useMemo)(() => (r ? Ph.A : Ih.A), [r]);
          return n.createElement(
            gh,
            {
              title: o({ id: "global.notFound.otherdevices.title" }),
              dataAt: "nf-devices",
            },
            n.createElement(
              ce.A,
              { justifyContent: "space-between" },
              n.createElement(
                Ii.A,
                { size: 200, onClick: () => l(t) },
                n.createElement(Ii.A.Addon, { tag: s }),
                n.createElement(
                  Ii.A.Text,
                  null,
                  o(
                    { id: `global.notFound.otherdevices.${i}` },
                    { DB: o({ id: `db.${(0, kt.m_)(t)}` }) }
                  )
                )
              ),
              n.createElement(fh, { value: a })
            )
          );
        };
        Mh.propTypes = {
          db: v().string.isRequired,
          positions: v().number.isRequired,
          isDBMobile: v().bool.isRequired,
          setOtherDevice: v().func.isRequired,
        };
        const Dh = Mh,
          Fh = ({
            deviceType: e,
            currentDB: t,
            isLoaded: a,
            display: r = !1,
            index: l = 0,
            blockHasData: i = () => {},
          }) => {
            const s = Rh(),
              c = (0, n.useMemo)(
                () =>
                  s
                    .filter((e) => (0, kt.m_)(e.database) === (0, kt.m_)(t))
                    .find((t) => (0, kt.jb)(e) !== (0, kt.lg)(t.database)),
                [s, e, t]
              ),
              d = c?.database,
              p = c?.positions,
              u = (0, o.wA)(),
              m = (0, n.useCallback)(
                (e) => {
                  const t = (0, kt.um)(e);
                  u(Jt(t.isMobile ? 1 : 0)), sh();
                },
                [u]
              );
            return (
              (0, n.useEffect)(() => {
                a && i(l, !!d);
              }, [a, d, l, i]),
              (0, n.useEffect)(() => {
                r && d && ch();
              }, [r, d]),
              r && c
                ? n.createElement(Dh, {
                    db: d,
                    positions: p,
                    isDBMobile: (0, kt.lg)(d),
                    setOtherDevice: m,
                  })
                : null
            );
          };
        Fh.propTypes = {
          currentDB: v().string.isRequired,
          deviceType: v().number.isRequired,
          display: v().bool,
          blockHasData: v().func,
          index: v().number,
          isLoaded: v().bool.isRequired,
        };
        const jh = n.memo(Fh);
        var qh = a(1806);
        const Nh = ({ type: e = "daily", value: t }) =>
          "daily" === e
            ? n.createElement(Ys.FormattedDate, {
                value: (0, qh.A)(t),
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : n.createElement(Ys.FormattedDate, {
                value: (0, qh.A)(t),
                year: "numeric",
                month: "long",
              });
        Nh.propTypes = {
          value: v().any.isRequired,
          type: v().oneOf(["daily", "monthly"]),
        };
        const Uh = n.memo(Nh),
          $h = (e) =>
            null == e ? "" : n.createElement(Uh, { value: e, type: "monthly" }),
          Vh = ({
            display: e = !1,
            index: t = 0,
            blockHasData: a = () => {},
          }) => {
            const { formatMessage: r } = (0, de.A)(),
              { gaClickDate: l, gaShowDate: i } = mh(),
              s = (0, o.d4)(We.Lk),
              c = (0, o.d4)(We.pp),
              d = (0, o.d4)(Ba),
              p = (0, o.wA)(),
              u = (0, n.useCallback)(() => {
                p(Wt(d.date, d.dateType, d.dateType === $t.J5.daily)), l();
              }, [p, d, l]);
            return (
              (0, n.useEffect)(() => {
                a(t, 1 === s);
              }, [s, t, a]),
              (0, n.useEffect)(() => {
                e && 1 === s && i();
              }, [e, s, i]),
              e
                ? n.createElement(
                    gh,
                    {
                      title: r({ id: "global.notFound.livedata.title" }),
                      dataAt: "nf-livedata",
                      actionButtons: n.createElement(
                        Nt.A,
                        { onClick: u },
                        n.createElement(qt.A, {
                          id: "global.notFound.livedata.btnText",
                        })
                      ),
                    },
                    n.createElement(
                      nr.A,
                      { size: 200, color: "gray-800", "data-at": "body-text" },
                      n.createElement(qt.A, {
                        id: "global.notFound.livedata.text",
                        values: { date: $h(c) },
                      })
                    )
                  )
                : null
            );
          };
        Vh.propTypes = {
          display: v().bool,
          blockHasData: v().func,
          index: v().number,
        };
        const zh = Vh;
        var Kh = a(38064);
        const Bh = ({
          display: e = !1,
          index: t = 0,
          blockHasData: a = () => {},
        }) => {
          const { gaShowChangeRequest: r } = mh(),
            { formatMessage: l } = (0, de.A)();
          return (
            ((e, t) => {
              (0, n.useEffect)(() => {
                setTimeout(() => {
                  e(t, !0);
                }, 200);
              }, [e, t]);
            })(a, t),
            (0, n.useEffect)(() => {
              e && r();
            }, [e, r]),
            e
              ? n.createElement(
                  gh,
                  {
                    title: l({ id: "global.notFound.checkrequest.title" }),
                    dataAt: "nf-search",
                  },
                  n.createElement(
                    Kh.A,
                    { size: 200 },
                    n.createElement(
                      Kh.A.Item,
                      null,
                      n.createElement(qt.A, {
                        id: "global.notFound.checkrequest.line1",
                      })
                    ),
                    n.createElement(
                      Kh.A.Item,
                      null,
                      n.createElement(qt.A, {
                        id: "global.notFound.checkrequest.line2",
                      })
                    ),
                    n.createElement(
                      Kh.A.Item,
                      null,
                      n.createElement(qt.A, {
                        id: "global.notFound.checkrequest.line3",
                      })
                    )
                  )
                )
              : null
          );
        };
        Bh.propTypes = {
          display: v().bool,
          blockHasData: v().func,
          index: v().number,
        };
        const Jh = Bh;
        function Wh() {
          return (
            (Wh = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Wh.apply(null, arguments)
          );
        }
        const Gh = (e) => {
            const t = (0, o.d4)(We.Lf),
              a = (0, o.d4)(We.Pf),
              r = (0, n.useMemo)(
                () => ((0, kt.jb)(a) ? "mobile" : "desktop"),
                [a]
              ),
              l = (0, n.useMemo)(() => ((0, kt.jb)(a) ? Ph.A : Ih.A), [a]);
            return n.createElement(
              ce.A,
              Wh(
                {
                  alignItems: "center",
                  justifyContent: "flex-start",
                  "data-at": "nf-db-info",
                },
                e
              ),
              n.createElement(
                ce.A,
                { alignItems: "center", mr: 4 },
                n.createElement(
                  jt.A,
                  { mr: 1 },
                  n.createElement(ar(), { db: t })
                ),
                n.createElement(
                  nr.A,
                  { size: 200, color: "gray-500", "data-at": "db-name" },
                  n.createElement(qt.A, { id: `db.${(0, kt.m_)(t)}` })
                )
              ),
              n.createElement(
                ce.A,
                { alignItems: "center" },
                n.createElement(
                  jt.A,
                  { mr: 1 },
                  n.createElement(l, { color: "gray-500" })
                ),
                n.createElement(
                  nr.A,
                  { size: 200, color: "gray-500", "data-at": "device-name" },
                  n.createElement(qt.A, { id: `device.${r}` })
                )
              )
            );
          },
          Yh = () => {
            const { gaNoData: e } = mh(),
              t = (0, o.d4)(We.Lf),
              a = (0, o.d4)(We.Pf),
              r = (0, o.d4)(oo),
              l = (0, o.d4)(ol.qG),
              i = (0, o.wA)(),
              s = (0, n.useCallback)(() => i(Zb()), [i]),
              c = "domain" === l?.searchType;
            return (
              (0, n.useEffect)(() => {
                c && s(), e();
              }, [e, c, s]),
              n.createElement(
                jt.A,
                { mt: 4, "data-at": "nothing-found" },
                n.createElement(
                  nr.A,
                  {
                    fontSize: "19px",
                    tag: "h5",
                    fontWeight: 500,
                    mb: 2,
                    mt: 0,
                    "data-at": "nothing-found-title",
                  },
                  n.createElement(qt.A, { id: "global.notFound.title" })
                ),
                n.createElement(Gh, { mb: 8 }),
                n.createElement(
                  rh,
                  null,
                  c && n.createElement(_h, { isLoaded: r }),
                  c &&
                    n.createElement(jh, {
                      deviceType: a,
                      currentDB: t,
                      isLoaded: r,
                    }),
                  n.createElement(zh, null),
                  n.createElement(Jh, null)
                )
              )
            );
          },
          Hh = () =>
            (0, o.d4)(Kl)
              ? n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(em, null),
                  n.createElement(Qb, null)
                )
              : n.createElement(Yh, null),
          Qh = "keyword_gap",
          Zh = () => {
            const e = (0, o.d4)(kl),
              t = !(0, o.d4)(io) && !e;
            return (
              (() => {
                const e = (0, o.d4)(so),
                  t = (0, o.d4)(kl),
                  a = (0, o.d4)(io),
                  r = (0, o.d4)(ol.yo),
                  l = !a && !t;
                (0, n.useEffect)(() => {
                  if (!a || e) {
                    let t = Mo;
                    l ? (t = "nodata") : e && (t = "sww"),
                      Ap.track(Ap.eventName.show, {
                        item_location: Qh,
                        status: t,
                        item_label: r.map((e) => e.searchType).join("_"),
                        type: `${r.length}x`,
                        state: r.map((e) => e.keywordType).join("_"),
                      });
                  }
                }, [l, e, r, a]);
              })(),
              n.createElement(
                lm,
                { direction: "column", "data-path": Qh },
                n.createElement(nm, null),
                n.createElement(
                  jt.A,
                  { wMin: 1044, wMax: 1670 },
                  n.createElement(Ni, null)
                ),
                n.createElement(Ut.A, {
                  orientation: "horizontal",
                  theme: "default",
                  use: "primary",
                }),
                n.createElement(
                  om,
                  { wMin: 980, wMax: 1606, mx: 8, mb: 24 },
                  n.createElement(
                    fe,
                    { pageType: "report" },
                    n.createElement(
                      ce.A,
                      { my: 4 },
                      n.createElement(Is, { gaAction: "Report" })
                    )
                  ),
                  n.createElement(Ut.A, {
                    orientation: "horizontal",
                    theme: "default",
                    use: "primary",
                  }),
                  n.createElement(
                    Hb,
                    null,
                    n.createElement(rm, null),
                    t
                      ? n.createElement(Hh, null)
                      : n.createElement(
                          n.Fragment,
                          null,
                          n.createElement(em, null),
                          n.createElement(
                            ce.A,
                            { mb: 4 },
                            n.createElement(ld, null),
                            n.createElement(Gd, { ml: 4 })
                          ),
                          n.createElement(Wb, null)
                        )
                  )
                )
              )
            );
          },
          Xh = (0, se.default)(jt.A)`
  filter: blur(5px);
  opacity: 0.3;
  pointer-events: none;
`,
          ef = () =>
            n.createElement(
              fe,
              { pageType: "report" },
              n.createElement(
                Xh,
                null,
                n.createElement(Ni, { searchItem: "test.com" }),
                n.createElement(
                  "div",
                  { className: "fake_report-module__content___OVOJp" },
                  n.createElement(Is, null)
                )
              )
            );
        var tf = a(555);
        const af = (e) => e.limits.hasLimit,
          rf = (e) => e.limits.errCode;
        class nf extends n.PureComponent {
          componentDidMount() {
            const { notReactComponent: e } = this.props;
            e &&
              e((e) => {
                this.el = e;
              });
          }
          componentWillUnmount() {
            const { destroy: e } = this.props;
            this.el && e(this.el);
          }
          render() {
            return null;
          }
        }
        nf.propTypes = {
          notReactComponent: v().func.isRequired,
          destroy: v().func.isRequired,
        };
        const lf = nf,
          of = () =>
            n.createElement(lf, {
              notReactComponent: i.BillingUI.limitPopup,
              destroy: (e) => e.remove(),
            }),
          sf = () =>
            n.createElement(lf, {
              notReactComponent: i.BillingUI.trialPopup,
              destroy: (e) => e.remove(),
            }),
          cf = (0, Ee.VP)("setLimitError", (e) => ({ errCode: e })),
          df = (0, Ee.VP)("requestClearLimitError"),
          pf = (0, Ee.VP)("clearLimitError"),
          uf = () =>
            void (window.location = `${window.location.origin}/analytics/keywordgap/`),
          mf = (e, t) =>
            t ? No : "historical" === e ? i.USER_ROLES.guru : i.USER_ROLES.pro,
          yf = () => {
            const e = (0, o.d4)(nt),
              t = (0, o.d4)(rf),
              a = ((e) =>
                ({
                  [tf.ERROR_CODE.historicalDataPermission]:
                    "limitBlock.cancelBtnModal",
                  [tf.ERROR_CODE.productTypePermission]:
                    "limitBlock.goToStartPage",
                }[e] || null))(t),
              r = ((e, t = null) =>
                ({ [tf.ERROR_CODE.productTypePermission]: i.USER_ROLES.guru }[
                  e
                ] || t))(t, _.A.productGroup),
              l = ((e) => {
                const t = (0, o.wA)();
                return (0, n.useMemo)(
                  () =>
                    e === tf.ERROR_CODE.productTypePermission
                      ? uf
                      : () => t(df()),
                  [e, t]
                );
              })(t);
            return ((e, t, a, r, l) => {
              const o = ((e) =>
                ({
                  [tf.ERROR_CODE.historicalDataPermission]: "historical",
                  [tf.ERROR_CODE.productTypePermission]: "pla",
                  [tf.ERROR_CODE.reportLimitsExceeded]: "report_per_day",
                }[e]))(t);
              switch (l) {
                case i.USER_ROLES.guest:
                  return n.createElement(of, null);
                case i.USER_ROLES.free:
                case i.USER_ROLES.appCenter:
                  return t === tf.ERROR_CODE.reportLimitsExceeded
                    ? n.createElement(sf, null)
                    : n.createElement(Ko, {
                        planType: mf(o, e),
                        limitContext: o,
                        cancelText: a,
                        onCancel: r,
                        needSticky: !0,
                      });
                case i.USER_ROLES.pro:
                case i.USER_ROLES.guru:
                case i.USER_ROLES.business:
                  return n.createElement(Ko, {
                    planType: i.USER_ROLES.next(l),
                    limitContext: o,
                    cancelText: a,
                    onCancel: r,
                    needSticky: !0,
                  });
                default:
                  return null;
              }
            })(e, t, a, l, r);
          },
          gf = (0, n.memo)(yf),
          bf = (0, se.default)(jt.A)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 200px;
`,
          hf = () =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(bf, null, n.createElement(gf, null)),
              n.createElement(
                rr.NoInteractionWrapper,
                null,
                n.createElement(ef, null)
              )
            ),
          ff = n.memo(hf),
          Ef = (0, a(42791).bY)(
            Object.values({
              desktop: "(min-width: 1101px)",
              tablet: "(max-width: 1100px)",
              mobile: "(max-width: 414px)",
            })
          ),
          vf = () => {
            const e = !(0, o.d4)(ol.Ij),
              t = (0, o.d4)(af);
            return (
              ((e) => {
                const { formatMessage: t } = (0, de.A)(),
                  a = (0, o.d4)(ol.zP),
                  r = t({ id: "pageTitle.landing" }),
                  n = t({ id: "pageTitle.report" }, { FIRST_DOMAIN: Ct(a) });
                document.title = e ? r : n;
              })(e),
              ((e = !0) => {
                const t = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                  e &&
                    !t.current &&
                    (f({
                      category: "keyword-gap:report",
                      action: "show:report",
                      label: "report:show",
                    }),
                    (t.current = !0));
                }, [e]);
              })(!e && !t),
              e
                ? n.createElement(Ef, null, n.createElement(ll, null))
                : t
                ? n.createElement(ff, null)
                : n.createElement(Zh, null)
            );
          },
          wf = () => (
            (0, n.useEffect)(() => {
              (0, zb.configure)(
                Number(_.A.id),
                _.A.apiKey,
                _.A.locale,
                "keyword_gap"
              );
            }, []),
            null
          ),
          Tf = (0, se.default)(ce.A)`
  min-height: 100%;
  padding: 0 0;
  flex-direction: column;
  font-family: Inter, sans-serif;
  background-color: #f4f5f9;
  flex-grow: 1;
`;
        var kf = a(82960),
          Af = a(32742),
          Cf = a(64251),
          Sf = a(17183);
        const xf = (e) => {
            if (null == e) return null;
            let t, a;
            return (
              "string" == typeof e
                ? ([t, a] = e.split("-"))
                : ((t = e?.from), (a = e?.to)),
              (t = Math.abs(parseInt(t, 10))),
              (a = Math.abs(parseInt(a, 10))),
              t || a
                ? [Number.isNaN(t) ? null : t, Number.isNaN(a) ? null : a].join(
                    "-"
                  )
                : ""
            );
          },
          Rf = (e) =>
            null != e && null != e.advancedApplied
              ? encodeURIComponent(
                  JSON.stringify({
                    search: e.search,
                    volume: e.volume,
                    kd: e.keywordDifficulty,
                    intent: e.intent,
                    position: e.position,
                    advanced: e.advancedApplied,
                  })
                )
              : null,
          Lf = (e) => {
            try {
              const t = decodeURIComponent(e),
                a = JSON.parse(t),
                r = a?.advanced ?? {};
              return {
                search: a?.search,
                volume: xf(a?.volume),
                keywordDifficulty: xf(a?.kd),
                position: a?.position,
                intent: a?.intent,
                advanced: r,
                advancedApplied: r,
              };
            } catch (t) {
              return (
                console.error("deserialize filter error", { filterStr: e }, t),
                {
                  search: "",
                  volume: "",
                  keywordDifficulty: "",
                  position: "",
                  intent: "",
                  advanced: "",
                  advancedApplied: "",
                }
              );
            }
          },
          Of = {
            db: null,
            defaultDb: null,
            searchItem: null,
            searchType: "domain",
            date: null,
            dateType: $t.J5.daily,
            isLive: null,
            device: $t.W.desktop,
            currency: y.get("currency") || "usd",
            currencyType: y.get("currencyType") || "default",
            scope: "domain",
            nextParams: null,
          },
          _f = {
            constants: zt,
            reducer: (e = Of, t) => {
              switch (t.type) {
                case Gt.getType():
                  return { ...e, db: t.payload.db };
                case ra.getType():
                  return { ...e, defaultDb: { ...t.payload } };
                case Ht.getType():
                  return {
                    ...e,
                    date: t.payload.date,
                    dateType: t.payload.dateType,
                    isLive: t.payload.isLive,
                  };
                case ea.getType():
                  return {
                    ...e,
                    currency: t.payload.currency,
                    currencyType:
                      ((a = t.payload.currency),
                      "usd" === a ? "default" : "local"),
                  };
                case Kt.SET_SEARCH_ITEM:
                  return (
                    console.warn("Do not use this!"),
                    { ...e, searchItem: t.searchItem }
                  );
                case Kt.SET_DOMAIN: {
                  if (!t.domain) return e;
                  const a = De.Ay.toASCII(
                    (function (e = "") {
                      return e !== decodeURIComponent(e);
                    })(t.domain)
                      ? decodeURI(t.domain)
                      : t.domain
                  );
                  return {
                    ...e,
                    domain: a.toLowerCase(),
                    searchItem: a.toLowerCase(),
                  };
                }
                case ta.getType():
                  return { ...e, nextParams: t.payload.nextParams };
                case aa.getType(): {
                  const { nextParams: t } = e;
                  return { ...e, ...t, nextParams: null };
                }
                case Yt.getType():
                  return { ...e, device: t.payload.device };
                case Kt.SET_DB_AND_DEVICE:
                  return { ...e, db: t.db, device: t.device };
                default:
                  return e;
              }
              var a;
            },
          },
          Pf = {
            reducer: (0, Ee.vy)(
              {
                [cf]: (e, { errCode: t }) => ({
                  ...e,
                  hasLimit: !0,
                  errCode: t,
                }),
                [pf]: (e) => ({ ...e, hasLimit: !1, errCode: null }),
              },
              { hasLimit: !1, errCode: null }
            ),
          },
          If = {
            mode: "simple",
            keywordType: "organic",
            intersectionType: "common",
            nextIntersectionType: null,
            intersectionSetByUser: !1,
          },
          Mf = {
            constants: r,
            reducer: (e = If, t) => {
              switch (t.type) {
                case jn.getType():
                  return { ...e, mode: t.payload.mode };
                case qn.getType():
                  return { ...e, keywordType: t.payload.keywordType };
                case Nn.getType():
                  return {
                    ...e,
                    nextIntersectionType: t.payload.intersectionType,
                  };
                case Un.getType():
                  return {
                    ...e,
                    intersectionType: t.payload.intersectionType,
                    nextIntersectionType: null,
                    intersectionSetByUser: t.payload.intersectionSetByUser,
                  };
                case Vn.getType():
                  return { ...e, intersectionSetByUser: !1 };
                default:
                  return e;
              }
            },
          },
          Df = { data: [] },
          Ff = {
            constants: Pe,
            reducer: (e = Df, t) => {
              switch (t.type) {
                case Kn.getType():
                  return { ...e, data: t.payload.targets };
                case Jn.getType():
                  return { data: t.payload.targets };
                default:
                  return e;
              }
            },
          },
          jf = (0, Ee.VP)("resetLoadingStatusGlobal"),
          qf = (e) => ({ id: e }),
          Nf = (e) => {
            const t = e.toUpperCase(),
              a = (0, Ee.VP)(`${t}/startLoading`, qf),
              r = (0, Ee.VP)(`${t}/stopLoading`, qf),
              n = (0, Ee.VP)(`${t}/resetLoading`, qf),
              l = (0, Ee.VP)(`${t}/setError`, qf),
              o = (0, Ee.VP)(`${t}/resetError`, qf);
            return {
              actions: {
                startLoading: a,
                stopLoading: r,
                resetLoading: n,
                setError: l,
                resetError: o,
              },
              reducer: (0, Ee.vy)(
                {
                  [a]: (e) => ({ ...e, isLoading: !0 }),
                  [r]: (e) => ({ ...e, isLoading: !1 }),
                  [l]: (e) => ({ ...e, hasError: !0 }),
                  [o]: (e) => ({ ...e, hasError: !1 }),
                  [jf]: (e) => ({ ...e, isLoading: null }),
                  [n]: (e) => ({ ...e, isLoading: null }),
                },
                { isLoading: null, hasError: !1 }
              ),
            };
          },
          { actions: Uf, reducer: $f } = Nf("statusDbsReducer"),
          { actions: Vf, reducer: zf } = Nf("statusTimepointsReducer"),
          { actions: Kf, reducer: Bf } = Nf("statusCurrenciesReducer"),
          Jf = (0, Ee.vy)(
            {
              [we]: (e, { data: t }) => {
                return {
                  ...e,
                  databases:
                    ((a = t), a.reduce((e, t) => ((e[t.code] = t), e), {})),
                };
                var a;
              },
              [ke]: (e, { data: t, db: a, device: r }) => ({
                ...e,
                timepoints: { ...e.timepoints, [`${a}/${r}`]: t },
              }),
              [Te]: (e, { data: t, date: a }) => {
                return {
                  ...e,
                  currencies: {
                    ...e.currencies,
                    [a]:
                      ((r = t),
                      r.reduce(
                        (e, t) => (
                          (e[
                            (({ currencyCode: e }) => [e].join("/"))({ ...t })
                          ] = t),
                          e
                        ),
                        {}
                      )),
                  },
                };
                var r;
              },
              [Ce]: (e, { db: t }) => ({
                ...e,
                databases: {
                  ...e.databases,
                  [t]: { ...e.databases[t], available: !0 },
                },
              }),
            },
            {}
          ),
          Wf = (0, kf.HY)({
            data: Jf,
            statusDbs: $f,
            statusTimepoints: zf,
            statusCurrencies: Bf,
          }),
          Gf = { field: "volume", direction: "desc" },
          Yf = {
            sorting: Gf,
            currentPage: 1,
            prevPage: 1,
            selectedKeywords: {},
            limitError: !1,
          },
          Hf = (0, Ee.vy)(
            {
              [Fm]: (e, { field: t, direction: a }) => ({
                ...e,
                sorting: { field: t, direction: a },
              }),
              [jm]: (e, { limitError: t }) => ({ ...e, limitError: t }),
              [Um]: (e, { page: t }) => ({
                ...e,
                prevPage: e.currentPage,
                currentPage: t,
              }),
              [$m]: (e, { page: t }) => ({ ...e, prevPage: t }),
              [zm]: (e, { id: t, params: a }) => {
                const r = Hl(a),
                  n = e.selectedKeywords?.[r] ?? [];
                let l;
                return (
                  (l = n.find((e) => e === t)
                    ? n.filter((e) => e !== t)
                    : [...n, t]),
                  { ...e, selectedKeywords: { ...e.selectedKeywords, [r]: l } }
                );
              },
              [Km]: (e, { ids: t, params: a }) => {
                const r = Hl(a),
                  n = e.selectedKeywords?.[r] ?? [],
                  l = new Set([...n, ...t]);
                return {
                  ...e,
                  selectedKeywords: { ...e.selectedKeywords, [r]: [...l] },
                };
              },
              [Bm]: (e, { ids: t, params: a }) => {
                const r = Hl(a),
                  n = e.selectedKeywords?.[r] ?? [],
                  l = t ? n.filter((e) => !t.includes(e)) : [];
                return {
                  ...e,
                  selectedKeywords: { ...e.selectedKeywords, [r]: l },
                };
              },
            },
            Yf
          ),
          Qf = Hf,
          { actions: Zf, reducer: Xf } = Nf("statusKeywordsTotalReducer"),
          eE = (0, Ee.vy)({ [sd]: (e, { data: t }) => ({ ...t }) }, {}),
          tE = (0, kf.HY)({ data: eE, status: Xf }),
          aE =
            ((0, Ee.VP)("requestTopKeywords"),
            (0, Ee.VP)("getDataSuccess", (e, t) => ({ data: e, id: t }))),
          { actions: rE, reducer: nE } = Nf("keywords_top"),
          lE = (0, Ee.vy)({ [aE]: (e, { data: t }) => ({ ...t }) }, {}),
          oE = (0, kf.HY)({ data: lE, status: nE });
        class iE {
          constructor(e) {
            (this.id = e.id),
              (this.keyword = e.keyword),
              (this.intents = e.intents),
              (this.volume = Number(e.volume)),
              (this.keywordDifficulty = Number(e.keywordDifficulty)),
              (this.cpc = Number(e.cpc)),
              (this.comp = Number(e.comp)),
              (this.results = Number(e.results)),
              (this.positions = e.positions),
              (this.urls = e.urls?.map(Ct));
          }
        }
        const { actions: sE, reducer: cE } = Nf("statusKeywordsReducer"),
          dE = (0, Ee.vy)(
            {
              [ty]: (e, { data: t }) => {
                const a = t
                  .map((e) => new iE(e))
                  .reduce((e, t) => ((e[t.id] = t), e), {});
                return { ...e, ...a };
              },
            },
            []
          ),
          pE = (0, Ee.vy)(
            {
              [ty]: (e, { data: t, pageParams: a }) => {
                const r = Hl(a);
                return {
                  ...e,
                  [r]: { ...e[r], [a.page]: t.map(({ id: e }) => e) },
                };
              },
            },
            {}
          ),
          uE = (0, kf.HY)({ data: dE, status: cE, meta: pE }),
          { actions: mE, reducer: yE } = Nf("statusRanksReducer"),
          gE = (0, Ee.vy)({ [Xb]: (e, t) => t }, []),
          bE = (0, kf.HY)({ data: gE, status: yE });
        var hE = a(43561);
        const fE = (e) =>
            ({
              keyword: Su,
              keywordType: null,
              volume: Cu,
              cpc: Cu,
              comp: Cu,
              results: Cu,
            }[e]),
          EE = (e) => ({ keywordType: [...xu] }[e]),
          vE = (e, t) =>
            Object.values(e).some((e) => Ru.every((a) => e[a] === t[a])),
          wE = (0, hE.customAlphabet)(
            "1234567890qwertyuiopasdfghjklzxcvbnm",
            5
          ),
          TE = null,
          kE = () => ({
            id: wE(),
            isIncludes: !0,
            field: "keyword",
            criteria: "containing",
            value: "",
          }),
          AE = ({ setFilter: e, clearFilter: t }) =>
            (0, Ee.vy)(
              { [e]: (e, { value: t }) => t, [t]: () => TE, [jc]: () => TE },
              TE
            ),
          CE = () => {
            const e = kE();
            return { [e.id]: e, order: [e.id] };
          },
          SE = (0, Ee.vy)(
            {
              [Hc]: CE,
              [jc]: CE,
              [Wc]: (e) => {
                const t = kE();
                return { ...e, [t.id]: t, order: [...e.order, t.id] };
              },
              [Gc]: (e, { id: t }) => {
                const { [t]: a, ...r } = e;
                return { ...r, order: r.order.filter((e) => e !== t) };
              },
              [Yc]: (e, { id: t, name: a, value: r }) => {
                const { [t]: n, ...l } = e;
                return { ...l, [t]: { ...n, [a]: r } };
              },
              [Kc]: (e, { data: t }) => ({ ...t, order: Object.keys(t) }),
            },
            { order: [] }
          ),
          xE = (0, Ee.vy)(
            {
              [Jc]: (e, { filters: t }) => ({ ...t }),
              [Hc]: () => Object.create({}),
            },
            {}
          ),
          RE = (0, kf.HY)({
            position: AE(Nc),
            volume: AE(Uc),
            keywordDifficulty: AE(Vc),
            intent: AE(zc),
            search: AE($c),
            advanced: SE,
            advancedApplied: xE,
          }),
          LE = {
            data: (0, kf.HY)({
              reportConfig: Wf,
              keywordsTotal: tE,
              keywordsTop: oE,
              keywords: uE,
              ranks: bE,
            }),
            kgTable: Qf,
            filters: RE,
          };
        var OE = a(90167);
        function* _E({ payload: { dbString: e } }) {
          let t;
          do {
            (t = yield (0, OE.Lt)(We.dW)), null == t && (yield (0, OE.cb)(10));
          } while (null == t);
          const a = (0, kt.um)((0, kt.pe)(e || t?.db)),
            r = a.db;
          yield (0, OE.yJ)(Bt(r)),
            yield (0, OE.yJ)(Gt(r)),
            "" === (new I(window.location.search).get("device") || "") &&
              (yield (0, OE.yJ)(Yt(a.isMobile ? $t.W.mobile : $t.W.desktop)));
        }
        function* PE({ payload: { deviceString: e } }) {
          const t = e;
          yield (0, OE.yJ)(Jt(t)), yield (0, OE.yJ)(Yt(t));
        }
        function* IE({ payload: { dateString: e } }) {
          try {
            const t = { date: null, dateType: null, isLive: !0 };
            if (!e || (8 !== e.length && 6 !== e.length))
              (t.date = (0, ft.A)(new Date(), "yyyyMMdd")),
                (t.dateType = $t.J5.daily);
            else {
              const a = e.length < 8 ? $t.J5.monthly : $t.J5.daily;
              (t.date = a === $t.J5.daily ? e : `${e}15`),
                (t.dateType = a),
                (t.isLive = a === $t.J5.daily);
            }
            yield (0, OE.yJ)(Wt(t.date, t.dateType, t.isLive)),
              yield (0, OE.yJ)(Ht(t.date, t.dateType, t.isLive));
          } catch (e) {
            console.warn(e);
          }
        }
        function* ME({ payload: { db: e } }) {
          Ue(e);
          const t = yield (0, OE.Lt)(We.Ke),
            a = yield (0, OE.Lt)(qa, e),
            r =
              "local" === t && a.length > 1
                ? a.find((e) => e !== $t.OS)
                : $t.OS,
            n = yield (0, OE.Lt)(We.Pf);
          yield (0, OE.yJ)(ra({ db: e, isMobile: n === $t.W.mobile })),
            yield (0, OE.T1)($e, {
              db: e,
              device: $t.W.ToString(n),
              currency: r,
            });
        }
        function* DE({ payload: { dbString: e } }) {
          const t = yield (0, OE.Lt)(We.Lf),
            a = (0, kt.um)((0, kt.pe)(e));
          null == t && (yield (0, OE.yJ)(Gt(a.db)), yield (0, OE.yJ)(Bt(a.db))),
            yield (0, OE.yJ)(ra(a));
        }
        function FE({ payload: { currency: e } }) {
          $e({ currency: e });
        }
        function jE({ payload: { device: e } }) {
          $e({ device: $t.W.ToString(e) });
        }
        function qE({ payload: { date: e, dateType: t } }) {
          $e({ date: t === $t.J5.monthly ? e.slice(0, 6) : "" });
        }
        function* NE() {
          yield (0, OE.Q7)([
            (0, OE.jP)(na, DE),
            (0, OE.p8)(Qt.getType(), IE),
            (0, OE.p8)(Zt.getType(), _E),
            (0, OE.p8)(Xt.getType(), PE),
            (0, OE.p8)([Gt.getType(), Bt.getType()], ME),
            (0, OE.p8)(ea.getType(), FE),
            (0, OE.p8)([Yt.getType(), Jt.getType()], jE),
            (0, OE.p8)(Wt.getType(), qE),
          ]);
        }
        const UE = async ({ requestId: e, date: t, isLive: a }) => {
            const r = { requestId: e, report: st.REPORT_NAME.gap },
              n = { date: (0, it.dateStringToObject)(t, a) };
            return (await bt.fetchData("/Currency/Rates", r, n)).rates;
          },
          $E = [
            tf.ERROR_CODE.reportLimitsExceeded,
            tf.ERROR_CODE.historicalDataPermission,
            tf.ERROR_CODE.productTypePermission,
            tf.ERROR_CODE.authError,
            tf.ERROR_CODE.keywordsTypePermission,
            tf.ERROR_CODE.filtersPermission,
          ];
        function* VE({
          startLoading: e,
          stopLoading: t,
          resetLoading: a,
          setError: r,
          resetError: n,
          selectError: l,
          selectLoading: o,
          success: i,
          method: s,
          data: c,
          needToken: d = !0,
          onError: p,
        }) {
          if (yield (0, OE.Lt)(o)) {
            const { timeout: e } = yield (0, OE.O4)({
              prevTaskStopped: yield (0, OE.s)([t.getType(), a.getType()]),
              timeout: yield (0, OE.cb)(50),
            });
            if (e) return;
          }
          try {
            let t;
            yield (0, OE.yJ)(e()),
              (yield (0, OE.Lt)(l)) && (yield (0, OE.yJ)(n())),
              (t = d
                ? yield (0, OE.T1)(Ui.withRequestId, s, c)
                : yield (0, OE.T1)(s, c));
            const a = i(t);
            if (Array.isArray(a)) for (const e of a) yield (0, OE.yJ)(e);
            else yield (0, OE.yJ)(i(t));
          } catch (e) {
            console.warn(e),
              $E.includes(e.code) && (yield (0, OE.yJ)(cf(e.code))),
              yield (0, OE.yJ)(r(e)),
              p && (yield (0, OE.cH)(p, e));
          } finally {
            (yield (0, OE.KW)())
              ? yield (0, OE.yJ)(a())
              : yield (0, OE.yJ)(t());
          }
        }
        (0, Ee.VP)("reportConfigUpdateRequest");
        const zE = (0, Ee.VP)("reportConfigUpdated"),
          KE = (e, t) => [...e.daily, ...e.monthly].includes(t),
          BE = ({ db: e, defaultDb: t, date: a }) =>
            (Boolean(e) || Boolean(t?.db)) && Boolean(a);
        function* JE(e) {
          yield (0, OE.yJ)(aa()), yield (0, OE.yJ)(zE(e));
        }
        function* WE(e) {
          yield (0, OE.T1)(VE, {
            ...Uf,
            selectError: (e) => e.data.reportConfig.statusDbs.hasError,
            selectLoading: (e) => e.data.reportConfig.statusDbs.isLoading,
            success: we,
            method: Zm,
            data: { ...e },
            needToken: !1,
          });
        }
        function* GE() {
          yield (0, OE.T1)(WE);
        }
        function* YE(e) {
          (yield (0, OE.Lt)(La)) || (yield (0, OE.T1)(WE, e));
        }
        function* HE({ payload: e }) {
          const t = yield (0, OE.Lt)(We.Lf),
            a = yield (0, OE.Lt)(We.Pf),
            r = yield (0, OE.Lt)(We.Ke),
            n = yield (0, OE.Lt)(qa, t),
            l =
              "local" === r && n.length > 1
                ? n.find((e) => e !== $t.OS)
                : $t.OS;
          if (
            (yield (0, OE.T1)($e, {
              db: t,
              device: $t.W.ToString(a),
              currency: l,
            }),
            "il" === t && 0 === a)
          ) {
            const a = `${t}-ext`;
            if (e.data.find(({ code: e }) => e === a)) {
              const e = new I(window.location.search);
              e.set("db", a),
                window.location.replace(
                  `${window.location.pathname}?${e.toString()}`
                );
            }
          }
        }
        function* QE(e) {
          yield (0, OE.T1)(VE, {
            ...Kf,
            selectError: (e) => e.data.reportConfig.statusCurrencies.hasError,
            selectLoading: (e) =>
              e.data.reportConfig.statusCurrencies.isLoading,
            success: (t) => Te(t, e.date, e.isLive),
            method: UE,
            data: { ...e },
          });
        }
        function* ZE(e) {
          (yield (0, OE.Lt)(Ka, e.date, e.isLive)) || (yield (0, OE.T1)(QE, e));
        }
        function* XE(e) {
          yield (0, OE.T1)(VE, {
            ...Vf,
            selectError: (e) => e.data.reportConfig.statusTimepoints.hasError,
            selectLoading: (e) =>
              e.data.reportConfig.statusTimepoints.isLoading,
            success: (t) =>
              ke(t, e.db || e.defaultDb?.db, e.device, e.dateType),
            method: Xm,
            data: { ...e, db: e.db || e.defaultDb?.db },
            *onError(e) {
              e?.code === tf.ERROR_CODE.validationError &&
                (yield (0, OE.cb)(150), yield (0, OE.yJ)(Jt($t.W.desktop)));
            },
          });
        }
        function* ev(e) {
          (yield (0, OE.Lt)(za, e.db, e.device)) || (yield (0, OE.T1)(XE, e));
        }
        function* tv(e) {
          BE(e) &&
            (yield (0, OE.Zy)(JE, e),
            yield (0, OE.T1)(YE, e),
            yield (0, OE.T1)(ev, e),
            yield (0, OE.T1)(ZE, e));
        }
        function* av(e) {
          const t = { ...e, db: e.db || e.defaultDb?.db },
            a = e.device,
            r = yield (0, OE.Lt)(ma);
          return (
            r ||
              null == r ||
              (yield (0, OE.Lt)(Da, e.db || e.defaultDb?.db)).includes(a) ||
              (t.device = $t.W.desktop),
            t
          );
        }
        let rv = {};
        const nv = (e, t) => {
          const a = Object.keys(t).reduce(
            (a, r) =>
              a &&
              ((e, t, a) =>
                "date" === a
                  ? t.date?.payload?.dateType === $t.J5.daily
                    ? t.date?.payload?.dateType === e.dateType
                    : t.date?.payload?.date === e.date
                  : t[a]?.payload?.[a] === e[a])(e, t, r),
            !0
          );
          return a;
        };
        function* lv() {
          let e;
          for (;;) {
            const t = yield (0, OE.O4)({
              db: (0, OE.s)(Bt),
              device: (0, OE.s)(Jt),
              date: (0, OE.s)(Wt),
            });
            if (nv(rv, t)) {
              t.date?.payload?.date !== rv.date &&
                "date" === Object.keys(t)[0] &&
                (yield (0, OE.yJ)(
                  Ht(
                    t.date?.payload?.date,
                    t.date?.payload?.dateType,
                    t.date?.payload?.isLive
                  )
                ));
              continue;
            }
            e && (yield (0, OE.ZT)(e));
            let a = yield (0, OE.Lt)(Yl);
            for (const e of Object.values(t)) e && (a = { ...a, ...e.payload });
            (rv = yield (0, OE.T1)(av, a)),
              yield (0, OE.yJ)(ta(rv)),
              (e = yield (0, OE.Zy)(tv, rv));
          }
        }
        function* ov({ payload: { data: e, dateType: t } }) {
          const a = yield (0, OE.Lt)(We.pp);
          KE(e, a) ||
            (yield (0, OE.yJ)(
              Wt(
                e[t === $t.J5.daily ? "daily" : "monthly"][0],
                t,
                t === $t.J5.daily
              )
            ));
        }
        function* iv() {
          const e = yield (0, OE.Lt)(Yl);
          yield (0, OE.T1)(tv, e);
        }
        function* sv() {
          (yield (0, OE.Lt)(va)) && (yield (0, OE.yJ)(Ae()));
        }
        const cv = () => null != new I(window.location.search).get("filter"),
          dv = ({ targets: e, db: t, defaultDb: a }) =>
            e.length >= 2 && (null !== t || null !== a?.db);
        let pv = !1;
        function* uv() {
          yield (0, OE.s)(Xc.getType()), (pv = !0);
        }
        function* mv() {
          for (;;) {
            yield (0, OE.s)("*");
            const e = yield (0, OE.Lt)(Yl);
            if (dv(e)) break;
          }
          cv() && !pv && (yield (0, OE.s)(Xc.getType())), yield (0, OE.Zy)(lv);
          const e = yield (0, OE.Lt)(Yl);
          (rv = yield (0, OE.T1)(av, e)), yield (0, OE.T1)(tv, rv);
        }
        function* yv() {
          yield (0, OE.Q7)([
            (0, OE.Zy)(uv),
            (0, OE.Zy)(mv),
            (0, OE.p8)(ve.getType(), GE),
            (0, OE.p8)(ke.getType(), ov),
            (0, OE.p8)(we.getType(), HE),
            (0, OE.p8)(Ae.getType(), iv),
            (0, OE.p8)(Kn.getType(), sv),
          ]);
        }
        const gv = (e) => "number" == typeof e,
          bv = (e) => {
            const t = gv(e) ? "searchItems" : e;
            return Sg.get(t);
          },
          hv = { asc: "desc", desc: "asc" };
        function* fv(e) {
          const t = yield (0, OE.Lt)(Wl),
            a = e.payload.field;
          if (t !== a) {
            const e = bv(a);
            yield (0, OE.yJ)(Fm(a, e));
          } else {
            const e = yield (0, OE.Lt)(Gl);
            yield (0, OE.yJ)(Fm(a, hv[e]));
          }
        }
        function* Ev({ payload: e }) {
          const { targets: t } = e,
            a = yield (0, OE.Lt)(Wl);
          gv(a) && (t?.[a]?.searchItem || (yield (0, OE.yJ)(Dm(Gf.field))));
        }
        function* vv(e) {
          yield (0, OE.yJ)(Um(e.payload.page));
        }
        function* wv(e) {
          yield (0, OE.O4)([(0, OE.s)(ry.getType()), (0, OE.s)(ty.getType())]);
          const t = !_.A.hasProduct();
          yield (0, OE.yJ)(
            Un({
              ...e.payload,
              intersectionType: t ? Dn[0] : e.payload.intersectionType,
            })
          );
        }
        function* Tv({ payload: { id: e } }) {
          const t = yield (0, OE.Lt)(Yl);
          yield (0, OE.yJ)(zm(e, t));
        }
        function* kv() {
          const e = yield (0, OE.Lt)(Yl),
            t = yield (0, OE.Lt)(km),
            a = yield (0, OE.Lt)(ao);
          t ? yield (0, OE.yJ)(Bm(a, e)) : yield (0, OE.yJ)(Km(a, e));
        }
        function* Av() {
          const e = yield (0, OE.Lt)(Yl);
          yield (0, OE.yJ)(Bm(null, e));
        }
        function* Cv() {
          yield (0, OE.yJ)(jm(!1));
        }
        function* Sv() {
          yield (0, OE.yJ)(Um(1)), yield (0, OE.yJ)($m(1));
        }
        function* xv() {
          yield (0, OE.Q7)([
            (0, OE.p8)(Dm.getType(), fv),
            (0, OE.p8)(Nm.getType(), vv),
            (0, OE.p8)(ty.getType(), Cv),
            (0, OE.p8)([zE.getType(), qn.getType(), Nn.getType()], Sv),
            (0, OE.p8)(Nn.getType(), wv),
            (0, OE.p8)(Vm.getType(), Tv),
            (0, OE.p8)(Jm.getType(), kv),
            (0, OE.p8)(Wm.getType(), Av),
            (0, OE.p8)(Kn.getType(), Ev),
          ]);
        }
        const Rv = async ({
            requestId: e,
            targets: t,
            isLive: a,
            date: r,
            db: n,
            device: l,
            filter: o,
          }) => {
            const i = { requestId: e, report: st.REPORT_NAME.gap },
              {
                positionFilter: s,
                restFilters: c,
                positionFilterType: d,
              } = _b(o),
              p = {
                targets: Lb(t, s, d),
                date: a ? null : (0, it.dateStringToObject)(r),
                database: (0, it.prepareDatabase)(n, l),
                filters: c,
              };
            return (
              await bt.fetchData("/Gap/KeywordsTotals", i, p)
            ).targetKeywords.map((e) => {
              const t = new Map();
              for (const [a, r] of Object.entries(e)) t.set(a, Number(r));
              return Object.fromEntries(t);
            });
          },
          Lv = async ({
            requestId: e,
            targets: t,
            isLive: a,
            date: r,
            db: n,
            device: l,
            filter: o,
          }) => {
            const i = { requestId: e, report: st.REPORT_NAME.gap },
              {
                positionFilter: s,
                restFilters: c,
                positionFilterType: d,
              } = _b(o),
              p = {
                targets: Lb(t, s, d),
                date: a ? null : (0, it.dateStringToObject)(r),
                database: (0, it.prepareDatabase)(n, l),
                filters: c,
              };
            return (await bt.fetchData("/Gap/Overlaps", i, p)).overlaps.map(
              (e) => ({ ...e, commonKeywords: Number(e.commonKeywords) })
            );
          },
          Ov = async (e) => {
            const t = await Promise.all([Lv(e), Rv(e)]),
              [a, r] = t;
            return { overlaps: a, targetsKeywords: r };
          },
          _v = async ({
            requestId: e,
            db: t,
            device: a,
            date: r,
            isLive: n,
            targets: l,
            type: o = me.SJ.common,
            filter: i = {},
            page: s = 1,
            pageSize: c = 100,
            sortField: d = "volume",
            sortDirection: p = "desc",
            columnsSet: u = [],
          }) => {
            const m = { report: st.REPORT_NAME.gap, requestId: e },
              {
                positionFilter: y,
                restFilters: g,
                positionFilterType: b,
              } = _b(i),
              h = {
                targets: Lb(l, y, b),
                date: n ? null : (0, it.dateStringToObject)(r),
                database: (0, it.prepareDatabase)(t, a),
                type: st.KEYWORDS_TYPE[o],
                range: { limit: c, offset: (s - 1) * c },
                columns:
                  u.length > 0
                    ? u
                    : [
                        st.KEYWORDS_LIST_COLUMN.keyword,
                        st.KEYWORDS_LIST_COLUMN.intent,
                        st.KEYWORDS_LIST_COLUMN.volume,
                        st.KEYWORDS_LIST_COLUMN.keywordDifficulty,
                        st.KEYWORDS_LIST_COLUMN.cpc,
                        st.KEYWORDS_LIST_COLUMN.comp,
                        st.KEYWORDS_LIST_COLUMN.positions,
                        st.KEYWORDS_LIST_COLUMN.urls,
                        st.KEYWORDS_LIST_COLUMN.results,
                      ],
                order: {
                  column: st.KEYWORDS_LIST_ORDER_COLUMN[Rb(d)],
                  direction: st.ORDER_DIRECTION[p],
                },
                filters: g,
              };
            return (await bt.fetchData("/Gap/KeywordsList", m, h)).keywords.map(
              (e) => ({
                ...e,
                positions: e.targetsPosition,
                comp: e.competitionDensity,
                intents: e.intents.map((e) => st.INTENT_SPEC_RESPONSE[e]),
                urls: e.targetsUrl,
              })
            );
          },
          Pv = async (e) => {
            const { targets: t = [] } = e,
              a = {
                ...e,
                pageSize: 5,
                sortField: "volume",
                sortDirection: "desc",
                columnsSet: [
                  st.KEYWORDS_LIST_COLUMN.keyword,
                  st.KEYWORDS_LIST_COLUMN.intent,
                  st.KEYWORDS_LIST_COLUMN.volume,
                  st.KEYWORDS_LIST_COLUMN.keywordDifficulty,
                  st.KEYWORDS_LIST_COLUMN.cpc,
                ],
              };
            if (t.every((e) => "organic" === e.dataType)) {
              const e = await Promise.all([
                  _v({ ...a, type: me.SJ.missing }),
                  _v({ ...a, type: me.SJ.weak }),
                ]),
                [t, r] = e;
              return { missing: t, weak: r };
            }
            return { common: await _v({ ...a, type: me.SJ.common }) };
          };
        function* Iv(e) {
          yield (0, OE.T1)(VE, {
            ...Zf,
            selectError: (e) => e.data.keywordsTotal.status.hasError,
            selectLoading: (e) => e.data.keywordsTotal.status.isLoading,
            success: (e) => sd(e),
            method: Ov,
            data: { ...e },
          });
        }
        function* Mv(e) {
          const { code: t } = e.payload.id;
          t === tf.ERROR_CODE.productTypePermission &&
            (yield (0, OE.yJ)(cf(t)));
        }
        function* Dv(e) {
          const t = yield (0, OE.Lt)(Yl),
            a = e.type === Kn.getType() && e?.payload?.isLanding;
          t.targets.length < me.an || a || (yield (0, OE.T1)(Iv, t));
        }
        function* Fv() {
          yield (0, OE.Q7)([
            (0, OE.p8)([Kn.getType(), zE.getType(), Qc.getType()], Dv),
            (0, OE.p8)([Zf.setError.getType()], Mv),
          ]);
        }
        function* jv({ payload: { params: e } }) {
          yield (0, OE.T1)(VE, {
            ...sE,
            selectError: (e) => e.data.keywords.status.hasError,
            selectLoading: (e) => e.data.keywords.status.isLoading,
            success: (t) =>
              ty(
                t?.map((e) => ({
                  ...e,
                  id: (0, hE.nanoid)(),
                  positions: e.positions.map((e) => (0 === e ? null : e)),
                  intents:
                    e?.intents.map((e) => yo.INTENT_IDS.getType(e)) ?? [],
                })) ?? [],
                e
              ),
            method: _v,
            data: { ...e },
          });
        }
        function* qv(e, t = {}) {
          const a = e?.payload?.reload,
            r = { ...(yield (0, OE.Lt)(Yl)), ...t };
          if (!(r.targets.length < me.an))
            return (yield (0, OE.Lt)(no, r)) && !a
              ? (yield (0, OE.yJ)(ry()), void (yield (0, OE.yJ)(Nm(r.page))))
              : (yield (0, OE.yJ)(ay(r)),
                yield (0, OE.s)(sE.stopLoading.getType()),
                void (yield (0, OE.yJ)(Nm(r.page))));
        }
        function* Nv({ payload: { page: e } }) {
          (0, Im.isTableLimited)({ userRole: _.A.productGroup, page: e })
            ? yield (0, OE.yJ)(jm(!0))
            : (yield (0, OE.yJ)(jm(!1)),
              yield (0, OE.T1)(qv, null, { page: e }));
        }
        function* Uv({ payload: { intersectionType: e } }) {
          yield (0, OE.T1)(qv, null, { page: 1, type: e });
        }
        function* $v({ payload: { field: e, direction: t } }) {
          yield (0, OE.T1)(qv, null, { sortField: e, sortDirection: t });
        }
        function* Vv(e) {
          const { code: t } = e.payload.id;
          t === tf.ERROR_CODE.filtersPermission && (yield (0, OE.yJ)(cf(t)));
        }
        function* zv() {
          for (;;) {
            const { payload: e } = yield (0, OE.s)(sd);
            e &&
              0 !== e?.data?.targetsKeywords?.length &&
              (yield (0, OE.T1)(qv, null, { page: 1 }));
          }
        }
        function* Kv() {
          yield (0, OE.Q7)([
            (0, OE.p8)(ey.getType(), qv),
            (0, OE.p8)(qm.getType(), Nv),
            (0, OE.p8)(Nn.getType(), Uv),
            (0, OE.p8)(ay.getType(), jv),
            (0, OE.p8)(Fm.getType(), $v),
            (0, OE.Zy)(zv),
            (0, OE.p8)([sE.setError.getType()], Vv),
          ]);
        }
        const Bv = async ({
          requestId: e,
          searchItem: t,
          searchType: a,
          date: r,
          dateType: n,
        }) => {
          const l = { requestId: e, report: st.REPORT_NAME.gap },
            o = {
              target: { type: st.TARGET_TYPE[a], value: t },
              date: (0, it.dateStringToObject)(r, n === Tt.Daily),
              database: "worldwide",
              range: { limit: 200, offset: 0 },
              columns: [
                st.SUMMARY_COLUMN.organicPositions,
                st.SUMMARY_COLUMN.adwordsPositions,
                st.SUMMARY_COLUMN.plaPositions,
                st.SUMMARY_COLUMN.database,
              ],
              order: {
                column: st.SUMMARY_COLUMN.organicPositions,
                direction: st.ORDER_DIRECTION.desc,
              },
            };
          return (await bt.fetchData("/Summary/Overview", l, o)).metrics;
        };
        function* Jv() {
          const e = yield (0, OE.Lt)(We.pp),
            t = yield (0, OE.Lt)(We.Lk),
            { searchItem: a, searchType: r } = yield (0, OE.Lt)(ol.qG);
          yield (0, OE.T1)(VE, {
            ...mE,
            selectError: (e) => e.data.ranks.status.hasError,
            selectLoading: (e) => e.data.ranks.status.isLoading,
            success: (e) => Xb(e),
            needToken: !1,
            method: Bv,
            data: { date: e, dateType: t, searchItem: a, searchType: r },
          });
        }
        function* Wv() {
          yield (0, OE.Q7)([(0, OE.p8)(Zb.getType(), Jv)]);
        }
        function* Gv(e) {
          yield (0, OE.T1)(VE, {
            ...rE,
            selectError: Ll,
            selectLoading: xl,
            success: (e) => aE(e),
            method: Pv,
            data: { ...e },
          });
        }
        function* Yv(e) {
          const { code: t } = e.payload.id;
          t === tf.ERROR_CODE.productTypePermission &&
            (yield (0, OE.yJ)(cf(t)));
        }
        function* Hv(e) {
          const t = yield (0, OE.Lt)(Yl),
            a = e.type === Kn.getType() && e?.payload?.isLanding;
          t.targets.length < me.an || a || (yield (0, OE.T1)(Gv, t));
        }
        function* Qv() {
          yield (0, OE.Q7)([
            (0, OE.p8)([Kn.getType(), zE.getType(), Qc.getType()], Hv),
            (0, OE.p8)([rE.setError.getType()], Yv),
          ]);
        }
        function* Zv(e) {
          const t = e.payload.name.toLowerCase(),
            { value: a } = e.payload;
          yield (0, OE.yJ)(ed[t].setFilter(a));
        }
        function* Xv() {
          yield (0, OE.yJ)(Qc());
        }
        function* ew() {
          yield (0, OE.yJ)(Jc({})), yield (0, OE.yJ)(Qc());
        }
        function* tw() {
          const e = yield (0, OE.Lt)(Ul);
          0 === Object.keys(e).filter((e) => "order" !== e).length &&
            (yield (0, OE.yJ)(Wc()));
        }
        function* aw(e) {
          const { skipGa: t } = e.payload,
            a = yield (0, OE.Lt)(Ul),
            r = {},
            n = [];
          for (const e of Object.values(a))
            null == e.id || null == e.value || "" === e.value || vE(r, e)
              ? n.push(e)
              : (r[e.id] = e);
          if (0 !== Object.values(r).length) {
            for (const e of n) e?.id && (yield (0, OE.yJ)(Gc(e.id)));
            0 !== Object.keys(r).length &&
              (yield (0, OE.yJ)(Jc(r)), yield (0, OE.yJ)(Qc()), t || iu(r));
          } else yield (0, OE.yJ)(Hc());
        }
        function* rw(e) {
          const t = yield (0, OE.Lt)($l, e),
            a = fE(t.field);
          null == a
            ? yield (0, OE.yJ)(Yc(e, "criteria", null))
            : a.includes(t.criteria) ||
              (yield (0, OE.yJ)(Yc(e, "criteria", a[0])));
        }
        function* nw(e) {
          const t = yield (0, OE.Lt)($l, e),
            a = EE(t.field);
          null == a
            ? yield (0, OE.yJ)(Yc(e, "value", null))
            : a.includes(t.value) || (yield (0, OE.yJ)(Yc(e, "value", a[0])));
        }
        function* lw({ payload: { id: e, name: t } }) {
          "field" === t && (yield (0, OE.Zy)(rw, e), yield (0, OE.Zy)(nw, e));
        }
        function* ow({ payload: { data: e } }) {
          null != e
            ? (yield (0, OE.yJ)(Uc.setFilter(e?.volume)),
              yield (0, OE.yJ)(Nc.setFilter(e?.position)),
              yield (0, OE.yJ)($c.setFilter(e?.search)),
              yield (0, OE.yJ)(Vc.setFilter(e?.keywordDifficulty)),
              yield (0, OE.yJ)(zc.setFilter(e?.intent)),
              Object.keys(e?.advanced ?? {}).length > 0 &&
                (yield (0, OE.yJ)(Kc(e?.advanced)), yield (0, OE.yJ)(Bc(!0))),
              yield (0, OE.yJ)(Xc()))
            : yield (0, OE.yJ)(Xc());
        }
        function* iw() {
          yield (0, OE.Q7)([
            (0, OE.p8)(({ type: e }) => e.includes("/requestSetFilter"), Zv),
            (0, OE.p8)(Hc, ew),
            (0, OE.p8)(jc, ew),
            (0, OE.Zy)(tw),
            (0, OE.p8)(({ type: e }) => e.includes("/clearFilter"), Xv),
            (0, OE.p8)(Bc, aw),
            (0, OE.p8)(Yc, lw),
            (0, OE.p8)(Zc, ow),
          ]);
        }
        const sw = (e, t) =>
          ((e, t) => (e ? ca()(t, (t) => void 0 !== e[t] && e[t] > 0) : null))(
            e,
            t
          );
        function* cw() {
          const e = yield (0, OE.Lt)(dl),
            t = !_.A.hasProduct();
          if (e || t) return;
          const a = yield (0, OE.Lt)(wl),
            r = yield (0, OE.Lt)(pl),
            n = sw(a, Dn);
          null != n &&
            r !== n &&
            (yield (0, OE.yJ)(Nn({ intersectionType: n })));
        }
        function* dw({ payload: { type: e } }) {
          Dn.includes(e) &&
            (yield (0, OE.yJ)(
              Un({ intersectionType: e, intersectionSetByUser: !0 })
            ));
        }
        function* pw() {
          yield (0, OE.Q7)([
            (0, OE.p8)([sd.getType()], cw),
            (0, OE.p8)($n.getType(), dw),
          ]);
        }
        function* uw() {
          try {
            yield (0, OE.yJ)(Wt(vt(), $t.J5.daily, !0)),
              yield (0, OE.s)([zE.getType()]),
              yield (0, OE.yJ)(pf());
          } catch (e) {
            console.warn(e);
          }
        }
        function* mw() {
          yield (0, OE.Q7)([(0, OE.jP)(df, uw)]);
        }
        const yw = (e) => {
            const [t, a, r] = e.split(":");
            return {
              searchItem: decodeURIComponent(t),
              searchType: a || "domain",
              keywordType: r || me.N$,
            };
          },
          gw = (e) => {
            const t = e.split("|").map(yw).slice(0, me.$D);
            return [
              ...t,
              ...((a = t.length),
              [...Array(me.$D - a)].map(() => (0, Pe.Competitor)())),
            ];
            var a;
          };
        function* bw({ payload: { targets: e } }) {
          yield (0, OE.T1)(qe, e);
        }
        function* hw({ payload: { targets: e } }) {
          const t = yield (0, OE.Lt)(ol.lG),
            a = yield (0, OE.Lt)(dl),
            r = e.map(({ searchItem: e }) => e).filter((e) => !!e);
          if (t.join("") !== r.join("") && t.length > 0)
            yield (0, OE.yJ)(Kn(e));
          else {
            yield (0, OE.yJ)(Jn(e));
            const t = e.filter((e) => !!e.searchItem).map((e) => e.keywordType),
              a = new Set(t);
            if (a.size > 1) yield (0, OE.yJ)(jn(me.vV.advanced));
            else if (!a.has(me.N$)) {
              const e = t[0];
              yield (0, OE.yJ)(qn(e));
            }
          }
          a || (yield (0, OE.yJ)(Vn()));
        }
        function* fw() {
          for (;;) {
            const [e, t, a, r] = yield (0, OE.O4)([
                (0, OE.s)(Wn.getType()),
                (0, OE.s)(Gn.getType()),
                (0, OE.s)(Yn.getType()),
                (0, OE.s)(Hn.getType()),
              ]),
              n = yield (0, OE.Lt)(ol.N3),
              [l] = n;
            if (
              ((e || t || a) &&
                (yield (0, OE.yJ)(
                  Bn([
                    {
                      searchItem: e
                        ? decodeURIComponent(e?.payload.q)
                        : l.searchItem,
                      searchType: t?.payload?.searchType || l.searchType,
                      keywordType: a?.payload?.keywordType || l.keywordType,
                    },
                    ...n.slice(1),
                  ])
                )),
              r)
            ) {
              const e = gw(r.payload.compareWith);
              yield (0, OE.yJ)(Bn([l, ...e]));
            }
          }
        }
        function* Ew() {
          const e = new I(location.search),
            [t, a, r, n] = yield (0, OE.Q7)([
              e.get("q") && (0, OE.s)(Wn.getType()),
              e.get("searchType") && (0, OE.s)(Gn.getType()),
              e.get("keywordType") && (0, OE.s)(Yn.getType()),
              e.get("compareWith") && (0, OE.s)(Hn.getType()),
            ]);
          if (!t) return void (yield (0, OE.cH)(fw));
          const l = t?.payload.q,
            o = a?.payload.searchType ?? "domain",
            i = r?.payload.keywordType ?? me.N$,
            s = n?.payload.compareWith ?? "",
            c = gw(s);
          yield (0, OE.yJ)(
            Bn([
              {
                searchItem: decodeURIComponent(l),
                searchType: o || "domain",
                keywordType: i || me.N$,
              },
              ...c,
            ])
          ),
            yield (0, OE.cH)(fw);
        }
        function* vw() {
          yield (0, OE.Q7)([
            (0, OE.p8)(Kn.getType(), bw),
            (0, OE.p8)(Bn.getType(), hw),
            (0, OE.Zy)(Ew),
          ]);
        }
        const ww = () =>
          new Promise((e, t) => {
            let a = 1;
            const r = () => {
              a++,
                window?.sm2?.navigation
                  ? e(!0)
                  : a > 100
                  ? t(new Error("SM2 not available"))
                  : setTimeout(r, 50);
            };
            setTimeout(r, 10);
          });
        function* Tw() {
          yield ww();
          const e = window.sm2.navigation.getSearchbarData();
          e ? yield (0, OE.yJ)(na(e.db)) : yield (0, OE.yJ)(na("us"));
        }
        function* kw() {
          yield (0, OE.Q7)([(0, OE.cH)(Tw)]);
        }
        function* Aw() {
          try {
            if (!_.A.isAuthorized()) return;
            const { db: e, defaultDb: t } = yield (0, OE.Lt)(We.eF),
              a = yield (0, OE.T1)(Qm, { database: e || t?.db || kt.nR });
            yield (0, OE.yJ)(He(a));
          } catch (e) {
            console.warn(e);
          }
        }
        function* Cw() {
          yield (0, OE.T1)(Aw);
        }
        const Sw = a(21081),
          xw = (0, Af.Ay)({
            onError: (e) => {
              Cf.Cp(e);
            },
          });
        (0, a(97633).A)({
          projectID: 163,
          publicKey: "0ef824d8c8da4a0a947c3587131d258c",
          url: p().sentry_url,
          environment: "prod",
          release: "keyword-gap@3737d08d",
          user: _.A,
        }),
          c.listen(({ action: e }) => {
            "PUSH" === e && h();
          });
        const Rw = (function (e = {}, t) {
            const a = [xw],
              r = [(0, kf.Tw)(...a)],
              n = kf.Zz,
              l = (0, kf.y$)(
                (function (e = {}) {
                  return (0, kf.HY)({
                    ...LE,
                    page: _f.reducer,
                    limits: Pf.reducer,
                    [Xe]: et,
                    keyword_gap: Mf.reducer,
                    targets: Ff.reducer,
                    ...e,
                  });
                })(),
                { ...e },
                n(...r)
              );
            "prod" !== Sw.PROD && (window.__RED_TEST_STORE_DATA__ = l),
              xw.run(kw),
              xw.run(NE),
              xw.run(yv),
              xw.run(xv),
              xw.run(Fv),
              xw.run(Qv),
              xw.run(Kv),
              xw.run(Wv),
              xw.run(iw),
              xw.run(pw),
              xw.run(mw),
              xw.run(vw),
              xw.run(Cw);
            return (
              (function ({
                store: e,
                params: t,
                replaceState: a,
                initialTruth: r,
                history: n = (0, s.zR)(),
              }) {
                const { dispatch: l } = e;
                let o,
                  i = !1,
                  c = !1;
                function d(e) {
                  return Object.hasOwnProperty.call(e, "location")
                    ? e.location
                    : Object.hasOwnProperty.call(e, "getCurrentLocation")
                    ? e.getCurrentLocation()
                    : void 0;
                }
                function p(e) {
                  const a = new Sf.A(e.search),
                    r = {};
                  return (
                    Object.keys(t).forEach((e) => {
                      const { defaultValue: n, stringToValue: l = (e) => e } =
                          t[e],
                        o = a.get(e),
                        i = null === o ? n : l(o);
                      r[e] = i;
                    }),
                    r
                  );
                }
                function u({ replaceState: a }) {
                  if (c) return;
                  const r = e.getState(),
                    l = d(n),
                    s = new Sf.A(l.search);
                  Object.keys(t).forEach((e) => {
                    const {
                        selector: a,
                        defaultValue: n,
                        valueToString: l = (e) => `${e}`,
                      } = t[e],
                      i = a(r);
                    i === n ? s.delete(e) : s.set(e, l(i)), (o[e] = i);
                  });
                  const p = `?${s}`;
                  if (p !== (l.search || "?")) {
                    i = !0;
                    const e = {
                      pathname: l.pathname,
                      search: p,
                      hash: l.hash,
                      state: l.state,
                    };
                    a ? n.replace(e) : n.push(e), (i = !1);
                  }
                }
                function m(a) {
                  if ((void 0 !== a.location && (a = a.location), i)) return;
                  const r = e.getState(),
                    n = p(a),
                    s = [];
                  Object.keys(n).forEach((e) => {
                    const a = n[e];
                    if (void 0 === o || o[e] !== a) {
                      const { selector: n, action: l } = t[e];
                      n(r) !== a && s.push(l(a));
                    }
                  }),
                    (o = n),
                    (c = !0),
                    s.forEach((e) => {
                      l(e);
                    }),
                    (c = !1),
                    u({ replaceState: !0 });
                }
                const y = n.listen(m),
                  g = e.subscribe(() => u({ replaceState: a }));
                "location" === r ? m(d(n)) : (o = p(d(n))),
                  "store" === r && u({ replaceState: !0 });
              })({
                store: l,
                initialTruth: "location",
                params: {
                  db: {
                    selector: (e) => e.page.db,
                    action: (e) => Zt(e),
                    defaultValue: null,
                  },
                  device: {
                    selector: (e) => e.page.device,
                    action: (e) => Xt(e),
                    stringToValue: (e) =>
                      ({ desktop: 0, mobile: 1, 0: 0, 1: 1 }[e]),
                    valueToString: (e) => ({ 0: "desktop", 1: "mobile" }[e]),
                    defaultValue: 0,
                  },
                  date: {
                    selector: (e) => (0, We.aZ)(e),
                    action: (e) => Qt(e),
                    defaultValue: wt(),
                  },
                  q: {
                    selector: ol.zP,
                    action: (e) => Wn(e),
                    defaultValue: "",
                  },
                  searchType: {
                    selector: ol.rq,
                    action: (e) => Gn(e),
                    defaultValue: void 0,
                  },
                  keywordType: {
                    selector: ol.Ih,
                    action: (e) => Yn(e),
                    defaultValue: void 0,
                  },
                  rankType: { selector: pl, action: $n, defaultValue: "" },
                  compareWith: {
                    selector: (e) => (0, ol.mi)(e),
                    action: (e) => Hn(e),
                    defaultValue: "",
                  },
                  filter: {
                    selector: zl,
                    action: Zc,
                    stringToValue: Lf,
                    valueToString: Rf,
                    defaultValue: null,
                  },
                  currency: {
                    defaultValue: pa,
                    selector: Ua,
                    action: (e) => ea(e),
                    stringToValue: (e) => (3 !== e.length ? pa : e),
                  },
                },
                history: t,
              }),
              (l.runSaga = xw.run),
              (l.injectedReducers = {}),
              (l.injectedSagas = {}),
              l
            );
          })({}, c),
          Lw = document.getElementById("keyword-gap-app");
        var Ow;
        (Ow = () => (
          (0, n.useEffect)(() => {
            h();
          }, []),
          n.createElement(
            Tf,
            { "data-at": "keyword-gap" },
            n.createElement(wf, null),
            n.createElement(vf, null)
          )
        )),
          (0, l.H)(Lw).render(
            n.createElement(
              C,
              { locale: re },
              n.createElement(
                o.Kq,
                { store: Rw },
                n.createElement(ie, null, n.createElement(Ow, null))
              )
            )
          );
      },
      41486: (e, t, a) => {
        "use strict";
        a.d(t, {
          $D: () => n,
          CT: () => s,
          Kv: () => o,
          N$: () => l,
          SJ: () => d,
          an: () => r,
          vM: () => i,
          vV: () => c,
        });
        const r = 2,
          n = 4,
          l = "organic",
          o = { searchItem: "", searchType: "domain", keywordType: l },
          i = ["domain", "url", "subdomain", "subfolder"],
          s = ["organic", "adwords", "pla"],
          c = { simple: "simple", advanced: "advanced" },
          d = {
            common: "common",
            missing: "missing",
            weak: "weak",
            strong: "strong",
            untapped: "untapped",
            unique: "unique",
            total: "total",
          };
      },
      82658: (e, t, a) => {
        "use strict";
        a.d(t, {
          Z0: () => d,
          jb: () => c,
          lg: () => s,
          m_: () => p,
          nR: () => m,
          pe: () => y,
          qF: () => u,
          um: () => i,
        });
        var r = a(89961);
        const n = /^mobile-[a-z]{2}$/,
          l = /-ext$/,
          o = /^mobile-/,
          i = (e) => ({ isMobile: n.test(e), db: e?.replace(o, "") }),
          s = (e) => o.test(e),
          c = (e) => 1 === e,
          d = (e, t) => (c(t) ? ((e) => `mobile-${e}`)(e) : e),
          p = (e, t = !0) => {
            let a = e;
            return (
              o.test(a) && (a = a.replace(o, "")),
              t && l.test(a) && (a = a.replace(l, "")),
              a
            );
          },
          u = (e) => (s(e) ? r.W.mobile : r.W.desktop),
          m = "us",
          y = (e) =>
            ["null", null, "undefined", void 0, ""].some((t) => t === e)
              ? m
              : e;
      },
      55497: (e, t, a) => {
        "use strict";
        let r;
        a.d(t, { A: () => n }), (r = new (a(97673).User)());
        const n = r;
      },
      89961: (e, t, a) => {
        "use strict";
        a.d(t, { J5: () => n, OS: () => l, W: () => r, a4: () => o });
        const r = {
            mobile: 1,
            desktop: 0,
            ToString(e) {
              switch (e) {
                case 0:
                default:
                  return "desktop";
                case 1:
                  return "mobile";
              }
            },
            ToValue(e) {
              switch (e) {
                case "desktop":
                default:
                  return 0;
                case "mobile":
                  return 1;
              }
            },
          },
          n = {
            daily: 0,
            monthly: 1,
            ToString(e) {
              switch (e) {
                case 0:
                default:
                  return "daily";
                case 1:
                  return "monthly";
              }
            },
          },
          l = "usd",
          o = [1e3, 10];
      },
      20827: (e) => {
        e.exports = {
          static_url: "https://static.isaacserver.click/keyword-gap/",
          spectrumUrl: "/spectrum/v1",
          exportUrl: "/spectrum-export/v1",
          sentry_url: "www.semrush.com/_sentry",
          isProd: !0,
          feedbackBackendUrl: "https://feedback.semrush.com",
          feedbackEmail: "domain-analytics-feedback@semrush.com",
          gaCategory: "Keyword Gap",
        };
      },
      67072: (e, t, a) => {
        "use strict";
        a.r(t), a.d(t, { stateKey: () => r });
        const r = "page";
      },
      64683: (e, t, a) => {
        "use strict";
        a.d(t, {
          Ke: () => E,
          Lf: () => u,
          Lk: () => g,
          Pf: () => f,
          VG: () => b,
          aZ: () => h,
          al: () => v,
          dW: () => m,
          eF: () => w,
          pp: () => y,
        });
        var r = a(1081),
          n = a(58156),
          l = a.n(n),
          o = a(42534),
          i = a(89961),
          s = a(55497),
          c = a(67072);
        const d = (e) => (e[c.stateKey] ? e[c.stateKey] : {}),
          p = (e, t) => l()(d(e).nextParams, t, null) || d(e)[t],
          u = (e) => p(e, "db"),
          m = (e) => d(e).defaultDb,
          y = (e) => p(e, "date"),
          g = (e) => p(e, "dateType"),
          b = (e) => p(e, "isLive"),
          h = (e) => {
            const t = y(e),
              a = g(e);
            return t
              ? t.slice(0, t.length - (a === i.J5.monthly ? 2 : 0))
              : null;
          },
          f = (e) => p(e, "device"),
          E = (e) => d(e).currencyType,
          v = (0, r.Mz)(
            [o.Dv],
            (e) =>
              !!s.A.isSearchTypesLimited() &&
              e.some(({ type: e }) => "domain" !== e)
          ),
          w = (0, r.Mz)(
            [
              u,
              m,
              (e) => p(e, "domain"),
              (e) => d(e).scope,
              y,
              g,
              f,
              (e) => d(e).currency,
              (e) => p(e, "searchType"),
              (e) => p(e, "searchItem"),
            ],
            (e, t, a, r, n, l, o, i, s, c) => ({
              db: e,
              defaultDb: t,
              domain: a,
              scope: r,
              date: n,
              dateType: l,
              device: o,
              currency: i,
              searchType: s,
              searchItem: c,
            })
          );
      },
      7053: (e, t, a) => {
        "use strict";
        a.r(t),
          a.d(t, {
            Competitor: () => o,
            SEARCH_TYPES: () => l,
            stateKey: () => n,
          });
        var r = a(41486);
        const n = "targets",
          l = {
            domain: "domain",
            subdomain: "subdomain",
            url: "url",
            subfolder: "subfolder",
          },
          o = () => ({ ...r.Kv });
      },
      42534: (e, t, a) => {
        "use strict";
        a.d(t, {
          Dv: () => o,
          G9: () => y,
          Ih: () => c,
          Ij: () => f,
          N3: () => l,
          S3: () => b,
          lG: () => h,
          mi: () => d,
          qG: () => u,
          rq: () => s,
          yo: () => p,
          zP: () => i,
          zW: () => g,
        });
        var r = a(1081),
          n = a(7053);
        const l = (e) =>
            ((e) => (e[n.stateKey] ? e[n.stateKey] : {}))(e).data || [],
          o = (0, r.Mz)(l, (e) =>
            e.map((e) => ({
              value: e.searchItem,
              type: e.searchType,
              dataType: e.keywordType,
            }))
          ),
          i = (0, r.Mz)(l, (e) => e?.[0]?.searchItem ?? ""),
          s = (0, r.Mz)(l, (e) => e?.[0]?.searchType),
          c = (0, r.Mz)(l, (e) => e?.[0]?.keywordType),
          d = (0, r.Mz)(
            l,
            ([, ...e]) =>
              e
                ?.reduce(
                  (e, { searchItem: t, searchType: a, keywordType: r }) => (
                    t && e.push(`${encodeURIComponent(t)}:${a}:${r}`), e
                  ),
                  []
                )
                ?.join("|") ?? ""
          ),
          p =
            ((0, r.Mz)(l, (e) => (e.length ? e : "")),
            (0, r.Mz)(l, (e) => e.filter((e) => "" !== e.searchItem))),
          u = (0, r.Mz)(p, (e) => (e.length > 0 ? e[0] : {})),
          m = (0, r.Mz)(l, (e) => e.map((e) => e.keywordType).join("_")),
          y = (0, r.Mz)(m, (e) => e),
          g = (0, r.Mz)([l], (e) => e?.[0]?.keywordType ?? "organic"),
          b = (0, r.Mz)(
            [l],
            (e) =>
              1 ===
              new Set(
                e
                  .filter(({ searchItem: e }) => e)
                  .map(({ keywordType: e }) => e)
              ).size
          ),
          h = (0, r.Mz)(l, (e) =>
            e.filter((e) => e.searchItem.length).map(({ searchItem: e }) => e)
          ),
          f = (0, r.Mz)(h, (e) => e?.length > 1);
      },
      21081: (e) => {
        e.exports = { DEV: "dev", RC: "rc", PROD: "prod", STAGE: "stage" };
      },
    },
  ]);
//# sourceMappingURL=752.b4210e5058a46c168762.js.map
