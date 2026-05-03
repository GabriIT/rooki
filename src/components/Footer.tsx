import { siteContent } from "../content/siteContent";

export function Footer() {
  return (
    <footer>
      <div className="wrap foot-line">
        <span className="footer-mark">
          ROOKI<span aria-hidden="true" />
        </span>
        {siteContent.founders.people.map((person) => (
          <a key={person.email} href={`mailto:${person.email}`}>
            {person.email}
          </a>
        ))}
        <span>{siteContent.footerYear}</span>
      </div>
    </footer>
  );
}
