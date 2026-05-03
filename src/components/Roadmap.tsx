import { siteContent } from "../content/siteContent";

export function Roadmap() {
  const { roadmap } = siteContent;

  return (
    <section id="dove-andiamo" aria-labelledby="roadmap-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{roadmap.eyebrow}</span>
            <h2 id="roadmap-title">{roadmap.title}</h2>
          </div>
          <p className="lead">{roadmap.intro}</p>
        </div>
        <div className="roadmap-track">
          {roadmap.phases.map((phase) => (
            <article className={phase.active ? "phase active" : "phase"} key={phase.number}>
              <div className="phase-head">
                <span>{phase.label}</span>
                <span>{phase.status}</span>
              </div>
              <div className="phase-num">{phase.number}</div>
              <h3>{phase.title}</h3>
              <p>{phase.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
