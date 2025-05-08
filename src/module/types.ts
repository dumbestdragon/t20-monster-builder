// Definições de tipos principais para o Construtor de Monstros T20

/**
 * Enumeração de Tipos de Monstro
 */
export type MonsterType = 'Solo' | 'Lacaio' | 'Especial';

/**
 * Enumeração de Modos do Construtor
 */
export type BuilderMode = 'Template' | 'Guiado';

/**
 * Valores possíveis de Nível de Desafio (ND), de 1/4 até S+
 */
export type NDKey = '1/4' | '1/2' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 'S' | 'S+';

/**
 * Interface de Atributos do Monstro
 * Define todas as estatísticas possíveis do monstro
 */
export interface MonsterAttributes {
    nd: number | string;        // Nível de Desafio
    valorAtaque: number;        // Bônus de Ataque
    danoMedio: number;          // Dano Médio
    defesa: number;             // Defesa
    resistenciaForte: number;   // Resistência Forte
    resistenciaMedia: number;   // Resistência Média
    resistenciaFraca: number;   // Resistência Fraca
    pv: number;                 // Pontos de Vida
    efeitoPadraoCd: number;     // CD de Efeitos
}

/**
 * Interface da Tabela de Níveis de Desafio
 * Mapeia níveis de desafio para seus atributos correspondentes
 */
export interface NDTable {
    [key: string]: MonsterAttributes;
}

/**
 * Interface de Template de Monstro
 * Estende MonsterAttributes com metadados
 */
export interface MonsterTemplate extends MonsterAttributes {
    name: string;               // Nome do Monstro
    type: MonsterType;          // Tipo do Monstro
    description?: string;       // Descrição Opcional
    traits?: string[];          // Características Especiais
}

/**
 * Enumeração de Tipos de Resistência
 * Usada para cálculos de resistência
 */
export type SaveType = 'Forte' | 'Media' | 'Fraca';

/**
 * Interface de Configuração do Construtor
 */
export interface BuilderConfig {
    mode: BuilderMode;          // Modo do Construtor
    defaultType: MonsterType;   // Tipo Padrão de Monstro
    allowCustomND: boolean;     // Permitir ND Personalizado
}