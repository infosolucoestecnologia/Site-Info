import SecondaryPage from "@/components/SecondaryPage";

export default function SegmentosPage() {
  return (
    <SecondaryPage
      eyebrow="Segmentos"
      title="A mesma tecnologia não serve do mesmo jeito para todo negócio."
      intro="A Info adapta implantação, configuração e suporte à realidade de cada operação, sem transformar a venda em uma lista de módulos."
      ctaMessage="Olá! Quero entender qual solução da Info faz mais sentido para o meu segmento."
      items={[
        { title: "Mercados e minimercados", text: "Caixa, estoque, balança, cadastro, compras, fornecedores, emissão fiscal e acompanhamento da operação." },
        { title: "Restaurantes e pizzarias", text: "Mesas, comandas, pedidos, cozinha, delivery, impressão e integração entre atendimento e caixa." },
        { title: "Padarias e lanchonetes", text: "Balcão, balança, produção, pedidos, impressão e venda com foco em velocidade e organização." },
        { title: "Açougues e hortifrutis", text: "Produtos por peso, estoque, balança, etiquetas e frente de caixa alinhados à rotina do estabelecimento." },
        { title: "Adegas e conveniências", text: "Venda rápida, estoque, produtos de alto giro e controle mais próximo do caixa e das reposições." },
        { title: "Varejo", text: "Cadastro, venda, estoque, clientes, financeiro e relatórios para pequenas operações comerciais." },
        { title: "Escritórios e prestadores", text: "Organização administrativa, atendimento, financeiro e automação de processos repetitivos quando aplicável." },
      ]}
    />
  );
}
