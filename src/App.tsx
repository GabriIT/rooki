import { useEffect } from "react";

const NEWSLETTER_ENDPOINT = "/api/newsletter-signup";

const pageMarkup = "<svg class=\"grain\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n  <filter id=\"grainNoise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\"></feTurbulence></filter>\n  <rect width=\"100%\" height=\"100%\" filter=\"url(#grainNoise)\" opacity=\"0.6\"></rect>\n</svg>\n\n<!-- ============== NAV ============== -->\n<header class=\"nav\">\n  <div class=\"wrap nav-inner\">\n    <a href=\"#top\" class=\"wordmark\" aria-label=\"Rooki\">\n      ROOKI<span class=\"dot\" aria-hidden=\"true\"></span>\n    </a>\n    <nav class=\"nav-links\" aria-label=\"Sezioni\">\n      <a href=\"#estate\" data-nav=\"estate\">Estate 2026</a>\n      <a href=\"#chi-siamo\" data-nav=\"chi-siamo\">Chi siamo</a>\n      <a href=\"#dove-andiamo\" data-nav=\"dove-andiamo\">Dove andiamo</a>\n      <a href=\"#faq\" data-nav=\"faq\">FAQ</a>\n      <a href=\"#en\" data-nav=\"en\">EN</a>\n    </nav>\n    <button class=\"nav-hamburger\" type=\"button\" aria-label=\"Menu\" aria-controls=\"nav-mobile-menu\" aria-expanded=\"false\" data-mobile-menu-toggle>\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line></svg>\n    </button>\n    <a class=\"btn primary\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Ciao%20Rooki\">\n      Scrivici\n      <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n    </a>\n  </div>\n</header>\n\n<div id=\"nav-mobile-menu\" style=\"display:none; flex-direction:column; position:fixed; top:60px; left:0; right:0; background:#0a0a0a; border-bottom:1px solid rgba(255,255,255,0.08); padding:16px 24px 24px; z-index:999; gap:0;\">\n  <a href=\"#estate\" data-mobile-menu-link style=\"padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">Estate 2026</a>\n  <a href=\"#dove-andiamo\" data-mobile-menu-link style=\"padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">Dove andiamo</a>\n  <a href=\"#faq\" data-mobile-menu-link style=\"padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">FAQ</a>\n  <a href=\"#chi-siamo\" data-mobile-menu-link style=\"padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">Chi siamo</a>\n  <a href=\"#en\" data-mobile-menu-link style=\"padding:14px 0;font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">EN</a>\n</div>\n\n<main id=\"top\">\n\n  <!-- ============== HERO ============== -->\n  <section class=\"hero\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\"><span class=\"live-dot\"></span> Stiamo costruendo · Varese 2026</span>\n\n      <h1 style=\"margin-top: 28px;\">\n        Lo sport dilettantistico<br>\n        merita la stessa<br>\n        <span class=\"accent\">visibilità</span> di quello<br>\n        <span class=\"stroke\">professionistico.</span>\n      </h1>\n\n      <p class=\"hero-sub\">\n        Trasformiamo i video delle partite di basket in <strong>highlights e clip social pronti in 24 ore</strong>,\n        usando una pipeline AI costruita su misura. Pallavolo e calcio arrivano dopo — iniziamo dal basket.\n      </p>\n\n      <div class=\"hero-meta\">\n        <a class=\"btn primary lg\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Vorrei%20provare%20Rooki%20con%20una%20partita\">\n          Mandaci una partita di prova\n          <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n        </a>\n        <a class=\"btn lg\" href=\"#ricevi\">Cosa ti restituiamo</a>\n      </div>\n\n      <div class=\"hero-strip\">\n        <span class=\"tag\"><span class=\"dot-color bg-basket\"></span>Basket</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== PERCHÉ LO FACCIAMO ============== -->\n  <section id=\"missione\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow reveal\">Perché lo facciamo</span>\n          <h2 style=\"margin-top:18px;\">Il basket locale<br><span class=\"accent\">merita un pubblico.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Ogni weekend migliaia di partite vengono giocate e dimenticate.\n          Nessuna clip, nessun replay, nessuna memoria. Rooki esiste per cambiare questo —\n          partendo dal basket, costruendo gli strumenti che mancano, un torneo alla volta.\n        </p>\n      </div>\n\n      <div class=\"mission-grid\">\n        <div class=\"mission-fact\">\n          <div class=\"mf-num\">Migliaia</div>\n          <div class=\"mf-lbl\">di partite giocate ogni weekend.</div>\n          <div class=\"mf-sub\">Tornei, leghe amatoriali, settori giovanili. Persone vere, sui campi, ogni sabato e domenica in Italia.</div>\n        </div>\n        <div class=\"mission-fact\">\n          <div class=\"mf-num accent\">Zero</div>\n          <div class=\"mf-lbl\">highlights pubblicati per la maggior parte di esse.</div>\n          <div class=\"mf-sub\">Le immagini esistono solo nella memoria di chi era al campo. Dopo l'ultimo fischio, sparisce tutto.</div>\n        </div>\n        <div class=\"mission-fact\">\n          <div class=\"mf-num\">Troppo</div>\n          <div class=\"mf-lbl\">costoso produrli a mano, oggi.</div>\n          <div class=\"mf-sub\">Una crew video professionale, ore di montaggio, fee da migliaia di euro. Insostenibile per uno sport che non vende biglietti.</div>\n        </div>\n      </div>\n\n      <div class=\"mission-pull\">\n        Il problema non è di interesse. <span class=\"accent\">È di strumenti.</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== COSA RICEVI ============== -->\n  <section id=\"ricevi\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Cosa ricevi</span>\n          <h2 style=\"margin-top:18px;\">Un pacchetto pronto.<br>Entro <span style=\"color:var(--accent);\">24 ore.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Tu ci mandi le riprese — anche da telefono, anche da telecamera fissa.\n          Noi ti riconsegnamo un set di contenuti pubblicabili senza ulteriori passaggi.\n        </p>\n      </div>\n\n      <div class=\"deliv-list\">\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\"></rect>\n              <path d=\"m10 10 5 2-5 2z\" fill=\"currentColor\"></path>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Highlights match</div>\n            <div class=\"desc\">Il riassunto della partita, montato e sincronizzato. Pronto per YouTube e per il canale del torneo.</div>\n          </div>\n          <div class=\"qty\">1 video<span class=\"sub\">2–4 min · 16:9</span></div>\n        </div>\n\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"6\" y=\"3\" width=\"12\" height=\"18\" rx=\"2\"></rect>\n              <circle cx=\"12\" cy=\"17\" r=\"0.8\" fill=\"currentColor\"></circle>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Clip social verticali</div>\n            <div class=\"desc\">Tagliate per Instagram Reels, TikTok e Shorts. Ognuna autonoma, ognuna pubblicabile.</div>\n          </div>\n          <div class=\"qty\">5–8 clip<span class=\"sub\">15–45s · 9:16</span></div>\n        </div>\n\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"></rect>\n              <path d=\"M3 14l5-4 4 3 4-5 5 4\"></path>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Consegna su cloud</div>\n            <div class=\"desc\">Link Drive o WeTransfer con tutti i file pronti al download. Niente upload, niente tool da imparare.</div>\n          </div>\n          <div class=\"qty\">≤ 24 ore<span class=\"sub\">Dal ricevimento</span></div>\n        </div>\n      </div>\n\n      <div class=\"swap\">\n        <div class=\"col you\">\n          <div class=\"role\">Voi</div>\n          <div class=\"lbl\">Tu ci dai</div>\n          <ul>\n            <li>Le riprese delle partite, anche grezze.</li>\n            <li>Il permesso di riprendere al campo.</li>\n            <li>Feedback onesto sul lavoro fatto.</li>\n          </ul>\n        </div>\n        <div class=\"col us\">\n          <div class=\"role\">Noi</div>\n          <div class=\"lbl\">Noi ti diamo</div>\n          <ul>\n            <li>Tutta la produzione video gratuita durante la stagione estiva.</li>\n            <li>Tempi rapidi: consegna entro 24 ore dal ricevimento.</li>\n            <li>File pronti al download, senza watermark Rooki.</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== COSA FACCIAMO QUEST'ESTATE ============== -->\n  <section id=\"estate\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Cosa facciamo quest'estate</span>\n          <h2 style=\"margin-top:18px;\">L'estate 2026,<br>sui campi, <span style=\"color:var(--accent);\">gratuita.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Un'estate, un torneo di basket. Mandiamo le riprese, riceviamo\n          highlights e clip social pronti — senza fee, senza contratti.\n        </p>\n      </div>\n\n      <div class=\"pillars three-up\">\n        <a class=\"pillar basket\" href=\"https://www.instagram.com/mastercagebasketball\" target=\"_blank\" rel=\"noopener\" style=\"text-decoration:none; color:inherit; cursor:pointer;\">\n          <div class=\"swatch\" aria-hidden=\"true\"></div>\n          <div class=\"body\">\n            <div class=\"nm\">Basket · Mastercage</div>\n            <div class=\"meta\">Top plays, triple, recuperi</div>\n          </div>\n          <div class=\"ask confirmed\">Vai al torneo →</div>\n        </a>\n      </div>\n\n      <div class=\"specs-strip\">\n        <div class=\"spec\">\n          <div class=\"spec-val\">≤ 24h</div>\n          <div class=\"spec-lbl\">Consegna highlights e clip</div>\n        </div>\n        <div class=\"spec\">\n          <div class=\"spec-val\">AI</div>\n          <div class=\"spec-lbl\">Pipeline che riconosce i momenti chiave</div>\n        </div>\n        <div class=\"spec\">\n          <div class=\"spec-val accent\">0€</div>\n          <div class=\"spec-lbl\">Gratuito, solo durante l'estate</div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== CHI SIAMO ============== -->\n<section id=\"chi-siamo\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Chi siamo</span>\n          <h2 style=\"margin-top:18px;\">Tre persone,<br>una visione concreta.</h2>\n        </div>\n        <p class=\"lead\">\n          Stiamo costruendo Rooki da Varese, in Lombardia. Tre founder, background\n          complementari, una sola convinzione: che lo sport amatoriale possa essere\n          raccontato come quello che vediamo in TV.\n        </p>\n      </div>\n\n      <div class=\"founders\">\n        <article class=\"founder\">\n          <div class=\"mono\">LM</div>\n          <h3>Lorenzo Marciandi</h3>\n          <div class=\"role\">Founder</div>\n          <p>Parla con gli organizzatori, chiude gli accordi, sta sul campo. È il primo contatto quando scrivi a ROOKI.</p>\n          <a class=\"mail\" href=\"mailto:lorenzo.marciandi@rooki.video\">lorenzo.marciandi@rooki.video →</a>\n        </article>\n\n        <article class=\"founder\">\n          <div class=\"mono\">GP</div>\n          <h3>Giorgio Pigionatti</h3>\n          <div class=\"role\">Founder</div>\n          <p>Cura il sito, i social e tutto quello che si vede. Se ROOKI ha una faccia, è merito suo.</p>\n          <a class=\"mail\" href=\"mailto:giorgio.pigionatti@rooki.video\">giorgio.pigionatti@rooki.video →</a>\n        </article>\n\n        <article class=\"founder\">\n          <div class=\"mono\">GC</div>\n          <h3>Gabriele Castaldi</h3>\n          <div class=\"role\">Founder</div>\n          <p>Costruisce il sistema che trasforma ore di video grezzo in clip pronte in 24 ore. La parte che sembra magia è roba sua.</p>\n          <a class=\"mail\" href=\"mailto:gabriele.castaldi@rooki.video\">gabriele.castaldi@rooki.video →</a>\n        </article>\n      </div>\n\n      <div class=\"place\">\n        <span>Varese</span><span class=\"sep\"></span>\n        <span>Lombardia</span><span class=\"sep\"></span>\n        <span>Italia</span><span class=\"sep\"></span>\n        <span>Basket</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== DOVE STIAMO ANDANDO ============== -->\n  <section id=\"dove-andiamo\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Dove stiamo andando</span>\n          <h2 style=\"margin-top:18px;\">La nostra<br><span class=\"accent\">direzione.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Non siamo una production house. Stiamo costruendo\n          un sistema. Ecco i tre passi con cui ci arriviamo.\n        </p>\n      </div>\n\n      <div class=\"roadmap-track\">\n        <article class=\"phase active\">\n          <div class=\"head\">\n            <span>Fase 01 · Estate 2026</span>\n            <span class=\"status\">In corso</span>\n          </div>\n          <div class=\"num\">01</div>\n          <h3>Costruiamo<br>la prova.</h3>\n          <p>Tornei estivi di alto livello — Mastercage confermato per il basket — con produzione video gratuita e consegna in 24 ore. Dimostriamo che il modello regge prima di scalare.</p>\n        </article>\n\n        <article class=\"phase\">\n          <div class=\"head\">\n            <span>Fase 02 · 2026 — 2027</span>\n            <span class=\"status\">Prossimo passo</span>\n          </div>\n          <div class=\"num\">02</div>\n          <h3>Le società<br>filmano, noi trasformiamo.</h3>\n          <p>Le società filmano le partite della stagione regolare e ci mandano il video grezzo — nessuna crew esterna. La nostra pipeline AI lo trasforma in highlights e clip social pronti in 24 ore, su scala di campionato. Affianchiamo report tecnici per giocatori e staff: dati di partita, momenti chiave, analisi individuali.</p>\n        </article>\n\n        <article class=\"phase\">\n          <div class=\"head\">\n            <span>Fase 03 · Visione</span>\n            <span class=\"status\">Orizzonte</span>\n          </div>\n          <div class=\"num\">03</div>\n          <h3>L'app<br>e la community.</h3>\n          <p>Lanciamo l'app ROOKI: una piattaforma dove gli appassionati di basket trovano partite in diretta, highlights e statistiche — tutto in un posto. L'obiettivo è costruire la community dello sport locale che non esiste ancora.</p>\n        </article>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== FAQ ============== -->\n  <section id=\"faq\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Domande frequenti</span>\n          <h2 style=\"margin-top:18px;\">Le risposte<br>che ti servono.</h2>\n        </div>\n        <p class=\"lead\">\n          Le domande che ci fanno gli organizzatori al primo contatto. Se ne hai altre,\n          scrivici — rispondiamo entro un giorno.\n        </p>\n      </div>\n\n      <div class=\"faq-grid\">\n        <details class=\"faq\">\n          <summary>Che riprese servono per partire?</summary>\n          <p class=\"ans\">Bastano riprese complete della partita, anche da telecamera fissa o smartphone. Non servono multicamera né regia. Più la ripresa è stabile e con campo intero meglio è — ma sappiamo lavorare anche con materiale grezzo.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Quanto costa?</summary>\n          <p class=\"ans\">Il servizio è disponibile gratuitamente solo durante la stagione estiva 2026, per gli organizzatori dei tornei selezionati (Mastercage è già confermato per il basket). Fuori stagione il modello cambia: nessuna fee nascosta, nessun abbonamento. In cambio chiediamo feedback e il permesso di usare il lavoro come vetrina.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Come vi mando i video?</summary>\n          <p class=\"ans\">Un link a Google Drive, WeTransfer, Dropbox o qualsiasi cloud a tua scelta. Non devi imparare a usare nessuna piattaforma — il flusso è quello che già usi.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Davvero in 24 ore?</summary>\n          <p class=\"ans\">Sì. Dal momento in cui riceviamo le riprese complete, consegniamo entro un giorno. Per i match serali significa highlights pronti per la mattina dopo, in tempo per i social del torneo.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Cos'è una pipeline AI?</summary>\n          <p class=\"ans\">È il sistema che fa il lavoro pesante prima del nostro editor: guarda le riprese della partita e riconosce in automatico i momenti che contano — ace, muri, gol, parate, schiacciate, triple, punti decisivi. Così invece di rivedere ore di video a mano, partiamo già dalle azioni giuste e ci concentriamo sul montaggio. Per voi organizzatori cambia una cosa sola: tempi rapidi e qualità costante, anche per partite intere.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Se le riprese sono brutte, cosa succede?</summary>\n          <p class=\"ans\">Ci adattiamo. Possiamo lavorare con riprese imperfette: stabilizziamo, riquadriamo, sceglamo le inquadrature migliori. Se il materiale è davvero inutilizzabile lo diciamo subito, prima di iniziare.</p>\n        </details>\n      </div>\n    </div>\n  </section>\n\n    <!-- ============== EN SECTION ============== -->\n  <section class=\"en\" id=\"en\" lang=\"en\">\n    <div class=\"wrap\">\n      <div class=\"en-grid\">\n        <div>\n          <span class=\"eyebrow\">EN</span>\n          <h2 style=\"margin-top:18px;\">What is <span class=\"accent\">Rooki?</span></h2>\n\n          <div class=\"en-blocks\">\n            <div class=\"blk\">\n              <span class=\"lbl\">What we do</span>\n              <p>Rooki turns raw basketball match footage into ready-to-publish highlights and short-form social clips — delivered within 24 hours, using a custom-built AI pipeline. Volleyball and football come later — we’re starting with basketball.</p>\n            </div>\n            <div class=\"blk\">\n              <span class=\"lbl\">Who we are</span>\n              <p>Three founders based in Varese, Lombardia. We know amateur sport from the inside — and we're building the tools to make it visible.</p>\n            </div>\n            <div class=\"blk\">\n              <span class=\"lbl\">Phase 1 — Now</span>\n              <p>This summer we're working with high-level amateur tournaments for free. We receive the raw footage, we return the content. No cost, no commitment.</p>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"en-contact\">\n            <h3>Interested?</h3>\n            <p>If you're a tournament organiser, a sports federation, or just curious about what we're building — write to us. We reply within 24 hours.</p>\n            <a class=\"btn primary\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Hello%20Rooki\">\n              Write to us\n              <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== FOOTER ============== -->\n  <footer>\n    <div class=\"wrap\" style=\"padding-bottom: 0;\">\n      <div class=\"newsletter-grid\" style=\"display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:64px 0 48px; border-bottom:1px solid rgba(255,255,255,0.08);\">\n\n        <div>\n          <div class=\"eyebrow\" style=\"margin-bottom:16px;\">Newsletter</div>\n          <h3 style=\"font-family:var(--font-display); font-weight:900; text-transform:uppercase; line-height:0.95; font-size:clamp(28px, 3vw, 40px); letter-spacing:-0.01em; margin:0 0 14px;\">Resta nel <span style=\"color:var(--accent);\">giro.</span></h3>\n          <p style=\"font-size:15px; color:rgba(255,255,255,0.6); line-height:1.6; margin:0; max-width:42ch;\">\n            Una mail ogni tanto: tornei in arrivo, dietro le quinte, dove ci trovi. Niente spam, mai.\n          </p>\n        </div>\n\n        <div>\n          <form data-newsletter-form novalidate style=\"display:flex; gap:10px; flex-wrap:wrap;\">\n            <input type=\"email\" placeholder=\"la@tuaemail.it\" aria-label=\"La tua email\" style=\"flex:1; min-width:200px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:13px 16px; color:#fff; font-size:15px; font-family:inherit; outline:none;\">\n            <button type=\"submit\" class=\"btn primary\" style=\"white-space:nowrap;\">\n              Iscriviti\n              <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n            </button>\n          </form>\n          <p id=\"msg-main\" role=\"status\" aria-live=\"polite\" style=\"display:none; margin-top:12px; font-size:13px;\"></p>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"wrap\">\n      <div class=\"foot-line\">\n        <span class=\"mark\">ROOKI<span class=\"dot\"></span></span>\n        <span class=\"sep\"></span>\n        <span>Varese, Italia</span>\n        <span class=\"sep\"></span>\n        <span>2026</span>\n      </div>\n    </div>\n  </footer>\n\n</main>";

