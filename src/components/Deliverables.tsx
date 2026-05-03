import { siteContent } from "../content/siteContent";

export function Deliverables() {
  const { deliverables } = siteContent;

  return (
    <section id="ricevi" aria-labelledby="deliverables-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{deliverables.eyebrow}</span>
            <h2 id="deliverables-title">{deliverables.title}</h2>
          </div>
          <p className="lead">{deliverables.intro}</p>
        </div>
        <div className="deliv-grid">
          <div className="demo-stack" aria-label="Esempi di clip verticali">
            {deliverables.demos.map((demo) => (
              <article className={`clip-card ${demo.tone}`} key={demo.code}>
                <div className="clip-top">
                  <span>{demo.code}</span>
                  <span>{demo.time}</span>
                </div>
                <span className="play" aria-hidden="true" />
                <div>
                  <h3>{demo.title}</h3>
                  <p>{demo.meta}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="deliv-list">
            {deliverables.items.map((item) => (
              <article className="deliv-row" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <strong>
                  {item.quantity}
                  <span>{item.format}</span>
                </strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
