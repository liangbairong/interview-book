'use strict';
(self.webpackChunktext = self.webpackChunktext || []).push([
  [65],
  {
    20604: function (d, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return s;
          },
        });
      var t = e(14570),
        a = e(67294),
        r = function () {
          var u = (0, t.YB)(),
            l = (0, t.bU)();
          return a.createElement(
            'div',
            { className: 'dumi-default-not-found' },
            a.createElement('h1', null, u.formatMessage({ id: '404.title' })),
            a.createElement(
              t.rU,
              { to: 'base' in l ? l.base : '/', replace: !0 },
              u.formatMessage({ id: '404.back' }),
              ' \u2192',
            ),
          );
        },
        s = r;
    },
  },
]);
