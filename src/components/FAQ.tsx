import { siteContent } from "../content/siteContent";

export function FAQ() {
  const { faq } = siteContent;

  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{faq.eyebrow}</span>
            <h2 id="faq-title">{faq.title}</h2>
          </div>
          <p className="lead">{faq.intro}</p>
        </div>
        <div className="faq-grid">
          {faq.items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
