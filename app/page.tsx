const WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5513974221127";

const wa = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const solutionCards = [
  {
    icon: "▣",
    title: "PDV e Automação Comercial",
    text: "Sistema completo para vendas, controle de estoque e emissão fiscal.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=82",
  },
  {
    icon: "⌁",
    title: "Restaurantes e Alimentação",
    text: "Soluções para bares, restaurantes, lanchonetes e similares.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=82",
  },
  {
    icon: "▯",
    title: "Totem de Autoatendimento",
    text: "Mais agilidade e autonomia para seus clientes.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=82",
  },
  {
    icon: "◉",
    title: "Suporte e Implantação",
    text: "Equipe especializada para implantar, treinar e acompanhar.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82",
  },
  {
    icon: "▥",
    title: "Inteligência Artificial",
    text: "Transforme os dados da sua operação em decisões mais lucrativas.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82",
  },
];

const segments = [
  {
    title: "Mercados e Minimercados",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=82",
  },
  {
    title: "Restaurantes e Bares",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
  },
  {
    title: "Padarias e Confeitarias",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=82",
  },
  {
    title: "Lojas e Serviços",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=82",
  },
];

const reviews = [
  {
    quote:
      "Atende todas as necessidades, temos em 4 lojas e atende cada uma conforme sua necessidade. Super indico! Suporte maravilhoso, sempre presente.",
    author: "Pizzaria Julia",
  },
  {
    quote:
      "O sistema é excelente, melhorou muito o nosso operacional e consequentemente o atendimento ao cliente.",
    author: "Marília Maciel Crepaldi",
  },
  {
    quote:
      "Ótimo atendimento, super rápido e suporte maravilhoso.",
    author: "Flávia Nunes Andrade",
  },
];

