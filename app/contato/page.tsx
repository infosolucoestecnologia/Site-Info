import SecondaryPage from "@/components/SecondaryPage";

export default function ContatoPage() {
  return (
    <SecondaryPage
      eyebrow="Contato"
      title="Conte o que sua empresa precisa melhorar."
      intro="A conversa pode começar por WhatsApp. Informe seu segmento, cidade e principal dificuldade para a equipe entender o contexto antes de indicar uma solução."
      ctaMessage="Olá! Conheci a Info pelo site e gostaria de conversar sobre tecnologia para minha empresa."
      items={[
        { title: "WhatsApp comercial", text: "(13) 97422-1127 — canal para novos contatos, dúvidas comerciais e solicitação de demonstração." },
        { title: "Outro contato registrado", text: "(13) 99743-8210 — número sujeito à validação antes da publicação definitiva." },
        { title: "Instagram", text: "@infosolucoestecnologia — acompanhe conteúdos, novidades e bastidores da empresa." },
        { title: "Área de atendimento", text: "Guarujá, Santos, São Vicente, Praia Grande, Cubatão, Bertioga, litoral de São Paulo e atendimentos em São Paulo conforme o projeto." },
      ]}
    />
  );
}
