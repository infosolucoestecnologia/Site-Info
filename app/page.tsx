const WHATSAPP = "5513974221127";
const wa = (m:string)=>`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(m)}`;

const solutions=[
["▣","PDV e Automação Comercial","Sistema completo para vendas, controle de estoque e emissão fiscal.","https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=88"],
["⌁","Restaurantes e Alimentação","Soluções para bares, restaurantes, lanchonetes e similares.","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=88"],
["▯","Totem de Autoatendimento","Mais agilidade e autonomia para seus clientes.","https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=88"],
["◉","Suporte e Implantação","Equipe especializada para implantar, treinar e acompanhar.","https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=88"],
["▥","Inteligência Artificial","Transforme os dados da sua operação em decisões mais lucrativas.","https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=88"]
];

const segments=[
["Mercados e Minimercados","https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=88"],
["Restaurantes e Bares","https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=88"],
["Padarias e Confeitarias","https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=88"],
["Lojas e Serviços","https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=88"]
];

const reviews=[
["Atende todas as necessidades, temos em 4 lojas e atende cada uma conforme sua necessidade. Super indico! Suporte maravilhoso, sempre presente.","Pizzaria Julia"],
["O sistema é excelente, melhorou muito o nosso operacional e consequentemente o atendimento ao cliente.","Marília Maciel Crepaldi"],
["Ótimo atendimento, super rápido e suporte maravilhoso.","Flávia Nunes Andrade"]
];

export default function Home(){
return <main>
<header className="header"><div className="container nav">
<a className="brand" href="#inicio"><img src="/brand/logo-light.webp" alt="INFO Soluções Tecnologia"/></a>
<nav className="menu"><a href="#solucoes">Automação Comercial⌄</a><a href="#inteligencia">Info Inteligência⌄</a><a href="#segmentos">Segmentos⌄</a><a href="#clientes">Clientes</a><a href="#sobre">Sobre nós</a></nav>
<a className="btn btn-whatsapp small" href={wa("Olá! Conheci a Info pelo site e gostaria de falar com um especialista.")} target="_blank" rel="noreferrer">◉ Falar no WhatsApp</a>
</div></header>

<section className="hero" id="inicio"><div className="container hero-grid">
<div className="hero-copy">
<span className="eyebrow">AUTOMAÇÃO COMERCIAL · SISTEMAS · EMISSÃO FISCAL · INTELIGÊNCIA ARTIFICIAL</span>
<h1>Tecnologia para sua empresa vender melhor, trabalhar com mais controle e <span>evoluir com inteligência.</span></h1>
<p>Sistemas, PDV, emissão fiscal, implantação e suporte na sua loja. Depois, inteligência artificial em cima dos dados da sua operação para gerar mais resultados.</p>
<div className="hero-actions"><a className="btn btn-whatsapp" href={wa("Olá! Quero entender qual solução da Info é mais adequada para minha empresa.")} target="_blank" rel="noreferrer">◉ Falar com um especialista</a><a className="btn btn-outline" href="#solucoes">Conhecer soluções →</a></div>
<div className="trust">
<div className="trust-google"><span className="google">G</span><div><strong>5,0 no Google</strong><small>+ de 40 avaliações públicas</small><em>★★★★★</em></div></div>
<div className="trust-item"><span className="trust-icon">⌘</span><div><strong>16 anos</strong><small>de mercado</small></div></div>
<div className="trust-item"><span className="trust-icon">◎</span><div><strong>Atendimento</strong><small>presencial e remoto</small></div></div>
</div></div>
<div className="hero-photo"><div className="hero-badge"><img src="/brand/mark.webp" alt=""/><div><strong>Operação real</strong><span>tecnologia no dia a dia</span></div></div></div>
</div></section>

<section className="solutions" id="solucoes"><div className="container">
<div className="section-head"><div><h2>Soluções para a operação real do seu negócio</h2><p>Tecnologia, suporte e inteligência para o dia a dia da sua empresa.</p></div><a href="#contato">Ver todas as soluções →</a></div>
<div className="solution-grid">{solutions.map(([icon,title,text,image])=><article className="solution-card" key={title}><div className="solution-copy"><span className="solution-icon">{icon}</span><h3>{title}</h3><p>{text}</p></div><img src={image} alt="" loading="lazy"/></article>)}</div>
</div></section>

<section className="three-columns"><div className="container three-grid">
<section id="segmentos"><div className="mini-head"><h2>Segmentos que atendemos</h2><p>Soluções sob medida para diferentes tipos de negócio.</p></div><div className="segment-grid">{segments.map(([title,image])=><article className="segment-card" key={title}><img src={image} alt="" loading="lazy"/><span/><strong>{title}</strong></article>)}</div></section>
<section id="clientes"><div className="mini-head reviews-title"><h2>Avaliações no Google <span>★★★★★</span> <b>5,0</b></h2><p>+ de 40 avaliações públicas de clientes que confiam no nosso trabalho.</p></div><div className="review-grid">{reviews.map(([quote,author])=><figure className="review-card" key={author}><div className="review-stars">● <span>★★★★★</span></div><blockquote>“{quote}”</blockquote><figcaption>{author}</figcaption></figure>)}</div></section>
<section id="inteligencia"><div className="mini-head"><h2>Da operação à inteligência</h2><p>Seus dados viram informação. E informação vira resultado.</p></div><div className="flow">
<div className="flow-step"><span>🛒</span><strong>Caixa</strong><small>Vendas registradas no PDV.</small></div><b>→</b>
<div className="flow-step"><span>◉</span><strong>Dados</strong><small>Informações da operação.</small></div><b>→</b>
<div className="flow-step"><span>⚙</span><strong>Automação</strong><small>Processos mais rápidos e seguros.</small></div><b>→</b>
<div className="flow-step"><span>▥</span><strong>Decisão</strong><small>Inteligência para vender mais e reduzir custos.</small></div>
</div></section>
</div></section>

<section className="cta" id="contato"><div className="container cta-box"><div><span>VAMOS EVOLUIR O SEU NEGÓCIO?</span><h2>Fale com um especialista e descubra a melhor solução para a sua empresa.</h2><p>Atendimento rápido, consultivo e sem complicação.</p></div>
<a className="cta-button" href={wa("Olá! Quero conversar com um especialista da Info sobre minha empresa.")} target="_blank" rel="noreferrer">◉ Falar no WhatsApp ›</a>
<div className="cta-benefits"><div><span>☎</span><small>Atendimento<br/>especializado</small></div><div><span>♡</span><small>Soluções sob medida<br/>para o seu segmento</small></div><div><span>⌁</span><small>Implantação e suporte<br/>contínuo</small></div></div>
</div></section>

<footer className="footer" id="sobre"><div className="container footer-main"><img src="/brand/logo-light.webp" alt="INFO Soluções Tecnologia"/><nav><a href="#solucoes">Automação Comercial</a><a href="#inteligencia">Info Inteligência</a><a href="#segmentos">Segmentos</a><a href="#clientes">Clientes</a><a href="#sobre">Sobre nós</a><a href="#contato">Contato</a></nav><span>Baixada Santista e São Paulo</span></div><div className="container footer-bottom"><span>© 2026 INFO Soluções Tecnologia</span><span>Tecnologia que impulsiona resultados.</span></div></footer>
</main>
}