import { siteContent } from "../content/siteContent";

export function SummerPilot() {
  const { summer } = siteContent;

  return (
    <section id="estate" aria-labelledby="summer-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{summer.eyebrow}</span>
            <h2 id="summer-title">{summer.title}</h2>
          </div>
          <p className="lead">{summer.intro}</p>
        </div>
        <div className="summer">
          <div className="summer-prose">
            <p>{summer.paragraphs[0]}</p>
            <p>{summer.paragraphs[1]}</p>
            <div className="pull">{summer.pull}</div>
            <p>{summer.paragraphs[2]}</p>
          </div>
          <div className="pillars">
            {summer.tournaments.map((item) => (
              <article className={`pillar ${item.tone}`} key={`${item.sport}-${item.name || "open"}`}>
                <span className="swatch" aria-hidden="true" />
                <div>
                  <h3>
                    {item.sport}
                    {item.name ? ` - ${item.name}` : ""}
                  </h3>
                  <p>{item.details}</p>
                </div>
                <span className={item.status === "Confermato" ? "status confirmed" : "status"}>{item.status}</span>
              </article>
            ))}
            <div className="free-banner">
              <strong>Fase 1 - Gratuito</strong>
              <span>Disponibile gratuitamente solo durante la stagione estiva. Nessuna fee, nessun abbonamento.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
