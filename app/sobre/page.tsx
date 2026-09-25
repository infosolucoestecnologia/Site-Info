import SecondaryPage from "@/components/SecondaryPage";

export default function SobrePage() {
  return (
    <SecondaryPage
      eyebrow="Sobre a Info"
      title="Tecnologia próxima de quem precisa fazer a operação funcionar."
      intro="A Info atua com sistemas, automação comercial, equipamentos, suporte e soluções inteligentes, sempre com foco no problema real do cliente."
      ctaMessage="Olá! Gostaria de conhecer melhor a Info e conversar sobre uma solução para minha empresa."
      items={[
        { title: "Atendimento próximo", text: "A relação não termina na contratação. A proposta é entender a rotina, acompanhar a implantação e continuar acessível quando a operação precisa." },
        { title: "Experiência prática", text: "A equipe lida com problemas reais de caixa, estoque, emissão fiscal, equipamentos, sistemas e atendimento." },
        { title: "Implantação acompanhada", text: "Configuração e orientação são parte do trabalho. O objetivo é colocar a solução para funcionar no contexto da empresa." },
        { title: "Solução adequada ao negócio", text: "A recomendação deve partir da necessidade e do processo, não de empurrar a mesma ferramenta para todos." },
        { title: "Presença regional", text: "Atuação próxima na Baixada Santista, com possibilidade de atendimento em outras localidades de São Paulo." },
        { title: "Evolução tecnológica", text: "A Info acompanha mobilidade, nuvem, automações e inteligência artificial sem tratar novidade como fim em si mesma." },
      ]}
    />
  );
}
