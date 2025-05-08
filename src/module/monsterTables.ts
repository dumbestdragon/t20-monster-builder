// Tabelas de Estatísticas de Monstros
// Valores predefinidos para todos os tipos de monstros e níveis de desafio

import { NDTable } from './types';

/**
 * Tabela de Monstros Solo
 * Para monstros individuais poderosos
 * Estes monstros são projetados para desafiar um grupo inteiro
 */
export const ndTableSolo: NDTable = {
    // Nível de desafio um quarto (ND 1/4)
    '1/4': {
        nd: '1/4',
        valorAtaque: 6,    // Bônus de ataque
        danoMedio: 8,      // Dano médio
        defesa: 11,        // Defesa
        resistenciaForte: 3,   // Resistência forte
        resistenciaMedia: 0,   // Resistência média
        resistenciaFraca: -2,   // Resistência fraca
        pv: 7,           // Pontos de Vida
        efeitoPadraoCd: 12    // CD de efeitos
    },
    '1/2': {
        nd: '1/2',
        valorAtaque: 7,
        danoMedio: 10,
        defesa: 14,
        resistenciaForte: 6,
        resistenciaMedia: 3,
        resistenciaFraca: -1,
        pv: 15,
        efeitoPadraoCd: 13
    },
    '1': {
        nd: 1,
        valorAtaque: 9,
        danoMedio: 15,
        defesa: 16,
        resistenciaForte: 11,
        resistenciaMedia: 5,
        resistenciaFraca: 0,
        pv: 35,
        efeitoPadraoCd: 14
    },
    '2': {
        nd: 2,
        valorAtaque: 12,
        danoMedio: 18,
        defesa: 19,
        resistenciaForte: 13,
        resistenciaMedia: 7,
        resistenciaFraca: 2,
        pv: 70,
        efeitoPadraoCd: 16
    },
    '3': {
        nd: 3,
        valorAtaque: 14,
        danoMedio: 21,
        defesa: 21,
        resistenciaForte: 15,
        resistenciaMedia: 9,
        resistenciaFraca: 3,
        pv: 105,
        efeitoPadraoCd: 17
    },
    '4': {
        nd: 4,
        valorAtaque: 16,
        danoMedio: 24,
        defesa: 23,
        resistenciaForte: 16,
        resistenciaMedia: 10,
        resistenciaFraca: 4,
        pv: 140,
        efeitoPadraoCd: 17
    },
    '5': {
        nd: 5,
        valorAtaque: 17,
        danoMedio: 40,
        defesa: 24,
        resistenciaForte: 17,
        resistenciaMedia: 11,
        resistenciaFraca: 5,
        pv: 200,
        efeitoPadraoCd: 20
    },
    '6': {
        nd: 6,
        valorAtaque: 20,
        danoMedio: 56,
        defesa: 27,
        resistenciaForte: 18,
        resistenciaMedia: 11,
        resistenciaFraca: 6,
        pv: 240,
        efeitoPadraoCd: 22
    },
    '7': {
        nd: 7,
        valorAtaque: 24,
        danoMedio: 62,
        defesa: 31,
        resistenciaForte: 20,
        resistenciaMedia: 14,
        resistenciaFraca: 7,
        pv: 280,
        efeitoPadraoCd: 24
    },
    '8': {
        nd: 8,
        valorAtaque: 26,
        danoMedio: 68,
        defesa: 33,
        resistenciaForte: 21,
        resistenciaMedia: 15,
        resistenciaFraca: 8,
        pv: 320,
        efeitoPadraoCd: 26
    },
    '9': {
        nd: 9,
        valorAtaque: 27,
        danoMedio: 74,
        defesa: 34,
        resistenciaForte: 21,
        resistenciaMedia: 15,
        resistenciaFraca: 9,
        pv: 360,
        efeitoPadraoCd: 28
    },
    '10': {
        nd: 10,
        valorAtaque: 29,
        danoMedio: 80,
        defesa: 36,
        resistenciaForte: 22,
        resistenciaMedia: 16,
        resistenciaFraca: 10,
        pv: 400,
        efeitoPadraoCd: 30
    },
    '11': {
        nd: 11,
        valorAtaque: 34,
        danoMedio: 130,
        defesa: 41,
        resistenciaForte: 24,
        resistenciaMedia: 18,
        resistenciaFraca: 11,
        pv: 550,
        efeitoPadraoCd: 31
    },
    '12': {
        nd: 12,
        valorAtaque: 36,
        danoMedio: 144,
        defesa: 43,
        resistenciaForte: 26,
        resistenciaMedia: 18,
        resistenciaFraca: 11,
        pv: 600,
        efeitoPadraoCd: 33
    },
    '13': {
        nd: 13,
        valorAtaque: 37,
        danoMedio: 158,
        defesa: 44,
        resistenciaForte: 26,
        resistenciaMedia: 20,
        resistenciaFraca: 13,
        pv: 650,
        efeitoPadraoCd: 35
    },
    '14': {
        nd: 14,
        valorAtaque: 39,
        danoMedio: 172,
        defesa: 46,
        resistenciaForte: 28,
        resistenciaMedia: 22,
        resistenciaFraca: 14,
        pv: 700,
        efeitoPadraoCd: 38
    },
    '15': {
        nd: 15,
        valorAtaque: 43,
        danoMedio: 186,
        defesa: 50,
        resistenciaForte: 28,
        resistenciaMedia: 22,
        resistenciaFraca: 15,
        pv: 750,
        efeitoPadraoCd: 40
    },
    '16': {
        nd: 16,
        valorAtaque: 46,
        danoMedio: 200,
        defesa: 53,
        resistenciaForte: 30,
        resistenciaMedia: 24,
        resistenciaFraca: 16,
        pv: 800,
        efeitoPadraoCd: 42
    },
    '17': {
        nd: 17,
        valorAtaque: 47,
        danoMedio: 270,
        defesa: 54,
        resistenciaForte: 30,
        resistenciaMedia: 24,
        resistenciaFraca: 17,
        pv: 1020,
        efeitoPadraoCd: 44
    },
    '18': {
        nd: 18,
        valorAtaque: 49,
        danoMedio: 288,
        defesa: 56,
        resistenciaForte: 32,
        resistenciaMedia: 26,
        resistenciaFraca: 18,
        pv: 1080,
        efeitoPadraoCd: 30
    },
    '19': {
        nd: 19,
        valorAtaque: 52,
        danoMedio: 306,
        defesa: 59,
        resistenciaForte: 32,
        resistenciaMedia: 26,
        resistenciaFraca: 19,
        pv: 1140,
        efeitoPadraoCd: 31
    },
    '20': {
        nd: 20,
        valorAtaque: 54,
        danoMedio: 324,
        defesa: 61,
        resistenciaForte: 34,
        resistenciaMedia: 28,
        resistenciaFraca: 20,
        pv: 1200,
        efeitoPadraoCd: 49
    },
    // Níveis especiais de monstro
    'S': {
        nd: 'S',
        valorAtaque: 58,
        danoMedio: 360,
        defesa: 65,
        resistenciaForte: 36,
        resistenciaMedia: 30,
        resistenciaFraca: 22,
        pv: 2500,
        efeitoPadraoCd: 51
    },
    'S+': {
        nd: 'S+',
        valorAtaque: 65,
        danoMedio: 500,
        defesa: 70,
        resistenciaForte: 38,
        resistenciaMedia: 33,
        resistenciaFraca: 25,
        pv: 4000,
        efeitoPadraoCd: 55
    }
};

