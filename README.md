# Flávio Oliveira | Portfólio e Blog

![Status](https://img.shields.io/badge/status-publicado-16a34a)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-111827)
![HTML](https://img.shields.io/badge/HTML-est%C3%A1tico-e34f26)
![CSS](https://img.shields.io/badge/CSS-customizado-2563eb)
![SEO](https://img.shields.io/badge/SEO-estruturado-22c55e)

Repositório do site público de **Flávio Oliveira**, publicado via GitHub Pages em:

```text
https://flaviooliveira-code.github.io/
```

O projeto é um site estático em HTML, CSS e JavaScript puro, com portfólio profissional, seção de projetos, blog técnico, metadados de SEO, Open Graph, Twitter Cards, JSON-LD, `robots.txt` e `sitemap.xml`.

## Sumário

- [Status do Projeto](#status-do-projeto)
- [Stack](#stack)
- [Páginas](#páginas)
- [Estrutura](#estrutura)
- [Quick Start](#quick-start)
- [Publicação](#publicação)
- [SEO](#seo)
- [Blog](#blog)
- [Assets](#assets)
- [Manutenção](#manutenção)
- [Checklist antes de Publicar](#checklist-antes-de-publicar)
- [Autor](#autor)

## Status do Projeto

| Área                   | Status                                      |
| ---------------------- | ------------------------------------------- |
| Página inicial         | Publicada                                   |
| Blog                   | Publicado                                   |
| SEO técnico            | Metadados, canonical, Open Graph e JSON-LD  |
| Sitemap                | Configurado                                 |
| Robots                 | Configurado                                 |
| Favicon                | Configurado                                 |
| Componentes globais    | Navbar e footer via Web Components          |
| Build                  | Não aplicável, site estático                |
| Deploy                 | GitHub Pages                                |

## Stack

**Base**

- HTML5
- CSS customizado
- JavaScript puro
- Web Components nativos

**SEO e compartilhamento**

- Meta description
- Canonical URL
- Open Graph
- Twitter Cards
- JSON-LD Schema.org
- `robots.txt`
- `sitemap.xml`

**Hospedagem**

- GitHub Pages

## Páginas

### Site principal

| Rota | Descrição |
| ---- | --------- |
| `/` | Portfólio profissional com apresentação, projetos, habilidades e contato. |

### Blog

| Rota | Descrição |
| ---- | --------- |
| `/blog/` | Índice de artigos técnicos. |
| `/blog/modernizacao-de-sistemas-legados/` | Modernização de sistemas legados. |
| `/blog/codigo-limpo-na-pratica/` | Reflexão prática sobre Código Limpo. |
| `/blog/automacoes-python/` | Automações Python. |
| `/blog/desenvolvimento-react-nextjs/` | Desenvolvimento com React e Next.js. |
| `/blog/apis-rest-node-dotnet/` | APIs REST com Node.js e .NET. |
| `/blog/meu-controle-financeiro/` | Meu Controle Financeiro. |
| `/blog/horus-pdv/` | Hórus PDV. |
| `/blog/plataforma-de-reservas/` | Plataforma de Reservas. |

## Estrutura

```text
flaviooliveira-code.github.io/
├── assets/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── flavio-about.jpeg
│   ├── flavio-about-256.webp
│   ├── flavio-about-512.webp
│   └── site-components.js
├── blog/
│   ├── index.html
│   ├── styles.css
│   ├── images/
│   ├── apis-rest-node-dotnet/
│   ├── automacoes-python/
│   ├── codigo-limpo-na-pratica/
│   ├── desenvolvimento-react-nextjs/
│   ├── horus-pdv/
│   ├── meu-controle-financeiro/
│   ├── modernizacao-de-sistemas-legados/
│   └── plataforma-de-reservas/
├── index.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Quick Start

Este projeto não exige instalação de dependências.

### Abrir direto no navegador

```bash
open index.html
```

### Servir localmente com Python

Recomendado para validar caminhos relativos, assets e navegação:

```bash
python3 -m http.server 8080
```

Depois abra:

```text
http://localhost:8080
```

### Servir localmente com Node

Se preferir:

```bash
npx serve .
```

## Publicação

O deploy é feito pelo GitHub Pages do próprio repositório:

```text
flaviooliveira-code.github.io
```

Fluxo básico:

```bash
git add .
git commit -m "Atualiza site"
git push origin main
```

Após o push, o GitHub Pages publica a versão atual da branch configurada.

## SEO

O site já possui os principais elementos técnicos:

- `title` e `meta description` por página;
- `canonical`;
- `robots`;
- Open Graph para compartilhamento;
- Twitter Cards;
- JSON-LD com `WebSite`, `ProfilePage`, `Person`, `Blog`, `ItemList` e breadcrumbs;
- `sitemap.xml`;
- `robots.txt`.

Arquivos importantes:

```text
index.html
blog/index.html
blog/*/index.html
robots.txt
sitemap.xml
```

Ao criar ou alterar página, revise:

- título único;
- descrição objetiva;
- URL canonical correta;
- Open Graph coerente;
- JSON-LD quando fizer sentido;
- entrada no `sitemap.xml`;
- link interno a partir da home ou do blog.

## Blog

Cada artigo fica em uma pasta própria com `index.html`:

```text
blog/nome-do-artigo/index.html
```

Para criar novo artigo:

1. Copie a estrutura de um artigo existente.
2. Ajuste `title`, `description`, canonical e Open Graph.
3. Ajuste JSON-LD do artigo.
4. Adicione card em `blog/index.html`.
5. Adicione URL em `sitemap.xml`.
6. Valide localmente com servidor HTTP.

## Assets

Pasta principal:

```text
assets/
```

Uso atual:

- favicons e ícones mobile;
- imagem principal de perfil/sobre;
- imagens otimizadas em WebP;
- `site-components.js` com navbar e footer globais.

Imagens do blog:

```text
blog/images/
```

Recomendações:

- preferir WebP para imagens grandes;
- manter `width`, `height` e `alt`;
- evitar imagens muito pesadas;
- atualizar `og:image` quando a imagem principal mudar.

## Manutenção

Sugestões para manter o site saudável:

- Atualizar `sitemap.xml` sempre que criar/remover artigo.
- Revisar `lastmod` no sitemap quando alterar conteúdo relevante.
- Validar links internos após mudanças de pasta.
- Testar em mobile e desktop.
- Verificar Lighthouse/PageSpeed após alterações grandes.
- Evitar dependências desnecessárias, já que o site é estático.
- Manter `site-components.js` simples para não bloquear renderização.

## Checklist antes de Publicar

```text
[ ] Abrir / localmente
[ ] Abrir /blog/ localmente
[ ] Abrir cada artigo alterado
[ ] Validar links da navbar
[ ] Validar imagens e favicons
[ ] Conferir title/description/canonical
[ ] Atualizar sitemap.xml
[ ] Conferir robots.txt
[ ] Testar mobile
[ ] Fazer commit e push
```

## Autor

Flávio Oliveira

- Site: [flaviooliveira-code.github.io](https://flaviooliveira-code.github.io/)
- GitHub: [flaviooliveira-code](https://github.com/flaviooliveira-code)
- LinkedIn: [fladoliveira](https://linkedin.com/in/fladoliveira)
