import React from "react";

const WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5513974221127";

const wa = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

type Item = {
  title: string;
  text: string;
};

export default function SecondaryPage({
  eyebrow,
  title,
  intro,
  items,
  ctaMessage,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: Item[];
  ctaMessage: string;
}) {
  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="/" aria-label="INFO Soluções Tecnologia">
            <img src="/brand/logo-light.webp" alt="INFO Soluções Tecnologia" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="/solucoes">Soluções</a>
            <a href="/segmentos">Segmentos</a>
            <a href="/sobre">Sobre a Info</a>
            <a href="/suporte">Suporte</a>
            <a href="/contato">Contato</a>
          </nav>
          <a
            className="button button-small"
            href={wa(ctaMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
          <details className="mobile-menu">
            <summary aria-label="Abrir menu">Menu</summary>
            <div className="mobile-menu-panel">
              <a href="/solucoes">Soluções</a>
              <a href="/segmentos">Segmentos</a>
              <a href="/sobre">Sobre a Info</a>
              <a href="/suporte">Suporte</a>
              <a href="/contato">Contato</a>
            </div>
          </details>
        </div>
      </header>

      <section className="subpage-hero">
        <div className="shell subpage-hero-grid">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            <div className="hero-actions">
              <a
                className="button"
                href={wa(ctaMessage)}
                target="_blank"
                rel="noreferrer"
              >
                Falar com um especialista
              </a>
              <a className="button button-ghost" href="/">
                Voltar para o início
              </a>
            </div>
          </div>
          <div className="subpage-brand-card">
            <img src="/brand/mark.webp" alt="" />
            <span>INFO Soluções Tecnologia</span>
            <strong>Tecnologia que impulsiona resultados.</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="content-grid">
            {items.map((item, index) => (
              <article className="content-card" key={item.title}>
                <span>0{index + 1}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-card">
          <div>
            <span className="section-label section-label-light">Próximo passo</span>
            <h2>Vamos entender o cenário antes de indicar a solução.</h2>
            <p>
              Conte como sua empresa trabalha hoje e onde estão os gargalos. A conversa começa pelo
              problema, não pelo produto.
            </p>
          </div>
          <a
            className="button button-light button-large"
            href={wa(ctaMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Conversar com a Info
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <img src="/brand/logo-dark.webp" alt="INFO Soluções Tecnologia" />
            <p>Sistemas, automação comercial, suporte e inteligência aplicada à operação.</p>
          </div>
          <div>
            <strong>Navegação</strong>
            <a href="/solucoes">Soluções</a>
            <a href="/segmentos">Segmentos</a>
            <a href="/sobre">Sobre</a>
          </div>
          <div>
            <strong>Atendimento</strong>
            <a href="/suporte">Suporte</a>
            <a href="/contato">Contato</a>
            <a href="/politica-de-privacidade">Privacidade</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 INFO Soluções Tecnologia</span>
          <span>Tecnologia que impulsiona resultados.</span>
        </div>
      </footer>
    </main>
  );
}
