# 🚀 Briefing Estratégico — Desenvolvimento de Site
**Documento de entrada para Agente Arquiteto de IA**

| Metadados | |
|---|---|
| Versão do template | 2.0 |
| Data de preenchimento | __/__/____ |
| Responsável pelas respostas | |
| Nome do projeto | |

---

## 🤖 Bloco de Instruções para o Agente de IA

> ⚠️ **Humano: não edite esta seção.** Ela define como o agente interpretará suas respostas.

### Regras de interpretação

1. **Leia o documento inteiro antes de gerar qualquer entrega.** Idioma de trabalho: português do Brasil.
2. Convenções de preenchimento:
   - `- [x]` = opção selecionada · `- [ ]` = opção não selecionada
   - Linhas iniciadas por `> ✏️` contêm respostas abertas do humano
   - Campo ou célula vazia = informação não fornecida
   - `(?)` ao final de uma resposta = humano em dúvida; tratar como hipótese a validar
3. **Hierarquia de decisão:** resposta explícita do humano → padrão definido neste template → inferência do agente (sempre sinalizada no formato `[ASSUMIDO: …]`).
4. **Campos marcados com 🔴 são obrigatórios.** Se estiverem vazios, NÃO assuma valores: liste-os em "Pendências" e pergunte ao humano antes de prosseguir.
5. Campos opcionais vazios: aplique o padrão indicado no próprio campo ou registre a premissa como `[ASSUMIDO]`.
6. **Conflitos entre respostas** (ex.: "carregamento ultrarrápido" + "animações imersivas"): aponte o conflito explicitamente e proponha uma resolução; nunca decida em silêncio.
7. Trate links de referência e concorrentes como inspiração de padrões e posicionamento — nunca como material a ser copiado.
8. **Modo de operação:** se todos os campos 🔴 estiverem preenchidos, gere as entregas 1 a 7 abaixo. Caso contrário, gere apenas a entrega 1 (resumo + pendências) e aguarde as respostas do humano.

### Restrições inegociáveis (aplicar mesmo que o humano não mencione)

- Design responsivo com abordagem mobile-first
- Acessibilidade mínima WCAG 2.1 nível AA (contraste, navegação por teclado, textos alternativos)
- Conformidade com a LGPD: consentimento em formulários, aviso de cookies, coleta mínima de dados
- Performance alvo: Core Web Vitals na faixa "boa" (LCP < 2,5 s · INP < 200 ms · CLS < 0,1), salvo definição diferente na Seção 5
- SEO técnico básico: HTML semântico, meta tags, sitemap.xml e dados estruturados quando aplicável

### Entregas esperadas do agente (nesta ordem)

1. **Resumo executivo** do projeto (1 parágrafo) + lista de **pendências** e **premissas assumidas**
2. **Sitemap** e arquitetura de informação, com justificativa
3. **Design tokens** (paleta de cores, tipografia, espaçamentos, raios, sombras) em tabela ou JSON
4. **Inventário de componentes de UI** por página (header, hero, cards, formulários, footer…)
5. **Stack tecnológica recomendada** com justificativa vinculada às respostas (CMS, framework, hospedagem)
6. **Backlog priorizado** (MoSCoW) com estimativa de complexidade (P/M/G) e marcos de entrega
7. **Checklist de qualidade**: SEO técnico, performance, acessibilidade e LGPD

---

## 👤 Como preencher (humano)

- Campos com 🔴 são obrigatórios; quanto mais completo o restante, melhor o resultado.
- Marque opções colocando `x` entre os colchetes: `- [x]`.
- Responda nas linhas iniciadas por `> ✏️` (pode adicionar mais linhas começando com `>`) ou nas células das tabelas.
- Em dúvida? Responda assim mesmo e acrescente `(?)` ao final.
- Links de referência valem mais do que descrições longas.
- Termos técnicos estão explicados no **Glossário** ao final do documento.

---

## 0. 🏢 Contexto do Negócio

| Campo | Resposta |
|---|---|
| 🔴 Nome da empresa/projeto | Débora Matos |
| 🔴 Segmento de atuação | Psicologia |
| Site atual (URL, se houver) | Não tem site ainda |
| Cidade/região de atuação | Brasil, atendimento apenas online |
| Redes sociais (links) | https://www.instagram.com/matosdebora/ |

🔴 **Descreva o negócio em 2–3 frases** (o que faz, para quem e qual o diferencial):

> ✏️

🔴 **Quem é o público-alvo?** (faixa etária, perfil, contexto e o que essa pessoa procura ao chegar no site):

> ✏️ Adolescentes e adultos que falam português que não se entendem e procuram se entender no mundo. Pessoas de diferentes rendas.

**Liste 2–3 concorrentes ou sites de referência** (com link), indicando o que gosta e o que não gosta em cada um:

