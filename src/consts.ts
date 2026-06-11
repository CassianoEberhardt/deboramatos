// Dados centrais do site — única fonte da verdade para contato e identidade.

// ⚠️ PENDÊNCIA (briefing): número informado tem 8 dígitos após o DDD 51,
// mas celulares no Brasil têm 9. Confirmar com a Débora antes do lançamento
// (provável correto: 5551998571451). NÃO publicar sem confirmar.
export const WHATSAPP_NUMBER = '555198571451';

export const WHATSAPP_MESSAGE = 'Olá! Gostaria de falar sobre terapia.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const SITE_TITLE = 'Débora Matos · Psicóloga — Terapia online (TCC)';

export const SITE_DESCRIPTION =
  'Psicoterapia online com base na Terapia Cognitivo-Comportamental (TCC) para adolescentes e adultos de todo o Brasil. Atendimento acolhedor, em português, com valores acessíveis.';

// ⚠️ PENDÊNCIA: nome completo e CRP são exigidos pelo CFP para publicidade
// de serviços de psicologia. Substituir antes do lançamento.
export const FULL_NAME = 'Débora Matos';
export const CRP = 'CRP 00/00000 (pendente)';

export const EMAIL = 'deboramatos.psi@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/matosdebora/';
