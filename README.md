# Smartwatch EXO-CHRONO® — Landing Page de Alta Conversão

Esta é uma landing page premium e responsiva, desenvolvida e otimizada sob princípios de CRO (Conversion Rate Optimization) e Copywriting Persuasivo (Direct Response Copy) para a venda do smartwatch militar tático **EXO-CHRONO®**.

## 🚀 Tecnologias Utilizadas

- **HTML5** & **Tailwind CSS** (via CDN com design system configurado)
- **Vanilla JavaScript** (Interações, Animações customizadas e Sticky CTA)
- **Custom CSS** (Animações HUD 3D, efeitos orbitais e glassmorphism premium)

## 📁 Estrutura de Diretórios

```text
├── index.html          # Estrutura principal da Landing Page
├── assets/
│   ├── css/
│   │   └── custom.css  # Efeitos orbitais, pulsações e scanner HUD
│   └── js/
│       └── animations.js # Inicializador de efeitos de rolagem (Intersection Observer)
└── Imagens/            # Assets visuais do produto
```

## 🛠️ Como Executar Localmente

Não há necessidade de instalar dependências complexas de desenvolvimento. Você pode abrir o arquivo `index.html` diretamente no navegador ou iniciar um servidor HTTP estático local:

```bash
# Exemplo utilizando o http-server do Node
npx http-server -p 8080
```

## 🔒 Segurança e Configuração de Checkout

- O código não contém **segredos, chaves de API, senhas ou credenciais sensíveis**.
- O fluxo de pagamento redireciona o usuário para o domínio de checkout público: `https://checkout.exochrono.com/buy`. 
- Caso deseje integrar com um gateway diferente ou passar parâmetros de rastreamento (como UTMs), basta alterar as referências nos botões `<a href="...">` identificados com o ID do CTA no arquivo `index.html`.