const resultsSectionMarkup = `
      <div class="results-block reveal">
        <div class="results-head">
          <h3>I numeri di Mastercage, in campo dal vivo.</h3>
          <span class="results-note">Dashboard Instagram &middot; ultimi 30 giorni &middot; dati reali</span>
        </div>
        <div class="dash">
          <div class="dash-hero">
            <div class="dash-hero-val" data-count-to="92564">0</div>
            <div class="dash-hero-lbl">Visualizzazioni totali &middot; ultimi 30 giorni</div>
          </div>
          <div class="dash-stats">
            <div class="dash-stat">
              <div class="val" data-count-to="157" data-prefix="+">+0</div>
              <div class="lbl">Nuovi follower</div>
            </div>
            <div class="dash-stat">
              <div class="val" data-count-to="1745">0</div>
              <div class="lbl">Interazioni</div>
            </div>
          </div>

          <div class="split-row">
            <span>8,9% follower</span>
            <div class="split-bar"><span class="f"></span><span class="nf"></span></div>
            <span>91,1% non-follower</span>
          </div>

          <div class="trend">
            <div class="trend-lbl"><span>Andamento visualizzazioni</span><span>picco 24K</span></div>
            <svg viewBox="0 0 600 140" preserveAspectRatio="none" aria-label="Andamento delle visualizzazioni dal 7 luglio al 5 agosto">
              <defs><linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--accent)" stop-opacity="0.35"></stop><stop offset="100%" stop-color="var(--accent)" stop-opacity="0"></stop></linearGradient></defs>
              <polygon class="trend-area" points="0,140 0,138 40,10 70,95 100,60 130,100 160,55 190,90 230,120 270,95 300,128 340,132 380,110 420,133 460,136 600,138 600,140" fill="url(#trendGrad)"></polygon>
              <polyline class="trend-line" points="0,138 40,10 70,95 100,60 130,100 160,55 190,90 230,120 270,95 300,128 340,132 380,110 420,133 460,136 600,138" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></polyline>
              <g class="trend-pts">
                <g class="trend-pt" data-val="800" data-date="7 lug" tabindex="0" aria-label="800 visualizzazioni, 7 luglio"><circle cx="0" cy="138" r="5"></circle></g>
                <g class="trend-pt" data-val="24000" data-date="9 lug" tabindex="0" aria-label="24.000 visualizzazioni, 9 luglio"><circle cx="40" cy="10" r="5"></circle></g>
                <g class="trend-pt" data-val="4200" data-date="11 lug" tabindex="0" aria-label="4.200 visualizzazioni, 11 luglio"><circle cx="70" cy="95" r="5"></circle></g>
                <g class="trend-pt" data-val="9800" data-date="13 lug" tabindex="0" aria-label="9.800 visualizzazioni, 13 luglio"><circle cx="100" cy="60" r="5"></circle></g>
                <g class="trend-pt" data-val="3800" data-date="15 lug" tabindex="0" aria-label="3.800 visualizzazioni, 15 luglio"><circle cx="130" cy="100" r="5"></circle></g>
                <g class="trend-pt" data-val="10500" data-date="17 lug" tabindex="0" aria-label="10.500 visualizzazioni, 17 luglio"><circle cx="160" cy="55" r="5"></circle></g>
                <g class="trend-pt" data-val="4900" data-date="19 lug" tabindex="0" aria-label="4.900 visualizzazioni, 19 luglio"><circle cx="190" cy="90" r="5"></circle></g>
                <g class="trend-pt" data-val="1900" data-date="21 lug" tabindex="0" aria-label="1.900 visualizzazioni, 21 luglio"><circle cx="230" cy="120" r="5"></circle></g>
                <g class="trend-pt" data-val="4200" data-date="23 lug" tabindex="0" aria-label="4.200 visualizzazioni, 23 luglio"><circle cx="270" cy="95" r="5"></circle></g>
                <g class="trend-pt" data-val="1100" data-date="25 lug" tabindex="0" aria-label="1.100 visualizzazioni, 25 luglio"><circle cx="300" cy="128" r="5"></circle></g>
                <g class="trend-pt" data-val="850" data-date="27 lug" tabindex="0" aria-label="850 visualizzazioni, 27 luglio"><circle cx="340" cy="132" r="5"></circle></g>
                <g class="trend-pt" data-val="2900" data-date="29 lug" tabindex="0" aria-label="2.900 visualizzazioni, 29 luglio"><circle cx="380" cy="110" r="5"></circle></g>
                <g class="trend-pt" data-val="780" data-date="31 lug" tabindex="0" aria-label="780 visualizzazioni, 31 luglio"><circle cx="420" cy="133" r="5"></circle></g>
                <g class="trend-pt" data-val="650" data-date="2 ago" tabindex="0" aria-label="650 visualizzazioni, 2 agosto"><circle cx="460" cy="136" r="5"></circle></g>
                <g class="trend-pt" data-val="800" data-date="5 ago" tabindex="0" aria-label="800 visualizzazioni, 5 agosto"><circle cx="600" cy="138" r="5"></circle></g>
              </g>
            </svg>
            <div class="trend-tip" id="trendTip" aria-hidden="true"></div>
            <div class="trend-dates"><span>7 lug</span><span>21 lug</span><span>5 ago</span></div>
          </div>

          <div class="type-bars">
            <div class="type-row">
              <span class="nm">Reels</span>
              <div class="type-track"><div class="type-fill" data-w="100"></div></div>
              <span class="n">44K</span>
            </div>
            <div class="type-row">
              <span class="nm">Viewer</span>
              <div class="type-track"><div class="type-fill" data-w="26"></div></div>
              <span class="n">11,4K</span>
            </div>
          </div>

          <div class="results-clips-wrap">
            <div class="cap">Post e clip pi&ugrave; visti</div>
            <div class="results-clips">
              <span class="clip-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>11,2K</span>
              <span class="clip-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>10,7K</span>
              <span class="clip-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>9.352</span>
              <span class="clip-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>6.569</span>
              <span class="clip-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>6.236</span>
              <span class="clip-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>5.954</span>
            </div>
            <div class="results-src">Visualizzazioni per singola clip &middot; @rooki.video &times; Mastercage</div>
          </div>
        </div>
      </div>

      <div class="examples-block reveal">
        <div class="examples-head">
          <h3>Highlights e clip prodotte da noi</h3>
          <a href="https://www.instagram.com/rooki.video" target="_blank" rel="noopener">Guarda il profilo &rarr;</a>
        </div>
        <div class="examples-grid">
          <a class="example-card" href="https://www.instagram.com/reel/DauzN5RsJ_X/" target="_blank" rel="noopener"><img src="/assets/clip-example-1.jpg" alt="Clip prodotta da Rooki per Mastercage" width="720" height="1280" loading="lazy"></a>
          <a class="example-card" href="https://www.instagram.com/reel/DaqCyEmMBym/" target="_blank" rel="noopener"><img src="/assets/clip-example-2.jpg" alt="Clip prodotta da Rooki per Mastercage" width="720" height="1280" loading="lazy"></a>
          <a class="example-card" href="https://www.instagram.com/reel/Dak_33KMl6h/" target="_blank" rel="noopener"><img src="/assets/clip-example-3.jpg" alt="Clip prodotta da Rooki per Mastercage" width="720" height="1280" loading="lazy"></a>
          <a class="example-card" href="https://www.instagram.com/reel/DakPSskspO-/" target="_blank" rel="noopener"><img src="/assets/clip-example-4.jpg" alt="Clip prodotta da Rooki per Mastercage" width="720" height="1280" loading="lazy"></a>
        </div>
      </div>

      <div class="highlight-block reveal">
        <h3>Highlight match</h3>
        <div class="highlight-players">
          <div>
            <a class="highlight-player" href="https://www.youtube.com/watch?v=EL_RQBEx-Ko" target="_blank" rel="noopener" style="background-image:url('/assets/highlight-cover-2.jpg')" aria-label="Guarda Toronto contro Denver su YouTube">
              <span class="highlight-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>
            </a>
            <div class="highlight-cap">Toronto vs Denver</div>
          </div>
          <div>
            <a class="highlight-player" href="https://www.youtube.com/watch?v=LVAXR9A0izE" target="_blank" rel="noopener" style="background-image:url('/assets/highlight-cover.jpg')" aria-label="Guarda Toronto contro Miami su YouTube">
              <span class="highlight-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>
            </a>
            <div class="highlight-cap">Toronto vs Miami</div>
          </div>
        </div>
      </div>`;

