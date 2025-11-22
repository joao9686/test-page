// produtos.js
// Script responsável por montar os cards de produtos na página Produtos

// Número do WhatsApp (com DDI + DDD, sem símbolos)
const WHATSAPP_NUMBER = '5567996544981';

// Lista de produtos (cada item é um card)
const productsData = [
  {
    tag: 'PC',
    title: 'PC para escritório',
    description:
      'Computadores montados para uso administrativo, com foco em estabilidade e desempenho em sistemas de gestão e produtividade.',
    whatsappText: 'Olá, tenho interesse no PC para escritório.'
  },
  {
    tag: 'Notebook',
    title: 'Notebooks para uso profissional',
    description:
      'Equipamentos indicados para quem precisa de mobilidade, reuniões e trabalho remoto com segurança e desempenho.',
    whatsappText: 'Olá, tenho interesse em notebooks para uso profissional.'
  },
  {
    tag: 'Periféricos',
    title: 'Kit teclado e mouse sem fio',
    description:
      'Kits pensados para escritórios organizados, oferecendo conforto e praticidade no dia a dia.',
    whatsappText: 'Olá, tenho interesse no kit teclado e mouse sem fio.'
  },
  {
    tag: 'Impressoras',
    title: 'Impressora multifuncional',
    description:
      'Impressão, cópia e digitalização em um único equipamento, ideal para empresas e escritórios.',
    whatsappText: 'Olá, tenho interesse na impressora multifuncional.'
  },
  {
    tag: 'PDV',
    title: 'Impressora térmica para PDV',
    description:
      'Impressora compacta e rápida, indicada para frentes de caixa que precisam de agilidade na emissão de cupons.',
    whatsappText: 'Olá, tenho interesse na impressora térmica para PDV.'
  },
  {
    tag: 'Segurança',
    title: 'Kit de câmeras de segurança (CFTV)',
    description:
      'Sistemas completos para monitoramento interno e externo, com acesso remoto e gravação contínua.',
    whatsappText: 'Olá, tenho interesse no kit de câmeras de segurança (CFTV).'
  },
  {
    tag: 'Alarmes',
    title: 'Central de alarme e sensores',
    description:
      'Soluções para proteger imóveis comerciais e residenciais, com sensores, sirenes e possibilidade de expansão.',
    whatsappText: 'Olá, tenho interesse em sistemas de alarme.'
  },
  {
    tag: 'Controle de Acesso',
    title: 'Relógio de ponto eletrônico',
    description:
      'Equipamentos homologados para controle de jornada com integração a sistemas de RH.',
    whatsappText: 'Olá, tenho interesse em relógio de ponto eletrônico.'
  },
  {
    tag: 'Controle de Acesso',
    title: 'Catraca de acesso',
    description:
      'Controle de entrada e saída para academias, empresas, condomínios e ambientes corporativos.',
    whatsappText: 'Olá, tenho interesse em catraca de acesso.'
  },
  {
    tag: 'Comercial',
    title: 'Balanças comerciais',
    description:
      'Balanças para mercados, açougues e hortifrutis, com configuração e suporte pós-venda.',
    whatsappText: 'Olá, tenho interesse em balanças comerciais.'
  }
];

// Cria um card de produto usando as mesmas classes do seu CSS
function createProductCard(product) {
  const card = document.createElement('article');
  card.classList.add('product-card');

  card.innerHTML = `
    <span class="product-tag">${product.tag}</span>
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <a
      href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        product.whatsappText
      )}"
      class="product-link"
      target="_blank"
      rel="noopener"
    >
      Solicitar orçamento
    </a>
  `;

  return card;
}

// Renderiza todos os produtos dentro do grid
function renderProductsGrid() {
  const grid = document.querySelector('[data-products-grid]');
  if (!grid) return; // se não estiver na página de produtos, não faz nada

  grid.innerHTML = ''; // garante que começa vazio

  productsData.forEach((product) => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}

// Quando o DOM estiver pronto, monta o grid
document.addEventListener('DOMContentLoaded', () => {
  renderProductsGrid();
});
