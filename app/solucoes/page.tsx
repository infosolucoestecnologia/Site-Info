import SecondaryPage from "@/components/SecondaryPage";

export default function SolucoesPage() {
  return (
    <SecondaryPage
      eyebrow="Soluções"
      title="Tecnologia para organizar, automatizar e acompanhar sua operação."
      intro="Da frente de caixa ao suporte, a Info combina sistemas, equipamentos, implantação e automação de acordo com a rotina do negócio."
      ctaMessage="Olá! Conheci as soluções da Info pelo site e gostaria de entender qual é a mais adequada para minha empresa."
      items={[
        { title: "Gestão e automação comercial", text: "Controle de vendas, frente de caixa, estoque, financeiro, fornecedores, clientes e emissão fiscal em um fluxo mais organizado." },
        { title: "Restaurantes e alimentação", text: "Mesas, comandas, pedidos, cozinha, delivery, impressão e caixa integrados para reduzir retrabalho e melhorar o atendimento." },
        { title: "PDV e mobilidade", text: "Operação em computador, tablet ou nuvem quando a solução escolhida permitir, com foco em simplicidade e estabilidade." },
        { title: "Totem de autoatendimento", text: "Uma opção para agilizar pedidos e organizar o fluxo quando o perfil do estabelecimento realmente se beneficia do autoatendimento." },
        { title: "Pagamentos integrados", text: "Integração entre sistema e pagamento quando tecnicamente disponível, reduzindo digitação manual e melhorando o controle da operação." },
        { title: "Implantação e treinamento", text: "Levantamento, configuração, orientação da equipe e acompanhamento após a entrada em operação." },
        { title: "Suporte técnico especializado", text: "Apoio em sistemas, computadores, impressoras, emissão fiscal, banco de dados, certificados e infraestrutura básica." },
        { title: "Tecnologia e inteligência artificial", text: "Automação de tarefas, organização de atendimentos e análise de informações com pessoas no controle da decisão." },
      ]}
    />
  );
}
