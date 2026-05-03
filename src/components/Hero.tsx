import { siteContent } from "../content/siteContent";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <p className="eyebrow">Stage 1 - Estate 2026</p>
        <h1 id="hero-title">{siteContent.hero.headline}</h1>
        <p className="hero-sub">{siteContent.hero.subhead}</p>
        <div className="hero-meta">
          <a className="btn primary large" href={siteContent.contactHref}>
            {siteContent.hero.cta}
          </a>
          <span className="availability">
            <span className="live-dot" aria-hidden="true" />
            Pilot gratuito
          </span>
        </div>
        <div className="hero-strip" aria-label="Sport coperti">
          {siteContent.hero.sports.map((sport) => (
            <span className="tag" key={sport.label}>
              <span className={`dot-color bg-${sport.tone}`} aria-hidden="true" />
              {sport.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