> ✏️ https://karaleewellness.com/
> https://www.mantra2wellness.com/
> https://ramoswellness.com/

---

## 1. 🎯 Objetivos e Conversão

🔴 **Ação principal** que o visitante deve tomar (escolha apenas UMA):

- [x ] Chamar no WhatsApp
- [ ] Preencher formulário de contato/orçamento
- [ ] Ligar para a empresa
- [ ] Comprar online
- [ ] Agendar um horário/visita
- [ ] Outra:

**Ações secundárias** (marque todas que se aplicam):

- [x ] Seguir nas redes sociais
- [ ] Assinar newsletter
- [ ] Baixar material (catálogo, e-book, tabela de preços)
- [ ] Visitar o espaço físico
- [ ] Outra:

**Como o sucesso do site será medido?** (ex.: 20 orçamentos/mês, 50 cliques no WhatsApp por semana):

> ✏️ 50 clique no whatsapp por semana

---

## 2. 🗺️ Estrutura e Arquitetura de Informação

🔴 **Páginas previstas para o lançamento** — preencha a tabela (duplique linhas se necessário):

| # | Página | Objetivo principal da página | Conteúdos previstos (textos, galeria, vídeo, formulário…) | Conteúdo já existe? (sim/não/parcial) | Prioridade (MoSCoW) |
|---|---|---|---|---|---|
| 1 | Home | é um onepager | Apresentar a psicologa, o que é a abordagem TCC utilizada, como as sessões ocorrem, chamado para mandar mensagem pelo whatsapp | conteúdo parcialmente existe | Must |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

Legenda de prioridade (MoSCoW): `Must` essencial para o lançamento · `Should` importante · `Could` desejável · `Won't` fase futura.

**Alguma página ou seção merece destaque especial no menu ou na Home?**

> ✏️ A da apresentação da psicologa

---

## 3. 🎨 Identidade Visual e UI

**A marca já possui identidade visual?**

- [ ] Completa (logo + manual de marca) → *enviar os arquivos junto com este briefing*
- [ ] Parcial (apenas logo)
- [x ] Não existe → o agente deve propor direções visuais

### Cores

| Elemento | Cor (nome ou código hex, ex.: `#1A73E8`) | Se não souber o código, descreva a sensação desejada |
|---|---|---|
| 🔴 Cor primária da marca | 993300 | ex.: confiança, energia, sofisticação |
| ✨ Cor de ação/destaque (botões e CTAs) | 333399 | |
| Cores secundárias/de apoio | 336633 | |

**Fundo predominante:**

- [x ] Claro
- [ ] Escuro
- [ ] Ambos (alternância claro/escuro)
- [ ] Sem preferência → o agente decide com base no segmento e no público

### Tipografia

**Estilo desejado para os títulos:**

- [ x] Imponente e forte
- [ ] Moderno e geométrico (sem serifa)
- [ ] Elegante e clássico (com serifa)
- [ ] Descontraído e amigável
- [ ] Fonte específica:
- [ ] Sem preferência → o agente propõe

**Corpo de texto:** por padrão, o agente aplicará fonte sem serifa de alta leiturabilidade, tamanho mínimo de 16 px e contraste AA em qualquer tela. Alguma preferência diferente?

> ✏️

**Personalidade do site** (marque até 3):

- [ ] Minimalista
- [ ] Sofisticado
- [ ] Tecnológico
- [ ] Acolhedor
- [ ] Divertido
- [ ] Corporativo
- [ x] Artesanal
- [ ] Ousado

**Referências visuais** — sites ou perfis cujo visual você admira (link + o que chama sua atenção):

> ✏️ https://ramoswellness.com/about-z716KM

---

## 4. ⚙️ Funcionalidades Dinâmicas e Interação

Preencha **Precisa?** com `sim`/`não` e a **Prioridade** com `Must`/`Should`/`Could`/`Won't`:

| Funcionalidade | Precisa? | Prioridade | Detalhes para o agente |
|---|---|---|---|
| 📤 Formulário de orçamento personalizado |Won't | | Quais campos o formulário deve ter? |
| 📎 Upload de arquivos pelo cliente | Won't| | Tipos de arquivo e tamanho máximo? |
| 🖼️ Portfólio/galeria com filtros dinâmicos (sem recarregar a página) |Won't | | Quais categorias de filtro? |
| 📍 Mapa interativo + Google Perfil da Empresa |Won't | | Endereço completo? |
| 💬 Botão flutuante de WhatsApp | Must | | 555198571451 e mensagem de "Olá! Gostaria de falar sobre terapia." |
| 📰 Blog ou área de notícias | Won't | | Frequência de publicação? |
| 📅 Agendamento online | Won't | | Já usa alguma ferramenta? |
| 🛒 Loja virtual / e-commerce | Won't | | Quantidade estimada de produtos? |
| 🔐 Área restrita / login de clientes | Won't | | O que o cliente acessa lá dentro? |
| 🌐 Múltiplos idiomas | Won't | | Quais idiomas? |
| 📧 Captura de e-mails / newsletter | Won't | | Ferramenta de e-mail marketing? |
| Outra: | | | |