const mobileMenuMarkup = `
<div id="nav-mobile-menu" aria-hidden="true">
  <button class="mob-close" type="button" aria-label="Chiudi menu" data-mobile-menu-close>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="M6 6l12 12"></path></svg>
  </button>
  <nav class="mob-nav-links" aria-label="Sezioni mobile">
    <a href="#estate" class="mob-link" data-mobile-menu-link data-idx="0">Estate 2026</a>
    <a href="#dove-andiamo" class="mob-link" data-mobile-menu-link data-idx="1">Dove andiamo</a>
    <a href="#faq" class="mob-link" data-mobile-menu-link data-idx="2">FAQ</a>
    <a href="#chi-siamo" class="mob-link" data-mobile-menu-link data-idx="3">Chi siamo</a>
    <a href="#en" class="mob-link" data-mobile-menu-link data-idx="4">EN</a>
  </nav>
  <a href="mailto:lorenzo.marciandi@rooki.video?subject=Ciao%20Rooki" class="mob-cta btn primary" data-mobile-menu-link>
    Scrivici
    <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
  </a>
</div>`;

const renderedPageMarkup = pageMarkup
  .replace(
    /<button class="nav-hamburger"[\s\S]*?<\/button>/,
    `<button class="nav-hamburger" type="button" aria-label="Menu" aria-controls="nav-mobile-menu" aria-expanded="false" data-mobile-menu-toggle>
      <span class="hbg-bar"></span>
      <span class="hbg-bar"></span>
    </button>`,
  )
  .replace(/<div id="nav-mobile-menu"[\s\S]*?<\/div>\n\n<main id="top">/, `${mobileMenuMarkup}\n\n<main id="top">`)
  .replace(
    '\n    </div>\n  </section>\n\n  <!-- ============== CHI SIAMO ============== -->',
    `${resultsSectionMarkup}\n    </div>\n  </section>\n\n  <!-- ============== CHI SIAMO ============== -->`,
  )
  .replace(
    "su scala di campionato. Affianchiamo report tecnici per giocatori e staff: dati di partita, momenti chiave, analisi individuali.",
    "su scala di campionato.",
  )
  .replace(
    '<span>2026</span>\n      </div>',
    '<span>2026</span>\n        <span class="sep"></span>\n        <a href="/privacy.html">Privacy</a>\n      </div>',
  );

