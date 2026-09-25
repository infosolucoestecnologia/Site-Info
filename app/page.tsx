const WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5513974221127";

const wa = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const solutions = [
  {
    kicker: "Automação comercial",
    title: "PDV e gestão para o dia a dia funcionar",
    text: "Vendas, estoque, financeiro e emissão fiscal organizados no mesmo fluxo, com implantação acompanhada.",
    tag: "Sistema + operação",
  },
  {
    kicker: "Alimentação",
    title: "Restaurante, bar e padaria sem informação solta",
    text: "Mesa, comanda, delivery, cozinha, impressão e caixa conversando para reduzir retrabalho.",
    tag: "Atendimento + cozinha",
  },
  {
    kicker: "Autoatendimento",
    title: "Totem quando ele realmente melhora o fluxo",
    text: "Mais agilidade para pedidos e pagamento sem transformar tecnologia em obstáculo para o cliente.",
    tag: "Experiência + escala",
  },
  {
    kicker: "Implantação e suporte",
    title: "Tecnologia instalada por quem entende a operação",
    text: "Configuração, treinamento, acompanhamento remoto e presença no local quando o problema exige.",
    tag: "Próximo + especializado",
  },
  {
    kicker: "Info Inteligência",
    title: "IA aplicada ao processo, não à apresentação",
    text: "Automação de tarefas, organização de atendimento e análise de dados com pessoas no controle.",
    tag: "Dados + decisão",
  },
];

