# Site DACLA Automação

Site institucional estático da **DACLA Automação** — engenharia em automação industrial, sistemas embarcados, IoT, CLPs, IHMs, inversores de frequência, ensaios elétricos e desenvolvimento de software.

URL em produção: <https://daclaautomacao.com.br/>

---

## Stack

- **HTML5** semântico, uma página principal (`index.html`) com âncoras para as seções.
- **CSS3** vanilla em arquivo único (`assets/css/style.css`) com tokens centralizados em `:root` (cores, tipografia, raios, sombras, transições).
- **JavaScript** ES Modules (`type="module"`), sem framework, sem bundler.
- **Fontes** Google Fonts (Inter + JetBrains Mono) carregadas com truque `media="print" onload`.
- **SEO** Open Graph, Twitter Cards e Schema.org Organization embutidos no `<head>`.
- **Sem** Bootstrap, sem npm, sem build, sem dependências de runtime.

---

## Estrutura de pastas

```
site/
├── index.html                    # Página principal (única página real)
├── 404.html                      # Página de erro do GitHub Pages
├── CNAME                         # Domínio personalizado (daclaautomacao.com.br)
├── robots.txt                    # Permite tudo + aponta para sitemap
├── sitemap.xml                   # 5 URLs (raiz + 4 âncoras). lastmod manual.
├── README.md                     # Este arquivo
├── assets/
│   ├── css/
│   │   └── style.css             # Folha única, seccionada por banners
│   ├── js/
│   │   ├── main.js               # Bootstrap dos módulos no DOMContentLoaded
│   │   └── modules/
│   │       ├── nav.js            # Hamburger + fechamento via Esc/click
│   │       ├── year.js           # Preenche o <span id="year"> no footer
│   │       ├── backToTop.js      # Botão flutuante com throttle via rAF
│   │       ├── servicesCarousel.js # Carrossel de serviços (ativo só em mobile)
│   │       └── productsCarousel.js # Carrossel de produtos (1/2/3 por breakpoint)
│   └── img/                      # PNG/JPG/ICO/favicon. Sem otimização.
└── downloads/                    # Reservado para PDFs públicos (vazio hoje)
```

---

## Como rodar localmente

O projeto é estático puro — basta servir a raiz por HTTP (abrir `index.html` direto no navegador funciona para a maior parte do site, mas ES Modules exigem servidor).

```bash
# Python 3
python -m http.server 8000

# Node (qualquer um destes)
npx serve .
npx http-server -p 8000

# VS Code
# Extensão "Live Server" → Open with Live Server
```

Acesse `http://localhost:8000/`.

---

## Deploy

O site é publicado pelo **GitHub Pages** a partir da branch `main`, na raiz do repositório, com domínio personalizado configurado em Settings → Pages. Qualquer push em `main` republica automaticamente.

- Repositório: `danielclarinda/site`
- URL pública: `https://daclaautomacao.com.br/`
- Domínio: configurado via arquivo `CNAME` na raiz (mantido pelo GitHub Pages).
- Servido na raiz do domínio — sem subpath. Mesmo assim, **manter paths relativos** em `href`/`src` para preservar portabilidade e funcionamento em previews/branches.

---

## Convenções de código

### HTML
- Idioma do conteúdo: **PT-BR**.
- Indentação: 2 espaços.
- Atributos ARIA presentes em todas as seções (`aria-labelledby`, `aria-label`, `role` quando necessário).
- SVGs inline para ícones (sem dependência externa).
- **Duas convenções de ID convivem por design** — não misturar:
  - **lowercase plano** para destinos de navegação visíveis ao usuário, porque entram em URLs públicas (`#servicos`, `#produtos`, `#sobre`, `#contato`, `#downloads`, `#conteudo`) e em `sitemap.xml`. Renomear quebra links externos e SEO.
  - **camelCase** para IDs referenciados apenas por JS ou ARIA (`navToggle`, `primaryNav`, `backToTop`, `heroTitle`, `servicosTitle`, `iotTitle`, etc.). Internos ao projeto, podem mudar sem impacto externo.
- Visual-blocks numerados como `vb1`–`vb9` para a navegação interna a partir dos cards de serviços (também lowercase, pois entram em `href="#vb1"`).

