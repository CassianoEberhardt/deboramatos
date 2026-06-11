# 📐 Plano de Arquitetura — Site Débora Matos (Psicologia)

**Gerado a partir de:** `briefing-estrategico-site-id77.md` (template v2.0)
**Data:** 10/06/2026 · **Idioma de trabalho:** português do Brasil

---

## 1. Resumo Executivo

Site institucional **onepager**, mobile-first, para a psicóloga **Débora Matos**, que atende exclusivamente online (todo o Brasil) adolescentes e adultos, com abordagem **TCC (Terapia Cognitivo-Comportamental)**. Objetivo único de conversão: **clique no WhatsApp** (meta: 50 cliques/semana). Sem CMS (mudanças raras), hospedagem **gratuita** com subdomínio grátis, lançamento em **1 semana**, custo **R$ 0**. Visual claro, "artesanal" com títulos imponentes, paleta terracota `#993300` / índigo `#333399` / verde `#336633`. Animações **Nível 3 (imersivo)** mantidas por decisão explícita do humano, com plano de otimização obrigatório (ver Seção 6.3), pois conflitam com público majoritariamente mobile em 3G/4G.

### 1.1 Decisões tomadas com o humano (10/06/2026)

| Conflito/pendência | Decisão do humano |
|---|---|
| Descrição do negócio (campo 🔴 vazio) | Aprovado rascunho com ênfase em TCC (ver 1.2) |
| Animações Nível 3 × internet lenta × mobile | **Manter Nível 3 com otimizações** (impacto detalhado em 6.3) |
| CMS completo × onepager sem blog × custo zero | **Sem CMS** — site estático, mudanças raras, sob demanda |
| Orçamento zero × sem domínio/hospedagem | **Tudo grátis por ora**: hospedagem gratuita + subdomínio (ex.: `deboramatos.vercel.app`); domínio próprio fica para quando houver verba |

### 1.2 Descrição do negócio (aprovada)

> Débora Matos oferece psicoterapia online baseada em Terapia Cognitivo-Comportamental (TCC) para adolescentes e adultos de todo o Brasil. Seu diferencial é traduzir uma abordagem científica em sessões acolhedoras e práticas, ajudando quem "não se entende" a construir clareza emocional — com valores acessíveis a diferentes realidades financeiras.

### 1.3 Pendências (bloqueiam apenas o conteúdo final, não o desenvolvimento)

1. **🔴 Número do WhatsApp possivelmente incompleto.** O briefing informa `555198571451` = 55 (país) + 51 (DDD) + `98571451` (**8 dígitos**). Celulares no Brasil têm **9 dígitos** (ex.: `9 9857-1451`). Confirmar o número correto antes do lançamento — um dígito errado zera a conversão do site inteiro.
2. **Nome completo e CRP da psicóloga.** Embora o briefing diga "sem restrições legais", a publicidade de psicólogos é regulada pelo CFP: o site **deve exibir nome completo e número do CRP**, e **não pode** conter promessa de resultado nem depoimentos de pacientes. Verificar também o cadastro **e-Psi** para atendimento online.
3. **Foto profissional da Débora** (mínimo ~1200 px de largura) — é o elemento central do Hero e da seção "Sobre" (destaque pedido no briefing).
4. **Aprovação dos textos**: o agente rascunha (autorizado na Seção 7 do briefing), mas em conteúdo de saúde a profissional deve revisar e aprovar tudo antes de publicar.
5. **Termos de busca SEO** (Seção 7 ficou vazia) — lista assumida em 1.4, confirmar.

### 1.4 Premissas assumidas `[ASSUMIDO]`

- **SEO**: palavras-chave alvo: "psicóloga online", "terapia online", "psicóloga TCC", "terapia cognitivo-comportamental online", "psicóloga para adolescentes online".
- **Medição da meta** (50 cliques WhatsApp/semana): nenhuma integração foi marcada na Seção 6, mas sem medição a meta é inverificável. Adotar **Cloudflare Web Analytics** (gratuito e **sem cookies** → dispensa banner de cookies e simplifica a LGPD) com evento de clique no botão WhatsApp.
- **E-mail**: `deboramatos.psi@gmail.com` será usado como está; sem e-mail no domínio (não há domínio próprio por ora).
- **Idioma único**: português do Brasil.
- **Botão flutuante de WhatsApp** usará o **verde oficial do WhatsApp** (`#25D366`) por reconhecimento imediato, em vez do verde da paleta — reverter se o humano preferir.
- **Tipografia** (identidade visual inexistente, agente propõe): títulos **Fraunces** (serifada display — "imponente" + "artesanal"), corpo **Inter** (alta leiturabilidade), ambas gratuitas e auto-hospedadas.
- Link do CTA: `https://wa.me/55519XXXXXXXX?text=Olá!%20Gostaria%20de%20falar%20sobre%20terapia.` (número pendente).

