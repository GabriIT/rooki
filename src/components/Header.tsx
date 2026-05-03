import { siteContent } from "../content/siteContent";

export function Header() {
  return (
    <header className="header">
      <div className="wrap nav-inner">
        <a className="wordmark" href="#top" aria-label="ROOKI home">
          ROOKI<span aria-hidden="true" />
        </a>
        <nav className="nav-links" aria-label="Navigazione principale">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn primary" href={siteContent.contactHref}>
          Scrivici
        </a>
      </div>
    </header>
  );
}
