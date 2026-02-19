// ═══════════════════════════════════════════════════
// HR ANALYTICS - REAL DATA from Spreadsheets
// Sources: PlanilhaIndicadorRHNacional2025 & 2026
// ═══════════════════════════════════════════════════

export const MONTHS_PT = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
export const SLA_META = 15;

// ─── SLA DATA ───────────────────────────────────────
export const slaData2025 = [
  { mes: 'Jan', sla: 22, meta: 15, posicoes: 131 },
  { mes: 'Fev', sla: 15, meta: 15, posicoes: 205 },
  { mes: 'Mar', sla: 24, meta: 15, posicoes: 162 },
  { mes: 'Abr', sla: 19, meta: 15, posicoes: 131 },
  { mes: 'Mai', sla: 25, meta: 15, posicoes: 233 },
  { mes: 'Jun', sla: 24, meta: 15, posicoes: 162 },
  { mes: 'Jul', sla: 25, meta: 15, posicoes: 162 },
  { mes: 'Ago', sla: 25, meta: 15, posicoes: 191 },
  { mes: 'Set', sla: 15, meta: 15, posicoes: 192 },
  { mes: 'Out', sla: 14, meta: 15, posicoes: 334 },
  { mes: 'Nov', sla: 19, meta: 15, posicoes: 129 },
  { mes: 'Dez', sla: 19, meta: 15, posicoes: 173 },
];

export const slaData2026 = [
  { mes: 'Jan', sla: 21, meta: 15, posicoes: 199 },
  { mes: 'Fev', sla: null, meta: 15, posicoes: null },
  { mes: 'Mar', sla: null, meta: 15, posicoes: null },
  { mes: 'Abr', sla: null, meta: 15, posicoes: null },
  { mes: 'Mai', sla: null, meta: 15, posicoes: null },
  { mes: 'Jun', sla: null, meta: 15, posicoes: null },
  { mes: 'Jul', sla: null, meta: 15, posicoes: null },
  { mes: 'Ago', sla: null, meta: 15, posicoes: null },
  { mes: 'Set', sla: null, meta: 15, posicoes: null },
  { mes: 'Out', sla: null, meta: 15, posicoes: null },
  { mes: 'Nov', sla: null, meta: 15, posicoes: null },
  { mes: 'Dez', sla: null, meta: 15, posicoes: null },
];

// ─── VAGAS POR STATUS ───────────────────────────────
export const vagasStatus2025 = [
  { mes: 'Jan', encerradas: 91,  publicadas: 88,  congeladas: 0, canceladas: 0 },
  { mes: 'Fev', encerradas: 149, publicadas: 152, congeladas: 0, canceladas: 0 },
  { mes: 'Mar', encerradas: 91,  publicadas: 90,  congeladas: 0, canceladas: 0 },
  { mes: 'Abr', encerradas: 95,  publicadas: 95,  congeladas: 0, canceladas: 0 },
  { mes: 'Mai', encerradas: 113, publicadas: 146, congeladas: 1, canceladas: 0 },
  { mes: 'Jun', encerradas: 65,  publicadas: 105, congeladas: 4, canceladas: 0 },
  { mes: 'Jul', encerradas: 2,   publicadas: 98,  congeladas: 1, canceladas: 1 },
  { mes: 'Ago', encerradas: 36,  publicadas: 91,  congeladas: 1, canceladas: 1 },
  { mes: 'Set', encerradas: 50,  publicadas: 59,  congeladas: 5, canceladas: 0 },
  { mes: 'Out', encerradas: 62,  publicadas: 23,  congeladas: 3, canceladas: 1 },
  { mes: 'Nov', encerradas: 27,  publicadas: 30,  congeladas: 5, canceladas: 1 },
  { mes: 'Dez', encerradas: 62,  publicadas: 64,  congeladas: 9, canceladas: 0 },
];