---

## 2. Sitemap e Arquitetura de Informação

Onepager com navegação por âncoras + 1 página auxiliar de privacidade (LGPD).

```
/
├── #inicio        Hero — apresentação + CTA WhatsApp
├── #sobre         Quem é Débora Matos (DESTAQUE — pedido no briefing)
├── #tcc           O que é a TCC
├── #sessoes       Como funcionam as sessões
├── #para-quem     Para quem é a terapia
├── #faq           Perguntas frequentes
├── #contato       CTA final + footer
└── /privacidade   Política de privacidade (página separada)
```

**Justificativa da ordem:** segue a jornada de decisão de quem procura terapia: (1) acolhimento imediato e quem é a profissional — "Sobre" vem logo após o Hero porque o briefing pede destaque especial à apresentação da psicóloga e porque confiança na pessoa é o fator nº 1 de conversão em psicoterapia; (2) entendimento do método (TCC) para quem pesquisa abordagens; (3) redução de fricção prática ("como funciona uma sessão online?"); (4) identificação ("isso é para mim?"); (5) objeções residuais (FAQ); (6) conversão. O botão flutuante de WhatsApp permite converter em **qualquer** ponto da rolagem — essencial num onepager longo.

---

## 3. Design Tokens

Direção visual proposta (marca inexistente): **"consultório artesanal"** — fundo claro quente (off-white), terracota como cor de identidade, índigo reservado a ações, formas orgânicas suaves. Referência de padrão (não de cópia): ramoswellness.com.

```json
{
  "color": {
    "brand":   { "50": "#FBF1EB", "100": "#F5DFD2", "300": "#D99570", "500": "#B14E1F", "600": "#993300", "700": "#7A2900", "900": "#401600" },
    "action":  { "100": "#E3E3F5", "500": "#4747B3", "600": "#333399", "700": "#2A2A80" },
    "support": { "100": "#E2EFE2", "600": "#336633", "700": "#285228" },
    "neutral": { "bg": "#FAF6F2", "surface": "#FFFFFF", "border": "#E8DFD7", "text": "#33291F", "text-muted": "#6B5D52" },
    "whatsapp": "#25D366"
  },
  "typography": {
    "display": { "family": "Fraunces, Georgia, serif", "weights": [600, 700] },
    "body":    { "family": "Inter, system-ui, sans-serif", "weights": [400, 500, 700] },
    "scale": {
      "h1": "clamp(2.25rem, 4vw + 1rem, 3.75rem)",
      "h2": "clamp(1.75rem, 3vw + 0.75rem, 2.5rem)",
      "h3": "clamp(1.25rem, 2vw + 0.5rem, 1.5rem)",
      "body": "1.0625rem",
      "small": "0.875rem"
    },
    "line-height": { "display": 1.15, "body": 1.65 }
  },
  "spacing": { "base": "4px", "steps": [4, 8, 12, 16, 24, 32, 48, 64, 96, 128] },
  "radius": { "sm": "8px", "md": "16px", "lg": "24px", "pill": "9999px" },
  "shadow": {
    "sm": "0 1px 3px rgba(64, 22, 0, 0.08)",
    "md": "0 4px 16px rgba(64, 22, 0, 0.10)",
    "lg": "0 12px 32px rgba(64, 22, 0, 0.14)"
  }
}
```

**Contraste verificado (WCAG AA, fundo claro):** `#993300` sobre branco ≈ 7,4:1 ✅ · `#333399` sobre branco ≈ 10:1 (e branco sobre `#333399` em botões) ✅ · `#336633` sobre branco ≈ 6,8:1 ✅ · `text-muted #6B5D52` sobre `#FAF6F2` ≈ 5,5:1 ✅.

**Nota de design:** terracota + índigo + verde são três matizes fortes e distantes; para não parecer "carnaval", o índigo fica **exclusivo de botões/links** e o verde **exclusivo de detalhes de apoio** (ícones, selos). A identidade é carregada pelo terracota + neutros quentes.

---

## 4. Inventário de Componentes de UI

**Globais**

