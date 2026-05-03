import { siteContent } from "../content/siteContent";

export function International() {
  const { international } = siteContent;

  return (
    <section className="international" id="en" lang="en" aria-labelledby="international-title">
      <div className="wrap international-grid">
        <div>
          <span className="lang-pill">{international.eyebrow}</span>
          <h2 id="international-title">{international.title}</h2>
        </div>
        <p>{international.body}</p>
      </div>
    </section>
  );
}