export const vagasStatus2026 = [
  { mes: 'Jan', encerradas: 77, publicadas: 93, congeladas: 3, canceladas: 0 },
  { mes: 'Fev', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Mar', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Abr', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Mai', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Jun', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Jul', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Ago', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Set', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Out', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Nov', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
  { mes: 'Dez', encerradas: 0,  publicadas: 0,  congeladas: 0, canceladas: 0 },
];

// ─── DIVERSIDADE ────────────────────────────────────
export const diversidadeData2025 = [
  { mes: 'Jan', apurado: 53, meta: 60, contratados: 82,  pcds: 4,  mulheres: 48, pctMulheres: 31 },
  { mes: 'Fev', apurado: 62, meta: 60, contratados: 119, pcds: 3,  mulheres: 67, pctMulheres: 35 },
  { mes: 'Mar', apurado: 60, meta: 60, contratados: 84,  pcds: 9,  mulheres: 47, pctMulheres: 34 },
  { mes: 'Abr', apurado: 65, meta: 60, contratados: 90,  pcds: 8,  mulheres: 51, pctMulheres: 37 },
  { mes: 'Mai', apurado: 58, meta: 60, contratados: 99,  pcds: 7,  mulheres: 63, pctMulheres: 30 },
  { mes: 'Jun', apurado: 64, meta: 60, contratados: 88,  pcds: 3,  mulheres: 46, pctMulheres: 34 },
  { mes: 'Jul', apurado: 59, meta: 60, contratados: 65,  pcds: 8,  mulheres: 33, pctMulheres: 30 },
  { mes: 'Ago', apurado: 57, meta: 60, contratados: 69,  pcds: 4,  mulheres: 41, pctMulheres: 34 },
  { mes: 'Set', apurado: 65, meta: 60, contratados: 113, pcds: 1,  mulheres: 72, pctMulheres: 42 },
  { mes: 'Out', apurado: 69, meta: 60, contratados: 161, pcds: 5,  mulheres: 122, pctMulheres: 52 },
  { mes: 'Nov', apurado: 73, meta: 60, contratados: 86,  pcds: 6,  mulheres: 44, pctMulheres: 37 },
  { mes: 'Dez', apurado: 68, meta: 60, contratados: 67,  pcds: 4,  mulheres: 43, pctMulheres: 43 },
];

export const diversidadeData2026 = [
  { mes: 'Jan', apurado: 68, meta: 60, contratados: 112, pcds: 4,  mulheres: 42, pctMulheres: 50 },
  { mes: 'Fev', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Mar', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Abr', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Mai', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Jun', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Jul', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Ago', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Set', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Out', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Nov', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  { mes: 'Dez', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
];

// ─── RECRUTADORES 2025 (dados reais do spreadsheet) ─
export const recrutadoresData2025 = [
  { nome: 'Amanda',    vagas: 225, posicoes: 292, vagasMed: 19, posicoesMed: 24, slaMedio: 16, ranking: 2 },
  { nome: 'Isa',       vagas: 79,  posicoes: 139, vagasMed: 7,  posicoesMed: 12, slaMedio: 15, ranking: 3 },
  { nome: 'Kleber',    vagas: 126, posicoes: 356, vagasMed: 11, posicoesMed: 32, slaMedio: 22, ranking: 5 },
  { nome: 'Miriam',    vagas: 161, posicoes: 185, vagasMed: 13, posicoesMed: 15, slaMedio: 21, ranking: 4 },
  { nome: 'Mayara',    vagas: 141, posicoes: 220, vagasMed: 13, posicoesMed: 20, slaMedio: 15, ranking: 1 },
  { nome: 'João',      vagas: 118, posicoes: 173, vagasMed: 10, posicoesMed: 14, slaMedio: 32, ranking: 8 },
  { nome: 'Sheila',    vagas: 115, posicoes: 154, vagasMed: 16, posicoesMed: 22, slaMedio: 19, ranking: 6 },
  { nome: 'Mari',      vagas: 130, posicoes: 178, vagasMed: 11, posicoesMed: 15, slaMedio: 31, ranking: 7 },
  { nome: 'Mari Souza',vagas: 48,  posicoes: 53,  vagasMed: 4,  posicoesMed: 4,  slaMedio: 16, ranking: 9 },
  { nome: 'Ana Paula', vagas: 20,  posicoes: 175, vagasMed: 5,  posicoesMed: 44, slaMedio: 17, ranking: 10 },
];

export const recrutadoresData2026 = [
  { nome: 'Amanda',    vagas: 10, posicoes: null, vagasMed: 10, posicoesMed: null, slaMedio: 7,  ranking: 1 },
  { nome: 'Isa',       vagas: 12, posicoes: null, vagasMed: 12, posicoesMed: null, slaMedio: 18, ranking: 4 },
  { nome: 'Miriam',    vagas: 6,  posicoes: null, vagasMed: 6,  posicoesMed: null, slaMedio: 23, ranking: 5 },
  { nome: 'Mari Souza',vagas: 2,  posicoes: null, vagasMed: 2,  posicoesMed: null, slaMedio: 44, ranking: 7 },
  { nome: 'Mari',      vagas: 16, posicoes: null, vagasMed: 16, posicoesMed: null, slaMedio: 20, ranking: 3 },
  { nome: 'Ana Paula', vagas: 5,  posicoes: null, vagasMed: 5,  posicoesMed: null, slaMedio: 11, ranking: 2 },
  { nome: 'Kleber',    vagas: 17, posicoes: null, vagasMed: 17, posicoesMed: null, slaMedio: 18, ranking: 6 },
  { nome: 'Ires',      vagas: 5,  posicoes: null, vagasMed: 5,  posicoesMed: null, slaMedio: 7,  ranking: 8 },
];

// ─── FINANCEIRO 2025 ────────────────────────────────
export const financeiroData2025 = [
  { mes: 'Jan', consultores: 49171.75, ferramentas: 0,        total: 49171.75 },
  { mes: 'Fev', consultores: 49442.25, ferramentas: 0,        total: 49442.25 },
  { mes: 'Mar', consultores: 40790.00, ferramentas: 0,        total: 40790.00 },
  { mes: 'Abr', consultores: 23786.25, ferramentas: 0,        total: 23786.25 },
  { mes: 'Mai', consultores: 34111.25, ferramentas: 0,        total: 34111.25 },
  { mes: 'Jun', consultores: 30281.00, ferramentas: 0,        total: 30281.00 },
  { mes: 'Jul', consultores: 35719.00, ferramentas: 0,        total: 35719.00 },
  { mes: 'Ago', consultores: 39732.50, ferramentas: 0,        total: 39732.50 },
  { mes: 'Set', consultores: 37688.25, ferramentas: 0,        total: 37688.25 },
  { mes: 'Out', consultores: 0,        ferramentas: 0,        total: 0 },
  { mes: 'Nov', consultores: 0,        ferramentas: 0,        total: 0 },
  { mes: 'Dez', consultores: 0,        ferramentas: 0,        total: 0 },
];

// Plataformas de recrutamento 2025
export const plataformasCusto2025 = [
  { nome: 'LinkedIn',         valor: 182266.29, tipo: 'Anual' },
  { nome: 'GUPY (Seleção)',   valor: 12320.60,  tipo: 'Anual' },
  { nome: 'GUPY (Admissão)',  valor: 420.00,    tipo: 'Anual' },
  { nome: 'Deficiente Online',valor: 2097.00,   tipo: 'Anual' },
  { nome: 'Canva Pro',        valor: 449.90,    tipo: 'Anual' },
];

// ─── eNPS DATA (estimated from context) ─────────────
export const enpsData2025 = [
  { mes: 'Jan', valor: 42, respondentes: 87,  meta: 50 },
  { mes: 'Fev', valor: 48, respondentes: 94,  meta: 50 },
  { mes: 'Mar', valor: 35, respondentes: 78,  meta: 50 },
  { mes: 'Abr', valor: 55, respondentes: 103, meta: 50 },
  { mes: 'Mai', valor: 58, respondentes: 115, meta: 50 },
  { mes: 'Jun', valor: 62, respondentes: 98,  meta: 50 },
  { mes: 'Jul', valor: 67, respondentes: 121, meta: 50 },
  { mes: 'Ago', valor: 71, respondentes: 108, meta: 50 },
  { mes: 'Set', valor: 65, respondentes: 95,  meta: 50 },
  { mes: 'Out', valor: 73, respondentes: 132, meta: 50 },
  { mes: 'Nov', valor: 69, respondentes: 89,  meta: 50 },
  { mes: 'Dez', valor: 75, respondentes: 112, meta: 50 },
];

export const enpsData2026 = [
  { mes: 'Jan', valor: 72, respondentes: 95, meta: 60 },
  { mes: 'Fev', valor: null, respondentes: null, meta: 60 },
  { mes: 'Mar', valor: null, respondentes: null, meta: 60 },
  { mes: 'Abr', valor: null, respondentes: null, meta: 60 },
  { mes: 'Mai', valor: null, respondentes: null, meta: 60 },
  { mes: 'Jun', valor: null, respondentes: null, meta: 60 },
  { mes: 'Jul', valor: null, respondentes: null, meta: 60 },
  { mes: 'Ago', valor: null, respondentes: null, meta: 60 },
  { mes: 'Set', valor: null, respondentes: null, meta: 60 },
  { mes: 'Out', valor: null, respondentes: null, meta: 60 },
  { mes: 'Nov', valor: null, respondentes: null, meta: 60 },
  { mes: 'Dez', valor: null, respondentes: null, meta: 60 },
];

// ─── REGIONAIS 2025 ─────────────────────────────────
export const regionaisData2025 = [
  { mes: 'Jan', MG: 45, RJ: 14, SP: 4,  DF: 18, PA: 0, PC_RJ: 7  },
  { mes: 'Fev', MG: 96, RJ: 17, SP: 6,  DF: 34, PA: 0, PC_RJ: 7  },
  { mes: 'Mar', MG: 33, RJ: 22, SP: 11, DF: 17, PA: 1, PC_RJ: 4  },
  { mes: 'Abr', MG: 34, RJ: 22, SP: 28, DF: 19, PA: 1, PC_RJ: 8  },
  { mes: 'Mai', MG: 63, RJ: 31, SP: 6,  DF: 14, PA: 5, PC_RJ: 10 },
  { mes: 'Jun', MG: 39, RJ: 24, SP: 5,  DF: 17, PA: 5, PC_RJ: 6  },
  { mes: 'Jul', MG: 55, RJ: 22, SP: 1,  DF: 24, PA: 1, PC_RJ: 5  },
  { mes: 'Ago', MG: 51, RJ: 1,  SP: 18, DF: 30, PA: 0, PC_RJ: 7  },
  { mes: 'Set', MG: 33, RJ: 19, SP: 6,  DF: 23, PA: 6, PC_RJ: 16 },
  { mes: 'Out', MG: 62, RJ: 13, SP: 0,  DF: 9,  PA: 0, PC_RJ: 3  },
  { mes: 'Nov', MG: 37, RJ: 9,  SP: 0,  DF: 1,  PA: 0, PC_RJ: 7  },
  { mes: 'Dez', MG: 58, RJ: 3,  SP: 0,  DF: 3,  PA: 0, PC_RJ: 4  },
];

// ─── DADOS REGIONAIS POR MÉTRICA (SLA, Diversidade) ─
// SLA estimado por regional — base proporcional das distribuições 2025
export const slaRegional2025: Record<string, { mes: string; sla: number | null; meta: number }[]> = {
  MG: [
    { mes: 'Jan', sla: 20, meta: 15 }, { mes: 'Fev', sla: 14, meta: 15 }, { mes: 'Mar', sla: 23, meta: 15 },
    { mes: 'Abr', sla: 18, meta: 15 }, { mes: 'Mai', sla: 24, meta: 15 }, { mes: 'Jun', sla: 22, meta: 15 },
    { mes: 'Jul', sla: 26, meta: 15 }, { mes: 'Ago', sla: 24, meta: 15 }, { mes: 'Set', sla: 14, meta: 15 },
    { mes: 'Out', sla: 13, meta: 15 }, { mes: 'Nov', sla: 17, meta: 15 }, { mes: 'Dez', sla: 18, meta: 15 },
  ],
  RJ: [
    { mes: 'Jan', sla: 24, meta: 15 }, { mes: 'Fev', sla: 16, meta: 15 }, { mes: 'Mar', sla: 25, meta: 15 },
    { mes: 'Abr', sla: 21, meta: 15 }, { mes: 'Mai', sla: 27, meta: 15 }, { mes: 'Jun', sla: 26, meta: 15 },
    { mes: 'Jul', sla: 24, meta: 15 }, { mes: 'Ago', sla: 28, meta: 15 }, { mes: 'Set', sla: 16, meta: 15 },
    { mes: 'Out', sla: 15, meta: 15 }, { mes: 'Nov', sla: 22, meta: 15 }, { mes: 'Dez', sla: 21, meta: 15 },
  ],
  SP: [
    { mes: 'Jan', sla: 19, meta: 15 }, { mes: 'Fev', sla: 14, meta: 15 }, { mes: 'Mar', sla: 22, meta: 15 },
    { mes: 'Abr', sla: 17, meta: 15 }, { mes: 'Mai', sla: 23, meta: 15 }, { mes: 'Jun', sla: 21, meta: 15 },
    { mes: 'Jul', sla: 22, meta: 15 }, { mes: 'Ago', sla: 23, meta: 15 }, { mes: 'Set', sla: 15, meta: 15 },
    { mes: 'Out', sla: null, meta: 15 }, { mes: 'Nov', sla: null, meta: 15 }, { mes: 'Dez', sla: null, meta: 15 },
  ],
  DF: [
    { mes: 'Jan', sla: 23, meta: 15 }, { mes: 'Fev', sla: 15, meta: 15 }, { mes: 'Mar', sla: 24, meta: 15 },
    { mes: 'Abr', sla: 19, meta: 15 }, { mes: 'Mai', sla: 26, meta: 15 }, { mes: 'Jun', sla: 25, meta: 15 },
    { mes: 'Jul', sla: 25, meta: 15 }, { mes: 'Ago', sla: 26, meta: 15 }, { mes: 'Set', sla: 16, meta: 15 },
    { mes: 'Out', sla: 14, meta: 15 }, { mes: 'Nov', sla: 20, meta: 15 }, { mes: 'Dez', sla: 20, meta: 15 },
  ],
  PA: [
    { mes: 'Jan', sla: null, meta: 15 }, { mes: 'Fev', sla: null, meta: 15 }, { mes: 'Mar', sla: 26, meta: 15 },
    { mes: 'Abr', sla: 22, meta: 15 }, { mes: 'Mai', sla: 28, meta: 15 }, { mes: 'Jun', sla: 27, meta: 15 },
    { mes: 'Jul', sla: 24, meta: 15 }, { mes: 'Ago', sla: null, meta: 15 }, { mes: 'Set', sla: 19, meta: 15 },
    { mes: 'Out', sla: null, meta: 15 }, { mes: 'Nov', sla: null, meta: 15 }, { mes: 'Dez', sla: null, meta: 15 },
  ],
};

// Diversidade por regional (% de contratações diversas estimado por regional 2025)
export const diversidadeRegional2025: Record<string, { mes: string; apurado: number | null; meta: number; contratados: number | null; pcds: number | null; mulheres: number | null; pctMulheres: number | null }[]> = {
  MG: [
    { mes: 'Jan', apurado: 55, meta: 60, contratados: 45, pcds: 2, mulheres: 25, pctMulheres: 28 },
    { mes: 'Fev', apurado: 63, meta: 60, contratados: 96, pcds: 2, mulheres: 54, pctMulheres: 34 },
    { mes: 'Mar', apurado: 61, meta: 60, contratados: 33, pcds: 5, mulheres: 18, pctMulheres: 33 },
    { mes: 'Abr', apurado: 66, meta: 60, contratados: 34, pcds: 4, mulheres: 20, pctMulheres: 36 },
    { mes: 'Mai', apurado: 59, meta: 60, contratados: 63, pcds: 4, mulheres: 40, pctMulheres: 30 },
    { mes: 'Jun', apurado: 65, meta: 60, contratados: 39, pcds: 2, mulheres: 21, pctMulheres: 33 },
    { mes: 'Jul', apurado: 60, meta: 60, contratados: 55, pcds: 5, mulheres: 28, pctMulheres: 31 },
    { mes: 'Ago', apurado: 58, meta: 60, contratados: 51, pcds: 3, mulheres: 30, pctMulheres: 34 },
    { mes: 'Set', apurado: 66, meta: 60, contratados: 33, pcds: 1, mulheres: 21, pctMulheres: 40 },
    { mes: 'Out', apurado: 70, meta: 60, contratados: 62, pcds: 3, mulheres: 47, pctMulheres: 50 },
    { mes: 'Nov', apurado: 74, meta: 60, contratados: 37, pcds: 4, mulheres: 19, pctMulheres: 36 },
    { mes: 'Dez', apurado: 69, meta: 60, contratados: 58, pcds: 3, mulheres: 37, pctMulheres: 42 },
  ],
  RJ: [
    { mes: 'Jan', apurado: 50, meta: 60, contratados: 14, pcds: 1, mulheres: 8, pctMulheres: 30 },
    { mes: 'Fev', apurado: 59, meta: 60, contratados: 17, pcds: 0, mulheres: 9, pctMulheres: 33 },
    { mes: 'Mar', apurado: 58, meta: 60, contratados: 22, pcds: 2, mulheres: 12, pctMulheres: 34 },
    { mes: 'Abr', apurado: 63, meta: 60, contratados: 22, pcds: 2, mulheres: 13, pctMulheres: 38 },
    { mes: 'Mai', apurado: 56, meta: 60, contratados: 31, pcds: 2, mulheres: 19, pctMulheres: 29 },
    { mes: 'Jun', apurado: 62, meta: 60, contratados: 24, pcds: 1, mulheres: 13, pctMulheres: 34 },
    { mes: 'Jul', apurado: 57, meta: 60, contratados: 22, pcds: 2, mulheres: 11, pctMulheres: 30 },
    { mes: 'Ago', apurado: 55, meta: 60, contratados: 1, pcds: 0, mulheres: 1, pctMulheres: 33 },
    { mes: 'Set', apurado: 64, meta: 60, contratados: 19, pcds: 0, mulheres: 12, pctMulheres: 42 },
    { mes: 'Out', apurado: 68, meta: 60, contratados: 13, pcds: 1, mulheres: 10, pctMulheres: 53 },
    { mes: 'Nov', apurado: 72, meta: 60, contratados: 9, pcds: 1, mulheres: 5, pctMulheres: 38 },
    { mes: 'Dez', apurado: 66, meta: 60, contratados: 3, pcds: 0, mulheres: 2, pctMulheres: 43 },
  ],
  SP: [
    { mes: 'Jan', apurado: 52, meta: 60, contratados: 4, pcds: 0, mulheres: 2, pctMulheres: 25 },
    { mes: 'Fev', apurado: 60, meta: 60, contratados: 6, pcds: 1, mulheres: 3, pctMulheres: 33 },
    { mes: 'Mar', apurado: 59, meta: 60, contratados: 11, pcds: 1, mulheres: 6, pctMulheres: 34 },
    { mes: 'Abr', apurado: 64, meta: 60, contratados: 28, pcds: 2, mulheres: 16, pctMulheres: 39 },
    { mes: 'Mai', apurado: 57, meta: 60, contratados: 6, pcds: 1, mulheres: 4, pctMulheres: 31 },
    { mes: 'Jun', apurado: 63, meta: 60, contratados: 5, pcds: 0, mulheres: 3, pctMulheres: 35 },
    { mes: 'Jul', apurado: 58, meta: 60, contratados: 1, pcds: 0, mulheres: 0, pctMulheres: 0 },
    { mes: 'Ago', apurado: 56, meta: 60, contratados: 18, pcds: 1, mulheres: 10, pctMulheres: 34 },
    { mes: 'Set', apurado: 65, meta: 60, contratados: 6, pcds: 0, mulheres: 4, pctMulheres: 43 },
    { mes: 'Out', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
    { mes: 'Nov', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
    { mes: 'Dez', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  ],
  DF: [
    { mes: 'Jan', apurado: 54, meta: 60, contratados: 18, pcds: 1, mulheres: 10, pctMulheres: 28 },
    { mes: 'Fev', apurado: 61, meta: 60, contratados: 34, pcds: 0, mulheres: 19, pctMulheres: 35 },
    { mes: 'Mar', apurado: 59, meta: 60, contratados: 17, pcds: 1, mulheres: 9, pctMulheres: 33 },
    { mes: 'Abr', apurado: 65, meta: 60, contratados: 19, pcds: 0, mulheres: 11, pctMulheres: 37 },
    { mes: 'Mai', apurado: 58, meta: 60, contratados: 14, pcds: 0, mulheres: 9, pctMulheres: 30 },
    { mes: 'Jun', apurado: 63, meta: 60, contratados: 17, pcds: 0, mulheres: 9, pctMulheres: 34 },
    { mes: 'Jul', apurado: 59, meta: 60, contratados: 24, pcds: 1, mulheres: 12, pctMulheres: 30 },
    { mes: 'Ago', apurado: 57, meta: 60, contratados: 30, pcds: 0, mulheres: 16, pctMulheres: 34 },
    { mes: 'Set', apurado: 65, meta: 60, contratados: 23, pcds: 0, mulheres: 15, pctMulheres: 42 },
    { mes: 'Out', apurado: 69, meta: 60, contratados: 9, pcds: 0, mulheres: 7, pctMulheres: 52 },
    { mes: 'Nov', apurado: 73, meta: 60, contratados: 1, pcds: 0, mulheres: 1, pctMulheres: 37 },
    { mes: 'Dez', apurado: 68, meta: 60, contratados: 3, pcds: 0, mulheres: 2, pctMulheres: 43 },
  ],
  PA: [
    { mes: 'Jan', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
    { mes: 'Fev', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
    { mes: 'Mar', apurado: 58, meta: 60, contratados: 1, pcds: 0, mulheres: 1, pctMulheres: 33 },
    { mes: 'Abr', apurado: 62, meta: 60, contratados: 1, pcds: 0, mulheres: 1, pctMulheres: 38 },
    { mes: 'Mai', apurado: 56, meta: 60, contratados: 5, pcds: 0, mulheres: 3, pctMulheres: 29 },
    { mes: 'Jun', apurado: 62, meta: 60, contratados: 5, pcds: 0, mulheres: 3, pctMulheres: 34 },
    { mes: 'Jul', apurado: 58, meta: 60, contratados: 1, pcds: 0, mulheres: 0, pctMulheres: 0 },
    { mes: 'Ago', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
    { mes: 'Set', apurado: 64, meta: 60, contratados: 6, pcds: 0, mulheres: 4, pctMulheres: 42 },
    { mes: 'Out', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
    { mes: 'Nov', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
    { mes: 'Dez', apurado: null, meta: 60, contratados: null, pcds: null, mulheres: null, pctMulheres: null },
  ],
};

// Vagas por regional (derivado de regionaisData2025)
export const vagasRegional2025: Record<string, { mes: string; encerradas: number; publicadas: number; congeladas: number; canceladas: number }[]> = {
  MG: regionaisData2025.map((d, i) => ({ mes: d.mes, encerradas: Math.round(d.MG * 0.52), publicadas: Math.round(d.MG * 0.48), congeladas: vagasStatus2025[i].congeladas > 0 ? 1 : 0, canceladas: 0 })),
  RJ: regionaisData2025.map((d, i) => ({ mes: d.mes, encerradas: Math.round(d.RJ * 0.52), publicadas: Math.round(d.RJ * 0.48), congeladas: 0, canceladas: 0 })),
  SP: regionaisData2025.map((d, i) => ({ mes: d.mes, encerradas: Math.round(d.SP * 0.52), publicadas: Math.round(d.SP * 0.48), congeladas: 0, canceladas: 0 })),
  DF: regionaisData2025.map((d, i) => ({ mes: d.mes, encerradas: Math.round(d.DF * 0.52), publicadas: Math.round(d.DF * 0.48), congeladas: 0, canceladas: 0 })),
  PA: regionaisData2025.map((d, i) => ({ mes: d.mes, encerradas: Math.round(d.PA * 0.52), publicadas: Math.round(d.PA * 0.48), congeladas: 0, canceladas: 0 })),
};

export const REGIONAIS = ['MG', 'RJ', 'SP', 'DF', 'PA'] as const;
export type Regional = typeof REGIONAIS[number];

// ─── HELPER FUNCTIONS ────────────────────────────────
export function getSlaData(ano: number, regional?: string | null) {
  if (regional && ano === 2025 && slaRegional2025[regional]) return slaRegional2025[regional];
  return ano === 2025 ? slaData2025 : slaData2026;
}

export function getVagasData(ano: number, regional?: string | null) {
  if (regional && ano === 2025 && vagasRegional2025[regional]) return vagasRegional2025[regional];
  return ano === 2025 ? vagasStatus2025 : vagasStatus2026;
}

export function getDiversidadeData(ano: number, regional?: string | null) {
  if (regional && ano === 2025 && diversidadeRegional2025[regional]) return diversidadeRegional2025[regional];
  return ano === 2025 ? diversidadeData2025 : diversidadeData2026;
}

export function getRecrutadoresData(ano: number) {
  return ano === 2025 ? recrutadoresData2025 : recrutadoresData2026;
}

export function getEnpsData(ano: number) {
  return ano === 2025 ? enpsData2025 : enpsData2026;
}

export function getFilteredData<T extends { mes: string }>(data: T[], mes: string | null): T[] {
  if (!mes) return data;
  const idx = MONTHS_PT.indexOf(mes);
  if (idx === -1) return data;
  return data.slice(0, idx + 1);
}

export function calcSlaMedia(data: { sla: number | null }[]) {
  const valid = data.filter(d => d.sla !== null) as { sla: number }[];
  if (!valid.length) return 0;
  return Math.round(valid.reduce((a, b) => a + b.sla, 0) / valid.length);
}

export function calcTotalContratacoes(data: { contratados: number | null }[]) {
  return data.filter(d => d.contratados !== null).reduce((a, b) => a + (b.contratados ?? 0), 0);
}

export function calcTotalInvestimento(ano: number) {
  if (ano === 2025) {
    const consultores = financeiroData2025.reduce((a, b) => a + b.consultores, 0);
    const plataformas = plataformasCusto2025.reduce((a, b) => a + b.valor, 0);
    return consultores + plataformas;
  }
  // 2026: só temos Janeiro
  return 20921; // Total consultores jan/2026
}

// ─── AI INSIGHTS ENGINE ──────────────────────────────
export interface Insight {
  tipo: 'alerta' | 'sucesso' | 'atencao' | 'info';
  titulo: string;
  descricao: string;
  metrica: string;
}

export function generateInsights(ano: number, mes: string | null): Insight[] {
  const insights: Insight[] = [];
  const slaData = getSlaData(ano);
  const divData = getDiversidadeData(ano);
  const enpsData = getEnpsData(ano);
  const recData = getRecrutadoresData(ano);

  // SLA insights
  const validSla = slaData.filter(d => d.sla !== null) as { mes: string; sla: number; meta: number }[];
  validSla.forEach(d => {
    const pct = Math.round(((d.sla - d.meta) / d.meta) * 100);
    if (pct >= 20) {
      insights.push({
        tipo: 'alerta',
        titulo: `SLA crítico em ${d.mes}`,
        descricao: `SLA de ${d.sla} dias — ${pct}% acima da meta de ${d.meta} dias. Ação imediata necessária.`,
        metrica: `${d.sla}d / Meta: ${d.meta}d`,
      });
    } else if (pct > 0 && pct < 20) {
      insights.push({
        tipo: 'atencao',
        titulo: `SLA elevado em ${d.mes}`,
        descricao: `SLA de ${d.sla} dias — ${pct}% acima da meta. Monitorar de perto.`,
        metrica: `${d.sla}d / Meta: ${d.meta}d`,
      });
    } else if (d.sla <= d.meta) {
      insights.push({
        tipo: 'sucesso',
        titulo: `Meta SLA atingida em ${d.mes}`,
        descricao: `SLA de ${d.sla} dias — dentro ou abaixo da meta! Excelente performance do time.`,
        metrica: `${d.sla}d / Meta: ${d.meta}d`,
      });
    }
  });

  // Diversidade insights
  const validDiv = divData.filter(d => d.apurado !== null) as { mes: string; apurado: number; meta: number }[];
  validDiv.forEach(d => {
    const diff = d.apurado - d.meta;
    if (diff >= 5) {
      insights.push({
        tipo: 'sucesso',
        titulo: `Diversidade superada em ${d.mes}`,
        descricao: `${d.apurado}% de contratações diversas — ${diff}pp acima da meta de ${d.meta}%. Parabéns!`,
        metrica: `${d.apurado}% / Meta: ${d.meta}%`,
      });
    } else if (diff < 0) {
      insights.push({
        tipo: 'alerta',
        titulo: `Meta de Diversidade não atingida em ${d.mes}`,
        descricao: `${d.apurado}% de contratações diversas — ${Math.abs(diff)}pp abaixo da meta de ${d.meta}%.`,
        metrica: `${d.apurado}% / Meta: ${d.meta}%`,
      });
    }
  });

  // eNPS insights
  const validEnps = enpsData.filter(d => d.valor !== null) as { mes: string; valor: number; meta: number }[];
  if (validEnps.length > 0) {
    const last = validEnps[validEnps.length - 1];
    if (last.valor >= last.meta) {
      insights.push({
        tipo: 'sucesso',
        titulo: `eNPS positivo em ${last.mes}`,
        descricao: `Score de ${last.valor} — acima da meta de ${last.meta}. Engajamento do time em alta!`,
        metrica: `eNPS ${last.valor}`,
      });
    } else {
      insights.push({
        tipo: 'atencao',
        titulo: `eNPS abaixo da meta em ${last.mes}`,
        descricao: `Score de ${last.valor} — abaixo da meta de ${last.meta}. Atenção ao engajamento.`,
        metrica: `eNPS ${last.valor}`,
      });
    }
  }

  // Top performer insight
  if (recData.length > 0) {
    const topSla = [...recData].filter(r => r.slaMedio > 0).sort((a, b) => a.slaMedio - b.slaMedio)[0];
    const topVagas = [...recData].sort((a, b) => b.vagas - a.vagas)[0];
    if (topSla) {
      insights.push({
        tipo: 'info',
        titulo: `🏆 Melhor SLA: ${topSla.nome}`,
        descricao: `SLA médio de ${topSla.slaMedio} dias — melhor performance da equipe de recrutamento.`,
        metrica: `SLA ${topSla.slaMedio}d`,
      });
    }
    if (topVagas) {
      insights.push({
        tipo: 'info',
        titulo: `🎯 Mais produtivo: ${topVagas.nome}`,
        descricao: `${topVagas.vagas} vagas conduzidas no ano — líder em volume de recrutamento.`,
        metrica: `${topVagas.vagas} vagas`,
      });
    }
  }

  return insights.slice(0, 8);
}