| Componente | Detalhes |
|---|---|
| Skip-link | "Pular para o conteúdo" (acessibilidade por teclado) |
| Header fixo | Logotipo tipográfico "Débora Matos · Psicóloga", nav por âncoras, CTA compacto WhatsApp; vira menu hambúrguer acessível no mobile |
| Botão flutuante WhatsApp | **Must.** Canto inferior direito, verde `#25D366`, `aria-label`, mensagem pré-preenchida, evento de clique medido |
| Footer | Nome completo + **CRP**, e-mail, link Instagram, link /privacidade, aviso "este site não oferece atendimento de emergência — CVV 188" |

**Por seção do onepager**

| Seção | Componentes |
|---|---|
| Hero `#inicio` | H1 + subtítulo, botão primário WhatsApp (índigo), foto da Débora, formas orgânicas decorativas com parallax sutil |
| Sobre `#sobre` | Foto profissional, bio (rascunho do agente), selo CRP, credenciais/formação, citação pessoal em Fraunces itálico |
| TCC `#tcc` | 3–4 cards com ícone (o que é, como age, base científica, prática entre sessões), reveal ao rolar |
| Sessões `#sessoes` | Timeline numerada (1. primeira conversa → 2. avaliação → 3. plano terapêutico → 4. acompanhamento), bloco de informações práticas (online, duração, plataforma, "valores acessíveis a diferentes rendas") |
| Para quem `#para-quem` | Grade de chips/cards com situações comuns (ansiedade, "não me entendo", transições de vida…) — **sem linguagem diagnóstica nem promessa de cura** |
| FAQ `#faq` | Accordion acessível (`<details>` estilizado): "terapia online funciona?", "quanto custa?", "como é a primeira sessão?", "atende adolescentes?" |
| CTA final `#contato` | Banner terracota-claro, H2 convidativo, botão WhatsApp grande |
| /privacidade | Página de texto simples: dados coletados (mínimos), analytics sem cookies, contato |

---

## 5. Stack Tecnológica Recomendada

| Camada | Escolha | Justificativa vinculada ao briefing |
|---|---|---|
| Framework | **Astro** (site estático) | Sem CMS (decisão 1.1), mudanças raras, onepager → HTML estático com **zero JS por padrão**, o que compensa o custo das animações Nível 3 e atende o público em 3G/4G |
| Estilos | **CSS puro com custom properties** (tokens da Seção 3) | Projeto pequeno; evita dependência e peso desnecessários |
| Animações | **CSS scroll-driven + GSAP ScrollTrigger só onde CSS não alcança** (~35 KB gz, carregado com `defer`) | Nível 3 exigido; estratégia de mitigação na Seção 6.3 |
| Hospedagem | **Vercel (plano grátis)** → `deboramatos.vercel.app` | Decisão "tudo grátis por ora"; deploy via Git, HTTPS automático, CDN global |
| Analytics | **Cloudflare Web Analytics** (grátis, sem cookies) | Mede a meta de 50 cliques/semana sem banner de cookies (LGPD simplificada) |
| Fontes | Fraunces + Inter **auto-hospedadas** (Fontsource), `font-display: swap` | Evita requisição a CDN de terceiros (boa prática LGPD) e melhora LCP |
| Domínio | Subdomínio grátis agora; **`deboramatos.com.br` via Registro.br (~R$ 40/ano)** quando houver verba | Único custo futuro; Vercel aceita domínio próprio sem mudar nada no site |
| E-mail/SEO ops | Google Search Console (grátis) | Acompanhar indexação das palavras-chave assumidas |

---

## 6. Backlog Priorizado (MoSCoW) e Marcos

Complexidade: **P** pequena · **M** média · **G** grande. Prazo: 7 dias.

