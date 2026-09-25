import SecondaryPage from "@/components/SecondaryPage";

export default function SuportePage() {
  return (
    <SecondaryPage
      eyebrow="Suporte"
      title="Quando a operação para, o suporte precisa entender o contexto."
      intro="Esta página orienta clientes existentes sobre como acionar a equipe e quais informações ajudam a acelerar o diagnóstico."
      ctaMessage="Olá! Sou cliente da Info e preciso de suporte técnico."
      items={[
        { title: "Atendimento técnico", text: "Use o canal oficial de suporte para registrar o problema e manter o histórico do atendimento." },
        { title: "Envie contexto", text: "Explique o que estava sendo feito, quando o erro começou e se o problema acontece em uma ou em todas as estações." },
        { title: "Fotos e vídeos", text: "Quando fizer sentido, imagens do equipamento, tela do erro ou comportamento observado ajudam no diagnóstico." },
        { title: "Acesso remoto", text: "Quando autorizado e necessário, o atendimento pode ser feito remotamente para análise e correção." },
        { title: "Atendimento presencial", text: "Quando o problema exige verificação física, a necessidade de visita é avaliada de acordo com o caso." },
        { title: "Não substitui o canal oficial", text: "O WhatsApp do site pode orientar, mas o registro técnico deve seguir o processo oficial utilizado pela Info." },
      ]}
    />
  );
}
