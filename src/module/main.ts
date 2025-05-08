// Arquivo principal do módulo - Lida com inicialização e configuração da UI

import { MonsterBuilder } from './monsterBuilder';
import { MonsterType } from './types';
import { initializeFormHandlers } from './form-handler';

// Inicializa o módulo quando o Foundry VTT inicia
Hooks.once('init', () => {
    console.log('T20 Monster Builder | Inicializando módulo');
});

// Adiciona botão de criação de monstros ao Diretório de Atores
Hooks.on('renderActorDirectory', (_app: Application, html: JQuery<HTMLElement>) => {
    // Cria nova instância do construtor de monstros
    const builder = new MonsterBuilder();

    // Cria o botão "Criar Monstro" com ícone de dragão
    const button = $(`<button class="create-monster">
        <i class="fas fa-dragon"></i> Criar Monstro
    </button>`);

    // Manipula clique no botão - Abre diálogo de criação de monstro
    button.click(async () => {
        const content = await renderTemplate('modules/t20-monster-builder/templates/monster-builder.html', {
            ndOptions: Array.from({length: 20}, (_, i) => i + 1)
        });

        const dialog = new Dialog({
            title: 'Construtor de Monstros T20',
            content,
            buttons: {
                submit: {
                    label: 'Criar',
                    callback: async (html: JQuery | HTMLElement) => {
                        const $html = $(html);
                        initializeFormHandlers($html); // Initialize handlers before form processing
                        const form = $html.find('form')[0];
                        if (!form) return;
                        
                        const formData = new FormData(form);
                        const mode = formData.get('mode') as 'Template' | 'Guiado';
                        const type = formData.get('monsterType') as MonsterType;
                        const name = formData.get('monsterName') as string;

                        if (mode === 'Template') {
                            const nd = formData.get('nd') as string;
                            const attributes = builder.generateMonsterFromTemplate(nd, type);
                            if (attributes) {
                                await builder.createMonsterActor({ ...attributes, name, type });
                            }
                        } else {
                            const attributes = {
                                nd: '0',
                                valorAtaque: parseInt(formData.get('ndValorAtaque') as string) || 1,
                                danoMedio: parseInt(formData.get('ndDanoMedio') as string) || 1,
                                defesa: parseInt(formData.get('ndDefesa') as string) || 10,
                                resistenciaForte: parseInt(formData.get('ndResistenciaForte') as string) || 0,
                                resistenciaMedia: parseInt(formData.get('ndResistenciaMedia') as string) || 0,
                                resistenciaFraca: parseInt(formData.get('ndResistenciaFraca') as string) || 0,
                                pv: parseInt(formData.get('ndPV') as string) || 1,
                                efeitoPadraoCd: parseInt(formData.get('ndEfeitoPadraoCd') as string) || 10
                            };
                            
                            const finalND = builder.calculateFinalND(attributes);
                            attributes.nd = finalND.toString();
                            await builder.createMonsterActor({ ...attributes, name, type });
                        }
                    }
                },
                cancel: {
                    label: 'Cancelar'
                }
            },
            render: (html: JQuery | HTMLElement) => {
                const $html = $(html);
                initializeFormHandlers($html);
            },
            default: 'submit'
        });
        
        dialog.render(true);
    });

    // Adiciona botão ao cabeçalho do Diretório de Atores
    html.find('.directory-header .action-buttons').append(button);
});