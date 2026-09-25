import SecondaryPage from "@/components/SecondaryPage";

export default function PrivacidadePage() {
  return (
    <SecondaryPage
      eyebrow="Privacidade"
      title="Privacidade e uso responsável de dados."
      intro="Esta é uma estrutura inicial para a política de privacidade do site. O texto jurídico definitivo deve ser revisado antes da publicação."
      ctaMessage="Olá! Tenho uma dúvida sobre privacidade ou tratamento de dados no site da Info."
      items={[
        { title: "Dados de contato", text: "Ao entrar em contato, podem ser tratados dados como nome, empresa, cidade, telefone e informações enviadas voluntariamente na conversa." },
        { title: "Finalidade", text: "Os dados são utilizados para responder solicitações, prestar atendimento, apresentar soluções e dar continuidade ao relacionamento comercial." },
        { title: "Métricas e campanhas", text: "O site poderá utilizar ferramentas de análise e publicidade para compreender origem de acessos e conversões, respeitando as configurações de consentimento aplicáveis." },
        { title: "WhatsApp e terceiros", text: "Ao clicar em links externos, o visitante passa a utilizar serviços sujeitos também às políticas próprias dessas plataformas." },
        { title: "Segurança e minimização", text: "A estrutura do site deve coletar apenas o necessário e manter chaves, credenciais e dados sensíveis fora do código público." },
        { title: "Revisão jurídica pendente", text: "A política definitiva deve ser revisada juridicamente antes da publicação final e complementada com dados cadastrais e canais oficiais confirmados." },
      ]}
    />
  );
}
