'use strict';
(self.webpackChunktext = self.webpackChunktext || []).push([
  [923],
  {
    34576: function (P, o, t) {
      t.r(o),
        t.d(o, {
          default: function () {
            return f;
          },
        });
      var i = t(27424),
        d = t.n(i),
        e = t(67294),
        r = t(14570),
        u = t(64236),
        _ = t(52968),
        E = t(90482),
        m = t(85893),
        c = {};
      function f() {
        var h = (0, r.pC)(),
          D = (0, e.useState)(!0),
          n = d()(D, 2),
          v = n[0],
          s = n[1],
          a = (0, e.useRef)(r.m8.location.pathname);
        return (
          (0, e.useEffect)(function () {
            return r.m8.listen(function (l) {
              l.location.pathname !== a.current &&
                ((a.current = l.location.pathname),
                s(!0),
                document.documentElement.scrollTo(0, 0));
            });
          }, []),
          (0, m.jsx)(u.D.Provider, {
            value: {
              pkg: {
                name: 'text',
                description: 'A react library developed with dumi',
                version: '0.0.1',
                license: 'MIT',
                authors: [],
              },
              historyType: 'browser',
              entryExports: c,
              demos: _.DE,
              components: _.wx,
              locales: E.k,
              loading: v,
              setLoading: s,
              themeConfig: {
                title: 'interview-book',
                footer:
                  'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
                prefersColor: { default: 'light', switch: !0 },
                name: 'text',
              },
            },
            children: h,
          })
        );
      }
    },
  },
]);
