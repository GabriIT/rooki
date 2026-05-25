import { useEffect } from "react";

const NEWSLETTER_ENDPOINT = "/api/newsletter-signup";

const pageMarkup = "<svg class=\"grain\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n  <filter id=\"grainNoise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\"></feTurbulence></filter>\n  <rect width=\"100%\" height=\"100%\" filter=\"url(#grainNoise)\" opacity=\"0.6\"></rect>\n</svg>\n\n<!-- ============== NAV ============== -->\n<header class=\"nav\">\n  <div class=\"wrap nav-inner\">\n    <a href=\"#top\" class=\"wordmark\" aria-label=\"Rooki\">\n      ROOKI<span class=\"dot\" aria-hidden=\"true\"></span>\n    </a>\n    <nav class=\"nav-links\" aria-label=\"Sezioni\">\n      <a href=\"#estate\" data-nav=\"estate\">Estate 2026</a>\n      <a href=\"#chi-siamo\" data-nav=\"chi-siamo\">Chi siamo</a>\n      <a href=\"#dove-andiamo\" data-nav=\"dove-andiamo\">Dove andiamo</a>\n      <a href=\"#faq\" data-nav=\"faq\">FAQ</a>\n      <a href=\"#en\" data-nav=\"en\">EN</a>\n    </nav>\n    <button class=\"nav-hamburger\" type=\"button\" aria-label=\"Menu\" aria-controls=\"nav-mobile-menu\" aria-expanded=\"false\" data-mobile-menu-toggle>\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line></svg>\n    </button>\n    <a class=\"btn primary\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Ciao%20Rooki\">\n      Scrivici\n      <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n    </a>\n  </div>\n</header>\n\n<div id=\"nav-mobile-menu\" style=\"display:none; flex-direction:column; position:fixed; top:60px; left:0; right:0; background:#0a0a0a; border-bottom:1px solid rgba(255,255,255,0.08); padding:16px 24px 24px; z-index:999; gap:0;\">\n  <a href=\"#estate\" data-mobile-menu-link style=\"padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">Estate 2026</a>\n  <a href=\"#dove-andiamo\" data-mobile-menu-link style=\"padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">Dove andiamo</a>\n  <a href=\"#faq\" data-mobile-menu-link style=\"padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">FAQ</a>\n  <a href=\"#chi-siamo\" data-mobile-menu-link style=\"padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">Chi siamo</a>\n  <a href=\"#en\" data-mobile-menu-link style=\"padding:14px 0;font-family:var(--font-display);font-weight:700;font-size:20px;text-transform:uppercase;letter-spacing:0.04em;color:#fff;text-decoration:none;\">EN</a>\n</div>\n\n<main id=\"top\">\n\n  <!-- ============== HERO ============== -->\n  <section class=\"hero\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\"><span class=\"live-dot\"></span> Stiamo costruendo · Varese 2026</span>\n\n      <h1 style=\"margin-top: 28px;\">\n        Lo sport dilettantistico<br>\n        merita la stessa<br>\n        <span class=\"accent\">visibilità</span> di quello<br>\n        <span class=\"stroke\">professionistico.</span>\n      </h1>\n\n      <p class=\"hero-sub\">\n        Trasformiamo i video delle partite di basket in <strong>highlights e clip social pronti in 24 ore</strong>,\n        usando una pipeline AI costruita su misura. Pallavolo e calcio arrivano dopo — iniziamo dal basket.\n      </p>\n\n      <div class=\"hero-meta\">\n        <a class=\"btn primary lg\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Vorrei%20provare%20Rooki%20con%20una%20partita\">\n          Mandaci una partita di prova\n          <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n        </a>\n        <a class=\"btn lg\" href=\"#ricevi\">Cosa ti restituiamo</a>\n      </div>\n\n      <div class=\"hero-strip\">\n        <span class=\"tag\"><span class=\"dot-color bg-basket\"></span>Basket</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== PERCHÉ LO FACCIAMO ============== -->\n  <section id=\"missione\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow reveal\">Perché lo facciamo</span>\n          <h2 style=\"margin-top:18px;\">Il basket locale<br><span class=\"accent\">merita un pubblico.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Ogni weekend migliaia di partite vengono giocate e dimenticate.\n          Nessuna clip, nessun replay, nessuna memoria. Rooki esiste per cambiare questo —\n          partendo dal basket, costruendo gli strumenti che mancano, un torneo alla volta.\n        </p>\n      </div>\n\n      <div class=\"mission-grid\">\n        <div class=\"mission-fact\">\n          <div class=\"mf-num\">Migliaia</div>\n          <div class=\"mf-lbl\">di partite giocate ogni weekend.</div>\n          <div class=\"mf-sub\">Tornei, leghe amatoriali, settori giovanili. Persone vere, sui campi, ogni sabato e domenica in Italia.</div>\n        </div>\n        <div class=\"mission-fact\">\n          <div class=\"mf-num accent\">Zero</div>\n          <div class=\"mf-lbl\">highlights pubblicati per la maggior parte di esse.</div>\n          <div class=\"mf-sub\">Le immagini esistono solo nella memoria di chi era al campo. Dopo l'ultimo fischio, sparisce tutto.</div>\n        </div>\n        <div class=\"mission-fact\">\n          <div class=\"mf-num\">Troppo</div>\n          <div class=\"mf-lbl\">costoso produrli a mano, oggi.</div>\n          <div class=\"mf-sub\">Una crew video professionale, ore di montaggio, fee da migliaia di euro. Insostenibile per uno sport che non vende biglietti.</div>\n        </div>\n      </div>\n\n      <div class=\"mission-pull\">\n        Il problema non è di interesse. <span class=\"accent\">È di strumenti.</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== COSA RICEVI ============== -->\n  <section id=\"ricevi\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Cosa ricevi</span>\n          <h2 style=\"margin-top:18px;\">Un pacchetto pronto.<br>Entro <span style=\"color:var(--accent);\">24 ore.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Tu ci mandi le riprese — anche da telefono, anche da telecamera fissa.\n          Noi ti riconsegnamo un set di contenuti pubblicabili senza ulteriori passaggi.\n        </p>\n      </div>\n\n      <div class=\"deliv-list\">\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\"></rect>\n              <path d=\"m10 10 5 2-5 2z\" fill=\"currentColor\"></path>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Highlights match</div>\n            <div class=\"desc\">Il riassunto della partita, montato e sincronizzato. Pronto per YouTube e per il canale del torneo.</div>\n          </div>\n          <div class=\"qty\">1 video<span class=\"sub\">2–4 min · 16:9</span></div>\n        </div>\n\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"6\" y=\"3\" width=\"12\" height=\"18\" rx=\"2\"></rect>\n              <circle cx=\"12\" cy=\"17\" r=\"0.8\" fill=\"currentColor\"></circle>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Clip social verticali</div>\n            <div class=\"desc\">Tagliate per Instagram Reels, TikTok e Shorts. Ognuna autonoma, ognuna pubblicabile.</div>\n          </div>\n          <div class=\"qty\">5–8 clip<span class=\"sub\">15–45s · 9:16</span></div>\n        </div>\n\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"></rect>\n              <path d=\"M3 14l5-4 4 3 4-5 5 4\"></path>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Consegna su cloud</div>\n            <div class=\"desc\">Link Drive o WeTransfer con tutti i file pronti al download. Niente upload, niente tool da imparare.</div>\n          </div>\n          <div class=\"qty\">≤ 24 ore<span class=\"sub\">Dal ricevimento</span></div>\n        </div>\n      </div>\n\n      <div class=\"swap\">\n        <div class=\"col you\">\n          <div class=\"role\">Voi</div>\n          <div class=\"lbl\">Tu ci dai</div>\n          <ul>\n            <li>Le riprese delle partite, anche grezze.</li>\n            <li>Il permesso di riprendere al campo.</li>\n            <li>Feedback onesto sul lavoro fatto.</li>\n          </ul>\n        </div>\n        <div class=\"col us\">\n          <div class=\"role\">Noi</div>\n          <div class=\"lbl\">Noi ti diamo</div>\n          <ul>\n            <li>Tutta la produzione video gratuita durante la stagione estiva.</li>\n            <li>Tempi rapidi: consegna entro 24 ore dal ricevimento.</li>\n            <li>File pronti al download, senza watermark Rooki.</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== COSA FACCIAMO QUEST'ESTATE ============== -->\n  <section id=\"estate\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Cosa facciamo quest'estate</span>\n          <h2 style=\"margin-top:18px;\">L'estate 2026,<br>sui campi, <span style=\"color:var(--accent);\">gratuita.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Un'estate, un torneo di basket. Mandiamo le riprese, riceviamo\n          highlights e clip social pronti — senza fee, senza contratti.\n        </p>\n      </div>\n\n      <div class=\"pillars three-up\">\n        <a class=\"pillar basket\" href=\"https://www.instagram.com/mastercagebasketball\" target=\"_blank\" rel=\"noopener\" style=\"text-decoration:none; color:inherit; cursor:pointer;\">\n          <div class=\"swatch\" aria-hidden=\"true\"></div>\n          <div class=\"body\">\n            <div class=\"nm\">Basket · Mastercage</div>\n            <div class=\"meta\">Top plays, triple, recuperi</div>\n          </div>\n          <div class=\"ask confirmed\">Vai al torneo →</div>\n        </a>\n      </div>\n\n      <div class=\"specs-strip\">\n        <div class=\"spec\">\n          <div class=\"spec-val\">≤ 24h</div>\n          <div class=\"spec-lbl\">Consegna highlights e clip</div>\n        </div>\n        <div class=\"spec\">\n          <div class=\"spec-val\">AI</div>\n          <div class=\"spec-lbl\">Pipeline che riconosce i momenti chiave</div>\n        </div>\n        <div class=\"spec\">\n          <div class=\"spec-val accent\">0€</div>\n          <div class=\"spec-lbl\">Gratuito, solo durante l'estate</div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== CHI SIAMO ============== -->\n<section id=\"chi-siamo\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Chi siamo</span>\n          <h2 style=\"margin-top:18px;\">Tre persone,<br>una visione concreta.</h2>\n        </div>\n        <p class=\"lead\">\n          Stiamo costruendo Rooki da Varese, in Lombardia. Tre founder, background\n          complementari, una sola convinzione: che lo sport amatoriale possa essere\n          raccontato come quello che vediamo in TV.\n        </p>\n      </div>\n\n      <div class=\"founders\">\n        <article class=\"founder\">\n          <div class=\"mono\">LM</div>\n          <h3>Lorenzo Marciandi</h3>\n          <div class=\"role\">Founder</div>\n          <p>Parla con gli organizzatori, chiude gli accordi, sta sul campo. È il primo contatto quando scrivi a ROOKI.</p>\n          <a class=\"mail\" href=\"mailto:lorenzo.marciandi@rooki.video\">lorenzo.marciandi@rooki.video →</a>\n        </article>\n\n        <article class=\"founder\">\n          <div class=\"mono\">GP</div>\n          <h3>Giorgio Pigionatti</h3>\n          <div class=\"role\">Founder</div>\n          <p>Cura il sito, i social e tutto quello che si vede. Se ROOKI ha una faccia, è merito suo.</p>\n          <a class=\"mail\" href=\"mailto:giorgio.pigionatti@rooki.video\">giorgio.pigionatti@rooki.video →</a>\n        </article>\n\n        <article class=\"founder\">\n          <div class=\"mono\">GC</div>\n          <h3>Gabriele Castaldi</h3>\n          <div class=\"role\">Founder</div>\n          <p>Costruisce il sistema che trasforma ore di video grezzo in clip pronte in 24 ore. La parte che sembra magia è roba sua.</p>\n          <a class=\"mail\" href=\"mailto:gabriele.castaldi@rooki.video\">gabriele.castaldi@rooki.video →</a>\n        </article>\n      </div>\n\n      <div class=\"place\">\n        <span>Varese</span><span class=\"sep\"></span>\n        <span>Lombardia</span><span class=\"sep\"></span>\n        <span>Italia</span><span class=\"sep\"></span>\n        <span>Basket</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== DOVE STIAMO ANDANDO ============== -->\n  <section id=\"dove-andiamo\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Dove stiamo andando</span>\n          <h2 style=\"margin-top:18px;\">La nostra<br><span class=\"accent\">direzione.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Non siamo una production house. Stiamo costruendo\n          un sistema. Ecco i tre passi con cui ci arriviamo.\n        </p>\n      </div>\n\n      <div class=\"roadmap-track\">\n        <article class=\"phase active\">\n          <div class=\"head\">\n            <span>Fase 01 · Estate 2026</span>\n            <span class=\"status\">In corso</span>\n          </div>\n          <div class=\"num\">01</div>\n          <h3>Costruiamo<br>la prova.</h3>\n          <p>Tornei estivi di alto livello — Mastercage confermato per il basket — con produzione video gratuita e consegna in 24 ore. Dimostriamo che il modello regge prima di scalare.</p>\n        </article>\n\n        <article class=\"phase\">\n          <div class=\"head\">\n            <span>Fase 02 · 2026 — 2027</span>\n            <span class=\"status\">Prossimo passo</span>\n          </div>\n          <div class=\"num\">02</div>\n          <h3>Le società<br>filmano, noi trasformiamo.</h3>\n          <p>Le società filmano le partite della stagione regolare e ci mandano il video grezzo — nessuna crew esterna. La nostra pipeline AI lo trasforma in highlights e clip social pronti in 24 ore, su scala di campionato. Affianchiamo report tecnici per giocatori e staff: dati di partita, momenti chiave, analisi individuali.</p>\n        </article>\n\n        <article class=\"phase\">\n          <div class=\"head\">\n            <span>Fase 03 · Visione</span>\n            <span class=\"status\">Orizzonte</span>\n          </div>\n          <div class=\"num\">03</div>\n          <h3>L'app<br>e la community.</h3>\n          <p>Lanciamo l'app ROOKI: una piattaforma dove gli appassionati di basket trovano partite in diretta, highlights e statistiche — tutto in un posto. L'obiettivo è costruire la community dello sport locale che non esiste ancora.</p>\n        </article>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== FAQ ============== -->\n  <section id=\"faq\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Domande frequenti</span>\n          <h2 style=\"margin-top:18px;\">Le risposte<br>che ti servono.</h2>\n        </div>\n        <p class=\"lead\">\n          Le domande che ci fanno gli organizzatori al primo contatto. Se ne hai altre,\n          scrivici — rispondiamo entro un giorno.\n        </p>\n      </div>\n\n      <div class=\"faq-grid\">\n        <details class=\"faq\">\n          <summary>Che riprese servono per partire?</summary>\n          <p class=\"ans\">Bastano riprese complete della partita, anche da telecamera fissa o smartphone. Non servono multicamera né regia. Più la ripresa è stabile e con campo intero meglio è — ma sappiamo lavorare anche con materiale grezzo.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Quanto costa?</summary>\n          <p class=\"ans\">Il servizio è disponibile gratuitamente solo durante la stagione estiva 2026, per gli organizzatori dei tornei selezionati (Mastercage è già confermato per il basket). Fuori stagione il modello cambia: nessuna fee nascosta, nessun abbonamento. In cambio chiediamo feedback e il permesso di usare il lavoro come vetrina.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Come vi mando i video?</summary>\n          <p class=\"ans\">Un link a Google Drive, WeTransfer, Dropbox o qualsiasi cloud a tua scelta. Non devi imparare a usare nessuna piattaforma — il flusso è quello che già usi.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Davvero in 24 ore?</summary>\n          <p class=\"ans\">Sì. Dal momento in cui riceviamo le riprese complete, consegniamo entro un giorno. Per i match serali significa highlights pronti per la mattina dopo, in tempo per i social del torneo.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Cos'è una pipeline AI?</summary>\n          <p class=\"ans\">È il sistema che fa il lavoro pesante prima del nostro editor: guarda le riprese della partita e riconosce in automatico i momenti che contano — ace, muri, gol, parate, schiacciate, triple, punti decisivi. Così invece di rivedere ore di video a mano, partiamo già dalle azioni giuste e ci concentriamo sul montaggio. Per voi organizzatori cambia una cosa sola: tempi rapidi e qualità costante, anche per partite intere.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Se le riprese sono brutte, cosa succede?</summary>\n          <p class=\"ans\">Ci adattiamo. Possiamo lavorare con riprese imperfette: stabilizziamo, riquadriamo, sceglamo le inquadrature migliori. Se il materiale è davvero inutilizzabile lo diciamo subito, prima di iniziare.</p>\n        </details>\n      </div>\n    </div>\n  </section>\n\n    <!-- ============== EN SECTION ============== -->\n  <section class=\"en\" id=\"en\" lang=\"en\">\n    <div class=\"wrap\">\n      <div class=\"en-grid\">\n        <div>\n          <span class=\"eyebrow\">EN</span>\n          <h2 style=\"margin-top:18px;\">What is <span class=\"accent\">Rooki?</span></h2>\n\n          <div class=\"en-blocks\">\n            <div class=\"blk\">\n              <span class=\"lbl\">What we do</span>\n              <p>Rooki turns raw basketball match footage into ready-to-publish highlights and short-form social clips — delivered within 24 hours, using a custom-built AI pipeline. Volleyball and football come later — we’re starting with basketball.</p>\n            </div>\n            <div class=\"blk\">\n              <span class=\"lbl\">Who we are</span>\n              <p>Three founders based in Varese, Lombardia. We know amateur sport from the inside — and we're building the tools to make it visible.</p>\n            </div>\n            <div class=\"blk\">\n              <span class=\"lbl\">Phase 1 — Now</span>\n              <p>This summer we're working with high-level amateur tournaments for free. We receive the raw footage, we return the content. No cost, no commitment.</p>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"en-contact\">\n            <h3>Interested?</h3>\n            <p>If you're a tournament organiser, a sports federation, or just curious about what we're building — write to us. We reply within 24 hours.</p>\n            <a class=\"btn primary\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Hello%20Rooki\">\n              Write to us\n              <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== FOOTER ============== -->\n  <footer>\n    <div class=\"wrap\" style=\"padding-bottom: 0;\">\n      <div class=\"newsletter-grid\" style=\"display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:64px 0 48px; border-bottom:1px solid rgba(255,255,255,0.08);\">\n\n        <div>\n          <div class=\"eyebrow\" style=\"margin-bottom:16px;\">Newsletter</div>\n          <h3 style=\"font-family:var(--font-display); font-weight:900; text-transform:uppercase; line-height:0.95; font-size:clamp(28px, 3vw, 40px); letter-spacing:-0.01em; margin:0 0 14px;\">Resta nel <span style=\"color:var(--accent);\">giro.</span></h3>\n          <p style=\"font-size:15px; color:rgba(255,255,255,0.6); line-height:1.6; margin:0; max-width:42ch;\">\n            Una mail ogni tanto: tornei in arrivo, dietro le quinte, dove ci trovi. Niente spam, mai.\n          </p>\n        </div>\n\n        <div>\n          <form data-newsletter-form novalidate style=\"display:flex; gap:10px; flex-wrap:wrap;\">\n            <input type=\"email\" placeholder=\"la@tuaemail.it\" aria-label=\"La tua email\" style=\"flex:1; min-width:200px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:13px 16px; color:#fff; font-size:15px; font-family:inherit; outline:none;\">\n            <button type=\"submit\" class=\"btn primary\" style=\"white-space:nowrap;\">\n              Iscriviti\n              <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n            </button>\n          </form>\n          <p id=\"msg-main\" role=\"status\" aria-live=\"polite\" style=\"display:none; margin-top:12px; font-size:13px;\"></p>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"wrap\">\n      <div class=\"foot-line\">\n        <span class=\"mark\">ROOKI<span class=\"dot\"></span></span>\n        <span class=\"sep\"></span>\n        <span>Varese, Italia</span>\n        <span class=\"sep\"></span>\n        <span>2026</span>\n      </div>\n    </div>\n  </footer>\n\n</main>";

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
    const mobileLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-mobile-menu-link]"));

    function setMobileMenu(open: boolean) {
      if (!mobileMenu || !mobileToggle) return;
      mobileMenu.style.display = open ? "flex" : "none";
      mobileToggle.setAttribute("aria-expanded", String(open));
    }

    function onMobileToggleClick() {
      const isOpen = mobileMenu?.style.display === "flex";
      setMobileMenu(!isOpen);
    }

    function onMobileLinkClick() {
      setMobileMenu(false);
    }

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileMenu(false);
    }

    mobileToggle?.addEventListener("click", onMobileToggleClick);
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

    async function submitNewsletterSignup(email: string) {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "rooki-intro-site",
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

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
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
      mobileLinks.forEach((link) => link.removeEventListener("click", onMobileLinkClick));
      newsletterForm?.removeEventListener("submit", onNewsletterSubmit);
      navObserver?.disconnect();
      revealObserver?.disconnect();
    };
  }, []);
}

export default function App() {
  useRookiPageEffects();

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