const newsletterPopupMarkup = `
  <aside
    id="nl-popup"
    class="nl-popup"
    role="dialog"
    aria-modal="false"
    aria-label="Iscriviti alla newsletter ROOKI"
    aria-hidden="true"
    data-reveal-skip
  >
    <button type="button" class="nl-close" aria-label="Chiudi" data-newsletter-popup-close>&times;</button>
    <div class="nl-eyebrow">Newsletter · Società &amp; Atleti</div>
    <h4 class="nl-title">Resta nel <span>giro.</span></h4>
    <p class="nl-text">Sei una società, un atleta o semplicemente ami lo sport? Una mail ogni tanto: tornei in arrivo, opportunità, dietro le quinte. Niente spam, mai.</p>
    <form data-newsletter-popup-form novalidate>
      <input type="email" placeholder="la@tuaemail.it" aria-label="La tua email">
      <button type="submit" class="btn primary">
        Iscriviti
        <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
      </button>
    </form>
    <p id="msg-popup" role="status" aria-live="polite"></p>
    <p class="nl-fine">Puoi disiscriverti quando vuoi.</p>
  </aside>
`;

function useRookiPageEffects() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a[data-nav]"));
    const sections = links
      .map((link) => {
        const id = link.getAttribute("data-nav") || "";
        return { id, el: document.getElementById(id), link };
      })
      .filter((section): section is { id: string; el: HTMLElement; link: HTMLAnchorElement } => Boolean(section.el));

    let currentSectionId: string | null = null;

    function setActive(id: string) {
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("data-nav") === id);
      });
    }

    const navObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                  currentSectionId = entry.target.id;
                  if (window.scrollY > 120) setActive(currentSectionId);
                }
              });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
          )
        : null;

    sections.forEach((section) => navObserver?.observe(section.el));

    function onScroll() {
      if (window.scrollY <= 120) {
        links.forEach((link) => link.classList.remove("is-active"));
      } else if (currentSectionId) {
        setActive(currentSectionId);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const mobileToggle = document.querySelector<HTMLButtonElement>("[data-mobile-menu-toggle]");
    const mobileMenu = document.getElementById("nav-mobile-menu");
    const mobileClose = document.querySelector<HTMLButtonElement>("[data-mobile-menu-close]");
    const mobileLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-mobile-menu-link]"));
    const initialBodyOverflow = document.body.style.overflow;

    function setMobileMenu(open: boolean) {
      if (!mobileMenu || !mobileToggle) return;
      mobileMenu.classList.toggle("is-open", open);
      mobileToggle.classList.toggle("is-open", open);
      mobileMenu.setAttribute("aria-hidden", String(!open));
      mobileToggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : initialBodyOverflow;
    }

    function onMobileToggleClick() {
      const isOpen = mobileMenu?.classList.contains("is-open") ?? false;
      setMobileMenu(!isOpen);
    }

    function onMobileLinkClick() {
      setMobileMenu(false);
    }

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileMenu(false);
    }

    mobileToggle?.addEventListener("click", onMobileToggleClick);
    mobileClose?.addEventListener("click", onMobileLinkClick);
    mobileLinks.forEach((link) => link.addEventListener("click", onMobileLinkClick));
    window.addEventListener("keydown", onEscape);

    const newsletterForm = document.querySelector<HTMLFormElement>("[data-newsletter-form]");
    const newsletterInput = newsletterForm?.querySelector<HTMLInputElement>('input[type="email"]') ?? null;
    const newsletterMsg = document.getElementById("msg-main");
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showNewsletterMessage(text: string, isError: boolean) {
      if (!newsletterMsg) return;
      newsletterMsg.textContent = text;
      newsletterMsg.style.color = isError ? "#ff8a8a" : "var(--accent)";
      newsletterMsg.style.display = "block";
    }

    async function submitNewsletterSignup(email: string, source = "rooki-intro-site") {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          website: "",
        }),
      });

      if (!response.ok) {
        throw new Error(`Newsletter signup failed: ${response.status}`);
      }

      const payload = (await response.json()) as { ok?: boolean };
      if (!payload.ok) {
        throw new Error("Newsletter signup failed");
      }
    }

    async function onNewsletterSubmit(event: SubmitEvent) {
      event.preventDefault();
      if (!newsletterInput) return;

      const email = newsletterInput.value.trim();
      if (!email) {
        newsletterInput.style.borderColor = "var(--accent)";
        newsletterInput.focus();
        showNewsletterMessage("Inserisci la tua email per iscriverti.", true);
        return;
      }

      if (!emailRe.test(email)) {
        newsletterInput.style.borderColor = "var(--accent)";
        newsletterInput.focus();
        showNewsletterMessage("L’email non sembra valida. Controlla e riprova.", true);
        return;
      }

      newsletterInput.style.borderColor = "";
      showNewsletterMessage("Invio iscrizione in corso...", false);

      try {
        await submitNewsletterSignup(email);
        newsletterForm?.reset();
        showNewsletterMessage("✓ Sei dentro — ti scriviamo presto.", false);
      } catch {
        showNewsletterMessage(
          "Non siamo riusciti a inviare l’iscrizione. Riprova tra poco o scrivici a lorenzo.marciandi@rooki.video.",
          true,
        );
      }
    }

    newsletterForm?.addEventListener("submit", onNewsletterSubmit);

    const popupDismissedKey = "rooki_nl_popup_seen";
    const newsletterPopup = document.getElementById("nl-popup");
    const popupClose = newsletterPopup?.querySelector<HTMLButtonElement>("[data-newsletter-popup-close]") ?? null;
    const popupForm = newsletterPopup?.querySelector<HTMLFormElement>("[data-newsletter-popup-form]") ?? null;
    const popupInput = popupForm?.querySelector<HTMLInputElement>('input[type="email"]') ?? null;
    const popupMsg = document.getElementById("msg-popup");
    let popupOpenTimer: number | null = null;
    let popupCloseTimer: number | null = null;

    function hasDismissedPopup() {
      try {
        return window.localStorage.getItem(popupDismissedKey) === "1";
      } catch {
        return false;
      }
    }

    function markPopupDismissed() {
      try {
        window.localStorage.setItem(popupDismissedKey, "1");
      } catch {
        // The popup still closes when storage is unavailable.
      }
    }

    function openNewsletterPopup() {
      if (!newsletterPopup || hasDismissedPopup()) return;
      newsletterPopup.classList.add("is-open");
      newsletterPopup.setAttribute("aria-hidden", "false");
    }

    function closeNewsletterPopup(markDismissed = true) {
      if (!newsletterPopup) return;
      newsletterPopup.classList.remove("is-open");
      newsletterPopup.setAttribute("aria-hidden", "true");
      if (markDismissed) markPopupDismissed();
    }

    function showPopupMessage(text: string, isError: boolean) {
      if (!popupMsg) return;
      popupMsg.textContent = text;
      popupMsg.style.color = isError ? "#ff8a8a" : "var(--accent)";
      popupMsg.style.display = "block";
    }

    function onPopupClose() {
      closeNewsletterPopup();
    }

    async function onPopupSubmit(event: SubmitEvent) {
      event.preventDefault();
      if (!popupInput) return;

      const email = popupInput.value.trim();
      if (!email) {
        popupInput.style.borderColor = "var(--accent)";
        popupInput.focus();
        showPopupMessage("Inserisci la tua email per iscriverti.", true);
        return;
      }

      if (!emailRe.test(email)) {
        popupInput.style.borderColor = "var(--accent)";
        popupInput.focus();
        showPopupMessage("L’email non sembra valida. Controlla e riprova.", true);
        return;
      }

      popupInput.style.borderColor = "";
      showPopupMessage("Invio iscrizione in corso...", false);

      try {
        await submitNewsletterSignup(email, "rooki-newsletter-popup");
        popupForm?.reset();
        showPopupMessage("✓ Sei dentro — ti scriviamo presto.", false);
        markPopupDismissed();
        popupCloseTimer = window.setTimeout(() => closeNewsletterPopup(false), 1600);
      } catch {
        showPopupMessage(
          "Non siamo riusciti a inviare l’iscrizione. Riprova tra poco o scrivici a lorenzo.marciandi@rooki.video.",
          true,
        );
      }
    }

    function onPopupEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && newsletterPopup?.classList.contains("is-open")) {
        closeNewsletterPopup();
      }
    }

    popupClose?.addEventListener("click", onPopupClose);
    popupForm?.addEventListener("submit", onPopupSubmit);
    window.addEventListener("keydown", onPopupEscape);

    if (!hasDismissedPopup()) {
      popupOpenTimer = window.setTimeout(openNewsletterPopup, 5500);
    }

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const dashboard = document.querySelector<HTMLElement>(".dash");
    const trend = document.querySelector<HTMLElement>(".trend");
    const trendTip = document.getElementById("trendTip");
    const trendPoints = Array.from(document.querySelectorAll<SVGGElement>(".trend-pt"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count-to]"));
    const counterFrames = new Set<number>();

    function formatCounter(value: number, prefix = "") {
      return `${prefix}${value.toLocaleString("it-IT")}`;
    }

    function finishCounter(counter: HTMLElement) {
      const target = Number.parseInt(counter.dataset.countTo || "0", 10);
      counter.textContent = formatCounter(target, counter.dataset.prefix || "");
    }

    function animateCounter(counter: HTMLElement) {
      const target = Number.parseInt(counter.dataset.countTo || "0", 10);
      const prefix = counter.dataset.prefix || "";
      if (reduceMotion) {
        finishCounter(counter);
        return;
      }

      let startedAt: number | null = null;
      let frameId = 0;
      const duration = 1400;

      function step(timestamp: number) {
        counterFrames.delete(frameId);
        if (startedAt === null) startedAt = timestamp;
        const progress = Math.min(1, (timestamp - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = formatCounter(Math.round(eased * target), prefix);
        if (progress < 1) {
          frameId = window.requestAnimationFrame(step);
          counterFrames.add(frameId);
        }
      }

      frameId = window.requestAnimationFrame(step);
      counterFrames.add(frameId);
    }

    function activateDashboard() {
      dashboard?.querySelector<HTMLElement>(".split-bar")?.classList.add("is-in");
      dashboard?.querySelectorAll<HTMLElement>(".type-fill").forEach((fill) => {
        fill.style.width = `${fill.dataset.w || "0"}%`;
      });
    }

    const dashboardObserver =
      !reduceMotion && dashboard && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                activateDashboard();
                dashboardObserver?.disconnect();
              }
            },
            { threshold: 0.35 },
          )
        : null;

    const trendObserver =
      !reduceMotion && trend && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                trend.classList.add("is-in");
                trendObserver?.disconnect();
              }
            },
            { threshold: 0.05 },
          )
        : null;

    const counterObserver =
      !reduceMotion && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                  animateCounter(entry.target);
                  counterObserver?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.4 },
          )
        : null;

    if (dashboardObserver && dashboard) {
      dashboardObserver.observe(dashboard);
    } else {
      activateDashboard();
    }

    if (trendObserver && trend) {
      trendObserver.observe(trend);
    } else {
      trend?.classList.add("is-in");
    }

    counters.forEach((counter) => {
      if (counterObserver) counterObserver.observe(counter);
      else finishCounter(counter);
    });

    function showTrendTip(event: Event) {
      const point = event.currentTarget;
      if (!(point instanceof SVGGElement) || !trendTip || !trend) return;
      const circle = point.querySelector<SVGCircleElement>("circle");
      if (!circle) return;

      const value = Number.parseInt(point.dataset.val || "0", 10);
      const date = point.dataset.date || "";
      const circleRect = circle.getBoundingClientRect();
      const trendRect = trend.getBoundingClientRect();
      trendTip.replaceChildren(
        document.createTextNode(value.toLocaleString("it-IT")),
        Object.assign(document.createElement("span"), { className: "d", textContent: date }),
      );
      trendTip.style.left = `${circleRect.left + circleRect.width / 2 - trendRect.left}px`;
      trendTip.style.top = `${circleRect.top + circleRect.height / 2 - trendRect.top}px`;
      trendTip.classList.add("show");
      trendTip.setAttribute("aria-hidden", "false");
    }

    function hideTrendTip() {
      trendTip?.classList.remove("show");
      trendTip?.setAttribute("aria-hidden", "true");
    }

    trendPoints.forEach((point) => {
      point.addEventListener("mouseenter", showTrendTip);
      point.addEventListener("mouseleave", hideTrendTip);
      point.addEventListener("focus", showTrendTip);
      point.addEventListener("blur", hideTrendTip);
    });

    const revealSelectors = [
      "h1",
      "h2",
      "h3",
      ".eyebrow",
      ".lead",
      ".hero-sub",
      "section p",
      ".deliv-row",
      ".pillar",
      ".phase",
      ".faq",
      ".swap .col",
      ".free-banner",
      ".lang-pill",
      ".en p",
      ".hero-strip",
      ".hero-meta",
      ".hero-cta",
      ".spec",
      ".mission-fact",
      ".newsletter-grid",
    ];

    document.querySelectorAll<HTMLElement>(revealSelectors.join(",")).forEach((el) => {
      if (!el.closest("[data-reveal-skip]")) el.classList.add("reveal");
    });

    function splitTextNode(node: Node) {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent || "";
          if (!text.trim()) return;
          const fragment = document.createDocumentFragment();
          text.split(/(\s+)/).forEach((part) => {
            if (/^\s+$/.test(part)) {
              fragment.appendChild(document.createTextNode(part));
            } else if (part.length) {
              const span = document.createElement("span");
              span.className = "word";
              span.textContent = part;
              fragment.appendChild(span);
            }
          });
          child.parentNode?.replaceChild(fragment, child);
        } else if (child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName !== "BR") {
          splitTextNode(child);
        }
      });
    }

    document.querySelectorAll<HTMLElement>(".hero h1, .section-head h2, .en h2").forEach((headline) => {
      if (headline.dataset.wordsReady === "true") return;
      splitTextNode(headline);
      headline.dataset.wordsReady = "true";
      headline.classList.remove("reveal");
      headline.classList.add("reveal-words");
      headline.querySelectorAll<HTMLElement>(".word").forEach((word, index) => {
        word.style.setProperty("--i", String(index));
      });
    });

    const revealObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-in");
                  revealObserver?.unobserve(entry.target);
                }
              });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
          )
        : null;

    document.querySelectorAll<HTMLElement>(".reveal, .reveal-words").forEach((el) => {
      if (reduceMotion || !revealObserver) {
        el.classList.add("is-in");
      } else {
        revealObserver.observe(el);
      }
    });

    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(".hero .reveal, .hero .reveal-words").forEach((el) => {
        el.classList.add("is-in");
        revealObserver?.unobserve(el);
      });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onEscape);
      mobileToggle?.removeEventListener("click", onMobileToggleClick);
      mobileClose?.removeEventListener("click", onMobileLinkClick);
      mobileLinks.forEach((link) => link.removeEventListener("click", onMobileLinkClick));
      document.body.style.overflow = initialBodyOverflow;
      newsletterForm?.removeEventListener("submit", onNewsletterSubmit);
      popupClose?.removeEventListener("click", onPopupClose);
      popupForm?.removeEventListener("submit", onPopupSubmit);
      window.removeEventListener("keydown", onPopupEscape);
      if (popupOpenTimer !== null) window.clearTimeout(popupOpenTimer);
      if (popupCloseTimer !== null) window.clearTimeout(popupCloseTimer);
      trendPoints.forEach((point) => {
        point.removeEventListener("mouseenter", showTrendTip);
        point.removeEventListener("mouseleave", hideTrendTip);
        point.removeEventListener("focus", showTrendTip);
        point.removeEventListener("blur", hideTrendTip);
      });
      counterFrames.forEach((frameId) => window.cancelAnimationFrame(frameId));
      navObserver?.disconnect();
      dashboardObserver?.disconnect();
      trendObserver?.disconnect();
      counterObserver?.disconnect();
      revealObserver?.disconnect();
    };
  }, []);
}

export default function App() {
  useRookiPageEffects();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: renderedPageMarkup }} />
      <div dangerouslySetInnerHTML={{ __html: newsletterPopupMarkup }} />
    </>
  );
}