---

## 5. 💻 Experiência, Animações e Performance

**Nível de movimento desejado** (escolha um — em caso de dúvida, o padrão do agente é o Nível 1):

- [ ] **Nível 0 — Estático:** zero animações, prioridade absoluta em velocidade de carregamento
- [ ] **Nível 1 — Sutil:** transições suaves em botões, links e imagens *(padrão recomendado)*
- [ ] **Nível 2 — Moderado:** elementos surgem ao rolar a página (scroll-triggered)
- [ x ] **Nível 3 — Imersivo:** parallax, microinterações ricas e animações elaboradas *(o agente deve apontar o impacto em performance)*

**Por onde o público acessa principalmente?**

- [ x ] Celular (maioria)
- [ ] Computador (maioria)
- [ ] Equilibrado / não sei

**O público pode ter internet lenta (3G/4G fraco)?**

- [ x ] Sim → o agente deve priorizar mídia leve e carregamento progressivo
- [ ] Não
- [ ] Não sei

---

## 6. 🔐 Tecnologia, Gestão de Conteúdo e Integrações

**Painel administrativo (CMS):** você precisa atualizar o site sozinho, sem depender de desenvolvedor?

- [ x ] Sim, com frequência (toda semana) → CMS completo
- [ ] Sim, de vez em quando (todo mês) → CMS simplificado
- [ ] Não, mudanças raras → site mais simples, com atualizações sob demanda

**Se sim: o que será atualizado e por quem?** (ex.: "minha sócia trocará fotos do portfólio e preços"):

> ✏️

**Hospedagem e domínio:**

| Item | Resposta |
|---|---|
| Já possui domínio? Qual? | não tenho |
| Já possui hospedagem? Onde? | não tenho |
| Precisa de e-mail profissional ()? | deboramatos.psi@gmail.com |

**Preferências ou restrições técnicas** (ex.: "já uso WordPress", "não quero mensalidade", "indiferente — o agente decide"):

> ✏️

**Integrações necessárias:**

- [ ] Google Analytics 4
- [ ] Pixel da Meta (anúncios no Instagram/Facebook)
- [ ] Google Tag Manager
- [ ] CRM — qual?
- [ ] E-mail marketing — qual?
- [ ] Outra:

---

## 7. 🔍 SEO e Conteúdo

**Quais termos seus clientes digitariam no Google para encontrar você?** (liste de 3 a 5):

> ✏️

**Situação do site atual:**

- [x ] Não existe site — este é o primeiro
- [ ] Existe e será substituído → *o agente deve planejar redirecionamentos 301*
- [ ] Existe e continuará no ar em paralelo

**Quem produz os textos e as fotos?**

- [ ] Já tenho tudo pronto
- [ ] Eu mesmo vou criar
- [ ] Preciso de produção profissional (orçar à parte)
- [x ] O agente pode rascunhar os textos a partir deste briefing

---

## 8. 📅 Prazo, Orçamento e Restrições

| Item | Resposta |
|---|---|
| Data desejada de lançamento | em uma semana |
| Existe um motivo/evento para essa data? | não |
| Faixa de investimento disponível | zero reais no momento |
| O segmento possui restrições legais? (saúde, jurídico, financeiro…) | não |

**Algo mais que o agente deve saber?** (expectativas, receios, detalhes importantes):

> ✏️

---

## ✅ Checklist final antes de enviar (humano)

- [ x] Preenchi todos os campos 🔴 obrigatórios
- [x ] Anexei logo e materiais de marca (se existirem)
- [x ] Incluí links de referência e de concorrentes
- [ x] Revisei as prioridades (Must/Should/Could/Won't)
- [ x] Defini a ação principal de conversão (Seção 1)

---

## 📖 Glossário rápido

| Termo | Significado |
|---|---|
| **CTA** | Call to Action — botão de ação principal, ex.: "Peça um orçamento" |
| **CMS** | Painel administrativo para editar o site sem saber programar |
| **Responsivo** | Site que se adapta a celular, tablet e computador |
| **Scroll-triggered** | Animações que acontecem conforme a página é rolada |
| **MoSCoW** | Método de priorização: Must (essencial), Should (importante), Could (desejável), Won't (fica para depois) |
| **Core Web Vitals** | Métricas do Google que medem velocidade e estabilidade visual do site |
| **LGPD** | Lei Geral de Proteção de Dados — regras para coletar dados de visitantes |
| **Redirecionamento 301** | Aviso ao Google de que uma página antiga mudou de endereço, preservando o ranqueamento |
| **Design tokens** | Lista padronizada de cores, fontes e espaçamentos que garante consistência visual |