| # | Item | MoSCoW | Compl. | Marco |
|---|---|---|---|---|
| 1 | Setup Astro + tokens + deploy contínuo na Vercel | Must | P | **M1 — Dia 1–2: fundação no ar** |
| 2 | Header, footer, skip-link, estrutura semântica das 7 seções | Must | M | M1 |
| 3 | Rascunho de todos os textos (a partir do briefing) p/ aprovação | Must | M | M1 |
| 4 | Hero + Sobre + TCC + Sessões + Para quem (estático, mobile-first) | Must | G | **M2 — Dia 3–4: onepager navegável** |
| 5 | Botão flutuante WhatsApp + CTAs (número confirmado!) | Must | P | M2 |
| 6 | Página /privacidade + textos LGPD | Must | P | M2 |
| 7 | Conformidade CFP: CRP visível, revisão de linguagem (sem promessas) | Must | P | M2 |
| 8 | SEO técnico: meta tags, OG/Twitter cards, sitemap.xml, JSON-LD (`ProfessionalService` + `Person`) | Must | P | **M3 — Dia 5: qualidade** |
| 9 | Animações Nível 2 (reveals ao rolar) como base estável | Should | M | M3 |
| 10 | Camada Nível 3: parallax no hero, microinterações ricas (ver 6.3) | Should | G | M3 |
| 11 | FAQ accordion | Should | P | M3 |
| 12 | Cloudflare Analytics + evento de clique no WhatsApp | Should | P | M3 |
| 13 | Auditoria: Lighthouse mobile ≥ 90, teste em 3G simulado, axe a11y | Must | M | **M4 — Dia 6: auditoria** |
| 14 | Conteúdo final aprovado pela Débora + foto otimizada (AVIF/WebP) | Must | P | **M5 — Dia 7: lançamento** |
| 15 | Domínio próprio .com.br + e-mail profissional | Won't (fase 2) | P | — |
| 16 | Blog/conteúdo, agendamento online, GA4/Pixel | Won't (fase 2) | — | — |

### 6.3 Impacto de performance do Nível 3 (apontamento obrigatório)

Decisão do humano: manter Nível 3 **sabendo do risco** — público no celular com 3G/4G fraco é exatamente o cenário onde parallax/JS pesado degrada LCP e INP. Mitigações **não negociáveis** na implementação:

- **Orçamento de página:** JS total ≤ 90 KB gz; imagem do hero em AVIF ≤ 70 KB; LCP medido em 3G simulado < 2,5 s.
- Animações **apenas com `transform` e `opacity`** (compositor); nunca animar layout.
- CSS scroll-driven primeiro; GSAP só carrega **depois** do conteúdo (`defer` + interação).
- ~~Parallax desligado no mobile~~ **Atualizado em 10/06/2026, a pedido do humano:** parallax aplicado a todas as camadas (conteúdo + fundo) e em todos os dispositivos, inclusive mobile. Compensações: deslocamento só via `transform` (compositor), rAF com cache de medidas por seção e `prefers-reduced-motion` desativa tudo. O teste em 3G do M4 segue como portão: se reprovar, reduzir velocidades/quantidade de camadas no mobile.
- Respeitar `prefers-reduced-motion` (WCAG) com versão estática completa.
- Se a auditoria do M4 reprovar em 3G, itens do backlog #10 são despriorizados — o #9 (Nível 2) é a base garantida.

---

## 7. Checklist de Qualidade

**SEO técnico**
- [ ] HTML semântico (`header/main/section/footer`, um único `h1`)
- [ ] `<title>` e meta description com palavras-chave (1.4); lang="pt-BR"
- [ ] Open Graph + Twitter Card com foto e descrição
- [ ] sitemap.xml + robots.txt; site registrado no Search Console
- [ ] JSON-LD: `ProfessionalService` + `Person` (nome, CRP, área, atendimento online)

**Performance (Core Web Vitals "boa")**
- [ ] LCP < 2,5 s **em 3G simulado** (não só em wifi) · INP < 200 ms · CLS < 0,1
- [ ] Imagens AVIF/WebP responsivas (`srcset`), lazy-loading abaixo da dobra
- [ ] Fontes auto-hospedadas, `font-display: swap`, subset latino
- [ ] Orçamentos da Seção 6.3 cumpridos; Lighthouse mobile ≥ 90

**Acessibilidade (WCAG 2.1 AA)**
- [ ] Contrastes ≥ 4,5:1 (validados na Seção 3); foco visível em tudo
- [ ] Navegação 100% por teclado (menu mobile, accordion, botão flutuante)
- [ ] `alt` em todas as imagens; `aria-label` no botão WhatsApp
- [ ] `prefers-reduced-motion` respeitado; texto base ≥ 16 px

**LGPD**
- [ ] Coleta mínima: nenhum formulário, analytics sem cookies → sem banner
- [ ] Página /privacidade clara (o que é coletado, por quê, contato)
- [ ] Nenhum recurso de terceiros que vaze IP sem necessidade (fontes locais)

**Conformidade profissional (CFP) — adicionado pelo agente**
- [ ] Nome completo + nº do CRP visíveis no site
- [ ] Zero promessas de resultado/cura; zero depoimentos de pacientes
- [ ] Aviso de não-emergência + CVV 188 no footer
- [ ] Cadastro e-Psi verificado para atendimento online
