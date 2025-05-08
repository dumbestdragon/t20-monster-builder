// Arquivo principal do módulo - Lida com inicialização e configuração da UI

import { MonsterBuilder } from './monsterBuilder';
import { MonsterType } from './types';

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
        const dialog = new Dialog({
            title: 'Construtor de Monstros T20',
            // Carrega e renderiza o template HTML com opções de ND
            content: await renderTemplate('modules/t20-monster-builder/templates/monster-builder.html', {
                ndOptions: Array.from({length: 20}, (_, i) => i + 1)
            }),
            buttons: {
                submit: {
                    label: 'Criar',
                    callback: async (htmlOrJQuery: HTMLElement | JQuery<HTMLElement>) => {
                        // Extrai elemento do formulário baseado no tipo de entrada
                        let formElement: HTMLFormElement | null;
                        
                        if (htmlOrJQuery instanceof HTMLElement) {
                            formElement = htmlOrJQuery.querySelector('form');
                        } else {
                            const form = htmlOrJQuery.find('form');
                            formElement = form.length > 0 ? form[0] as HTMLFormElement : null;
                        }

                        if (!formElement) return;
                        
                        // Processa dados do formulário e cria monstro
                        const formData = new FormData(formElement);
                        const mode = formData.get('mode') as 'Template' | 'Guiado';
                        const type = formData.get('monsterType') as MonsterType;
                        const name = formData.get('monsterName') as string;

                        // Manipula modo Template - usa valores predefinidos
                        if (mode === 'Template') {
                            const nd = formData.get('nd') as string;
                            const attributes = builder.generateMonsterFromTemplate(nd, type);
                            await builder.createMonsterActor({ ...attributes, name, type });
                        } 
                        // Manipula modo Guiado - calcula ND a partir dos valores inseridos
                        else {
                            const attributes = {
                                nd: '0', // Será calculado como média
                                valorAtaque: parseInt(formData.get('ndValorAtaque') as string),
                                danoMedio: parseInt(formData.get('ndDanoMedio') as string),
                                defesa: parseInt(formData.get('ndDefesa') as string),
                                resistenciaForte: parseInt(formData.get('ndResistenciaForte') as string),
                                resistenciaMedia: parseInt(formData.get('ndResistenciaMedia') as string),
                                resistenciaFraca: parseInt(formData.get('ndResistenciaFraca') as string),
                                pv: parseInt(formData.get('ndPV') as string),
                                efeitoPadraoCd: parseInt(formData.get('ndEfeitoPadraoCd') as string)
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
            default: 'submit'
        });
        dialog.render(true);
    });

    // Adiciona botão ao cabeçalho do Diretório de Atores
    html.find('.directory-header .action-buttons').append(button);
});