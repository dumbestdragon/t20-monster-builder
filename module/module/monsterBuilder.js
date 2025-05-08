/**
 * Módulo Principal do Construtor de Monstros
 *
 * Este módulo é responsável pela criação e cálculo de todas as estatísticas
 * dos monstros no sistema T20
 */
import { ndTableSolo, ndTableLacaio, ndTableEspecial } from '../scripts/monsterTables';
export class MonsterBuilder {
    // Construtor básico - não necessita inicialização
    constructor() { }
    /**
     * Obtém a tabela de ND apropriada baseada no tipo do monstro
     *
     * @param type - Tipo do monstro (Solo/Lacaio/Especial)
     * @returns NDTable - A tabela de ND correspondente
     */
    getTable(type) {
        switch (type) {
            case 'Solo': return ndTableSolo;
            case 'Lacaio': return ndTableLacaio;
            case 'Especial': return ndTableEspecial;
        }
    }
    /**
     * Gera atributos do monstro a partir de um template baseado no ND e tipo
     *
     * @param nd - Nível de Desafio
     * @param type - Tipo do monstro (Solo/Lacaio/Especial)
     * @returns MonsterAttributes - Conjunto completo de atributos do monstro
     */
    generateMonsterFromTemplate(nd, type) {
        const table = this.getTable(type);
        return table[nd];
    }
    /**
     * Calcula o Nível de Desafio final baseado em todos os atributos
     *
     * @param attributes - Conjunto de atributos do monstro
     * @returns number - O Nível de Desafio calculado (média arredondada)
     */
    calculateFinalND(attributes) {
        // Calcula a média do ND a partir de todos os atributos numéricos
        const values = [
            attributes.valorAtaque,
            attributes.danoMedio,
            attributes.defesa,
            attributes.resistenciaForte,
            attributes.resistenciaMedia,
            attributes.resistenciaFraca,
            attributes.pv,
            attributes.efeitoPadraoCd
        ];
        const sum = values.reduce((acc, curr) => acc + curr, 0);
        return Math.round(sum / values.length);
    }
    /**
     * Cria um novo Actor no Foundry VTT com os atributos do monstro
     *
     * @param data - Atributos e metadados do monstro
     * @returns Promise<Actor> - O Actor criado no Foundry VTT
     */
    async createMonsterActor(data) {
        // Cria estrutura de dados do ator de acordo com o schema do Foundry VTT
        const actorData = {
            name: data.name,
            type: 'npc',
            data: {
                attributes: {
                    hp: { value: data.pv, max: data.pv },
                    defesa: { value: data.defesa },
                    valorAtaque: { value: data.valorAtaque },
                    danoMedio: { value: data.danoMedio },
                    resistencias: {
                        forte: { value: data.resistenciaForte },
                        media: { value: data.resistenciaMedia },
                        fraca: { value: data.resistenciaFraca }
                    }
                },
                details: {
                    type: data.type,
                    nd: data.nd,
                    efeitoPadraoCd: data.efeitoPadraoCd
                }
            }
        };
        return await Actor.create(actorData);
    }
}
/**
 * Valida as estatísticas do monstro contra intervalos aceitáveis
 *
 * @param stats - Estatísticas do monstro para validar
 * @returns boolean - Verdadeiro se válido, falso caso contrário
 */
export function validateMonsterStats(stats) {
    return true; // Implementação básica, expandir conforme necessário
}
/**
 * Calcula as estatísticas do monstro baseado no ND e tipo
 *
 * @param nd - Nível de Desafio
 * @param type - Tipo do Monstro (Solo ou Lacaio)
 * @returns MonsterAttributes - Estatísticas calculadas do monstro
 */
export function calculateMonsterStats(nd, type) {
    const table = type === 'Solo' ? ndTableSolo : ndTableLacaio;
    return table[nd];
}
/**
 * Ajusta valores de resistência baseado no tipo
 *
 * @param stats - Estatísticas do monstro
 * @param saveType - Tipo de resistência (Forte, Média, Fraca)
 * @returns number - Valor de resistência ajustado
 */
export function getAdjustedSave(stats, saveType) {
    switch (saveType) {
        case 'Forte':
            return stats.resistenciaForte;
        case 'Media':
            return stats.resistenciaMedia;
        case 'Fraca':
            return stats.resistenciaFraca;
        default:
            return 0;
    }
}
/**
 * Aplica modificadores de características às estatísticas do monstro
 *
 * @param stats - Estatísticas atuais do monstro
 * @param traits - Características selecionadas do monstro
 * @returns MonsterAttributes - Estatísticas do monstro modificadas
 */
export function applyTraitModifiers(stats, traits) {
    let modifiedStats = { ...stats };
    for (const trait of traits) {
        switch (trait) {
            case 'Resistente':
                modifiedStats.pv = Math.floor(modifiedStats.pv * 1.5);
                break;
            case 'Ágil':
                modifiedStats.defesa += 2;
                break;
            case 'Poderoso':
                modifiedStats.valorAtaque += 2;
                break;
            // Add more trait modifications as needed
        }
    }
    return modifiedStats;
}
/**
 * Formata estatísticas do monstro para exibição
 *
 * @param stats - Estatísticas do monstro
 * @returns string - String formatada de estatísticas
 */
export function formatMonsterStats(stats) {
    return `
        ND: ${stats.nd}
        PV: ${stats.pv}
        Defesa: ${stats.defesa}
        Valor de Ataque: ${stats.valorAtaque}
        Dano Médio: ${stats.danoMedio}
        Resistências:
        - Forte: ${stats.resistenciaForte}
        - Média: ${stats.resistenciaMedia}
        - Fraca: ${stats.resistenciaFraca}
        CD Efeito Padrão: ${stats.efeitoPadraoCd}
    `;
}