const segments = [
  ["Mercados e minimercados", "Caixa, estoque, balança, compras e fiscal sem travar o balcão."],
  ["Restaurantes e pizzarias", "Comandas, mesas, cozinha, delivery e caixa no mesmo fluxo."],
  ["Padarias e lanchonetes", "Produção, atendimento, balança, impressão e venda com mais organização."],
  ["Lojas e serviços", "Venda, estoque, ordem de serviço, financeiro e rotina administrativa."],
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
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#inicio" aria-label="INFO Soluções Tecnologia">
            <img src="/brand/logo-light.webp" alt="INFO Soluções Tecnologia" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#segmentos">Segmentos</a>
            <a href="#inteligencia">Info Inteligência</a>
            <a href="#clientes">Clientes</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            className="button button-small"
            href={wa("Olá! Conheci a Info pelo site e gostaria de falar com um especialista.")}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">Menu</summary>
            <div className="mobile-menu-panel">
              <a href="#solucoes">Soluções</a>
              <a href="#segmentos">Segmentos</a>
              <a href="#inteligencia">Info Inteligência</a>
              <a href="#clientes">Clientes</a>
              <a href="#contato">Contato</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">AUTOMAÇÃO COMERCIAL · SUPORTE · INTELIGÊNCIA ARTIFICIAL</div>
            <h1>
              Tecnologia para sua empresa <span>funcionar melhor</span> e evoluir com inteligência.
            </h1>
            <p className="hero-lead">
              Sistemas, PDV, emissão fiscal, implantação e suporte para organizar a operação.
              Depois, inteligência aplicada aos dados e processos que sua empresa já produz.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={wa("Olá! Conheci a Info pelo site e gostaria de entender qual solução é mais adequada para minha empresa.")}
                target="_blank"
                rel="noreferrer"
              >
                Falar com um especialista
              </a>
              <a className="button button-ghost" href="#solucoes">
                Conhecer as soluções
              </a>
            </div>

            <div className="trust-row" aria-label="Indicadores de confiança">
              <div>
                <strong>5,0</strong>
                <span>avaliação no Google</span>
              </div>
              <div>
                <strong>16 anos</strong>
                <span>de mercado</span>
              </div>
              <div>
                <strong>Presencial + remoto</strong>
                <span>atendimento próximo</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Visão da operação conectada">
            <div className="visual-topbar">
              <span>Operação em tempo real</span>
              <span className="status-dot">Ativo</span>
            </div>
            <div className="visual-main">
              <div className="visual-heading">
                <img src="/brand/mark.webp" alt="" />
                <div>
                  <span>Ecossistema INFO</span>
                  <strong>Da venda à decisão</strong>
                </div>
              </div>
              <div className="visual-flow">
                <div className="flow-card">
                  <span>01</span>
                  <strong>Venda</strong>
                  <small>PDV e fiscal</small>
                </div>
                <div className="flow-line" />
                <div className="flow-card">
                  <span>02</span>
                  <strong>Controle</strong>
                  <small>estoque e financeiro</small>
                </div>
                <div className="flow-line" />
                <div className="flow-card">
                  <span>03</span>
                  <strong>Inteligência</strong>
                  <small>dados e automação</small>
                </div>
              </div>
              <div className="visual-bottom">
                <div>
                  <small>Implantação</small>
                  <strong>Acompanhada</strong>
                </div>
                <div>
                  <small>Suporte</small>
                  <strong>Especializado</strong>
                </div>
                <div>
                  <small>Decisão</small>
                  <strong>Humano no controle</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-strip">
        <div className="shell problem-grid">
          <div className="problem-intro">
            <span className="section-label">Problemas que resolvemos</span>
            <h2>Antes da tecnologia, vem o que está travando seu dia.</h2>
          </div>
          {[
            ["Caixa lento", "Fila cresce, atendimento trava e todo mundo perde tempo."],
            ["Estoque sem controle", "Compra no escuro, produto faltando e dinheiro parado."],
            ["Informação espalhada", "Vendas, financeiro e fiscal em lugares diferentes."],
            ["Processo manual", "Equipe copiando dados e repetindo tarefas que poderiam ser automatizadas."],
          ].map(([title, text], index) => (
            <article className="problem-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="solucoes">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="section-label">Soluções</span>
              <h2>Tecnologia para a operação real do seu negócio.</h2>
            </div>
            <p>
              Não começamos por módulo ou marca. Primeiro entendemos como sua empresa vende,
              atende e controla. Depois montamos a solução adequada.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map((item, index) => (
              <article className="solution-card" key={item.title}>
                <div className="solution-number">0{index + 1}</div>
                <span className="solution-kicker">{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="solution-tag">{item.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="segmentos">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="section-label">Segmentos</span>
              <h2>Seu negócio tem uma rotina própria. A tecnologia também precisa ter.</h2>
            </div>
            <p>
              Configuração, implantação e suporte mudam conforme a operação. O objetivo é fazer
              o sistema trabalhar do jeito certo para cada empresa.
            </p>
          </div>

          <div className="segment-grid">
            {segments.map(([title, text], index) => (
              <article className="segment-card" key={title}>
                <div className={`segment-art art-${index + 1}`}>
                  <span>0{index + 1}</span>
                </div>
                <div className="segment-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section intelligence" id="inteligencia">
        <div className="shell intelligence-grid">
          <div>
            <span className="section-label section-label-light">INFO INTELIGÊNCIA</span>
            <h2>IA como copiloto. Pessoa no controle.</h2>
            <p>
              A inteligência entra onde existe repetição, informação demais ou oportunidade de
              decisão melhor. Sem vender promessa antes de entender o processo.
            </p>
            <a
              className="button button-light"
              href={wa("Olá! Quero entender como a Info pode aplicar automação ou inteligência artificial na minha empresa.")}
              target="_blank"
              rel="noreferrer"
            >
              Conversar sobre IA e automação
            </a>
          </div>
          <div className="intelligence-map">
            {[
              ["Atendimento", "IA responde o repetitivo", "Humano assume quando precisa"],
              ["Dados", "Informação organizada", "Gestor decide com contexto"],
              ["Processos", "Tarefas automatizadas", "Histórico e auditoria"],
            ].map(([title, middle, end]) => (
              <div className="intelligence-row" key={title}>
                <strong>{title}</strong>
                <span>{middle}</span>
                <span className="arrow">→</span>
                <span>{end}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="clientes">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="section-label">Prova social</span>
              <h2>Atendimento que aparece nas avaliações.</h2>
            </div>
            <p>
              Menos adjetivo e mais evidência: avaliações públicas de clientes sobre sistema,
              implantação e suporte.
            </p>
          </div>

          <div className="rating-banner">
            <div className="rating-score">5,0</div>
            <div>
              <div className="stars" aria-label="5 estrelas">★★★★★</div>
              <strong>+40 avaliações públicas no Google</strong>
            </div>
            <a href="https://www.google.com/search?q=Info+Solu%C3%A7%C3%B5es+Tecnologia+Guaruj%C3%A1" target="_blank" rel="noreferrer">
              Ver avaliações
            </a>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <figure className="review-card" key={review.author}>
                <div className="stars" aria-hidden="true">★★★★★</div>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>{review.author} · avaliação pública no Google</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section how">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="section-label">Como trabalhamos</span>
              <h2>Não acaba na instalação. É aí que começa.</h2>
            </div>
          </div>
          <div className="steps">
            {[
              ["01", "Entendemos", "Mapeamos a rotina antes de indicar tecnologia."],
              ["02", "Implantamos", "Configuramos para o seu jeito de vender e controlar."],
              ["03", "Treinamos", "Sua equipe aprende a usar no dia a dia."],
              ["04", "Acompanhamos", "Suporte remoto e presencial quando necessário."],
              ["05", "Evoluímos", "A tecnologia acompanha a operação até a automação e a IA."],
            ].map(([number, title, text]) => (
              <article className="step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div className="shell cta-card">
          <div>
            <span className="section-label section-label-light">Tecnologia que impulsiona resultados.</span>
            <h2>Descubra o que dá para melhorar primeiro na sua operação.</h2>
            <p>
              Uma conversa objetiva para entender o cenário e indicar o próximo passo sem empurrar
              solução que não faz sentido.
            </p>
          </div>
          <a
            className="button button-light button-large"
            href={wa("Olá! Quero conversar sobre a operação da minha empresa e entender o que a Info recomenda.")}
            target="_blank"
            rel="noreferrer"
          >
            Falar com um especialista
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <img src="/brand/logo-dark.webp" alt="INFO Soluções Tecnologia" />
            <p>
              Sistemas, automação comercial, suporte e inteligência aplicada à operação.
            </p>
          </div>
          <div>
            <strong>Soluções</strong>
            <a href="#solucoes">Automação comercial</a>
            <a href="#inteligencia">Info Inteligência</a>
            <a href="#segmentos">Segmentos</a>
          </div>
          <div>
            <strong>Atendimento</strong>
            <a href={wa("Olá! Preciso de atendimento da Info.")} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <span>Baixada Santista e São Paulo</span>
            <span>Presencial e remoto</span>
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