/**
 * Tabela de Monstros Lacaios
 * Para monstros mais fracos, baseados em grupo
 * Estes monstros são feitos para serem encontrados em grupos
 */
export const ndTableLacaio: NDTable = {
    // Estrutura similar à tabela Solo mas com valores reduzidos
    '1/4': {
        nd: '1/4',
        valorAtaque: 7,
        danoMedio: 9,
        defesa: 10,
        resistenciaForte: 2,
        resistenciaMedia: 0,
        resistenciaFraca: -1,
        pv: 4,
        efeitoPadraoCd: 12
    },
    '1/2': {
        nd: '1/2',
        valorAtaque: 9,
        danoMedio: 11,
        defesa: 13,
        resistenciaForte: 5,
        resistenciaMedia: 3,
        resistenciaFraca: 0,
        pv: 6,
        efeitoPadraoCd: 13
    },
    '1': {
        nd: 1,
        valorAtaque: 11,
        danoMedio: 17,
        defesa: 15,
        resistenciaForte: 10,
        resistenciaMedia: 5,
        resistenciaFraca: 1,
        pv: 9,
        efeitoPadraoCd: 14
    },
    '2': {
        nd: 2,
        valorAtaque: 14,
        danoMedio: 21,
        defesa: 18,
        resistenciaForte: 12,
        resistenciaMedia: 7,
        resistenciaFraca: 3,
        pv: 14,
        efeitoPadraoCd: 16
    },
    '3': {
        nd: 3,
        valorAtaque: 16,
        danoMedio: 24,
        defesa: 20,
        resistenciaForte: 14,
        resistenciaMedia: 9,
        resistenciaFraca: 4,
        pv: 21,
        efeitoPadraoCd: 17
    },
    '4': {
        nd: 4,
        valorAtaque: 17,
        danoMedio: 32,
        defesa: 22,
        resistenciaForte: 15,
        resistenciaMedia: 10,
        resistenciaFraca: 5,
        pv: 28,
        efeitoPadraoCd: 18
    },
    '5': {
        nd: 5,
        valorAtaque: 20,
        danoMedio: 56,
        defesa: 23,
        resistenciaForte: 16,
        resistenciaMedia: 11,
        resistenciaFraca: 6,
        pv: 40,
        efeitoPadraoCd: 20
    },
    '6': {
        nd: 6,
        valorAtaque: 24,
        danoMedio: 62,
        defesa: 26,
        resistenciaForte: 17,
        resistenciaMedia: 12,
        resistenciaFraca: 7,
        pv: 48,
        efeitoPadraoCd: 22
    },
    '7': {
        nd: 7,
        valorAtaque: 26,
        danoMedio: 68,
        defesa: 30,
        resistenciaForte: 19,
        resistenciaMedia: 14,
        resistenciaFraca: 8,
        pv: 56,
        efeitoPadraoCd: 24
    },
    '8': {
        nd: 8,
        valorAtaque: 27,
        danoMedio: 74,
        defesa: 32,
        resistenciaForte: 20,
        resistenciaMedia: 15,
        resistenciaFraca: 9,
        pv: 64,
        efeitoPadraoCd: 26
    },
    '9': {
        nd: 9,
        valorAtaque: 29,
        danoMedio: 80,
        defesa: 33,
        resistenciaForte: 20,
        resistenciaMedia: 15,
        resistenciaFraca: 10,
        pv: 72,
        efeitoPadraoCd: 28
    },
    '10': {
        nd: 10,
        valorAtaque: 34,
        danoMedio: 105,
        defesa: 35,
        resistenciaForte: 21,
        resistenciaMedia: 16,
        resistenciaFraca: 11,
        pv: 80,
        efeitoPadraoCd: 30
    },
    '11': {
        nd: 11,
        valorAtaque: 36,
        danoMedio: 144,
        defesa: 40,
        resistenciaForte: 23,
        resistenciaMedia: 18,
        resistenciaFraca: 12,
        pv: 110,
        efeitoPadraoCd: 31
    },
    '12': {
        nd: 12,
        valorAtaque: 37,
        danoMedio: 158,
        defesa: 42,
        resistenciaForte: 25,
        resistenciaMedia: 20,
        resistenciaFraca: 13,
        pv: 120,
        efeitoPadraoCd: 33
    },
    '13': {
        nd: 13,
        valorAtaque: 39,
        danoMedio: 172,
        defesa: 43,
        resistenciaForte: 25,
        resistenciaMedia: 20,
        resistenciaFraca: 14,
        pv: 130,
        efeitoPadraoCd: 35
    },
    '14': {
        nd: 14,
        valorAtaque: 43,
        danoMedio: 186,
        defesa: 45,
        resistenciaForte: 27,
        resistenciaMedia: 22,
        resistenciaFraca: 15,
        pv: 140,
        efeitoPadraoCd: 38
    },
    '15': {
        nd: 15,
        valorAtaque: 46,
        danoMedio: 200,
        defesa: 49,
        resistenciaForte: 27,
        resistenciaMedia: 22,
        resistenciaFraca: 16,
        pv: 150,
        efeitoPadraoCd: 40
    },
    '16': {
        nd: 16,
        valorAtaque: 47,
        danoMedio: 235,
        defesa: 52,
        resistenciaForte: 29,
        resistenciaMedia: 24,
        resistenciaFraca: 17,
        pv: 160,
        efeitoPadraoCd: 42
    },
    '17': {
        nd: 17,
        valorAtaque: 49,
        danoMedio: 288,
        defesa: 53,
        resistenciaForte: 29,
        resistenciaMedia: 24,
        resistenciaFraca: 18,
        pv: 204,
        efeitoPadraoCd: 44
    },
    '18': {
        nd: 18,
        valorAtaque: 52,
        danoMedio: 306,
        defesa: 55,
        resistenciaForte: 31,
        resistenciaMedia: 26,
        resistenciaFraca: 19,
        pv: 216,
        efeitoPadraoCd: 47
    },
    '19': {
        nd: 19,
        valorAtaque: 54,
        danoMedio: 324,
        defesa: 58,
        resistenciaForte: 31,
        resistenciaMedia: 26,
        resistenciaFraca: 20,
        pv: 228,
        efeitoPadraoCd: 47
    },
    '20': {
        nd: 20,
        valorAtaque: 56,
        danoMedio: 344,
        defesa: 60,
        resistenciaForte: 33,
        resistenciaMedia: 28,
        resistenciaFraca: 21,
        pv: 240,
        efeitoPadraoCd: 49
    },
    'S': {
        nd: 'S',
        valorAtaque: 60,
        danoMedio: 385,
        defesa: 64,
        resistenciaForte: 35,
        resistenciaMedia: 30,
        resistenciaFraca: 23,
        pv: 500,
        efeitoPadraoCd: 51
    },
    'S+': {
        nd: 'S+',
        valorAtaque: 67,
        danoMedio: 540,
        defesa: 69,
        resistenciaForte: 37,
        resistenciaMedia: 33,
        resistenciaFraca: 26,
        pv: 800,
        efeitoPadraoCd: 55
    }
};

