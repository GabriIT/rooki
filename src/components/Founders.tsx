import { siteContent } from "../content/siteContent";

export function Founders() {
  const { founders } = siteContent;

  return (
    <section id="chi-siamo" aria-labelledby="founders-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{founders.eyebrow}</span>
            <h2 id="founders-title">{founders.title}</h2>
          </div>
          <p className="lead">{founders.intro}</p>
        </div>
        <div className="founders">
          {founders.people.map((person) => (
            <article className="founder" key={person.email}>
              <div className="mono" aria-hidden="true">
                {person.initials}
              </div>
              <div>
                <h3>{person.name}</h3>
                <p className="role">{person.role}</p>
              </div>
              <p>{person.body}</p>
              <a className="mail" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </article>
          ))}
        </div>
        <p className="place">{founders.location}</p>
      </div>
    </section>
  );
}