export default function Home() {
  return (
    <main className="home2">
      <header className="home2-header">
        <div className="home2-shell home2-header-inner">
          <a className="home2-logo" href="#inicio" aria-label="INFO Soluções Tecnologia">
            <img src="/brand/logo-light.webp" alt="INFO Soluções Tecnologia" />
          </a>

          <nav className="home2-nav" aria-label="Navegação principal">
            <a href="/solucoes">Automação Comercial <span>⌄</span></a>
            <a href="#inteligencia">Info Inteligência <span>⌄</span></a>
            <a href="/segmentos">Segmentos <span>⌄</span></a>
            <a href="#clientes">Clientes</a>
            <a href="/sobre">Sobre nós</a>
          </nav>

          <a
            className="home2-whatsapp"
            href={wa("Olá! Conheci a Info pelo site e gostaria de falar com um especialista.")}
            target="_blank"
            rel="noreferrer"
          >
            <span className="home2-whatsapp-icon">◉</span>
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <section className="home2-hero" id="inicio">
        <div className="home2-hero-bg" aria-hidden="true" />
        <div className="home2-shell home2-hero-grid">
          <div className="home2-hero-copy">
            <div className="home2-eyebrow">
              AUTOMAÇÃO COMERCIAL · SISTEMAS · EMISSÃO FISCAL · INTELIGÊNCIA ARTIFICIAL
            </div>

            <h1>
              Tecnologia para sua empresa vender melhor, trabalhar com mais controle e{" "}
              <span>evoluir com inteligência.</span>
            </h1>

            <p>
              Sistemas, PDV, emissão fiscal, implantação e suporte na sua loja. Depois,
              inteligência artificial em cima dos dados da sua operação para gerar mais resultados.
            </p>

            <div className="home2-hero-actions">
              <a
                className="home2-primary-button"
                href={wa(
                  "Olá! Conheci a Info pelo site e gostaria de entender qual solução é mais adequada para minha empresa."
                )}
                target="_blank"
                rel="noreferrer"
              >
                <span>◉</span>
                Falar com um especialista
              </a>
              <a className="home2-secondary-button" href="#solucoes">
                Conhecer soluções <span>→</span>
              </a>
            </div>

            <div className="home2-trust">
              <div className="home2-google">
                <div className="home2-google-g">G</div>
                <div>
                  <strong>5,0 no Google</strong>
                  <span>+ de 40 avaliações públicas</span>
                  <div className="home2-stars">★★★★★</div>
                </div>
              </div>
              <div className="home2-trust-item">
                <span className="home2-trust-icon">⌘</span>
                <div>
                  <strong>16 anos</strong>
                  <span>de mercado</span>
                </div>
              </div>
              <div className="home2-trust-item">
                <span className="home2-trust-icon">◎</span>
                <div>
                  <strong>Atendimento</strong>
                  <span>presencial e remoto</span>
                </div>
              </div>
            </div>
          </div>

          <div className="home2-hero-photo" aria-label="Automação comercial em ambiente de varejo">
            <div className="home2-photo-overlay" />
            <div className="home2-photo-badge">
              <img src="/brand/mark.webp" alt="" />
              <span>Operação conectada</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home2-solutions" id="solucoes">
        <div className="home2-shell">
          <div className="home2-section-top">
            <div>
              <h2>Soluções para a operação real do seu negócio</h2>
              <p>Tecnologia, suporte e inteligência para o dia a dia da sua empresa.</p>
            </div>
            <a href="/solucoes">Ver todas as soluções →</a>
          </div>

          <div className="home2-solution-grid">
            {solutionCards.map((item) => (
              <article className="home2-solution-card" key={item.title}>
                <div className="home2-solution-copy">
                  <div className="home2-solution-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <img src={item.image} alt="" loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home2-middle">
        <div className="home2-shell home2-middle-grid">
          <div className="home2-segments">
            <div className="home2-block-heading">
              <h2>Segmentos que atendemos</h2>
              <p>Soluções sob medida para diferentes tipos de negócio.</p>
            </div>

            <div className="home2-segment-grid">
              {segments.map((segment) => (
                <a className="home2-segment-card" href="/segmentos" key={segment.title}>
                  <img src={segment.image} alt="" loading="lazy" />
                  <div className="home2-segment-shade" />
                  <strong>{segment.title}</strong>
                </a>
              ))}
            </div>
          </div>

          <div className="home2-reviews" id="clientes">
            <div className="home2-block-heading home2-rating-heading">
              <h2>Avaliações no Google <span>★★★★★</span> <b>5,0</b></h2>
              <p>+ de 40 avaliações públicas de clientes que confiam no nosso trabalho.</p>
            </div>

            <div className="home2-review-grid">
              {reviews.map((review) => (
                <figure className="home2-review-card" key={review.author}>
                  <div className="home2-review-top">
                    <span className="home2-avatar">●</span>
                    <span className="home2-stars">★★★★★</span>
                  </div>
                  <blockquote>“{review.quote}”</blockquote>
                  <figcaption>{review.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="home2-flow" id="inteligencia">
            <div className="home2-block-heading">
              <h2>Da operação à inteligência</h2>
              <p>Seus dados viram informação. E informação vira resultado.</p>
            </div>

            <div className="home2-flow-line">
              <div className="home2-flow-step">
                <span>🛒</span>
                <strong>Caixa</strong>
                <small>Vendas registradas no PDV.</small>
              </div>
              <b>→</b>
              <div className="home2-flow-step">
                <span>◉</span>
                <strong>Dados</strong>
                <small>Informações da operação.</small>
              </div>
              <b>→</b>
              <div className="home2-flow-step">
                <span>⚙</span>
                <strong>Automação</strong>
                <small>Processos mais rápidos e seguros.</small>
              </div>
              <b>→</b>
              <div className="home2-flow-step">
                <span>▥</span>
                <strong>Decisão</strong>
                <small>Inteligência para vender mais e reduzir custos.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home2-cta" id="contato">
        <div className="home2-shell home2-cta-card">
          <div className="home2-cta-copy">
            <span>VAMOS EVOLUIR O SEU NEGÓCIO?</span>
            <h2>Fale com um especialista e descubra a melhor solução para a sua empresa.</h2>
            <p>Atendimento rápido, consultivo e sem complicação.</p>
          </div>

          <a
            className="home2-cta-button"
            href={wa("Olá! Quero conversar com um especialista da Info sobre a minha empresa.")}
            target="_blank"
            rel="noreferrer"
          >
            <span>◉</span>
            Falar no WhatsApp
            <b>›</b>
          </a>

          <div className="home2-cta-benefits">
            <div><span>☎</span><small>Atendimento<br/>especializado</small></div>
            <div><span>♡</span><small>Soluções sob medida<br/>para o seu segmento</small></div>
            <div><span>⌁</span><small>Implantação e suporte<br/>contínuo</small></div>
          </div>
        </div>
      </section>

      <footer className="home2-footer">
        <div className="home2-shell home2-footer-main">
          <img className="home2-footer-logo" src="/brand/logo-light.webp" alt="INFO Soluções Tecnologia" />
          <nav>
            <a href="/solucoes">Automação Comercial</a>
            <a href="#inteligencia">Info Inteligência</a>
            <a href="/segmentos">Segmentos</a>
            <a href="#clientes">Clientes</a>
            <a href="/sobre">Sobre nós</a>
            <a href="/contato">Contato</a>
          </nav>
          <div className="home2-footer-contact">
            <span>Baixada Santista e São Paulo</span>
            <a href="tel:+551330184840">(13) 3018-4840</a>
          </div>
        </div>
        <div className="home2-shell home2-footer-bottom">
          <span>© 2026 INFO Soluções Tecnologia</span>
          <span>Tecnologia que impulsiona resultados.</span>
        </div>
      </footer>
    </main>
  );
}