/**
 * Tabela de Monstros Especiais
 * Para criaturas únicas ou tipo chefe
 * Estes monstros têm habilidades aprimoradas e características únicas
 */
export const ndTableEspecial: NDTable = {
    // Estrutura similar à tabela Solo mas com valores balanceados
    '1/4': {
        nd: '1/4',
        valorAtaque: 4,
        danoMedio: 8,
        defesa: 11,
        resistenciaForte: 3,
        resistenciaMedia: 0,
        resistenciaFraca: -2,
        pv: 5,
        efeitoPadraoCd: 14
    },
    '1/2': {
        nd: '1/2',
        valorAtaque: 5,
        danoMedio: 10,
        defesa: 12,
        resistenciaForte: 6,
        resistenciaMedia: 3,
        resistenciaFraca: -1,
        pv: 11,
        efeitoPadraoCd: 15
    },
    '1': {
        nd: 1,
        valorAtaque: 7,
        danoMedio: 15,
        defesa: 14,
        resistenciaForte: 11,
        resistenciaMedia: 5,
        resistenciaFraca: 0,
        pv: 25,
        efeitoPadraoCd: 16
    },
    '2': {
        nd: 2,
        valorAtaque: 10,
        danoMedio: 18,
        defesa: 17,
        resistenciaForte: 13,
        resistenciaMedia: 7,
        resistenciaFraca: 2,
        pv: 49,
        efeitoPadraoCd: 18
    },
    '3': {
        nd: 3,
        valorAtaque: 12,
        danoMedio: 21,
        defesa: 19,
        resistenciaForte: 15,
        resistenciaMedia: 9,
        resistenciaFraca: 3,
        pv: 74,
        efeitoPadraoCd: 19
    },
    '4': {
        nd: 4,
        valorAtaque: 14,
        danoMedio: 24,
        defesa: 21,
        resistenciaForte: 16,
        resistenciaMedia: 10,
        resistenciaFraca: 4,
        pv: 98,
        efeitoPadraoCd: 20
    },
    '5': {
        nd: 5,
        valorAtaque: 15,
        danoMedio: 40,
        defesa: 22,
        resistenciaForte: 17,
        resistenciaMedia: 11,
        resistenciaFraca: 5,
        pv: 140,
        efeitoPadraoCd: 22
    },
    '6': {
        nd: 6,
        valorAtaque: 18,
        danoMedio: 56,
        defesa: 25,
        resistenciaForte: 18,
        resistenciaMedia: 12,
        resistenciaFraca: 6,
        pv: 168,
        efeitoPadraoCd: 24
    },
    '7': {
        nd: 7,
        valorAtaque: 22,
        danoMedio: 62,
        defesa: 29,
        resistenciaForte: 20,
        resistenciaMedia: 14,
        resistenciaFraca: 7,
        pv: 196,
        efeitoPadraoCd: 26
    },
    '8': {
        nd: 8,
        valorAtaque: 24,
        danoMedio: 68,
        defesa: 31,
        resistenciaForte: 21,
        resistenciaMedia: 15,
        resistenciaFraca: 8,
        pv: 224,
        efeitoPadraoCd: 28
    },
    '9': {
        nd: 9,
        valorAtaque: 25,
        danoMedio: 74,
        defesa: 32,
        resistenciaForte: 21,
        resistenciaMedia: 15,
        resistenciaFraca: 9,
        pv: 252,
        efeitoPadraoCd: 30
    },
    '10': {
        nd: 10,
        valorAtaque: 27,
        danoMedio: 80,
        defesa: 34,
        resistenciaForte: 22,
        resistenciaMedia: 16,
        resistenciaFraca: 10,
        pv: 280,
        efeitoPadraoCd: 32
    },
    '11': {
        nd: 11,
        valorAtaque: 32,
        danoMedio: 130,
        defesa: 39,
        resistenciaForte: 24,
        resistenciaMedia: 18,
        resistenciaFraca: 11,
        pv: 385,
        efeitoPadraoCd: 33
    },
    '12': {
        nd: 12,
        valorAtaque: 34,
        danoMedio: 144,
        defesa: 41,
        resistenciaForte: 26,
        resistenciaMedia: 20,
        resistenciaFraca: 12,
        pv: 420,
        efeitoPadraoCd: 35
    },
    '13': {
        nd: 13,
        valorAtaque: 35,
        danoMedio: 158,
        defesa: 42,
        resistenciaForte: 26,
        resistenciaMedia: 20,
        resistenciaFraca: 13,
        pv: 455,
        efeitoPadraoCd: 37
    },
    '14': {
        nd: 14,
        valorAtaque: 37,
        danoMedio: 172,
        defesa: 44,
        resistenciaForte: 28,
        resistenciaMedia: 22,
        resistenciaFraca: 14,
        pv: 490,
        efeitoPadraoCd: 40
    },
    '15': {
        nd: 15,
        valorAtaque: 41,
        danoMedio: 186,
        defesa: 48,
        resistenciaForte: 28,
        resistenciaMedia: 22,
        resistenciaFraca: 15,
        pv: 525,
        efeitoPadraoCd: 42
    },
    '16': {
        nd: 16,
        valorAtaque: 44,
        danoMedio: 200,
        defesa: 51,
        resistenciaForte: 30,
        resistenciaMedia: 24,
        resistenciaFraca: 16,
        pv: 560,
        efeitoPadraoCd: 44
    },
    '17': {
        nd: 17,
        valorAtaque: 45,
        danoMedio: 270,
        defesa: 52,
        resistenciaForte: 30,
        resistenciaMedia: 24,
        resistenciaFraca: 17,
        pv: 714,
        efeitoPadraoCd: 46
    },
    '18': {
        nd: 18,
        valorAtaque: 47,
        danoMedio: 288,
        defesa: 54,
        resistenciaForte: 32,
        resistenciaMedia: 26,
        resistenciaFraca: 18,
        pv: 756,
        efeitoPadraoCd: 49
    },
    '19': {
        nd: 19,
        valorAtaque: 50,
        danoMedio: 306,
        defesa: 57,
        resistenciaForte: 32,
        resistenciaMedia: 26,
        resistenciaFraca: 19,
        pv: 798,
        efeitoPadraoCd: 49
    },
    '20': {
        nd: 20,
        valorAtaque: 52,
        danoMedio: 324,
        defesa: 59,
        resistenciaForte: 34,
        resistenciaMedia: 28,
        resistenciaFraca: 20,
        pv: 840,
        efeitoPadraoCd: 51
    },
    'S': {
        nd: 'S',
        valorAtaque: 55,
        danoMedio: 360,
        defesa: 63,
        resistenciaForte: 36,
        resistenciaMedia: 30,
        resistenciaFraca: 22,
        pv: 1750,
        efeitoPadraoCd: 55
    },
    'S+': {
        nd: 'S+',
        valorAtaque: 60,
        danoMedio: 500,
        defesa: 67,
        resistenciaForte: 38,
        resistenciaMedia: 33,
        resistenciaFraca: 25,
        pv: 2800,
        efeitoPadraoCd: 60
    }
};

/**
 * Função auxiliar para obter valores da tabela por ND e tipo
 * 
 * @param nd - Nível de Desafio
 * @param table - Tabela de estatísticas
 * @returns Atributos do monstro para o ND especificado
 */
export function getMonsterStatsByND(nd: string, table: NDTable) {
    return table[nd] || null;
}

/**
 * Constantes de Validação
 * Definem intervalos aceitáveis para estatísticas
 */
export const statLimits = {
    minPV: 1,                    // PV mínimo
    maxPV: 999,                  // PV máximo
    minDefesa: 10,               // Defesa mínima
    maxDefesa: 50,               // Defesa máxima
    minResistencia: -5,          // Resistência mínima
    maxResistencia: 30,          // Resistência máxima
    minAtaque: -5,               // Ataque mínimo
    maxAtaque: 30,               // Ataque máximo
    minDano: 0,                  // Dano mínimo
    maxDano: 100                 // Dano máximo
};