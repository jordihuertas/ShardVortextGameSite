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
      nav_closed_beta: 'Closed Beta Testing',
      nav_privacy: 'Privacy Policy',
      nav_terms:   'Terms & Conditions',
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
      legal_effective_date: 'August 26, 2026',
      pp_highlight: '<strong>Shard Vortex displays third-party advertising.</strong> Advertising partners may process limited device and usage information to deliver, measure, and protect ads.',
      pp_overview_title:    'Overview',
      pp_overview_text: 'We do not require an account or ask for direct contact details. Third-party advertising technology may automatically process limited information as described below.',
      pp_data_title: 'Information Processed',
      pp_data_intro: 'Depending on your device, region, consent choices, and advertising partner, the advertising SDK may process:',
      pp_data_items: ['Advertising or device identifiers, where permitted', 'IP address and approximate location', 'Device, operating system, language, and App information', 'Ad impressions, clicks, interactions, and diagnostics', 'Consent and privacy preference signals'],
      pp_uses_title: 'How Information Is Used',
      pp_uses_intro: 'Advertising partners may use this information for:',
      pp_uses_items: ['Displaying contextual or permitted personalized ads', 'Measuring ad performance', 'Limiting ad frequency', 'Detecting fraud and technical problems', 'Meeting legal obligations'],
      pp_third_parties_title: 'Advertising Partners',
      pp_third_parties_text: 'Independent advertising providers and their partners deliver ads and process information under their own privacy policies. The provider may vary by device, location, and availability. We do not sell personal information.',
      pp_choices_title: 'Your Privacy Choices',
      pp_choices_text: 'Where required, the App asks for consent before personalized advertising. You can refuse or withdraw consent and reset or delete the advertising identifier in device settings. You may still receive contextual ads.',
      pp_retention_title: 'Retention and Security',
      pp_retention_text: 'We do not operate a user account database. Advertising partners determine their own retention periods and security measures.',
      pp_children_title:    "Children\u2019s Privacy",
      pp_children_text: 'The App is not directed to children under the minimum age required to consent to data processing in their country. We do not knowingly request personal information from children.',
      pp_changes_title:     'Changes to This Policy',
      pp_changes_text:      'We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated \u201cLast updated\u201d date. We encourage you to review this policy periodically. Continued use of the App after changes constitutes acceptance of the revised policy.',
      pp_contact_title:     'Contact',
      pp_contact_text:      'If you have any questions or concerns about this Privacy Policy, please feel free to contact us at:',
      terms_page_title: 'Terms & Conditions — Shard Vortex',
      terms_title: 'Terms & Conditions',
      terms_intro_title: 'Acceptance',
      terms_intro_text: 'By downloading, installing, or using Shard Vortex (“the App”), you agree to these Terms. If you do not agree, do not use the App. A parent or guardian must accept for users who cannot legally do so themselves.',
      terms_license_title: 'License and Acceptable Use',
      terms_license_text: 'We grant a limited, personal, non-exclusive, non-transferable, revocable license for lawful, non-commercial entertainment. Do not copy, modify, distribute, sell, reverse engineer, disrupt, exploit, automate, or bypass security or advertising controls, except where law expressly permits.',
      terms_ads_title: 'Advertising',
      terms_ads_text: 'The App is supported by third-party advertising and may display banner, interstitial, or rewarded ads. Availability, content, and rewards may vary. Advertisers are responsible for their ads, products, websites, and services. Your interactions with them are governed by their terms and privacy policies. See our Privacy Policy for advertising data practices.',
      terms_rewards_title: 'Progress and Virtual Rewards',
      terms_rewards_text: 'Scores, progress, and in-game rewards have no monetary value, cannot be exchanged for money, and create no ownership rights. We may reasonably adjust gameplay, rewards, features, or balancing.',
      terms_ip_title: 'Intellectual Property',
      terms_ip_text: 'The App and its code, art, audio, names, logos, and other content belong to us or our licensors and are protected by intellectual-property laws.',
      terms_service_title: 'Availability, Changes, and Termination',
      terms_service_text: 'We may update, suspend, or discontinue the App or any feature. We do not promise uninterrupted or error-free availability. We may suspend access for a material breach. You may stop using and uninstall the App at any time.',
      terms_liability_title: 'Disclaimer and Liability',
      terms_liability_text: 'The App is provided “as is” and “as available.” To the fullest extent permitted by law, we exclude implied warranties and liability for indirect, incidental, special, or consequential loss. Nothing here limits mandatory consumer rights or liability that law does not allow us to exclude.',
      terms_law_title: 'Applicable Law',
      terms_law_text: 'Applicable law governs these Terms without depriving you of mandatory protections in your country of residence. Courts having jurisdiction under applicable law will resolve disputes.',
      /* Closed Beta Testing */
      closed_beta_page_title: 'Closed Beta Testing \u2014 Shard Vortex',
      closed_beta_eyebrow: 'Help Shape the Game',
      closed_beta_title: 'Join the Closed Beta',
      closed_beta_intro: 'Test Shard Vortex before release and help make the game better with your feedback.',
      closed_beta_signup_title: 'Sign Up for the Closed Beta',
      closed_beta_signup_text: 'If you would like to participate in the Shard Vortex closed beta, please fill out the registration form.',
      closed_beta_signup_button: 'Fill Out the Registration Form',
      closed_beta_download_title: 'Join the Test and Download the Beta',
      closed_beta_download_text: 'After you receive your invitation, complete these two steps in order:',
      closed_beta_testing_step_title: 'Join the Closed Test',
      closed_beta_testing_step_text: 'When you are invited, open the testing page and confirm that you want to join the closed test.',
      closed_beta_testing_link: 'Join the Closed Test',
      closed_beta_store_step_title: 'Download the App',
      closed_beta_store_step_text: 'After joining the test, open Shard Vortex on Google Play and install the beta.',
      closed_beta_store_link: 'Download on Google Play',
      closed_beta_important_title: 'Important: Stay Opted In for 14 Days',
      closed_beta_important_text: 'Please remain opted into the closed test for at least 14 days. You do not need to play every day, but any time you can spend testing the game would be greatly appreciated.',
      closed_beta_feedback_title: 'Share Your Feedback',
      closed_beta_feedback_text: 'If possible, please complete the feedback form after trying the game.',
      closed_beta_feedback_button: 'Open the Feedback Form',
      closed_beta_discord_title: 'Join the Shard Vortex Discord',
      closed_beta_discord_text: 'The Discord server also explains how to join the closed beta, and it is a great place to connect with the community.',
      closed_beta_discord_button: 'Join the Discord Server',
      closed_beta_thanks: 'Thank you for helping me test and improve Shard Vortex!',
      terms_contact_title: 'Contact',
      terms_contact_text: 'For questions about these Terms & Conditions, contact us at:',
    },

    es: {
      /* Nav */
      nav_home:    'Inicio',
      nav_closed_beta: 'Prueba beta cerrada',
      nav_privacy: 'Pol\u00edtica de Privacidad',
      nav_terms:   'Términos y Condiciones',
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
      legal_effective_date: '26 de agosto de 2026',
      pp_highlight: '<strong>Shard Vortex muestra publicidad de terceros.</strong> Los socios publicitarios pueden tratar información limitada del dispositivo y del uso para mostrar, medir y proteger anuncios.',
      pp_overview_title:    'Descripción General',
      pp_overview_text: 'No exigimos una cuenta ni solicitamos datos directos de contacto. La tecnología publicitaria de terceros puede tratar automáticamente información limitada como se describe a continuación.',
      pp_data_title: 'Información Tratada',
      pp_data_intro: 'Según tu dispositivo, región, consentimiento y socio publicitario, el SDK puede tratar:',
      pp_data_items: ['Identificadores publicitarios o del dispositivo, cuando esté permitido', 'Dirección IP y ubicación aproximada', 'Información del dispositivo, sistema, idioma y App', 'Impresiones, clics, interacciones y diagnósticos', 'Consentimiento y preferencias de privacidad'],
      pp_uses_title: 'Cómo Se Utiliza la Información',
      pp_uses_intro: 'Los socios publicitarios pueden utilizar esta información para:',
      pp_uses_items: ['Mostrar anuncios contextuales o personalizados permitidos', 'Medir el rendimiento', 'Limitar la frecuencia', 'Detectar fraude y problemas técnicos', 'Cumplir obligaciones legales'],
      pp_third_parties_title: 'Socios Publicitarios',
      pp_third_parties_text: 'Proveedores independientes y sus socios muestran anuncios y tratan información según sus propias políticas. El proveedor puede variar. No vendemos información personal.',
      pp_choices_title: 'Tus Opciones de Privacidad',
      pp_choices_text: 'Cuando sea obligatorio, la App solicitará consentimiento antes de la publicidad personalizada. Puedes rechazarlo o retirarlo y gestionar el identificador publicitario en los ajustes. Puedes seguir recibiendo anuncios contextuales.',
      pp_retention_title: 'Conservación y Seguridad',
      pp_retention_text: 'No gestionamos una base de datos de cuentas. Los socios publicitarios determinan sus plazos de conservación y medidas de seguridad.',
      pp_children_title:    'Privacidad de Menores',
      pp_children_text: 'La App no está dirigida a menores de la edad mínima necesaria para consentir el tratamiento de datos en su país. No solicitamos deliberadamente información personal de menores.',
      pp_changes_title:     'Cambios en Esta Política',
      pp_changes_text:      'Podemos actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio se reflejará en esta página con una fecha de “última actualización” actualizada. Te recomendamos revisar esta política periódicamente. El uso continuado de la App tras los cambios constituye la aceptación de la política revisada.',
      terms_page_title: 'Términos y Condiciones — Shard Vortex',
      terms_title: 'Términos y Condiciones',
      terms_intro_title: 'Aceptación',
      terms_intro_text: 'Al descargar, instalar o utilizar Shard Vortex (“la App”), aceptas estos Términos. Si no estás de acuerdo, no utilices la App. Un padre, madre o tutor deberá aceptarlos por los usuarios que legalmente no puedan hacerlo.',
      terms_license_title: 'Licencia y Uso Aceptable',
      terms_license_text: 'Concedemos una licencia limitada, personal, no exclusiva, intransferible y revocable para entretenimiento lícito y no comercial. No copies, modifiques, distribuyas, vendas, realices ingeniería inversa, alteres, explotes, automatices ni eludas controles de seguridad o publicidad, salvo permiso legal expreso.',
      terms_ads_title: 'Publicidad',
      terms_ads_text: 'La App se financia mediante publicidad de terceros y puede mostrar banners, anuncios intersticiales o recompensados. La disponibilidad, contenido y recompensas pueden variar. Los anunciantes responden de sus anuncios, productos, sitios y servicios. Tus interacciones se rigen por sus términos y políticas. Consulta nuestra Política de Privacidad sobre los datos publicitarios.',
      terms_rewards_title: 'Progreso y Recompensas Virtuales',
      terms_rewards_text: 'Las puntuaciones, el progreso y las recompensas no tienen valor monetario, no pueden canjearse por dinero y no otorgan derechos de propiedad. Podemos ajustar razonablemente la jugabilidad, recompensas, funciones o equilibrio.',
      terms_ip_title: 'Propiedad Intelectual',
      terms_ip_text: 'La App y su código, ilustraciones, audio, nombres, logotipos y demás contenido son nuestros o de nuestros licenciantes y están protegidos por las leyes de propiedad intelectual.',
      terms_service_title: 'Disponibilidad, Cambios y Finalización',
      terms_service_text: 'Podemos actualizar, suspender o retirar la App o cualquier función. No garantizamos disponibilidad ininterrumpida ni libre de errores. Podemos suspender el acceso por incumplimiento sustancial. Puedes dejar de usar y desinstalar la App cuando quieras.',
      terms_liability_title: 'Exención y Responsabilidad',
      terms_liability_text: 'La App se proporciona “tal cual” y “según disponibilidad”. En la máxima medida legal, excluimos garantías implícitas y responsabilidad por pérdidas indirectas, incidentales, especiales o consecuentes. Nada limita derechos imperativos del consumidor ni responsabilidades que la ley no permita excluir.',
      terms_law_title: 'Ley Aplicable',
      terms_law_text: 'La ley aplicable rige estos Términos sin privarte de las protecciones obligatorias de tu país de residencia. Resolverán las controversias los tribunales competentes conforme a dicha ley.',
      /* Closed Beta Testing */
      closed_beta_page_title: 'Prueba beta cerrada \u2014 Shard Vortex',
      closed_beta_eyebrow: 'Ayuda a mejorar el juego',
      closed_beta_title: '\u00danete a la beta cerrada',
      closed_beta_intro: 'Prueba Shard Vortex antes de su lanzamiento y ay\u00fadanos a mejorar el juego con tus comentarios.',
      closed_beta_signup_title: 'Ap\u00fantate a la beta cerrada',
      closed_beta_signup_text: 'Si quieres participar en la beta cerrada de Shard Vortex, completa el formulario de inscripci\u00f3n.',
      closed_beta_signup_button: 'Completar el formulario de inscripci\u00f3n',
      closed_beta_download_title: '\u00danete a la prueba y descarga la beta',
      closed_beta_download_text: 'Cuando recibas la invitaci\u00f3n, completa estos dos pasos en orden:',
      closed_beta_testing_step_title: '\u00danete a la prueba cerrada',
      closed_beta_testing_step_text: 'Cuando est\u00e9s invitado, abre la p\u00e1gina de pruebas y confirma que quieres unirte a la prueba cerrada.',
      closed_beta_testing_link: 'Unirse a la prueba cerrada',
      closed_beta_store_step_title: 'Descarga la aplicaci\u00f3n',
      closed_beta_store_step_text: 'Despu\u00e9s de unirte a la prueba, abre Shard Vortex en Google Play e instala la beta.',
      closed_beta_store_link: 'Descargar en Google Play',
      closed_beta_important_title: 'Importante: permanece inscrito durante 14 d\u00edas',
      closed_beta_important_text: 'Permanece inscrito en la prueba cerrada durante al menos 14 d\u00edas. No necesitas jugar todos los d\u00edas, pero agradeceremos mucho cualquier tiempo que puedas dedicar a probar el juego.',
      closed_beta_feedback_title: 'Comparte tus comentarios',
      closed_beta_feedback_text: 'Si es posible, completa el formulario de feedback despu\u00e9s de probar el juego.',
      closed_beta_feedback_button: 'Abrir el formulario de feedback',
      closed_beta_discord_title: '\u00danete al Discord de Shard Vortex',
      closed_beta_discord_text: 'En el servidor de Discord tambi\u00e9n se explica c\u00f3mo unirse a la beta cerrada, y podr\u00e1s conectar con la comunidad.',
      closed_beta_discord_button: 'Unirse al servidor de Discord',
      closed_beta_thanks: '\u00a1Gracias por ayudarme a probar y mejorar Shard Vortex!',
      terms_contact_title: 'Contacto',
      terms_contact_text: 'Para preguntas sobre estos Términos y Condiciones, contáctanos en:',
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

if (document.body) {
      var pageTitleKeys = {
        privacy: 'pp_page_title',
        terms: 'terms_page_title',
        'closed-beta': 'closed_beta_page_title',
      };
      var pageTitleKey = pageTitleKeys[document.body.dataset.page];
      if (pageTitleKey && t[pageTitleKey]) {
        document.title = t[pageTitleKey];
      }
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
