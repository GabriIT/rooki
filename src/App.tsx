import { useEffect } from "react";

const pageMarkup = "<svg class=\"grain\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n  <filter id=\"grainNoise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\"></feTurbulence></filter>\n  <rect width=\"100%\" height=\"100%\" filter=\"url(#grainNoise)\" opacity=\"0.6\"></rect>\n</svg>\n\n<!-- ============== NAV ============== -->\n<header class=\"nav\">\n  <div class=\"wrap nav-inner\">\n    <a href=\"#top\" class=\"wordmark\" aria-label=\"Rooki\">\n      ROOKI<span class=\"dot\" aria-hidden=\"true\"></span>\n    </a>\n    <nav class=\"nav-links\" aria-label=\"Sezioni\">\n      <a href=\"#chi-siamo\" data-nav=\"chi-siamo\">Chi siamo</a>\n      <a href=\"#estate\" data-nav=\"estate\">Estate 2026</a>\n      <a href=\"#dove-andiamo\" data-nav=\"dove-andiamo\">Dove andiamo</a>\n      <a href=\"#faq\" data-nav=\"faq\">FAQ</a>\n      <a href=\"#en\" data-nav=\"en\">EN</a>\n    </nav>\n    <a class=\"btn primary\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Ciao%20Rooki\">\n      Scrivici\n      <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n    </a>\n  </div>\n</header>\n\n<main id=\"top\">\n\n  <!-- ============== HERO ============== -->\n  <section class=\"hero\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\"><span class=\"live-dot\"></span> Stiamo costruendo · Varese 2026</span>\n\n      <h1 style=\"margin-top: 28px;\">\n        Lo sport dilettantistico<br>\n        merita la stessa<br>\n        <span class=\"accent\">visibilità</span> di quello<br>\n        <span class=\"stroke\">professionistico.</span>\n      </h1>\n\n      <p class=\"hero-sub\">\n        Trasformiamo i video delle partite in <strong>highlights e clip social</strong> pronti in 24 ore,\n        usando una pipeline AI costruita su misura per pallavolo, calcio e basket.\n      </p>\n\n      <div class=\"hero-meta\">\n        <a class=\"btn primary lg\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Ciao%20Rooki\">\n          Scrivici\n          <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n        </a>\n        <a class=\"btn lg\" href=\"#chi-siamo\">Chi siamo</a>\n      </div>\n\n      <div class=\"hero-strip\">\n        <span class=\"tag\"><span class=\"dot-color bg-volley\"></span>Pallavolo</span>\n        <span class=\"tag\"><span class=\"dot-color bg-soccer\"></span>Calcio</span>\n        <span class=\"tag\"><span class=\"dot-color bg-basket\"></span>Basket</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== CHI SIAMO ============== -->\n  <section id=\"chi-siamo\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Chi siamo</span>\n          <h2 style=\"margin-top:18px;\">Tre persone,<br>una visione concreta.</h2>\n        </div>\n        <p class=\"lead\">\n          Stiamo costruendo Rooki da Varese, in Lombardia. Tre founder, background\n          complementari, una sola convinzione: che lo sport amatoriale possa essere\n          raccontato come quello che vediamo in TV.\n        </p>\n      </div>\n\n      <div class=\"founders\">\n        <article class=\"founder\">\n          <div class=\"mono\">LM</div>\n          <h3>Lorenzo Marciandi</h3>\n          <div class=\"role\">Founder</div>\n          <p>Costruisce relazioni con tornei, società e organizzatori. Tiene il prodotto vicino ai bisogni reali del campo.</p>\n          <a class=\"mail\" href=\"mailto:lorenzo.marciandi@rooki.video\">lorenzo.marciandi@rooki.video →</a>\n        </article>\n\n        <article class=\"founder\">\n          <div class=\"mono\">GP</div>\n          <h3>Giorgio Pigionatti</h3>\n          <div class=\"role\">Founder</div>\n          <p>Lavora su direzione prodotto, flusso operativo e qualità dei contenuti consegnati agli organizzatori.</p>\n          <a class=\"mail\" href=\"mailto:giorgio.pigionatti@rooki.video\">giorgio.pigionatti@rooki.video →</a>\n        </article>\n\n        <article class=\"founder\">\n          <div class=\"mono\">GC</div>\n          <h3>Gabriele Castaldi</h3>\n          <div class=\"role\">Founder</div>\n          <p>Segue tecnologia, automazione e pipeline AI per trasformare video grezzi in contenuti pubblicabili.</p>\n          <a class=\"mail\" href=\"mailto:gabriele.castaldi@rooki.video\">gabriele.castaldi@rooki.video →</a>\n        </article>\n      </div>\n\n      <div class=\"place\">\n        <span>Varese</span><span class=\"sep\"></span>\n        <span>Lombardia</span><span class=\"sep\"></span>\n        <span>Italia</span><span class=\"sep\"></span>\n        <span>Pallavolo · Calcio · Basket</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== COSA FACCIAMO QUEST'ESTATE ============== -->\n  <section id=\"estate\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Cosa facciamo quest'estate</span>\n          <h2 style=\"margin-top:18px;\">L'estate 2026,<br>sui campi, <span style=\"color:var(--accent);\">gratuita.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Per il basket il torneo è già confermato: Mastercage. Per pallavolo e calcio\n          stiamo ancora scegliendo. Non vendiamo niente — costruiamo la prova che funziona.\n        </p>\n      </div>\n\n      <div class=\"summer\">\n        <div class=\"summer-prose\">\n          <p>\n            Gli organizzatori ci mandano le riprese delle partite, anche grezze, anche da una telecamera fissa.\n            La nostra pipeline AI riconosce i momenti chiave: ace, gol, schiacciate, punti decisivi.\n          </p>\n          <p>\n            Entro 24 ore restituiamo gli highlights del match e una serie di clip verticali pronte per Instagram,\n            TikTok e i canali della società.\n          </p>\n          <div class=\"pull\">Disponibile gratuitamente,<br>solo durante l'estate.</div>\n          <p>\n            Quello che chiediamo in cambio è semplice: feedback onesto, accesso al torneo per riprese,\n            e il permesso di usare il lavoro come vetrina di quello che Rooki sa fare.\n          </p>\n        </div>\n\n        <div class=\"pillars\">\n          <div class=\"pillar volley\">\n            <div class=\"swatch\" aria-hidden=\"true\"></div>\n            <div class=\"body\">\n              <div class=\"nm\">Pallavolo</div>\n              <div class=\"meta\">Set, ace, muri, top scorer</div>\n            </div>\n            <div class=\"ask\">Cerchiamo un torneo</div>\n          </div>\n\n          <div class=\"pillar soccer\">\n            <div class=\"swatch\" aria-hidden=\"true\"></div>\n            <div class=\"body\">\n              <div class=\"nm\">Calcio</div>\n              <div class=\"meta\">Gol, occasioni, parate decisive</div>\n            </div>\n            <div class=\"ask\">Cerchiamo un torneo</div>\n          </div>\n\n          <div class=\"pillar basket\">\n            <div class=\"swatch\" aria-hidden=\"true\"></div>\n            <div class=\"body\">\n              <div class=\"nm\">Basket · Mastercage</div>\n              <div class=\"meta\">Top plays, triple, recuperi</div>\n            </div>\n            <div class=\"ask confirmed\">Confermato</div>\n          </div>\n\n          <div class=\"free-banner\">\n            <span class=\"label\">Fase 1 · Gratuito</span>\n            <span class=\"text\">Disponibile gratuitamente solo durante la stagione estiva. Nessuna fee, nessun abbonamento, nessun trucco.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== COSA RICEVI ============== -->\n  <section id=\"ricevi\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Cosa ricevi</span>\n          <h2 style=\"margin-top:18px;\">Un pacchetto pronto.<br>Entro <span style=\"color:var(--accent);\">24 ore.</span></h2>\n        </div>\n        <p class=\"lead\">\n          Tu ci mandi le riprese — anche da telefono, anche da telecamera fissa.\n          Noi ti riconsegnamo un set di contenuti pubblicabili senza ulteriori passaggi.\n        </p>\n      </div>\n\n      <div class=\"deliv-list\">\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\"></rect>\n              <path d=\"m10 10 5 2-5 2z\" fill=\"currentColor\"></path>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Highlights match</div>\n            <div class=\"desc\">Il riassunto della partita, montato e sincronizzato. Pronto per YouTube e per il canale del torneo.</div>\n          </div>\n          <div class=\"qty\">1 video<span class=\"sub\">2–4 min · 16:9</span></div>\n        </div>\n\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"6\" y=\"3\" width=\"12\" height=\"18\" rx=\"2\"></rect>\n              <circle cx=\"12\" cy=\"17\" r=\"0.8\" fill=\"currentColor\"></circle>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Clip social verticali</div>\n            <div class=\"desc\">Tagliate per Instagram Reels, TikTok e Shorts. Ognuna autonoma, ognuna pubblicabile.</div>\n          </div>\n          <div class=\"qty\">5–8 clip<span class=\"sub\">15–45s · 9:16</span></div>\n        </div>\n\n        <div class=\"deliv-row\">\n          <div class=\"ic\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"></rect>\n              <path d=\"M3 14l5-4 4 3 4-5 5 4\"></path>\n            </svg>\n          </div>\n          <div class=\"body\">\n            <div class=\"nm\">Consegna su cloud</div>\n            <div class=\"desc\">Link Drive o WeTransfer con tutti i file pronti al download. Niente upload, niente tool da imparare.</div>\n          </div>\n          <div class=\"qty\">≤ 24 ore<span class=\"sub\">Dal ricevimento</span></div>\n        </div>\n      </div>\n\n      <div class=\"swap\">\n        <div class=\"col you\">\n          <div class=\"role\">Voi</div>\n          <div class=\"lbl\">Tu ci dai</div>\n          <ul>\n            <li>Le riprese delle partite, anche grezze.</li>\n            <li>Il permesso di riprendere al campo.</li>\n            <li>Feedback onesto sul lavoro fatto.</li>\n          </ul>\n        </div>\n        <div class=\"col us\">\n          <div class=\"role\">Noi</div>\n          <div class=\"lbl\">Noi ti diamo</div>\n          <ul>\n            <li>Tutta la produzione video gratuita durante la stagione estiva.</li>\n            <li>Tempi rapidi: consegna entro 24 ore dal ricevimento.</li>\n            <li>File pronti al download, senza watermark Rooki.</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== DOVE STIAMO ANDANDO ============== -->\n  <section id=\"dove-andiamo\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Dove stiamo andando</span>\n          <h2 style=\"margin-top:18px;\">Tre atti.<br>Una direzione sola.</h2>\n        </div>\n        <p class=\"lead\">\n          Rooki non nasce per fare montaggi. Nasce per cambiare il modo in cui lo sport\n          dilettantistico viene visto, raccontato, vissuto. Ecco come ci arriviamo.\n        </p>\n      </div>\n\n      <div class=\"roadmap-track\">\n        <article class=\"phase active\">\n          <div class=\"head\">\n            <span>Fase 01 · Estate 2026</span>\n            <span class=\"status\">In corso</span>\n          </div>\n          <div class=\"num\">01</div>\n          <h3>Costruiamo<br>la prova.</h3>\n          <p>Tornei estivi di alto livello — Mastercage confermato per il basket, pallavolo e calcio in selezione — con produzione video gratuita e consegna in 24 ore. Dimostriamo che il modello regge prima di scalare.</p>\n        </article>\n\n        <article class=\"phase\">\n          <div class=\"head\">\n            <span>Fase 02 · 2026 — 2027</span>\n            <span class=\"status\">Prossimo passo</span>\n          </div>\n          <div class=\"num\">02</div>\n          <h3>Le società<br>filmano, noi trasformiamo.</h3>\n          <p>Le società filmano le partite della stagione regolare e ci mandano il video grezzo — nessuna crew esterna. La nostra pipeline AI lo trasforma in highlights e clip social pronti in 24 ore, su scala di campionato. Affianchiamo report tecnici per giocatori e staff: dati di partita, momenti chiave, analisi individuali.</p>\n        </article>\n\n        <article class=\"phase\">\n          <div class=\"head\">\n            <span>Fase 03 · Visione</span>\n            <span class=\"status\">Orizzonte</span>\n          </div>\n          <div class=\"num\">03</div>\n          <h3>Federazioni<br>e apertura al pubblico.</h3>\n          <p>Accordi strutturali con le federazioni e una piattaforma aperta a tutti, dai campionati amatoriali ai settori giovanili. Lo standard nuovo.</p>\n        </article>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== FAQ ============== -->\n  <section id=\"faq\">\n    <div class=\"wrap\">\n      <div class=\"section-head\">\n        <div>\n          <span class=\"eyebrow\">Domande frequenti</span>\n          <h2 style=\"margin-top:18px;\">Le risposte<br>che ti servono.</h2>\n        </div>\n        <p class=\"lead\">\n          Le domande che ci fanno gli organizzatori al primo contatto. Se ne hai altre,\n          scrivici — rispondiamo entro un giorno.\n        </p>\n      </div>\n\n      <div class=\"faq-grid\">\n        <details class=\"faq\">\n          <summary>Che riprese servono per partire?</summary>\n          <p class=\"ans\">Bastano riprese complete della partita, anche da telecamera fissa o smartphone. Non servono multicamera né regia. Più la ripresa è stabile e con campo intero meglio è — ma sappiamo lavorare anche con materiale grezzo.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Quanto costa?</summary>\n          <p class=\"ans\">Il servizio è disponibile gratuitamente solo durante la stagione estiva 2026, per gli organizzatori dei tornei selezionati (Mastercage è già confermato per il basket; pallavolo e calcio in selezione). Fuori stagione il modello cambia: nessuna fee nascosta, nessun abbonamento. In cambio chiediamo feedback e il permesso di usare il lavoro come vetrina.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Come vi mando i video?</summary>\n          <p class=\"ans\">Un link a Google Drive, WeTransfer, Dropbox o qualsiasi cloud a tua scelta. Non devi imparare a usare nessuna piattaforma — il flusso è quello che già usi.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Davvero in 24 ore?</summary>\n          <p class=\"ans\">Sì. Dal momento in cui riceviamo le riprese complete, consegniamo entro un giorno. Per i match serali significa highlights pronti per la mattina dopo, in tempo per i social del torneo.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Cos'è una pipeline AI?</summary>\n          <p class=\"ans\">È il sistema che fa il lavoro pesante prima del nostro editor: guarda le riprese della partita e riconosce in automatico i momenti che contano — ace, muri, gol, parate, schiacciate, triple, punti decisivi. Così invece di rivedere ore di video a mano, partiamo già dalle azioni giuste e ci concentriamo sul montaggio. Per voi organizzatori cambia una cosa sola: tempi rapidi e qualità costante, anche per partite intere.</p>\n        </details>\n        <details class=\"faq\">\n          <summary>Se le riprese sono brutte, cosa succede?</summary>\n          <p class=\"ans\">Ci adattiamo. Possiamo lavorare con riprese imperfette: stabilizziamo, riquadriamo, sceglamo le inquadrature migliori. Se il materiale è davvero inutilizzabile lo diciamo subito, prima di iniziare.</p>\n        </details>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== EN SECTION ============== -->\n  <section class=\"en\" id=\"en\" lang=\"en\">\n    <div class=\"wrap\">\n      <div class=\"en-grid\">\n        <div>\n          <span class=\"eyebrow\">EN</span>\n          <h2 style=\"margin-top:18px;\">What is <span class=\"accent\">Rooki?</span></h2>\n\n          <div class=\"en-blocks\">\n            <div class=\"blk\">\n              <span class=\"lbl\">What we do</span>\n              <p>Rooki turns raw match footage from volleyball, football and basketball games into ready-to-publish highlights and short-form social clips — delivered within 24 hours, using a custom-built AI pipeline.</p>\n            </div>\n            <div class=\"blk\">\n              <span class=\"lbl\">Who we are</span>\n              <p>Three founders based in Varese, Lombardia. We know amateur sport from the inside — and we're building the tools to make it visible.</p>\n            </div>\n            <div class=\"blk\">\n              <span class=\"lbl\">Phase 1 — Now</span>\n              <p>This summer we're working with high-level amateur tournaments for free. We receive the raw footage, we return the content. No cost, no commitment.</p>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"en-contact\">\n            <h3>Interested?</h3>\n            <p>If you're a tournament organiser, a sports federation, or just curious about what we're building — write to us. We reply within 24 hours.</p>\n            <a class=\"btn primary\" href=\"mailto:lorenzo.marciandi@rooki.video?subject=Hello%20Rooki\">\n              Write to us\n              <svg class=\"arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17 17 7\"></path><path d=\"M8 7h9v9\"></path></svg>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============== FOOTER ============== -->\n  <footer>\n    <div class=\"wrap\">\n      <div class=\"foot-line\">\n        <span class=\"mark\">ROOKI<span class=\"dot\"></span></span>\n        <span class=\"sep\"></span>\n        <span>Varese, Italia</span>\n        <span class=\"sep\"></span>\n        <span>2025</span>\n      </div>\n    </div>\n  </footer>\n\n</main>";

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
      navObserver?.disconnect();
      revealObserver?.disconnect();
    };
  }, []);
}

export default function App() {
  useRookiPageEffects();

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