### CSS
- Arquivo único, organizado em banners de comentário (`/* ====== HEADER ====== */`).
- Tokens em `:root` (`--c-*`, `--f-*`, `--radius*`, `--shadow*`, `--t`).
- Mobile-first não estrito — breakpoints em `max-width: 900px` e `max-width: 720px`.
- Respeita `prefers-reduced-motion`.
- `url()` sempre com **aspas simples** para imagens.

### JavaScript
- Um módulo por responsabilidade em `assets/js/modules/`.
- Cada módulo exporta uma função `init<Nome>()` chamada por `main.js` no `DOMContentLoaded`.
- Sempre verificar se o elemento existe antes de anexar listeners (`if (!el) return;`).
- Sem dependências externas. Sem `var`. Preferir `const` e funções puras quando possível.

### Commits
Idealmente seguir **Conventional Commits** a partir de agora (`feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `chore:`). O histórico antigo é livre.

---

## Pontos de atenção para edição

Por ser site puro sem template engine, alguns dados aparecem **duplicados em vários arquivos**. Ao editar, atualizar em todos os locais:

| Dado | Locais |
|------|--------|
| URL canônica `https://daclaautomacao.com.br/` | `index.html` (canonical, og:url, og:image, twitter:image, schema.org logo/url), `sitemap.xml` e `robots.txt` |
| Telefone WhatsApp `+55 47 99705-2402` | `index.html` (schema.org, link do footer, botão flutuante) |
| E-mail `dacla.automacao@hotmail.com` | `index.html` (footer) |
| CNPJ `36.147.646/0001-43` | `index.html` (footer-bottom) |
| Canal do YouTube | `index.html` (schema.org sameAs, link do footer) |

Outros pontos:
- **`sitemap.xml`** tem `<lastmod>` manual — atualizar quando o conteúdo principal mudar.
- **Não existe `site.webmanifest`** — foi removido por estar quebrado. Se voltar a precisar de PWA, criar do zero com paths corretos a partir do arquivo (relativos à pasta onde o manifest mora).
- **Imagens em `assets/img/`** não passam por otimização. Vários PNGs estão acima de 2 MB; preferir WebP/AVIF e dimensionar antes de subir.

---

## Para agentes de IA

Esta seção descreve restrições e expectativas para qualquer agente que edite o projeto.

### Restrições duras
- **Não introduzir Bootstrap** ou qualquer framework CSS/JS.
- **Não adicionar Instagram** em nenhum lugar do site — somente YouTube como rede social.
- **Não adicionar npm, package.json, bundler ou build step.** O projeto é estático puro; deve continuar sendo servível diretamente pelo GitHub Pages sem etapa de build.
- **Não usar paths absolutos começando com `/`** em `href`/`src`. Embora o domínio personalizado sirva o site na raiz, manter paths relativos (`assets/img/...`) garante portabilidade entre previews, branches e qualquer fallback ao domínio `*.github.io/site/`.
- **Não rodar comandos Git/GitHub** sem pedido explícito do usuário neste projeto.

### Expectativas
- Conteúdo visível ao usuário em **PT-BR** (texto, alt, aria-label).
- Identificadores e nomes de classe podem ficar em inglês (`service-card`, `visual-block`), mas mantenha o que já existe — não renomear em massa sem motivo.
- Manter o foco em **SEO e performance** ao alterar `<head>` ou imagens.
- Manter acessibilidade: `aria-labelledby` deve apontar para o `id` de um heading real, não para o próprio elemento.
- Antes de criar arquivo novo, verificar se uma seção de `style.css` ou um módulo de `js/modules/` resolve.

### Arquivos sensíveis (revisar com cuidado)
- `index.html` — landing page inteira, 600+ linhas. Mudanças estruturais afetam SEO e acessibilidade.
- `sitemap.xml` — sincronizar URLs com seções reais.
- `assets/css/style.css` — única folha; quebrar quebra tudo.

---

## Autor

- Daniel Clarinda — [@danielclarinda](https://github.com/danielclarinda)
- Técnico em eletrotécnica, aluno de engenharia elétrica, +15 anos em automação industrial.
- CEO da DACLA Automação (fundada em 2020), Joinville-SC.
