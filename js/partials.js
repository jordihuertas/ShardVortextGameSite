/* ============================================================
   ShardVortex — partials.js
   Fetches and injects shared header/footer partials, then
   initialises i18n and the main app module.
   ============================================================ */
(function () {
  'use strict';

  function loadPartial(url, targetId) {
    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('Could not load ' + url + ' (' + res.status + ')');
        return res.text();
      })
      .then(function (html) {
        var el = document.getElementById(targetId);
        if (el) el.innerHTML = html;
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
      loadPartial('partials/header.html', 'site-header'),
      loadPartial('partials/footer.html', 'site-footer'),
    ])
      .catch(function (err) {
        console.warn('[partials.js]', err.message);
      })
      .finally(function () {
        if (window.I18n)    window.I18n.init();
        if (window.MainApp) window.MainApp.init();
      });
  });
}());
