/* ============================================================
   ShardVortex — i18n module
   Supports: en (English) | es (Spanish)
   Usage:
     data-i18n="key"             → sets textContent
     data-i18n-html="key"        → sets innerHTML
     data-i18n-list="key"        → rebuilds <li> children from array
     data-i18n-attr="attr:key"   → sets an attribute value
       + data-i18n-n="N"         → replaces {n} in the value with N
   ============================================================ */
(function () {
  'use strict';

  var TRANSLATIONS = {
    en: {
      /* Nav */
      nav_home:    'Home',
      nav_privacy: 'Privacy Policy',
      /* Hero */
      hero_subtitle:        'Aim, launch, and destroy rows of polygonal enemies. <br>A frantic arcade challenge, ideal for quick games.',
      hero_cta_screenshots: 'View Screenshots',
      hero_cta_learn:       'Learn More',
      scroll_text:          'Scroll',
      /* About */
      about_eyebrow: 'About the Game',
      about_title:   'What is Shard Vortex?',
      about_desc:    'An addictive, action-packed experience that will keep you coming back for more.',
      about_h3:      'Enter the Vortex',
      about_p1:      'Shard Vortex is a mobile arcade game inspired by the classic Pinball, Tetris and Ballz styles. Take precise aim, launch your balls, and clear the rows of enemies approaching before they reach the limit.',
      about_p2:      'As you progress, rows get tougher and you\'ll find a great variety of enemy shapes — circles, triangles (freezing), squares (with shields), hexagons (electric) — plus special events like explosive balls and bonus balls. Survive special events like the vortex, freezes, and electric fields. Use the speed-up button (2×/4×/8×) to go further and beat your own record.',
      feature_1: 'Play as you want',
      feature_2: 'Variety of enemy types and shapes',
      feature_3: 'Beautiful special effects',
      feature_4: 'Original music',
      /* Screenshots */
      screenshots_eyebrow: 'Gallery',
      screenshots_title:   'Screenshots',
      screenshots_desc:    'See Shard Vortex in action. Click any screenshot to zoom in.',
      screenshot: 'Screenshot',
      /* Screenshots accessibility */
      screenshot_open:    'Open screenshot {n}',
      screenshot_img_alt: 'Shard Vortex screenshot {n}',
      screenshot_zoom_alt: 'Screenshot zoomed in',
      /* Footer */
      footer_copy: '\u00a9 {year} Shard Vortex. All rights reserved.',
      /* Privacy Policy */
      pp_page_title:        'Privacy Policy \u2014 Shard Vortex',
      pp_title:             'Privacy Policy',
      pp_last_updated:      'Last updated',
      pp_highlight:         '<strong>Shard Vortex does not collect, store, or share any personal data.</strong> Your privacy is fully protected when using our application.',
      pp_overview_title:    'Overview',
      pp_overview_text:     'This Privacy Policy describes how Shard Vortex (\u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d) handles information in connection with the use of the Shard Vortex application (\u201cthe App\u201d). We are committed to protecting your privacy. In short: <strong style="color:#fff">we collect nothing</strong>.',
      pp_no_data_title:     'No Data Collection',
      pp_no_data_intro:     'Shard Vortex does <strong style="color:#fff">not</strong> collect any kind of user data, including but not limited to:',
      pp_no_data_items:     ['Personal identification information (name, email address, phone number, etc.)', 'Device information or unique device identifiers', 'Location data', 'Usage data, gameplay statistics, or behavioral data', 'Financial or payment information', 'Log files or crash reports linked to personal identity'],
      pp_analytics_title:   'No Analytics or Tracking',
      pp_analytics_intro:   'We do <strong style="color:#fff">not</strong> use any analytics tools, tracking systems, or third-party data collection services. This means:',
      pp_analytics_items:   ['No advertising networks or ad tracking', 'No third-party analytics (e.g., Google Analytics, Firebase Analytics)', 'No cookies or similar tracking technologies', 'No behavioral profiling'],
      pp_sharing_title:     'No Data Sharing',
      pp_sharing_text:      'Since we do not collect any personal information, there is no data to share with, sell to, or transfer to any third parties. Your information is never disclosed to partners, advertisers, or any other external entities.',
      pp_cloud_title:       'No Cloud Storage',
      pp_cloud_text:        'Shard Vortex does not transmit or store any of your data on external servers. Any game progress or settings are stored locally on your device only and are never uploaded to any cloud service.',
      pp_children_title:    "Children\u2019s Privacy",
      pp_children_text:     "Because Shard Vortex does not collect any personal information from any user, children\u2019s privacy is inherently protected. The App is safe for users of all ages.",
      pp_changes_title:     'Changes to This Policy',
      pp_changes_text:      'We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated \u201cLast updated\u201d date. We encourage you to review this policy periodically. Continued use of the App after changes constitutes acceptance of the revised policy.',
      pp_contact_title:     'Contact',
      pp_contact_text:      'If you have any questions or concerns about this Privacy Policy, please feel free to contact us at:',
    },

    es: {
      /* Nav */
      nav_home:    'Inicio',
      nav_privacy: 'Pol\u00edtica de Privacidad',
      /* Hero */
      hero_subtitle:        'Apunta, lanza y destruye filas de enemigos poligonales. <br>Un desafío arcade frenético, ideal para partidas rápidas.',
      hero_cta_screenshots: 'Ver Capturas',
      hero_cta_learn:       'Más Información',
      scroll_text:          'Desplazar',
      /* About */
      about_eyebrow: 'Sobre el Juego',
      about_title:   'Qué es Shard Vortex?',
      about_desc:    'Una experiencia adictiva y llena de acción a la que querrás volver una y otra vez.',
      about_h3:      'Entra en el Vórtex',
      about_p1:      'Shard Vortex es un juego arcade para móvil inspirado en los clásicos estilos Pinball, Tetris y Ballz. Apunta con precisión, lanza tus bolas y elimina las filas de enemigos que se acercan antes de que lleguen al límite.',
      about_p2:      'A medida que avanzas, las filas se vuelven más resistentes y encontrarás una gran variedad de formas enemigas - círculos, triángulos (congelantes), cuadrados (con defensas), hexágonos (eléctricas) - además de eventos especiales como bolas explosivas y bolas bonus. Sobrevive a eventos especiales como el vórtice, las congelaciones y los campos eléctricos. Usa el botón de aceleración (2×/4×/8×) para ir más allá y superar tu propio récord.',
      feature_1: 'Juega como quieras',
      feature_2: 'Variedad de tipos y formas de enemigos',
      feature_3: 'Efectos especiales bonitos',
      feature_4: 'Música original',
      /* Screenshots */
      screenshots_eyebrow: 'Galería',
      screenshots_title:   'Capturas de Pantalla',
      screenshots_desc:    'Shard Vortex en acción. Haz clic en cualquier captura para ampliar.',
      screenshot: 'Captura',
      /* Screenshots accessibility */
      screenshot_open:    'Abrir captura {n}',
      screenshot_img_alt: 'Captura de Shard Vortex {n}',
      screenshot_zoom_alt: 'Captura ampliada',
      /* Footer */
      footer_copy: '\u00a9 {year} Shard Vortex. Todos los derechos reservados.',
      /* Privacy Policy */
      pp_page_title:        'Política de Privacidad \u2014 Shard Vortex',
      pp_title:             'Política de Privacidad',
      pp_last_updated:      'Última actualización',
      pp_highlight:         '<strong>Shard Vortex no recopila, almacena ni comparte ningún dato personal.</strong> Tu privacidad está completamente protegida al usar nuestra aplicación.',
      pp_overview_title:    'Descripción General',
      pp_overview_text:     'Esta Política de Privacidad describe cómo Shard Vortex (\u201cnosotros\u201d) gestiona la información en relación con el uso de la aplicación Shard Vortex (\u201cla App\u201d). Estamos comprometidos con la protección de tu privacidad. En resumen: <strong style="color:#fff">no recopilamos nada</strong>.',
      pp_no_data_title:     'Sin Recopilación de Datos',
      pp_no_data_intro:     'Shard Vortex <strong style="color:#fff">no</strong> recopila ningún tipo de dato de usuario, incluyendo pero no limitado a:',
      pp_no_data_items:     ['Información de identificación personal (nombre, correo electrónico, teléfono, etc.)', 'Información del dispositivo o identificadores únicos', 'Datos de ubicación', 'Datos de uso, estadísticas de juego o datos de comportamiento', 'Información financiera o de pago', 'Archivos de registro o informes de fallos vinculados a la identidad personal'],
      pp_analytics_title:   'Sin Analíticas ni Seguimiento',
      pp_analytics_intro:   '<strong style="color:#fff">No</strong> utilizamos ninguna herramienta de analítica, sistema de seguimiento ni servicios de terceros para la recopilación de datos. Esto significa:',
      pp_analytics_items:   ['Sin redes publicitarias ni seguimiento de anuncios', 'Sin analíticas de terceros', 'Sin cookies ni tecnologías de seguimiento similares', 'Sin perfilado de comportamiento'],
      pp_sharing_title:     'Sin Compartición de Datos',
      pp_sharing_text:      'Al no recopilar ninguna información personal, no hay datos que compartir, vender o transferir a terceros. Tu información nunca se revela a socios, anunciantes ni otras entidades externas.',
      pp_cloud_title:       'Sin Almacenamiento en la Nube',
      pp_cloud_text:        'Shard Vortex no transmite ni almacena ninguno de tus datos en servidores externos. El progreso del juego y la configuración se guardan únicamente en tu dispositivo y nunca se suben a ningún servicio en la nube.',
      pp_children_title:    'Privacidad de Menores',
      pp_children_text:     'Dado que Shard Vortex no recopila ninguna información personal de ningún usuario, la privacidad de los menores está intrínsecamente protegida. La App es segura para usuarios de todas las edades.',
      pp_changes_title:     'Cambios en Esta Política',
      pp_changes_text:      'Podemos actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio se reflejará en esta página con una fecha de “última actualización” actualizada. Te recomendamos revisar esta política periódicamente. El uso continuado de la App tras los cambios constituye la aceptación de la política revisada.',
      pp_contact_title:     'Contacto',
      pp_contact_text:      'Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad, no dudes en contactarnos en:',
    },
  };

  function applyTranslations(lang) {
    var t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (t[key] !== undefined) {
        el.textContent = t[key].replace('{year}', new Date().getFullYear());
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.dataset.i18nHtml;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-list]').forEach(function (el) {
      var key = el.dataset.i18nList;
      var cls = el.dataset.itemClass || '';
      if (t[key] && Array.isArray(t[key])) {
        el.innerHTML = t[key]
          .map(function (item) { return '<li' + (cls ? ' class="' + cls + '"' : '') + '>' + item + '</li>'; })
          .join('');
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var raw = el.dataset.i18nAttr;
      var colonIdx = raw.indexOf(':');
      if (colonIdx === -1) { return; }
      var attrName = raw.slice(0, colonIdx);
      var key = raw.slice(colonIdx + 1);
      if (t[key] !== undefined) {
        var n = el.dataset.i18nN || '';
        el.setAttribute(attrName, t[key].replace('{n}', n));
      }
    });

    var lastUpdatedEl = document.getElementById('lastUpdated');
    if (lastUpdatedEl) {
      var localeMap = { en: 'en-US', es: 'es-ES' };
      lastUpdatedEl.textContent = new Date().toLocaleDateString(
        localeMap[lang] || 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
      );
    }

    if (document.body && document.body.dataset.page === 'privacy' && t['pp_page_title']) {
      document.title = t['pp_page_title'];
    }
  }

  function getLang() {
    return localStorage.getItem('sv_lang') || 'en';
  }

  window.I18n = {
    init: function () {
      applyTranslations(getLang());
      var select = document.getElementById('langSelect');
      if (select) {
        select.value = getLang();
        select.addEventListener('change', function () {
          localStorage.setItem('sv_lang', this.value);
          applyTranslations(this.value);
        });
      }
    },
    getLang: getLang,
    t: function (key) {
      var t = TRANSLATIONS[getLang()] || TRANSLATIONS['en'];
      return t[key] !== undefined ? t[key] : key;
    },
  };
}());
