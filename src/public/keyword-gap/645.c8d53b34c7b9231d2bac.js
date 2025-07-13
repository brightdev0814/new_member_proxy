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
      (e._sentryDebugIds[t] = "41b7dfc7-a4f9-4b2b-aeec-8ef60f8a79fc"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-41b7dfc7-a4f9-4b2b-aeec-8ef60f8a79fc"));
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
(_global.SENTRY_RELEASE = {
  id: "keyword-gap@2f763860",
}),
  (self.webpackChunkkeyword_gap = self.webpackChunkkeyword_gap || []).push([
    [645],
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
      64645: (e, t, a) => {
        "use strict";
        var r = {};
        a.r(r),
          a.d(r, {
            RANKING_TYPES: () => Dn,
            stateKey: () => Mn,
          });
        var n = a(96540),
          o = a(5338),
          l = a(69733),
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
                const o = encodeURIComponent(e);
                (a[o] = String(n)), t(a), (this.length = r());
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
          h = Boolean(window.ga)
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
          f = () => {
            h("set", "page", window.location.pathname + window.location.search),
              h("send", "pageview");
          },
          b = (e) => {
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
            const [n, o, l, i] = a;
            h("send", {
              hitType: "event",
              eventCategory: n,
              eventAction: o,
              eventLabel: l,
              eventValue: i,
              ...r,
            }),
              (({ category: e, action: t = "", label: a = "", ...r }) => {
                const n = e || p().gaCategory,
                  o = {
                    event: n,
                    eventCategory: n,
                    eventAction: t,
                    eventLabel: a,
                    ...r,
                  };
                "undefined" == typeof dataLayer
                  ? (console.groupCollapsed("DataLayer push"),
                    console.info("dataLayer", o),
                    console.groupEnd())
                  : dataLayer.push(o);
              })({
                category: t,
                label: e.label,
                action: e.action,
                ...r,
              });
          },
          E = (e = "") =>
            e
              .split(/(?=[A-Z])/)
              .map((e) => e.toLowerCase())
              .join("_");
        var k = a(5556),
          w = a.n(k),
          v = a(20265),
          T = a(23364);
        const A = () => {
            window.location.reload();
          },
          C = ({ locale: e, children: t }) =>
            n.createElement(
              T.tH,
              {
                fallback: n.createElement(v.A, {
                  onClick: A,
                  locale: e,
                }),
              },
              t
            );
        C.propTypes = {
          locale: w().string.isRequired,
          children: w().node.isRequired,
        };
        const S = C;
        var x,
          R,
          L = a(38798),
          _ = a(61785),
          O = a(53797),
          P = a(55497),
          I =
            I ||
            (function () {
              function e(
                e,
                a = {
                  decode: !0,
                }
              ) {
                var r,
                  n,
                  o,
                  l,
                  d,
                  p,
                  u = Object.create(null);
                if (((this[i] = u), (this.decodeOn = a.decode), e))
                  if ("string" == typeof e)
                    for (
                      "?" === e.charAt(0) && (e = e.slice(1)),
                        d = 0,
                        p = (l = e.split("&")).length;
                      d < p;
                      d++
                    )
                      -1 < (r = (o = l[d]).indexOf("="))
                        ? s(
                            u,
                            c(o.slice(0, r), this.decodeOn),
                            c(o.slice(r + 1), this.decodeOn)
                          )
                        : o.length && s(u, c(o, this.decodeOn), "");
                  else if (t(e))
                    for (d = 0, p = e.length; d < p; d++)
                      s(u, (o = e[d])[0], o[1]);
                  else for (n in e) s(u, n, e[n]);
              }
              var t = Array.isArray,
                a = e.prototype,
                r = /[!'\(\)~]|%20|%00/g,
                n = /\+/g,
                o = {
                  "!": "%21",
                  "'": "%27",
                  "(": "%28",
                  ")": "%29",
                  "~": "%7E",
                  "%20": "+",
                  "%00": "\0",
                },
                l = function (e) {
                  return o[e];
                },
                i = "__URLSearchParams__:" + Math.random();
              function s(e, a, r) {
                a in e ? e[a].push("" + r) : (e[a] = t(r) ? r : ["" + r]);
              }
              function c(e, t) {
                return t ? decodeURIComponent(e.replace(n, " ")) : e;
              }
              function d(e, t) {
                return t ? encodeURIComponent(e).replace(r, l) : e;
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
                    o = [];
                  for (t in n)
                    for (
                      a = d(t, this.decodeOn), e = 0, r = n[t];
                      e < r.length;
                      e++
                    )
                      o.push(a + "=" + d(r[e]));
                  return o.join("&");
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
                    o = t.prototype,
                    l = u(o, "searchParams"),
                    i = u(o, "href"),
                    s = u(o, "search");
                  !l &&
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
                    Object.defineProperties(o, {
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
        (x = I.prototype),
          (R = (function () {
            try {
              return !!Symbol.iterator;
            } catch (e) {
              return !1;
            }
          })()),
          "forEach" in x ||
            (x.forEach = function (e, t) {
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
          "keys" in x ||
            (x.keys = function () {
              var e = [];
              this.forEach(function (t, a) {
                e.push(a);
              });
              var t = {
                next: function () {
                  var t = e.shift();
                  return {
                    done: void 0 === t,
                    value: t,
                  };
                },
              };
              return (
                R &&
                  (t[Symbol.iterator] = function () {
                    return t;
                  }),
                t
              );
            }),
          "values" in x ||
            (x.values = function () {
              var e = [];
              this.forEach(function (t) {
                e.push(t);
              });
              var t = {
                next: function () {
                  var t = e.shift();
                  return {
                    done: void 0 === t,
                    value: t,
                  };
                },
              };
              return (
                R &&
                  (t[Symbol.iterator] = function () {
                    return t;
                  }),
                t
              );
            }),
          "entries" in x ||
            (x.entries = function () {
              var e = [];
              this.forEach(function (t, a) {
                e.push([a, t]);
              });
              var t = {
                next: function () {
                  var t = e.shift();
                  return {
                    done: void 0 === t,
                    value: t,
                  };
                },
              };
              return (
                R &&
                  (t[Symbol.iterator] = function () {
                    return t;
                  }),
                t
              );
            }),
          R && !(Symbol.iterator in x) && (x[Symbol.iterator] = x.entries),
          "sort" in x ||
            (x.sort = function () {
              for (
                var e,
                  t,
                  a,
                  r = this.entries(),
                  n = r.next(),
                  o = n.done,
                  l = [],
                  i = Object.create(null);
                !o;

              )
                (t = (a = n.value)[0]),
                  l.push(t),
                  t in i || (i[t] = []),
                  i[t].push(a[1]),
                  (o = (n = r.next()).done);
              for (l.sort(), e = 0; e < l.length; e++) this.delete(l[e]);
              for (e = 0; e < l.length; e++)
                (t = l[e]), this.append(t, i[t].shift());
            });
        const M = I,
          D = {
            searchItem: "",
            searchType: "domain",
            keywordType: "organic",
          },
          F = "keywordGap.opportunities",
          { defaultLocale: N } = i.Constants,
          j = "keyword-gap",
          q = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"A tool that helps you compare your keyword profile with your competitors.","buttons.compare":"Compare","howToUse.typeCompetitors.title":"Enter your competitors","panel.addAllCompetitors":"Add up to {NUM} competitors","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Database:","header.currency":"Currency:","header.date":"Date:","header.device":"Device:","header.userManual":"User manual","buttons.cancel":"Cancel","opportunities.title":"Top Opportunities","kgTable.competitorSelector.label":"All keyword details for:","pdf.exportButton":"Export to PDF","feedback.sendFeedback":"Send feedback","searchTypes.domainType":"Root domain","searchTypes.subdomainType":"Subdomain","searchTypes.urlType":"Exact URL","searchTypes.subfolderType":"Subfolder","panel.selectMultipleKwType":"Select keyword type for each domain","keywordTypes.organicPills":"Organic keywords","keywordTypes.adwordsPills":"Paid keywords","keywordTypes.plaPills":"PLA keywords","keywords.missing":"Missing","keywords.weak":"Weak","opportunities.keyword":"Keyword","opportunities.volume":"Volume","overlapChart.caption":"Keyword Overlap","":""}'
          ),
          $ = JSON.parse(
            '{"reportTitle.keywordGap":"关键词差异","landing.description":"有助于比较您与竞争对手的关键词整体情况的工具。","buttons.compare":"比较","howToUse.typeCompetitors.title":"输入您的竞争对手","panel.addAllCompetitors":"添加多达 {NUM} 个竞争对手","page.breadcrumbs.keyword_gap":"关键词差异","header.database":"数据库：","header.currency":"货币：","header.date":"日期：","header.device":"设备：","header.userManual":"用户手册","buttons.cancel":"取消","opportunities.title":"最佳机会","kgTable.competitorSelector.label":"所有关键词详细信息：","pdf.exportButton":"导出成 PDF","feedback.sendFeedback":"发送反馈","searchTypes.domainType":"根域名","searchTypes.subdomainType":"子域名","searchTypes.urlType":"精确 URL","searchTypes.subfolderType":"子文件夹","panel.selectMultipleKwType":"为每个域名选择关键词类型","keywordTypes.organicPills":"自然搜索关键词","keywordTypes.adwordsPills":"付费关键词","keywordTypes.plaPills":"谷歌购物广告关键词","keywords.missing":"缺失","keywords.weak":"弱","opportunities.keyword":"关键词","opportunities.volume":"搜索量","overlapChart.caption":"关键词重叠","":""}'
          ),
          U = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword-Gap","landing.description":"Dieses Tool ermöglicht Ihnen umfassende Vergleiche zwischen Ihren Keywords und den Keywords Ihrer Mitbewerber.","buttons.compare":"Vergleichen","howToUse.typeCompetitors.title":"Mitbewerber eingeben","panel.addAllCompetitors":"Bis zu {NUM} Mitbewerber hinzufügen","page.breadcrumbs.keyword_gap":"Keyword-Gap","header.database":"Datenbank:","header.currency":"Währung:","header.date":"Datum:","header.device":"Gerät:","header.userManual":"Anleitung für Benutzer","buttons.cancel":"Abbrechen","opportunities.title":"Top-Chancen","kgTable.competitorSelector.label":"Alle Keyword-Details für:","pdf.exportButton":"Export als PDF","feedback.sendFeedback":"Feedback senden","searchTypes.domainType":"Root-Domain","searchTypes.subdomainType":"Subdomain","searchTypes.urlType":"Exakte URL","searchTypes.subfolderType":"Unterordner","panel.selectMultipleKwType":"Wählen Sie einen Keyword-Typ pro Domain","keywordTypes.organicPills":"Organische Keywords","keywordTypes.adwordsPills":"Bezahlte Keywords","keywordTypes.plaPills":"PLA-Keywords","keywords.missing":"Fehlend","keywords.weak":"Schwach","opportunities.keyword":"Keyword","opportunities.volume":"Suchvolumen","overlapChart.caption":"Keyword-Überschneidung","":""}'
          ),
          V = JSON.parse(
            '{"reportTitle.keywordGap":"Brecha de palabras clave","landing.description":"Una herramienta que te ayuda a comparar tu perfil de palabras clave con el de tus competidores.","buttons.compare":"Comparar","howToUse.typeCompetitors.title":"Introduce tus competidores","panel.addAllCompetitors":"Añade hasta {NUM} competidores","page.breadcrumbs.keyword_gap":"Brecha de palabras clave","header.database":"Base de datos:","header.currency":"Moneda:","header.date":"Fecha:","header.device":"Dispositivo:","header.userManual":"Manual de usuario","buttons.cancel":"Cancelar","opportunities.title":"Principales oportunidades","kgTable.competitorSelector.label":"Detalles de palabras clave de:","pdf.exportButton":"Exportar a PDF","feedback.sendFeedback":"Enviar opinión","searchTypes.domainType":"Dominio raíz","searchTypes.subdomainType":"Subdominio","searchTypes.urlType":"URL exacta","searchTypes.subfolderType":"Subcarpeta","panel.selectMultipleKwType":"Selecciona el tipo de palabra clave para cada dominio","keywordTypes.organicPills":"Palabras clave orgánicas","keywordTypes.adwordsPills":"Palabras clave de pago","keywordTypes.plaPills":"Palabras clave de PLA","keywords.missing":"Faltantes","keywords.weak":"Débiles","opportunities.keyword":"Palabra clave","opportunities.volume":"Volumen","overlapChart.caption":"Superposición de palabras clave","":""}'
          ),
          z = JSON.parse(
            '{"reportTitle.keywordGap":"Possibilités de mots clés","landing.description":"Un outil qui vous aide à comparer votre profil de mots clés à celui de vos concurrents.","buttons.compare":"Comparer","howToUse.typeCompetitors.title":"Saisissez vos concurrents","panel.addAllCompetitors":"Ajoutez jusqu\'à {NUM} concurrents","page.breadcrumbs.keyword_gap":"Possibilités de mots clés","header.database":"Base de données :","header.currency":"Devise :","header.date":"Date :","header.device":"Appareil :","header.userManual":"Manuel de l\'utilisateur","buttons.cancel":"Annuler","opportunities.title":"Top opportunités","kgTable.competitorSelector.label":"Détails des mots clés pour :","pdf.exportButton":"Exporter vers PDF","feedback.sendFeedback":"Envoyer des commentaires","searchTypes.domainType":"Domaine racine","searchTypes.subdomainType":"Sous-domaine","searchTypes.urlType":"URL exacte","searchTypes.subfolderType":"Sous-dossier","panel.selectMultipleKwType":"Sélectionnez un type de mot clé pour chaque domaine","keywordTypes.organicPills":"Mots clés organiques","keywordTypes.adwordsPills":"Mots clés payants","keywordTypes.plaPills":"Mots clés PLA","keywords.missing":"Manquants","keywords.weak":"Faibles","opportunities.keyword":"Mot clé","opportunities.volume":"Volume","overlapChart.caption":"Chevauchement des mots clés","":""}'
          ),
          K = JSON.parse(
            '{"reportTitle.keywordGap":"Gap di keyword","landing.description":"Uno strumento che aiuta a confrontare il tuo profilo di keyword con i tuoi competitor.","buttons.compare":"Confronta","howToUse.typeCompetitors.title":"Inserisci i tuoi competitor","panel.addAllCompetitors":"Aggiungi fino a {NUM} competitor","page.breadcrumbs.keyword_gap":"Gap di keyword","header.database":"Database:","header.currency":"Valuta:","header.date":"Data:","header.device":"Dispositivo:","header.userManual":"Manuale utente","buttons.cancel":"Annulla","opportunities.title":"Migliori opportunità","kgTable.competitorSelector.label":"Tutti i dettagli delle keyword per:","pdf.exportButton":"Esporta in formato PDF","feedback.sendFeedback":"Invia feedback","searchTypes.domainType":"Dominio principale","searchTypes.subdomainType":"Sottodominio","searchTypes.urlType":"URL esatto","searchTypes.subfolderType":"Sottocartella","panel.selectMultipleKwType":"Seleziona tipo di keyword per ogni dominio","keywordTypes.organicPills":"Keyword organiche","keywordTypes.adwordsPills":"Keyword a pagamento","keywordTypes.plaPills":"Keyword PLA","keywords.missing":"Mancanti","keywords.weak":"Deboli","opportunities.keyword":"Keyword","opportunities.volume":"Volume","overlapChart.caption":"Sovrapposizione di keyword","":""}'
          ),
          B = JSON.parse(
            '{"reportTitle.keywordGap":"Lacunas nas palavras-chave","landing.description":"Uma ferramenta que ajuda você a comparar seu perfil de palavras-chave com seus concorrentes.","buttons.compare":"Comparar","howToUse.typeCompetitors.title":"Digite os concorrentes","panel.addAllCompetitors":"Acrescente até {NUM} concorrentes","page.breadcrumbs.keyword_gap":"Lacunas nas palavras-chave","header.database":"Banco de dados:","header.currency":"Moeda:","header.date":"Data:","header.device":"Dispositivo:","header.userManual":"Manual do usuário","buttons.cancel":"Cancelar","opportunities.title":"Principais oportunidades","kgTable.competitorSelector.label":"Detalhes das palavras-chave de:","pdf.exportButton":"Exportar para PDF","feedback.sendFeedback":"Enviar comentários","searchTypes.domainType":"Domínio raiz","searchTypes.subdomainType":"Subdomínio","searchTypes.urlType":"URL exata","searchTypes.subfolderType":"Subpasta","panel.selectMultipleKwType":"Selecione o tipo de palavra-chave para cada domínio","keywordTypes.organicPills":"Palavras-chave orgânicas","keywordTypes.adwordsPills":"Palavras-chave pagas","keywordTypes.plaPills":"Palavras-chave de PLA","keywords.missing":"Ausentes","keywords.weak":"Fracas","opportunities.keyword":"Palavra-chave","opportunities.volume":"Volume","overlapChart.caption":"Sobreposição de palavras-chave","":""}'
          ),
          J = JSON.parse(
            '{"reportTitle.keywordGap":"キーワード比較","landing.description":"キーワードプロフィールを競合他社と比較するためのツールです。","buttons.compare":"比較","howToUse.typeCompetitors.title":"競合他社を入力","panel.addAllCompetitors":"競合他社を{NUM}社まで追加","page.breadcrumbs.keyword_gap":"キーワード比較","header.database":"データベース：","header.currency":"通貨：","header.date":"日付：","header.device":"デバイス：","header.userManual":"ユーザーマニュアル","buttons.cancel":"取り消す","opportunities.title":"絶好の機会","kgTable.competitorSelector.label":"すべてのキーワード詳細：","pdf.exportButton":"PDFにエクスポート","feedback.sendFeedback":"フィードバックを送信","searchTypes.domainType":"ルートドメイン","searchTypes.subdomainType":"サブドメイン","searchTypes.urlType":"正確なURL","searchTypes.subfolderType":"サブフォルダ","panel.selectMultipleKwType":"各ドメインにキーワードタイプを選択","keywordTypes.organicPills":"オーガニック検索キーワード","keywordTypes.adwordsPills":"検索連動型広告キーワード","keywordTypes.plaPills":"PLAキーワード","keywords.missing":"欠けている","keywords.weak":"弱い","opportunities.keyword":"キーワード","opportunities.volume":"ボリューム","overlapChart.caption":"キーワードの重複","":""}'
          ),
          W = JSON.parse(
            '{"reportTitle.keywordGap":"키워드 갭","landing.description":"나의 키워드 프로필과 경쟁자의 키워드 프로필을 분석할 수 있는 도구입니다.","buttons.compare":"비교","howToUse.typeCompetitors.title":"경쟁자 입력","panel.addAllCompetitors":"최대 {NUM}개의 경쟁자 추가","page.breadcrumbs.keyword_gap":"키워드 갭","header.database":"데이터베이스:","header.currency":"통화:","header.date":"날짜:","header.device":"기기:","header.userManual":"사용자 매뉴얼","buttons.cancel":"취소","opportunities.title":"상위 기회","kgTable.competitorSelector.label":"키워드 상세정보:","pdf.exportButton":"PDF로 내보내기","feedback.sendFeedback":"피드백 보내기","searchTypes.domainType":"루트 도메인","searchTypes.subdomainType":"서브도메인","searchTypes.urlType":"정확한 URL","searchTypes.subfolderType":"하위 폴더","panel.selectMultipleKwType":"도메인별 키워드 유형 선택하기","keywordTypes.organicPills":"자연 키워드","keywordTypes.adwordsPills":"유료 키워드","keywordTypes.plaPills":"PLA 키워드","keywords.missing":"누락","keywords.weak":"약함","opportunities.keyword":"키워드","opportunities.volume":"검색량","overlapChart.caption":"키워드 중복","":""}'
          ),
          G = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"Một công cụ giúp bạn so sánh hồ sơ từ khóa của mình với đối thủ cạnh tranh.","buttons.compare":"So sánh","howToUse.typeCompetitors.title":"Nhập các đối thủ cạnh tranh","panel.addAllCompetitors":"Thêm tối đa {NUM} đối thủ","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Cơ sở dữ liệu:","header.currency":"Đơn vị tiền tệ:","header.date":"Ngày:","header.device":"Thiết bị:","header.userManual":"Hướng dẫn sử dụng","buttons.cancel":"Hủy","opportunities.title":"Tiềm năng hàng đầu","kgTable.competitorSelector.label":"Tất cả các chi tiết từ khóa cho:","pdf.exportButton":"Xuất file PDF","feedback.sendFeedback":"Gửi góp ý","searchTypes.domainType":"Domain gốc","searchTypes.subdomainType":"Domain phụ","searchTypes.urlType":"URL chính xác","searchTypes.subfolderType":"Thư mục con","panel.selectMultipleKwType":"Chọn loại từ khóa cho mỗi domain","keywordTypes.organicPills":"Từ khóa tự nhiên","keywordTypes.adwordsPills":"Từ khóa trả phí","keywordTypes.plaPills":"Từ khóa PLA","keywords.missing":"Thiếu","keywords.weak":"Yếu","opportunities.keyword":"Từ khóa","opportunities.volume":"Số lượng","overlapChart.caption":"Trùng từ khóa","":""}'
          ),
          Y = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"Rakiplerinizin anahtar kelimeleri ile anahtar kelimenizin tam analizini yapmanızı sağlayan bir araç.","buttons.compare":"Karşılaştır","howToUse.typeCompetitors.title":"Rakiplerinizi girin","panel.addAllCompetitors":"{NUM} Rakibe kadar ekleyin","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Veri tabanı:","header.currency":"Para Birimi:","header.date":"Tarih:","header.device":"Cihaz:","header.userManual":"Kullanım kılavuzu","buttons.cancel":"İptal Et","opportunities.title":"En iyi Fırsatlar","kgTable.competitorSelector.label":"Şunun için tüm anahtar kelime detayları:","pdf.exportButton":"PDF\'ye aktar","feedback.sendFeedback":"Geri bildirim gönder","searchTypes.domainType":"Kök alan adı","searchTypes.subdomainType":"Alt Alan Adı","searchTypes.urlType":"Tam URL","searchTypes.subfolderType":"Alt klasör","panel.selectMultipleKwType":"Her alan adı için anahtar kelime türünü seçin","keywordTypes.organicPills":"Organik anahtar kelimeler","keywordTypes.adwordsPills":"Ücretli anahtar kelimeler","keywordTypes.plaPills":"ÜLR anahtar kelimeleri","keywords.missing":"Eksik","keywords.weak":"Zayıf","opportunities.keyword":"Anahtar Kelime","opportunities.volume":"Hacim","overlapChart.caption":"Anahtar Kelime Çakışması","":""}'
          ),
          H = JSON.parse(
            '{"reportTitle.keywordGap":"Luka słów kluczowych","landing.description":"Narzędzie pomagające porównać własny profil słów kluczowych z konkurentami.","buttons.compare":"Porównaj","howToUse.typeCompetitors.title":"Wprowadź swoich konkurentów","panel.addAllCompetitors":"Dodaj maksymalnie {NUM} konkurentów","page.breadcrumbs.keyword_gap":"Luka słów kluczowych","header.database":"Baza danych:","header.currency":"Waluta:","header.date":"Data:","header.device":"Urządzenie:","header.userManual":"Instrukcja obsługi","buttons.cancel":"Anuluj","opportunities.title":"Największe możliwości","kgTable.competitorSelector.label":"Szczegóły wszystkich słów kluczowych dla:","pdf.exportButton":"Eksportuj do pliku PDF","feedback.sendFeedback":"Wyślij opinię","searchTypes.domainType":"Domena główna","searchTypes.subdomainType":"Poddomena","searchTypes.urlType":"Dokładny adres URL","searchTypes.subfolderType":"Podfolder","panel.selectMultipleKwType":"Wybierz typ słowa kluczowego dla każdej domeny","keywordTypes.organicPills":"Organiczne słowa kluczowe","keywordTypes.adwordsPills":"Płatne słowa kluczowe","keywordTypes.plaPills":"Słowa kluczowe PLA","keywords.missing":"Brakujące","keywords.weak":"Słabe","opportunities.keyword":"Słowo kluczowe","opportunities.volume":"Wolumen","overlapChart.caption":"Nakładanie się słów kluczowych","":""}'
          ),
          Q = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"Ett verktyg som hjälper dig att jämföra din nyckelordsprofil med dina konkurrenter.","buttons.compare":"Jämför","howToUse.typeCompetitors.title":"Ange dina konkurrenter","panel.addAllCompetitors":"Lägg till upp till {NUM} konkurrenter","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Databas:","header.currency":"Valuta:","header.date":"Datum:","header.device":"Enhet:","header.userManual":"Användarmanual","buttons.cancel":"Avbryt","opportunities.title":"Främsta möjligheter","kgTable.competitorSelector.label":"Alla nyckelordsdetaljer för:","pdf.exportButton":"Exportera till PDF","feedback.sendFeedback":"Skicka feedback","searchTypes.domainType":"Rotdomän","searchTypes.subdomainType":"Underdomän","searchTypes.urlType":"Exakt URL","searchTypes.subfolderType":"Undermapp","panel.selectMultipleKwType":"Välj nyckelordstyp för varje domän","keywordTypes.organicPills":"Organiska nyckelord","keywordTypes.adwordsPills":"Betalda nyckelord","keywordTypes.plaPills":"PLA-nyckelord","keywords.missing":"Saknade","keywords.weak":"Svaga","opportunities.keyword":"Nyckelord","opportunities.volume":"Volym","overlapChart.caption":"Överlappning av nyckelord","":""}'
          ),
          Z = JSON.parse(
            '{"reportTitle.keywordGap":"Keyword Gap","landing.description":"Een tool waarmee je jouw zoekwoordprofiel kunt vergelijken met dat van je concurrenten.","buttons.compare":"Vergelijken","howToUse.typeCompetitors.title":"Voer je concurrenten in","panel.addAllCompetitors":"Voeg tot {NUM} concurrenten toe","page.breadcrumbs.keyword_gap":"Keyword Gap","header.database":"Database:","header.currency":"Valuta:","header.date":"Datum:","header.device":"Apparaat:","header.userManual":"Gebruiksaanwijzing","buttons.cancel":"Annuleren","opportunities.title":"Topkansen","kgTable.competitorSelector.label":"Alle zoekwoorddetails voor:","pdf.exportButton":"Exporteren naar PDF","feedback.sendFeedback":"Feedback sturen","searchTypes.domainType":"Rootdomein","searchTypes.subdomainType":"Subdomein","searchTypes.urlType":"Exacte URL","searchTypes.subfolderType":"Submap","panel.selectMultipleKwType":"Selecteer een zoekwoordtype voor elk domein","keywordTypes.organicPills":"Organische zoekwoorden","keywordTypes.adwordsPills":"Betaalde zoekwoorden","keywordTypes.plaPills":"PLA-zoekwoorden","keywords.missing":"Ontbrekend","keywords.weak":"Zwak","opportunities.keyword":"Zoekwoorden","opportunities.volume":"Volume","overlapChart.caption":"Zoekwoordoverlapping","":""}'
          ),
          X = new Set(),
          ee = new M(window.location.search);
        let te = P.A?.locale || N;
        const ae = ee.get("test_lang");
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
        ].includes(te) || (te = N),
          ae && X.has(ae) && (te = ae);
        const re = {
            en: q,
            zh: $,
            es: V,
            de: U,
            fr: z,
            it: K,
            pt: B,
            ja: J,
            ko: W,
            vi: G,
            tr: Y,
            pl: H,
            sv: Q,
            nl: Z,
          },
          ne = Reflect.has(re, te) ? te : N,
          oe =
            ne === N
              ? re[ne]
              : {
                  ...re[N],
                  ...re[ne],
                },
          le = ({ children: e }) => {
            const t = ((e) => {
                const [t, r] = (0, n.useState)(oe),
                  { setLoading: o } = (0, _.useTextSmoothLoading)();
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
                      r({
                        ...oe,
                        ...e.default,
                        ...t.default,
                      }),
                        o(!1);
                    });
                  }, [r, o, e]),
                  t
                );
              })(ne),
              r = (0, O.useIntlWithMessages)(ne, t);
            return n.createElement(
              L.Kq,
              {
                value: r,
              },
              e
            );
          },
          ie = ({ children: e }) =>
            n.createElement(
              _.TextSmoothLoadingProvider,
              null,
              n.createElement(le, null, e)
            );
        (le.propTypes = {
          children: w().node.isRequired,
        }),
          (ie.propTypes = {
            children: w().node.isRequired,
          });
        const se = ie;
        var ce = a(38267),
          de = a(65254),
          pe = a(6442),
          ue = a(29555),
          me = a.n(ue),
          ye = a(41486);
        const ge = ["report", "landing"],
          he = {
            report: "Report",
            landing: "Landing page",
          },
          fe = n.createContext({
            pageType: ge[0],
            gaAction: he[ge[0]],
          }),
          be = ({ pageType: e = "report", children: t }) => {
            const a = (0, n.useMemo)(
              () => ({
                pageType: e,
                gaAction: he[e],
              }),
              [e]
            );
            return n.createElement(
              fe.Provider,
              {
                value: a,
              },
              t
            );
          };
        be.propTypes = {
          children: w().element.isRequired,
          pageType: w().oneOf(["landing", "report"]),
        };
        const Ee = be;
        var ke = a(78270);
        const we = (0, ke.VP)("requestDatabasesConfig"),
          ve = (0, ke.VP)("getDbsSuccess", (e) => ({
            data: e,
          })),
          Te = (0, ke.VP)("getCurrenciesSuccess", (e, t, a) => ({
            data: e,
            date: a ? "live" : t,
          })),
          Ae = (0, ke.VP)("getTimepointsSuccess", (e, t, a, r) => ({
            data: e,
            db: t,
            device: a,
            dateType: r,
          })),
          Ce = (0, ke.VP)("reloadAll"),
          Se = (0, ke.VP)("connectDatabase", (e) => ({
            db: e,
          }));
        var xe = a(49785),
          Re = a(24016),
          Le = a.n(Re),
          _e = a(75564);
        const Oe = new RegExp(/^\s.*\s?$/, "i"),
          Pe = (e) => e.filter(({ searchItem: e }) => e?.length).length,
          Ie = (e, t) => !Oe.test(e) && !(0, _e.performValidation)(e, t),
          Me = (e) => Pe(e) > 0;
        var De = a(7053),
          Fe = a(61160),
          Ne = a.n(Fe),
          je = a(48379);
        const qe = (e) =>
            (function (e) {
              const t = new (Ne())(
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
                (t.hostname = je.Ay.toASCII(decodeURIComponent(t.hostname))),
                (t.host = je.Ay.toASCII(decodeURIComponent(t.host))),
                t
              );
            })(e).hostname,
          $e = (e) =>
            null == e || 0 === e?.length
              ? De.SEARCH_TYPES.domain
              : (window?.sm2?.navigation &&
                  window.sm2.navigation.getAvailableSearchTypeByQuery(e)) ||
                De.SEARCH_TYPES.domain,
          Ue = (e) => {
            if (window?.sm2?.navigation) {
              const [{ searchItem: t, searchType: a }, ...r] = e;
              window.sm2.navigation.submitSearchbar({
                q: t,
                searchType: a,
                compareWith: window.sm2.navigation.encodeCompareWith(
                  r
                    .filter(({ searchItem: e }) => Boolean(e))
                    .map((e) => ({
                      ...e,
                      q: encodeURIComponent(e.searchItem),
                    }))
                ),
              });
            } else console.log("Set searchbar data ", e);
          },
          Ve = (e, t) => {
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
          ze = (e) => {
            window?.sm2?.navigation &&
            null != e &&
            !(() => {
              const { searchType: e } = (() => {
                if (window.navigation)
                  return window.navigation.getSearchbarData();
              })();
              return !e || "keyword" === e;
            })()
              ? window.sm2.navigation.submitSearchbar({
                  db: e,
                })
              : console.log("Set default db ", {
                  db: e,
                });
          },
          Ke = (e) => {
            e &&
              0 !== Object.keys(e).length &&
              (window?.sm2?.navigation
                ? window.sm2.navigation.submitSearchbar(e)
                : console.log("Set params to SM2 navigation:", e));
          },
          Be = (0, n.createContext)({}),
          Je = ({ context: e, children: t }) =>
            n.createElement(
              Be.Provider,
              {
                value: e,
              },
              t
            );
        Je.propTypes = {
          context: w().object.isRequired,
          children: w().node.isRequired,
        };
        const We = () => (0, n.useContext)(Be),
          Ge = (0, n.memo)(({ competitor: e, index: t }) => {
            const { setValue: a } = We();
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
                  const r = $e(e.searchItem);
                  a(`competitors.${t}.searchType`, r);
                }, [e.searchItem, a, t]),
                400,
                [e.searchItem]
              ),
              null
            );
          }),
          Ye = () => {
            const { control: e } = We(),
              t = (0, xe.FH)({
                name: "competitors",
                control: e,
              });
            return null == t
              ? null
              : t.map((e, t) =>
                  n.createElement(Ge, {
                    key: [e, t].join("-"),
                    competitor: e,
                    index: t,
                  })
                );
          };
        var He = a(64683);
        const Qe = n.createContext({
            competitors: [],
            searchItem: "",
            setSearchItem: () => {},
          }),
          Ze = "user/SET_USER",
          Xe = (e) => ({
            ...e,
            type: Ze,
          }),
          et = (0, ke.VP)("setTrialStatus", (e) => ({
            isTrialAllowed: e,
          })),
          tt = {
            exportLimit: 0,
            isTrialAllowed: !1,
            isHistoryAllowed: !1,
            isPlaAllowed: !1,
          },
          at = "user",
          rt = (e = tt, { type: t, ...a }) => {
            switch (t) {
              case Ze:
                return {
                  ...e,
                  ...a,
                };
              case et.getType():
                return {
                  ...e,
                  isTrialAllowed: a.payload.isTrialAllowed,
                };
              case "user/RESET_USER":
                return {
                  ...tt,
                };
              default:
                return e;
            }
          },
          nt = (e) => e.user,
          ot = (e) => nt(e).exportLimit,
          lt = (e) => nt(e).isHistoryAllowed,
          it = (e) => nt(e).isTrialAllowed,
          st = (e) => nt(e).isPlaAllowed,
          ct = () => {
            const e = (0, l.d4)(ot),
              t = (0, l.d4)(lt),
              a = (0, l.d4)(it),
              r = (0, l.d4)(st),
              {
                isAdmin: n,
                isPaid: o,
                hasProduct: i,
                productGroup: s,
                isGuest: c,
              } = P.A;
            return {
              hasUserPaid: o,
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
        var dt = a(39309),
          pt = a(5445),
          ut = a(26832),
          mt = a.n(ut);
        const yt = "guest",
          { apiKey: gt, productGroup: ht } = P.A,
          { spectrumUrl: ft, exportUrl: bt } = p(),
          Et = new (mt())(ft, bt, ht === yt ? yt : gt),
          kt = async ({ requestId: e, db: t, device: a, searchItem: r }) => {
            const n = {
                requestId: e,
                report: pt.REPORT_NAME.meta,
              },
              o = {
                target: {
                  type: pt.TARGET_TYPE.domain,
                  value: Ve(r, pt.TARGET_TYPE.domain),
                },
                database: (0, dt.prepareDatabase)(t, a),
              };
            return (await Et.fetchData("/Demo/DomainCompetitors", n, o))
              .domains;
          };
        var wt = a(9852),
          vt = a(35938);
        const Tt = () => {
            const e = (0, vt.A)(new Date(), 1);
            return (0, wt.A)(
              new Date(e.valueOf() + 60 * e.getTimezoneOffset() * 1e3),
              "yyyyMMdd"
            );
          },
          At = () => Tt(),
          Ct = {
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
        var St = a(82658);
        ((e) => {
          const t = new Date(e);
          t.getUTCFullYear(),
            String(t.getUTCMonth() + 1).padStart(2, 0),
            String(t.getUTCDate()).padStart(2, 0);
        })(At());
        const xt = (e) => {
            return ((t = qe(e || "")), (e) => e.replace(t, je.Ay.toUnicode(t)))(
              (e || "").replace(/_%26_/g, "&")
            );
            var t;
          },
          Rt = (e) => {
            try {
              return decodeURI(xt(e || ""));
            } catch (t) {
              return xt(e || "");
            }
          },
          Lt = (e) => e.replace(je.Ay.toUnicode(qe(e)), qe(e)),
          _t = (e) =>
            Object.keys(e)
              .map((t) => (e[t] ? `${t}=${e[t]}` : null))
              .filter(Boolean)
              .join("&"),
          Ot = () => {
            const {
              competitors: e,
              searchItem: t,
              setSearchItem: a,
            } = (0, n.useContext)(Qe);
            return {
              competitors: e,
              searchItem: t,
              setSearchItem: a,
            };
          },
          Pt = ({ children: e }) => {
            const [t, a] = (0, n.useState)(""),
              r = (0, l.d4)(He.Lf),
              o = (0, l.d4)(He.Pf),
              i = (0, l.d4)(He.dW),
              s = ((e, t, a) => {
                const [r, o] = (0, n.useState)([]),
                  { isGuest: l } = ct(),
                  i = l();
                return (
                  (0, n.useEffect)(() => {
                    (async () => {
                      if (null == e || null == t || null == a || "" === a || i)
                        o([]);
                      else
                        try {
                          const r = await kt({
                            db: e,
                            device: t,
                            searchItem: Lt(a),
                          });
                          o(r);
                        } catch (e) {
                          console.warn(e), o([]);
                        }
                    })();
                  }, [e, t, a, i]),
                  r
                );
              })(r || i?.db, o || i?.device, t);
            return n.createElement(
              Qe.Provider,
              {
                value: {
                  competitors: s,
                  searchItem: t,
                  setSearchItem: a,
                },
              },
              e
            );
          };
        Pt.propTypes = {
          children: w().node.isRequired,
        };
        const It = Pt,
          Mt = () => ({
            gaChangeSearchType: (e) => {
              return b({
                category: "keyword-gap:landing-page",
                action: "click:scope",
                label: "scope:changed",
                value:
                  ((t = e),
                  {
                    domain: 1,
                    url: 2,
                    subdomain: 3,
                    subfolder: 4,
                  }[t]),
              });
              var t;
            },
            gaChangeKeywordType: (e) => {
              return b({
                category: "keyword-gap:landing-page",
                action: "click:keyword-type",
                label: "keyword-type:changed",
                value:
                  ((t = e),
                  {
                    organic: 1,
                    adwords: 2,
                    pla: 3,
                  }[t]),
              });
              var t;
            },
            gaAddCompetitors: (e) =>
              b({
                category: "keyword-gap:landing-page",
                action: "click:add-competitors",
                label: "competitors:added",
                value: e,
              }),
            gaValidationError: (e) => {
              return b({
                category: "keyword-gap:landing-page",
                action: "click:compare",
                label: "error:showed",
                value:
                  ((t = e),
                  {
                    enterOne: 1,
                    enterCompetitor: 2,
                    domainErr: 3,
                  }[t]),
              });
              var t;
            },
            gaDBChange: (e) =>
              b({
                category: "keyword-gap:landing-page",
                action: "click:database",
                label: "database:changed",
                value: `select DB - ${e}`,
              }),
          }),
          Dt = ({ control: e }) => {
            const {
                errors: { competitors: t },
              } = (0, xe.lN)({
                control: e,
                name: "competitors",
              }),
              { gaValidationError: a } = Mt(),
              r = t && t.filter((e) => !!e)?.[0]?.searchItem?.type;
            return r && a(r), null;
          };
        var Ft = a(72719);
        const { MEDIA_Q: Nt } = i.MediaQ,
          [jt, qt] = (0, Ft.useBreakpointNameFactory)(Nt);
        var $t = a(32030),
          Ut = a(58065),
          Vt = a(69958),
          zt = a(34587),
          Kt = a(89961);
        const Bt = (e, t, a) => {
          const r = t.reduce(
              (t, a) => ({
                ...t,
                [a]: `${e}/${a}`,
              }),
              {}
            ),
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
          return {
            ...r,
            ...n,
          };
        };
        var Jt = a(67072);
        const Wt = Bt(
            Jt.stateKey,
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
          Gt = (0, ke.VP)("requestSetDb", (e) => ({
            db: e,
          })),
          Yt = (0, ke.VP)("requestSetDevice", (e) => ({
            device: e,
          })),
          Ht = (0, ke.VP)("requestSetDate", (e, t, a) => ({
            date: e,
            dateType: t,
            isLive: a,
          })),
          Qt =
            ((0, ke.VP)("requestSetSearchItem", (e) => ({
              searchItem: e,
            })),
            (0, ke.VP)("setDb", (e) => ({
              db: e,
            }))),
          Zt = (0, ke.VP)("setDevice", (e) => ({
            device: e,
          })),
          Xt = (0, ke.VP)("setDate", (e, t, a) => ({
            date: e,
            dateType: t,
            isLive: a,
          })),
          ea = (0, ke.VP)("setDateFromString", (e) => ({
            dateString: e,
          })),
          ta = (0, ke.VP)("setDBFromString", (e) => ({
            dbString: e,
          })),
          aa = (0, ke.VP)("setDeviceFromString", (e) => ({
            deviceString: e,
          })),
          ra = (0, ke.VP)("setCurrency", (e) => ({
            currency: e,
          })),
          na = (0, ke.VP)("updateNextReportParams", (e) => ({
            nextParams: e,
          })),
          oa = (0, ke.VP)("flashNextPageParams"),
          la = (0, ke.VP)("setDefaultDb", ({ db: e, isMobile: t }) => ({
            db: e,
            device: t ? Kt.W.mobile : Kt.W.desktop,
          })),
          ia = (0, ke.VP)("requestSetDefaultDb", (e) => ({
            dbString: e,
          }));
        var sa = a(1081),
          ca = a(58156),
          da = a.n(ca),
          pa = a(7309),
          ua = a.n(pa);
        const ma = "Access",
          ya = "usd",
          ga = [ya],
          ha = (e) => e.data.reportConfig.statusDbs.isLoading,
          fa = (e) => e.data.reportConfig.statusTimepoints.isLoading,
          ba = (e) => e.data.reportConfig.statusCurrencies.isLoading,
          Ea = (0, sa.Mz)([ha, fa, ba], (e, t, a) => e || t || a),
          ka = (0, sa.Mz)(Ea, (e) => null === e || e),
          wa = (0, sa.Mz)(fa, (e) => null === e || e),
          va = (0, sa.Mz)(ha, (e) => null === e || e),
          Ta = (e) =>
            e.data.reportConfig.statusDbs.hasError ||
            e.data.reportConfig.statusTimepoints.hasError ||
            e.data.reportConfig.statusCurrencies.hasError,
          Aa = (0, sa.Mz)(
            [(e) => Ea(e), (e) => fa(e), ba],
            (e, t, a) => e || t || a
          ),
          Ca = (e) => e.data.reportConfig.data.currencies,
          Sa = (0, sa.Mz)([He.pp, He.VG], (e, t) => (t ? "live" : e)),
          xa = ["dh", "us", "uk", "de", "fr"],
          Ra = ({ code: e }) => xa.includes(e),
          La = ({ code: e }) => !xa.includes(e),
          _a = (e, t) => xa.indexOf(e.code) - xa.indexOf(t.code),
          Oa = (e, t) => e.code.localeCompare(t.code),
          Pa = (e) => e.data.reportConfig.data.databases,
          Ia = (0, sa.Mz)(Pa, (e) => {
            if (!e) return null;
            let t = ((e, t) =>
              Object.values(e).filter((e) => (0, St.qF)(e.code) === t))(
              e,
              Kt.W.desktop
            );
            return (
              (t = t.map((e) => {
                const t = (0, St.m_)(e.code);
                return {
                  value: e.code,
                  label: `db.${t}`,
                  code: e.code,
                  country: t,
                  available: e.available,
                  type: e.type,
                };
              })),
              [...t.filter(Ra).sort(_a), ...t.filter(La).sort(Oa)]
            );
          }),
          Ma = (0, sa.Mz)(Ia, (e) => (e ? e.slice(0, 3) : null)),
          Da = (0, sa.Mz)(Ia, (e) => (e ? e.slice(3) : null)),
          Fa = (0, sa.Mz)(
            [
              (e) => (0, He.Lf)(e),
              (e) => (0, He.Pf)(e),
              (e) => ((e) => da()(e.data.reportConfig, "data.timepoints"))(e),
            ],
            (e, t, a) => {
              const r = `${e}/${t}`,
                n = da()(a, `${r}.daily`) || [],
                o = da()(a, `${r}.monthly`) || [];
              return [
                ...n.map((e) => ({
                  date: e,
                  dateType: Kt.J5.daily,
                })),
                ...o.map((e) => ({
                  date: e,
                  dateType: Kt.J5.monthly,
                })),
              ].sort((e, t) => t.date - e.date);
            }
          ),
          Na = (0, sa.Mz)(
            (e) => (0, He.Lf)(e),
            Pa,
            (e, t) =>
              t
                ? Object.keys(t)
                    .filter((t) => (0, St.m_)(t, !1) === e)
                    .map(St.qF)
                    .sort()
                : []
          ),
          ja = (0, sa.Mz)(
            Pa,
            (e, t) => t,
            (e, t) =>
              e
                ? Object.keys(e)
                    .filter((e) => (0, St.m_)(e) === t)
                    .map(St.qF)
                : []
          ),
          qa = (0, sa.Mz)([He.Lf, He.Pf], (e, t) => (0, St.Z0)(e, t)),
          $a = (0, sa.Mz)([qa, Pa], (e, t) => t?.[e]),
          Ua = (0, sa.Mz)(
            Pa,
            (e, t) => t,
            (e) => e,
            (e, t, a) =>
              da()(a.data.reportConfig.data.databases, `${t}.currencies`) || [
                ya,
              ]
          ),
          Va = (e) => {
            const t = (0, St.Z0)((0, He.Lf)(e), (0, He.Pf)(e));
            return (
              da()(
                e.data.reportConfig.data.databases,
                `${t}.supportedCurrencies`
              ) || ga
            );
          },
          za = (0, sa.Mz)(
            (e) => (0, He.Ke)(e),
            Va,
            (e, t) =>
              "default" === e
                ? ya
                : ((e) => {
                    const t = ua()(e, (e) => e !== ya);
                    return void 0 !== t ? t : ya;
                  })(t)
          ),
          Ka = (e, t, a) => {
            const r = da()(Ca(e), Sa(e), {});
            return da()(r, `${t.toUpperCase()}.rate`, 1) * a;
          },
          Ba = (0, sa.Mz)(
            [He.Lf, He.dW, He.pp, He.Lk, He.VG, He.Pf],
            (e, t, a, r, n, o) => ({
              db: e,
              defaultDb: t,
              date: a,
              dateType: r,
              isLive: n,
              device: o,
            })
          ),
          Ja = (e, t, a) =>
            da()(e.data.reportConfig.data, `timepoints.${t}/${a}`, null),
          Wa = (e, t, a) =>
            da()(
              e.data.reportConfig.data,
              `currencies.${a ? "live" : t}`,
              null
            ),
          Ga = (0, sa.Mz)(Fa, (e) =>
            Array.isArray(e) && e.length > 0 ? e[0] : null
          ),
          Ya = (0, sa.Mz)([Ia], (e) => e.filter(({ type: e }) => e === ma)),
          Ha = (0, sa.Mz)(
            [Ya],
            (e) => e.filter(({ available: e }) => e)?.length ?? 0
          ),
          Qa = (0, sa.Mz)([$a], (e) => e?.type === ma),
          Za = (0, sa.Mz)([$a], (e) => !!e?.available),
          Xa = (e, t = 0) => {
            const { formatMessage: a } = (0, pe.A)(),
              r = e
                .slice(t)
                .map((e) => ({
                  ...e,
                  labelLocale: a({
                    id: e.label,
                  }),
                }))
                .sort((e, t) => e.labelLocale.localeCompare(t.labelLocale));
            return [...e.slice(0, t), ...r];
          };
        var er = a(44750),
          tr = a(99975),
          ar = a(42443),
          rr = a.n(ar),
          nr = a(50974),
          or = a.n(nr),
          lr = a(75450),
          ir = a(54051);
        const sr = () =>
          n.createElement(
            $t.A,
            null,
            n.createElement(
              ir.A,
              {
                size: 200,
                color: "gray60",
              },
              "n/a"
            )
          );
        var cr = a(67222);
        const dr = () =>
          n.createElement(
            cr.A,
            {
              height: 8,
              width: 40,
            },
            n.createElement("rect", {
              x: "0",
              y: "0",
              rx: "4",
              ry: "4",
              width: "40",
              height: "8",
            })
          );
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
          topDatabases: e = [],
          restDatabases: t = [],
          selectedDatabase: a = null,
          shortDbTitle: r = !0,
          loading: o = !1,
          hasError: l = !1,
          size: i = "m",
          tagProps: s = {},
          gaAction: c = "",
          onChange: d = () => {},
          ...p
        }) => {
          const { formatMessage: u } = (0, pe.A)(),
            m = (0, n.useCallback)(
              (e) => {
                e &&
                  b({
                    action: c,
                    label: "show DB",
                  });
              },
              [c]
            ),
            y = (0, n.useCallback)(
              (e) => {
                b({
                  action: c,
                  label: `select DB - ${e}`,
                });
              },
              [c]
            );
          return o
            ? n.createElement(
                $t.A,
                {
                  w: "40px",
                },
                n.createElement(dr, null)
              )
            : l
            ? n.createElement(sr, null)
            : n.createElement(
                de.A,
                pr(
                  {
                    "aria-label": u({
                      id: "ariaLabel.selectCountry",
                    }),
                  },
                  p
                ),
                n.createElement(
                  rr(),
                  {
                    onChange: d,
                    loading: o,
                    topDatabases: e || [],
                    restDatabases: t || [],
                    selectedDatabase: a,
                    hasError: !1,
                    inline: !1,
                    onVisibleChange: m,
                    selectDbGa: y,
                    showCounters: !1,
                    tag: tr.A,
                    size: i,
                    tagProps: s,
                  },
                  a
                    ? n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                          er.Ay.Trigger.Addon,
                          null,
                          n.createElement(or(), {
                            db: a,
                          })
                        ),
                        n.createElement(
                          er.Ay.Trigger.Text,
                          null,
                          n.createElement(lr.DbTitle, {
                            db: a,
                            short: r,
                          })
                        )
                      )
                    : null
                )
              );
        };
        ur.propTypes = {
          topDatabases: w().any,
          restDatabases: w().any,
          selectedDatabase: w().any,
          tagProps: w().any,
          onChange: w().func,
          loading: w().bool,
          hasError: w().bool,
          gaAction: w().string,
          size: w().string,
          shortDbTitle: w().bool,
        };
        const mr = ur;
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
        const gr = ({
          onChange: e,
          gaAction: t,
          databases: a = [],
          selectedDatabase: r = null,
          tagProps: o = {},
          size: l = "m",
          shortDbTitle: i = !0,
          ...s
        }) => {
          const c = Xa(a, 4);
          return n.createElement(
            mr,
            yr(
              {
                onChange: e,
                loading: !1,
                hasError: !1,
                topDatabases: c,
                restDatabases: null,
                selectedDatabase: r,
                gaAction: t,
                size: l,
                shortDbTitle: i,
                wMax: 240,
                tagProps: o,
              },
              s
            )
          );
        };
        gr.propTypes = {
          databases: w().any,
          selectedDatabase: w().any,
          tagProps: w().any,
          onChange: w().func.isRequired,
          gaAction: w().string.isRequired,
          size: w().string,
          shortDbTitle: w().bool,
        };
        const hr = (0, n.memo)(gr);
        function fr() {
          return (
            (fr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            fr.apply(null, arguments)
          );
        }
        const br = new M(window.location.search),
          { db: Er } = (0, St.um)(br.get("db")),
          kr = ({
            shortDbTitle: e = !0,
            size: t = "m",
            gaAction: a = "",
            gaDBChange: r = () => {},
            w: o = "100%",
            ...i
          }) => {
            const s = (0, n.useMemo)(
                () => ({
                  w: o,
                  wMin: "100px",
                }),
                [o]
              ),
              c = (0, l.wA)(),
              [d, p] = (0, n.useState)(Er),
              [u, m] = (0, n.useState)([]),
              y = (0, l.d4)(va),
              g = (0, l.d4)(He.dW),
              h = (0, l.d4)(Ia),
              f = (0, n.useCallback)(() => {
                const e = Er || g?.db || St.nR;
                p(e), c(Qt(e));
              }, [g?.db, c]),
              b = (0, n.useCallback)(() => {
                var e;
                y && 0 === u.length
                  ? m([
                      ((e = Er || g?.db || St.nR),
                      {
                        value: e,
                        label: `db.${e}`,
                        code: e,
                        country: e,
                      }),
                    ])
                  : h && m(h);
              }, [y, u.length, g?.db, h]);
            return (
              (0, n.useEffect)(() => {
                d || f();
              }, [d, f]),
              (0, n.useEffect)(() => {
                b();
              }, [b]),
              n.createElement(
                hr,
                fr(
                  {
                    databases: u,
                    selectedDatabase: d,
                    onChange: (e) => {
                      r(e), p(e), c(Qt(e));
                    },
                    gaAction: a,
                    size: t,
                    shortDbTitle: e,
                    tagProps: s,
                    w: o,
                  },
                  i
                )
              )
            );
          };
        kr.propTypes = {
          gaAction: w().string,
          size: w().string,
          gaDBChange: w().func,
          w: w().string,
          shortDbTitle: w().bool,
        };
        const wr = kr;
        var vr = a(10070);
        const { MEDIA_NAMES: Tr } = i.MediaQ,
          Ar = {
            addButton: {
              amount: {
                [Tr.mobile]: 1,
                [Tr.desktop]: 3,
              },
            },
            row: {
              controlsLength: {
                [Tr.mobile]: 1,
                [Tr.desktop]: 2,
              },
              tooltipPlacement: {
                [Tr.mobile]: "top-start",
                [Tr.desktop]: "left",
              },
            },
            landingInputs: {
              isOneColumn: {
                [Tr.mobile]: !0,
                [Tr.desktop]: !1,
              },
            },
            formButtons: {
              w: {
                [Tr.mobile]: "100%",
                [Tr.desktop]: "auto",
              },
            },
            dbSelector: {
              w: {
                [Tr.mobile]: "100%",
                [Tr.desktop]: "auto",
              },
              short: {
                [Tr.mobile]: !1,
                [Tr.desktop]: !0,
              },
            },
          },
          Cr = (0, Ft.useMediaValuesFactory)(Ar, qt, Tr);
        function Sr() {
          return (
            (Sr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Sr.apply(null, arguments)
          );
        }
        const xr = ({ onClick: e, ...t }) => {
          const { formatMessage: a } = (0, pe.A)(),
            [r] = Cr("addButton.amount");
          return n.createElement(
            Vt.A,
            Sr(
              {
                size: "l",
                use: "tertiary",
                onClick: () => {
                  e(r);
                },
                "data-at": `add-competitors-btn add-${r}`,
                "aria-label": a({
                  id: "ariaLabel.addCompetitors",
                }),
                "aria-expanded": "false",
              },
              t
            ),
            n.createElement(Vt.A.Addon, {
              tag: vr.A,
            }),
            n.createElement(
              Vt.A.Text,
              null,
              1 === r
                ? n.createElement(Ut.A, {
                    id: "panel.addCompetitor",
                  })
                : n.createElement(Ut.A, {
                    id: "panel.addAllCompetitors",
                    values: {
                      NUM: r,
                    },
                  })
            )
          );
        };
        xr.propTypes = {
          onClick: w().func.isRequired,
        };
        const Rr = (0, n.memo)(xr),
          Lr = (0, ce.default)($t.A)`
  justify-content: space-between;
  margin: 0 auto;
  display: ${({ isOneColumn: e }) => (e ? "block" : "flex")};
`,
          _r = (0, ce.default)($t.A)`
  display: ${({ isOneColumn: e }) => (e ? "block" : "flex")};
  margin-left: auto;
`,
          Or = ({
            onCompareClick: e,
            onAppendFields: t,
            canAddMoreFields: a = !1,
          }) => {
            const [[r, o, l, i]] = Cr([
                "landingInputs.isOneColumn",
                "formButtons.w",
                "dbSelector.short",
                "dbSelector.w",
              ]),
              { formatMessage: s } = (0, pe.A)(),
              { gaDBChange: c } = Mt();
            return n.createElement(
              Lr,
              {
                wMax: "732px",
                mt: r ? 3 : 8,
                isOneColumn: r,
              },
              a &&
                n.createElement(Rr, {
                  onClick: t,
                  w: o,
                }),
              r &&
                n.createElement(zt.A, {
                  my: 6,
                }),
              n.createElement(
                _r,
                {
                  isOneColumn: r,
                },
                n.createElement(
                  de.A,
                  {
                    "data-at": "select-db",
                    w: o,
                  },
                  n.createElement(wr, {
                    size: "l",
                    shortDbTitle: l,
                    wMax: "100%",
                    w: i,
                    gaAction: "Landing",
                    gaDBChange: c,
                  })
                ),
                n.createElement(
                  Vt.A,
                  {
                    theme: "success",
                    use: "primary",
                    onClick: e,
                    ml: r ? 0 : 3,
                    mt: r ? 3 : 0,
                    "data-at": "compare-btn",
                    "aria-label": s({
                      id: "ariaLabel.compareDomains",
                    }),
                    size: "l",
                    w: o,
                  },
                  n.createElement(Ut.A, {
                    id: "buttons.compare",
                  })
                )
              )
            );
          };
        Or.propTypes = {
          onCompareClick: w().func.isRequired,
          onAppendFields: w().func.isRequired,
          canAddMoreFields: w().bool,
        };
        const Pr = n.memo(Or),
          Ir = (0, n.createContext)(),
          Mr = ({ index: e, children: t }) =>
            n.createElement(
              Ir.Provider,
              {
                value: {
                  index: e,
                },
              },
              t
            );
        Mr.propTypes = {
          index: w().oneOf([0, 1, 2, 3, 4]).isRequired,
          children: w().node.isRequired,
        };
        const Dr = () => {
          const { index: e } = (0, n.useContext)(Ir);
          return e;
        };
        var Fr = a(91731),
          Nr = a(6247);
        const jr = (0, n.createContext)({}),
          qr = ({ context: e, children: t }) =>
            n.createElement(
              jr.Provider,
              {
                value: e,
              },
              t
            );
        qr.propTypes = {
          context: w().object.isRequired,
          children: w().node.isRequired,
        };
        var $r = a(5672);
        const Ur = ({ onClear: e }) => {
          const { formatMessage: t } = (0, pe.A)();
          return n.createElement(Fr.A.Addon, {
            tag: $r.A,
            interactive: !0,
            onClick: e,
            onKeyUp: (t) => {
              t.nativeEvent.stopImmediatePropagation(),
                ("Enter" !== t.key && "Space" !== t.key) || e();
            },
            "data-at": "clear-competitor",
            "aria-label": t({
              id: "ariaLabel.clearInput",
            }),
          });
        };
        Ur.propTypes = {
          onClear: w().func.isRequired,
        };
        const Vr = Ur;
        var zr = a(46522);
        const Kr = () =>
          n.createElement(
            zr.A,
            {
              color: "blue-500",
              size: "m",
              theme: "primary",
              "data-at": "tag-you",
            },
            n.createElement(
              zr.A.Text,
              null,
              n.createElement(
                ir.A,
                {
                  color: "blue-500",
                },
                n.createElement(Ut.A, {
                  id: "panel.you",
                })
              )
            )
          );
        function Br() {
          return (
            (Br = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Br.apply(null, arguments)
          );
        }
        const Jr = (0, ce.default)($t.A)`
  display: inline-block;
  border-radius: 50%;
`,
          Wr = ({
            color: e = "green",
            radius: t = 10,
            inactive: a = !1,
            ...r
          }) =>
            n.createElement(
              Jr,
              Br(
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
        Wr.propTypes = {
          color: w().string,
          radius: w().number,
          inactive: w().bool,
        };
        const Gr = n.memo(Wr),
          Yr = {
            0: "#2BB3FF",
            1: "#59DDAA",
            2: "#FF8C43",
            3: "#AB6CFE",
            4: "#FDC23C",
          },
          Hr = (e) => (void 0 !== Yr[e] ? Yr[e] : Yr[0]),
          Qr = ({ index: e = 0, inactive: t = !1 }) =>
            0 === e
              ? n.createElement(Kr, null)
              : n.createElement(Gr, {
                  radius: 12,
                  inactive: t,
                  color: Hr(e),
                  "data-at": `competitor-circle comp-circle-${
                    t ? "inactive" : e
                  }`,
                });
        Qr.propTypes = {
          inactive: w().bool,
          index: w().oneOf([0, 1, 2, 3, 4]),
        };
        const Zr = Qr,
          { useFocusOnInput: Xr } = Le(),
          en = (0, ce.default)(Fr.A)`
  &:focus-within {
    position: relative;
    z-index: 100;
  }
`,
          tn = ({
            inputRef: e,
            value: t = "",
            index: a = 0,
            errorType: r = null,
            size: o = "l",
            placement: l = "left",
            onChange: i = () => {},
            onSubmit: s = () => {},
            onClear: c = () => {},
            onBlur: d = () => {},
            onFocus: p = () => {},
          }) => {
            const [[u]] = Cr(["row.controlsLength"]),
              { formatMessage: m } = (0, pe.A)(),
              y = (0, n.useRef)(),
              [g, h, f] = ((e) => {
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
              [b, E] = (0, n.useState)(!1),
              k = (0, n.useId)(),
              {
                setEntered: w = () => {},
                setDisabled: v = () => {},
                selected: T,
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
              Xr(0 === e ? t : null);
            })(a, y),
              (0, n.useEffect)(() => {
                0 === t.length && w(!1);
              }, [t, w]),
              (0, n.useEffect)(() => {
                e(y.current);
              }, [e, y]);
            const _ = (0, n.useMemo)(() => {
              try {
                return Rt(t);
              } catch {
                return t;
              }
            }, [t]);
            return n.createElement(
              Nr.Ay,
              {
                theme: "warning",
                visible: b && L,
                inline: !1,
                placement: l,
              },
              n.createElement(
                Nr.Ay.Trigger,
                {
                  w: "100%",
                },
                n.createElement(
                  en,
                  {
                    neighborLocation: 2 === u && "right",
                    size: o,
                    state: L ? "invalid" : "normal",
                  },
                  n.createElement(
                    Fr.A.Addon,
                    null,
                    n.createElement(Zr, {
                      inactive: !g,
                      index: a,
                    })
                  ),
                  n.createElement(Fr.A.Value, {
                    onChange: i,
                    onFocus: () => {
                      E(!0), A(), h(), p();
                    },
                    onBlur: () => {
                      E(!1),
                        f(),
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
                          (T
                            ? A()
                            : (s(), v(!0), setTimeout(() => v(!1), 100)));
                    },
                    value: _,
                    ref: y,
                    placeholder: m({
                      id: "panel.addDomain",
                    }),
                    "data-at": "competitor-value",
                    autoComplete: 0 === a ? "on" : "off",
                    required: 0 === a || 1 === a,
                    "aria-label": m({
                      id: "ariaLabel.enterUrl",
                    }),
                    "aria-describedby": L ? k : void 0,
                  }),
                  t.length > 0 &&
                    n.createElement(Vr, {
                      onClear: () => {
                        w(!1), c();
                      },
                    })
                )
              ),
              n.createElement(
                Nr.Ay.Popper,
                {
                  id: k,
                  "aria-label": r
                    ? m({
                        id: `form.errors.${r}`,
                      })
                    : "",
                },
                r &&
                  n.createElement(
                    "span",
                    null,
                    n.createElement(Ut.A, {
                      id: `ariaLabel.errors.${r}`,
                    })
                  )
              )
            );
          };
        tn.propTypes = {
          value: w().string,
          placement: w().string,
          onChange: w().func,
          onSubmit: w().func,
          onClear: w().func,
          onBlur: w().func,
          onFocus: w().func,
          index: w().oneOf([0, 1, 2, 3, 4]),
          errorType: w().oneOfType([w().string, w().bool]),
          size: w().string,
          inputRef: w().any.isRequired,
        };
        const an = n.memo(tn),
          rn = ({ tldList: e, onFocusChange: t = () => {} }) => {
            const a = Dr(),
              { clearErrors: r, control: o, onSubmit: l, setFocus: i } = We(),
              [s] = Cr("row.tooltipPlacement"),
              {
                field: { onChange: c, onBlur: d, value: p, ref: u },
                fieldState: { error: m },
              } = (0, xe.as)({
                name: `competitors.${a}.searchItem`,
                defaultValue: "",
                rules: {
                  validate: {
                    domainErr: (t) =>
                      ((e, t) => 0 === e.length || Ie(e, t))(t, e),
                  },
                },
                control: o,
              }),
              y = ((e) => {
                const { setSearchItem: t } = Ot(),
                  a = (0, n.useCallback)(
                    (a) => {
                      0 === e && t(Ve(a, "domain"));
                    },
                    [e, t]
                  );
                return a;
              })(a),
              g = (0, n.useCallback)(
                (e) => {
                  c(e), m && r(`competitors.${a}.searchItem`);
                },
                [c, r, m, a]
              ),
              h = (0, n.useCallback)(() => {
                ((e) => {
                  b({
                    category: "keyword-gap:landing-page",
                    action: "click:delete",
                    label: "scope:deleted",
                    value: e,
                  });
                })(a),
                  c(""),
                  i(`competitors.${a}.searchItem`),
                  r(`competitors.${a}.searchItem`);
              }, [c, a, r, i]),
              f = (0, n.useCallback)(() => {
                y(p), d(), t(!1);
              }, [p, y, d, t]),
              E = (0, n.useCallback)(() => t(!0), [t]);
            return n.createElement(an, {
              index: a,
              value: p,
              onChange: g,
              onBlur: f,
              onClear: h,
              onSubmit: l,
              errorType: m?.type,
              inputRef: u,
              placement: s,
              onFocus: E,
            });
          };
        rn.propTypes = {
          onFocusChange: w().func,
          tldList: w().instanceOf(Set).isRequired,
        };
        const nn = rn,
          on = (0, ce.default)(er.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          ln = ye.vM.map((e) => ({
            value: e,
            children: e,
          })),
          sn = ({
            value: e = ye.vM[0],
            defaultValue: t = ye.vM[0],
            index: a = 0,
            size: r = "l",
            onChange: o = () => {},
          }) => {
            const { formatMessage: l } = (0, pe.A)(),
              [[i]] = Cr(["row.controlsLength"]),
              s = (0, n.useCallback)(
                (e) => {
                  o(e, a);
                },
                [o, a]
              );
            return n.createElement(
              er.Ay,
              {
                size: r,
                onChange: s,
                value: e,
                "data-at": "search-type-select",
              },
              n.createElement(
                er.Ay.Trigger,
                {
                  tag: tr.A,
                  "data-at": "search-type-trigger",
                  neighborLocation: 2 === i && "left",
                  "aria-label": l({
                    id: "ariaLabel.selectUrlType",
                  }),
                },
                n.createElement(
                  er.Ay.Trigger.Text,
                  null,
                  n.createElement(Ut.A, {
                    id: `searchTypes.${e.length ? e : t}Type`,
                  })
                )
              ),
              n.createElement(
                on,
                {
                  "data-at": "search-type-dd",
                },
                ln.map(({ value: e }) =>
                  n.createElement(
                    er.Ay.Option,
                    {
                      value: e,
                      key: e,
                      direction: "row",
                      flexWrap: !0,
                      "data-at": `option-${e}`,
                    },
                    n.createElement(Ut.A, {
                      id: `searchTypes.${e}Type`,
                    })
                  )
                )
              )
            );
          };
        sn.propTypes = {
          value: w().oneOf([...ye.vM]),
          defaultValue: w().string,
          onChange: w().func,
          index: w().oneOf([0, 1, 2, 3, 4]),
          size: w().string,
        };
        const cn = n.memo(sn),
          dn = () => {
            const e = Dr(),
              { control: t } = We(),
              { gaChangeSearchType: a } = Mt(),
              {
                field: { onChange: r, onBlur: o, value: l },
              } = (0, xe.as)({
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
              value: l,
              onChange: i,
              onBlur: o,
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
        const mn = (0, ce.default)(er.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          yn = ye.CT.map((e) => ({
            value: e,
            label: e,
          })),
          gn = ({
            value: e = ye.CT[0],
            defaultValue: t = ye.CT[0],
            isFeatureLimited: a = !1,
            size: r = "l",
            onChange: o = () => {},
            openModal: l = () => {},
            ...i
          }) => {
            const { formatMessage: s } = (0, pe.A)(),
              c = (() => {
                const e = ct();
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
                  a && c(e) ? l() : o(e);
                },
                [a, c, l, o]
              );
            return n.createElement(
              er.Ay,
              {
                placeholder: s({
                  id: `keywordTypes.${t}Keywords`,
                }),
                onChange: d,
                value: e,
                size: r,
                tag: tr.A,
                "data-at": "keyword-type-selector",
              },
              n.createElement(
                er.Ay.Trigger,
                un(
                  {
                    "aria-label": s({
                      id: "ariaLabel.selectScope",
                    }),
                    "data-at": "keyword-type-selector-trigger",
                  },
                  i
                ),
                n.createElement(Ut.A, {
                  id: `keywordTypes.${e}Keywords`,
                })
              ),
              n.createElement(
                mn,
                {
                  "data-at": "keyword-type-selector-dd",
                },
                yn.map(({ value: e }) =>
                  n.createElement(
                    er.Ay.Option,
                    {
                      value: e,
                      key: e,
                      direction: "row",
                      "data-at": `option-${e}`,
                      flexWrap: !0,
                    },
                    n.createElement(Ut.A, {
                      id: `keywordTypes.${e}Keywords`,
                    })
                  )
                )
              )
            );
          };
        gn.propTypes = {
          value: w().oneOf([...ye.CT]),
          defaultValue: w().string,
          onChange: w().func,
          isFeatureLimited: w().bool,
          openModal: w().func,
          size: w().string,
        };
        const hn = n.memo(gn);
        function fn() {
          return (
            (fn = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            fn.apply(null, arguments)
          );
        }
        const bn = ({ ...e }) => {
          const t = Dr(),
            { control: a } = We(),
            { gaChangeKeywordType: r } = Mt(),
            {
              field: { onChange: o, onBlur: l, value: i },
            } = (0, xe.as)({
              name: `competitors.${t}.keywordType`,
              defaultValue: "",
              control: a,
            }),
            s = (0, n.useCallback)(
              (e) => {
                r(e), o(e);
              },
              [r, o]
            );
          return n.createElement(
            hn,
            fn(
              {
                index: t,
                value: i,
                onChange: s,
                onBlur: l,
              },
              e
            )
          );
        };
        var En = a(91733);
        const kn = ({
          children: e,
          competitors: t = [],
          disable: a = !1,
          isVisible: r = !1,
          onChange: o = () => {},
        }) => {
          const [l, i] = (0, n.useState)(!1),
            [s, c] = (0, n.useState)(!a),
            [d, p] = (0, n.useState)(!1);
          (0, n.useEffect)(() => c(d), [d]);
          const u = (0, n.useCallback)(
              (e) => () => {
                i(!0), o(e);
              },
              [i, o]
            ),
            m = (0, n.useCallback)(() => {
              i(!1);
            }, [i]),
            y = (0, n.useMemo)(
              () => ({
                selected: l,
                resetSelectedStatus: m,
                setEntered: p,
                setDisabled: c,
              }),
              [l, m, p, c]
            );
          return n.createElement(
            En.A,
            {
              value: null,
            },
            n.createElement(
              En.A.Trigger,
              {
                w: "100%",
                tag: "div",
              },
              n.createElement(
                qr,
                {
                  context: y,
                },
                e
              )
            ),
            !s &&
              !a &&
              n.createElement(
                En.A.Menu,
                {
                  visible: r,
                  "data-at": "competitors-list-suggest-dd",
                },
                ({ highlightedIndex: e }) =>
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      En.A.ItemTitle,
                      null,
                      n.createElement(Ut.A, {
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
                          "aria-label": Rt(t),
                          "aria-selected": a === e,
                        },
                        Rt(t)
                      )
                    )
                  )
              )
          );
        };
        kn.propTypes = {
          children: w().element.isRequired,
          competitors: w().array,
          onChange: w().func,
          disable: w().bool,
          isVisible: w().bool,
        };
        const wn = kn,
          vn = ({ children: e, isVisible: t = !1 }) => {
            const a = Dr(),
              { competitors: r } = Ot(),
              { setValue: o, control: l, clearErrors: i } = We(),
              s = (0, xe.FH)({
                name: "competitors",
                control: l,
              }),
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
                  o(`competitors.${a}.searchItem`, e),
                    i(`competitors.${a}.searchItem`);
                },
                [o, a, i]
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
        vn.propTypes = {
          isVisible: w().bool,
          children: w().oneOfType([w().element, w().array]).isRequired,
        };
        const Tn = vn;
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
        const Cn = (0, ce.default)($t.A)`
  display: contents;
  margin-top: 24px;
`,
          Sn = (0, ce.default)(de.A)`
  flex-grow: 1;
`,
          xn = ({ index: e, tldList: t, ...a }) => {
            const { formatMessage: r } = (0, pe.A)(),
              [[o]] = Cr(["landingInputs.isOneColumn"]),
              [l, i] = (0, n.useState)(!1),
              s = (0, n.useCallback)((e) => i(e), []);
            return n.createElement(
              Mr,
              {
                index: e,
              },
              n.createElement(
                Cn,
                An(
                  {
                    "data-at": "target-input",
                    role: "group",
                    "aria-label": r(
                      {
                        id:
                          "ariaLabel.targets." +
                          (0 === e ? "yourDomain" : "competitor"),
                      },
                      {
                        NUM: e,
                      }
                    ),
                  },
                  a
                ),
                n.createElement(
                  Sn,
                  null,
                  n.createElement(
                    Tn,
                    {
                      isVisible: l,
                    },
                    n.createElement(nn, {
                      onFocusChange: s,
                      tldList: t,
                    })
                  )
                ),
                n.createElement(dn, null),
                n.createElement(bn, {
                  ml: o ? 0 : 3,
                  mb: o ? 3 : 0,
                })
              )
            );
          };
        xn.propTypes = {
          index: w().oneOf([0, 1, 2, 3, 4]).isRequired,
          tldList: w().instanceOf(Set).isRequired,
        };
        const Rn = xn,
          Ln = (0, ce.default)($t.A)`
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
          _n = ({ children: e }) => {
            const [t] = Cr("landingInputs.isOneColumn");
            return n.createElement(
              Ln,
              {
                isOneColumn: t,
              },
              e
            );
          };
        _n.propTypes = {
          children: w().node.isRequired,
        };
        const On = _n,
          Pn = ({ onSubmit: e, fields: t, tldList: a }) => {
            const { formatMessage: r } = (0, pe.A)(),
              o = (() => {
                const { setFocus: e } = We(),
                  t = (() => {
                    const e = (0, n.useRef)(0),
                      { control: t } = We(),
                      a = (0, xe.FH)({
                        name: "competitors",
                        control: t,
                      }),
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
              { gaAddCompetitors: l } = Mt(),
              [i, s] = (0, n.useState)(2),
              c = i < 5;
            return n.createElement(
              $t.A,
              {
                w: "100%",
              },
              n.createElement(
                "form",
                {
                  action: "",
                  "aria-label": r({
                    id: "ariaLabel.reportSetup",
                  }),
                  onSubmit: (e) => {
                    e.preventDefault(), e.stopPropagation();
                  },
                },
                n.createElement(
                  On,
                  null,
                  t.slice(0, i).map((e, t) =>
                    n.createElement(Rn, {
                      key: e.id,
                      index: t,
                      tldList: a,
                    })
                  )
                ),
                n.createElement(Pr, {
                  canAddMoreFields: c,
                  onCompareClick: e,
                  onAppendFields: (e) => {
                    l(e), s((t) => t + e), o();
                  },
                })
              )
            );
          };
        Pn.propTypes = {
          onSubmit: w().func.isRequired,
          fields: w().arrayOf(w().object).isRequired,
          tldList: w().instanceOf(Set).isRequired,
        };
        const In = n.memo(Pn),
          Mn = "keyword_gap",
          Dn = Object.values(ye.SJ),
          Fn = Bt(
            Mn,
            [
              "SET_MODE",
              "SET_KEYWORD_TYPE",
              "SET_INTERSECTION_TYPE",
              "SET_TOP_KEYWORD_TYPE",
            ],
            []
          ),
          Nn = (0, ke.VP)(Fn.SET_MODE, (e) => ({
            mode: e,
          })),
          jn = (0, ke.VP)(Fn.SET_KEYWORD_TYPE, (e) => ({
            keywordType: e,
          })),
          qn = (0, ke.VP)(
            "requestSetIntersectionType",
            ({ intersectionType: e, intersectionSetByUser: t = !0 }) => ({
              intersectionType: e,
              intersectionSetByUser: t,
            })
          ),
          $n = (0, ke.VP)(
            Fn.SET_INTERSECTION_TYPE,
            ({ intersectionType: e, intersectionSetByUser: t = !0 }) => ({
              intersectionType: e,
              intersectionSetByUser: t,
            })
          ),
          Un = (0, ke.VP)("requestSetRankingTypeFromString", (e) => ({
            type: e,
          })),
          Vn = (0, ke.VP)("clearIntersectionType"),
          zn = Bt(De.stateKey, ["SET_TARGETS"], []),
          Kn = (0, ke.VP)(zn.SET_TARGETS, (e, t = !1) => ({
            targets: e,
            isLanding: t,
          })),
          Bn = (0, ke.VP)("requestSetTargetsFromString", (e) => ({
            targets: e,
          })),
          Jn = (0, ke.VP)("setTargetsFromString", (e) => ({
            targets: e,
          })),
          Wn = (0, ke.VP)("requestSetQFromString", (e) => ({
            q: e,
          })),
          Gn = (0, ke.VP)("requestSetSearchTypeFromString", (e) => ({
            searchType: e,
          })),
          Yn = (0, ke.VP)("requestSetKeywordTypeFromString", (e) => ({
            keywordType: e,
          })),
          Hn = (0, ke.VP)("requestSetCompareWithFromString", (e) => ({
            compareWith: e,
          })),
          Qn = ({ searchItem: e }) => "" !== e,
          Zn = {
            competitors: [ye.Kv, ye.Kv, ye.Kv, ye.Kv, ye.Kv],
          },
          Xn = () => {
            const {
                handleSubmit: e,
                setError: t,
                clearErrors: a,
                control: r,
                watch: o,
                setValue: i,
                setFocus: s,
              } = (0, xe.mN)({
                defaultValues: Zn,
                reValidateMode: "onBlur",
                mode: "onBlur",
              }),
              c = (0, Re.useTldList)(),
              { fields: d, replace: p } = (0, xe.jz)({
                control: r,
                name: "competitors",
              }),
              u = (({ handleSubmit: e, setError: t, replace: a }) => {
                const r = (0, l.wA)(),
                  o = (0, l.d4)(Ga),
                  i = (0, n.useCallback)(() => {
                    e(({ competitors: e }) => {
                      let n = e.filter(({ searchItem: e }) => e.length > 0);
                      const l = 5 - n.length;
                      n = [...n, ...new Array(l).fill(ye.Kv)];
                      const i = e.filter(
                        ({ searchItem: e }) => e.length
                      ).length;
                      if (i < 2) {
                        const r = ((e) =>
                          [
                            [
                              "competitors.0.searchItem",
                              {
                                type: "enterOne",
                                message: "",
                              },
                              {
                                shouldFocus: !0,
                              },
                            ],
                            [
                              "competitors.1.searchItem",
                              {
                                type: "enterCompetitor",
                                message: "",
                              },
                              {
                                shouldFocus: !0,
                              },
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
                          b({
                            category: "keyword-gap:landing-page",
                            action: "click:compare",
                            label: "report:load",
                            value: `${t.length} +${a}`,
                          });
                      })(n),
                        r(
                          Ht(
                            o?.date ?? (0, wt.A)(new Date(), "yyyyMMdd"),
                            Kt.J5.daily,
                            !0
                          )
                        ),
                        r(jn(n[0].keywordType)),
                        r(
                          Nn(
                            ((e) => {
                              const t = e
                                .filter(Qn)
                                .map(({ keywordType: e }) => e);
                              return new Set(t).size > 1;
                            })(n)
                              ? ye.vV.advanced
                              : ye.vV.simple
                          )
                        ),
                        r(Kn(n, !0));
                    })();
                  }, [r, e, a, t, o]);
                return i;
              })({
                handleSubmit: e,
                setError: t,
                replace: p,
              }),
              m = (0, n.useMemo)(
                () => ({
                  control: r,
                  setValue: i,
                  clearErrors: a,
                  watch: o,
                  setFocus: s,
                  onSubmit: u,
                }),
                [r, a, i, o, u, s]
              );
            return (
              (0, n.useEffect)(() => {
                const e = new URLSearchParams(window.location.search),
                  t = e.get("q"),
                  a = e.get("searchType");
                t &&
                  Ie(t, c) &&
                  (i("competitors.0.searchItem", t),
                  i("competitors.0.searchType", a));
              }, [i, c]),
              n.createElement(
                Je,
                {
                  context: m,
                },
                n.createElement(Dt, {
                  control: r,
                }),
                n.createElement(
                  jt,
                  null,
                  n.createElement(Ye, null),
                  n.createElement(
                    It,
                    null,
                    n.createElement(In, {
                      fields: d,
                      onSubmit: u,
                      tldList: c,
                    })
                  )
                )
              )
            );
          },
          eo = ({ ga: e }) => {
            const [t, a] = (0, n.useState)(!1);
            (0, n.useEffect)(() => {
              const e = setTimeout(() => a(!0), 1e3);
              return () => clearTimeout(e);
            }, []);
            const [r, o] = (() => {
              const [e, t] = (({
                  root: e = null,
                  rootMargin: t,
                  threshold: a = 0,
                }) => {
                  const [r, o] = (0, n.useState)({}),
                    [l, i] = (0, n.useState)(null),
                    s = (0, n.useRef)(
                      new window.IntersectionObserver(([e]) => o(e), {
                        root: e,
                        rootMargin: t,
                        threshold: a,
                      })
                    );
                  return (
                    (0, n.useEffect)(() => {
                      const { current: e } = s;
                      return (
                        e.disconnect(), l && e.observe(l), () => e.disconnect()
                      );
                    }, [l]),
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
                t && o && e();
              }, [o, t]),
              t
                ? n.createElement("div", {
                    ref: r,
                  })
                : null
            );
          };
        eo.propTypes = {
          ga: w().func.isRequired,
        };
        const to = eo,
          ao = ({
            index: e,
            isTextLoading: t,
            title: r = "",
            description: o = "",
            imgName: l = "",
            direction: i = "default",
          }) => {
            const { formatMessage: s } = (0, pe.A)(),
              c = (0, n.useCallback)(() => {
                return b({
                  category: "keyword-gap:landing",
                  action: `scroll:block-${(t = e + 1)}`,
                  label: `block-${t}:show`,
                });
                var t;
              }, [e]);
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(me().DescriptionItem, {
                title: s({
                  id: r,
                }),
                description: s({
                  id: o,
                }),
                direction: i,
                index: e,
                imageLoader: ((d = l), () => a(59367)(`./${d}.svg`)),
                isTextLoading: t,
              }),
              n.createElement(to, {
                ga: c,
              })
            );
            var d;
          };
        ao.propTypes = {
          title: w().string,
          description: w().string,
          imgName: w().string,
          isTextLoading: w().bool.isRequired,
          index: w().number.isRequired,
          direction: w().oneOf(["default", "reverse"]),
        };
        const ro = n.memo(ao),
          no = [
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
          oo = () => {
            const { formatMessage: e } = (0, pe.A)(),
              { isLoading: t } = (0, _.useTextSmoothLoading)();
            (0, n.useEffect)(() => {
              y.set(F, ye.SJ.missing);
            }, []),
              (0, n.useEffect)(() => {
                b({
                  category: "keyword-gap:landing-page",
                  action: "show:load",
                  label: "landing:loaded",
                });
              }, []);
            const a = (0, l.wA)();
            return (
              (0, n.useEffect)(() => {
                a(we());
              }, [a]),
              n.createElement(
                me(),
                null,
                n.createElement(
                  me().HeaderCard,
                  {
                    title: e({
                      id: "reportTitle.keywordGap",
                    }),
                    description: e({
                      id: "landing.description",
                    }),
                    "aria-label": e({
                      id: "ariaLabel.kgHeader",
                    }),
                  },
                  n.createElement(
                    Ee,
                    {
                      pageType: "landing",
                    },
                    n.createElement(Xn, null)
                  )
                ),
                n.createElement(
                  me().DescriptionCard,
                  {
                    "aria-label": e({
                      id: "ariaLabel.kgFeatures",
                    }),
                  },
                  no.map((e, a) =>
                    n.createElement(ro, {
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
        var lo = a(42534);
        const io = (e) => (e[Mn] ? e[Mn] : {}),
          so = (e) => io(e).mode,
          co = (e) => io(e).keywordType,
          po = (e) => io(e).intersectionSetByUser,
          uo = (e) => io(e).intersectionType,
          mo = (e) => io(e).nextIntersectionType,
          yo = (0, sa.Mz)(lo.G9, (e) =>
            e.split("_").filter((e) => "organic" !== e).length
              ? "mixed"
              : "organic"
          ),
          go = (e) => io(e).intersectionType,
          ho = (e) => e.data.keywordsTotal,
          fo = (e) => ho(e).data?.overlaps || [],
          bo = (0, sa.Mz)(
            (e) => ho(e).status.isLoading,
            (e) => null === e || e
          ),
          Eo = (0, sa.Mz)(fo, (e) =>
            e.map(({ targetIndexes: e, commonKeywords: t }) => ({
              sets: e.map((e) => `${e}`),
              size: t,
            }))
          ),
          ko = (0, sa.Mz)(
            [Eo],
            (e) => e.length > 0 && e.some(({ size: e }) => e > 0)
          ),
          wo = (0, sa.Mz)([lo.N3, fo], (e, t) =>
            (t?.filter(({ targetIndexes: e }) => 1 === e.length) ?? []).map(
              ({ commonKeywords: t, targetIndexes: [a] }, r) => ({
                size: t,
                id: `${a}`,
                target: Rt(e[r]?.searchItem ?? ""),
                searchType: e[r]?.searchType ?? "",
                keywordType: e[r]?.keywordType ?? "",
              })
            )
          ),
          vo = (e) => (ho(e).data.targetsKeywords || [])[0],
          To = (0, sa.Mz)([vo, go], (e, t) => e?.[t] ?? 0),
          Ao = (0, sa.Mz)(vo, (e = {}) =>
            Object.values(e).some((e) => 0 !== e)
          ),
          Co = (0, sa.Mz)(
            (e) => ho(e).status,
            (e) => e.hasError
          ),
          So = (0, sa.Mz)([ot, To], (e, t) => (e < t ? e : t)),
          xo = "keywordsTop",
          Ro = (e) => e.data[xo].status.isLoading,
          Lo = (0, sa.Mz)([Ro, Aa], (e, t) => null === e || e || t),
          _o = (e) => e.data[xo].status.hasError,
          Oo = (0, sa.Mz)(
            (e) => e.data[xo].data,
            (e) => {
              if (e)
                return {
                  missing: e.missing,
                  weak: e.weak,
                  common: e.common,
                };
            }
          ),
          Po = (0, sa.Mz)(Oo, (e) => e),
          Io =
            ((0, sa.Mz)([Lo, Po], (e, t) => e || (t && t.length > 0)),
            (0, sa.Mz)(
              [Lo, Oo],
              (e, t) =>
                !e &&
                (null == t ||
                  Object.values(t).every((e) => null == e || 0 === e.length))
            )),
          Mo = (0, sa.Mz)(
            (e) => ((e) => e.data.keywordsTop)(e).status,
            (e) => e.hasError
          ),
          Do = (e) => e.filters,
          Fo = (e) => Do(e).volume,
          No = (e) => Do(e).position,
          jo = (e) => Do(e).search,
          qo = (e) => Do(e).keywordDifficulty,
          $o = (e) => Do(e).intent,
          Uo = (e) => Do(e).advanced,
          Vo = (e, t) => Uo(e)?.[t],
          zo = (e) => Do(e).advancedApplied,
          Ko = (e) => {
            const t = Do(e),
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
          Bo = (0, sa.Mz)([Ko], (e) => Boolean(e)),
          Jo = (e) => e.kgTable.currentPage,
          Wo = (e) => e.kgTable.prevPage,
          Go = (e) => e.kgTable.sorting.field,
          Yo = (e) => e.kgTable.sorting.direction,
          Ho =
            ((0, sa.Mz)([Go, Yo], (e, t) => ({
              sortField: e,
              sortDirection: t,
            })),
            (0, sa.Mz)(
              [
                Ba,
                lo.Dv,
                uo,
                Jo,
                Go,
                Yo,
                (e) => {
                  const t = Do(e);
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
              (e, t, a, r, n, o, l) => {
                let i = t
                  .filter(({ value: e }) => e.length > 0)
                  .map((e) => ({
                    ...e,
                    value: Lt(e.value),
                  }));
                return (
                  P.A.isSearchTypesLimited() &&
                    (i = i.map((e) => ({
                      ...e,
                      type: "domain",
                    }))),
                  {
                    targets: i,
                    type: a,
                    page: r,
                    sortField: n,
                    sortDirection: o,
                    filter: l,
                    ...e,
                  }
                );
              }
            )),
          Qo = ({ page: e, ...t }) =>
            Object.keys(t)
              .sort()
              .map((e) => JSON.stringify(t[e]))
              .join("/"),
          Zo = (e) => e.data.keywords,
          Xo = (0, sa.Mz)(
            (e) => Zo(e).status.isLoading,
            (e) => null === e || e
          ),
          el = (0, sa.Mz)(
            (e) => Zo(e).status,
            (e) => e.hasError
          ),
          tl = (e) => Zo(e).meta,
          al = (e) => Zo(e).data,
          rl = (0, sa.Mz)([tl, Ho], (e, t) => e?.[Qo(t)]?.[t.page] ?? null),
          nl = (0, sa.Mz)([al, rl], (e, t) => t?.map((t) => e[t]) ?? []),
          ol = (0, sa.Mz)([tl, (e, t) => t], (e, t) =>
            Boolean(e?.[Qo(t)]?.[t.page] ?? !1)
          ),
          ll = (e) => e.data.ranks.data,
          il = (0, sa.Mz)(
            (e) => e.data.ranks.status,
            (e) => null !== e.isLoading && !e.hasError
          ),
          sl = (0, sa.Mz)([bo, Lo, Xo], (e, t, a) => e || t || a),
          cl = (0, sa.Mz)([Mo, Co, el], (e, t, a) => e || t || a);
        var dl = a(33402),
          pl = a.n(dl),
          ul = a(35970),
          ml = a.n(ul),
          yl = a(17465),
          gl = a.n(yl);
        const hl = {
            0: "target1",
            1: "target2",
            2: "target3",
            3: "target4",
            4: "target5",
          },
          fl = {
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
            ...hl,
          },
          bl = {
            comp: "comp",
            cpc: "cpc",
            keywordDifficulty: "kd",
            results: "results",
            volume: "volume",
            ...hl,
          },
          El = {
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
          kl = {
            serpFeatures: (e) => `${parseInt(e, 10)}`,
            crawledTime: (e) => e.map((e) => `${e}000`).join(";"),
          },
          wl = (e, t) => {
            const a = e?.[t] ?? "";
            let r = "";
            if (
              ((r = "object" == typeof a ? `${a?.from}-${a?.to}` : a),
              0 === r.length)
            )
              return [];
            const n = {
                isIncludes: !0,
                field: t,
              },
              [o, l] = r.split("-");
            return o === l
              ? [
                  {
                    ...n,
                    criteria: "=",
                    value: o,
                  },
                ]
              : [
                  l
                    ? {
                        ...n,
                        criteria: "<",
                        value: parseInt(l, 10) + 1,
                      }
                    : null,
                  o
                    ? {
                        ...n,
                        criteria: ">",
                        value: parseInt(o, 10) > 0 ? parseInt(o, 10) - 1 : 0,
                      }
                    : null,
                ].filter((e) => Boolean(e));
          },
          vl = (e) => (e ? "+" : "-"),
          Tl = (e) => El[e] || El.exactMatch,
          Al = (e, t) => (kl[e] || ((e) => e))(t),
          Cl = (e) => {
            const t = e?.intent ?? [];
            return Array.isArray(t) && t.length > 0
              ? t.map((e) => ({
                  isIncludes: !0,
                  field: "intent",
                  criteria: "exactMatch",
                  value: yl.INTENT_IDS.getID(e),
                }))
              : [];
          },
          Sl = {
            kg_competitors: (e) =>
              e.reduce(
                (e, t) =>
                  `${e}${"" === e ? "" : "|"}${[
                    encodeURIComponent(t.value),
                    pt.TARGET_TYPE[t.type],
                    pt.PRODUCT_TYPE[t.dataType],
                  ].join(":")}`,
                ""
              ),
            device_type: (e) => (1 === e ? "Mobile" : "Desktop"),
            kg_display_sort: (e) => {
              return `${((t = e[0]), bl[t] || t)}_${e[1]}`.toLowerCase();
              var t;
            },
            kg_display_filter: (e) =>
              ml()(
                [
                  ...Object.values(e?.advancedApplied ?? {}),
                  ...wl(e, "volume"),
                  ...wl(e, "keywordDifficulty"),
                  ...Cl(e),
                ].map((e) => {
                  return [
                    vl(e.isIncludes),
                    ((t = e.field), fl[t] || t),
                    Tl(e.criteria),
                    Al(e.field, e.value),
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
                      : qe(t.value)
                  }`,
                ""
              ),
          };
        var xl = a(67724);
        function Rl() {
          return (
            (Rl = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Rl.apply(null, arguments)
          );
        }
        w().bool,
          w().bool.isRequired,
          w().string.isRequired,
          w().number.isRequired,
          w().bool,
          w().bool;
        const Ll = (e) => (t) => {
          const a = P.A.isPaid,
            r = P.A.hasProduct(),
            o = P.A.productGroup,
            i = (0, l.d4)(ot),
            s = (0, l.d4)(lt),
            c = (0, l.d4)(it);
          return n.createElement(
            e,
            Rl(
              {
                hasUserPaid: a,
                hasUserProduct: r,
                userRole: o,
                exportLimit: i,
                isHistoryAllowed: s,
                isTrialAllowed: c,
              },
              t
            )
          );
        };
        var _l = a(49962);
        const Ol = (0, ce.default)(de.A)`
  transform: translateZ(0);
  position: sticky;
  margin-top: 150px;
  margin-bottom: 50px;
  top: 150px;
`,
          Pl = {
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
        class Il extends n.PureComponent {
          static propTypes = {
            title: w().string.isRequired,
            description: w().oneOfType([w().string, w().element]),
            contextText: w().string,
            features: w().array,
            onOk: w().func,
            onCancel: w().func,
            cancelText: w().string,
            okText: w().string,
            needSticky: w().bool,
            userRole: w().string.isRequired,
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
            const { userRole: t, gaContext: a } = this.props,
              r = _l.n?.[t] ?? "Payment";
            b({
              action: r,
              label: `${Pl?.[a] ?? a} - ${e}`,
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
            o
          ) {
            return n.createElement(
              de.A,
              {
                direction: "column",
                justifyContent: "center",
                key: o,
                ml: o ? 10 : 0,
                w: 120,
              },
              n.createElement(
                $t.A,
                {
                  mb: 3,
                  hMin: 97,
                },
                "png" === r
                  ? n.createElement("img", {
                      src: `/img/${e}.png`,
                      alt: "",
                    })
                  : n.createElement(lr.AsyncSvgImage, {
                      loader: ((l = e), () => a(97116)(`./${l}.svg`)),
                      usePreview: !0,
                      "aria-hidden": "true",
                      role: "img",
                    })
              ),
              n.createElement(
                ir.A,
                {
                  size: "200",
                  textAlign: "center",
                  "data-at": `item-desc-${o}`,
                },
                n.createElement(Ut.A, {
                  id: t,
                })
              )
            );
            var l;
          }
          renderFeaturesList() {
            const { features: e } = this.props;
            if (0 !== e.length)
              return n.createElement(
                de.A,
                {
                  justifyContent: "center",
                  mb: 8,
                  "data-at": "feature-items",
                },
                e.map((e, t) => this.renderFeature(e, t))
              );
          }
          renderCancelBtn() {
            const { cancelText: e, onCancel: t } = this.props;
            if (e && t)
              return n.createElement(
                Vt.A,
                {
                  onClick: this.handleCancelClick,
                  ml: 3,
                  size: "l",
                  "data-at": "cancel-btn",
                },
                n.createElement(Ut.A, {
                  id: e,
                })
              );
          }
          renderOkBtn() {
            const { okText: e } = this.props;
            return n.createElement(
              Vt.A,
              {
                onClick: this.handleOKClick,
                size: "l",
                use: "primary",
                "data-at": "upgrade-btn",
                theme: "success",
              },
              n.createElement(Ut.A, {
                id: e,
              })
            );
          }
          render() {
            const {
                needSticky: e,
                title: t,
                contextText: a,
                description: r,
              } = this.props,
              o = e ? Ol : de.A;
            return n.createElement(
              o,
              {
                justifyContent: "center",
                direction: "column",
                "data-at": "limit-block",
                w: 440,
              },
              n.createElement(
                ir.A,
                {
                  size: 500,
                  tag: "p",
                  lineHeight: 1.12,
                  mb: 4,
                  medium: !0,
                  "data-at": "title",
                  textAlign: "center",
                },
                n.createElement(Ut.A, {
                  id: t,
                })
              ),
              n.createElement(
                ir.A,
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
                    n.createElement(Ut.A, {
                      id: a,
                    }),
                    " "
                  ),
                n.createElement(Ut.A, {
                  id: r,
                  values: {
                    br: n.createElement("br", null),
                  },
                })
              ),
              this.renderFeaturesList(),
              n.createElement(
                de.A,
                {
                  justifyContent: "center",
                },
                this.renderOkBtn(),
                this.renderCancelBtn()
              )
            );
          }
        }
        const Ml = Ll(Il),
          Dl = "trialplan",
          Fl = {
            [i.USER_ROLES.pro]: {
              title: "limitBlock.pro.title",
              description: "limitBlock.pro.description",
              okText: "limitBlock.pro.upgradeText",
              features: [
                {
                  img: "limit_keyword_per_report",
                  description: "limitBlock.pro.feature_1",
                },
                {
                  img: "limit_excel",
                  description: "limitBlock.pro.feature_2",
                },
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
            [Dl]: {
              title: "limitBlock.trialPlan.title",
              description: "limitBlock.trialPlan.description",
              okText: "limitBlock.getTrial",
            },
          },
          Nl = {
            results: "limitBlock.context.results",
            filter_sorting: "limitBlock.context.filter_sorting",
            filters: "limitBlock.context.filters",
            sorting: "limitBlock.context.filter_sorting",
            historical: "limitBlock.context.historical",
            report_per_day: "limitBlock.context.report_per_day",
            export: "limitBlock.context.export",
            pla: "limitBlock.context.pla",
          },
          jl = {
            filters: "limitBlock.notNow",
            historical: "limitBlock.notNow",
            default: "limitBlock.cancelBtnModal",
            export: "limitBlock.notNow",
          },
          ql = ({
            planType: e = i.USER_ROLES.pro,
            cancelText: t = "",
            limitContext: a = "",
            needSticky: r = !1,
            gaContext: o = "",
            onCancel: l = null,
            onClose: s = () => {},
          }) => {
            const c = (0, n.useCallback)(() => {
                const t = ((e) => {
                  switch (e) {
                    case i.USER_ROLES.customPlan:
                      return () => i.BillingUI.customPlanRequest(!0);
                    case Dl:
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
                t(),
                  s({
                    closeByMainAction: !0,
                  });
              }, [e, s]),
              d = Fl[e],
              p = ((e) => (e && void 0 !== Nl[e] ? Nl[e] : ""))(a),
              u = t || ((e) => (e && void 0 !== jl[e] ? jl[e] : ""))(a),
              m = void 0 !== d.okText ? d.okText : void 0;
            return n.createElement(Ml, {
              title: d.title,
              contextText: p,
              description: d.description,
              features: d.features,
              cancelText: u,
              okText: m,
              onCancel: l,
              onOk: c,
              needSticky: r,
              planType: e,
              gaContext: o || a,
            });
          };
        ql.propTypes = {
          planType: w().oneOf([...i.USER_ROLES.getList(), Dl]),
          onCancel: w().func,
          onClose: w().func,
          cancelText: w().string,
          limitContext: w().oneOf([
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
          needSticky: w().bool,
          gaContext: w().string,
        };
        const $l = ql,
          Ul = ({
            visible: e = !1,
            planType: t = i.USER_ROLES.pro,
            limitContext: a = "",
            gaContext: r = "",
            onClose: o = () => {},
            onCancel: l = () => {},
          }) =>
            n.createElement(
              xl.A,
              {
                onClose: o,
                visible: e,
              },
              n.createElement(
                xl.A.Overlay,
                {
                  zIndex: 800,
                },
                n.createElement(
                  xl.A.Window,
                  {
                    p: "24px 104px 32px 104px",
                  },
                  n.createElement($l, {
                    limitContext: a,
                    gaContext: r,
                    planType: t,
                    onCancel: l,
                    onClose: o,
                  })
                )
              )
            );
        Ul.propTypes = {
          visible: w().bool,
          onClose: w().func,
          onCancel: w().func,
          planType: w().oneOf(i.USER_ROLES.getList()),
          limitContext: w().string,
          gaContext: w().string,
        };
        const Vl = Ul,
          zl = {
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
          Kl = (e = "", t, a, r) => {
            let n = e;
            const o = t || a,
              l = _l.n?.[r] ?? "Payment",
              i = zl?.[o] ?? "Unknown context";
            "filter" === i && (n = "view available data"),
              b({
                action: l,
                label: `${i} - ${n}`,
              });
          },
          Bl = ({
            requiredPlan: e = i.USER_ROLES.pro,
            limitContext: t = "",
            gaContext: a = "",
            onCancelClick: r = () => {},
            children: o,
          }) => {
            const { isHistoryAllowed: l, userRole: s } = ct(),
              [c, d] = (0, n.useState)(!1),
              p = (0, n.useCallback)(
                ({ closeByMainAction: e } = {}, r) => {
                  r?.stopPropagation(),
                    r?.preventDefault(),
                    e || Kl("not now", a, t, s),
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
                Kl("not now", a, t, s), d(!1), r();
              }, [s, a, t, r]);
            let g;
            if (
              ((g = "historical" === t ? !l : i.USER_ROLES.isLowPlan(s, e)),
              "function" == typeof o)
            )
              return n.createElement(
                n.Fragment,
                null,
                o({
                  isFeatureLimited: g,
                  openModal: u,
                }),
                n.createElement(Vl, {
                  visible: c,
                  onClose: p,
                  onCancel: y,
                  userRole: s,
                  planType: e,
                  limitContext: t,
                  gaContext: a,
                })
              );
            if (!g) return o;
            const h = n.Children.map(o, (e) =>
              n.cloneElement(e, {
                featureIsLimited: !0,
                openModal: u,
              })
            );
            return n.createElement(
              $t.A,
              {
                wMin: 0,
              },
              n.createElement(
                $t.A,
                {
                  onClickCapture: u,
                  onKeyDownCapture: m,
                  "aria-haspopup": "dialog",
                },
                h
              ),
              n.createElement(Vl, {
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
        Bl.propTypes = {
          requiredPlan: w().string,
          children: w().oneOfType([w().node, w().func]).isRequired,
          limitContext: w().string,
          gaContext: w().string,
          onCancelClick: w().func,
        };
        const Jl = Bl;
        var Wl = a(78832),
          Gl = a(27992);
        const Yl = "header.export_pdf",
          Hl = (e) => {
            Gl.A.track(Gl.A.eventName.show, {
              item_location: `${Yl}.modal`,
              status: e,
            });
          },
          Ql = ({ options: e, isFeatureLimited: t = !1 }) => {
            const { formatMessage: a } = (0, pe.A)(),
              [r, o] = (0, n.useState)(!1);
            return n.createElement(
              n.Fragment,
              null,
              n.createElement("div", {
                id: "my-reports-lite-order",
                "data-path": `${Yl}.modal`,
              }),
              n.createElement(
                Vt.A,
                {
                  onClick: () => {
                    if (
                      (b({
                        category: "keyword-gap:export",
                        action: "click:export-button",
                        label: "export:show-popup",
                      }),
                      Gl.A.track(Gl.A.eventName.click, {
                        item_location: Yl,
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
                      : (o(!0),
                        fetch("/my_reports/api/v1/lite-order")
                          .then((e) => e.json())
                          .then((t) => {
                            o(!1);
                            const { status: a } = t;
                            if ("success" === a) {
                              const {
                                  result: { script: a, styles: r },
                                } = t,
                                n = document.createElement("script");
                              n.src = a;
                              const o = document.createElement("link");
                              (o.rel = "stylesheet"),
                                (o.href = r),
                                document.head.append(o),
                                document.body.append(n),
                                n.addEventListener("load", () => {
                                  window.liteOrder.init({
                                    templateType: e.type,
                                    templateParameters: e,
                                  });
                                }),
                                Hl(_l.A.success);
                            } else console.error(a), Hl(_l.A.sww);
                          })
                          .catch((e) => {
                            o(!1), console.error(e), Hl(_l.A.sww);
                          }));
                  },
                  loading: r,
                  className: "js-button-pdf",
                  "aria-label": a({
                    id: "ariaLabel.pdfButton",
                  }),
                  "aria-haspopup": "dialog",
                  "data-path": Yl,
                },
                n.createElement(Vt.A.Addon, null, n.createElement(Wl.A, null)),
                n.createElement(
                  Vt.A.Text,
                  null,
                  n.createElement(Ut.A, {
                    id: "pdf.exportButton",
                  })
                )
              )
            );
          };
        Ql.propTypes = {
          options: w().object.isRequired,
          isFeatureLimited: w().bool,
        };
        const Zl = Ql,
          Xl = i.USER_ROLES.pro,
          ei = () => {
            const {
                db: e,
                date: t,
                dateType: a,
                device: r,
                filter: o,
                sortField: i,
                sortDirection: s,
                type: c,
                page: d,
                targets: p,
              } = (0, l.d4)(Ho),
              u = (0, l.d4)(za);
            if (!p || 0 === p.length) return null;
            const m =
              ((y = {
                type: "dpa_keyword_gap",
                kg_competitors: p,
                device_type: r,
                database: (0, St.Z0)(e, r),
                database_date:
                  a === Kt.J5.daily
                    ? t
                    : t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1$2"),
                currency: u,
                keywords_type: c,
                kg_display_filter: o,
                positions_filter: o,
                display_page: Number.parseInt(d, 10),
                kg_display_sort: [i, s],
                show_description: "on",
                report_subtitle: p,
              }),
              Object.entries(y)
                .map((e) =>
                  Reflect.has(Sl, e[0]) ? [e[0], Sl[e[0]](e[1])] : [e[0], e[1]]
                )
                .reduce((e, t) => ((e[t[0]] = t[1]), e), {}));
            var y;
            return n.createElement(
              Jl,
              {
                limitContext: "export",
                requiredPlan: Xl,
              },
              n.createElement(Zl, {
                options: m,
              })
            );
          };
        var ti = a(43211);
        const ai = "Report",
          ri = "header.country",
          ni = () => {
            const e = (0, l.wA)(),
              { formatMessage: t } = (0, pe.A)(),
              a = (0, l.d4)(va),
              r = (0, l.d4)(He.Lf),
              o = (0, l.d4)(Ta),
              i = (0, l.d4)(Ma) || [],
              s = (0, l.d4)(Da) || [],
              c = Xa(s, 1),
              d = (0, n.useCallback)((e) => {
                e &&
                  (b({
                    action: ai,
                    label: "show DB",
                  }),
                  Gl.A.track(Gl.A.eventName.click, {
                    item_location: ri,
                  }));
              }, []),
              p = (0, n.useCallback)((e) => {
                ((e) => {
                  Gl.A.track(Gl.A.eventName.applyFilter, {
                    item_location: ri,
                    type: {
                      top_list: "top_3_list",
                      rest_countries: "rest_countries",
                    }[e],
                  });
                })(e);
              }, []),
              u = !a && o,
              m = (0, n.useMemo)(
                () => ({
                  "data-path": ri,
                }),
                []
              );
            return n.createElement(
              de.A,
              {
                "aria-label": t({
                  id: "ariaLabel.selectCountry",
                }),
              },
              n.createElement(
                rr(),
                {
                  topDatabases: i,
                  restDatabases: c,
                  selectedDatabase: r,
                  hasError: u,
                  loading: a,
                  onChange: (t) => {
                    ((e) => {
                      b({
                        action: ai,
                        label: `select DB - ${e}`,
                      });
                    })(t),
                      e(Gt(t));
                  },
                  onVisibleChange: d,
                  onOptionClick: p,
                  showCounters: !1,
                  tag: ti.A,
                  tagProps: m,
                },
                r
                  ? n.createElement(
                      n.Fragment,
                      null,
                      n.createElement(
                        ti.A.Addon,
                        null,
                        n.createElement(or(), {
                          db: r,
                        })
                      ),
                      n.createElement(
                        ti.A.Text,
                        null,
                        n.createElement(lr.DbTitle, {
                          db: r,
                        })
                      )
                    )
                  : null
              )
            );
          };
        var oi = a(55910),
          li = a.n(oi);
        const ii = () =>
            n.createElement(
              $t.A,
              null,
              n.createElement(
                ir.A,
                {
                  color: "gray-500",
                  size: 200,
                },
                n.createElement(Ut.A, {
                  id: "message.n_a",
                })
              )
            ),
          si = n.memo(ii),
          ci = () =>
            n.createElement(
              $t.A,
              {
                w: 40,
              },
              n.createElement(
                cr.A,
                {
                  height: 8,
                },
                n.createElement(cr.A.Text, {
                  y: "0",
                  width: "100%",
                })
              )
            ),
          di = "Report",
          pi = "header.device",
          ui = () => {
            const e = (0, l.wA)(),
              t = (() => {
                const { formatMessage: e } = (0, pe.A)(),
                  t = (0, l.d4)(Na);
                return (0, n.useMemo)(
                  () =>
                    t.map((t) => ({
                      value: t,
                      label: e({
                        id: `device.${Kt.W.ToString(t)}`,
                      }),
                    })),
                  [t, e]
                );
              })(),
              a = (0, l.d4)(He.Pf),
              r = (0, l.d4)(va),
              o = (0, l.d4)(Ta),
              i = !r && o,
              s = (0, n.useCallback)(
                (t) => {
                  var a;
                  e(Yt(t)),
                    ((e) => {
                      b({
                        action: di,
                        label: "device",
                        value: e,
                      });
                    })(Kt.W.ToString(t)),
                    (a = t),
                    Gl.A.track(Gl.A.eventName.applyFilter, {
                      item_location: pi,
                      type: Kt.W.ToString(a),
                    });
                },
                [e]
              ),
              c = (0, n.useCallback)((e) => {
                e &&
                  (b({
                    action: di,
                    label: "device",
                    value: "show",
                  }),
                  Gl.A.track(Gl.A.eventName.click, {
                    item_location: pi,
                  }));
              }, []),
              d = (0, n.useMemo)(
                () => ({
                  "data-path": pi,
                }),
                []
              );
            return r
              ? n.createElement(ci, null)
              : i
              ? n.createElement(si, null)
              : n.createElement(li(), {
                  devices: t,
                  selectedDevice: a,
                  onChange: s,
                  onVisibleChange: c,
                  tag: ti.A,
                  triggerProps: d,
                });
          };
        var mi = a(65124),
          yi = a.n(mi);
        const gi = {
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
          hi = ({
            visible: e,
            limitContext: t,
            requiredPlan: a,
            onClose: r,
            gaContext: o,
          }) => {
            const l = P.A.productGroup,
              [i, s] = (0, n.useState)(e);
            (0, n.useEffect)(() => {
              s(e);
            }, [e]);
            const c = ({ closeByMainAction: e } = {}) => {
              r(!1);
              const t = void 0 !== _l.n[l] ? _l.n[l] : "Payment";
              e ||
                b({
                  action: t,
                  label: `${
                    void 0 !== gi[o] ? gi[o] : "Unknown context"
                  } - not now`,
                  addReportName: !0,
                });
            };
            return n.createElement(Vl, {
              visible: i,
              onClose: c,
              onCancel: c,
              userRole: l,
              planType: a,
              limitContext: t,
              gaContext: o,
            });
          },
          fi = (e, t, a) => {
            const { isHistoryAllowed: r } = ct();
            let o = !1;
            return (
              (o = "historical" === e ? !r : P.A.isLowPlan(t)),
              {
                isLimited: o,
                openLimitPopup: () => {
                  console.log("openLimitPopup");
                },
                RenderModal: ({ visible: r, onClose: o }) =>
                  n.createElement(hi, {
                    visible: r,
                    onClose: o,
                    limitContext: e,
                    requiredPlan: t,
                    gaContext: a,
                  }),
              }
            );
          },
          bi = i.USER_ROLES.guru,
          Ei = "historical",
          ki = "Report",
          wi = "header.date",
          vi = () => {
            const e = (0, l.wA)(),
              t = (0, l.d4)(ka),
              a = (0, l.d4)(wa),
              r = t || a,
              o = (0, l.d4)(Ta),
              i = !r && o,
              s = (0, l.d4)(He.pp),
              c = (0, l.d4)(He.Lk),
              d = (0, l.d4)(Fa),
              {
                isLimited: p,
                onLimited: u,
                RenderLimitedModal: m,
              } = (() => {
                const [e, t] = (0, n.useState)(!1),
                  {
                    isLimited: a,
                    openLimitPopup: r,
                    RenderModal: o,
                  } = fi("historical", bi, "historical_panel");
                return {
                  isLimited: a,
                  onLimited: () => {
                    r(), t(!0);
                  },
                  RenderLimitedModal: () =>
                    n.createElement(o, {
                      visible: e,
                      onClose: () => t(!1),
                      gaContext: Ei,
                    }),
                };
              })(),
              y = (0, n.useCallback)(
                (t) => {
                  var a;
                  (a = t.dateType),
                    Gl.A.track(Gl.A.eventName.applyFilter, {
                      item_location: wi,
                      type: a === Ct.Daily ? "live" : "historical",
                    }),
                    e(Ht(t.date, t.dateType, t.dateType === Kt.J5.daily));
                },
                [e]
              ),
              g = (0, n.useCallback)(
                (e) => {
                  y(e),
                    ((e) => {
                      b({
                        action: ki,
                        label: "historical data",
                        value:
                          1 === e.dateType ? `select HD - ${e.date}` : "LD",
                      });
                    })(e);
                },
                [y]
              ),
              h = (0, n.useMemo)(
                () => ({
                  "data-path": wi,
                }),
                []
              ),
              f = (0, n.useMemo)(
                () => ({
                  date: s,
                  dateType: c,
                }),
                [s, c]
              );
            return i
              ? n.createElement(si, null)
              : n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(yi(), {
                    selectedDate: f,
                    dates: d,
                    loading: r,
                    onChange: p ? u : g,
                    onVisibleChange: (e) => {
                      e &&
                        (b({
                          action: ki,
                          label: "historical data",
                          value: "show",
                        }),
                        Gl.A.track(Gl.A.eventName.click, {
                          item_location: wi,
                        }));
                    },
                    triggerProps: h,
                  }),
                  n.createElement(m, null)
                );
          };
        var Ti = a(61325),
          Ai = a.n(Ti);
        const Ci = "header.currency",
          Si = () => {
            const e = (0, l.wA)(),
              t = (() => {
                const e = (0, l.d4)(Ea),
                  t = (0, l.d4)(ba);
                return e || t;
              })(),
              a = (0, l.d4)(Va),
              r = (() => {
                const e = (0, l.d4)(Va),
                  t = (0, l.d4)(He.Ke),
                  a = ((e) =>
                    e.reduce(
                      (e, t) => ((e["usd" === t ? "default" : "local"] = t), e),
                      {}
                    ))(e);
                return a[t];
              })(),
              o = (0, n.useCallback)(
                (t) => {
                  e(ra(t)),
                    ((e) => {
                      Gl.A.track(Gl.A.eventName.applyFilter, {
                        item_location: Ci,
                        type: e,
                      });
                    })(t);
                },
                [e]
              ),
              i = (0, n.useCallback)((e) => {
                e &&
                  Gl.A.track(Gl.A.eventName.click, {
                    item_location: Ci,
                  });
              }, []),
              s = (0, n.useMemo)(
                () => ({
                  "data-path": Ci,
                }),
                []
              );
            return n.createElement(Ai(), {
              currencies: a,
              value: r,
              loading: t,
              onChange: o,
              onVisibleChange: i,
              triggerProps: s,
            });
          };
        var xi = a(2094);
        const Ri = "header.breadcrumbs",
          Li = (e) => () => {
            b({
              category: "keyword-gap:header",
              action: "click:breadcrumbs",
              label: `${e}:open`,
            }),
              Gl.A.track(Gl.A.eventName.click, {
                item_location: Ri,
                item_label: e,
              });
          },
          _i = {
            organic: "/analytics/organic/",
            backlinks: "/analytics/backlinks/",
            overview: "/analytics/overview/",
            da: "/analytics/da/",
          },
          Oi = () => {
            const { locale: e } = (0, pe.A)(),
              t = (() => {
                const {
                    db: e,
                    currency: t,
                    device: a,
                    date: r,
                    dateType: n,
                  } = (0, l.d4)(He.eF),
                  { searchItem: o, searchType: i } = (0, l.d4)(lo.qG);
                return (({
                  db: e,
                  device: t,
                  currency: a,
                  date: r,
                  dateType: n,
                  searchItem: o,
                  searchType: l,
                }) => {
                  const i = {
                    db: e,
                    device: Kt.W.ToString(t),
                    currency: a,
                    date: n === Kt.J5.monthly ? r.slice(0, 6) : "",
                    searchType: l,
                  };
                  return [
                    _i.overview,
                    _t({
                      ...i,
                      q: o,
                    }),
                  ].join("?");
                })({
                  searchItem: o,
                  searchType: i,
                  db: e,
                  device: a,
                  currency: t,
                  date: r,
                  dateType: n,
                });
              })();
            return n.createElement(
              xi.A,
              {
                tag: "nav",
                locale: e,
                "data-at": "breadcrumbs",
                "data-path": Ri,
              },
              n.createElement(
                xi.A.Item,
                {
                  onClick: Li("projects"),
                  href: "/projects/",
                },
                n.createElement(Ut.A, {
                  id: "page.breadcrumbs.projects",
                })
              ),
              n.createElement(
                xi.A.Item,
                {
                  onClick: Li("domain_overview"),
                  href: t || "/analytics/overview/",
                },
                n.createElement(Ut.A, {
                  id: "page.breadcrumbs.domain_overview",
                })
              ),
              n.createElement(
                xi.A.Item,
                {
                  active: !0,
                },
                n.createElement(Ut.A, {
                  id: "page.breadcrumbs.keyword_gap",
                })
              )
            );
          },
          Pi = n.memo(Oi);
        var Ii = a(22007),
          Mi = a.n(Ii);
        const Di = "header.send_feedback",
          Fi = () => {
            Gl.A.track(Gl.A.eventName.click, {
              item_location: Di,
            });
          },
          Ni = (e) => {
            Gl.A.track(Gl.A.eventName.send, {
              item_location: Di,
              status: e,
            });
          },
          ji = () => {
            Gl.A.track(Gl.A.eventName.click, {
              item_location: `${Di}.cancel`,
            });
          },
          qi = "default",
          $i = "success",
          Ui = "failed",
          Vi = ({ experimentName: e = "" }) => {
            const {
                searchItem: t,
                db: a,
                date: r,
                device: o,
              } = (0, l.d4)(He.eF),
              {
                status: i,
                resetStatus: s,
                setStatus: c,
              } = (() => {
                const [e, t] = (0, n.useState)(qi);
                return (
                  (0, n.useEffect)(() => {
                    e === Ui && Ni(_l.A.sww), e === $i && Ni(_l.A.success);
                  }, [e]),
                  {
                    status: e,
                    resetStatus: () => t(qi),
                    setStatus: t,
                  }
                );
              })(),
              [d, u] = (0, n.useState)({
                description: "",
                email: P.A.email || "",
              });
            return n.createElement(Mi(), {
              email: d.email,
              status: i,
              onSubmit: async (n) => {
                c("loading");
                try {
                  const l = await (({
                    text: e,
                    section: t,
                    email: a,
                    id: r,
                    isPaid: n,
                    emailReplyTo: o,
                    database: l,
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
                        emailReplyTo: o,
                        database: l,
                        date: i,
                        query: s,
                        URL: c,
                      }),
                    }))({
                    text: `${n.feedback}\nURL: ${window.location.href}`,
                    section: "keyword_gap:spa",
                    email: P.A.email,
                    id: P.A.id,
                    isPaid: P.A.isPaid ? "yes" : "no",
                    emailReplyTo: n.email,
                    database: (0, St.Z0)(a, o),
                    experimentName: e,
                    date: r,
                    query: t,
                  });
                  l.ok ? c($i) : c(Ui);
                } catch (e) {
                  console.warn(e), c(Ui);
                }
              },
              onChange: (e, t) =>
                u({
                  ...d,
                  [t]: e,
                }),
              onCancel: ji,
              onLinkClick: Fi,
              onVisibleChange: (e) => {
                e || "success" !== i || s();
              },
              "data-at": "feedback",
              showBetaTesterButton: !0,
              source: "kg",
              "data-path": Di,
            });
          };
        Vi.propTypes = {
          experimentName: w().string,
        };
        const zi = n.memo(Vi);
        var Ki = a(97067),
          Bi = a(70853);
        const Ji = "header.user_manual",
          Wi = () => {
            Gl.A.track(Gl.A.eventName.click, {
              item_location: Ji,
            }),
              b({
                action: "Report",
                label: "tutorial",
                value: "user manual link - Report",
              });
          },
          Gi = () =>
            n.createElement(
              Ki.A,
              {
                href: "/kb/28-keyword-gap",
                onClick: Wi,
                target: "_blank",
                "data-at": "user-manual",
                "data-path": Ji,
              },
              n.createElement(Ki.A.Addon, {
                tag: Bi.A,
              }),
              n.createElement(
                Ki.A.Text,
                null,
                n.createElement(Ut.A, {
                  id: "header.userManual",
                })
              )
            ),
          Yi = n.memo(Gi),
          Hi = () => {
            const { formatMessage: e } = (0, pe.A)();
            return n.createElement(pl(), {
              toolName: e({
                id: "reportTitle.keywordGap",
              }),
              breadcrumbs: n.createElement(Pi, null),
              links: [
                n.createElement(Yi, {
                  key: "user-manual",
                }),
                n.createElement(zi, {
                  key: "feedback",
                }),
              ],
              pdfButton: n.createElement(ei, null),
              databaseSelector: n.createElement(ni, null),
              deviceSelector: n.createElement(ui, null),
              dateSelector: n.createElement(vi, null),
              currencySelector: n.createElement(Si, null),
              databaseLabel: e({
                id: "header.database",
              }),
              deviceLabel: e({
                id: "header.device",
              }),
              dateLabel: e({
                id: "header.date",
              }),
              currencyLabel: e({
                id: "header.currency",
              }),
              useSearchItem: !1,
              "aria-label": e({
                id: "ariaLabel.kgHeader",
              }),
              tag: "section",
            });
          },
          Qi = n.memo(Hi);
        var Zi = a(57229);
        const Xi = ({ searchItem: e }) => "" !== e,
          es = () =>
            [...new Array(5)].fill({
              searchItem: "",
              searchType: "domain",
              keywordType: "organic",
            }),
          ts = "keyword_gap.widget_compare",
          as = "Report",
          rs = () => {
            const { gaAction: e } = (0, n.useContext)(fe),
              t = (0, n.useCallback)(() => {
                b({
                  action: e,
                  label: "click to Cancel",
                }),
                  Gl.A.track(Gl.A.eventName.click, {
                    item_location: `${ts}.cancel`,
                  });
              }, [e]),
              a = (0, n.useCallback)(
                (t, a, r) => {
                  b({
                    action: e,
                    label: `Select keyword type for domain ${r + 1}`,
                    value: "adwords" === t ? "paid" : t,
                  }),
                    Gl.A.track(Gl.A.eventName.click, {
                      item_location: `${ts}.keyword_type`,
                      item_label: t,
                      type: a,
                      state: `${r + 1}pos`,
                    });
                },
                [e]
              ),
              r = (0, n.useCallback)(
                (t) =>
                  b({
                    action: e,
                    label: "delete filled domain",
                    value: t + 1,
                  }),
                [e]
              ),
              o = (0, n.useCallback)(
                (t) =>
                  b({
                    action: e,
                    label: "domain validation error",
                    value: t + 1,
                  }),
                [e]
              ),
              l = (0, n.useCallback)(
                (t, a, r) => {
                  b({
                    action: e,
                    label: "change search type manually",
                    value: `${t} - ${a} - ${r}`,
                  }),
                    Gl.A.track(Gl.A.eventName.click, {
                      item_location: `${ts}.scope`,
                      item_label: a,
                      type: t,
                      state: `${r}pos`,
                    });
                },
                [e]
              ),
              i = (0, n.useCallback)(
                (t) =>
                  b({
                    action: e,
                    label: "click to search type selector",
                    value: t,
                  }),
                [e]
              ),
              s = (0, n.useCallback)(
                (t, a) => {
                  b({
                    action: e,
                    label: `Сlick to ${
                      "simple" === t ? "mixed" : "single"
                    } keyword type`,
                  }),
                    "simple" === t &&
                      Gl.A.track(Gl.A.eventName.click, {
                        item_location: a,
                      });
                },
                [e]
              );
            return (0, n.useMemo)(
              () => ({
                gaCancelClick: t,
                gaClickKeywordType: a,
                gaClickClose: r,
                gaValidationError: o,
                gaChangeSearchType: l,
                gaOpenSearchType: i,
                gaModeChange: s,
              }),
              [t, a, r, o, l, i, s]
            );
          };
        var ns = a(75059);
        const os = "pla",
          ls = i.USER_ROLES.business,
          is = "keyword_gap.pills.keyword_type",
          ss = ({ value: e = "organic", onTypeClick: t = () => {} }) => {
            const { formatMessage: a } = (0, pe.A)(),
              r = ct(),
              [o, l] = (0, n.useState)(!1),
              { RenderModal: i } = fi(os, ls, os);
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                ns.A,
                {
                  onChange: (e) => {
                    pn.has(e) && pn.get(e)(r)
                      ? l(!0)
                      : (((e, t) => {
                          b({
                            action: as,
                            label: "change keyword type by pills",
                            value: "adwords" === e ? "paid" : e,
                          }),
                            Gl.A.track(Gl.A.eventName.click, {
                              item_location: t,
                              item_label: {
                                organic: "organic",
                                adwords: "paid",
                                pla: "pla",
                              }[e],
                            });
                        })(e, is),
                        t(e));
                  },
                  value: e,
                  "data-at": "simple-keyword-types",
                  "aria-label": a({
                    id: "ariaLabel.form.keywordType.simple",
                  }),
                  "data-path": is,
                },
                ye.CT.map((e) =>
                  n.createElement(
                    ns.A.Item,
                    {
                      key: e,
                      value: e,
                      "data-at": `pill-${e}`,
                    },
                    n.createElement(
                      ns.A.Item.Text,
                      null,
                      n.createElement(Ut.A, {
                        id: `keywordTypes.${e}Pills`,
                      })
                    )
                  )
                )
              ),
              n.createElement(i, {
                visible: o,
                onClose: () => l(!1),
                gaContext: os,
              })
            );
          };
        ss.propTypes = {
          value: w().oneOf([...ye.CT]),
          onTypeClick: w().func,
        };
        const cs = n.memo(ss);
        var ds = a(92485);
        function ps() {
          return (
            (ps = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ps.apply(null, arguments)
          );
        }
        const us = "keyword_gap.button.keyword_type",
          ms = ({ ...e }) => {
            const t = (0, l.wA)(),
              a = (0, l.d4)(so),
              { gaModeChange: r } = rs(),
              o = () => {
                t(Nn(a === ye.vV.simple ? ye.vV.advanced : ye.vV.simple)),
                  r(a, us);
              };
            return n.createElement(
              ds.A,
              ps(
                {
                  size: 200,
                  onClick: o,
                  onKeyUp: (e) => {
                    "Enter" === e.key && o();
                  },
                  "data-at": `mode-switcher to-mode-${a}`,
                  role: "button",
                  "aria-expanded": a === ye.vV.advanced,
                  "data-path": us,
                },
                e
              ),
              n.createElement(
                ds.A.Text,
                null,
                n.createElement(Ut.A, {
                  id: `panel.select${
                    a === ye.vV.simple ? "Multiple" : "Single"
                  }KwType`,
                })
              )
            );
          },
          ys = ({ targets: e = [], onClick: t = () => {} }) => {
            const a = Me(e),
              { gaCancelClick: r } = rs();
            return a
              ? n.createElement(
                  $t.A,
                  {
                    ml: 2,
                  },
                  n.createElement(
                    Vt.A,
                    {
                      w: "100%",
                      use: "secondary",
                      onClick: () => {
                        r(), Nn(ye.vV.simple), t();
                      },
                      "data-at": "cancel-btn",
                      "data-path": `${ts}.cancel`,
                    },
                    n.createElement(Ut.A, {
                      id: "buttons.cancel",
                    })
                  )
                )
              : null;
          };
        ys.propTypes = {
          onClick: w().func,
          targets: w().array,
        };
        const gs = n.memo(ys);
        var hs = a(34164);
        const fs = ({ onClick: e = () => {} }) =>
          n.createElement(
            Vt.A,
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
              Vt.A.Text,
              {
                tag: hs.A,
              },
              n.createElement(Ut.A, {
                id: "buttons.compare",
              })
            )
          );
        fs.propTypes = {
          onClick: w().func,
        };
        const bs = fs,
          Es = (0, ce.default)($t.A)`
  width: 100%;
  display: grid;
  column-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(102px, 1fr));
`,
          ks = ({ index: e, inactive: t = !1, isMain: a = !1 }) =>
            t
              ? n.createElement(Gr, {
                  radius: 12,
                  inactive: t,
                  "data-at": "competitor-circle comp-circle-inactive",
                })
              : a
              ? n.createElement(Kr, null)
              : n.createElement(Gr, {
                  radius: 12,
                  color: Hr(e),
                  "data-at": `competitor-circle comp-circle-${e}`,
                });
        ks.propTypes = {
          inactive: w().bool,
          isMain: w().bool,
          index: w().number.isRequired,
        };
        const ws = n.memo(ks),
          vs = ({
            triggerRef: e,
            hasError: t = !1,
            errorType: a = "",
            errorTooltipId: r = null,
            children: o = null,
          }) => {
            const l = t,
              { formatMessage: i } = (0, pe.A)();
            return n.createElement(
              Nr.Ay,
              {
                theme: "warning",
                visible: l,
                inline: !1,
              },
              n.createElement(
                Nr.Ay.Trigger,
                {
                  w: "100%",
                },
                n.createElement(
                  Fr.A,
                  {
                    size: "m",
                    ref: e,
                    state: t ? "invalid" : "normal",
                  },
                  o
                )
              ),
              n.createElement(
                Nr.Ay.Popper,
                {
                  id: r,
                  "aria-label": a
                    ? i({
                        id: `form.errors.${a}`,
                      })
                    : "",
                },
                a &&
                  n.createElement(
                    "span",
                    null,
                    n.createElement(Ut.A, {
                      id: `ariaLabel.errors.${a}`,
                    })
                  )
              )
            );
          };
        vs.propTypes = {
          triggerRef: w().oneOfType([
            w().func,
            w().shape({
              current: w().instanceOf(Element),
            }),
          ]).isRequired,
          children: w().node,
          hasError: w().bool,
          errorType: w().string,
          errorTooltipId: w().string,
        };
        const Ts = n.memo(vs),
          As = ({
            searchItem: e = "",
            isMain: t = !1,
            hasError: a = !1,
            selected: r = !1,
            index: o = 0,
            errorType: l = "",
            tldList: i,
            onChange: s = () => {},
            onSubmit: c = () => {},
            getTriggerProps: d = () => {},
            resetSelectedStatus: p = () => {},
          }) => {
            const { formatMessage: u } = (0, pe.A)(),
              m = (0, n.useRef)(),
              { gaClickClose: y, gaValidationError: g } = rs(),
              [h, f] = (0, n.useState)(!0),
              [b, E] = (0, n.useState)(e),
              [k, w] = (0, n.useState)(!1),
              v = (0, n.useId)(),
              T = (0, n.useCallback)(
                (e) => {
                  e && !Ie(e, i) ? (w("domainErr"), g(o)) : w("");
                },
                [o, g, i]
              );
            (0, n.useEffect)(() => {
              t && 0 === e.length && m.current.focus();
            }, [t, e.length]),
              (0, n.useEffect)(() => {
                E(e), e.length > 0 && (f(!1), T(e));
              }, [e, T]);
            const A = () => {
                f(!1), p();
              },
              C = () => {
                0 === b.length && (f(!0), w("")), e !== b && (T(b), s(b, o));
              },
              { ref: S } = d({
                onBlur: C,
                onFocus: A,
              });
            return n.createElement(
              Ts,
              {
                hasError: k || a,
                errorType: k || l,
                triggerRef: S,
                errorTooltipId: v,
              },
              n.createElement(
                Fr.A.Addon,
                null,
                n.createElement(ws, {
                  inactive: h,
                  isMain: t,
                  index: o,
                })
              ),
              n.createElement(Fr.A.Value, {
                onChange: (e) => E(e),
                onFocus: A,
                onBlur: C,
                onKeyUp: (e) => {
                  e.nativeEvent.stopImmediatePropagation(),
                    "Enter" === e.key && (r ? p() : (C(), c()));
                },
                value: b,
                ref: m,
                placeholder: u({
                  id: "panel.add" + (t ? "Domain" : "Competitor"),
                }),
                "aria-label": u({
                  id: "ariaLabel.enterUrl",
                }),
                "aria-describedby": a ? v : void 0,
                "data-at": "competitor-value",
              }),
              b.length > 0 &&
                n.createElement(Fr.A.Addon, {
                  tag: $r.A,
                  interactive: !0,
                  onClick: () => {
                    E(""), w(""), s("", o), y(o);
                  },
                  "data-at": "clear-competitor",
                  "aria-label": u({
                    id: "ariaLabel.clearInput",
                  }),
                })
            );
          };
        As.propTypes = {
          searchItem: w().string,
          onChange: w().func,
          onSubmit: w().func,
          isMain: w().bool,
          index: w().oneOf([0, 1, 2, 3, 4]),
          getTriggerProps: w().func,
          hasError: w().bool,
          errorType: w().oneOfType([w().string, w().bool]),
          selected: w().bool,
          resetSelectedStatus: w().func,
          tldList: w().instanceOf(Set).isRequired,
        };
        const Cs = n.memo(As),
          Ss = (0, ce.default)(er.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          xs = (0, ce.default)($t.A)`
  cursor: default;
  pointer-events: none;
  padding: 6px 8px;
`,
          Rs = ({
            children: e,
            suggestions: t = [],
            index: a = 0,
            onChange: r = () => {},
          }) => {
            const [o, l] = (0, n.useState)(!1),
              i = () => {
                l(!1);
              };
            return n.createElement(
              er.Ay,
              {
                interaction: "focus",
                onChange: (e) => {
                  l(!0), r(e, a);
                },
                value: null,
              },
              n.createElement(
                er.Ay.Trigger,
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
                    selected: o,
                    resetSelectedStatus: i,
                  })
              ),
              t.length > 0 &&
                n.createElement(
                  Ss,
                  {
                    "data-at": "competitors-list-suggest-dd",
                  },
                  n.createElement(
                    xs,
                    null,
                    n.createElement(
                      ir.A,
                      {
                        color: "gray-800",
                        bold: !0,
                        size: 200,
                        "data-at": "menu-title",
                      },
                      n.createElement(Ut.A, {
                        id: "targets.suggestCompetitors.header",
                      })
                    )
                  ),
                  t.map((e) =>
                    n.createElement(
                      er.Ay.Option,
                      {
                        value: e,
                        key: e,
                        direction: "row",
                        flexWrap: !0,
                        "data-at": "option",
                      },
                      Rt(e)
                    )
                  )
                )
            );
          };
        Rs.propTypes = {
          suggestions: w().array,
          index: w().oneOf([0, 1, 2, 3, 4]),
          onChange: w().func,
          children: w().element.isRequired,
        };
        const Ls = Rs,
          _s = ({
            domain: e,
            suggestions: t,
            errorIndex: a,
            index: r,
            errorType: o = null,
            tldList: l = new Set(),
            onChangeSearchItem: i = () => {},
            onClickSearchItem: s = () => {},
            onSubmitSearchItem: c = () => {},
          }) =>
            n.createElement(
              Ls,
              {
                suggestions: t,
                index: r,
                onChange: i,
              },
              n.createElement(Cs, {
                isMain: 0 === r,
                searchItem: Rt(e),
                index: r,
                hasError: !!o && a === r,
                errorType: o,
                tldList: l,
                onChange: i,
                onSubmit: c,
                onClick: s,
              })
            );
        _s.propTypes = {
          domain: w().string.isRequired,
          suggestions: w().array.isRequired,
          onChangeSearchItem: w().func,
          onClickSearchItem: w().func,
          onSubmitSearchItem: w().func,
          errorType: w().oneOfType([w().string, w().bool]),
          errorIndex: w().number.isRequired,
          index: w().number.isRequired,
          tldList: w().instanceOf(Set),
        };
        const Os = n.memo(_s),
          Ps = (0, ce.default)(er.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          Is = ye.vM.map((e) => ({
            value: e,
            children: e,
          })),
          Ms = ({
            selectedValue: e = ye.vM[0],
            defaultValue: t = ye.vM[0],
            index: a = 0,
            view: r = "link",
            onChange: o = () => {},
          }) => {
            const { formatMessage: l } = (0, pe.A)(),
              { gaChangeSearchType: i, gaOpenSearchType: s } = rs();
            return n.createElement(
              er.Ay,
              {
                size: "m",
                onChange: (t) => {
                  o(t, a), i(e, t, a + 1);
                },
                stretch: !1,
                value: e,
                onVisibleChange: (e) => {
                  e && s(a + 1);
                },
                "data-at": "search-type-select",
              },
              n.createElement(
                er.Ay.Trigger,
                {
                  color: "gray-800",
                  w: "100%",
                  tag: "link" === r ? ti.A : tr.A,
                  "data-at": "search-type-trigger",
                  inline: !1,
                  "aria-label": l({
                    id: "ariaLabel.form.selectScope",
                  }),
                  "data-path": `${ts}.scope`,
                },
                n.createElement(
                  er.Ay.Trigger.Text,
                  null,
                  n.createElement(Ut.A, {
                    id: `searchTypes.${e.length ? e : t}Type`,
                  })
                )
              ),
              n.createElement(
                Ps,
                {
                  "data-at": "search-type-dd",
                },
                Is.map(({ value: e }) =>
                  n.createElement(
                    er.Ay.Option,
                    {
                      value: e,
                      key: e,
                      direction: "row",
                      flexWrap: !0,
                      "data-at": `option-${e}`,
                    },
                    n.createElement(Ut.A, {
                      id: `searchTypes.${e}Type`,
                    })
                  )
                )
              )
            );
          };
        Ms.propTypes = {
          selectedValue: w().oneOf([...ye.vM]),
          defaultValue: w().string,
          onChange: w().func,
          index: w().oneOf([0, 1, 2, 3, 4]),
          view: w().oneOf(["link", "btn"]),
        };
        const Ds = n.memo(Ms),
          Fs = (0, ce.default)(er.Ay.Menu)`
  font-family: Inter, sans-serif;
`,
          Ns = ye.CT.map((e) => ({
            value: e,
            label: e,
          })),
          js = ({
            selectedValue: e = ye.CT[0],
            defaultValue: t = ye.CT[0],
            isActive: a = !0,
            isFeatureLimited: r = !1,
            index: o = 0,
            openModal: l = () => {},
            onChange: i = () => {},
          }) => {
            const { formatMessage: s } = (0, pe.A)(),
              { gaClickKeywordType: c } = rs(),
              d = ct();
            return n.createElement(
              er.Ay,
              {
                placeholder: s({
                  id: `keywordTypes.${t}Keywords`,
                }),
                onChange: (t) => {
                  let a = !1;
                  pn.has(t) && (a = pn.get(t)(d)),
                    r && a ? l() : (c(t, e, o), i(t, o));
                },
                value: e,
                disabled: !a,
                size: "m",
                tag: tr.A,
                "data-at": "keyword-type-selector",
              },
              n.createElement(
                er.Ay.Trigger,
                {
                  w: "100%",
                  "data-at": "keyword-type-selector-trigger",
                  "aria-label": s({
                    id: "ariaLabel.form.keywordType.adv",
                  }),
                  "data-path": `${ts}.keyword_type`,
                },
                n.createElement(Ut.A, {
                  id: `keywordTypes.${e}Keywords`,
                })
              ),
              n.createElement(
                Fs,
                {
                  "data-at": "keyword-type-selector-dd",
                },
                Ns.map(({ value: e }) =>
                  n.createElement(
                    er.Ay.Option,
                    {
                      value: e,
                      key: e,
                      direction: "row",
                      "data-at": `option-${e}`,
                      flexWrap: !0,
                    },
                    n.createElement(Ut.A, {
                      id: `keywordTypes.${e}Keywords`,
                    })
                  )
                )
              )
            );
          };
        js.propTypes = {
          selectedValue: w().oneOf([...ye.CT]),
          defaultValue: w().string,
          onChange: w().func,
          index: w().oneOf([0, 1, 2, 3, 4]),
          isFeatureLimited: w().bool,
          openModal: w().func,
          isActive: w().bool,
        };
        const qs = n.memo(js),
          $s = "enterOne",
          Us = (e) => {
            const [t, a] = (0, n.useState)("");
            return {
              resetError: () => a(""),
              error: t,
              setError: a,
              validateTargets: (t) => {
                return (
                  !t.some(({ searchItem: t }) =>
                    ((e, t) => !(0 === e.length || Ie(e, t)))(t, e)
                  ) &&
                  (Me(t)
                    ? ((r = t),
                      (n = ye.an),
                      Pe(r) >= n || (a("enterCompetitor"), !1))
                    : (a($s), !1))
                );
                var r, n;
              },
              findErrorIndex: (e) =>
                t === $s ? 0 : e.findIndex(({ searchItem: e }) => !e),
            };
          },
          Vs = ({
            targets: e,
            panelMode: t,
            onChangeSearchItem: a,
            onClickSearchItem: r,
            onSubmitSearchItem: o,
            onSearchTypeChange: l,
            onKeywordTypeChange: s,
            errorType: c = "",
            suggestions: d = [],
            tldList: p,
          }) => {
            const { findErrorIndex: u } = Us(p),
              { formatMessage: m } = (0, pe.A)(),
              y = e.filter(Xi).map(({ searchItem: e }) => e),
              g = ((h = d),
              (f = y),
              h?.filter((e) => !f.includes(e)) ?? []).slice(0, 4);
            var h, f;
            const b = u(e);
            return n.createElement(
              Es,
              {
                "data-at": "competitors-inputs",
              },
              e.map(
                ({ searchType: e, keywordType: d, searchItem: u = "" }, y) =>
                  n.createElement(
                    de.A,
                    {
                      direction: "column",
                      rowGap: 2,
                      key: y,
                      role: "group",
                      "data-at": "competitor-form",
                      "aria-label": m(
                        {
                          id:
                            "ariaLabel.targets." +
                            (0 === y ? "yourDomain" : "competitor"),
                        },
                        {
                          NUM: y,
                        }
                      ),
                    },
                    n.createElement(Ds, {
                      index: y,
                      selectedValue: e,
                      onChange: l,
                    }),
                    n.createElement(Os, {
                      index: y,
                      domain: u,
                      errorType: c,
                      errorIndex: b,
                      tldList: p,
                      suggestions: g,
                      onChangeSearchItem: a,
                      onClickSearchItem: r,
                      onSubmitSearchItem: o,
                    }),
                    t === ye.vV.advanced &&
                      n.createElement(
                        Jl,
                        {
                          requiredPlan: i.USER_ROLES.business,
                          limitContext: "pla",
                        },
                        ({ isFeatureLimited: e, openModal: t }) =>
                          n.createElement(qs, {
                            index: y,
                            isActive: void 0 !== u && u.length > 0,
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
        Vs.propTypes = {
          targets: w().array.isRequired,
          suggestions: w().array,
          errorType: w().string,
          panelMode: w().oneOf([ye.vV.simple, ye.vV.advanced]).isRequired,
          onChangeSearchItem: w().func.isRequired,
          onClickSearchItem: w().func.isRequired,
          onSubmitSearchItem: w().func.isRequired,
          onSearchTypeChange: w().func.isRequired,
          onKeywordTypeChange: w().func.isRequired,
          tldList: w().instanceOf(Set).isRequired,
        };
        const zs = Vs,
          Ks = ({
            targets: e,
            suggestions: t,
            error: a,
            tldList: r,
            onTypeTabClick: o,
            onCancel: i,
            onCompareClick: s,
            onKeywordTypeChange: c,
            onSearchTypeChange: d,
            onSearchItemClick: p,
            onChangeSearchItem: u,
          }) => {
            const m = (0, l.d4)(co),
              [y, g] = (0, n.useState)(m),
              h = (0, l.d4)(so),
              f = (0, n.useCallback)(
                (t) => {
                  t === ye.vV.simple &&
                    g(((e) => (e[0] ? e[0].keywordType : "organic"))(e));
                },
                [e]
              ),
              E = () => {
                ((e) => {
                  const t = e.filter(({ searchItem: e }) => "" !== e),
                    a = t.map(({ searchType: e }) => e).join(" ");
                  b({
                    action: as,
                    label: "submit domains",
                    value: `${t.length} + ${a}`,
                  }),
                    b({
                      action: as,
                      label: `Load - ${t.length}`,
                    });
                })(e),
                  s(y);
              };
            return n.createElement(
              de.A,
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
                  de.A,
                  null,
                  n.createElement(zs, {
                    targets: e,
                    errorType: a,
                    suggestions: t,
                    panelMode: h,
                    tldList: r,
                    onChangeSearchItem: u,
                    onClickSearchItem: p,
                    onSubmitSearchItem: E,
                    onSearchTypeChange: d,
                    onKeywordTypeChange: c,
                  }),
                  n.createElement(
                    de.A,
                    {
                      wMin: 180,
                      pt: "26px",
                      direction: "column",
                    },
                    n.createElement(
                      de.A,
                      null,
                      n.createElement(bs, {
                        onClick: E,
                      }),
                      n.createElement(gs, {
                        targets: e,
                        onClick: () => {
                          g("organic"), i();
                        },
                      })
                    ),
                    h === ye.vV.advanced &&
                      n.createElement(
                        $t.A,
                        {
                          pl: 2,
                          pt: 3,
                        },
                        n.createElement(ms, {
                          onChange: f,
                        })
                      )
                  )
                ),
                h === ye.vV.simple &&
                  n.createElement(
                    de.A,
                    {
                      alignItems: "center",
                      mt: 2,
                      justifyContent: "left",
                    },
                    n.createElement(cs, {
                      value: y,
                      onTypeClick: (e) => {
                        g(e), o(e);
                      },
                    }),
                    n.createElement(
                      $t.A,
                      {
                        pl: 2,
                        wMin: 180,
                        boxSizing: !0,
                      },
                      n.createElement(ms, {
                        onChange: f,
                      })
                    )
                  )
              )
            );
          };
        Ks.propTypes = {
          onCancel: w().func.isRequired,
          targets: w().array.isRequired,
          suggestions: w().array.isRequired,
          onTypeTabClick: w().func.isRequired,
          onCompareClick: w().func.isRequired,
          onKeywordTypeChange: w().func.isRequired,
          onSearchTypeChange: w().func.isRequired,
          onSearchItemClick: w().func.isRequired,
          onChangeSearchItem: w().func.isRequired,
          error: w().string.isRequired,
          tldList: w().instanceOf(Set).isRequired,
        };
        const Bs = Ks,
          Js = () => {
            const e = (0, l.wA)(),
              t = (0, Re.useTldList)(),
              { error: a, resetError: r, validateTargets: o } = Us(t),
              i = (0, l.d4)(lo.N3),
              s = (0, l.d4)(so),
              c = (0, l.d4)(He.Lf),
              d = (0, l.d4)(He.Pf),
              p = (0, l.d4)(He.dW),
              u = (0, n.useMemo)(() => c || p?.db, [c, p]),
              m = (0, n.useMemo)(() => d || p?.device, [d, p]),
              [y, g] = (0, n.useState)([]),
              [h, f] = (0, n.useState)(i.length ? i : es());
            (0, n.useEffect)(() => f(i), [i]);
            const E = (0, n.useMemo)(() => {
                const e = h.filter(Xi);
                if (0 !== e.length) return e[0].searchItem;
              }, [h]),
              k = (0, n.useCallback)(async () => {
                if (null == u) return;
                if (!E) return;
                const e = {
                    db: u,
                    device: m,
                    searchItem: Lt(E),
                  },
                  t = Zi.requestIdStore.getRequestId(e),
                  a = await kt({
                    ...e,
                    requestId: t,
                  });
                g(a);
              }, [u, m, E]);
            (0, n.useEffect)(() => {
              ((e) => {
                const t = e.filter((e) => "" !== e.searchItem);
                b({
                  action: as,
                  label: `Load - ${t.length}`,
                });
              })(h);
            }, [c, d, E]),
              (0, n.useEffect)(() => {
                k();
              }, [k]);
            const w = () => g([]),
              v = (0, n.useCallback)(
                (e, t, a) => {
                  const r = h;
                  (r[a] = {
                    ...r[a],
                    [e]: Lt(t.trim()),
                  }),
                    f([...r]),
                    0 === r.filter(Xi).length && w();
                },
                [h]
              ),
              T = (0, n.useCallback)(
                (t) => {
                  if (!o(h)) return;
                  let a = h.map((e) => ({
                    ...e,
                    keywordType: s === ye.vV.simple ? t : e.keywordType,
                  }));
                  (a = a.sort((e, t) => (t.searchItem.length ? 1 : -1))),
                    f([...a]),
                    e(jn(t)),
                    e(Kn([...a]));
                },
                [h, s, e, o]
              ),
              A = (0, n.useCallback)((e, t) => v("searchType", e, t), [v]),
              C = (0, n.useCallback)(
                (e, t) => {
                  r(),
                    v("searchItem", e, t),
                    v("searchType", $e(e), t),
                    0 === t && k();
                },
                [r, v, k]
              ),
              S = (0, n.useCallback)(
                (e, t) => {
                  v("keywordType", e, t);
                },
                [v]
              ),
              x = (0, n.useCallback)(() => {
                f(es()), w();
              }, []);
            return n.createElement(Bs, {
              targets: h,
              suggestions: y,
              error: a,
              tldList: t,
              onCancel: x,
              onTypeTabClick: T,
              onCompareClick: T,
              onKeywordTypeChange: S,
              onSearchTypeChange: A,
              onSearchItemClick: r,
              onChangeSearchItem: C,
            });
          },
          Ws = n.memo(Js);
        var Gs = a(11608),
          Ys = a(96443);
        function Hs() {
          return (
            (Hs = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Hs.apply(null, arguments)
          );
        }
        const Qs = ({ style: e = {}, children: t = null, ...a }) =>
          n.createElement(
            Ys.A,
            Hs(
              {
                boxSizing: "border-box",
                p: 0,
                style: e,
                tag: "section",
              },
              a
            ),
            n.createElement(
              Ys.A.Body,
              {
                p: 0,
              },
              t
            )
          );
        Qs.propTypes = {
          children: w().oneOfType([w().element, w().array]),
          style: w().object,
        };
        const Zs = Qs;
        function Xs() {
          return (
            (Xs = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Xs.apply(null, arguments)
          );
        }
        const ec = ({ children: e = null, dividerProps: t = {}, ...a }) =>
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              de.A,
              Xs(
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
            n.createElement(
              zt.A,
              Xs(
                {
                  orientation: "horizontal",
                  mb: 5,
                },
                t
              )
            )
          );
        ec.propTypes = {
          children: w().element,
          dividerProps: w().object,
        };
        const tc = ec,
          ac = "topOpportunities",
          rc = "keywordOverlapChart",
          nc = "keywordsTable",
          oc = () => {
            const e = (0, l.wA)(),
              t = (0, n.useCallback)((t) => e(qn(t)), [e]);
            return t;
          };
        function lc() {
          return (
            (lc = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            lc.apply(null, arguments)
          );
        }
        const ic = ({
          value: e,
          types: t = [],
          onClick: a = () => {},
          ...r
        }) => {
          const { formatMessage: o } = (0, pe.A)();
          return n.createElement(
            ns.A,
            lc(
              {
                value: e,
                onChange: a,
                "data-at": "top-opp-type-switcher",
                "aria-label": o({
                  id: "ariaLabel.keywordType",
                }),
                "aria-controls": ac,
              },
              r
            ),
            t.map((e) =>
              n.createElement(
                ns.A.Item,
                {
                  value: e,
                  key: e,
                  "data-at": `top-opp-type-pill-${e}`,
                  tag: Nr.Ay,
                  timeout: Kt.a4,
                  title: n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      ir.A,
                      {
                        bold: !0,
                      },
                      n.createElement(Ut.A, {
                        id: `keywords.${e}Keywords`,
                      })
                    ),
                    n.createElement(
                      $t.A,
                      {
                        mt: 1,
                      },
                      n.createElement(Ut.A, {
                        id: `keywords.${e}Tooltip`,
                      })
                    )
                  ),
                },
                n.createElement(Ut.A, {
                  id: `keywords.${e}`,
                })
              )
            )
          );
        };
        ic.propTypes = {
          value: w().string.isRequired,
          types: w().array,
          onClick: w().func,
        };
        const sc = ic;
        var cc = a(25761),
          dc = a(82152);
        function pc() {
          return (
            (pc = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            pc.apply(null, arguments)
          );
        }
        const uc = ({ height: e = 8, width: t = "100%", ...a }) =>
          n.createElement(
            cr.A,
            pc(
              {
                height: e,
                width: t,
              },
              a
            ),
            n.createElement(cr.A.Text, {
              amount: 1,
              width: t,
            })
          );
        uc.propTypes = {
          height: w().number,
          width: w().oneOfType([w().string, w().number]),
        };
        const mc = (0, n.memo)(uc);
        function yc() {
          return (
            (yc = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            yc.apply(null, arguments)
          );
        }
        const gc = ({
          keyword: e,
          db: t = "us",
          device: a = "desktop",
          date: r = null,
          dateType: o = 0,
          gaAction: l = "",
          currency: i = "usd",
          onClick: s = () => {},
          ...c
        }) => {
          const { formatMessage: d } = (0, pe.A)(),
            p = (0, n.useCallback)(() => {
              s(),
                l &&
                  b({
                    action: l,
                    label: "click to keyword",
                  });
            }, [l, s]),
            u = (({
              db: e,
              date: t,
              dateType: a,
              keyword: r,
              device: n,
              currency: o,
            }) => {
              const l = {
                db: e,
                currency: o,
                device: Kt.W[n],
                date: a === Kt.J5.monthly ? t.slice(0, 6) : "",
                q: encodeURIComponent(r),
              };
              return `/analytics/keywordoverview/?${_t(l)}`;
            })({
              db: t,
              date: r,
              dateType: o,
              device: a,
              keyword: e,
              currency: i,
            });
          return n.createElement(
            Ki.A,
            yc(
              {
                onClick: p,
                href: u,
                noWrap: !1,
                inline: !0,
                size: 200,
                "aria-label": d(
                  {
                    id: "ariaLabel.keywordOverview.keywordLink",
                  },
                  {
                    KEYWORD: e,
                  }
                ),
              },
              c
            ),
            e
          );
        };
        gc.propTypes = {
          db: w().string,
          date: w().oneOfType([w().number, w().string]),
          dateType: w().number,
          device: w().oneOf(["desktop", "mobile"]),
          keyword: w().string.isRequired,
          gaAction: w().string,
          currency: w().string,
          onClick: w().func,
        };
        const hc = (0, l.Ng)((e) => {
          const {
            db: t,
            date: a,
            device: r,
            dateType: n,
            currency: o,
          } = (0, He.eF)(e);
          return {
            db: t,
            date: a,
            device: 0 === r ? "desktop" : 1 === r ? "mobile" : r,
            dateType: n,
            currency: o,
          };
        })(gc);
        var fc = a(15651),
          bc = a(40097),
          Ec = a.n(bc);
        const kc = {
          informational: 0,
          navigational: 1,
          commercial: 2,
          transactional: 3,
        };
        function wc() {
          return (
            (wc = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            wc.apply(null, arguments)
          );
        }
        const vc = ({
          positionRef: e = null,
          kd: t = null,
          intents: a = [],
          phrase: r,
          cpc: o,
          volume: i,
          onClick: s = () => {},
        }) => {
          (0, fc.setPosition)(e, 0);
          const { locale: c } = (0, pe.A)(),
            {
              db: d,
              currency: p,
              device: u,
              date: m,
              dateType: y,
            } = (0, l.d4)(He.eF),
            g = (0, n.useMemo)(() => ((0, bc.isNAValue)(t) ? null : t), [t]),
            h = ((e) =>
              e.map((e) =>
                Number.isInteger(e) ? kc[yl.INTENT_IDS.getType(e)] : kc[e]
              ))(a),
            f = ((e, t) => (0, l.d4)((a) => Ka(a, t, e)))(o, p);
          return n.createElement(
            de.A,
            {
              inline: !0,
              "data-at": "mini-ko",
              onClick: s,
            },
            n.createElement(
              fc.make,
              wc(
                {
                  userId: P.A.id,
                  apiKey: P.A.apiKey,
                  language: c,
                  productGroup: P.A.productGroup.toLowerCase(),
                  phrase: r,
                  cpc: f,
                  volume: i,
                  kd: g,
                  intents: h,
                  database: (0, St.m_)(d),
                  currency: p.toUpperCase(),
                  device: u === Kt.W.desktop ? "desktop" : "phone",
                  disablePortal: !1,
                  showTriggerIconTooltip: !0,
                },
                y === Ct.Monthly
                  ? {
                      date: m.slice(0, 6),
                    }
                  : {}
              )
            )
          );
        };
        vc.propTypes = {
          phrase: w().string.isRequired,
          positionRef: w().oneOfType([w().func, w().object]),
          cpc: w().number.isRequired,
          volume: w().number.isRequired,
          kd: w().number,
          intents: w().array,
          onClick: w().func,
        };
        const Tc = vc;
        function Ac() {
          return (
            (Ac = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Ac.apply(null, arguments)
          );
        }
        const Cc = (0, ce.default)($t.A)`
  position: relative;
  display: inline;
  word-break: break-all;
  white-space: break-spaces;
`,
          Sc = ({
            keyword: e = "",
            data: t = {},
            gaAction: a = "",
            positionRef: r = () => {},
            onClick: o = () => {},
            onMiniKOClick: l = () => {},
            ...i
          }) =>
            n.createElement(
              Cc,
              {
                pr: 5,
              },
              n.createElement(
                hc,
                Ac(
                  {
                    keyword: e,
                    gaAction: a,
                    onClick: o,
                  },
                  i
                )
              ),
              e?.length > 0 &&
                n.createElement(
                  $t.A,
                  {
                    position: "absolute",
                    ml: 1,
                    mt: "2px",
                    inline: !0,
                  },
                  n.createElement(Tc, {
                    phrase: e,
                    volume: t.volume,
                    cpc: t.cpc,
                    kd: t.keywordDifficulty,
                    intents: t.intents,
                    positionRef: r,
                    onClick: l,
                  })
                )
            );
        Sc.propTypes = {
          keyword: w().string,
          data: w().object,
          positionRef: w().any,
          gaAction: w().string,
          onClick: w().func,
          onMiniKOClick: w().func,
        };
        const xc = Sc,
          Rc = "Top Opportunities",
          Lc = "keyword_gap.top_opportunities",
          _c = (e) => () =>
            b({
              action: "No data",
              label: `${e} - all`,
            }),
          Oc = (e) => {
            return b({
              action: Rc,
              label: `click ${
                ((t = e), `${t.charAt(0).toUpperCase()}${t.slice(1)}`)
              } tab`,
            });
            var t;
          },
          Pc = (e) => () =>
            b({
              action: e,
              label: "click Clear filters",
            }),
          Ic = (e) => () =>
            b({
              action: e,
              label: "show Clear filters",
            }),
          Mc = (e) => (t) =>
            b({
              action: "No data",
              label: `${e} - ${t}`,
            }),
          Dc = (e) => () =>
            b({
              action: e,
              label: "click View details",
            }),
          Fc = ({ name: e, itemLocation: t, type: a }) => {
            Gl.A.track(Gl.A.eventName.click, {
              item_location: t,
              item_label: {
                keyword: "keyword",
                mini_ko: "mini_ko",
              }[e],
              type: a,
            });
          },
          Nc = () => {
            const e = "organic" === (0, l.d4)(yo) ? Rc : "Top Shared Keywords",
              t = Lc;
            return (0, n.useMemo)(
              () => ({
                gaNoData: _c(e),
                gaClearFilter: Pc(e),
                gaShowClearFilter: Ic(e),
                gaShowNoData: Mc(e),
                gaClickDetails: Dc(e),
                gaChangeType: Oc,
                getGaContext: () => e,
                gaWidgetNoData: () =>
                  Gl.h.gaWidgetNoData({
                    itemLocation: t,
                  }),
                gaWidgetSuccess: () =>
                  Gl.h.gaWidgetSuccess({
                    itemLocation: t,
                  }),
                gaWidgetSww: () =>
                  Gl.h.gaWidgetSww({
                    itemLocation: t,
                  }),
                gaDetailsClick: () =>
                  Gl.h.gaDetailsClick({
                    itemLocation: t,
                  }),
                gaKeywordClick: (e) =>
                  Fc({
                    itemLocation: t,
                    name: "keyword",
                    type: e,
                  }),
                gaMiniKoClick: (e) =>
                  Fc({
                    itemLocation: t,
                    name: "mini_ko",
                    type: e,
                  }),
              }),
              [e, t]
            );
          },
          jc = ({ value: e, type: t, data: a = {}, positionRef: r = {} }) => {
            const {
              getGaContext: o,
              gaKeywordClick: l,
              gaMiniKoClick: i,
            } = Nc();
            return n.createElement(xc, {
              keyword: e,
              data: a,
              positionRef: r,
              gaAction: o(),
              size: 200,
              "data-at": "top-opp-keyword",
              onClick: () => {
                l(t);
              },
              onMiniKOClick: () => {
                i(t);
              },
            });
          };
        jc.propTypes = {
          value: w().string.isRequired,
          data: w().object,
          positionRef: w().object,
          type: w().string.isRequired,
        };
        const qc = jc,
          $c = ({ isLoading: e = !1, data: t = [], type: a }) => {
            const r = (0, n.useRef)(),
              { formatMessage: o } = (0, pe.A)();
            return n.createElement(
              dc.Ay,
              {
                data: e
                  ? Array(5).fill({
                      keyword: "",
                      volume: 0,
                    })
                  : t,
                use: "secondary",
              },
              n.createElement(
                dc.Ay.Head,
                null,
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "keyword",
                    justifyContent: "flex-start",
                    pl: 5,
                    pr: 0,
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    title: o({
                      id: "opportunities.keyword.tooltip",
                    }),
                    placement: "top-start",
                  },
                  n.createElement(Ut.A, {
                    id: "opportunities.keyword",
                  })
                ),
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "volume",
                    justifyContent: "flex-end",
                    px: 5,
                    ref: r,
                    wMin: 120,
                    flex: 0,
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    title: o({
                      id: "opportunities.volume.tooltip",
                    }),
                    placement: "top",
                  },
                  n.createElement(Ut.A, {
                    id: "opportunities.volume",
                  })
                )
              ),
              n.createElement(
                dc.Ay.Body,
                null,
                n.createElement(dc.Ay.Row, null, () => ({
                  "data-at": "top-opp-row",
                })),
                n.createElement(
                  dc.Ay.Cell,
                  {
                    name: "keyword",
                    alignItems: "center",
                    pl: 5,
                    pr: 2,
                  },
                  ({ name: t }, o) => ({
                    children: e
                      ? n.createElement(mc, {
                          width: "170px",
                        })
                      : n.createElement(qc, {
                          value: o?.[t],
                          data: o,
                          positionRef: r,
                          type: a,
                        }),
                    "data-at": "top-opp-cell-keyword",
                  })
                ),
                n.createElement(
                  dc.Ay.Cell,
                  {
                    name: "volume",
                    alignItems: "baseline",
                    pl: 2,
                    pr: 5,
                  },
                  ({ name: t }, a) => ({
                    children: e
                      ? n.createElement(mc, {
                          width: "90px",
                        })
                      : n.createElement(
                          ir.A,
                          {
                            size: 200,
                            "data-at": "top-opp-volume",
                          },
                          n.createElement(cc.FormattedNumber, {
                            value: a?.[t],
                          })
                        ),
                    "data-at": "top-opp-cell-volume",
                  })
                )
              )
            );
          };
        $c.propTypes = {
          isLoading: w().bool,
          data: w().array,
          type: w().string.isRequired,
        };
        const Uc = n.memo($c),
          Vc = (e, t = 0) => {
            const a = document.getElementById(e);
            if (!a) return;
            const r =
              a.getBoundingClientRect().top + window.pageYOffset - 61 + t;
            window.scrollTo({
              top: r,
              behavior: "smooth",
            });
          },
          zc = ({ onClick: e = () => {}, isFeatureLimited: t = !1 }) => {
            const { formatMessage: a } = (0, pe.A)(),
              { gaClickDetails: r, gaDetailsClick: o } = Nc();
            return n.createElement(
              Vt.A,
              {
                onClick: () => {
                  t ||
                    (r(),
                    o(),
                    setTimeout(() => {
                      Vc("kg_table_header", -5);
                    }, 100),
                    e());
                },
                theme: "info",
                use: "primary",
                "data-at": "top-opp-view-full-report-btn",
                "aria-label": a({
                  id: "ariaLabel.viewDetails",
                }),
                "data-path": `${Lc}.view_details`,
              },
              n.createElement(Ut.A, {
                id: "buttons.viewDetails",
              })
            );
          };
        zc.propTypes = {
          onClick: w().func,
          isFeatureLimited: w().bool,
        };
        const Kc = zc;
        var Bc = a(3360);
        const Jc = (0, ce.default)(de.A)`
  color: #a6b0b3;

  &:hover {
    color: #64787e;
  }
`;
        function Wc() {
          return (
            (Wc = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Wc.apply(null, arguments)
          );
        }
        const Gc = (0, ce.default)(Nr.Ay.Popper)`
  font-family: Inter, sans-serif;
`,
          Yc = ({ tooltip: e = null, ...t }) =>
            e
              ? n.createElement(
                  Jc,
                  null,
                  n.createElement(
                    Nr.Ay,
                    null,
                    n.createElement(
                      Nr.Ay.Trigger,
                      Wc(
                        {
                          tabIndex: 0,
                          tag: de.A,
                          alignItems: "center",
                        },
                        t
                      ),
                      n.createElement(Bc.A, null)
                    ),
                    n.createElement(
                      Gc,
                      {
                        ignorePortalsStacking: !0,
                      },
                      e
                    )
                  )
                )
              : null;
        Yc.propTypes = {
          tooltip: w().oneOfType([w().string, w().object]),
        };
        const Hc = Yc,
          Qc = ({ keywordType: e = "organic" }) => {
            const { formatMessage: t } = (0, pe.A)();
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                Gs.WidgetTitle,
                null,
                n.createElement(
                  hs.A,
                  null,
                  n.createElement(Ut.A, {
                    id:
                      "opportunities." +
                      ("organic" === e ? "title" : "titleCommon"),
                  })
                )
              ),
              n.createElement(
                $t.A,
                null,
                "organic" === e
                  ? n.createElement(
                      $t.A,
                      {
                        inline: !0,
                        ml: 2,
                      },
                      n.createElement(Kr, null)
                    )
                  : n.createElement(Hc, {
                      tooltip: t({
                        id: "opportunities.titleCommonTooltip",
                      }),
                    })
              )
            );
          };
        Qc.propTypes = {
          keywordType: w().string,
        };
        const Zc = n.memo(Qc),
          Xc = (0, ke.VP)("clearAllFilters"),
          ed = (e) => {
            const t = e.toUpperCase(),
              a = ((e) =>
                (0, ke.VP)(`${e}/requestSetFilter`, (t) => ({
                  value: t,
                  name: e,
                })))(t),
              r = ((e) =>
                (0, ke.VP)(`${e}/setFilter`, (e) => ({
                  value: e,
                })))(t),
              n = ((e) => (0, ke.VP)(`${e}/clearFilter`, () => ({})))(t);
            return {
              requestSetFilter: a,
              setFilter: r,
              clearFilter: n,
            };
          },
          td = ed("position"),
          ad = ed("volume"),
          rd = ed("search"),
          nd = ed("keywordDifficulty"),
          od = ed("intent"),
          ld = (0, ke.VP)("setAdvancedFilter", (e) => ({
            data: e,
          })),
          id = (0, ke.VP)("requestApplyAdvancedFilter", (e = !1) => ({
            skipGa: e,
          })),
          sd = (0, ke.VP)("requestApplyAdvancedFilter", (e) => ({
            filters: e,
          })),
          cd = (0, ke.VP)("addEmptyAdvancedFilter"),
          dd = (0, ke.VP)("removeAdvancedFilter", (e) => ({
            id: e,
          })),
          pd = (0, ke.VP)("setAdvancedFieldValue", (e, t, a) => ({
            id: e,
            name: t,
            value: a,
          })),
          ud = (0, ke.VP)("clearAdvancedAppliedFilter"),
          md = (0, ke.VP)("applyFilters"),
          yd = (0, ke.VP)("setFromURL", (e) => ({
            data: e,
          })),
          gd = (0, ke.VP)("filterReady"),
          hd = {
            position: td,
            volume: ad,
            search: rd,
            keyworddifficulty: nd,
            intent: od,
          },
          fd = ({ type: e }) => {
            const {
                gaClearFilter: t,
                gaShowClearFilter: a,
                gaShowNoData: r,
              } = Nc(),
              o = (0, l.wA)(),
              i = (0, l.d4)(Bo);
            return (
              (0, n.useEffect)(() => {
                i ? a() : r(e);
              }, [i, e, a, r]),
              n.createElement(
                de.A,
                {
                  w: "100%",
                  direction: "column",
                  alignItems: "center",
                  mt: 10,
                  px: 5,
                  boxSizing: !0,
                },
                n.createElement(
                  lr.Header,
                  {
                    tag: "h6",
                    mb: 1,
                    color: "gray-500",
                  },
                  n.createElement(Ut.A, {
                    id: `noresults.${e}Title`,
                  })
                ),
                n.createElement(
                  ir.A,
                  {
                    color: "gray-500",
                    size: 200,
                    textAlign: "center",
                  },
                  n.createElement(Ut.A, {
                    id: `noresults.${e}Keywords`,
                  })
                ),
                i &&
                  n.createElement(
                    $t.A,
                    {
                      mt: 4,
                    },
                    n.createElement(
                      Vt.A,
                      {
                        theme: "muted",
                        onClick: () => {
                          t(), o(Xc());
                        },
                      },
                      n.createElement(Ut.A, {
                        id: "noresults.clearFilters",
                      })
                    )
                  )
              )
            );
          };
        fd.propTypes = {
          type: w().oneOf([ye.SJ.missing, ye.SJ.weak, ye.SJ.common]).isRequired,
        };
        const bd = fd,
          Ed = [ye.SJ.missing, ye.SJ.weak],
          kd = (0, ce.default)(Zs)`
  flex-shrink: 0;
`,
          wd = () => {
            const { formatMessage: e } = (0, pe.A)(),
              {
                gaNoData: t,
                gaChangeType: a,
                gaWidgetNoData: r,
                gaWidgetSuccess: o,
                gaWidgetSww: i,
              } = Nc(),
              [s, c] = (0, n.useState)(y.get(F) || ye.SJ.missing),
              d = (0, l.d4)(Po),
              p = (0, l.d4)(Lo),
              u = (0, l.d4)(Io),
              m = (0, l.d4)(_o),
              g = (0, l.d4)(yo),
              h = oc(),
              f = "organic" === g ? s : ye.SJ.common,
              b = (0, n.useCallback)(() => {
                t(), r();
              }, [t, r]),
              E = (0, n.useCallback)(() => {
                i();
              }, [i]);
            (0, n.useEffect)(() => {
              p || m || u || o();
            }, [o, p, m, u]);
            const k = d?.[f] ?? [],
              w = 0 === k.length;
            return n.createElement(
              kd,
              {
                className: "style-module__card___kg06z",
                hMin: 370,
                "data-at": "top-opportunities",
                "aria-label": e({
                  id:
                    "opportunities." +
                    ("organic" === g ? "title" : "titleCommon"),
                }),
                "data-path": Lc,
              },
              n.createElement(
                tc,
                {
                  justifyContent: "flex-start",
                },
                n.createElement(Zc, {
                  keywordType: g,
                })
              ),
              n.createElement(
                Gs.WidgetContent,
                {
                  isNoData: u,
                  isError: m,
                  type: "table",
                  px: u ? 5 : 0,
                  onError: E,
                  onNoData: b,
                },
                n.createElement(
                  $t.A,
                  null,
                  "organic" === g &&
                    n.createElement(sc, {
                      onClick: (e) => {
                        c(e), a(e), y.set(F, e);
                      },
                      value: s,
                      types: Ed,
                      ml: 5,
                      mb: 5,
                    }),
                  n.createElement(
                    $t.A,
                    {
                      "data-at": "top-opp-table",
                      id: ac,
                    },
                    n.createElement(Uc, {
                      data: k,
                      isLoading: p,
                      type: s,
                    }),
                    !p &&
                      !k.length &&
                      n.createElement(bd, {
                        type: f,
                      })
                  )
                ),
                n.createElement(
                  $t.A,
                  {
                    m: 5,
                  },
                  !(w || u || "organic" !== g) &&
                    n.createElement(
                      Jl,
                      {
                        limitContext: "filters",
                      },
                      n.createElement(Kc, {
                        onClick: () => {
                          h({
                            intersectionType: s,
                          });
                        },
                      })
                    )
                )
              )
            );
          };
        var vd = a(13719);
        const Td = (0, ke.VP)("requestKeywordsTotal"),
          Ad = (0, ke.VP)("getKeywordsTotalSuccess", (e) => ({
            data: e,
          }));
        var Cd = a(19153);
        const Sd = (e) => [...e, ...new Array(5 - e.length).fill(D)],
          xd = (e, t) => {
            const a = Number.parseInt(t, 10),
              r = [...e];
            return (
              !Number.isNaN(a) && r?.[a] && ([r[0], r[a]] = [r[a], r[0]]), Sd(r)
            );
          },
          Rd = (e) => (Array.isArray(e) ? e.join("/") : ""),
          Ld = (e) => ("string" != typeof e ? [] : e.split("/")),
          _d = (e, t) => Ve(e, t),
          Od = () => (0, l.d4)(lo.lG),
          Pd = "Keyword Overlap",
          Id = "keyword_gap.keyword_overlap",
          Md = ({ type: e }) =>
            n.createElement(
              $t.A,
              {
                pl: 5,
              },
              n.createElement(
                ir.A,
                {
                  size: 100,
                  color: "gray-500",
                },
                n.createElement(Ut.A, {
                  id: `keywordTypes.short.${e}`,
                })
              )
            );
        Md.propTypes = {
          type: w().oneOf(["organic", "adwords", "pla"]).isRequired,
        };
        const Dd = Md;
        var Fd = a(4243);
        const Nd = () =>
            n.createElement(
              Nr.Ay,
              {
                interaction: "hover",
                placement: "right",
              },
              n.createElement(
                Nr.Ay.Trigger,
                null,
                n.createElement(
                  $t.A,
                  {
                    ml: 2,
                  },
                  n.createElement(Fd.A, {
                    color: "#ff7f00",
                  })
                )
              ),
              n.createElement(
                Nr.Ay.Popper,
                {
                  theme: "warning",
                },
                n.createElement(Ut.A, {
                  id: "noresults.keywordOverlap.recomendation",
                })
              )
            ),
          { useIntlHelpers: jd } = Le(),
          qd = (0, ce.default)(Cd.A)`
  width: 100%;
`,
          $d = ({
            target: e,
            searchType: t,
            value: a,
            id: r,
            active: o,
            onChangeVisible: l,
            keywordType: i,
            showType: s,
            isLoading: c,
          }) => {
            const { formatCompactNumber: d } = jd(),
              p = _d(e, t);
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                de.A,
                {
                  direction: "column",
                  "data-at": "overlap-competitor",
                },
                n.createElement(
                  qd,
                  {
                    theme: Hr(r),
                    "aria-label": e,
                    "data-path": `${Id}.checkbox`,
                  },
                  n.createElement(Cd.A.Value, {
                    mr: 1,
                    checked: o,
                    onChange: () => l(r),
                    "data-at": "competitor-checkbox",
                  }),
                  n.createElement(
                    ir.A,
                    {
                      tag: hs.A,
                      size: 200,
                      color: "gray-800",
                    },
                    p
                  )
                ),
                s
                  ? n.createElement(Dd, {
                      type: i,
                    })
                  : null
              ),
              n.createElement(
                de.A,
                {
                  justifyContent: "flex-end",
                },
                c
                  ? n.createElement(
                      cr.A,
                      {
                        hidden: !1,
                        w: 48,
                        h: 20,
                      },
                      n.createElement(cr.A.Text, {
                        y: "6px",
                        width: "100%",
                      })
                    )
                  : n.createElement(
                      de.A,
                      {
                        alignItems: "center",
                      },
                      n.createElement(
                        ir.A,
                        {
                          size: 200,
                          color: "gray-800",
                          "data-at": "overlap-competitor-size",
                        },
                        d(a)
                      ),
                      0 === a && n.createElement(Nd, null)
                    )
              )
            );
          };
        $d.propTypes = {
          target: w().string.isRequired,
          id: w().string.isRequired,
          active: w().bool.isRequired,
          onChangeVisible: w().func.isRequired,
          keywordType: w().oneOf([...ye.CT]).isRequired,
          searchType: w().oneOf([...ye.vM]).isRequired,
          showType: w().bool.isRequired,
          value: w().number.isRequired,
          isLoading: w().bool.isRequired,
        };
        const Ud = n.memo($d);
        function Vd() {
          return (
            (Vd = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Vd.apply(null, arguments)
          );
        }
        const zd = (0, ce.default)($t.A)`
  display: grid;
  grid-template-columns: minmax(20px, 1fr) auto;
  grid-row-gap: 8px;
  grid-column-gap: 16px;
`,
          Kd = ({
            hiddenIds: e,
            domains: t = [],
            onChangeVisible: a = () => {},
            isLoading: r = !1,
          }) => {
            const o = (0, n.useMemo)(
              () =>
                t.reduce((e, { keywordType: t }) => (e.add(t), e), new Set())
                  .size > 1,
              [t]
            );
            return (
              (() => {
                const e = (0, l.d4)(wo).filter((e) => 0 === e.size).length;
                (0, n.useEffect)(() => {
                  e > 0 &&
                    b({
                      action: Pd,
                      label: `show 0 keywords - ${e}`,
                    });
                }, [e]);
              })(),
              n.createElement(
                zd,
                {
                  "data-at": "overlap-competitors-list",
                  "aria-controls": rc,
                },
                t.map((t) =>
                  n.createElement(
                    Ud,
                    Vd({}, t, {
                      value: t.size,
                      key: t.id,
                      active: !e.has(t.id),
                      onChangeVisible: a,
                      showType: o,
                      isLoading: r,
                    })
                  )
                )
              )
            );
          };
        Kd.propTypes = {
          domains: w().array,
          hiddenIds: w().object.isRequired,
          onChangeVisible: w().func,
          isLoading: w().bool,
        };
        const Bd = n.memo(Kd);
        var Jd = a(92654),
          Wd = a(3884),
          Gd = a(99054),
          Yd = a(49840);
        const Hd = ({ dataKey: e, data: t = {} }) => {
          const a = e.length > 1;
          return n.createElement(
            de.A,
            {
              justifyContent: "space-between",
              direction: "row",
              pb: 2,
              "data-at": "overlap-tooltip-caption",
            },
            n.createElement(Ut.A, {
              id: "venn.tooltip.caption." + (a ? "overlap" : "single"),
            }),
            a
              ? n.createElement(
                  ir.A,
                  {
                    color: "gray-800",
                    fontWeight: "bold",
                    "data-at": "overlap-tooltip-caption-value",
                  },
                  n.createElement(cc.FormattedNumber, {
                    value: t[e],
                  })
                )
              : null
          );
        };
        Hd.propTypes = {
          dataKey: w().string.isRequired,
          data: w().object,
        };
        const Qd = Hd,
          Zd = (0, ce.default)($t.A)`
  min-width: 80px;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`,
          Xd = ({
            name: e = "",
            size: t = 0,
            fill: a = "#cccccc",
            searchType: r = "domain",
          }) =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                de.A,
                {
                  alignItems: "center",
                  "data-at": "overlap-tooltip-item-name",
                },
                n.createElement(Gr, {
                  color: a,
                }),
                n.createElement(
                  Zd,
                  {
                    pl: 1,
                    inline: !0,
                  },
                  _d(e, r)
                )
              ),
              n.createElement(
                de.A,
                {
                  justifyContent: "right",
                  inline: !0,
                  "data-at": "overlap-tooltip-item-value",
                },
                n.createElement(cc.FormattedNumber, {
                  value: t,
                })
              )
            );
        Xd.propTypes = {
          name: w().string,
          size: w().number,
          fill: w().string,
          searchType: w().string,
        };
        const ep = Xd,
          tp = (0, ce.default)($t.A)`
  padding-top: 8px;
  display: grid;
  grid-template-columns: minmax(20px, 1fr) auto;
  grid-row-gap: 8px;
  grid-column-gap: 16px;
`,
          ap = ({ dataKey: e, searchItems: t, data: a = {} }) => {
            const r = Ld(e);
            return n.createElement(
              $t.A,
              {
                "data-at": "overlap-tooltip",
              },
              n.createElement(Qd, {
                dataKey: e,
                data: a,
              }),
              n.createElement(zt.A, null),
              n.createElement(
                tp,
                null,
                r.map((e) =>
                  n.createElement(ep, {
                    key: e,
                    name: Rt(t[e].searchItem),
                    searchType: t[e].searchType,
                    size: a[e],
                    fill: Hr(e),
                  })
                )
              )
            );
          };
        ap.propTypes = {
          dataKey: w().string.isRequired,
          data: w().object,
          searchItems: w().array.isRequired,
        };
        const rp = ap,
          np = {
            UNIQUE: ye.SJ.unique,
            COMMON: ye.SJ.common,
          },
          op = {
            cursor: "pointer",
          },
          lp = ({
            series: e,
            searchItems: t,
            isFeatureLimited: a = !1,
            openModal: r = () => {
              console.log("D3Venn > openModal > Not implemented");
            },
          }) => {
            const o = (0, l.wA)(),
              i = (0, l.d4)(lo.qG),
              s = (0, l.d4)(lo.yo),
              c = (0, l.d4)(uo),
              [[d, p], u] = (0, n.useState)([0, 0]),
              m = e.reduce(
                (e, t) => ({
                  ...e,
                  [Rd(t.sets)]: t.size,
                }),
                {}
              ),
              y = (e) => {
                if (a) return void r();
                const t = Ld(e);
                var n;
                if (
                  ((n = t.length),
                  b({
                    action: Pd,
                    label: n > 1 ? `click intersect ${n}` : "click unique",
                  }),
                  Gl.A.track(Gl.A.eventName.click, {
                    item_location: `${Id}.click`,
                    item_label: n > 1 ? "crossing_part" : "outstanding_part",
                  }),
                  1 === t.length)
                ) {
                  const e = s[t[0]];
                  return (
                    (e.searchItem === i.searchItem &&
                      e.searchType === i.searchType &&
                      e.keywordType === i.keywordType) ||
                      o(Kn(xd(s, t[0]))),
                    void (
                      c !== np.UNIQUE &&
                      o(
                        qn({
                          intersectionType: np.UNIQUE,
                        })
                      )
                    )
                  );
                }
                if (t.length !== s.length) {
                  const e = s.filter((e, a) => t.includes(`${a}`));
                  o(Kn(Sd(e)));
                }
                c !== np.COMMON &&
                  o(
                    qn({
                      intersectionType: np.COMMON,
                    })
                  );
              };
            return n.createElement(
              Jd.A,
              {
                h: 308,
                w: "99.5%",
                onResize: u,
                id: rc,
              },
              n.createElement(
                Wd.A,
                {
                  width: d,
                  height: p,
                  data: m,
                },
                Object.keys(m).length > 0
                  ? n.createElement(
                      Gd.A,
                      {
                        minRadius: 6,
                      },
                      Object.keys(m).map((e) =>
                        e.length > 1
                          ? n.createElement(Gd.A.Intersection, {
                              onClick: () => y(e),
                              key: e,
                              dataKey: e,
                              duration: 0,
                              "data-at": `venn-intersection-${e}`,
                              "aria-haspopup": !!a && "dialog",
                              style: op,
                              "data-path": `${Id}.click`,
                            })
                          : n.createElement(Gd.A.Circle, {
                              onClick: () => y(e),
                              key: e,
                              dataKey: e,
                              color: Hr(e),
                              duration: 0,
                              "data-at": `venn-${e}`,
                              "aria-haspopup": !!a && "dialog",
                              style: op,
                              "data-path": `${Id}.click`,
                            })
                      ),
                      n.createElement(
                        Yd.A,
                        null,
                        ({ dataKey: e, data: a }) => ({
                          children: n.createElement(rp, {
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
        lp.propTypes = {
          series: w().array.isRequired,
          searchItems: w().array.isRequired,
          isFeatureLimited: w().bool,
          openModal: w().func,
        };
        const ip = lp;
        function sp() {
          return (
            (sp = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            sp.apply(null, arguments)
          );
        }
        const cp = (0, ce.default)(de.A)`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 288px;
`,
          dp = ({ ...e }) => {
            const { formatMessage: t } = (0, pe.A)(),
              a = (0, l.wA)(),
              [r, o] = (0, n.useState)(new Set()),
              i = (0, l.d4)(bo),
              s = (0, l.d4)(ko),
              c = (0, l.d4)(Co),
              d = (0, l.d4)(Eo),
              p = (0, l.d4)(wo),
              {
                gaWidgetNoData: u,
                gaWidgetSuccess: m,
                gaWidgetSww: y,
              } = (() => {
                const e = Id;
                return (0, n.useMemo)(
                  () => ({
                    gaWidgetNoData: () =>
                      Gl.h.gaWidgetNoData({
                        itemLocation: e,
                      }),
                    gaWidgetSuccess: () =>
                      Gl.h.gaWidgetSuccess({
                        itemLocation: e,
                      }),
                    gaWidgetSww: () =>
                      Gl.h.gaWidgetSww({
                        itemLocation: e,
                      }),
                  }),
                  [e]
                );
              })(),
              g = (0, n.useMemo)(
                () =>
                  p.map(({ target: e, searchType: t }) => ({
                    searchItem: e,
                    searchType: t,
                  })),
                [p]
              ),
              h = (0, n.useMemo)(
                () => d.filter(({ sets: e }) => e.every((e) => !r.has(e))),
                [d, r]
              ),
              f = (0, n.useCallback)(
                (e) => {
                  var t;
                  (t = r.has(e)),
                    b({
                      action: Pd,
                      label: "click checkbox - " + (t ? "on" : "off"),
                    }),
                    Gl.A.track(Gl.A.eventName.click, {
                      item_location: `${Id}.checkbox`,
                    }),
                    r.has(e)
                      ? o(new Set([...r].filter((t) => t !== e)))
                      : o(new Set(r.add(e)));
                },
                [r]
              ),
              E = (0, n.useCallback)(() => a(Td()), [a]),
              k = (0, n.useCallback)(() => {
                y();
              }, [y]),
              w = (0, n.useCallback)(() => {
                u();
              }, [u]);
            return (
              (0, n.useEffect)(() => {
                i || c || !s || m();
              }, [c, s, i, m]),
              n.createElement(
                Zs,
                sp(
                  {
                    hMin: 370,
                    wMin: 605,
                    flex: "1 1 auto",
                  },
                  e,
                  {
                    "data-at": "overlap",
                    "aria-label": t({
                      id: "overlapChart.caption",
                    }),
                    "data-path": Id,
                  }
                ),
                n.createElement(
                  tc,
                  {
                    justifyContent: "flex-start",
                  },
                  n.createElement(
                    Gs.WidgetTitle,
                    null,
                    n.createElement(Ut.A, {
                      id: "overlapChart.caption",
                    })
                  )
                ),
                n.createElement(
                  Gs.WidgetContent,
                  {
                    isNoData: !s && !i,
                    isError: c,
                    onNoData: w,
                    onError: k,
                    onReload: E,
                    type: "venn-chart",
                  },
                  n.createElement(
                    de.A,
                    {
                      mx: 5,
                    },
                    n.createElement(
                      $t.A,
                      {
                        mr: 6,
                        wMin: 345,
                        wMax: 450,
                      },
                      n.createElement(
                        Jl,
                        {
                          limitContext: "filters",
                        },
                        ({ isFeatureLimited: e, openModal: t }) =>
                          i
                            ? n.createElement(
                                cp,
                                null,
                                n.createElement(vd.A, {
                                  w: 200,
                                })
                              )
                            : n.createElement(ip, {
                                series: h,
                                searchItems: g,
                                isFeatureLimited: e,
                                openModal: t,
                              })
                      )
                    ),
                    n.createElement(
                      $t.A,
                      {
                        wMin: 224,
                      },
                      n.createElement(Bd, {
                        domains: p,
                        hiddenIds: r,
                        onChangeVisible: f,
                        isLoading: i,
                      })
                    )
                  )
                )
              )
            );
          },
          pp = n.memo(dp),
          up = function (e) {
            const t = (0, n.useMemo)(() => (Array.isArray(e) ? e : [e]), [e]),
              a = Boolean(window?.matchMedia),
              [r, o] = (0, n.useState)(
                t.map((e) => !!a && !!window.matchMedia(e).matches)
              );
            return (
              (0, n.useLayoutEffect)(() => {
                if (!a) return;
                const e = t.map((e) => window.matchMedia(e)),
                  r = e.map((e, t) => {
                    const a = () =>
                      o((a) => a.map((a, r) => (t === r ? !!e.matches : a)));
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
          mp = (0, ce.default)(de.A)`
  max-width: calc(100vw - 20px);
  min-width: 970px;
`,
          yp = (0, ce.default)(de.A)`
  margin-left: 8px;

  &:first-child {
    margin-left: 0;
  }
`;
        function gp() {
          return (
            (gp = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            gp.apply(null, arguments)
          );
        }
        const hp = ({ style: e = {}, children: t = null, ...a }) =>
          n.createElement(
            yp,
            gp({}, a, {
              style: {
                ...(e || {}),
              },
            }),
            n.createElement(
              $t.A,
              {
                w: "100%",
              },
              t
            )
          );
        hp.propTypes = {
          children: w().node,
          style: w().object,
        };
        const fp = hp,
          bp = (0, n.createContext)({});
        function Ep() {
          return (
            (Ep = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Ep.apply(null, arguments)
          );
        }
        const kp = (e, t, a) => {
            const r = a.indexOf(!0);
            return -1 === r ? {} : e.get(t[r]) || {};
          },
          wp = ({ config: e = {}, children: t = null, ...a }) => {
            const r = (0, n.useMemo)(() => [...e.keys()], [e]),
              o = up(r),
              { formatMessage: l } = (0, pe.A)(),
              i = (0, n.useCallback)((e) => {
                e.preventDefault(), e.stopPropagation();
              }, []),
              s = (0, n.useMemo)(
                () => ({
                  ...e.get("default"),
                  ...kp(e, r, o),
                }),
                [e, r, o]
              );
            return n.createElement(
              mp,
              Ep(
                {
                  tag: "form",
                  action: "",
                  onSubmit: i,
                  "aria-label": l({
                    id: "ariaLabel.filters",
                  }),
                },
                a
              ),
              n.createElement(
                bp.Provider,
                {
                  value: s,
                },
                t.map((e) =>
                  null != e
                    ? n.createElement(
                        fp,
                        Ep(
                          {
                            key: e.props.name,
                          },
                          s[e.props.name] || {}
                        ),
                        e
                      )
                    : null
                )
              )
            );
          };
        wp.propTypes = {
          children: w().node,
          config: w().object,
        };
        const vp = wp;
        var Tp = a(37378),
          Ap = a.n(Tp);
        const Cp = (e) => null == e || "" === e,
          Sp = ({ from: e = null, to: t = null, minValue: a, maxValue: r }) => {
            const { formatNumber: o } = (0, pe.A)(),
              l = Cp(e) ? a : e,
              i = Cp(t) ? r : t;
            let s = "";
            return (
              Cp(i) && (s = "+"),
              Cp(l) || Cp(i) || l === i
                ? Cp(l)
                  ? Cp(i)
                    ? void 0
                    : n.createElement("span", null, o(i))
                  : n.createElement("span", null, o(l), s)
                : n.createElement("span", null, `${o(l)}–${o(i)}`)
            );
          };
        Sp.propTypes = {
          from: w().number,
          to: w().number,
          minValue: w().number.isRequired,
          maxValue: w().number.isRequired,
        };
        const xp = n.memo(Sp),
          Rp = "all_domains",
          Lp = "you_domain",
          _p = "competitors",
          Op = [
            {
              type: Rp,
              labelId: "positionFilter.label.all_domains",
              tooltipId: "positionFilter.tooltip.all_domains",
            },
            {
              type: Lp,
              labelId: "positionFilter.label.you_domain",
              tooltipId: "positionFilter.tooltip.you_domain",
            },
            {
              type: _p,
              labelId: "positionFilter.label.competitors",
              tooltipId: "positionFilter.tooltip.competitors",
            },
          ],
          Pp = [
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
          Ip = ({ value: e = null, type: t = null }) => {
            if (!e) return null;
            const a =
              "string" == typeof e
                ? n.createElement(Ut.A, {
                    id: `positionFilter.label.top${e.split("-")[1]}`,
                  })
                : n.createElement(xp, {
                    from: e.from,
                    to: e.to,
                    maxValue: 100,
                    minValue: 1,
                  });
            return n.createElement(
              "span",
              null,
              n.createElement(Ut.A, {
                id: "quickFilter.positions.prefix",
              }),
              " ",
              n.createElement(Ut.A, {
                id: "positionFilter.value",
                values: {
                  TYPE: n.createElement(Ut.A, {
                    id: `positionFilter.value.type.${t}`,
                  }),
                  VAL: a,
                },
              })
            );
          };
        Ip.propTypes = {
          value: w().oneOfType([w().string, w().object, w().instanceOf(null)]),
          type: w().oneOfType([w().string, w().instanceOf(null)]),
        };
        const Mp = Ip,
          Dp = (e, t) => {
            const a = t ? "-custom" : "";
            switch (e) {
              case Rp:
                return `positionFilter.tooltip.applied.all${a}`;
              case Lp:
                return `positionFilter.tooltip.applied.you${a}`;
              case _p:
                return `positionFilter.tooltip.applied.com${a}`;
              default:
                return "positionFilter.tooltip";
            }
          },
          Fp = ({ value: e = null, type: t = null }) => {
            const a = "string" != typeof e,
              r =
                "string" == typeof e
                  ? e.substring(2)
                  : [e?.from || 1, e?.to || 100].join("-");
            return n.createElement(Ut.A, {
              id: Dp(t, a),
              values: {
                range: r,
              },
            });
          };
        Fp.propTypes = {
          type: w().string,
          value: w().oneOfType([w().string, w().object]),
        };
        const Np = Fp;
        var jp = a(45852),
          qp = a.n(jp),
          $p = a(86087);
        const Up = "keyword-gap:filters",
          Vp = "keyword_gap.table.filters.positions",
          zp = [150, 150],
          Kp = ({ onClickApply: e }) => {
            const { setVisibility: t } = (0, n.useContext)(
                Tp.VisibilityContext
              ),
              a = (0, l.d4)(No),
              r = a?.value,
              o = a?.type,
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
              Op.map((e) => {
                const t = e.type === o;
                return n.createElement(
                  En.A.Nesting,
                  {
                    key: e.type,
                  },
                  n.createElement(
                    En.A,
                    {
                      placement: "right-start",
                      interaction: "hover",
                      timeout: zp,
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
                        de.A,
                        {
                          "data-at": "qf-option-label",
                        },
                        n.createElement(Ut.A, {
                          id: e.labelId,
                        }),
                        n.createElement(Hc, {
                          ml: 1,
                          tooltip: n.createElement(Ut.A, {
                            id: e.tooltipId,
                          }),
                          "data-at": "qf-option-info",
                        })
                      ),
                      n.createElement(En.A.Nesting.Addon, {
                        tag: $p.A,
                        color: "icon-secondary-neutral",
                      })
                    ),
                    n.createElement(
                      En.A.Popper,
                      {
                        "data-at": "qf-top100-dd-side",
                        wMin: 200,
                      },
                      n.createElement(
                        En.A.List,
                        null,
                        Pp.map((a) => {
                          const o = t && r === a.value;
                          return n.createElement(
                            En.A.Item,
                            {
                              key: a.value,
                              value: a.value,
                              "data-at": `item-${a.value}`,
                              selected: o,
                              "aria-selected": o,
                              onClick: () => {
                                var t, r, n, o;
                                s({
                                  value: a.value,
                                  type: e.type,
                                }),
                                  (t = e.type),
                                  (r = a.gaIndex),
                                  b({
                                    category: Up,
                                    action: "click:positions-preset-value",
                                    label: `positions:preset-value:${t}:1-3`,
                                    value: r,
                                  }),
                                  (n = e.type),
                                  (o = a.gaLabel),
                                  Gl.A.track(Gl.A.eventName.applyFilter, {
                                    item_location: Vp,
                                    item_label: o,
                                    state: n,
                                  });
                              },
                            },
                            n.createElement(Ut.A, {
                              id: a.labelId,
                            })
                          );
                        })
                      ),
                      n.createElement(zt.A, {
                        my: 1,
                      }),
                      n.createElement(qp(), {
                        onApply: ({ min: t, max: a }) => {
                          var r, n;
                          s({
                            value: {
                              from: t,
                              to: a,
                            },
                            type: e.type,
                          }),
                            (r = e.type),
                            b({
                              category: Up,
                              action: "click:positions-apply",
                              label: `positions:apply-filter:${r}:from`,
                              value: (n = t) ? parseInt(n || 0, 10) : void 0,
                            }),
                            ((e, t) => {
                              b({
                                category: Up,
                                action: "click:positions-apply",
                                label: `positions:apply-filter:${e}:to`,
                                value: t ? parseInt(t || 0, 10) : void 0,
                              });
                            })(e.type, a),
                            (({ from: e, to: t, state: a }) => {
                              Gl.A.track(Gl.A.eventName.applyFilter, {
                                item_location: Vp,
                                item_label: `${parseInt(e || 0, 10)}_${parseInt(
                                  t || 0,
                                  10
                                )}`,
                                state: a,
                              });
                            })({
                              from: t,
                              to: a,
                              state: e.type,
                            });
                        },
                        defaultValue: o === e.type ? i : null,
                      })
                    )
                  )
                );
              })
            );
          };
        Kp.propTypes = {
          onClickApply: w().func.isRequired,
        };
        const Bp = Kp,
          Jp = ({ isFeatureLimited: e = !1 }) => {
            const { formatMessage: t } = (0, pe.A)(),
              a = (0, l.wA)(),
              r = (0, l.d4)(No),
              o = r?.value,
              i = r?.type,
              s = ((e, t) => {
                const { formatMessage: a } = (0, pe.A)(),
                  r = (0, Re.useFilterRangeText)({
                    from: t?.from,
                    to: t?.to,
                    defaultFrom: 1,
                    defaultTo: 100,
                  });
                if (!t)
                  return a({
                    id: "ariaLabel.filter.position.empty",
                  });
                const n =
                    "string" == typeof t
                      ? a({
                          id: `positionFilter.label.top${t.split("-")[1]}`,
                        })
                      : r,
                  o = a(
                    {
                      id: "positionFilter.value",
                    },
                    {
                      TYPE: a({
                        id: `positionFilter.value.type.${e}`,
                      }),
                      VAL: n,
                    }
                  );
                return a(
                  {
                    id: "ariaLabel.filter.position.applied",
                  },
                  {
                    VALUE: o,
                  }
                );
              })(i, o);
            return n.createElement(
              Ap(),
              {
                onVisibleChange: (e) => {
                  e &&
                    b({
                      category: Up,
                      action: "click:positions",
                      label: "positions:show",
                    });
                },
                disabled: e,
              },
              n.createElement(
                Ap().Trigger,
                {
                  placeholder: t({
                    id: "positionFilter.placeholder",
                  }),
                  empty: null == o,
                  onClear: () => {
                    a(td.clearFilter()),
                      b({
                        category: Up,
                        action: "click:positions-clear",
                        label: "positions:clear-filter",
                      });
                  },
                  "data-at": "qf-top100",
                  "data-path": Vp,
                  "aria-label": s,
                  value: o,
                  tooltip: n.createElement(Np, {
                    value: o,
                    type: i,
                  }),
                },
                n.createElement(Mp, {
                  value: o,
                  type: i,
                })
              ),
              n.createElement(
                Ap().Popper,
                {
                  w: 200,
                  "data-at": "qf-top100-dd",
                },
                n.createElement(Bp, {
                  onClickApply: (t) => {
                    e || (a(td.requestSetFilter(t)), a(md()));
                  },
                })
              )
            );
          };
        Jp.propTypes = {
          isFeatureLimited: w().bool,
        };
        const Wp = Jp;
        var Gp = a(2549),
          Yp = a.n(Gp);
        const Hp = "keyword-gap:filters",
          Qp = "keyword_gap.table.filters.volume",
          Zp = () => {
            b({
              category: Hp,
              action: "click:volume",
              label: "volume:show",
            });
          },
          Xp = () => {
            b({
              category: Hp,
              action: "click:volume-clear",
              label: "volume:clear-filter",
            });
          },
          eu = (e) => {
            b({
              category: Hp,
              action: "click:volume-preset-value",
              label: "volume:preset-value:1-6",
              value: e,
            });
          },
          tu = (e) => {
            b({
              category: Hp,
              action: "click:volume-apply",
              label: "volume:apply-filter:from",
              value: e ? parseInt(e || 0, 10) : void 0,
            });
          },
          au = (e) => {
            b({
              category: Hp,
              action: "click:volume-apply",
              label: "volume:apply-filter:to",
              value: e ? parseInt(e || 0, 10) : void 0,
            });
          },
          ru = {
            1: "1_10",
            2: "11_100",
            3: "101_1000",
            4: "1001_10000",
            5: "10001_100000",
            6: "100001_more",
          },
          nu = ({ isFeatureLimited: e = !1 }) => {
            const t = (0, l.wA)(),
              {
                resetFilterGA: a,
                showFilterGA: r,
                applyPresetFilterGA: o,
                applyRangeToFilterGA: i,
                applyRangeFromFilterGA: s,
              } = {
                showFilterGA: Zp,
                resetFilterGA: Xp,
                applyPresetFilterGA: eu,
                applyRangeFromFilterGA: tu,
                applyRangeToFilterGA: au,
              },
              { requestSetFilter: c, clearFilter: d } = ad;
            let p = (0, l.d4)(Fo);
            if (p && "object" == typeof p) {
              const { from: e, to: t } = p;
              p = [e, t].join("-");
            }
            return n.createElement(
              de.A,
              {
                "data-path": Qp,
              },
              n.createElement(Yp(), {
                selectedValue: p || "",
                disabled: e,
                onVisibleChange: (e) => {
                  e && r();
                },
                onOptionClick: (e) => (a) => {
                  o(e),
                    ((e) => {
                      Gl.A.track(Gl.A.eventName.applyFilter, {
                        item_location: Qp,
                        item_label: ru[e],
                      });
                    })(e),
                    t(c(a)),
                    t(md());
                },
                onApplyRange: ({ min: e, max: a }) => {
                  var r, n;
                  s(e),
                    i(a),
                    (r = e),
                    (n = a),
                    Gl.A.track(Gl.A.eventName.applyFilter, {
                      item_location: Qp,
                      item_label: `${parseInt(r || 0, 10)}_${parseInt(
                        n || 0,
                        10
                      )}`,
                    }),
                    t(
                      c({
                        from: e,
                        to: a,
                      })
                    ),
                    t(md());
                },
                onClear: () => {
                  t(d()), a();
                },
              })
            );
          };
        nu.propTypes = {
          isFeatureLimited: w().bool,
        };
        const ou = nu;
        var lu = a(20212),
          iu = a.n(lu);
        const su = "keyword-gap:filters",
          cu = "keyword_gap.table.filters.kd",
          du = ({
            requestSetFilter: e,
            clearFilter: t,
            applyFilters: a,
            isFeatureLimited: r = !1,
            selectedValue: o = "",
          }) => {
            let l = o;
            if (l && "object" == typeof o) {
              const { from: e, to: t } = o;
              l = [e, t].join("-");
            }
            return n.createElement(
              de.A,
              {
                "data-path": cu,
              },
              n.createElement(iu(), {
                selectedValue: l || "",
                disabled: r,
                onVisibleChange: (e) => {
                  e &&
                    b({
                      category: su,
                      action: "click:kd",
                      label: "kd:show",
                    });
                },
                onOptionClick: (t) => (r) => {
                  e(r),
                    a(),
                    ((e) => {
                      const t = parseInt(e || 0, 10) + 1;
                      b({
                        category: su,
                        action: "click:kd-preset-value",
                        label: "kd:preset-value:1-6",
                        value: t,
                      });
                    })(t),
                    ((e) => {
                      Gl.A.track(Gl.A.eventName.applyFilter, {
                        item_location: cu,
                        item_label: e ? `${e.replace("-", "_")}` : "",
                      });
                    })(r);
                },
                onApplyRange: ({ min: t, max: r }) => {
                  var n, o, l;
                  e({
                    from: t,
                    to: r,
                  }),
                    a(),
                    b({
                      category: su,
                      action: "click:kd-apply",
                      label: "kd:apply-filter:from",
                      value: (n = t) ? parseInt(n || 0, 10) : void 0,
                    }),
                    ((e) => {
                      b({
                        category: su,
                        action: "click:kd-apply",
                        label: "kd:apply-filter:to",
                        value: e ? parseInt(e || 0, 10) : void 0,
                      });
                    })(r),
                    (o = t),
                    (l = r),
                    Gl.A.track(Gl.A.eventName.applyFilter, {
                      item_location: cu,
                      item_label: `${parseInt(o || 0, 10)}_${parseInt(
                        l || 0,
                        10
                      )}`,
                    });
                },
                onClear: () => {
                  t(),
                    b({
                      category: su,
                      action: "click:kd-clear",
                      label: "kd:clear-filter",
                    });
                },
              })
            );
          };
        du.propTypes = {
          requestSetFilter: w().func.isRequired,
          clearFilter: w().func.isRequired,
          applyFilters: w().func.isRequired,
          selectedValue: w().oneOfType([w().string, w().object]),
          isFeatureLimited: w().bool,
        };
        const pu = (0, l.Ng)(
          (e) => ({
            selectedValue: qo(e),
          }),
          {
            requestSetFilter: nd.requestSetFilter,
            applyFilters: md,
            clearFilter: nd.clearFilter,
          }
        )(du);
        var uu = a(33283),
          mu = a.n(uu);
        const yu = () => {
            const e = (0, l.wA)();
            return () => e(ud());
          },
          gu = () => {
            const e = (0, l.d4)(Uo);
            return e?.order ?? [];
          },
          hu = "keyword-gap:filters",
          fu = () => {
            const { formatMessage: e } = (0, pe.A)(),
              t = (0, l.d4)(jo),
              a = (0, l.wA)(),
              r = (0, n.useCallback)(
                (e) => {
                  a(rd.requestSetFilter(e)), a(md());
                },
                [a]
              ),
              o = (0, n.useCallback)(() => {
                b({
                  category: hu,
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
              n.createElement(mu(), {
                placeholder: e({
                  id: "keywordFilter.placeholder",
                }),
                value: t || "",
                onApply: (e) => {
                  e !== t &&
                    (r(e),
                    b({
                      category: hu,
                      action: "click:filter-by-keyword-apply",
                      label: "filter-by-keyword:apply",
                    }),
                    Gl.A.track(Gl.A.eventName.applyFilter, {
                      item_location:
                        "keyword_gap.table.filters.filter_by_keyword",
                    }));
                },
                onFocus: o,
                onClear: () => {
                  t &&
                    (r(""),
                    b({
                      category: hu,
                      action: "click:filter-by-keyword-clear",
                      label: "filter-by-keyword:clear",
                    }));
                },
                w: "100%",
              })
            );
          },
          bu = "keyword_gap.table.filters.intent",
          Eu = (0, ce.default)(gl())`
  display: block !important;
`,
          ku = () => {
            const e = (0, l.d4)($o),
              t = (0, l.wA)();
            return n.createElement(
              de.A,
              {
                "data-path": bu,
              },
              n.createElement(Eu, {
                value: e || [],
                onApply: (e) => {
                  t(od.requestSetFilter(e)),
                    t(md()),
                    ((e) => {
                      b({
                        category: "keyword-gap:filters",
                        action: "click:intent-apply",
                        label: `intent:${e.join(",")}`,
                        value: e.length,
                      });
                    })(e),
                    ((e) => {
                      Gl.A.track(Gl.A.eventName.applyFilter, {
                        item_location: bu,
                        item_label: e.join("_"),
                      });
                    })(e);
                },
                onClear: () => {
                  t(od.clearFilter()),
                    b({
                      category: "keyword-gap:filters",
                      action: "click:intent-clear",
                      label: "intent:clear-filter",
                    });
                },
                onVisibilityChange: (e) => {
                  e &&
                    b({
                      category: "keyword-gap:filters",
                      action: "click:intent",
                      label: "intent:show",
                    });
                },
              })
            );
          };
        var wu = a(62944);
        const vu = "keyword-gap:filters",
          Tu = (e) => {
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
              b({
                category: vu,
                action: "click:advanced-filter-apply",
                label: a,
                dimension101: {
                  filtered_response: t,
                },
              });
            });
          },
          Au = {
            "=": "equal",
            ">": "greater_than",
            "<": "less_than",
          },
          Cu = ({ onClose: e, onApply: t }) => {
            const a = yu(),
              r = (0, n.useCallback)(() => {
                a(),
                  setTimeout(() => e(), 150),
                  b({
                    category: vu,
                    action: "click:advanced-clear-all",
                    label: "advanced-filter:clear-filter",
                  });
              }, [a, e]);
            return n.createElement(
              de.A,
              {
                mx: 4,
                justifyContent: "space-between",
              },
              n.createElement(
                Vt.A,
                {
                  use: "primary",
                  onClick: t,
                  "data-at": "qf-apply-advanced",
                },
                n.createElement(Ut.A, {
                  id: "filter.advanced.apply",
                })
              ),
              n.createElement(
                Vt.A,
                {
                  use: "tertiary",
                  theme: "muted",
                  onClick: r,
                  "data-at": "qf-clear-advanced",
                },
                n.createElement(Vt.A.Addon, null, n.createElement($r.A, null)),
                n.createElement(
                  Vt.A.Text,
                  null,
                  n.createElement(Ut.A, {
                    id: "advancedFilter.clearFilter",
                  })
                )
              )
            );
          };
        Cu.propTypes = {
          onClose: w().func.isRequired,
          onApply: w().func.isRequired,
        };
        const Su = Cu,
          xu = (0, n.forwardRef)(function ({ onAdd: e }, t) {
            const a = (0, l.wA)();
            return n.createElement(
              Vt.A,
              {
                theme: "info",
                use: "tertiary",
                onClick: () => {
                  e(), a(cd());
                },
                "data-at": "af-add-condition",
                ref: t,
              },
              n.createElement(Vt.A.Addon, null, n.createElement(vr.A, null)),
              n.createElement(
                Vt.A.Text,
                null,
                n.createElement(Ut.A, {
                  id: "advancedFilter.addCondition",
                })
              )
            );
          });
        (xu.propTypes = {
          onAdd: w().func,
        }),
          (xu.defaultProps = {
            onAdd: () => {},
          });
        const Ru = xu,
          Lu = [
            {
              value: !0,
              label: n.createElement(Ut.A, {
                id: "advancedFilter.includeStatus.include",
              }),
            },
            {
              value: !1,
              label: n.createElement(Ut.A, {
                id: "advancedFilter.includeStatus.exclude",
              }),
            },
          ],
          _u = ({ value: e, focused: t = !1, onChange: a = () => {} }) => {
            const r = (0, n.useRef)(null),
              { formatMessage: o } = (0, pe.A)();
            return (
              (0, n.useEffect)(() => {
                t && r.current.focus();
              }, [t]),
              n.createElement(
                er.Ay,
                {
                  value: e,
                  onChange: a,
                },
                n.createElement(
                  er.Ay.Trigger,
                  {
                    w: 140,
                    "data-at": "af-item-include",
                    ref: r,
                    type: "button",
                    "aria-label": o({
                      id: "ariaLabel.advancedFilters.selectIncludeStatus",
                    }),
                  },
                  Lu.find(({ value: t }) => t === e)?.label ?? ""
                ),
                n.createElement(
                  er.Ay.Menu,
                  {
                    "data-at": "select-include-status-dd",
                  },
                  Lu.map((e, t) => {
                    const { label: a, value: r } = e;
                    return n.createElement(
                      er.Ay.Option,
                      {
                        value: r,
                        key: t,
                        direction: "row",
                        flexWrap: !0,
                      },
                      n.createElement(
                        $t.A,
                        {
                          "data-at": `option-${r}`,
                        },
                        n.createElement(
                          ir.A,
                          {
                            size: 200,
                          },
                          a
                        )
                      )
                    );
                  })
                )
              )
            );
          };
        _u.propTypes = {
          value: w().string.isRequired,
          onChange: w().func,
          focused: w().bool,
        };
        const Ou = _u,
          Pu = ["results"],
          Iu = (e, t) =>
            Pu.includes(e) && t
              ? n.createElement(Ut.A, {
                  id: "advancedFilter.field.addon.desktopOnly",
                })
              : null,
          Mu = ({
            value: e,
            fields: t = [],
            isDeviceMobile: a = !1,
            onChange: r = () => {},
          }) => {
            const { formatMessage: o } = (0, pe.A)();
            return n.createElement(
              er.Ay,
              {
                value: e,
                onChange: r,
              },
              n.createElement(
                er.Ay.Trigger,
                {
                  w: 140,
                  "data-at": "af-item-field",
                  type: "button",
                  "aria-label": o({
                    id: "ariaLabel.advancedFilters.selectField",
                  }),
                },
                n.createElement(Ut.A, {
                  id: `advancedFilter.field.${e}`,
                }),
                " ",
                Iu(e, a)
              ),
              n.createElement(
                er.Ay.Menu,
                {
                  "data-at": "select-field-dd",
                },
                t.map((e, t) =>
                  n.createElement(
                    er.Ay.Option,
                    {
                      value: e,
                      key: t,
                      direction: "row",
                      flexWrap: !0,
                      "data-at": `option-${e}`,
                    },
                    n.createElement(
                      $t.A,
                      null,
                      n.createElement(
                        ir.A,
                        {
                          size: 200,
                        },
                        n.createElement(Ut.A, {
                          id: `advancedFilter.field.${e}`,
                        }),
                        " ",
                        Iu(e, a)
                      )
                    )
                  )
                )
              )
            );
          };
        Mu.propTypes = {
          onChange: w().func,
          value: w().string.isRequired,
          fields: w().array,
          isDeviceMobile: w().bool,
        };
        const Du = Mu;
        var Fu = a(76078);
        const Nu = ({ id: e, onRemove: t = () => {} }) => {
          const a = (0, l.wA)();
          return n.createElement(
            Vt.A,
            {
              size: "s",
              use: "tertiary",
              className: "filter_line-module__removeButton___NJn6g",
              onClick: () => {
                a(dd(e)), t();
              },
              ml: 4,
              "data-at": "qf-remove-filter",
            },
            n.createElement(Fu.A, null)
          );
        };
        Nu.propTypes = {
          id: w().string.isRequired,
          onRemove: w().func,
        };
        const ju = Nu,
          qu = ({
            fieldsConfig: e,
            id: t,
            onApply: a,
            focused: r = !1,
            onRemove: o = () => {},
          }) => {
            const i = gu().length > 1,
              {
                isIncludes: s,
                field: c,
                criteria: d,
                value: p,
              } = ((e) => (0, l.d4)((t) => Vo(t, e)))(t),
              u = (0, l.wA)(),
              { device: m } = (0, l.d4)(He.eF),
              y = m === Kt.W.mobile;
            return n.createElement(
              de.A,
              {
                px: 4,
                alignItems: "center",
                role: "group",
                "data-at": "af-filter-row",
              },
              n.createElement(
                $t.A,
                {
                  mr: i ? 0 : 8,
                  className: "filter_line-module__fields___J7x_W",
                },
                n.createElement(Ou, {
                  value: s,
                  onChange: (e) => u(pd(t, "isIncludes", e)),
                  focused: r,
                }),
                n.createElement(Du, {
                  value: c,
                  fields: e.map((e) => e.field),
                  onChange: (e) => u(pd(t, "field", e)),
                  isDeviceMobile: y,
                }),
                e
                  .find((e) => e.field === c)
                  .render({
                    criteria: d,
                    value: p,
                    onApply: a,
                    setValue: (e) => u(pd(t, "value", e)),
                    setCriteria: (e) => u(pd(t, "criteria", e)),
                  })
              ),
              i &&
                n.createElement(ju, {
                  id: t,
                  onRemove: o,
                })
            );
          };
        qu.propTypes = {
          fieldsConfig: w().arrayOf(w().object).isRequired,
          id: w().string.isRequired,
          onApply: w().func.isRequired,
          onRemove: w().func,
          focused: w().bool,
        };
        const $u = qu,
          Uu = ["=", ">", "<"],
          Vu = ["containing", "wordMatch", "exactMatch", "begins", "ends"],
          zu = ["branded", "notBranded", "forOther"],
          Ku = ["criteria", "field", "isIncludes", "value"],
          Bu = ({
            criteria: e,
            criteriesList: t = [],
            className: a = "",
            setCriteria: r = () => {},
          }) => {
            const { formatMessage: o } = (0, pe.A)();
            return n.createElement(
              er.Ay,
              {
                value: e,
                onChange: r,
              },
              n.createElement(
                er.Ay.Trigger,
                {
                  w: 140,
                  className: a,
                  "data-at": "af-item-criteria",
                  type: "button",
                  "aria-label": o({
                    id: "ariaLabel.advancedFilters.selectCriteria",
                  }),
                },
                n.createElement(Ut.A, {
                  id: `advancedFilter.criteria.${e}`,
                })
              ),
              n.createElement(
                er.Ay.Menu,
                {
                  "data-at": "select-criteria-dd",
                },
                t.map((e, t) =>
                  n.createElement(
                    er.Ay.Option,
                    {
                      value: e,
                      key: t,
                      direction: "row",
                      flexWrap: !0,
                      "data-at": `option-${e}`,
                    },
                    n.createElement(
                      $t.A,
                      null,
                      n.createElement(
                        ir.A,
                        {
                          size: 200,
                        },
                        n.createElement(Ut.A, {
                          id: `advancedFilter.criteria.${e}`,
                        })
                      )
                    )
                  )
                )
              )
            );
          };
        Bu.propTypes = {
          criteria: w().string.isRequired,
          setCriteria: w().func,
          criteriesList: w().array,
          className: w().string,
        };
        const Ju = Bu,
          Wu = ({
            criteria: e,
            value: t,
            onApply: a,
            setCriteria: r = () => {},
            setValue: o = () => {},
            dataPath: l = "",
          }) => {
            const { formatMessage: i } = (0, pe.A)(),
              s = (0, n.useCallback)(
                (e) => {
                  "Enter" === e.key && a();
                },
                [a]
              );
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(Ju, {
                criteria: e,
                setCriteria: r,
                criteriesList: Vu,
              }),
              n.createElement(
                Fr.A,
                {
                  w: 140,
                  "data-at": "af-item-value",
                  "data-path": l,
                },
                n.createElement(Fr.A.Value, {
                  placeholder: "",
                  value: t,
                  onChange: (e) => o(e),
                  "data-at": "input-text",
                  onKeyUp: s,
                  "aria-label": i({
                    id: "ariaLabel.filter.enterValue",
                  }),
                })
              )
            );
          };
        Wu.propTypes = {
          setCriteria: w().func,
          setValue: w().func,
          onApply: w().func.isRequired,
          criteria: w().string.isRequired,
          value: w().string.isRequired,
          dataPath: w().string,
        };
        const Gu = Wu;
        var Yu = a(71308);
        const Hu = ({
          setCriteria: e,
          setValue: t,
          criteria: a,
          onApply: r,
          step: o = 1,
          value: l = null,
          dataPath: i = "",
        }) => {
          const { formatMessage: s } = (0, pe.A)(),
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
            n.createElement(Ju, {
              criteria: a,
              setCriteria: e,
              criteriesList: Uu,
            }),
            n.createElement(
              Yu.A,
              {
                w: 140,
                state: "normal",
                "data-at": "af-item-value",
                "data-path": i,
              },
              n.createElement(Yu.A.Value, {
                min: 0,
                step: o,
                value: l,
                onChange: c,
                onKeyUp: d,
                "data-at": "input-number",
                "aria-label": s({
                  id: "ariaLabel.filter.enterValue",
                }),
              }),
              n.createElement(Yu.A.Controls, null)
            )
          );
        };
        Hu.propTypes = {
          setCriteria: w().func.isRequired,
          setValue: w().func.isRequired,
          onApply: w().func.isRequired,
          criteria: w().oneOf(Uu).isRequired,
          value: w().number,
          step: w().number,
          dataPath: w().string,
        };
        const Qu = Hu,
          Zu = ({
            onApply: e,
            value: t = null,
            step: a = 1,
            onChange: r = () => {
              console.warn("onChange function is not defined");
            },
            dataPath: o = "",
          }) => {
            const { formatMessage: i } = (0, pe.A)(),
              s = (0, l.d4)(za),
              c = (0, l.d4)((e) =>
                ((e, t) => {
                  const a = da()(Ca(e), Sa(e), {});
                  return da()(a, `${t.toUpperCase()}.rate`, 1);
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
              Yu.A,
              {
                w: 140,
                state: "normal",
                "data-at": "af-item-value",
                "data-path": o,
              },
              n.createElement(Yu.A.Value, {
                min: 0,
                step: a,
                value: null === d ? "" : d,
                onChange: u,
                onKeyUp: m,
                "data-at": "input-currency",
                "aria-label": i({
                  id: "ariaLabel.filter.enterValue",
                }),
              }),
              n.createElement(Yu.A.Controls, null)
            );
          };
        Zu.propTypes = {
          value: w().number,
          step: w().number,
          onChange: w().func,
          onApply: w().func.isRequired,
          dataPath: w().string,
        };
        const Xu = Zu,
          em = ({
            criteria: e,
            value: t,
            step: a,
            onApply: r,
            setCriteria: o = () => {},
            setValue: l = () => {},
            dataPath: i = "",
          }) =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(Ju, {
                criteria: e,
                setCriteria: o,
                criteriesList: Uu,
              }),
              n.createElement(Xu, {
                value: t,
                onChange: (e) => l(Number(e)),
                step: a,
                onApply: r,
                dataPath: i,
              })
            );
        em.propTypes = {
          setCriteria: w().func,
          setValue: w().func,
          criteria: w().string.isRequired,
          value: w().string.isRequired,
          step: w().number.isRequired,
          onApply: w().func.isRequired,
          dataPath: w().string,
        };
        const tm = em;
        function am() {
          return (
            (am = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            am.apply(null, arguments)
          );
        }
        const rm = [
            {
              field: "keyword",
              render: (e) =>
                n.createElement(
                  Gu,
                  am(
                    {
                      dataPath: "keyword_gap.table.filters.keyword",
                    },
                    e
                  )
                ),
            },
            {
              field: "volume",
              render: (e) =>
                n.createElement(
                  Qu,
                  am(
                    {
                      dataPath: "keyword_gap.table.filters.volume",
                    },
                    e
                  )
                ),
            },
            {
              field: "cpc",
              render: (e) =>
                n.createElement(
                  tm,
                  am(
                    {
                      dataPath: "keyword_gap.table.filters.cpc",
                      step: 0.01,
                    },
                    e
                  )
                ),
            },
            {
              field: "comp",
              render: (e) =>
                n.createElement(
                  Qu,
                  am(
                    {
                      dataPath: "keyword_gap.table.filters.comp",
                      step: 0.01,
                    },
                    e
                  )
                ),
            },
            {
              field: "results",
              render: (e) =>
                n.createElement(
                  Qu,
                  am(
                    {
                      dataPath: "keyword_gap.table.filters.results",
                    },
                    e
                  )
                ),
            },
          ],
          nm = ({ onApply: e, isFocusOn: t = !1, onRemove: a = () => {} }) => {
            const r = gu();
            return n.createElement(
              de.A,
              {
                direction: "column",
                py: 4,
                className: "filters_list-module__list___Aad4h",
                "data-at": "filter-list",
              },
              r.map((o, l) =>
                n.createElement($u, {
                  key: o,
                  id: o,
                  focused: t && r.length - 1 === l,
                  fieldsConfig: rm,
                  onApply: e,
                  onRemove: a,
                })
              )
            );
          };
        nm.propTypes = {
          onRemove: w().func,
          onApply: w().func.isRequired,
          isFocusOn: w().bool,
        };
        const om = nm,
          lm = ({ onClose: e = () => {} }) => {
            const t = (0, n.useRef)(null),
              a = (() => {
                const e = (0, l.wA)();
                return (t) => e(id(t));
              })(),
              r = (0, n.useRef)(null),
              [o, i] = (0, n.useState)(!1),
              { formatMessage: s } = (0, pe.A)(),
              { gaApplyFilter: c } = (() => {
                const e = (() => {
                  const e = (0, l.d4)(Uo),
                    { order: t, ...a } = e;
                  return Object.values(a);
                })();
                return {
                  gaApplyFilter: () => {
                    Gl.A.track(Gl.A.eventName.applyFilter, {
                      item_location:
                        "keyword_gap.table.filters.advanced_filters",
                      item_label: `${e.length}`,
                    }),
                      e.forEach((e) => {
                        Gl.A.track(Gl.A.eventName.applyFilter, {
                          item_location: `keyword_gap.table.filters.${e.field}`,
                          state: Au?.[e.criteria] ?? E(e.criteria),
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
              $t.A,
              {
                role: "group",
                "aria-label": s({
                  id: "advancedFilter.placeholder",
                }),
                className: "advanced_filters_content-module__wrapper___FlwYX",
              },
              n.createElement(
                wu.Ay,
                {
                  hMax: 186,
                  ref: t,
                  tabIndex: -1,
                },
                n.createElement(om, {
                  isFocusOn: o,
                  onApply: p,
                  onRemove: () => {
                    i(!1), r.current.focus();
                  },
                })
              ),
              n.createElement(
                $t.A,
                {
                  ml: 4,
                },
                n.createElement(Ru, {
                  ref: r,
                  onAdd: () => {
                    i(!0), d();
                  },
                })
              ),
              n.createElement(zt.A, {
                orientation: "horizontal",
                theme: "default",
                use: "primary",
                mt: 4,
                mb: 4,
              }),
              n.createElement(Su, {
                onApply: p,
                onClose: e,
              })
            );
          };
        lm.propTypes = {
          onClose: w().func,
        };
        const im = lm;
        var sm = a(54911);
        const cm = ({ counter: e = 0 }) =>
          n.createElement(
            de.A,
            {
              alignItems: "center",
            },
            n.createElement(
              $t.A,
              {
                mr: 2,
              },
              n.createElement(Ut.A, {
                id: "advancedFilter.placeholder",
              })
            ),
            !!e &&
              n.createElement(
                sm.A,
                {
                  theme: "light-blue",
                },
                e
              )
          );
        cm.propTypes = {
          counter: w().number,
        };
        const dm = cm,
          pm = ({ isFeatureLimited: e = !1 }) => {
            const t = (() => {
                const e = (0, l.d4)(zo);
                return Object.keys(e).length;
              })(),
              a = yu(),
              { formatMessage: r } = (0, pe.A)(),
              [o, i] = (0, n.useState)(!1),
              s =
                0 === t
                  ? r({
                      id: "ariaLabel.filter.advanced.empty",
                    })
                  : r(
                      {
                        id: "ariaLabel.filter.advanced.applied",
                      },
                      {
                        COUNT: t,
                      }
                    );
            return n.createElement(
              Ap(),
              {
                visible: o,
                onVisibleChange: (e) => {
                  i(e),
                    e &&
                      b({
                        category: vu,
                        action: "click:advanced-filter",
                        label: "advanced-filter:show",
                      });
                },
                disabled: e,
              },
              n.createElement(
                Ap().Trigger,
                {
                  onClear: () => {
                    a(),
                      b({
                        category: vu,
                        action: "click:advanced-clear",
                        label: "advanced-filter:clear-filter",
                      });
                  },
                  placeholder: r({
                    id: "advancedFilter.placeholder",
                  }),
                  "data-at": "af-button",
                  "data-path": "keyword_gap.table.filters.advanced_filters",
                  "aria-label": s,
                  empty: 0 === t,
                },
                n.createElement(dm, {
                  counter: t,
                })
              ),
              n.createElement(
                Ap().Popper,
                {
                  hMax: 400,
                  placement: "bottom-end",
                  "data-at": "af-dropdown",
                },
                n.createElement(im, {
                  onClose: () => {
                    i(!1);
                  },
                })
              )
            );
          };
        pm.propTypes = {
          isFeatureLimited: w().bool,
        };
        const um = pm,
          mm = new Map([
            [
              "default",
              {
                keywordSearch: {
                  w: "240px",
                  style: {
                    flexShrink: 0,
                    overflow: "visible",
                  },
                },
                positions: {
                  style: {
                    flexShrink: 0,
                  },
                },
                volume: {
                  style: {
                    flexShrink: 0,
                  },
                },
                kd: {
                  style: {
                    flexShrink: 0,
                  },
                },
                advanced: {
                  style: {
                    minWidth: "135px",
                    flexShrink: 0,
                  },
                },
              },
            ],
            [
              "(max-width: 1350px)",
              {
                keywordSearch: {
                  w: "140px",
                  style: {
                    flexShrink: 0,
                    overflow: "visible",
                  },
                },
                sf: {
                  style: {
                    flexShrink: 1,
                  },
                },
                intent: {
                  style: {
                    flexShrink: 1,
                  },
                },
                advanced: {
                  style: {
                    minWidth: "135px",
                    flexShrink: 0,
                  },
                },
              },
            ],
          ]),
          ym = (0, ce.default)($t.A)`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: #f4f5f9;
  z-index: 4;
  margin-bottom: 1px; /* need this becouse filters overlap bottom cards*/
  box-shadow: -1px 0px 0px 0px #f4f5f9, 1px 0px 0px 0px #f4f5f9; /* fix visible borders from underline blocks */

  border-bottom: ${({ isSticky: e }) => (e ? "1px solid #ccc" : "none")};
`,
          gm = () => {
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
                    {
                      rootMargin: "0px 0px -100% 0px",
                      threshold: 0,
                    }
                  );
                return (
                  r.observe(e),
                  function () {
                    r.unobserve(e);
                  }
                );
              }, []),
              n.createElement(
                ym,
                {
                  py: 4,
                  px: 0,
                  isSticky: e,
                  ref: a,
                },
                n.createElement(
                  vp,
                  {
                    config: mm,
                    "data-at": "filters-panel",
                  },
                  n.createElement(
                    Jl,
                    {
                      limitContext: "filters",
                      name: "keywordSearch",
                    },
                    n.createElement(fu, null)
                  ),
                  n.createElement(
                    Jl,
                    {
                      limitContext: "filters",
                      name: "positions",
                    },
                    n.createElement(Wp, null)
                  ),
                  n.createElement(
                    Jl,
                    {
                      limitContext: "filters",
                      name: "volume_ui",
                    },
                    n.createElement(ou, null)
                  ),
                  n.createElement(
                    Jl,
                    {
                      limitContext: "filters",
                      name: "kd",
                    },
                    n.createElement(pu, null)
                  ),
                  n.createElement(
                    Jl,
                    {
                      limitContext: "filters",
                      name: "intent",
                    },
                    n.createElement(ku, null)
                  ),
                  n.createElement(
                    Jl,
                    {
                      limitContext: "filters",
                      name: "advanced",
                    },
                    n.createElement(um, null)
                  )
                )
              )
            );
          },
          hm = n.memo(gm);
        var fm = a(60522);
        const bm = () => {
            const e = (0, l.d4)(He.al),
              [t, a] = (0, n.useState)(!0);
            return e
              ? n.createElement(
                  fm.A,
                  {
                    theme: "warning",
                    closable: !0,
                    label: n.createElement(Fd.A, null),
                    hidden: !t,
                    onClose: () => a(!1),
                    mt: 4,
                  },
                  n.createElement(
                    $t.A,
                    {
                      "data-at": "notice-text",
                    },
                    n.createElement(Ut.A, {
                      id: "searchTypeNotice.text",
                      values: {
                        b: (e) => n.createElement("b", null, e),
                      },
                    })
                  ),
                  n.createElement(
                    Vt.A,
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
                    n.createElement(Ut.A, {
                      id: "limitBlock.guru.upgradeText",
                    })
                  )
                )
              : null;
          },
          Em = n.memo(bm),
          km = ce.createGlobalStyle`
  #root-content {
    min-width: 1050px;
  }
  html {
    scroll-padding-top: 100px;
  }
`,
          wm = (0, ce.default)(de.A)`
  flex-grow: 1;
`,
          vm = (0, ce.default)($t.A)`
  justify-self: stretch;
  align-self: stretch;
  flex-grow: 1;
`,
          Tm = "Table",
          Am = (0, ce.default)(hs.A)`
  word-break: break-all;
`,
          Cm = () => {
            const { formatMessage: e } = (0, pe.A)(),
              t = (0, l.d4)(lo.yo),
              a = (0, l.wA)();
            if (0 === t.length) return null;
            const r = ((e) =>
                e.map(({ searchItem: e, searchType: t }, a) => ({
                  label: _d(Rt(e), t),
                  value: a,
                })))(t),
              o = r[0];
            return n.createElement(
              er.Ay,
              {
                value: o?.value,
                onChange: (e) => {
                  a(Kn(xd(t, e))),
                    b({
                      action: Tm,
                      label: "select you-domain",
                    });
                },
                onVisibleChange: (e) => {
                  e &&
                    b({
                      action: Tm,
                      label: "click change you-domain",
                    });
                },
                "data-at": "competitor-switcher",
              },
              n.createElement(
                er.Ay.Trigger,
                {
                  wMax: 180,
                  "data-at": "competitor-switcher-trigger",
                  "aria-label": e(
                    {
                      id: "ariaLabel.selectYouDomain",
                    },
                    {
                      DOMAIN: o?.label,
                    }
                  ),
                },
                n.createElement(hs.A, null, o.label)
              ),
              n.createElement(
                er.Ay.Menu,
                {
                  wMax: 180,
                  "data-at": "competitor-switcher-dd",
                },
                r.map(({ value: e, label: t }, a) =>
                  n.createElement(
                    er.Ay.Option,
                    {
                      value: e,
                      key: e,
                      wMax: 180,
                      direction: "row",
                      "data-at": `option-${e}`,
                    },
                    n.createElement(
                      de.A,
                      null,
                      n.createElement(
                        er.Ay.Trigger.Addon,
                        {
                          mr: 2,
                          "data-at": "option-circle",
                        },
                        n.createElement(Gr, {
                          color: Hr(a),
                          "data-at": `competitor-circle-${a}`,
                        })
                      ),
                      n.createElement(
                        er.Ay.Trigger.Text,
                        {
                          tag: Am,
                          maxLine: 3,
                        },
                        t
                      )
                    )
                  )
                )
              )
            );
          },
          Sm = () =>
            n.createElement(
              de.A,
              {
                alignItems: "center",
                id: "kg_table_header",
              },
              n.createElement(
                Gs.WidgetTitle,
                {
                  mr: 2,
                },
                n.createElement(Ut.A, {
                  id: "kgTable.competitorSelector.label",
                })
              ),
              n.createElement(
                $t.A,
                {
                  mr: 2,
                },
                n.createElement(Cm, null)
              ),
              n.createElement(Kr, null)
            ),
          xm = (e) =>
            e === i.USER_ROLES.guest
              ? "Payment FREE"
              : e
              ? _l.n[e]
              : "Payment NOT DEFINED",
          Rm = (e) => {
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
          Lm = () => (0, l.d4)(So),
          _m = ({ name: e }) => {
            const { formatNumber: t } = (0, pe.A)(),
              { formatCompactNumber: a } = (0, O.useIntlHelpers)(),
              r = (0, l.d4)(bo),
              o = (0, l.d4)(vo),
              i = o?.[e];
            return n.createElement(
              de.A,
              {
                wMin: 5,
              },
              r
                ? n.createElement(
                    cr.A,
                    {
                      hidden: !1,
                      height: 10,
                      width: 10,
                    },
                    n.createElement(cr.A.Text, {
                      y: 1,
                      width: 10,
                      "data-at": "pill-loading",
                    })
                  )
                : n.createElement(
                    ir.A,
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
        _m.propTypes = {
          name: w().string.isRequired,
        };
        const Om = n.memo(_m),
          Pm = ({ isFeatureLimited: e = !1 }) => {
            const t = (() => {
                const e = (0, l.d4)(go);
                return (0, l.d4)(mo) || e;
              })(),
              a = oc(),
              { formatMessage: r } = (0, pe.A)(),
              o = (0, n.useCallback)(
                (t) => {
                  var r;
                  e ||
                    (a({
                      intersectionType: t,
                    }),
                    b({
                      action: "Table",
                      label: `select tab ${Rm(t)}`,
                    }),
                    (r = t),
                    Gl.A.track(Gl.A.eventName.applyFilter, {
                      item_label: r,
                      item_location: "keyword_gap.table.filters.pills",
                    }));
                },
                [e, a]
              );
            return n.createElement(
              de.A,
              {
                alignItems: "center",
                "data-at": "keyword-filters",
                wMin: 0,
              },
              n.createElement(
                ns.A,
                {
                  value: t,
                  onChange: o,
                  "data-at": "table-keyword-type-pills",
                  "data-path": "keyword_gap.table.filters.pills",
                  "aria-label": r({
                    id: "ariaLabel.keywordType",
                  }),
                  wMin: 0,
                  "aria-controls": nc,
                  behavior: "manual",
                },
                Dn.map((e) =>
                  n.createElement(
                    ns.A.Item,
                    {
                      value: e,
                      key: e,
                      "data-at": `table-keyword-type-pill-${e}`,
                      tag: Nr.Ay,
                      timeout: Kt.a4,
                      title: r({
                        id: `intersectionTypePills.tooltip.${e}`,
                      }),
                    },
                    n.createElement(
                      ns.A.Item.Text,
                      {
                        "data-at": "pill-text",
                        wMin: 0,
                      },
                      n.createElement(
                        hs.A,
                        {
                          tooltip: !1,
                        },
                        r({
                          id: `keywords.${e}`,
                        })
                      )
                    ),
                    n.createElement(
                      ns.A.Item.Addon,
                      null,
                      n.createElement(
                        de.A,
                        {
                          wMin: 5,
                        },
                        n.createElement(Om, {
                          name: e,
                        })
                      )
                    )
                  )
                )
              )
            );
          };
        Pm.propTypes = {
          isFeatureLimited: w().bool,
        };
        const Im = Pm,
          Mm = (e) => e.kgTable.limitError,
          Dm = (0, sa.Mz)([To], (e) => Math.ceil(e / 100)),
          Fm = (0, sa.Mz)(
            [(e) => e.kgTable.selectedKeywords, (e) => Ho(e)],
            (e, t) => {
              const a = Qo(t);
              return e?.[a] ?? [];
            }
          ),
          Nm = (0, sa.Mz)([Fm, (e, t) => t], (e, t) =>
            Boolean(e.find((e) => e === t) || !1)
          ),
          jm = (0, sa.Mz)(
            [(e) => rl(e), Fm],
            (e, t) => e?.every((e) => t?.includes(e) ?? !1) ?? !1
          ),
          qm = (0, sa.Mz)(
            [(e) => rl(e), Fm],
            (e, t) => e?.some((e) => t?.includes(e) ?? !1) ?? !1
          ),
          $m = (0, sa.Mz)([Fm, (e) => al(e)], (e, t) => e.map((e) => t[e]));
        (0, sa.Mz)([(e) => nl(e)], (e) => {
          let t;
          for (let a = 0; a < e.length; a++)
            if ("" === e[a].keyword) {
              t = a;
              break;
            }
          return t;
        });
        var Um = a(38259);
        const Vm = () => {
            const { locale: e } = (0, pe.A)();
            return (
              (0, n.useEffect)(() => {
                b({
                  action: "Something went wrong",
                  label: "Table - Keyword Gap",
                });
              }, []),
              n.createElement(
                $t.A,
                {
                  mt: 10,
                },
                n.createElement(Um.A, {
                  locale: e,
                })
              )
            );
          },
          zm = n.memo(Vm);
        function Km() {
          return (
            (Km = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Km.apply(null, arguments)
          );
        }
        const Bm = {
            duration: 0,
            "data-at": "non-loading-skeleton",
          },
          Jm = ({ fields: e = "", blurred: t = !1 }) =>
            n.createElement(
              dc.Ay.Body,
              null,
              n.createElement(
                dc.Ay.Cell,
                {
                  name: e,
                  h: 44,
                },
                () => ({
                  children: n.createElement(
                    de.A,
                    {
                      alignItems: "center",
                    },
                    n.createElement(
                      mc,
                      Km(
                        {
                          width: "90%",
                        },
                        t ? Bm : {}
                      )
                    )
                  ),
                })
              ),
              n.createElement(
                dc.Ay.Cell,
                {
                  name: "id",
                  justifyContent: "center",
                },
                () => ({
                  children: n.createElement(
                    Cd.A,
                    {
                      size: "m",
                      disabled: !0,
                    },
                    n.createElement(Cd.A.Value, null)
                  ),
                })
              )
            );
        Jm.propTypes = {
          fields: w().string,
          blurred: w().bool,
        };
        const Wm = n.memo(Jm);
        var Gm = a(55885),
          Ym = a(71325),
          Hm = a.n(Ym);
        const Qm = (0, ke.VP)("requestSetTableSorting", (e) => ({
            field: e,
          })),
          Zm = (0, ke.VP)("setTableSorting", (e, t) => ({
            field: e,
            direction: t,
          })),
          Xm = (0, ke.VP)("setTableLimitError", (e) => ({
            limitError: e,
          })),
          ey = (0, ke.VP)("requestSetCurrentPage", (e) => ({
            page: Number(e),
          })),
          ty = (0, ke.VP)("updateCurrentPage", (e) => ({
            page: e,
          })),
          ay = (0, ke.VP)("setCurrentPage", (e) => ({
            page: e,
          })),
          ry = (0, ke.VP)("setPrevPage", (e) => ({
            page: e,
          })),
          ny = (0, ke.VP)("requestToggleSelectionKeyword", (e) => ({
            id: e,
          })),
          oy = (0, ke.VP)("toggleSelectionKeyword", (e, { page: t, ...a }) => ({
            id: e,
            params: a,
          })),
          ly = (0, ke.VP)("selectAllKeywords", (e, { page: t, ...a }) => ({
            ids: e,
            params: a,
          })),
          iy = (0, ke.VP)("selectAllKeywords", (e, { page: t, ...a }) => ({
            ids: e,
            params: a,
          })),
          sy = (0, ke.VP)("toggleAllSelection"),
          cy = (0, ke.VP)("clearSlectedKeywords"),
          dy = () => (0, l.d4)(Fm),
          py = () => {
            const e = dy();
            return e?.length ?? 0;
          },
          uy = () => (0, l.d4)(Mm),
          my = async ({ requestId: e, database: t }) => {
            const a = {
                requestId: e,
                report: pt.REPORT_NAME.meta,
              },
              r = {
                database: t,
                api_key: P.A.apiKey,
                report_type: pt.REPORT_NAME.gap,
              };
            return await Et.fetchData("/Meta/UserPermissions", a, r);
          },
          yy = async ({ requestId: e }) => {
            const t = {
                requestId: e,
                report: pt.REPORT_NAME.meta,
              },
              a = {
                api_key: P.A.apiKey,
              };
            return (await Et.fetchData("/Meta/UserDatabases", t, a)).databases;
          },
          gy = async ({ requestId: e, db: t, device: a }) => {
            const r = {
                requestId: e,
                report: pt.REPORT_NAME.gap,
              },
              n = {
                database: (0, dt.prepareDatabase)(t, a),
              },
              { daily: o, monthly: l } = await Et.fetchData(
                "/Meta/SnapshotDates",
                r,
                n
              );
            return {
              daily: [o[o.length - 1]].map(dt.dateObjectToString),
              monthly: l.map(dt.dateObjectToString),
            };
          },
          hy = (0, ke.VP)("requestKeywords", ({ reload: e = !1 }) => ({
            reload: e,
          })),
          fy = (0, ke.VP)("getKeywordsSuccess", (e, t) => ({
            data: e,
            pageParams: t,
          })),
          by = (0, ke.VP)("startFetchKeywords", (e) => ({
            params: e,
          })),
          Ey = (0, ke.VP)("dataFound"),
          ky = () => {
            const e = (0, l.wA)(),
              [t, a] = (0, n.useState)(!1),
              [r, o] = (0, n.useState)(!1),
              i = (0, l.d4)(He.Lf),
              s = (0, l.d4)(He.Pf);
            return {
              isConnectDBInProcess: r,
              isConnectDBError: t,
              onConnectDb: () => {
                o(!0),
                  (async () => {
                    try {
                      const t = await (async ({ db: e, device: t }) => {
                        const a = {
                            report: pt.REPORT_NAME.meta,
                          },
                          r = {
                            database: (0, dt.prepareDatabase)(e, t),
                            api_key: P.A.apiKey,
                          };
                        return await Et.fetchData(
                          "/Meta/SetUserDatabasePermission",
                          a,
                          r
                        );
                      })({
                        db: i,
                        device: s,
                      });
                      o(!1),
                        null != t?.code
                          ? a(!0)
                          : (e(
                              hy({
                                reload: !0,
                              })
                            ),
                            e(Se((0, St.Z0)(i, s))));
                    } catch (e) {
                      console.warn(e), o(!1), a(!0);
                    }
                  })();
              },
            };
          },
          wy = ({ connectedDBCount: e, maxDbCount: t }) =>
            e < t
              ? 0 === e
                ? n.createElement(Ut.A, {
                    id: "tinydbLandings.connectDatabases",
                    values: {
                      NUM: t,
                      br: () => n.createElement("br", null),
                    },
                  })
                : n.createElement(Ut.A, {
                    id: "tinydbLandings.seeResults",
                    values: {
                      countOpen: e,
                      countAvailable: t,
                      br: () => n.createElement("br", null),
                    },
                  })
              : n.createElement(Ut.A, {
                  id: "tinydbLandings.connectSales",
                  values: {
                    br: () => n.createElement("br", null),
                  },
                });
        wy.propTypes = {
          connectedDBCount: w().number.isRequired,
          maxDbCount: w().number.isRequired,
        };
        const vy = wy,
          Ty = (0, ce.default)(de.A)`
  position: relative;
  top: 130px;
`,
          Ay = ({
            connectedDBCount: e,
            maxDbCount: t,
            isConnectLoading: a,
            onContactSalesClick: r,
            onConnectDbClick: o,
          }) => {
            const l = e < t;
            return n.createElement(
              Ty,
              {
                direction: "column",
                alignItems: "center",
                hMin: 400,
              },
              n.createElement(
                de.A,
                {
                  direction: "column",
                  alignItems: "center",
                },
                n.createElement(
                  ir.A,
                  {
                    size: 500,
                    tag: "p",
                    lineHeight: 1.12,
                    mb: 4,
                    medium: !0,
                  },
                  n.createElement(Ut.A, {
                    id: "tinydbLandings.title",
                  })
                ),
                n.createElement(
                  ir.A,
                  {
                    size: 200,
                    tag: "p",
                    mb: 8,
                    textAlign: "center",
                  },
                  n.createElement(vy, {
                    connectedDBCount: e,
                    maxDbCount: t,
                  })
                ),
                n.createElement(
                  de.A,
                  {
                    direction: "column",
                    alignItems: "center",
                  },
                  n.createElement(
                    Vt.A,
                    {
                      size: "l",
                      use: "primary",
                      theme: "success",
                      onClick: l ? o : r,
                      loading: a,
                      loadingTip: n.createElement(Ut.A, {
                        id: "tinydbLandings.loading",
                      }),
                    },
                    l
                      ? n.createElement(Ut.A, {
                          id: "tinydbLandings.connectToMore",
                        })
                      : n.createElement(Ut.A, {
                          id: "tinydbLandings.contactSales",
                        })
                  )
                )
              )
            );
          };
        Ay.propTypes = {
          connectedDBCount: w().number.isRequired,
          maxDbCount: w().number.isRequired,
          isConnectLoading: w().bool.isRequired,
          onContactSalesClick: w().func.isRequired,
          onConnectDbClick: w().func.isRequired,
        };
        const Cy = Ay,
          Sy = ({ userRole: e }) => {
            const { isConnectDBInProcess: t, onConnectDb: a } = ky(),
              r = (0, l.d4)(Ha),
              o = (0, l.d4)(He.Lf);
            (0, n.useEffect)(() => {
              t ||
                b({
                  action: xm(void 0),
                  label: "table tiny - show limit popup",
                });
            }, [t]);
            const s = r >= 2;
            return (
              (0, n.useEffect)(
                () =>
                  ((e, t) =>
                    b({
                      action: xm(e),
                      label: `table tiny - ${t} limit`,
                    }))(e, o),
                [s, e, o]
              ),
              n.createElement(
                $t.A,
                {
                  hMin: 400,
                },
                n.createElement(Cy, {
                  connectedDBCount: r,
                  maxDbCount: 2,
                  isConnectLoading: t,
                  onContactSalesClick: () => {
                    ((e) => {
                      b({
                        action: xm(e),
                        label: "table tiny - contact sales",
                      });
                    })(e),
                      i.BillingUI.customPlanRequest(!0);
                  },
                  onConnectDbClick: () => {
                    ((e, t) => {
                      b({
                        action: xm(e),
                        label: `table tiny - connect ${t}`,
                      });
                    })(e, o),
                      a();
                  },
                })
              )
            );
          };
        Sy.propTypes = {
          userRole: w().string.isRequired,
        };
        const xy = Sy;
        function Ry() {
          return (
            (Ry = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Ry.apply(null, arguments)
          );
        }
        const Ly = ({ userRole: e, onLogin: t }) =>
          i.USER_ROLES.isGuest(e)
            ? n.createElement(
                Vt.A,
                {
                  theme: "link",
                  type: "primary",
                  size: "m",
                  onClick: t,
                },
                n.createElement(Ut.A, {
                  id: "buttons.logIn",
                })
              )
            : null;
        Ly.propTypes = {
          userRole: w().string.isRequired,
          onLogin: w().func.isRequired,
        };
        const _y = Ly,
          Oy = (0, ce.default)(de.A)`
  position: relative;
  top: 130px;
`,
          Py = ({ userRole: e, onPlansClick: t, onLogin: a }) =>
            n.createElement(
              Oy,
              {
                direction: "column",
                alignItems: "center",
                hMin: 400,
              },
              n.createElement(
                de.A,
                {
                  direction: "column",
                  alignItems: "center",
                },
                n.createElement(
                  ir.A,
                  {
                    size: 500,
                    tag: "p",
                    lineHeight: 1.12,
                    mb: 4,
                    medium: !0,
                  },
                  n.createElement(Ut.A, {
                    id: "tinydbLandings.title",
                  })
                ),
                n.createElement(
                  ir.A,
                  {
                    size: 200,
                    tag: "p",
                    mb: 8,
                  },
                  n.createElement(Ut.A, {
                    id: "tinydbLandings.text",
                  })
                ),
                n.createElement(
                  de.A,
                  {
                    direction: "column",
                    alignItems: "center",
                  },
                  n.createElement(
                    de.A,
                    null,
                    n.createElement(
                      Vt.A,
                      {
                        size: "l",
                        use: "primary",
                        theme: "success",
                        onClick: t,
                      },
                      n.createElement(Ut.A, {
                        id: "limitBlock.pro.upgradeText",
                      })
                    )
                  ),
                  n.createElement(_y, {
                    userRole: e,
                    onLogin: a,
                  })
                )
              )
            );
        Py.propTypes = {
          userRole: w().string.isRequired,
          onPlansClick: w().func.isRequired,
          onLogin: w().func.isRequired,
        };
        const Iy = Py,
          My = ({ userRole: e, onSubscribe: t, onLogin: a }) =>
            n.createElement(
              $t.A,
              {
                hMin: 400,
              },
              n.createElement(Iy, {
                userRole: e,
                onPlansClick: () => {
                  ((e) => {
                    b({
                      action: xm(e),
                      label: "table tiny - see plans",
                    });
                  })(e),
                    t(i.USER_ROLES.pro);
                },
                onLogin: a,
              })
            );
        My.propTypes = {
          userRole: w().string.isRequired,
          onSubscribe: w().func.isRequired,
          onLogin: w().func.isRequired,
        };
        const Dy = ((e) => {
            const t = ({
              modalComponent: t,
              onLoginClick: a = () => {},
              onSubscribeClick: r = () => {},
              onRegisterClick: o = () => {},
              onPageChange: s = () => {},
              ...c
            }) => {
              const [d, p] = (0, n.useState)(!1),
                u = (0, l.d4)(Wo),
                m = (0, l.d4)(Jo);
              return n.createElement(
                de.A,
                {
                  direction: "column",
                  h: "100%",
                },
                n.createElement(
                  e,
                  Ry(
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
                          o();
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
                  xl.A,
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
                modalComponent: w().element,
                onSubscribeClick: w().func,
                onLoginClick: w().func,
                onRegisterClick: w().func,
                onPageChange: w().func,
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
          })(My),
          Fy = () => {
            const { userRole: e } = ct();
            return i.USER_ROLES.hasProduct(e)
              ? n.createElement(xy, {
                  userRole: e,
                })
              : n.createElement(Dy, {
                  userRole: e,
                });
          },
          Ny = (0, ce.default)($t.A)`
  min-height: ${(e) => (e.isFree ? "400px" : "0")};
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  word-break: break-all;
`,
          jy = () => {
            const { userRole: e, isTrialAllowed: t } = ct(),
              a = (0, l.d4)(Qa),
              r = (0, l.d4)(Za),
              o = (() => {
                const e = (0, l.wA)(),
                  t = (0, n.useCallback)(
                    (t) => {
                      e(ey(t));
                    },
                    [e]
                  );
                return t;
              })(),
              s = (() => {
                const e = (0, l.wA)();
                return (0, n.useCallback)(() => {
                  e(Xm(!1));
                }, [e]);
              })(),
              c = (0, n.useCallback)(() => window.location.reload(), []),
              d = (0, n.useCallback)(() => {
                const t = (0, Ym.getLastAvailablePage)(e);
                s(), o(t);
              }, [o, s, e]);
            return a && !r
              ? n.createElement(
                  $t.A,
                  {
                    position: "absolute",
                    zIndex: 2,
                    w: "100%",
                  },
                  n.createElement(Fy, null)
                )
              : n.createElement(
                  Ny,
                  {
                    position: "absolute",
                    zIndex: 2,
                    w: "100%",
                    isFree: !i.USER_ROLES.hasProduct(e),
                  },
                  n.createElement(
                    lr.ConditionalWrapper,
                    {
                      condition: !i.USER_ROLES.hasProduct(e),
                      wrapper: (e) => n.createElement(Gm.A, null, e),
                    },
                    n.createElement(
                      $t.A,
                      {
                        pt: 46,
                      },
                      n.createElement(Hm(), {
                        ga: b,
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
          qy = (0, ce.default)($t.A)`
  background: #fff;
  opacity: 0.8;
`,
          $y = ({ fields: e = "" }) =>
            n.createElement(
              $t.A,
              {
                position: "relative",
              },
              n.createElement(qy, {
                w: "100%",
                h: "100%",
                position: "absolute",
                zIndex: 1,
              }),
              n.createElement(Wm, {
                fields: e,
                blurred: !0,
              })
            );
        $y.propTypes = {
          fields: w().string,
        };
        const Uy = n.memo($y);
        var Vy = a(27394);
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
        const Ky = ({
          title: e = null,
          description: t = null,
          withButton: a = !1,
          withIcon: r = !1,
          onClick: o = null,
          ...l
        }) =>
          n.createElement(
            Vy.A,
            zy(
              {
                icon: !!r && (0, Vy.h)("table"),
              },
              l
            ),
            n.createElement(
              Vy.A.Title,
              null,
              e ||
                n.createElement(Ut.A, {
                  id: "noresults.title",
                })
            ),
            n.createElement(
              Vy.A.Description,
              null,
              t ||
                n.createElement(Ut.A, {
                  id: "noresults.body",
                })
            ),
            a && Boolean(o)
              ? n.createElement(
                  $t.A,
                  {
                    mt: 4,
                  },
                  n.createElement(
                    Vt.A,
                    {
                      onClick: o,
                    },
                    n.createElement(Ut.A, {
                      id: "noresults.clearFilters",
                    })
                  )
                )
              : null
          );
        Ky.propTypes = {
          title: w().oneOfType([w().object, w().string]),
          description: w().oneOfType([w().object, w().string]),
          withButton: w().bool,
          withIcon: w().bool,
          onClick: w().func,
        };
        const By = Ky,
          Jy = () => {
            const e = (0, l.d4)(Bo),
              t = (0, l.wA)(),
              a = (0, l.d4)(go),
              r = (0, n.useCallback)(() => {
                t(Xc()),
                  b({
                    action: "Table",
                    label: `click Clear filters - ${Rm(a)}`,
                  });
              }, [t]);
            return (
              (0, n.useEffect)(() => {
                b(
                  e
                    ? {
                        action: "Table",
                        label: `show Clear filters - ${Rm(a)}`,
                      }
                    : {
                        action: "No data",
                        label: `Table - ${Rm(a)}`,
                      }
                );
              }, []),
              n.createElement(
                $t.A,
                {
                  mt: 6,
                },
                n.createElement(By, {
                  title: n.createElement(Ut.A, {
                    id: "noresults.table.title",
                    values: {
                      intersectionType: n.createElement(Ut.A, {
                        id: `noresults.table.intersectionType.${a}`,
                      }),
                    },
                  }),
                  description: n.createElement(Ut.A, {
                    id: `noresults.table.body.${a}`,
                  }),
                  withButton: e,
                  onClick: r,
                  withIcon: !0,
                })
              )
            );
          },
          Wy = ({
            isFetching: e = !1,
            hasData: t = !0,
            isLoaded: a = !1,
            hasError: r = !1,
            fields: o = "",
            showLimit: l = !1,
            children: i = null,
          }) =>
            e
              ? n.createElement(Wm, {
                  fields: o,
                })
              : !t && a
              ? n.createElement(
                  $t.A,
                  {
                    mt: 10,
                  },
                  n.createElement(Jy, null)
                )
              : r
              ? n.createElement(zm, null)
              : l
              ? n.createElement(
                  n.Fragment,
                  null,
                  i,
                  n.createElement(
                    de.A,
                    {
                      position: "relative",
                      direction: "column",
                    },
                    n.createElement(Uy, {
                      fields: o,
                    }),
                    n.createElement(jy, null)
                  )
                )
              : i;
        Wy.propTypes = {
          isFetching: w().bool,
          hasData: w().bool,
          isLoaded: w().bool,
          hasError: w().bool,
          children: w().any,
          fields: w().string,
          showLimit: w().bool,
        };
        const Gy = Wy;
        var Yy = a(61105);
        const Hy = "Pagination",
          Qy = () => {
            b({
              action: Hy,
              label: "first page",
            });
          },
          Zy = () => {
            b({
              action: Hy,
              label: "prev",
            });
          },
          Xy = () => {
            b({
              action: Hy,
              label: "next",
            });
          },
          eg = () => {
            b({
              action: Hy,
              label: "last page",
            });
          },
          tg = (e) => {
            b({
              action: Hy,
              label: "page number + enter",
              value: e,
            });
          },
          ag = (e) => {
            b({
              action: Hy,
              label: "page number + button",
              value: e,
            });
          },
          rg = (e) => {
            b({
              action: Hy,
              label: "page number",
              value: e,
            });
          },
          ng = () => ({
            gaClickFirstPage: Qy,
            gaClickPrevPage: Zy,
            gaClicNextPage: Xy,
            gaSubmitInput: tg,
            gaClickEnter: ag,
            gaClickLastPage: eg,
            gaClickPage: rg,
          });
        function og() {
          return (
            (og = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            og.apply(null, arguments)
          );
        }
        const lg = ({ ...e }) => {
            const {
                gaClickFirstPage: t,
                gaClickPrevPage: a,
                gaClicNextPage: r,
                gaSubmitInput: o,
                gaClickLastPage: i,
                gaClickPage: s,
              } = ng(),
              { locale: c } = (0, pe.A)(),
              d = (0, l.d4)(Jo),
              p = (0, l.d4)(Dm),
              u = uy(),
              [m, y] = (0, n.useState)(d);
            (0, n.useEffect)(() => {
              u || y(d);
            }, [y, d, u]);
            const g = (0, l.wA)(),
              h = (0, n.useCallback)(
                (e) => {
                  s(e),
                    g(ey(e)),
                    setTimeout(() => {
                      Vc(nc);
                    }, 100);
                },
                [g]
              );
            return p <= 1
              ? null
              : n.createElement(
                  de.A,
                  og({}, e, {
                    alignItems: "center",
                  }),
                  n.createElement(
                    Yy.A,
                    {
                      currentPage: m,
                      onCurrentPageChange: h,
                      totalPages: p,
                      locale: c,
                      "aria-controls": nc,
                    },
                    n.createElement(Yy.A.FirstPage, {
                      onClick: t,
                    }),
                    n.createElement(Yy.A.PrevPage, {
                      onClick: a,
                    }),
                    n.createElement(Yy.A.NextPage, {
                      onClick: r,
                    }),
                    n.createElement(Yy.A.PageInput, {
                      onKeyPress: ({ key: e }) => {
                        "Enter" === e && o();
                      },
                    }),
                    n.createElement(Yy.A.TotalPages, {
                      mr: 4,
                      onClick: i,
                    })
                  )
                );
          },
          ig = ({
            fields: e = [],
            isLimitedItems: t = !1,
            isLimited: a = !1,
            children: r = null,
            isFetching: o = !1,
            hasData: l = !1,
            isLoaded: i = !1,
            hasError: s = !1,
          }) => {
            const c = t || a;
            return n.createElement(
              Gy,
              {
                isFetching: o,
                hasData: l,
                isLoaded: i,
                hasError: s,
                fields: e.join("/"),
                showLimit: c,
              },
              !a && r,
              !c &&
                n.createElement(lg, {
                  ml: 5,
                  mt: 5,
                })
            );
          };
        ig.propTypes = {
          isLimitedItems: w().bool,
          isLimited: w().bool,
          children: w().oneOfType([w().element, w().array]),
          isFetching: w().bool,
          hasData: w().bool,
          isLoaded: w().bool,
          hasError: w().bool,
          fields: w().array,
        };
        const sg = ig;
        function cg() {
          return (
            (cg = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            cg.apply(null, arguments)
          );
        }
        const dg = [1e3, 10],
          pg = {
            overflow: "hidden",
          },
          ug = ({ children: e, ...t }) =>
            n.createElement(
              Nr.Ay.Trigger,
              cg(
                {
                  "data-at": "tooltip-trigger",
                },
                t
              ),
              e
            ),
          mg = ({ children: e, ...t }) => n.createElement(Nr.Ay.Popper, t, e),
          yg = ({ children: e, ...t }) =>
            n.createElement(
              Nr.Ay,
              cg(
                {
                  interaction: "hover",
                  timeout: dg,
                },
                t
              ),
              e
            ),
          gg = ({ title: e, children: t, ...a }) =>
            n.createElement(
              Nr.Ay,
              cg(
                {
                  interaction: "hover",
                  timeout: dg,
                },
                a
              ),
              n.createElement(
                Nr.Ay.Trigger,
                {
                  "data-at": "tooltip-trigger",
                  style: pg,
                },
                t
              ),
              n.createElement(
                Nr.Ay.Popper,
                {
                  "data-at": "tooltip-popper",
                },
                e
              )
            );
        (gg.propTypes = {
          title: w().oneOfType([w().string, w().object]).isRequired,
          children: w().element.isRequired,
        }),
          (yg.propTypes = {
            children: w().node.isRequired,
          }),
          (mg.propTypes = {
            children: w().node.isRequired,
          }),
          (ug.propTypes = {
            children: w().node.isRequired,
          });
        (ug.displayName = "Trigger"),
          (mg.displayName = "Popper"),
          (yg.Trigger = ug),
          (yg.Popper = mg);
        w().oneOfType([w().string, w().element]),
          w().oneOfType([w().string, w().element]),
          w().number,
          w().number,
          w().number;
        const hg = (e) => e.filter(({ visible: e }) => void 0 === e || e),
          fg = (e, t) =>
            [...new Array(t)].map(() =>
              Object.fromEntries(e.map(({ name: e }) => [e, ""]))
            ),
          bg = i.USER_ROLES.pro,
          Eg = ({
            data: e = [],
            sort: t = [],
            tableFields: a = [],
            tableId: r = "",
            children: o = null,
            isFetching: l = !1,
            isLimited: i = !1,
            onSort: s = () => {},
          }) => {
            const [c, d] = (0, n.useState)(!1),
              {
                isLimited: p,
                openLimitPopup: u,
                RenderModal: m,
              } = fi("filter_sorting", bg),
              y = (0, n.useMemo)(
                () =>
                  i
                    ? ((e) => fg(e, 10))(hg(a))
                    : l
                    ? ((e) => fg(e, 3))(hg(a))
                    : e,
                [i, l, e, a]
              );
            return n.createElement(
              dc.Ay,
              {
                data: y,
                sort: t,
                id: r,
                onSortChange: (e) => {
                  return p
                    ? (u(), void d(!0))
                    : (s(...e),
                      b({
                        action: "Table sort",
                        label: `sort by ${e[0]} ${e[1].toUpperCase()}`,
                      }),
                      (t = e[0]),
                      (a = e[1]),
                      Gl.A.track(Gl.A.eventName.sortItems, {
                        item_location: "keyword_gap.table.sort",
                        item_label: E(t),
                        type: a,
                      }),
                      !1);
                  var t, a;
                },
                "data-at": "data-table",
                "data-path": "keyword_gap.table.sort",
                compact: !0,
              },
              o,
              n.createElement(m, {
                visible: c,
                onClose: () => d(!1),
                gaContext: "sorting",
              })
            );
          };
        Eg.propTypes = {
          data: w().array,
          sort: w().array,
          tableId: w().string,
          onSort: w().func,
          children: w().oneOfType([w().element, w().array]),
          isFetching: w().bool,
          isLimited: w().bool,
          tableFields: w().array,
        };
        const kg = n.memo(Eg);
        a(90655);
        w().number.isRequired, w().object;
        const wg = ({
          items: e = [],
          sortField: t = "traffic",
          sortDirection: a = "desc",
          isLoaded: r = !1,
          tableId: o = "table",
          tableName: l = "table",
          tableFields: i = [],
          isFetching: s = !1,
          hasData: c = !1,
          hasError: d = !1,
          isLimited: p = !1,
          thead: u = null,
          children: m = null,
          page: y = 0,
          total: g = 0,
          onSort: h = () => {},
        }) => {
          const f = (({
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
                  : t % e)({
                itemsOnPage: r,
                total: e,
                page: a,
              }))({
              page: y,
              total: g,
              itemsCount: e.length,
            }),
            b = (0, n.useMemo)(() => [t, a], [t, a]),
            E = (0, n.useMemo)(() => i.map(({ name: e }) => e), [i]);
          return n.createElement(
            kg,
            {
              data: e,
              sort: b,
              tableId: o,
              tableName: l,
              tableFields: i,
              isFetching: s,
              isLimited: p,
              onSort: h,
            },
            u,
            n.createElement(
              sg,
              {
                tableId: o,
                isLoaded: r,
                fields: E,
                isLimitedItems: f,
                isFetching: s,
                hasData: c,
                hasError: d,
                isLimited: p,
              },
              m
            )
          );
        };
        wg.propTypes = {
          items: w().array,
          sortField: w().string,
          sortDirection: w().oneOf(["asc", "desc"]),
          isLoaded: w().bool,
          tableId: w().string,
          tableName: w().string,
          tableFields: w().array,
          thead: w().element,
          isFetching: w().bool,
          hasData: w().bool,
          hasError: w().bool,
          isLimited: w().bool,
          onSort: w().func,
          children: w().element,
          page: w().number,
          total: w().number,
        };
        const vg = n.memo(wg),
          Tg = "position_",
          Ag =
            (i.USER_ROLES.pro,
            () => {
              const e = (0, l.d4)(nl);
              return Array.isArray(e) && e.length > 0;
            }),
          Cg = () => {
            const e = (0, l.d4)(Xo),
              t = (0, l.d4)(rl),
              a = Ag();
            return {
              isLoading: e || null === t,
              showSkeleton: e && !a,
            };
          },
          Sg = ({ value: e }) => {
            const t = (0, l.d4)(za),
              a = (0, l.d4)((a) => Ka(a, t, e));
            return n.createElement(cc.FormattedNumber, {
              style: "decimal",
              value: a,
              minimumFractionDigits: 2,
            });
          };
        Sg.propTypes = {
          value: w().number.isRequired,
        };
        const xg = n.memo(Sg);
        var Rg = a(350);
        const Lg = (e) => (0, l.d4)((t) => Nm(t, e)),
          _g = ({ id: e, data: t = [], keyword: a = "" }) => {
            const r = (0, l.wA)(),
              o = Lg(e);
            return n.createElement(
              de.A,
              {
                mt: "2px",
              },
              n.createElement(Rg.IntentCells, {
                id: e,
                data: t,
                keyword: a,
                onClick: (e) => {
                  r(od.requestSetFilter([e])),
                    r(md()),
                    b({
                      category: "keyword-gap:table",
                      action: "click:intent",
                      label: "table:filter-by-intent",
                    });
                },
                onVisibleChange: (e) => {
                  e &&
                    b({
                      category: "keyword-gap:table",
                      action: "show:intent-tooltip",
                      label: "tooltip:show",
                    });
                },
                inverted: o,
                size: "16px",
              })
            );
          };
        _g.propTypes = {
          id: w().string.isRequired,
          data: w().array,
          keyword: w().string,
        };
        const Og = n.memo(_g),
          Pg = () =>
            n.createElement(
              cr.A,
              {
                w: "16px",
                h: "16px",
              },
              n.createElement("circle", {
                cx: "8",
                cy: "8",
                r: "8",
              })
            ),
          Ig = (0, n.lazy)(() => a.e(838).then(a.bind(a, 81801))),
          Mg = (e) =>
            n.createElement(
              n.Suspense,
              {
                fallback: n.createElement(Pg, null),
              },
              n.createElement(Ig, e)
            ),
          Dg = ({ keyword: e, data: t = {}, positionRef: a = {} }) =>
            n.createElement(
              de.A,
              null,
              n.createElement(
                $t.A,
                {
                  pr: 1,
                  position: "relative",
                  top: "2px",
                },
                n.createElement(Mg, {
                  keyword: e,
                })
              ),
              n.createElement(xc, {
                keyword: e,
                data: t,
                positionRef: a,
                size: 200,
              })
            );
        Dg.propTypes = {
          keyword: w().string.isRequired,
          data: w().object,
          positionRef: w().object,
        };
        const Fg = n.memo(Dg),
          { useIntlHelpers: Ng } = Le(),
          jg = ({ value: e }) => {
            const { formatCompactNumber: t } = Ng();
            return t(e);
          };
        jg.propTypes = {
          value: w().number.isRequired,
        };
        const qg = n.memo(jg),
          $g = (e) => new RegExp(`${Tg}\\d`).test(e),
          Ug = (e) => `${Tg}${e}`,
          Vg = new Map([
            ["searchItems", "asc"],
            ["volume", "desc"],
            ["keywordDifficulty", "desc"],
            ["cpc", "desc"],
            ["comp", "desc"],
            ["results", "desc"],
          ]);
        var zg = a(59399),
          Kg = a(45133),
          Bg = a(11175),
          Jg = a(55412);
        const Wg = "Table",
          Gg = () =>
            b({
              action: Wg,
              label: "Position URL Show",
            }),
          Yg = () =>
            b({
              action: Wg,
              label: "Position URL Copy",
            }),
          Hg = () =>
            b({
              action: Wg,
              label: "Position URL Open",
            }),
          Qg = () =>
            b({
              action: Wg,
              label: "Position URL Click",
            }),
          Zg = () => ({
            gaChangeVisibility: Gg,
            gaCopyClick: Yg,
            gaOpenUrl: Hg,
          }),
          Xg = (0, ce.default)($t.A)`
  text-align: right;
  cursor: pointer;
`,
          eh = (0, ce.default)(Nr.Ay.Trigger)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,
          th = (0, ce.default)($t.A)`
  word-break: break-all;
`,
          ah = (e) => {
            const { children: t, url: a } = e,
              [r, o] = (0, n.useState)(!1),
              { gaChangeVisibility: l, gaCopyClick: i, gaOpenUrl: s } = Zg(),
              [c, d] = (0, n.useState)(!1);
            return n.createElement(
              Nr.Ay,
              {
                placement: "top-end",
                timeout: [750, 100],
                wMin: 250,
                onVisibleChange: (e) => {
                  e ? r || e === c || l() : o(!1), d(e);
                },
              },
              n.createElement(
                eh,
                {
                  "data-at": "tooltip-trigger",
                  tabIndex: 0,
                },
                n.createElement(Xg, null, t)
              ),
              r
                ? n.createElement(
                    Nr.Ay.Popper,
                    {
                      "data-at": "tooltip-popper",
                    },
                    n.createElement(
                      de.A,
                      {
                        alignItems: "center",
                      },
                      n.createElement(Jg.A, {
                        mr: 2,
                        color: "green",
                      }),
                      n.createElement(
                        ir.A,
                        {
                          size: 200,
                          color: "green",
                        },
                        n.createElement(Ut.A, {
                          id: "kgTable.linkTooltip.linkCopied",
                        })
                      )
                    )
                  )
                : n.createElement(
                    Nr.Ay.Popper,
                    {
                      "data-at": "tooltip-popper",
                      wMax: "min-content",
                    },
                    n.createElement(
                      de.A,
                      {
                        direction: "column",
                      },
                      n.createElement(
                        th,
                        {
                          mb: 2,
                          onClick: Qg,
                        },
                        a
                      ),
                      n.createElement(
                        de.A,
                        null,
                        n.createElement(
                          zg.CopyToClipboard,
                          {
                            text: a,
                            onCopy: () => {
                              o(!0), i();
                            },
                          },
                          n.createElement(
                            Vt.A,
                            {
                              mr: 2,
                            },
                            n.createElement(
                              Vt.A.Addon,
                              null,
                              n.createElement(Kg.A, null)
                            ),
                            n.createElement(
                              Vt.A.Text,
                              null,
                              n.createElement(Ut.A, {
                                id: "kgTable.linkTooltip.copyUrl",
                              })
                            )
                          )
                        ),
                        n.createElement(
                          Vt.A,
                          {
                            onClick: () => {
                              window.open(a, "_blank"), s();
                            },
                          },
                          n.createElement(
                            Vt.A.Addon,
                            null,
                            n.createElement(Bg.A, null)
                          ),
                          n.createElement(
                            Vt.A.Text,
                            null,
                            n.createElement(Ut.A, {
                              id: "kgTable.linkTooltip.openUrl",
                            })
                          )
                        )
                      )
                    )
                  )
            );
          };
        ah.propTypes = {
          children: w().node.isRequired,
          url: w().string.isRequired,
        };
        const rh = n.memo(ah),
          nh = ({ url: e, value: t = 0 }) =>
            t
              ? n.createElement(
                  rh,
                  {
                    url: e,
                  },
                  n.createElement(cc.FormattedNumber, {
                    value: t,
                  })
                )
              : n.createElement(cc.FormattedNumber, {
                  value: t,
                });
        nh.propTypes = {
          url: w().string.isRequired,
          value: w().number,
        };
        const oh = {
            Intent: Og,
            Keyword: Fg,
            SearchItem: n.memo(nh),
            Number: qg,
            hooks: {
              useWinnerCell: () => {
                const e = (0, l.d4)(lo.S3),
                  t = Od(),
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
                                  ? {
                                      min: t,
                                      index: a,
                                    }
                                  : e,
                              {
                                min: Number.MAX_VALUE,
                                index: null,
                              }
                            );
                          return a;
                        })(r, a)
                      : null;
                    return t === Ug(n) ? "success" : null;
                  },
                };
              },
            },
          },
          lh = () =>
            b({
              category: "keyword-gap:table",
              action: "click:intent-detail",
              label: "kb:show",
            }),
          ih = () => ({
            gaKBShow: lh,
          }),
          sh = () => {
            const { gaKBShow: e } = ih(),
              t = (0, n.useCallback)(() => {
                e();
              }, [e]);
            return n.createElement(
              Ki.A,
              {
                href: "/kb/28-keyword-gap ",
                target: "_blank",
                onClick: t,
              },
              n.createElement(Ut.A, {
                id: "featurePopover.intent.kbLink",
              })
            );
          },
          ch = ({ title: e = "", children: t = null }) =>
            n.createElement(
              n.Fragment,
              null,
              e &&
                n.createElement(
                  ir.A,
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
                ir.A,
                {
                  size: 200,
                  tag: "p",
                  "data-at": "tooltip-text",
                },
                t
              )
            );
        ch.propTypes = {
          title: w().oneOfType([w().element, w().string]),
          children: w().oneOfType([w().element, w().string]),
        };
        const dh = ch,
          ph = () => {
            const e = (0, l.wA)(),
              t = (0, n.useRef)(null),
              a = Ag(),
              { isLoading: r } = Cg(),
              { formatMessage: o } = (0, pe.A)(),
              i = (0, l.d4)(jm),
              s = (0, l.d4)(qm),
              c = (0, n.useCallback)(() => {
                e(sy()),
                  b({
                    action: "Select rows",
                    label: t.current.checked ? "all on page" : "deselect all",
                  });
              }, [e]),
              d = a && !r && i,
              p = a && !r && s && !i;
            return n.createElement(
              de.A,
              {
                h: 14,
              },
              n.createElement(
                Cd.A,
                {
                  size: "m",
                  "aria-label": o({
                    id: "ariaLabel.selectAllKeywords",
                  }),
                },
                n.createElement(Cd.A.Value, {
                  mt: 0,
                  ref: t,
                  checked: d,
                  indeterminate: p,
                  onChange: c,
                })
              )
            );
          };
        function uh() {
          return (
            (uh = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            uh.apply(null, arguments)
          );
        }
        const mh = ({ index: e, ...t }) =>
          n.createElement(
            Gr,
            uh(
              {
                color: Hr(e),
              },
              t
            )
          );
        mh.propTypes = {
          index: w().number.isRequired,
        };
        const yh = mh,
          gh = () =>
            (0, sa.Mz)([lo.N3, (e, t) => t, so], (e, t, a) => ({
              ...e[t],
              mode: a,
            })),
          hh = () => {
            const e = (0, l.d4)(Go),
              t = (0, l.d4)(Yo);
            return ["number" == typeof e ? `${Tg}${e}` : e, t];
          },
          fh = {
            asc: "desc",
            desc: "asc",
          },
          bh = (0, ce.default)($t.A)`
  width: 100%;
  overflow: hidden;

  ${({ searchItemsLength: e }) =>
    e > 2 ? "@media screen and (min-width: 1540px) {width: 120px;}" : ""}
`,
          Eh = (0, ce.default)(de.A)`
  text-transform: capitalize;
  color: #6c6e79;
`,
          kh = ({ index: e, setRef: t, searchItemsLength: a = 0 }) => {
            const {
              searchItem: r,
              searchType: o,
              keywordType: i,
              mode: s,
            } = ((e) => {
              const t = (0, n.useMemo)(gh, []);
              return (0, l.d4)((a) => t(a, e));
            })(e);
            return n.createElement(
              bh,
              {
                searchItemsLength: a,
                ref: t,
              },
              n.createElement(
                de.A,
                {
                  alignItems: "center",
                },
                n.createElement(
                  $t.A,
                  {
                    w: 12,
                    h: 12,
                    pr: 1,
                  },
                  n.createElement(yh, {
                    index: e,
                    radius: 12,
                  })
                ),
                n.createElement(
                  hs.A,
                  {
                    tooltip: !1,
                  },
                  _d(Rt(r), o)
                )
              ),
              "advanced" === s &&
                n.createElement(
                  Eh,
                  {
                    ml: 4,
                  },
                  n.createElement(Ut.A, {
                    id: `keywordTypes.short.${i}`,
                  })
                )
            );
          };
        kh.propTypes = {
          index: w().number.isRequired,
          searchItemsLength: w().number,
        };
        const wh = n.memo(kh),
          vh = ({ miniKOPositionRef: e }) => {
            const [t, a] = hh(),
              { getSortByAriaLabel: r } = ((e, t) => {
                const { formatMessage: a } = (0, pe.A)();
                return {
                  getSortByAriaLabel: (r, n = "") => {
                    const o = $g(r),
                      l = e === r ? fh[t] : o ? "asc" : "desc",
                      i = o
                        ? Rt(n)
                        : a({
                            id: `kgTable.header.${r}`,
                          });
                    return a(
                      {
                        id: "ariaLabel.sortByField",
                      },
                      {
                        DIR: a({
                          id: `ariaLabel.${l}Order`,
                        }),
                        FIELD: i,
                      }
                    );
                  },
                };
              })(t, a),
              o = "advanced" === (0, l.d4)(so) ? 60 : 40,
              i = Od(),
              s = i?.length ?? 0;
            return n.createElement(
              Gm.A,
              {
                zIndex: 3,
                top: 60,
              },
              n.createElement(
                dc.Ay.Head,
                {
                  wMin: 1040,
                  h: o,
                },
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "id",
                    "data-at": "id-header",
                    justifyContent: "center",
                    wMin: 49,
                    flex: 0,
                  },
                  n.createElement(ph, null)
                ),
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "keyword",
                    "data-at": "keyword-header",
                    flex: "1 0 150px",
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    placement: "top-start",
                    title: n.createElement(
                      dh,
                      {
                        title: n.createElement(Ut.A, {
                          id: "kgTable.header.keyword",
                        }),
                      },
                      n.createElement(Ut.A, {
                        id: "kgTable.header.tooltip.keyword",
                      })
                    ),
                  },
                  n.createElement(
                    hs.A,
                    {
                      tooltip: !1,
                    },
                    n.createElement(Ut.A, {
                      id: "kgTable.header.keyword",
                    })
                  )
                ),
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "intents",
                    "data-at": "intents-header",
                    alignItems: "left",
                    wMin: 52,
                    wMax: 52,
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    title: n.createElement(
                      dh,
                      {
                        title: n.createElement(Ut.A, {
                          id: "columns.intent",
                        }),
                      },
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(Ut.A, {
                          id: "tooltips.column.positions.intents",
                        }),
                        n.createElement(sh, null)
                      )
                    ),
                  },
                  n.createElement(
                    hs.A,
                    {
                      tooltip: !1,
                    },
                    n.createElement(Ut.A, {
                      id: "columns.intent",
                    })
                  )
                ),
                i.map((t, a) => {
                  const o = Ug(a);
                  return n.createElement(
                    dc.Ay.Column,
                    {
                      name: o,
                      "data-at": `${o}-header`,
                      key: o,
                      sortable: "asc",
                      flex: "0 0 100px",
                      wMax: 150,
                      justifyContent: "flex-end",
                      "aria-label": r(o, t),
                      tag: Nr.Ay,
                      timeout: Kt.a4,
                      title: n.createElement(Ut.A, {
                        id: "kgTable.header.tooltip.competitor",
                      }),
                    },
                    n.createElement(wh, {
                      index: a,
                      setRef: 0 === a ? e : null,
                      searchItemsLength: s,
                    })
                  );
                }),
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "volume",
                    "data-at": "volume-header",
                    sortable: !0,
                    wMin: 69,
                    wMax: 80,
                    justifyContent: "flex-end",
                    "aria-label": r("volume"),
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    title: n.createElement(
                      dh,
                      {
                        title: n.createElement(Ut.A, {
                          id: "kgTable.header.volume",
                        }),
                      },
                      n.createElement(Ut.A, {
                        id: "kgTable.header.tooltip.volume",
                      })
                    ),
                  },
                  n.createElement(
                    hs.A,
                    {
                      tooltip: !1,
                    },
                    n.createElement(Ut.A, {
                      id: "kgTable.header.volume",
                    })
                  )
                ),
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "keywordDifficulty",
                    "data-at": "keywordDifficulty-header",
                    sortable: !0,
                    wMin: 64,
                    wMax: 80,
                    justifyContent: "flex-end",
                    "aria-label": r("kd"),
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    title: n.createElement(
                      dh,
                      {
                        title: n.createElement(Ut.A, {
                          id: "kgTable.header.kd",
                        }),
                      },
                      n.createElement(
                        $t.A,
                        null,
                        n.createElement(Ut.A, {
                          id: "kgTable.header.tooltip.kd",
                        }),
                        n.createElement(
                          $t.A,
                          null,
                          n.createElement(
                            Ki.A,
                            {
                              href: "/kb/257-keyword-overview#kdscore",
                              target: "_blank",
                            },
                            n.createElement(Ut.A, {
                              id: "kgTable.header.tooltip.kbLink",
                            })
                          )
                        )
                      )
                    ),
                  },
                  n.createElement(Ut.A, {
                    id: "kgTable.header.kd",
                  })
                ),
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "cpc",
                    "data-at": "cpc-header",
                    sortable: !0,
                    wMin: 69,
                    wMax: 80,
                    justifyContent: "flex-end",
                    "aria-label": r("cpc"),
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    title: n.createElement(
                      dh,
                      {
                        title: n.createElement(Ut.A, {
                          id: "kgTable.header.cpc",
                        }),
                      },
                      n.createElement(Ut.A, {
                        id: "kgTable.header.tooltip.cpc",
                      })
                    ),
                  },
                  n.createElement(Ut.A, {
                    id: "kgTable.header.cpc",
                  })
                ),
                n.createElement(
                  dc.Ay.Column,
                  {
                    name: "comp",
                    "data-at": "comp-header",
                    sortable: !0,
                    wMin: 57,
                    wMax: 80,
                    justifyContent: "flex-end",
                    "aria-label": r("competitive"),
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    title: n.createElement(
                      dh,
                      {
                        title: n.createElement(Ut.A, {
                          id: "kgTable.header.competitive",
                        }),
                      },
                      n.createElement(Ut.A, {
                        id: "kgTable.header.tooltip.comp",
                      })
                    ),
                  },
                  n.createElement(Ut.A, {
                    id: "kgTable.header.competitive",
                  })
                ),
                n.createElement(
                  dc.Ay.Column,
                  {
                    "data-at": "results-header",
                    name: "results",
                    sortable: !0,
                    wMin: 81,
                    wMax: 92,
                    justifyContent: "flex-end",
                    "aria-label": r("results"),
                    tabIndex: 0,
                    tag: Nr.Ay,
                    timeout: Kt.a4,
                    title: n.createElement(
                      dh,
                      {
                        title: n.createElement(Ut.A, {
                          id: "kgTable.header.results",
                        }),
                      },
                      n.createElement(Ut.A, {
                        id: "kgTable.header.tooltip.results",
                      })
                    ),
                  },
                  n.createElement(Ut.A, {
                    id: "kgTable.header.results",
                  })
                )
              )
            );
          },
          Th = ({ id: e, keyword: t }) => {
            const a = (0, l.wA)(),
              r = (0, n.useRef)(null),
              { formatMessage: o } = (0, pe.A)(),
              i = Lg(e),
              s = (0, n.useCallback)(() => {
                a(ny(e)),
                  b({
                    action: "Select rows",
                    label:
                      (r.current.checked ? "select" : "unselect") + " specific",
                  });
              }, [e, a]);
            return n.createElement(
              Cd.A,
              {
                size: "m",
                "aria-label": o(
                  {
                    id: "ariaLabel.selectKeyword",
                  },
                  {
                    KEYWORD: t,
                  }
                ),
              },
              n.createElement(Cd.A.Value, {
                ref: r,
                checked: i,
                onChange: s,
              })
            );
          };
        Th.propTypes = {
          id: w().string.isRequired,
          keyword: w().string.isRequired,
        };
        const Ah = n.memo(Th),
          Ch = [
            {
              name: "id",
              align: "right",
            },
            {
              name: "keyword",
              align: "right",
            },
            {
              name: "intents",
              align: "center",
            },
            {
              name: "volume",
              align: "right",
              sortable: !0,
            },
            {
              name: "keywordDifficulty",
              align: "right",
              sortable: !0,
            },
            {
              name: "cpc",
              align: "right",
              sortable: !0,
            },
            {
              name: "comp",
              align: "right",
              sortable: !0,
            },
            {
              name: "results",
              align: "right",
              sortable: !0,
            },
          ],
          Sh = Ch.map(({ name: e }) => e),
          xh = "keyword_gap.table",
          { useWinnerCell: Rh } = oh.hooks,
          Lh = () => {
            const e = (0, n.useRef)(),
              { formatNumber: t, formatMessage: a } = (0, pe.A)(),
              r = (0, l.wA)(),
              { isKeywordSelected: o } = (() => {
                const e = (0, l.d4)(Fm);
                return {
                  isKeywordSelected: (0, n.useCallback)(
                    (t) => e.includes(t),
                    [e]
                  ),
                };
              })(),
              i = (0, l.d4)(To),
              s = (0, l.d4)(Jo),
              {
                gaWidgetNoData: c,
                gaWidgetSuccess: d,
                gaWidgetSww: p,
              } = (0, n.useMemo)(
                () => ({
                  gaWidgetNoData: () =>
                    Gl.h.gaWidgetNoData({
                      itemLocation: xh,
                    }),
                  gaWidgetSuccess: () =>
                    Gl.h.gaWidgetSuccess({
                      itemLocation: xh,
                    }),
                  gaWidgetSww: () =>
                    Gl.h.gaWidgetSww({
                      itemLocation: xh,
                    }),
                }),
                []
              ),
              { isLoading: u } = Cg(),
              m = (() => {
                const e = (0, l.d4)(nl).map((e) => {
                  const t = e.positions.reduce(
                    (e, t, a) => ({
                      ...e,
                      [`${Tg}${a}`]: t,
                    }),
                    {}
                  );
                  return {
                    ...e,
                    ...t,
                  };
                });
                return e;
              })(),
              y = Ag(),
              g = (0, l.d4)(el),
              [h, f] = hh(),
              b = (0, l.d4)(Mm),
              E = Od(),
              { getTheme: k } = Rh();
            (0, n.useEffect)(() => {
              u || y || c();
            }, [c, u, y]),
              (0, n.useEffect)(() => {
                g && !u && p();
              }, [p, g, u]),
              (0, n.useEffect)(() => {
                g || !y || u || d();
              }, [d, g, u, y]);
            const w = (0, n.useCallback)(
                (e) => {
                  const t = $g(e) ? Number(e.match(/\d+/)[0]) : e;
                  return (
                    r(Qm(t)),
                    setTimeout(() => {
                      Vc(nc);
                    }, 100),
                    !1
                  );
                },
                [r]
              ),
              v = ((e, t) =>
                e && 0 !== e.length
                  ? [
                      e[0],
                      ...t.map((e, t) => ({
                        name: Ug(t),
                      })),
                      ...e.slice(1),
                    ]
                  : [])(Ch, E),
              T = E.map((e, t) => Ug(t));
            return n.createElement(
              "div",
              {
                id: nc,
                "data-at": "keywordgap-table",
                "data-path": xh,
              },
              n.createElement(
                vg,
                {
                  tableId: "kg_table",
                  tableName: "kg_table",
                  tableFields: v,
                  items: m,
                  sortField: h,
                  sortDirection: f,
                  onSort: w,
                  isFetching: u,
                  isLoaded: !u,
                  hasData: !u && y,
                  hasError: g,
                  isLimited: b,
                  thead: n.createElement(vh, {
                    miniKOPositionRef: e,
                  }),
                  total: i,
                  page: s,
                },
                n.createElement(
                  dc.Ay.Body,
                  null,
                  n.createElement(dc.Ay.Row, null, ({ theme: e }, t) => ({
                    theme: o(t.id) ? "info" : e,
                  })),
                  n.createElement(dc.Ay.Cell, {
                    name: [...Sh, ...T].join("/"),
                    alignItems: "baseline",
                    justifyContent: "flex-end",
                  }),
                  n.createElement(
                    dc.Ay.Cell,
                    {
                      name: "id",
                      alignItems: "baseline",
                      justifyContent: "center",
                    },
                    ({ name: e }, t) => ({
                      children: n.createElement(Ah, {
                        id: t?.[e],
                        keyword: t?.keyword,
                      }),
                    })
                  ),
                  n.createElement(
                    dc.Ay.Cell,
                    {
                      name: "keyword",
                      justifyContent: "flex-start",
                    },
                    ({ name: t }, a) => ({
                      children: n.createElement(oh.Keyword, {
                        keyword: a[t],
                        data: a,
                        positionRef: e,
                      }),
                    })
                  ),
                  n.createElement(
                    dc.Ay.Cell,
                    {
                      name: "intents",
                      justifyContent: "center",
                    },
                    ({ name: e }, t) => ({
                      children: n.createElement(oh.Intent, {
                        data: t[e],
                        id: t?.id,
                        keyword: t?.keyword,
                      }),
                    })
                  ),
                  E.map((e, t) => {
                    const r = Ug(t);
                    return n.createElement(
                      dc.Ay.Cell,
                      {
                        key: `${r}${e}`,
                        name: r,
                      },
                      ({ name: o }, l) => {
                        const i = a(
                          {
                            id: "ariaLabel.tableCell.competitor",
                          },
                          {
                            DOMAIN: e,
                            KEYWORD: l?.keyword,
                            VALUE: l[r],
                          }
                        );
                        return {
                          theme: k(o, l?.positions ?? []),
                          children: n.createElement(
                            $t.A,
                            {
                              "aria-label": i,
                            },
                            n.createElement(oh.SearchItem, {
                              url: l.urls[t],
                              value: l[o],
                            })
                          ),
                        };
                      }
                    );
                  }),
                  n.createElement(
                    dc.Ay.Cell,
                    {
                      name: "volume/results",
                    },
                    ({ name: e }, t) => ({
                      children: n.createElement(
                        $t.A,
                        {
                          "aria-label": a(
                            {
                              id: `ariaLabel.tableCell.${e}`,
                            },
                            {
                              VALUE: t[e],
                            }
                          ),
                        },
                        n.createElement(oh.Number, {
                          value: t[e],
                        })
                      ),
                    })
                  ),
                  n.createElement(
                    dc.Ay.Cell,
                    {
                      name: "keywordDifficulty",
                    },
                    ({ name: e }, t) => ({
                      children: n.createElement(
                        $t.A,
                        {
                          "aria-label": a(
                            {
                              id: "ariaLabel.tableCell.kd",
                            },
                            {
                              VALUE: t[e],
                            }
                          ),
                        },
                        n.createElement(Ec(), {
                          value: t[e],
                        })
                      ),
                    })
                  ),
                  n.createElement(
                    dc.Ay.Cell,
                    {
                      name: "cpc",
                    },
                    ({ name: e }, t) => ({
                      children: n.createElement(
                        $t.A,
                        {
                          "aria-label": a(
                            {
                              id: "ariaLabel.tableCell.cpc",
                            },
                            {
                              VALUE: t[e],
                            }
                          ),
                        },
                        n.createElement(xg, {
                          value: t[e],
                        })
                      ),
                    })
                  ),
                  n.createElement(
                    dc.Ay.Cell,
                    {
                      name: "comp",
                    },
                    ({ name: e }, r) => {
                      const o = t(r[e]);
                      return {
                        children: n.createElement(
                          $t.A,
                          {
                            "aria-label": a(
                              {
                                id: "ariaLabel.tableCell.comp",
                              },
                              {
                                VALUE: o,
                              }
                            ),
                          },
                          o
                        ),
                      };
                    }
                  )
                )
              )
            );
          };
        var _h = a(69420);
        const Oh = "all",
          Ph = "selected",
          Ih = "first";
        var Mh = a(56590),
          Dh = a.n(Mh),
          Fh = a(2404),
          Nh = a.n(Fh);
        const jh = {
            phrase: "keyword",
            kd: "keywordDifficulty",
          },
          qh = (e, t) => ({
            isIncludes: !0,
            type: 1,
            field: t,
            criteria: "containing",
            value: e,
          }),
          $h = (e) => {
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
          Uh = (e) => {
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
          Vh = (e) => {
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
          zh = new Map([
            [
              "keywordType",
              (e) =>
                ({
                  branded: 3,
                  notBranded: 0,
                  forOther: 1,
                }[e]),
            ],
          ]),
          Kh = (e) =>
            zh.has(e.field)
              ? {
                  value: zh.get(e.field)(e.value),
                }
              : {
                  operation: e.criteria,
                  value: e.value,
                },
          Bh = (e) => ("number" == typeof e ? `target${e + 1}` : e),
          Jh = (e, t = "", a = "") => {
            if (!e || !Array.isArray(e))
              throw TypeError("getSpectrumTargets: targets is not an array");
            if (e.length < 2)
              throw Error("getSpectrumTargets: targets length less than 2");
            return e.map((e, r) => {
              let n = "";
              if (0 !== t.length && 0 !== a.length)
                switch (a) {
                  case Rp:
                    n = t;
                    break;
                  case _p:
                    n = 0 !== r ? t : "";
                    break;
                  case Lp:
                    n = 0 === r ? t : "";
                    break;
                  default:
                    n = "";
                }
              return {
                product_type: pt.PRODUCT_TYPE[e.dataType],
                type: pt.TARGET_TYPE[e.type],
                value: Ve(e.value, e.type),
                filters: n,
              };
            });
          },
          Wh = new (Dh())(pt.KEYWORDS_LIST_COLUMN),
          Gh = (e) => {
            const t = ((e, t = {}) => {
                const { searchAs: a = "phrase" } = t;
                if (!e || Nh()(e, {})) return {};
                const r = {
                  ...e.advancedApplied,
                  ...(e.search
                    ? {
                        [-1]: qh(e.search, a),
                      }
                    : {}),
                  ...(e.volume ? $h(e.volume) : {}),
                  ...(e.keywordDifficulty ? Uh(e.keywordDifficulty) : {}),
                  ...(e.intent
                    ? ((n = e.intent),
                      n.reduce(
                        (e, t, a) => (
                          (e[`i${a}`] = {
                            isIncludes: !0,
                            type: 0,
                            field: "intents",
                            value: yl.INTENT_IDS.getID(t),
                          }),
                          e
                        ),
                        {}
                      ))
                    : {}),
                  ...(e.position ? Vh(e.position) : {}),
                };
                var n;
                return Object.values(r).reduce((e, t) => {
                  const a = ((r = t.field), jh[r] || r);
                  var r;
                  const n = e[a] || [];
                  return (
                    n.push({
                      sign: t.isIncludes ? "+" : "-",
                      ...Kh(t),
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
              positionFilter: Wh.generateQuery({
                positions: a,
              }),
              restFilters: Wh.generateQuery(r),
              positionFilterType: n,
            };
          },
          Yh = {
            all: "all",
            selected: "selected",
            first: "preselected",
          };
        var Hh = a(11075);
        const Qh = [5e4, 3e4, 1e4, 3e3, 1e3, 500, 100],
          Zh = ({
            exportType: e,
            exportLimit: t,
            setExportType: a,
            setExportLimit: r,
            maxExportLimitCounter: o,
          }) => {
            const { formatMessage: i } = (0, pe.A)(),
              s = py(),
              c = (0, l.d4)(ot),
              d = Qh.reverse()
                .filter((e) => e <= o)
                .map((e) => ({
                  value: e,
                  children: n.createElement(cc.FormattedNumber, {
                    value: e,
                  }),
                }));
            return n.createElement(
              de.A,
              {
                direction: "column",
                "data-at": "amount-selector",
              },
              n.createElement(
                Hh.z6,
                {
                  name: "export_amount_selector",
                  value: e,
                  onChange: (e) => {
                    a(e);
                  },
                  "aria-label": i({
                    id: "ariaLabel.export.amountSelector",
                  }),
                  "aria-required": "true",
                },
                n.createElement(
                  Hh.Ay,
                  {
                    mb: 2,
                    alignItems: "center",
                  },
                  n.createElement(Hh.Ay.Value, {
                    value: Oh,
                    checked: e === Oh,
                    "data-at": "amount-all-radio",
                  }),
                  n.createElement(
                    Hh.Ay.Text,
                    {
                      "data-at": "amount-all-text",
                    },
                    n.createElement(
                      de.A,
                      null,
                      n.createElement(Ut.A, {
                        id: "export.type.all",
                      }),
                      c <= o
                        ? n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                              ir.A,
                              {
                                color: "gray-400",
                                ml: 1,
                                "data-at": "amount-all-value",
                              },
                              n.createElement(Ut.A, {
                                id: "export.type.all.info",
                                values: {
                                  amount: o,
                                },
                              })
                            ),
                            " ",
                            n.createElement(Hc, {
                              tooltip: n.createElement(Ut.A, {
                                id: "export.limitMessage",
                                values: {
                                  total: o,
                                },
                              }),
                            })
                          )
                        : n.createElement(
                            ir.A,
                            {
                              color: "gray-400",
                              ml: 1,
                              "data-at": "amount-all-value",
                            },
                            n.createElement(cc.FormattedNumber, {
                              value: o,
                            })
                          )
                    )
                  )
                ),
                n.createElement(
                  Hh.Ay,
                  {
                    disabled: 0 === s,
                    mb: 2,
                    alignItems: "center",
                  },
                  n.createElement(Hh.Ay.Value, {
                    value: Ph,
                    checked: e === Ph,
                    "data-at": "amount-selected-radio",
                  }),
                  n.createElement(
                    Hh.Ay.Text,
                    {
                      "data-at": "amount-selected-text",
                    },
                    n.createElement(Ut.A, {
                      id: "export.type.selected",
                    }),
                    " (",
                    n.createElement(cc.FormattedNumber, {
                      value: s,
                      "data-at": "amount-all-value",
                    }),
                    ")"
                  )
                ),
                d.length > 0
                  ? n.createElement(
                      Hh.Ay,
                      {
                        alignItems: "center",
                      },
                      n.createElement(Hh.Ay.Value, {
                        value: Ih,
                        checked: e === Ih,
                        "data-at": "amount-first-radio",
                      }),
                      n.createElement(
                        Hh.Ay.Text,
                        {
                          "data-at": "amount-first-text",
                        },
                        n.createElement(Ut.A, {
                          id: "export.type.first",
                        }),
                        n.createElement(er.Ay, {
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
          Xh = ({ gaAction: e = "" }) =>
            n.createElement(
              $t.A,
              null,
              n.createElement(
                ir.A,
                {
                  size: 200,
                },
                n.createElement(Ut.A, {
                  id: "export.export_all",
                }),
                " "
              ),
              n.createElement(
                Ki.A,
                {
                  href: "https://www.semrush.com/company/custom_report/",
                  onClick: () =>
                    b({
                      action: e,
                      label: "custom report link",
                    }),
                },
                n.createElement(
                  ir.A,
                  {
                    size: 200,
                  },
                  n.createElement(Ut.A, {
                    id: "export.export_all.link",
                  })
                )
              )
            );
        Xh.propTypes = {
          gaAction: w().string,
        };
        const ef = Xh,
          tf = ({ onSubmit: e, gaAction: t = "Export" }) => {
            const { formatMessage: a } = (0, pe.A)(),
              [r, o] = (0, n.useState)(Oh),
              [l, i] = (0, n.useState)(!1),
              [s, c] = (0, n.useState)(100),
              d = Lm(),
              p = py(),
              u = (a) => {
                b({
                  action: t,
                  label: `export ${r} to ${a}`,
                  value: {
                    [Oh]: d,
                    [Ph]: p,
                    [Ih]: s,
                  }[r],
                }),
                  e({
                    exportType: r,
                    fileType: a,
                    exportLimit: s,
                    clearSelected: l,
                  });
              };
            return n.createElement(
              $t.A,
              {
                tag: "form",
                action: "",
                wMax: 280,
                "data-at": "export-popup",
              },
              n.createElement(
                $t.A,
                {
                  mb: 4,
                },
                n.createElement(
                  ir.A,
                  {
                    size: 200,
                    bold: !0,
                    color: "gray-800",
                    "data-at": "popup-title",
                  },
                  n.createElement(Ut.A, {
                    id: "export.caption",
                  })
                )
              ),
              n.createElement(Zh, {
                exportType: r,
                exportLimit: s,
                setExportType: o,
                setExportLimit: c,
                maxExportLimitCounter: d,
              }),
              n.createElement(
                $t.A,
                {
                  mt: 3,
                  "data-at": "select-counters",
                },
                n.createElement(
                  $t.A,
                  null,
                  0 !== p &&
                    n.createElement(
                      Cd.A,
                      {
                        mb: 4,
                        disabled: r !== Ph,
                      },
                      n.createElement(Cd.A.Value, {
                        onChange: () => {
                          i(!l),
                            l ||
                              b({
                                action: t,
                                label: "clear selected keywords",
                              });
                        },
                        checked: l,
                        "data-at": "clear-selected",
                      }),
                      n.createElement(
                        Cd.A.Text,
                        null,
                        n.createElement(Ut.A, {
                          id: "export.clearSelected",
                        })
                      )
                    )
                ),
                n.createElement(
                  de.A,
                  {
                    mt: 4,
                  },
                  n.createElement(
                    Vt.A,
                    {
                      use: "primary",
                      onClick: () => u("xlsx"),
                      "data-at": "btn-xls",
                      mr: 2,
                      "aria-label": a({
                        id: "ariaLabel.export.fileType.xlsx",
                      }),
                    },
                    n.createElement(Ut.A, {
                      id: "export.menu_item.xls",
                    })
                  ),
                  n.createElement(
                    Vt.A,
                    {
                      onClick: () => u("csv"),
                      "data-at": "btn-csv",
                      mr: 2,
                      "aria-label": a({
                        id: "ariaLabel.export.fileType.csv",
                      }),
                    },
                    n.createElement(Ut.A, {
                      id: "export.menu_item.csv",
                    })
                  ),
                  n.createElement(
                    Vt.A,
                    {
                      onClick: () => u("stdcsv"),
                      "data-at": "btn-stdcsv",
                      "aria-label": a({
                        id: "ariaLabel.export.fileType.stdcsv",
                      }),
                    },
                    n.createElement(Ut.A, {
                      id: "export.menu_item.stdcsv",
                    })
                  )
                )
              ),
              n.createElement(zt.A, {
                my: 4,
                pr: 8,
                ml: -4,
              }),
              n.createElement(ef, {
                gaAction: t,
              })
            );
          };
        tf.propTypes = {
          onSubmit: w().func.isRequired,
          gaAction: w().string,
        };
        const af = tf,
          rf = "Export",
          nf = ({ isFeatureLimited: e = !1 }) => {
            const { formatMessage: t } = (0, pe.A)(),
              [a, r] = (0, n.useState)(!1),
              o = (() => {
                const [e] = up("(max-width: 1360px)");
                return e;
              })(),
              { fetchExport: i, isLoading: s } = (() => {
                const e = (0, l.wA)(),
                  [t, a] = (0, n.useState)(!1),
                  r = (0, l.d4)(Ho),
                  o = (0, l.d4)(al),
                  i = Lm(),
                  s = dy(),
                  c = (0, l.d4)(za);
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
                        case Oh:
                          e = i;
                          break;
                        case Ph:
                          (e = s?.length ?? 0), (a = s);
                          break;
                        case Ih:
                          e = t.exportLimit;
                          break;
                        default:
                          return;
                      }
                      n.keywordsCount = e;
                      const l = {
                        ...r,
                        ...t,
                        count: e,
                        currency: c,
                        selected: a.map((e) => o[e].keyword),
                      };
                      await (async ({
                        targets: e,
                        date: t,
                        isLive: a,
                        db: r,
                        device: n,
                        fileType: o,
                        exportType: l,
                        currency: i,
                        count: s,
                        selected: c,
                        type: d = "common",
                        filter: p = {},
                        sortField: u = "volume",
                        sortDirection: m = "desc",
                      }) => {
                        const y = {
                            report: pt.REPORT_NAME.gap,
                          },
                          {
                            positionFilter: g,
                            restFilters: h,
                            positionFilterType: f,
                          } = Gh(p),
                          b = (0, dt.prepareDatabase)(r, n),
                          E = {
                            currency: i,
                            selected:
                              l === Ph
                                ? c.map((e) => ({
                                    keyword: e,
                                  }))
                                : [],
                            request: {
                              targets: Jh(e, g, f),
                              date: a ? null : (0, dt.dateStringToObject)(t),
                              database: b,
                              type: pt.KEYWORDS_TYPE[d],
                              range: {
                                limit: s,
                                offset: 0,
                              },
                              columns: [
                                pt.KEYWORDS_LIST_COLUMN.keyword,
                                pt.KEYWORDS_LIST_COLUMN.intent,
                                pt.KEYWORDS_LIST_COLUMN.volume,
                                pt.KEYWORDS_LIST_COLUMN.keywordDifficulty,
                                pt.KEYWORDS_LIST_COLUMN.cpc,
                                pt.KEYWORDS_LIST_COLUMN.comp,
                                pt.KEYWORDS_LIST_COLUMN.positions,
                                pt.KEYWORDS_LIST_COLUMN.urls,
                                pt.KEYWORDS_LIST_COLUMN.results,
                              ],
                              order: {
                                column: pt.KEYWORDS_LIST_ORDER_COLUMN[Bh(u)],
                                direction: pt.ORDER_DIRECTION[m],
                              },
                              filters: h,
                            },
                          };
                        await Et.fetchExport("/GapKeywordsList", y, E, o);
                      })(l),
                        (n.status = _l.A.success);
                    } catch (e) {
                      console.error("Something went wrong with export", e, {
                        params: t,
                      }),
                        (n.status = _l.A.sww);
                    } finally {
                      a(!1),
                        t.clearSelected && e(cy()),
                        (({
                          keywordsCount: e,
                          exportType: t,
                          fileType: a,
                          status: r,
                        }) => {
                          Gl.A.track(Gl.A.eventName.exportData, {
                            item_label: `${e}`,
                            item_location: "keyword_gap.table.export",
                            state: Yh[t],
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
                  e ||
                    (r(t),
                    b({
                      action: rf,
                      label: t ? "show" : "cancel",
                    }));
                },
                [e]
              );
            return n.createElement(
              _h.A,
              {
                visible: a,
                onVisibleChange: c,
                placement: "bottom-end",
              },
              n.createElement(
                _h.A.Trigger,
                null,
                n.createElement(
                  Vt.A,
                  {
                    "data-at": "export",
                    "data-path": "keyword_gap.table.export",
                    loading: s,
                    disabled: s,
                    "aria-label": t({
                      id: "ariaLabel.tableExport",
                    }),
                  },
                  n.createElement(
                    Vt.A.Addon,
                    null,
                    n.createElement(Wl.A, null)
                  ),
                  !o &&
                    n.createElement(
                      Vt.A.Text,
                      null,
                      n.createElement(Ut.A, {
                        id: "export.button",
                      })
                    )
                )
              ),
              n.createElement(
                _h.A.Popper,
                {
                  p: 4,
                  wMin: 280,
                },
                n.createElement(af, {
                  gaAction: rf,
                  onSubmit: (e) => {
                    i(e), r(!1);
                  },
                })
              )
            );
          };
        nf.propTypes = {
          isFeatureLimited: w().bool,
        };
        const of = nf;
        var lf = a(57005),
          sf = a(4676);
        function cf() {
          return (
            (cf = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            cf.apply(null, arguments)
          );
        }
        const df = (0, ce.default)($t.A)`
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
          pf = (e) => {
            const t = (0, l.d4)($m),
              a = (0, l.d4)(He.Lf),
              r = (0, n.useMemo)(
                () =>
                  t
                    .filter((e) => "" !== e.keyword)
                    .map(({ keyword: e }) => ({
                      phrase: e,
                      database: (0, St.m_)(a),
                    })),
                [t, a]
              ),
              o = (() => {
                const [e] = up("(max-width: 1360px)");
                return e;
              })();
            return n.createElement(
              df,
              cf(
                {
                  "data-at": "ts-keywordmanager",
                  wMin: 0,
                  onClick: () => {
                    (0, sf.Ac)(r.length);
                  },
                  "data-path": `${sf.G2}.click`,
                },
                e
              ),
              n.createElement(lf.ExportToKMSelected, {
                selected: r,
                seedKeyword: null,
                group: "",
                hasShortLabel: o,
              })
            );
          },
          uf = () => {
            const { formatMessage: e } = (0, pe.A)();
            return n.createElement(
              Zs,
              {
                "aria-label": e({
                  id: "ariaLabel.keywordsTableSection",
                }),
              },
              n.createElement(
                tc,
                {
                  justifyContent: "flex-start",
                },
                n.createElement(Sm, null)
              ),
              n.createElement(
                Gs.WidgetContent,
                {
                  isNoData: !1,
                  isError: !1,
                  type: "venn-chart",
                },
                n.createElement(
                  de.A,
                  {
                    mb: 5,
                    mx: 5,
                    justifyContent: "space-between",
                    "data-at": "widget-header",
                  },
                  n.createElement(
                    Jl,
                    {
                      requiredPlan: i.USER_ROLES.pro,
                      limitContext: "filters",
                    },
                    n.createElement(Im, null)
                  ),
                  n.createElement(
                    de.A,
                    {
                      ml: 2,
                      wMin: 0,
                    },
                    n.createElement(pf, {
                      mr: 2,
                    }),
                    n.createElement(
                      $t.A,
                      null,
                      n.createElement(
                        Jl,
                        {
                          requiredPlan: i.USER_ROLES.pro,
                          limitContext: "export",
                        },
                        n.createElement(of, null)
                      )
                    )
                  )
                ),
                n.createElement(
                  $t.A,
                  {
                    pb: 5,
                  },
                  n.createElement(Lh, null)
                )
              )
            );
          },
          mf = () => {
            const e = (0, l.wA)();
            return (
              (0, n.useEffect)(() => {
                b({
                  action: "Something went wrong",
                  label: "all",
                });
              }, []),
              n.createElement(
                Vy.A,
                {
                  icon: (0, Vy.h)("warning"),
                },
                n.createElement(
                  Vy.A.Title,
                  null,
                  n.createElement(Ut.A, {
                    id: "errors.serverError",
                  })
                ),
                n.createElement(
                  Vy.A.Description,
                  null,
                  n.createElement(Ut.A, {
                    id: "errors.tryAgain.text",
                  })
                ),
                n.createElement(
                  $t.A,
                  {
                    mt: 4,
                  },
                  n.createElement(
                    Vt.A,
                    {
                      onClick: () => {
                        e(Ce());
                      },
                    },
                    n.createElement(Ut.A, {
                      id: "errors.tryAgain.btnText",
                    })
                  )
                )
              )
            );
          },
          yf = ({ children: e = null }) =>
            (0, l.d4)(cl) ? n.createElement(mf, null) : e;
        yf.propTypes = {
          children: w().node,
        };
        const gf = yf,
          hf = () => {
            const { formatMessage: e } = (0, pe.A)(),
              t = (0, l.d4)(Bo),
              a = (0, l.wA)(),
              r = (0, n.useCallback)(() => {
                a(Xc()),
                  b({
                    action: "Nothing found blocks",
                    label: "clear filters click",
                  });
              }, [a]);
            return (
              (0, n.useEffect)(() => {
                b({
                  action: "Nothing found blocks",
                  label: "clear filters show",
                });
              }, []),
              n.createElement(By, {
                title: e({
                  id: "global.notFound.clearFilters.title",
                }),
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
          ff = (0, ke.VP)("fetchRanksRequest"),
          bf = (0, ke.VP)("fetchRanksSuccess", (e) => e),
          Ef =
            ((0, ke.VP)("fetchRanksFailure", (e) => e),
            () =>
              n.createElement(
                "div",
                {
                  style: {
                    width: "266px",
                    height: "106px",
                  },
                },
                n.createElement(
                  cr.A,
                  {
                    height: 106,
                    width: 266,
                  },
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
          kf = (e, t) =>
            1 === e.slice(0, t + 1).reduce((e, t) => e + Number(t), 0),
          wf = ({ children: e = null }) => {
            const t = ((e) => e.filter((e) => e))(e),
              [a, r] = (0, n.useState)(
                [...Array(n.Children.count(t)).keys()].reduce(
                  (e, t) => ((e[t] = null), e),
                  {}
                )
              ),
              o = (0, n.useCallback)(
                (e, t) =>
                  r((a) => ({
                    ...a,
                    [e]: t,
                  })),
                [r]
              ),
              l = (0, n.useMemo)(
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
                    !l
                  );
                  var t;
                },
                [a, l]
              ),
              s = [...Array(n.Children.count(t)).keys()].map((e) => i(e));
            return n.createElement(
              n.Fragment,
              null,
              l &&
                n.createElement(
                  de.A,
                  {
                    direction: "row",
                  },
                  t.map((e, t) =>
                    n.createElement(
                      de.A,
                      {
                        key: t,
                      },
                      t > 0 &&
                        n.createElement(zt.A, {
                          mx: 6,
                          orientation: "vertical",
                          theme: "default",
                          use: "primary",
                        }),
                      n.createElement(Ef, null)
                    )
                  )
                ),
              n.createElement(
                de.A,
                {
                  direction: "row",
                },
                t.map((e, t) =>
                  n.createElement(
                    de.A,
                    {
                      key: t,
                    },
                    t > 0 &&
                      i(t - 1) &&
                      n.createElement(zt.A, {
                        mx: 6,
                        orientation: "vertical",
                        theme: "default",
                        use: "primary",
                      }),
                    n.createElement(
                      $t.A,
                      {
                        "data-is-first": !!kf(s, t) || void 0,
                        "data-is-last": !!s[t] || void 0,
                      },
                      n.cloneElement(e, {
                        index: t,
                        blockHasData: o,
                        display: i(t),
                      })
                    )
                  )
                )
              )
            );
          };
        wf.propTypes = {
          children: w().node,
        };
        const vf = wf,
          Tf = "Nothing found blocks",
          Af = () =>
            b({
              action: "No data",
              label: "all",
            }),
          Cf = () => {
            b({
              action: Tf,
              label: "country click",
            }),
              b({
                action: "Not found in seleсted DB",
                label: "click to suggested DB",
              });
          },
          Sf = (e, t) => {
            b({
              action: Tf,
              label: "country show",
            }),
              b({
                action: "Not found in seleсted DB",
                label: `${e} - ${t.map((e) => e.database).join(" ")}`,
              });
          },
          xf = () => {
            b({
              action: Tf,
              label: "device click",
            });
          },
          Rf = () =>
            b({
              action: Tf,
              label: "device show",
            }),
          Lf = () =>
            b({
              action: Tf,
              label: "change request show",
            }),
          _f = () =>
            b({
              action: Tf,
              label: "try another date click",
            }),
          Of = () =>
            b({
              action: Tf,
              label: "try another date show",
            }),
          Pf = () => ({
            gaNoData: Af,
            gaClickDb: Cf,
            gaDbShow: Sf,
            gaClickDevice: xf,
            gaShowDevice: Rf,
            gaShowChangeRequest: Lf,
            gaClickDate: _f,
            gaShowDate: Of,
          }),
          If = ({
            title: e,
            dataAt: t,
            actionButtons: a = null,
            children: r = null,
          }) =>
            n.createElement(
              de.A,
              {
                direction: "column",
                height: "100%",
                width: 266,
                "data-at": t,
              },
              n.createElement(
                lr.Header,
                {
                  tag: "h6",
                  mb: 3,
                },
                e
              ),
              n.createElement("div", null, r),
              a
                ? n.createElement(
                    $t.A,
                    {
                      pt: 1,
                    },
                    a
                  )
                : null
            );
        If.propTypes = {
          title: w().string.isRequired,
          dataAt: w().string.isRequired,
          children: w().node,
          actionButtons: w().element,
        };
        const Mf = If,
          { useIntlHelpers: Df } = Le(),
          Ff = ({ value: e }) => {
            const { formatCompactNumber: t } = Df();
            return n.createElement(
              ir.A,
              {
                ml: 2,
                size: 200,
                color: "gray-500",
                "data-at": "positions-number",
              },
              t(e)
            );
          };
        Ff.propTypes = {
          value: w().number.isRequired,
        };
        const Nf = Ff,
          jf = ({
            database: e,
            positions: t,
            setDb: a = () => {},
            deviceByString: r = !1,
          }) => {
            const o = r ? (0, St.m_)(e, !1) : e,
              l = (0, St.lg)(e) ? "mobile" : "desktop";
            return n.createElement(
              de.A,
              {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                w: "100%",
              },
              n.createElement(
                de.A,
                {
                  "data-at": "other-db-item",
                },
                n.createElement(or(), {
                  db: e,
                }),
                n.createElement(
                  Ki.A,
                  {
                    ml: 1,
                    mr: 4,
                    size: 200,
                    onClick: () => a(e),
                    "data-at": "other-db-name",
                  },
                  n.createElement(Ut.A, {
                    id: `db.${o}`,
                  }),
                  " ",
                  r
                    ? n.createElement(Ut.A, {
                        id: `device.${l}`,
                      })
                    : null
                )
              ),
              n.createElement(Nf, {
                value: t,
              })
            );
          };
        jf.propTypes = {
          database: w().string.isRequired,
          positions: w().number.isRequired,
          setDb: w().func,
          deviceByString: w().bool,
        };
        const qf = jf;
        function $f() {
          return (
            ($f = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            $f.apply(null, arguments)
          );
        }
        const Uf = ({ setDb: e, dbs: t = [] }) =>
          n.createElement(
            de.A,
            {
              alignItems: "center",
              mt: 2,
              justifyContent: "space-between",
              "data-at": "nf-other-countries",
            },
            n.createElement(
              er.Ay,
              null,
              n.createElement(
                er.Ay.Trigger,
                {
                  tag: tr.A,
                },
                n.createElement(
                  er.Ay.Trigger.Text,
                  null,
                  n.createElement(Ut.A, {
                    id: "global.notFound.otherdatabases.other",
                  })
                )
              ),
              n.createElement(
                er.Ay.Popper,
                null,
                n.createElement(
                  er.Ay.List,
                  {
                    hMax: "240px",
                    wMAx: 240,
                  },
                  t.map((t) =>
                    n.createElement(
                      er.Ay.Option,
                      {
                        value: t.database,
                        key: t.database,
                        direction: "row",
                      },
                      n.createElement(
                        qf,
                        $f(
                          {
                            deviceByString: !0,
                            setDb: e,
                          },
                          t
                        )
                      )
                    )
                  )
                )
              )
            ),
            n.createElement(Nf, {
              value: t.reduce((e, t) => e + t.positions, 0),
            })
          );
        Uf.propTypes = {
          setDb: w().func.isRequired,
          dbs: w().array,
        };
        const Vf = Uf;
        function zf() {
          return (
            (zf = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            zf.apply(null, arguments)
          );
        }
        const Kf = ({ setDb: e, dbs: t = [] }) => {
          const { formatMessage: a } = (0, pe.A)(),
            [r, o] = (0, n.useMemo)(() => [t.slice(0, 4), t.slice(4)], [t]);
          return n.createElement(
            Mf,
            {
              title: a({
                id: "global.notFound.otherdatabases.title",
              }),
              dataAt: "nf-database",
            },
            n.createElement(
              "div",
              {
                "data-at": "dbs-list",
              },
              r.map((t, a) =>
                n.createElement(
                  $t.A,
                  {
                    mt: a > 0 ? 2 : 0,
                    key: t.database,
                  },
                  n.createElement(
                    qf,
                    zf(
                      {
                        deviceByString: !0,
                      },
                      t,
                      {
                        setDb: e,
                      }
                    )
                  )
                )
              )
            ),
            o.length > 0 &&
              (o.length > 1
                ? n.createElement(Vf, {
                    dbs: o,
                    setDb: e,
                  })
                : n.createElement(
                    $t.A,
                    {
                      mt: 2,
                    },
                    n.createElement(
                      qf,
                      zf(
                        {
                          deviceByString: !0,
                        },
                        o[0],
                        {
                          setDb: e,
                        }
                      )
                    )
                  ))
          );
        };
        Kf.propTypes = {
          dbs: w().array,
          setDb: w().func.isRequired,
        };
        const Bf = Kf,
          Jf = (e) =>
            ({
              organic: "organicPositions",
              adwords: "adwordsPositions",
              pla: "plaPositions",
            }[e]),
          Wf = (e = "organic") => {
            const t = (0, l.d4)(ll);
            return (0, n.useMemo)(
              () =>
                t.map((t) => ({
                  database: t.database,
                  positions: Number(t.metrics[Jf(e)]),
                })),
              [t, e]
            );
          },
          Gf = (e, t) => (0, St.um)(e).db !== (0, St.um)(t).db,
          Yf = ({
            isLoaded: e,
            display: t = !1,
            index: a = 0,
            blockHasData: r = () => {},
          }) => {
            const { gaClickDb: o, gaDbShow: i } = Pf(),
              s = (0, l.d4)(He.Pf),
              c = (0, l.d4)(He.Lf),
              d = (0, l.d4)(lo.zW),
              p = Wf(d),
              u = (0, l.wA)(),
              m = (0, n.useCallback)(
                (e) => {
                  const t = (0, St.um)(e);
                  u(Gt(t.db)), o();
                },
                [u, o]
              ),
              y = (0, n.useMemo)(() => {
                const e = p.filter(
                    (e) => (0, St.lg)(e.database) === (0, St.jb)(s)
                  ),
                  t = p.filter((e) => (0, St.lg)(e.database) !== (0, St.jb)(s)),
                  a = [];
                for (let r = 0; r < Math.max(e.length, t.length); r++)
                  e[r] && a.every((t) => Gf(t.database, e[r].database))
                    ? a.push(e[r])
                    : t[r] &&
                      a.every((e) => Gf(e.database, t[r].database)) &&
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
              t
                ? n.createElement(Bf, {
                    dbs: y,
                    setDb: m,
                  })
                : null
            );
          };
        Yf.propTypes = {
          display: w().bool,
          blockHasData: w().func,
          index: w().number,
          isLoaded: w().bool.isRequired,
        };
        const Hf = Yf;
        var Qf = a(59614),
          Zf = a(484);
        const Xf = (e) => {
          const { db: t, positions: a, isDBMobile: r, setOtherDevice: o } = e,
            { formatMessage: l } = (0, pe.A)(),
            i = (0, n.useMemo)(() => (r ? "mobile" : "desktop") + "data", [r]),
            s = (0, n.useMemo)(() => (r ? Qf.A : Zf.A), [r]);
          return n.createElement(
            Mf,
            {
              title: l({
                id: "global.notFound.otherdevices.title",
              }),
              dataAt: "nf-devices",
            },
            n.createElement(
              de.A,
              {
                justifyContent: "space-between",
              },
              n.createElement(
                Ki.A,
                {
                  size: 200,
                  onClick: () => o(t),
                },
                n.createElement(Ki.A.Addon, {
                  tag: s,
                }),
                n.createElement(
                  Ki.A.Text,
                  null,
                  l(
                    {
                      id: `global.notFound.otherdevices.${i}`,
                    },
                    {
                      DB: l({
                        id: `db.${(0, St.m_)(t)}`,
                      }),
                    }
                  )
                )
              ),
              n.createElement(Nf, {
                value: a,
              })
            )
          );
        };
        Xf.propTypes = {
          db: w().string.isRequired,
          positions: w().number.isRequired,
          isDBMobile: w().bool.isRequired,
          setOtherDevice: w().func.isRequired,
        };
        const eb = Xf,
          tb = ({
            deviceType: e,
            currentDB: t,
            isLoaded: a,
            display: r = !1,
            index: o = 0,
            blockHasData: i = () => {},
          }) => {
            const s = Wf(),
              c = (0, n.useMemo)(
                () =>
                  s
                    .filter((e) => (0, St.m_)(e.database) === (0, St.m_)(t))
                    .find((t) => (0, St.jb)(e) !== (0, St.lg)(t.database)),
                [s, e, t]
              ),
              d = c?.database,
              p = c?.positions,
              u = (0, l.wA)(),
              m = (0, n.useCallback)(
                (e) => {
                  const t = (0, St.um)(e);
                  u(Yt(t.isMobile ? 1 : 0)), xf();
                },
                [u]
              );
            return (
              (0, n.useEffect)(() => {
                a && i(o, !!d);
              }, [a, d, o, i]),
              (0, n.useEffect)(() => {
                r && d && Rf();
              }, [r, d]),
              r && c
                ? n.createElement(eb, {
                    db: d,
                    positions: p,
                    isDBMobile: (0, St.lg)(d),
                    setOtherDevice: m,
                  })
                : null
            );
          };
        tb.propTypes = {
          currentDB: w().string.isRequired,
          deviceType: w().number.isRequired,
          display: w().bool,
          blockHasData: w().func,
          index: w().number,
          isLoaded: w().bool.isRequired,
        };
        const ab = n.memo(tb);
        var rb = a(1806);
        const nb = ({ type: e = "daily", value: t }) =>
          "daily" === e
            ? n.createElement(cc.FormattedDate, {
                value: (0, rb.A)(t),
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : n.createElement(cc.FormattedDate, {
                value: (0, rb.A)(t),
                year: "numeric",
                month: "long",
              });
        nb.propTypes = {
          value: w().any.isRequired,
          type: w().oneOf(["daily", "monthly"]),
        };
        const ob = n.memo(nb),
          lb = (e) =>
            null == e
              ? ""
              : n.createElement(ob, {
                  value: e,
                  type: "monthly",
                }),
          ib = ({
            display: e = !1,
            index: t = 0,
            blockHasData: a = () => {},
          }) => {
            const { formatMessage: r } = (0, pe.A)(),
              { gaClickDate: o, gaShowDate: i } = Pf(),
              s = (0, l.d4)(He.Lk),
              c = (0, l.d4)(He.pp),
              d = (0, l.d4)(Ga),
              p = (0, l.wA)(),
              u = (0, n.useCallback)(() => {
                p(Ht(d.date, d.dateType, d.dateType === Kt.J5.daily)), o();
              }, [p, d, o]);
            return (
              (0, n.useEffect)(() => {
                a(t, 1 === s);
              }, [s, t, a]),
              (0, n.useEffect)(() => {
                e && 1 === s && i();
              }, [e, s, i]),
              e
                ? n.createElement(
                    Mf,
                    {
                      title: r({
                        id: "global.notFound.livedata.title",
                      }),
                      dataAt: "nf-livedata",
                      actionButtons: n.createElement(
                        Vt.A,
                        {
                          onClick: u,
                        },
                        n.createElement(Ut.A, {
                          id: "global.notFound.livedata.btnText",
                        })
                      ),
                    },
                    n.createElement(
                      ir.A,
                      {
                        size: 200,
                        color: "gray-800",
                        "data-at": "body-text",
                      },
                      n.createElement(Ut.A, {
                        id: "global.notFound.livedata.text",
                        values: {
                          date: lb(c),
                        },
                      })
                    )
                  )
                : null
            );
          };
        ib.propTypes = {
          display: w().bool,
          blockHasData: w().func,
          index: w().number,
        };
        const sb = ib;
        var cb = a(38064);
        const db = ({
          display: e = !1,
          index: t = 0,
          blockHasData: a = () => {},
        }) => {
          const { gaShowChangeRequest: r } = Pf(),
            { formatMessage: o } = (0, pe.A)();
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
                  Mf,
                  {
                    title: o({
                      id: "global.notFound.checkrequest.title",
                    }),
                    dataAt: "nf-search",
                  },
                  n.createElement(
                    cb.A,
                    {
                      size: 200,
                    },
                    n.createElement(
                      cb.A.Item,
                      null,
                      n.createElement(Ut.A, {
                        id: "global.notFound.checkrequest.line1",
                      })
                    ),
                    n.createElement(
                      cb.A.Item,
                      null,
                      n.createElement(Ut.A, {
                        id: "global.notFound.checkrequest.line2",
                      })
                    ),
                    n.createElement(
                      cb.A.Item,
                      null,
                      n.createElement(Ut.A, {
                        id: "global.notFound.checkrequest.line3",
                      })
                    )
                  )
                )
              : null
          );
        };
        db.propTypes = {
          display: w().bool,
          blockHasData: w().func,
          index: w().number,
        };
        const pb = db;
        function ub() {
          return (
            (ub = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ub.apply(null, arguments)
          );
        }
        const mb = (e) => {
            const t = (0, l.d4)(He.Lf),
              a = (0, l.d4)(He.Pf),
              r = (0, n.useMemo)(
                () => ((0, St.jb)(a) ? "mobile" : "desktop"),
                [a]
              ),
              o = (0, n.useMemo)(() => ((0, St.jb)(a) ? Qf.A : Zf.A), [a]);
            return n.createElement(
              de.A,
              ub(
                {
                  alignItems: "center",
                  justifyContent: "flex-start",
                  "data-at": "nf-db-info",
                },
                e
              ),
              n.createElement(
                de.A,
                {
                  alignItems: "center",
                  mr: 4,
                },
                n.createElement(
                  $t.A,
                  {
                    mr: 1,
                  },
                  n.createElement(or(), {
                    db: t,
                  })
                ),
                n.createElement(
                  ir.A,
                  {
                    size: 200,
                    color: "gray-500",
                    "data-at": "db-name",
                  },
                  n.createElement(Ut.A, {
                    id: `db.${(0, St.m_)(t)}`,
                  })
                )
              ),
              n.createElement(
                de.A,
                {
                  alignItems: "center",
                },
                n.createElement(
                  $t.A,
                  {
                    mr: 1,
                  },
                  n.createElement(o, {
                    color: "gray-500",
                  })
                ),
                n.createElement(
                  ir.A,
                  {
                    size: 200,
                    color: "gray-500",
                    "data-at": "device-name",
                  },
                  n.createElement(Ut.A, {
                    id: `device.${r}`,
                  })
                )
              )
            );
          },
          yb = () => {
            const { gaNoData: e } = Pf(),
              t = (0, l.d4)(He.Lf),
              a = (0, l.d4)(He.Pf),
              r = (0, l.d4)(il),
              o = (0, l.d4)(lo.qG),
              i = (0, l.wA)(),
              s = (0, n.useCallback)(() => i(ff()), [i]),
              c = "domain" === o?.searchType;
            return (
              (0, n.useEffect)(() => {
                c && s(), e();
              }, [e, c, s]),
              n.createElement(
                $t.A,
                {
                  mt: 4,
                  "data-at": "nothing-found",
                },
                n.createElement(
                  ir.A,
                  {
                    fontSize: "19px",
                    tag: "h5",
                    fontWeight: 500,
                    mb: 2,
                    mt: 0,
                    "data-at": "nothing-found-title",
                  },
                  n.createElement(Ut.A, {
                    id: "global.notFound.title",
                  })
                ),
                n.createElement(mb, {
                  mb: 8,
                }),
                n.createElement(
                  vf,
                  null,
                  c &&
                    n.createElement(Hf, {
                      isLoaded: r,
                    }),
                  c &&
                    n.createElement(ab, {
                      deviceType: a,
                      currentDB: t,
                      isLoaded: r,
                    }),
                  n.createElement(sb, null),
                  n.createElement(pb, null)
                )
              )
            );
          },
          gb = () =>
            (0, l.d4)(Bo)
              ? n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(hm, null),
                  n.createElement(hf, null)
                )
              : n.createElement(yb, null),
          hb = "keyword_gap",
          fb = () => {
            const e = (0, l.d4)(Ao),
              t = !(0, l.d4)(sl) && !e;
            return (
              (() => {
                const e = (0, l.d4)(cl),
                  t = (0, l.d4)(Ao),
                  a = (0, l.d4)(sl),
                  r = (0, l.d4)(lo.yo),
                  o = !a && !t;
                (0, n.useEffect)(() => {
                  if (!a || e) {
                    let t = _l.A.success;
                    o ? (t = _l.A.nodata) : e && (t = _l.A.sww),
                      Gl.A.track(Gl.A.eventName.show, {
                        item_location: hb,
                        status: t,
                        item_label: r.map((e) => e.searchType).join("_"),
                        type: `${r.length}x`,
                        state: r.map((e) => e.keywordType).join("_"),
                      });
                  }
                }, [o, e, r, a]);
              })(),
              n.createElement(
                wm,
                {
                  direction: "column",
                  "data-path": hb,
                },
                n.createElement(km, null),
                n.createElement(
                  $t.A,
                  {
                    wMin: 1044,
                    wMax: 1670,
                  },
                  n.createElement(Qi, null)
                ),
                n.createElement(zt.A, {
                  orientation: "horizontal",
                  theme: "default",
                  use: "primary",
                }),
                n.createElement(
                  vm,
                  {
                    wMin: 980,
                    wMax: 1606,
                    mx: 8,
                    mb: 24,
                  },
                  n.createElement(
                    Ee,
                    {
                      pageType: "report",
                    },
                    n.createElement(
                      de.A,
                      {
                        my: 4,
                      },
                      n.createElement(Ws, {
                        gaAction: "Report",
                      })
                    )
                  ),
                  n.createElement(zt.A, {
                    orientation: "horizontal",
                    theme: "default",
                    use: "primary",
                  }),
                  n.createElement(
                    gf,
                    null,
                    n.createElement(Em, null),
                    t
                      ? n.createElement(gb, null)
                      : n.createElement(
                          n.Fragment,
                          null,
                          n.createElement(hm, null),
                          n.createElement(
                            de.A,
                            {
                              mb: 4,
                            },
                            n.createElement(wd, null),
                            n.createElement(pp, {
                              ml: 4,
                            })
                          ),
                          n.createElement(uf, null)
                        )
                  )
                )
              )
            );
          },
          bb = (0, ce.default)($t.A)`
  filter: blur(5px);
  opacity: 0.3;
  pointer-events: none;
`,
          Eb = () =>
            n.createElement(
              Ee,
              {
                pageType: "report",
              },
              n.createElement(
                bb,
                null,
                n.createElement(Qi, {
                  searchItem: "test.com",
                }),
                n.createElement(
                  "div",
                  {
                    className: "fake_report-module__content___OVOJp",
                  },
                  n.createElement(Ws, null)
                )
              )
            );
        var kb = a(555);
        const wb = (e) => e.limits.hasLimit,
          vb = (e) => e.limits.errCode;
        class Tb extends n.PureComponent {
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
        Tb.propTypes = {
          notReactComponent: w().func.isRequired,
          destroy: w().func.isRequired,
        };
        const Ab = Tb,
          Cb = () =>
            n.createElement(Ab, {
              notReactComponent: i.BillingUI.limitPopup,
              destroy: (e) => e.remove(),
            }),
          Sb = () =>
            n.createElement(Ab, {
              notReactComponent: i.BillingUI.trialPopup,
              destroy: (e) => e.remove(),
            }),
          xb = (0, ke.VP)("setLimitError", (e) => ({
            errCode: e,
          })),
          Rb = (0, ke.VP)("requestClearLimitError"),
          Lb = (0, ke.VP)("clearLimitError"),
          _b = () =>
            void (window.location = `${window.location.origin}/analytics/keywordgap/`),
          Ob = (e, t) =>
            t ? Dl : "historical" === e ? i.USER_ROLES.guru : i.USER_ROLES.pro,
          Pb = () => {
            const e = (0, l.d4)(it),
              t = (0, l.d4)(vb),
              a = ((e) =>
                ({
                  [kb.ERROR_CODE.historicalDataPermission]:
                    "limitBlock.cancelBtnModal",
                  [kb.ERROR_CODE.productTypePermission]:
                    "limitBlock.goToStartPage",
                }[e] || null))(t),
              r = ((e, t = null) =>
                ({
                  [kb.ERROR_CODE.productTypePermission]: i.USER_ROLES.guru,
                }[e] || t))(t, P.A.productGroup),
              o = ((e) => {
                const t = (0, l.wA)();
                return (0, n.useMemo)(
                  () =>
                    e === kb.ERROR_CODE.productTypePermission
                      ? _b
                      : () => t(Rb()),
                  [e, t]
                );
              })(t);
            return ((e, t, a, r, o) => {
              const l = ((e) =>
                ({
                  [kb.ERROR_CODE.historicalDataPermission]: "historical",
                  [kb.ERROR_CODE.productTypePermission]: "pla",
                  [kb.ERROR_CODE.reportLimitsExceeded]: "report_per_day",
                }[e]))(t);
              switch (o) {
                case i.USER_ROLES.guest:
                  return n.createElement(Cb, null);
                case i.USER_ROLES.free:
                case i.USER_ROLES.appCenter:
                  return t === kb.ERROR_CODE.reportLimitsExceeded
                    ? n.createElement(Sb, null)
                    : n.createElement($l, {
                        planType: Ob(l, e),
                        limitContext: l,
                        cancelText: a,
                        onCancel: r,
                        needSticky: !0,
                      });
                case i.USER_ROLES.pro:
                case i.USER_ROLES.guru:
                case i.USER_ROLES.business:
                  return n.createElement($l, {
                    planType: i.USER_ROLES.next(o),
                    limitContext: l,
                    cancelText: a,
                    onCancel: r,
                    needSticky: !0,
                  });
                default:
                  return null;
              }
            })(e, t, a, o, r);
          },
          Ib = (0, n.memo)(Pb),
          Mb = (0, ce.default)($t.A)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 200px;
`,
          Db = () =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(Mb, null, n.createElement(Ib, null)),
              n.createElement(
                lr.NoInteractionWrapper,
                null,
                n.createElement(Eb, null)
              )
            ),
          Fb = n.memo(Db),
          Nb = (0, a(42791).bY)(
            Object.values({
              desktop: "(min-width: 1101px)",
              tablet: "(max-width: 1100px)",
              mobile: "(max-width: 414px)",
            })
          ),
          jb = () => {
            const e = !(0, l.d4)(lo.Ij),
              t = (0, l.d4)(wb);
            return (
              ((e) => {
                const { formatMessage: t } = (0, pe.A)(),
                  a = (0, l.d4)(lo.zP),
                  r = t({
                    id: "pageTitle.landing",
                  }),
                  n = t(
                    {
                      id: "pageTitle.report",
                    },
                    {
                      FIRST_DOMAIN: Rt(a),
                    }
                  );
                document.title = e ? r : n;
              })(e),
              ((e = !0) => {
                const t = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                  e &&
                    !t.current &&
                    (b({
                      category: "keyword-gap:report",
                      action: "show:report",
                      label: "report:show",
                    }),
                    (t.current = !0));
                }, [e]);
              })(!e && !t),
              e
                ? n.createElement(Nb, null, n.createElement(oo, null))
                : t
                ? n.createElement(Fb, null)
                : n.createElement(fb, null)
            );
          },
          qb = () => (
            (0, n.useEffect)(() => {
              (0, lf.configure)(
                Number(P.A.id),
                P.A.apiKey,
                P.A.locale,
                "keyword_gap"
              );
            }, []),
            null
          ),
          $b = (0, ce.default)(de.A)`
  min-height: 100%;
  padding: 0 0;
  flex-direction: column;
  font-family: Inter, sans-serif;
  background-color: #f4f5f9;
  flex-grow: 1;
`;
        var Ub = a(82960),
          Vb = a(32742),
          zb = a(64251),
          Kb = a(17183);
        const Bb = (e) => {
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
          Jb = (e) =>
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
          Wb = (e) => {
            try {
              const t = decodeURIComponent(e),
                a = JSON.parse(t),
                r = a?.advanced ?? {};
              return {
                search: a?.search,
                volume: Bb(a?.volume),
                keywordDifficulty: Bb(a?.kd),
                position: a?.position,
                intent: a?.intent,
                advanced: r,
                advancedApplied: r,
              };
            } catch (t) {
              return (
                console.error(
                  "deserialize filter error",
                  {
                    filterStr: e,
                  },
                  t
                ),
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
          Gb = {
            db: null,
            defaultDb: null,
            searchItem: null,
            searchType: "domain",
            date: null,
            dateType: Kt.J5.daily,
            isLive: null,
            device: Kt.W.desktop,
            currency: y.get("currency") || "usd",
            currencyType: y.get("currencyType") || "default",
            scope: "domain",
            nextParams: null,
          },
          Yb = {
            constants: Jt,
            reducer: (e = Gb, t) => {
              switch (t.type) {
                case Qt.getType():
                  return {
                    ...e,
                    db: t.payload.db,
                  };
                case la.getType():
                  return {
                    ...e,
                    defaultDb: {
                      ...t.payload,
                    },
                  };
                case Xt.getType():
                  return {
                    ...e,
                    date: t.payload.date,
                    dateType: t.payload.dateType,
                    isLive: t.payload.isLive,
                  };
                case ra.getType():
                  return {
                    ...e,
                    currency: t.payload.currency,
                    currencyType:
                      ((a = t.payload.currency),
                      "usd" === a ? "default" : "local"),
                  };
                case Wt.SET_SEARCH_ITEM:
                  return (
                    console.warn("Do not use this!"),
                    {
                      ...e,
                      searchItem: t.searchItem,
                    }
                  );
                case Wt.SET_DOMAIN: {
                  if (!t.domain) return e;
                  const a = je.Ay.toASCII(
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
                case na.getType():
                  return {
                    ...e,
                    nextParams: t.payload.nextParams,
                  };
                case oa.getType(): {
                  const { nextParams: t } = e;
                  return {
                    ...e,
                    ...t,
                    nextParams: null,
                  };
                }
                case Zt.getType():
                  return {
                    ...e,
                    device: t.payload.device,
                  };
                case Wt.SET_DB_AND_DEVICE:
                  return {
                    ...e,
                    db: t.db,
                    device: t.device,
                  };
                default:
                  return e;
              }
              var a;
            },
          },
          Hb = {
            reducer: (0, ke.vy)(
              {
                [xb]: (e, { errCode: t }) => ({
                  ...e,
                  hasLimit: !0,
                  errCode: t,
                }),
                [Lb]: (e) => ({
                  ...e,
                  hasLimit: !1,
                  errCode: null,
                }),
              },
              {
                hasLimit: !1,
                errCode: null,
              }
            ),
          },
          Qb = {
            mode: "simple",
            keywordType: "organic",
            intersectionType: "common",
            nextIntersectionType: null,
            intersectionSetByUser: !1,
          },
          Zb = {
            constants: r,
            reducer: (e = Qb, t) => {
              switch (t.type) {
                case Nn.getType():
                  return {
                    ...e,
                    mode: t.payload.mode,
                  };
                case jn.getType():
                  return {
                    ...e,
                    keywordType: t.payload.keywordType,
                  };
                case qn.getType():
                  return {
                    ...e,
                    nextIntersectionType: t.payload.intersectionType,
                  };
                case $n.getType():
                  return {
                    ...e,
                    intersectionType: t.payload.intersectionType,
                    nextIntersectionType: null,
                    intersectionSetByUser: t.payload.intersectionSetByUser,
                  };
                case Vn.getType():
                  return {
                    ...e,
                    intersectionSetByUser: !1,
                  };
                default:
                  return e;
              }
            },
          },
          Xb = {
            data: [],
          },
          eE = {
            constants: De,
            reducer: (e = Xb, t) => {
              switch (t.type) {
                case Kn.getType():
                  return {
                    ...e,
                    data: t.payload.targets,
                  };
                case Jn.getType():
                  return {
                    data: t.payload.targets,
                  };
                default:
                  return e;
              }
            },
          },
          tE = (0, ke.VP)("resetLoadingStatusGlobal"),
          aE = (e) => ({
            id: e,
          }),
          rE = (e) => {
            const t = e.toUpperCase(),
              a = (0, ke.VP)(`${t}/startLoading`, aE),
              r = (0, ke.VP)(`${t}/stopLoading`, aE),
              n = (0, ke.VP)(`${t}/resetLoading`, aE),
              o = (0, ke.VP)(`${t}/setError`, aE),
              l = (0, ke.VP)(`${t}/resetError`, aE);
            return {
              actions: {
                startLoading: a,
                stopLoading: r,
                resetLoading: n,
                setError: o,
                resetError: l,
              },
              reducer: (0, ke.vy)(
                {
                  [a]: (e) => ({
                    ...e,
                    isLoading: !0,
                  }),
                  [r]: (e) => ({
                    ...e,
                    isLoading: !1,
                  }),
                  [o]: (e) => ({
                    ...e,
                    hasError: !0,
                  }),
                  [l]: (e) => ({
                    ...e,
                    hasError: !1,
                  }),
                  [tE]: (e) => ({
                    ...e,
                    isLoading: null,
                  }),
                  [n]: (e) => ({
                    ...e,
                    isLoading: null,
                  }),
                },
                {
                  isLoading: null,
                  hasError: !1,
                }
              ),
            };
          },
          { actions: nE, reducer: oE } = rE("statusDbsReducer"),
          { actions: lE, reducer: iE } = rE("statusTimepointsReducer"),
          { actions: sE, reducer: cE } = rE("statusCurrenciesReducer"),
          dE = (0, ke.vy)(
            {
              [ve]: (e, { data: t }) => {
                return {
                  ...e,
                  databases:
                    ((a = t), a.reduce((e, t) => ((e[t.code] = t), e), {})),
                };
                var a;
              },
              [Ae]: (e, { data: t, db: a, device: r }) => ({
                ...e,
                timepoints: {
                  ...e.timepoints,
                  [`${a}/${r}`]: t,
                },
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
                            (({ currencyCode: e }) => [e].join("/"))({
                              ...t,
                            })
                          ] = t),
                          e
                        ),
                        {}
                      )),
                  },
                };
                var r;
              },
              [Se]: (e, { db: t }) => ({
                ...e,
                databases: {
                  ...e.databases,
                  [t]: {
                    ...e.databases[t],
                    available: !0,
                  },
                },
              }),
            },
            {}
          ),
          pE = (0, Ub.HY)({
            data: dE,
            statusDbs: oE,
            statusTimepoints: iE,
            statusCurrencies: cE,
          }),
          uE = {
            field: "volume",
            direction: "desc",
          },
          mE = {
            sorting: uE,
            currentPage: 1,
            prevPage: 1,
            selectedKeywords: {},
            limitError: !1,
          },
          yE = (0, ke.vy)(
            {
              [Zm]: (e, { field: t, direction: a }) => ({
                ...e,
                sorting: {
                  field: t,
                  direction: a,
                },
              }),
              [Xm]: (e, { limitError: t }) => ({
                ...e,
                limitError: t,
              }),
              [ay]: (e, { page: t }) => ({
                ...e,
                prevPage: e.currentPage,
                currentPage: t,
              }),
              [ry]: (e, { page: t }) => ({
                ...e,
                prevPage: t,
              }),
              [oy]: (e, { id: t, params: a }) => {
                const r = Qo(a),
                  n = e.selectedKeywords?.[r] ?? [];
                let o;
                return (
                  (o = n.find((e) => e === t)
                    ? n.filter((e) => e !== t)
                    : [...n, t]),
                  {
                    ...e,
                    selectedKeywords: {
                      ...e.selectedKeywords,
                      [r]: o,
                    },
                  }
                );
              },
              [ly]: (e, { ids: t, params: a }) => {
                const r = Qo(a),
                  n = e.selectedKeywords?.[r] ?? [],
                  o = new Set([...n, ...t]);
                return {
                  ...e,
                  selectedKeywords: {
                    ...e.selectedKeywords,
                    [r]: [...o],
                  },
                };
              },
              [iy]: (e, { ids: t, params: a }) => {
                const r = Qo(a),
                  n = e.selectedKeywords?.[r] ?? [],
                  o = t ? n.filter((e) => !t.includes(e)) : [];
                return {
                  ...e,
                  selectedKeywords: {
                    ...e.selectedKeywords,
                    [r]: o,
                  },
                };
              },
            },
            mE
          ),
          gE = yE,
          { actions: hE, reducer: fE } = rE("statusKeywordsTotalReducer"),
          bE = (0, ke.vy)(
            {
              [Ad]: (e, { data: t }) => ({
                ...t,
              }),
            },
            {}
          ),
          EE = (0, Ub.HY)({
            data: bE,
            status: fE,
          }),
          kE =
            ((0, ke.VP)("requestTopKeywords"),
            (0, ke.VP)("getDataSuccess", (e, t) => ({
              data: e,
              id: t,
            }))),
          { actions: wE, reducer: vE } = rE("keywords_top"),
          TE = (0, ke.vy)(
            {
              [kE]: (e, { data: t }) => ({
                ...t,
              }),
            },
            {}
          ),
          AE = (0, Ub.HY)({
            data: TE,
            status: vE,
          });
        class CE {
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
              (this.urls = e.urls?.map(Rt));
          }
        }
        const { actions: SE, reducer: xE } = rE("statusKeywordsReducer"),
          RE = (0, ke.vy)(
            {
              [fy]: (e, { data: t }) => {
                const a = t
                  .map((e) => new CE(e))
                  .reduce((e, t) => ((e[t.id] = t), e), {});
                return {
                  ...e,
                  ...a,
                };
              },
            },
            []
          ),
          LE = (0, ke.vy)(
            {
              [fy]: (e, { data: t, pageParams: a }) => {
                const r = Qo(a);
                return {
                  ...e,
                  [r]: {
                    ...e[r],
                    [a.page]: t.map(({ id: e }) => e),
                  },
                };
              },
            },
            {}
          ),
          _E = (0, Ub.HY)({
            data: RE,
            status: xE,
            meta: LE,
          }),
          { actions: OE, reducer: PE } = rE("statusRanksReducer"),
          IE = (0, ke.vy)(
            {
              [bf]: (e, t) => t,
            },
            []
          ),
          ME = (0, Ub.HY)({
            data: IE,
            status: PE,
          });
        var DE = a(43561);
        const FE = (e) =>
            ({
              keyword: Vu,
              keywordType: null,
              volume: Uu,
              cpc: Uu,
              comp: Uu,
              results: Uu,
            }[e]),
          NE = (e) =>
            ({
              keywordType: [...zu],
            }[e]),
          jE = (e, t) =>
            Object.values(e).some((e) => Ku.every((a) => e[a] === t[a])),
          qE = (0, DE.customAlphabet)(
            "1234567890qwertyuiopasdfghjklzxcvbnm",
            5
          ),
          $E = null,
          UE = () => ({
            id: qE(),
            isIncludes: !0,
            field: "keyword",
            criteria: "containing",
            value: "",
          }),
          VE = ({ setFilter: e, clearFilter: t }) =>
            (0, ke.vy)(
              {
                [e]: (e, { value: t }) => t,
                [t]: () => $E,
                [Xc]: () => $E,
              },
              $E
            ),
          zE = () => {
            const e = UE();
            return {
              [e.id]: e,
              order: [e.id],
            };
          },
          KE = (0, ke.vy)(
            {
              [ud]: zE,
              [Xc]: zE,
              [cd]: (e) => {
                const t = UE();
                return {
                  ...e,
                  [t.id]: t,
                  order: [...e.order, t.id],
                };
              },
              [dd]: (e, { id: t }) => {
                const { [t]: a, ...r } = e;
                return {
                  ...r,
                  order: r.order.filter((e) => e !== t),
                };
              },
              [pd]: (e, { id: t, name: a, value: r }) => {
                const { [t]: n, ...o } = e;
                return {
                  ...o,
                  [t]: {
                    ...n,
                    [a]: r,
                  },
                };
              },
              [ld]: (e, { data: t }) => ({
                ...t,
                order: Object.keys(t),
              }),
            },
            {
              order: [],
            }
          ),
          BE = (0, ke.vy)(
            {
              [sd]: (e, { filters: t }) => ({
                ...t,
              }),
              [ud]: () => Object.create({}),
            },
            {}
          ),
          JE = (0, Ub.HY)({
            position: VE(td),
            volume: VE(ad),
            keywordDifficulty: VE(nd),
            intent: VE(od),
            search: VE(rd),
            advanced: KE,
            advancedApplied: BE,
          }),
          WE = {
            data: (0, Ub.HY)({
              reportConfig: pE,
              keywordsTotal: EE,
              keywordsTop: AE,
              keywords: _E,
              ranks: ME,
            }),
            kgTable: gE,
            filters: JE,
          };
        var GE = a(90167);
        function* YE({ payload: { dbString: e } }) {
          let t;
          do {
            (t = yield (0, GE.Lt)(He.dW)), null == t && (yield (0, GE.cb)(10));
          } while (null == t);
          const a = (0, St.um)((0, St.pe)(e || t?.db)),
            r = a.db;
          yield (0, GE.yJ)(Gt(r)),
            yield (0, GE.yJ)(Qt(r)),
            "" === (new M(window.location.search).get("device") || "") &&
              (yield (0, GE.yJ)(Zt(a.isMobile ? Kt.W.mobile : Kt.W.desktop)));
        }
        function* HE({ payload: { deviceString: e } }) {
          const t = e;
          yield (0, GE.yJ)(Yt(t)), yield (0, GE.yJ)(Zt(t));
        }
        function* QE({ payload: { dateString: e } }) {
          try {
            const t = {
              date: null,
              dateType: null,
              isLive: !0,
            };
            if (!e || (8 !== e.length && 6 !== e.length))
              (t.date = (0, wt.A)(new Date(), "yyyyMMdd")),
                (t.dateType = Kt.J5.daily);
            else {
              const a = e.length < 8 ? Kt.J5.monthly : Kt.J5.daily;
              (t.date = a === Kt.J5.daily ? e : `${e}15`),
                (t.dateType = a),
                (t.isLive = a === Kt.J5.daily);
            }
            yield (0, GE.yJ)(Ht(t.date, t.dateType, t.isLive)),
              yield (0, GE.yJ)(Xt(t.date, t.dateType, t.isLive));
          } catch (e) {
            console.warn(e);
          }
        }
        function* ZE({ payload: { db: e } }) {
          ze(e);
          const t = yield (0, GE.Lt)(He.Ke),
            a = yield (0, GE.Lt)(Ua, e),
            r =
              "local" === t && a.length > 1
                ? a.find((e) => e !== Kt.OS)
                : Kt.OS,
            n = yield (0, GE.Lt)(He.Pf);
          yield (0, GE.yJ)(
            la({
              db: e,
              isMobile: n === Kt.W.mobile,
            })
          ),
            yield (0, GE.T1)(Ke, {
              db: e,
              device: Kt.W.ToString(n),
              currency: r,
            });
        }
        function* XE({ payload: { dbString: e } }) {
          const t = yield (0, GE.Lt)(He.Lf),
            a = (0, St.um)((0, St.pe)(e));
          null == t && (yield (0, GE.yJ)(Qt(a.db)), yield (0, GE.yJ)(Gt(a.db))),
            yield (0, GE.yJ)(la(a));
        }
        function ek({ payload: { currency: e } }) {
          Ke({
            currency: e,
          });
        }
        function tk({ payload: { device: e } }) {
          Ke({
            device: Kt.W.ToString(e),
          });
        }
        function ak({ payload: { date: e, dateType: t } }) {
          Ke({
            date: t === Kt.J5.monthly ? e.slice(0, 6) : "",
          });
        }
        function* rk() {
          yield (0, GE.Q7)([
            (0, GE.jP)(ia, XE),
            (0, GE.p8)(ea.getType(), QE),
            (0, GE.p8)(ta.getType(), YE),
            (0, GE.p8)(aa.getType(), HE),
            (0, GE.p8)([Qt.getType(), Gt.getType()], ZE),
            (0, GE.p8)(ra.getType(), ek),
            (0, GE.p8)([Zt.getType(), Yt.getType()], tk),
            (0, GE.p8)(Ht.getType(), ak),
          ]);
        }
        const nk = async ({ requestId: e, date: t, isLive: a }) => {
            const r = {
                requestId: e,
                report: pt.REPORT_NAME.gap,
              },
              n = {
                date: (0, dt.dateStringToObject)(t, a),
              };
            return (await Et.fetchData("/Currency/Rates", r, n)).rates;
          },
          ok = [
            kb.ERROR_CODE.reportLimitsExceeded,
            kb.ERROR_CODE.historicalDataPermission,
            kb.ERROR_CODE.productTypePermission,
            kb.ERROR_CODE.authError,
            kb.ERROR_CODE.keywordsTypePermission,
            kb.ERROR_CODE.filtersPermission,
          ];
        function* lk({
          startLoading: e,
          stopLoading: t,
          resetLoading: a,
          setError: r,
          resetError: n,
          selectError: o,
          selectLoading: l,
          success: i,
          method: s,
          data: c,
          needToken: d = !0,
          onError: p,
        }) {
          if (yield (0, GE.Lt)(l)) {
            const { timeout: e } = yield (0, GE.O4)({
              prevTaskStopped: yield (0, GE.s)([t.getType(), a.getType()]),
              timeout: yield (0, GE.cb)(50),
            });
            if (e) return;
          }
          try {
            let t;
            yield (0, GE.yJ)(e()),
              (yield (0, GE.Lt)(o)) && (yield (0, GE.yJ)(n())),
              (t = d
                ? yield (0, GE.T1)(Zi.withRequestId, s, c)
                : yield (0, GE.T1)(s, c));
            const a = i(t);
            if (Array.isArray(a)) for (const e of a) yield (0, GE.yJ)(e);
            else yield (0, GE.yJ)(i(t));
          } catch (e) {
            console.warn(e),
              ok.includes(e.code) && (yield (0, GE.yJ)(xb(e.code))),
              yield (0, GE.yJ)(r(e)),
              p && (yield (0, GE.cH)(p, e));
          } finally {
            (yield (0, GE.KW)())
              ? yield (0, GE.yJ)(a())
              : yield (0, GE.yJ)(t());
          }
        }
        (0, ke.VP)("reportConfigUpdateRequest");
        const ik = (0, ke.VP)("reportConfigUpdated"),
          sk = (e, t) => [...e.daily, ...e.monthly].includes(t),
          ck = ({ db: e, defaultDb: t, date: a }) =>
            (Boolean(e) || Boolean(t?.db)) && Boolean(a);
        function* dk(e) {
          yield (0, GE.yJ)(oa()), yield (0, GE.yJ)(ik(e));
        }
        function* pk(e) {
          yield (0, GE.T1)(lk, {
            ...nE,
            selectError: (e) => e.data.reportConfig.statusDbs.hasError,
            selectLoading: (e) => e.data.reportConfig.statusDbs.isLoading,
            success: ve,
            method: yy,
            data: {
              ...e,
            },
            needToken: !1,
          });
        }
        function* uk() {
          yield (0, GE.T1)(pk);
        }
        function* mk(e) {
          (yield (0, GE.Lt)(Pa)) || (yield (0, GE.T1)(pk, e));
        }
        function* yk({ payload: e }) {
          const t = yield (0, GE.Lt)(He.Lf),
            a = yield (0, GE.Lt)(He.Pf),
            r = yield (0, GE.Lt)(He.Ke),
            n = yield (0, GE.Lt)(Ua, t),
            o =
              "local" === r && n.length > 1
                ? n.find((e) => e !== Kt.OS)
                : Kt.OS;
          if (
            (yield (0, GE.T1)(Ke, {
              db: t,
              device: Kt.W.ToString(a),
              currency: o,
            }),
            "il" === t && 0 === a)
          ) {
            const a = `${t}-ext`;
            if (e.data.find(({ code: e }) => e === a)) {
              const e = new M(window.location.search);
              e.set("db", a),
                window.location.replace(
                  `${window.location.pathname}?${e.toString()}`
                );
            }
          }
        }
        function* gk(e) {
          yield (0, GE.T1)(lk, {
            ...sE,
            selectError: (e) => e.data.reportConfig.statusCurrencies.hasError,
            selectLoading: (e) =>
              e.data.reportConfig.statusCurrencies.isLoading,
            success: (t) => Te(t, e.date, e.isLive),
            method: nk,
            data: {
              ...e,
            },
          });
        }
        function* hk(e) {
          (yield (0, GE.Lt)(Wa, e.date, e.isLive)) || (yield (0, GE.T1)(gk, e));
        }
        function* fk(e) {
          yield (0, GE.T1)(lk, {
            ...lE,
            selectError: (e) => e.data.reportConfig.statusTimepoints.hasError,
            selectLoading: (e) =>
              e.data.reportConfig.statusTimepoints.isLoading,
            success: (t) =>
              Ae(t, e.db || e.defaultDb?.db, e.device, e.dateType),
            method: gy,
            data: {
              ...e,
              db: e.db || e.defaultDb?.db,
            },
            *onError(e) {
              e?.code === kb.ERROR_CODE.validationError &&
                (yield (0, GE.cb)(150), yield (0, GE.yJ)(Yt(Kt.W.desktop)));
            },
          });
        }
        function* bk(e) {
          (yield (0, GE.Lt)(Ja, e.db, e.device)) || (yield (0, GE.T1)(fk, e));
        }
        function* Ek(e) {
          ck(e) &&
            (yield (0, GE.Zy)(dk, e),
            yield (0, GE.T1)(mk, e),
            yield (0, GE.T1)(bk, e),
            yield (0, GE.T1)(hk, e));
        }
        function* kk(e) {
          const t = {
              ...e,
              db: e.db || e.defaultDb?.db,
            },
            a = e.device,
            r = yield (0, GE.Lt)(ha);
          return (
            r ||
              null == r ||
              (yield (0, GE.Lt)(ja, e.db || e.defaultDb?.db)).includes(a) ||
              (t.device = Kt.W.desktop),
            t
          );
        }
        let wk = {};
        const vk = (e, t) => {
          const a = Object.keys(t).reduce(
            (a, r) =>
              a &&
              ((e, t, a) =>
                "date" === a
                  ? t.date?.payload?.dateType === Kt.J5.daily
                    ? t.date?.payload?.dateType === e.dateType
                    : t.date?.payload?.date === e.date
                  : t[a]?.payload?.[a] === e[a])(e, t, r),
            !0
          );
          return a;
        };
        function* Tk() {
          let e;
          for (;;) {
            const t = yield (0, GE.O4)({
              db: (0, GE.s)(Gt),
              device: (0, GE.s)(Yt),
              date: (0, GE.s)(Ht),
            });
            if (vk(wk, t)) {
              t.date?.payload?.date !== wk.date &&
                "date" === Object.keys(t)[0] &&
                (yield (0, GE.yJ)(
                  Xt(
                    t.date?.payload?.date,
                    t.date?.payload?.dateType,
                    t.date?.payload?.isLive
                  )
                ));
              continue;
            }
            e && (yield (0, GE.ZT)(e));
            let a = yield (0, GE.Lt)(Ho);
            for (const e of Object.values(t))
              e &&
                (a = {
                  ...a,
                  ...e.payload,
                });
            (wk = yield (0, GE.T1)(kk, a)),
              yield (0, GE.yJ)(na(wk)),
              (e = yield (0, GE.Zy)(Ek, wk));
          }
        }
        function* Ak({ payload: { data: e, dateType: t } }) {
          const a = yield (0, GE.Lt)(He.pp);
          sk(e, a) ||
            (yield (0, GE.yJ)(
              Ht(
                e[t === Kt.J5.daily ? "daily" : "monthly"][0],
                t,
                t === Kt.J5.daily
              )
            ));
        }
        function* Ck() {
          const e = yield (0, GE.Lt)(Ho);
          yield (0, GE.T1)(Ek, e);
        }
        function* Sk() {
          (yield (0, GE.Lt)(Ta)) && (yield (0, GE.yJ)(Ce()));
        }
        const xk = () => null != new M(window.location.search).get("filter"),
          Rk = ({ targets: e, db: t, defaultDb: a }) =>
            e.length >= 2 && (null !== t || null !== a?.db);
        let Lk = !1;
        function* _k() {
          yield (0, GE.s)(gd.getType()), (Lk = !0);
        }
        function* Ok() {
          for (;;) {
            yield (0, GE.s)("*");
            const e = yield (0, GE.Lt)(Ho);
            if (Rk(e)) break;
          }
          xk() && !Lk && (yield (0, GE.s)(gd.getType())), yield (0, GE.Zy)(Tk);
          const e = yield (0, GE.Lt)(Ho);
          (wk = yield (0, GE.T1)(kk, e)), yield (0, GE.T1)(Ek, wk);
        }
        function* Pk() {
          yield (0, GE.Q7)([
            (0, GE.Zy)(_k),
            (0, GE.Zy)(Ok),
            (0, GE.p8)(we.getType(), uk),
            (0, GE.p8)(Ae.getType(), Ak),
            (0, GE.p8)(ve.getType(), yk),
            (0, GE.p8)(Ce.getType(), Ck),
            (0, GE.p8)(Kn.getType(), Sk),
          ]);
        }
        const Ik = (e) => "number" == typeof e,
          Mk = (e) => {
            const t = Ik(e) ? "searchItems" : e;
            return Vg.get(t);
          },
          Dk = {
            asc: "desc",
            desc: "asc",
          };
        function* Fk(e) {
          const t = yield (0, GE.Lt)(Go),
            a = e.payload.field;
          if (t !== a) {
            const e = Mk(a);
            yield (0, GE.yJ)(Zm(a, e));
          } else {
            const e = yield (0, GE.Lt)(Yo);
            yield (0, GE.yJ)(Zm(a, Dk[e]));
          }
        }
        function* Nk({ payload: e }) {
          const { targets: t } = e,
            a = yield (0, GE.Lt)(Go);
          Ik(a) && (t?.[a]?.searchItem || (yield (0, GE.yJ)(Qm(uE.field))));
        }
        function* jk(e) {
          yield (0, GE.yJ)(ay(e.payload.page));
        }
        function* qk(e) {
          yield (0, GE.O4)([(0, GE.s)(Ey.getType()), (0, GE.s)(fy.getType())]);
          const t = !P.A.hasProduct();
          yield (0, GE.yJ)(
            $n({
              ...e.payload,
              intersectionType: t ? Dn[0] : e.payload.intersectionType,
            })
          );
        }
        function* $k({ payload: { id: e } }) {
          const t = yield (0, GE.Lt)(Ho);
          yield (0, GE.yJ)(oy(e, t));
        }
        function* Uk() {
          const e = yield (0, GE.Lt)(Ho),
            t = yield (0, GE.Lt)(qm),
            a = yield (0, GE.Lt)(rl);
          t ? yield (0, GE.yJ)(iy(a, e)) : yield (0, GE.yJ)(ly(a, e));
        }
        function* Vk() {
          const e = yield (0, GE.Lt)(Ho);
          yield (0, GE.yJ)(iy(null, e));
        }
        function* zk() {
          yield (0, GE.yJ)(Xm(!1));
        }
        function* Kk() {
          yield (0, GE.yJ)(ay(1)), yield (0, GE.yJ)(ry(1));
        }
        function* Bk() {
          yield (0, GE.Q7)([
            (0, GE.p8)(Qm.getType(), Fk),
            (0, GE.p8)(ty.getType(), jk),
            (0, GE.p8)(fy.getType(), zk),
            (0, GE.p8)([ik.getType(), jn.getType(), qn.getType()], Kk),
            (0, GE.p8)(qn.getType(), qk),
            (0, GE.p8)(ny.getType(), $k),
            (0, GE.p8)(sy.getType(), Uk),
            (0, GE.p8)(cy.getType(), Vk),
            (0, GE.p8)(Kn.getType(), Nk),
          ]);
        }
        const Jk = async ({
            requestId: e,
            targets: t,
            isLive: a,
            date: r,
            db: n,
            device: o,
            filter: l,
          }) => {
            const i = {
                requestId: e,
                report: pt.REPORT_NAME.gap,
              },
              {
                positionFilter: s,
                restFilters: c,
                positionFilterType: d,
              } = Gh(l),
              p = {
                targets: Jh(t, s, d),
                date: a ? null : (0, dt.dateStringToObject)(r),
                database: (0, dt.prepareDatabase)(n, o),
                filters: c,
              };
            return (
              await Et.fetchData("/Gap/KeywordsTotals", i, p)
            ).targetKeywords.map((e) => {
              const t = new Map();
              for (const [a, r] of Object.entries(e)) t.set(a, Number(r));
              return Object.fromEntries(t);
            });
          },
          Wk = async ({
            requestId: e,
            targets: t,
            isLive: a,
            date: r,
            db: n,
            device: o,
            filter: l,
          }) => {
            const i = {
                requestId: e,
                report: pt.REPORT_NAME.gap,
              },
              {
                positionFilter: s,
                restFilters: c,
                positionFilterType: d,
              } = Gh(l),
              p = {
                targets: Jh(t, s, d),
                date: a ? null : (0, dt.dateStringToObject)(r),
                database: (0, dt.prepareDatabase)(n, o),
                filters: c,
              };
            return (await Et.fetchData("/Gap/Overlaps", i, p)).overlaps.map(
              (e) => ({
                ...e,
                commonKeywords: Number(e.commonKeywords),
              })
            );
          },
          Gk = async (e) => {
            const t = await Promise.all([Wk(e), Jk(e)]),
              [a, r] = t;
            return {
              overlaps: a,
              targetsKeywords: r,
            };
          },
          Yk = async ({
            requestId: e,
            db: t,
            device: a,
            date: r,
            isLive: n,
            targets: o,
            type: l = ye.SJ.common,
            filter: i = {},
            page: s = 1,
            pageSize: c = 100,
            sortField: d = "volume",
            sortDirection: p = "desc",
            columnsSet: u = [],
          }) => {
            const m = {
                report: pt.REPORT_NAME.gap,
                requestId: e,
              },
              {
                positionFilter: y,
                restFilters: g,
                positionFilterType: h,
              } = Gh(i),
              f = {
                targets: Jh(o, y, h),
                date: n ? null : (0, dt.dateStringToObject)(r),
                database: (0, dt.prepareDatabase)(t, a),
                type: pt.KEYWORDS_TYPE[l],
                range: {
                  limit: c,
                  offset: (s - 1) * c,
                },
                columns:
                  u.length > 0
                    ? u
                    : [
                        pt.KEYWORDS_LIST_COLUMN.keyword,
                        pt.KEYWORDS_LIST_COLUMN.intent,
                        pt.KEYWORDS_LIST_COLUMN.volume,
                        pt.KEYWORDS_LIST_COLUMN.keywordDifficulty,
                        pt.KEYWORDS_LIST_COLUMN.cpc,
                        pt.KEYWORDS_LIST_COLUMN.comp,
                        pt.KEYWORDS_LIST_COLUMN.positions,
                        pt.KEYWORDS_LIST_COLUMN.urls,
                        pt.KEYWORDS_LIST_COLUMN.results,
                      ],
                order: {
                  column: pt.KEYWORDS_LIST_ORDER_COLUMN[Bh(d)],
                  direction: pt.ORDER_DIRECTION[p],
                },
                filters: g,
              };
            return (await Et.fetchData("/Gap/KeywordsList", m, f)).keywords.map(
              (e) => ({
                ...e,
                positions: e.targetsPosition,
                comp: e.competitionDensity,
                intents: e.intents.map((e) => pt.INTENT_SPEC_RESPONSE[e]),
                urls: e.targetsUrl,
              })
            );
          },
          Hk = async (e) => {
            const { targets: t = [] } = e,
              a = {
                ...e,
                pageSize: 5,
                sortField: "volume",
                sortDirection: "desc",
                columnsSet: [
                  pt.KEYWORDS_LIST_COLUMN.keyword,
                  pt.KEYWORDS_LIST_COLUMN.intent,
                  pt.KEYWORDS_LIST_COLUMN.volume,
                  pt.KEYWORDS_LIST_COLUMN.keywordDifficulty,
                  pt.KEYWORDS_LIST_COLUMN.cpc,
                ],
              };
            if (t.every((e) => "organic" === e.dataType)) {
              const e = await Promise.all([
                  Yk({
                    ...a,
                    type: ye.SJ.missing,
                  }),
                  Yk({
                    ...a,
                    type: ye.SJ.weak,
                  }),
                ]),
                [t, r] = e;
              return {
                missing: t,
                weak: r,
              };
            }
            return {
              common: await Yk({
                ...a,
                type: ye.SJ.common,
              }),
            };
          };
        function* Qk(e) {
          yield (0, GE.T1)(lk, {
            ...hE,
            selectError: (e) => e.data.keywordsTotal.status.hasError,
            selectLoading: (e) => e.data.keywordsTotal.status.isLoading,
            success: (e) => Ad(e),
            method: Gk,
            data: {
              ...e,
            },
          });
        }
        function* Zk(e) {
          const { code: t } = e.payload.id;
          t === kb.ERROR_CODE.productTypePermission &&
            (yield (0, GE.yJ)(xb(t)));
        }
        function* Xk(e) {
          const t = yield (0, GE.Lt)(Ho),
            a = e.type === Kn.getType() && e?.payload?.isLanding;
          t.targets.length < ye.an || a || (yield (0, GE.T1)(Qk, t));
        }
        function* ew() {
          yield (0, GE.Q7)([
            (0, GE.p8)([Kn.getType(), ik.getType(), md.getType()], Xk),
            (0, GE.p8)([hE.setError.getType()], Zk),
          ]);
        }
        function* tw({ payload: { params: e } }) {
          yield (0, GE.T1)(lk, {
            ...SE,
            selectError: (e) => e.data.keywords.status.hasError,
            selectLoading: (e) => e.data.keywords.status.isLoading,
            success: (t) =>
              fy(
                t?.map((e) => ({
                  ...e,
                  id: (0, DE.nanoid)(),
                  positions: e.positions.map((e) => (0 === e ? null : e)),
                  intents:
                    e?.intents.map((e) => yl.INTENT_IDS.getType(e)) ?? [],
                })) ?? [],
                e
              ),
            method: Yk,
            data: {
              ...e,
            },
          });
        }
        function* aw(e, t = {}) {
          const a = e?.payload?.reload,
            r = {
              ...(yield (0, GE.Lt)(Ho)),
              ...t,
            };
          if (!(r.targets.length < ye.an))
            return (yield (0, GE.Lt)(ol, r)) && !a
              ? (yield (0, GE.yJ)(Ey()), void (yield (0, GE.yJ)(ty(r.page))))
              : (yield (0, GE.yJ)(by(r)),
                yield (0, GE.s)(SE.stopLoading.getType()),
                void (yield (0, GE.yJ)(ty(r.page))));
        }
        function* rw({ payload: { page: e } }) {
          (0, Ym.isTableLimited)({
            userRole: P.A.productGroup,
            page: e,
          })
            ? yield (0, GE.yJ)(Xm(!0))
            : (yield (0, GE.yJ)(Xm(!1)),
              yield (0, GE.T1)(aw, null, {
                page: e,
              }));
        }
        function* nw({ payload: { intersectionType: e } }) {
          yield (0, GE.T1)(aw, null, {
            page: 1,
            type: e,
          });
        }
        function* ow({ payload: { field: e, direction: t } }) {
          yield (0, GE.T1)(aw, null, {
            sortField: e,
            sortDirection: t,
          });
        }
        function* lw(e) {
          const { code: t } = e.payload.id;
          t === kb.ERROR_CODE.filtersPermission && (yield (0, GE.yJ)(xb(t)));
        }
        function* iw() {
          for (;;) {
            const { payload: e } = yield (0, GE.s)(Ad);
            e &&
              0 !== e?.data?.targetsKeywords?.length &&
              (yield (0, GE.T1)(aw, null, {
                page: 1,
              }));
          }
        }
        function* sw() {
          yield (0, GE.Q7)([
            (0, GE.p8)(hy.getType(), aw),
            (0, GE.p8)(ey.getType(), rw),
            (0, GE.p8)(qn.getType(), nw),
            (0, GE.p8)(by.getType(), tw),
            (0, GE.p8)(Zm.getType(), ow),
            (0, GE.Zy)(iw),
            (0, GE.p8)([SE.setError.getType()], lw),
          ]);
        }
        const cw = async ({
          requestId: e,
          searchItem: t,
          searchType: a,
          date: r,
          dateType: n,
        }) => {
          const o = {
              requestId: e,
              report: pt.REPORT_NAME.gap,
            },
            l = {
              target: {
                type: pt.TARGET_TYPE[a],
                value: t,
              },
              date: (0, dt.dateStringToObject)(r, n === Ct.Daily),
              database: "worldwide",
              range: {
                limit: 200,
                offset: 0,
              },
              columns: [
                pt.SUMMARY_COLUMN.organicPositions,
                pt.SUMMARY_COLUMN.adwordsPositions,
                pt.SUMMARY_COLUMN.plaPositions,
                pt.SUMMARY_COLUMN.database,
              ],
              order: {
                column: pt.SUMMARY_COLUMN.organicPositions,
                direction: pt.ORDER_DIRECTION.desc,
              },
            };
          return (await Et.fetchData("/Summary/Overview", o, l)).metrics;
        };
        function* dw() {
          const e = yield (0, GE.Lt)(He.pp),
            t = yield (0, GE.Lt)(He.Lk),
            { searchItem: a, searchType: r } = yield (0, GE.Lt)(lo.qG);
          yield (0, GE.T1)(lk, {
            ...OE,
            selectError: (e) => e.data.ranks.status.hasError,
            selectLoading: (e) => e.data.ranks.status.isLoading,
            success: (e) => bf(e),
            needToken: !1,
            method: cw,
            data: {
              date: e,
              dateType: t,
              searchItem: a,
              searchType: r,
            },
          });
        }
        function* pw() {
          yield (0, GE.Q7)([(0, GE.p8)(ff.getType(), dw)]);
        }
        function* uw(e) {
          yield (0, GE.T1)(lk, {
            ...wE,
            selectError: _o,
            selectLoading: Ro,
            success: (e) => kE(e),
            method: Hk,
            data: {
              ...e,
            },
          });
        }
        function* mw(e) {
          const { code: t } = e.payload.id;
          t === kb.ERROR_CODE.productTypePermission &&
            (yield (0, GE.yJ)(xb(t)));
        }
        function* yw(e) {
          const t = yield (0, GE.Lt)(Ho),
            a = e.type === Kn.getType() && e?.payload?.isLanding;
          t.targets.length < ye.an || a || (yield (0, GE.T1)(uw, t));
        }
        function* gw() {
          yield (0, GE.Q7)([
            (0, GE.p8)([Kn.getType(), ik.getType(), md.getType()], yw),
            (0, GE.p8)([wE.setError.getType()], mw),
          ]);
        }
        function* hw(e) {
          const t = e.payload.name.toLowerCase(),
            { value: a } = e.payload;
          yield (0, GE.yJ)(hd[t].setFilter(a));
        }
        function* fw() {
          yield (0, GE.yJ)(md());
        }
        function* bw() {
          yield (0, GE.yJ)(sd({})), yield (0, GE.yJ)(md());
        }
        function* Ew() {
          const e = yield (0, GE.Lt)(Uo);
          0 === Object.keys(e).filter((e) => "order" !== e).length &&
            (yield (0, GE.yJ)(cd()));
        }
        function* kw(e) {
          const { skipGa: t } = e.payload,
            a = yield (0, GE.Lt)(Uo),
            r = {},
            n = [];
          for (const e of Object.values(a))
            null == e.id || null == e.value || "" === e.value || jE(r, e)
              ? n.push(e)
              : (r[e.id] = e);
          if (0 !== Object.values(r).length) {
            for (const e of n) e?.id && (yield (0, GE.yJ)(dd(e.id)));
            0 !== Object.keys(r).length &&
              (yield (0, GE.yJ)(sd(r)), yield (0, GE.yJ)(md()), t || Tu(r));
          } else yield (0, GE.yJ)(ud());
        }
        function* ww(e) {
          const t = yield (0, GE.Lt)(Vo, e),
            a = FE(t.field);
          null == a
            ? yield (0, GE.yJ)(pd(e, "criteria", null))
            : a.includes(t.criteria) ||
              (yield (0, GE.yJ)(pd(e, "criteria", a[0])));
        }
        function* vw(e) {
          const t = yield (0, GE.Lt)(Vo, e),
            a = NE(t.field);
          null == a
            ? yield (0, GE.yJ)(pd(e, "value", null))
            : a.includes(t.value) || (yield (0, GE.yJ)(pd(e, "value", a[0])));
        }
        function* Tw({ payload: { id: e, name: t } }) {
          "field" === t && (yield (0, GE.Zy)(ww, e), yield (0, GE.Zy)(vw, e));
        }
        function* Aw({ payload: { data: e } }) {
          null != e
            ? (yield (0, GE.yJ)(ad.setFilter(e?.volume)),
              yield (0, GE.yJ)(td.setFilter(e?.position)),
              yield (0, GE.yJ)(rd.setFilter(e?.search)),
              yield (0, GE.yJ)(nd.setFilter(e?.keywordDifficulty)),
              yield (0, GE.yJ)(od.setFilter(e?.intent)),
              Object.keys(e?.advanced ?? {}).length > 0 &&
                (yield (0, GE.yJ)(ld(e?.advanced)), yield (0, GE.yJ)(id(!0))),
              yield (0, GE.yJ)(gd()))
            : yield (0, GE.yJ)(gd());
        }
        function* Cw() {
          yield (0, GE.Q7)([
            (0, GE.p8)(({ type: e }) => e.includes("/requestSetFilter"), hw),
            (0, GE.p8)(ud, bw),
            (0, GE.p8)(Xc, bw),
            (0, GE.Zy)(Ew),
            (0, GE.p8)(({ type: e }) => e.includes("/clearFilter"), fw),
            (0, GE.p8)(id, kw),
            (0, GE.p8)(pd, Tw),
            (0, GE.p8)(yd, Aw),
          ]);
        }
        const Sw = (e, t) =>
          ((e, t) => (e ? ua()(t, (t) => void 0 !== e[t] && e[t] > 0) : null))(
            e,
            t
          );
        function* xw() {
          const e = yield (0, GE.Lt)(po),
            t = !P.A.hasProduct();
          if (e || t) return;
          const a = yield (0, GE.Lt)(vo),
            r = yield (0, GE.Lt)(uo),
            n = Sw(a, Dn);
          null != n &&
            r !== n &&
            (yield (0, GE.yJ)(
              qn({
                intersectionType: n,
              })
            ));
        }
        function* Rw({ payload: { type: e } }) {
          Dn.includes(e) &&
            (yield (0, GE.yJ)(
              $n({
                intersectionType: e,
                intersectionSetByUser: !0,
              })
            ));
        }
        function* Lw() {
          yield (0, GE.Q7)([
            (0, GE.p8)([Ad.getType()], xw),
            (0, GE.p8)(Un.getType(), Rw),
          ]);
        }
        function* _w() {
          try {
            yield (0, GE.yJ)(Ht(Tt(), Kt.J5.daily, !0)),
              yield (0, GE.s)([ik.getType()]),
              yield (0, GE.yJ)(Lb());
          } catch (e) {
            console.warn(e);
          }
        }
        function* Ow() {
          yield (0, GE.Q7)([(0, GE.jP)(Rb, _w)]);
        }
        const Pw = (e) => {
            const [t, a, r] = e.split(":");
            return {
              searchItem: decodeURIComponent(t),
              searchType: a || "domain",
              keywordType: r || ye.N$,
            };
          },
          Iw = (e) => {
            const t = e.split("|").map(Pw).slice(0, ye.$D);
            return [
              ...t,
              ...((a = t.length),
              [...Array(ye.$D - a)].map(() => (0, De.Competitor)())),
            ];
            var a;
          };
        function* Mw({ payload: { targets: e } }) {
          yield (0, GE.T1)(Ue, e);
        }
        function* Dw({ payload: { targets: e } }) {
          const t = yield (0, GE.Lt)(lo.lG),
            a = yield (0, GE.Lt)(po),
            r = e.map(({ searchItem: e }) => e).filter((e) => !!e);
          if (t.join("") !== r.join("") && t.length > 0)
            yield (0, GE.yJ)(Kn(e));
          else {
            yield (0, GE.yJ)(Jn(e));
            const t = e.filter((e) => !!e.searchItem).map((e) => e.keywordType),
              a = new Set(t);
            if (a.size > 1) yield (0, GE.yJ)(Nn(ye.vV.advanced));
            else if (!a.has(ye.N$)) {
              const e = t[0];
              yield (0, GE.yJ)(jn(e));
            }
          }
          a || (yield (0, GE.yJ)(Vn()));
        }
        function* Fw() {
          for (;;) {
            const [e, t, a, r] = yield (0, GE.O4)([
                (0, GE.s)(Wn.getType()),
                (0, GE.s)(Gn.getType()),
                (0, GE.s)(Yn.getType()),
                (0, GE.s)(Hn.getType()),
              ]),
              n = yield (0, GE.Lt)(lo.N3),
              [o] = n;
            if (
              ((e || t || a) &&
                (yield (0, GE.yJ)(
                  Bn([
                    {
                      searchItem: e
                        ? decodeURIComponent(e?.payload.q)
                        : o.searchItem,
                      searchType: t?.payload?.searchType || o.searchType,
                      keywordType: a?.payload?.keywordType || o.keywordType,
                    },
                    ...n.slice(1),
                  ])
                )),
              r)
            ) {
              const e = Iw(r.payload.compareWith);
              yield (0, GE.yJ)(Bn([o, ...e]));
            }
          }
        }
        function* Nw() {
          const e = new M(location.search),
            [t, a, r, n] = yield (0, GE.Q7)([
              e.get("q") && (0, GE.s)(Wn.getType()),
              e.get("searchType") && (0, GE.s)(Gn.getType()),
              e.get("keywordType") && (0, GE.s)(Yn.getType()),
              e.get("compareWith") && (0, GE.s)(Hn.getType()),
            ]);
          if (!t) return void (yield (0, GE.cH)(Fw));
          const o = t?.payload.q,
            l = a?.payload.searchType ?? "domain",
            i = r?.payload.keywordType ?? ye.N$,
            s = n?.payload.compareWith ?? "",
            c = Iw(s);
          yield (0, GE.yJ)(
            Bn([
              {
                searchItem: decodeURIComponent(o),
                searchType: l || "domain",
                keywordType: i || ye.N$,
              },
              ...c,
            ])
          ),
            yield (0, GE.cH)(Fw);
        }
        function* jw() {
          yield (0, GE.Q7)([
            (0, GE.p8)(Kn.getType(), Mw),
            (0, GE.p8)(Bn.getType(), Dw),
            (0, GE.Zy)(Nw),
          ]);
        }
        const qw = () =>
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
        function* $w() {
          yield qw();
          const e = window.sm2.navigation.getSearchbarData();
          e ? yield (0, GE.yJ)(ia(e.db)) : yield (0, GE.yJ)(ia("us"));
        }
        function* Uw() {
          yield (0, GE.Q7)([(0, GE.cH)($w)]);
        }
        function* Vw() {
          try {
            if (!P.A.isAuthorized()) return;
            const { db: e, defaultDb: t } = yield (0, GE.Lt)(He.eF),
              a = yield (0, GE.T1)(my, {
                database: e || t?.db || St.nR,
              });
            yield (0, GE.yJ)(Xe(a));
          } catch (e) {
            console.warn(e);
          }
        }
        function* zw() {
          yield (0, GE.T1)(Vw);
        }
        const Kw = a(21081),
          Bw = (0, Vb.Ay)({
            onError: (e) => {
              zb.Cp(e);
            },
          });
        (0, a(97633).A)({
          projectID: 163,
          publicKey: "0ef824d8c8da4a0a947c3587131d258c",
          url: p().sentry_url,
          environment: "prod",
          release: "keyword-gap@2f763860",
          user: P.A,
        }),
          c.listen(({ action: e }) => {
            "PUSH" === e && f();
          });
        const Jw = (function (e = {}, t) {
            const a = [Bw],
              r = [(0, Ub.Tw)(...a)],
              n = Ub.Zz,
              o = (0, Ub.y$)(
                (function (e = {}) {
                  return (0, Ub.HY)({
                    ...WE,
                    page: Yb.reducer,
                    limits: Hb.reducer,
                    [at]: rt,
                    keyword_gap: Zb.reducer,
                    targets: eE.reducer,
                    ...e,
                  });
                })(),
                {
                  ...e,
                },
                n(...r)
              );
            "prod" !== Kw.PROD && (window.__RED_TEST_STORE_DATA__ = o),
              Bw.run(Uw),
              Bw.run(rk),
              Bw.run(Pk),
              Bw.run(Bk),
              Bw.run(ew),
              Bw.run(gw),
              Bw.run(sw),
              Bw.run(pw),
              Bw.run(Cw),
              Bw.run(Lw),
              Bw.run(Ow),
              Bw.run(jw),
              Bw.run(zw);
            return (
              (function ({
                store: e,
                params: t,
                replaceState: a,
                initialTruth: r,
                history: n = (0, s.zR)(),
              }) {
                const { dispatch: o } = e;
                let l,
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
                  const a = new Kb.A(e.search),
                    r = {};
                  return (
                    Object.keys(t).forEach((e) => {
                      const { defaultValue: n, stringToValue: o = (e) => e } =
                          t[e],
                        l = a.get(e),
                        i = null === l ? n : o(l);
                      r[e] = i;
                    }),
                    r
                  );
                }
                function u({ replaceState: a }) {
                  if (c) return;
                  const r = e.getState(),
                    o = d(n),
                    s = new Kb.A(o.search);
                  Object.keys(t).forEach((e) => {
                    const {
                        selector: a,
                        defaultValue: n,
                        valueToString: o = (e) => `${e}`,
                      } = t[e],
                      i = a(r);
                    i === n ? s.delete(e) : s.set(e, o(i)), (l[e] = i);
                  });
                  const p = `?${s}`;
                  if (p !== (o.search || "?")) {
                    i = !0;
                    const e = {
                      pathname: o.pathname,
                      search: p,
                      hash: o.hash,
                      state: o.state,
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
                    if (void 0 === l || l[e] !== a) {
                      const { selector: n, action: o } = t[e];
                      n(r) !== a && s.push(o(a));
                    }
                  }),
                    (l = n),
                    (c = !0),
                    s.forEach((e) => {
                      o(e);
                    }),
                    (c = !1),
                    u({
                      replaceState: !0,
                    });
                }
                const y = n.listen(m),
                  g = e.subscribe(() =>
                    u({
                      replaceState: a,
                    })
                  );
                "location" === r ? m(d(n)) : (l = p(d(n))),
                  "store" === r &&
                    u({
                      replaceState: !0,
                    });
              })({
                store: o,
                initialTruth: "location",
                params: {
                  db: {
                    selector: (e) => e.page.db,
                    action: (e) => ta(e),
                    defaultValue: null,
                  },
                  device: {
                    selector: (e) => e.page.device,
                    action: (e) => aa(e),
                    stringToValue: (e) =>
                      ({
                        desktop: 0,
                        mobile: 1,
                        0: 0,
                        1: 1,
                      }[e]),
                    valueToString: (e) =>
                      ({
                        0: "desktop",
                        1: "mobile",
                      }[e]),
                    defaultValue: 0,
                  },
                  date: {
                    selector: (e) => (0, He.aZ)(e),
                    action: (e) => ea(e),
                    defaultValue: At(),
                  },
                  q: {
                    selector: lo.zP,
                    action: (e) => Wn(e),
                    defaultValue: "",
                  },
                  searchType: {
                    selector: lo.rq,
                    action: (e) => Gn(e),
                    defaultValue: void 0,
                  },
                  keywordType: {
                    selector: lo.Ih,
                    action: (e) => Yn(e),
                    defaultValue: void 0,
                  },
                  rankType: {
                    selector: uo,
                    action: Un,
                    defaultValue: "",
                  },
                  compareWith: {
                    selector: (e) => (0, lo.mi)(e),
                    action: (e) => Hn(e),
                    defaultValue: "",
                  },
                  filter: {
                    selector: Ko,
                    action: yd,
                    stringToValue: Wb,
                    valueToString: Jb,
                    defaultValue: null,
                  },
                  currency: {
                    defaultValue: ya,
                    selector: za,
                    action: (e) => ra(e),
                    stringToValue: (e) => (3 !== e.length ? ya : e),
                  },
                },
                history: t,
              }),
              (o.runSaga = Bw.run),
              (o.injectedReducers = {}),
              (o.injectedSagas = {}),
              o
            );
          })({}, c),
          Ww = document.getElementById("keyword-gap-app");
        var Gw;
        (Gw = () => (
          (0, n.useEffect)(() => {
            f();
          }, []),
          n.createElement(
            $b,
            {
              "data-at": "keyword-gap",
            },
            n.createElement(qb, null),
            n.createElement(jb, null)
          )
        )),
          (0, o.H)(Ww).render(
            n.createElement(
              S,
              {
                locale: ne,
              },
              n.createElement(
                l.Kq,
                {
                  store: Jw,
                },
                n.createElement(se, null, n.createElement(Gw, null))
              )
            )
          );
      },
      49962: (e, t, a) => {
        "use strict";
        a.d(t, {
          A: () => o,
          n: () => n,
        });
        var r = a(97673);
        const n = {
            [r.USER_ROLES.guest]: "Payment Guest",
            [r.USER_ROLES.free]: "Payment FREE",
            [r.USER_ROLES.appCenter]: "Payment AppCenter",
            [r.USER_ROLES.pro]: "Payment PRO",
            [r.USER_ROLES.guru]: "Payment GURU",
            [r.USER_ROLES.business]: "Payment BUSINESS",
            [r.USER_ROLES.customPlan]: "Payment BUSINESS",
          },
          o = {
            success: "success",
            sww: "sww",
            nodata: "nodata",
          };
      },
      41486: (e, t, a) => {
        "use strict";
        a.d(t, {
          $D: () => n,
          CT: () => s,
          Kv: () => l,
          N$: () => o,
          SJ: () => d,
          an: () => r,
          vM: () => i,
          vV: () => c,
        });
        const r = 2,
          n = 4,
          o = "organic",
          l = {
            searchItem: "",
            searchType: "domain",
            keywordType: o,
          },
          i = ["domain", "url", "subdomain", "subfolder"],
          s = ["organic", "adwords", "pla"],
          c = {
            simple: "simple",
            advanced: "advanced",
          },
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
      4676: (e, t, a) => {
        "use strict";
        a.d(t, {
          $G: () => l,
          Ac: () => o,
          G2: () => n,
        });
        var r = a(27992);
        const n = "keyword_gap.table.add_to_list",
          o = (e) => {
            r.A.track(r.A.eventName.click, {
              item_location: `${n}.click`,
              item_label: `${e}`,
              type: "button",
            });
          },
          l = () => {
            r.A.track(r.A.eventName.click, {
              item_location: `${n}.click`,
              item_label: "1",
              type: "icon",
            });
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
          o = /-ext$/,
          l = /^mobile-/,
          i = (e) => ({
            isMobile: n.test(e),
            db: e?.replace(l, ""),
          }),
          s = (e) => l.test(e),
          c = (e) => 1 === e,
          d = (e, t) => (c(t) ? ((e) => `mobile-${e}`)(e) : e),
          p = (e, t = !0) => {
            let a = e;
            return (
              l.test(a) && (a = a.replace(l, "")),
              t && o.test(a) && (a = a.replace(o, "")),
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
        a.d(t, {
          A: () => n,
        }),
          (r = new (a(97673).User)());
        const n = r;
      },
      27992: (e, t, a) => {
        "use strict";
        a.d(t, {
          A: () => p,
          h: () => r,
        });
        var r = {};
        a.r(r),
          a.d(r, {
            gaDetailsClick: () => l,
            gaWidgetNoData: () => c,
            gaWidgetState: () => i,
            gaWidgetSuccess: () => s,
            gaWidgetSww: () => d,
          });
        var n = a(97673),
          o = a(49962);
        const l = ({ itemLocation: e, type: t }) => {
            p.track(p.eventName.click, {
              item_location: `${e}.view_details`,
              type: t,
            });
          },
          i = ({ itemLocation: e, type: t, status: a }) => {
            p.track(p.eventName.show, {
              item_location: e,
              type: t,
              status: a,
            });
          },
          s = ({ itemLocation: e, type: t }) => {
            i({
              itemLocation: e,
              type: t,
              status: o.A.success,
            });
          },
          c = ({ itemLocation: e, type: t }) => {
            i({
              itemLocation: e,
              type: t,
              status: o.A.nodata,
            });
          },
          d = ({ itemLocation: e, type: t }) => {
            i({
              itemLocation: e,
              type: t,
              status: o.A.sww,
            });
          },
          p = new n.GA4("keyword_gap", void 0);
      },
      89961: (e, t, a) => {
        "use strict";
        a.d(t, {
          J5: () => n,
          OS: () => o,
          W: () => r,
          a4: () => l,
        });
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
          o = "usd",
          l = [1e3, 10];
      },
      20827: (e) => {
        e.exports = {
          static_url: "https://static.semrush.com/keyword-gap/",
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
        a.r(t),
          a.d(t, {
            stateKey: () => r,
          });
        const r = "page";
      },
      64683: (e, t, a) => {
        "use strict";
        a.d(t, {
          Ke: () => E,
          Lf: () => u,
          Lk: () => g,
          Pf: () => b,
          VG: () => h,
          aZ: () => f,
          al: () => k,
          dW: () => m,
          eF: () => w,
          pp: () => y,
        });
        var r = a(1081),
          n = a(58156),
          o = a.n(n),
          l = a(42534),
          i = a(89961),
          s = a(55497),
          c = a(67072);
        const d = (e) => (e[c.stateKey] ? e[c.stateKey] : {}),
          p = (e, t) => o()(d(e).nextParams, t, null) || d(e)[t],
          u = (e) => p(e, "db"),
          m = (e) => d(e).defaultDb,
          y = (e) => p(e, "date"),
          g = (e) => p(e, "dateType"),
          h = (e) => p(e, "isLive"),
          f = (e) => {
            const t = y(e),
              a = g(e);
            return t
              ? t.slice(0, t.length - (a === i.J5.monthly ? 2 : 0))
              : null;
          },
          b = (e) => p(e, "device"),
          E = (e) => d(e).currencyType,
          k = (0, r.Mz)(
            [l.Dv],
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
              b,
              (e) => d(e).currency,
              (e) => p(e, "searchType"),
              (e) => p(e, "searchItem"),
            ],
            (e, t, a, r, n, o, l, i, s, c) => ({
              db: e,
              defaultDb: t,
              domain: a,
              scope: r,
              date: n,
              dateType: o,
              device: l,
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
            Competitor: () => l,
            SEARCH_TYPES: () => o,
            stateKey: () => n,
          });
        var r = a(41486);
        const n = "targets",
          o = {
            domain: "domain",
            subdomain: "subdomain",
            url: "url",
            subfolder: "subfolder",
          },
          l = () => ({
            ...r.Kv,
          });
      },
      42534: (e, t, a) => {
        "use strict";
        a.d(t, {
          Dv: () => l,
          G9: () => y,
          Ih: () => c,
          Ij: () => b,
          N3: () => o,
          S3: () => h,
          lG: () => f,
          mi: () => d,
          qG: () => u,
          rq: () => s,
          yo: () => p,
          zP: () => i,
          zW: () => g,
        });
        var r = a(1081),
          n = a(7053);
        const o = (e) =>
            ((e) => (e[n.stateKey] ? e[n.stateKey] : {}))(e).data || [],
          l = (0, r.Mz)(o, (e) =>
            e.map((e) => ({
              value: e.searchItem,
              type: e.searchType,
              dataType: e.keywordType,
            }))
          ),
          i = (0, r.Mz)(o, (e) => e?.[0]?.searchItem ?? ""),
          s = (0, r.Mz)(o, (e) => e?.[0]?.searchType),
          c = (0, r.Mz)(o, (e) => e?.[0]?.keywordType),
          d = (0, r.Mz)(
            o,
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
            ((0, r.Mz)(o, (e) => (e.length ? e : "")),
            (0, r.Mz)(o, (e) => e.filter((e) => "" !== e.searchItem))),
          u = (0, r.Mz)(p, (e) => (e.length > 0 ? e[0] : {})),
          m = (0, r.Mz)(o, (e) => e.map((e) => e.keywordType).join("_")),
          y = (0, r.Mz)(m, (e) => e),
          g = (0, r.Mz)([o], (e) => e?.[0]?.keywordType ?? "organic"),
          h = (0, r.Mz)(
            [o],
            (e) =>
              1 ===
              new Set(
                e
                  .filter(({ searchItem: e }) => e)
                  .map(({ keywordType: e }) => e)
              ).size
          ),
          f = (0, r.Mz)(o, (e) =>
            e.filter((e) => e.searchItem.length).map(({ searchItem: e }) => e)
          ),
          b = (0, r.Mz)(f, (e) => e?.length > 1);
      },
      21081: (e) => {
        e.exports = {
          DEV: "dev",
          RC: "rc",
          PROD: "prod",
          STAGE: "stage",
        };
      },
    },
  ]);
//# sourceMappingURL=645.c8d53b34c7b9231d2bac.js.map
