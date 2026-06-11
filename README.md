# Site — Débora Matos · Psicóloga

Onepager estático construído com [Astro](https://astro.build). Planejamento completo em
[plano-arquitetura-site.md](plano-arquitetura-site.md), gerado a partir de
[briefing-estrategico-site-id77.md](briefing-estrategico-site-id77.md).

## Comandos

| Comando | Ação |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Servidor local em `http://localhost:4321` |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Pré-visualiza o build de produção |

## Deploy contínuo na Vercel (gratuito)

1. Crie um repositório no GitHub e envie este projeto (`git push`).
2. Em [vercel.com](https://vercel.com), faça login com o GitHub e clique em **Add New → Project**.
3. Importe o repositório — a Vercel detecta o Astro automaticamente (nenhuma configuração extra).
4. O site fica disponível em `https://<nome-do-projeto>.vercel.app`; cada `git push` na branch
   principal gera um novo deploy.

## ⚠️ Pendências antes do lançamento (ver `src/consts.ts`)

- **Número do WhatsApp**: o valor do briefing tem 8 dígitos após o DDD (celulares têm 9) — confirmar.
- **CRP e nome completo**: exigidos pelo CFP para publicidade de serviços de psicologia.
- **Foto profissional** da Débora (substituir os placeholders no Hero e na seção Sobre).
- **Textos**: todos são rascunhos do agente e precisam da aprovação da Débora.
