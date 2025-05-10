// Arquivo principal do módulo - Lida com inicialização e configuração da UI

import { MonsterBuilder } from './monsterBuilder';
import { MonsterType } from './types';
import { initializeFormHandlers } from './form-handler';

// Inicializa o módulo quando o Foundry VTT inicia
Hooks.once('init', () => {
    console.log('T20 Monster Builder | Inicializando módulo');
});

// Adjusted type handling to support both HTMLElement and JQuery<HTMLElement>
Hooks.on('renderActorDirectory', (_app: Application, html: HTMLElement | JQuery<HTMLElement>) => {
    console.log('renderActorDirectory hook triggered'); // Debugging log

    const builder = new MonsterBuilder();

    const button = document.createElement('button');
    button.className = 'create-monster';
    button.innerHTML = '<i class="fas fa-dragon"></i> Criar Monstro';

    button.addEventListener('click', async () => {
        console.log('Create Monster button clicked'); // Debugging log
        const content = await renderTemplate('modules/t20-monster-builder/templates/monster-builder.html', {
            ndOptions: Array.from({ length: 20 }, (_, i) => i + 1)
        });

        const dialog = new Dialog({
            title: 'Construtor de Monstros T20',
            content,
            buttons: {
                submit: {
                    label: 'Criar',
                    callback: async (html: HTMLElement | JQuery<HTMLElement>) => {
                        console.log('Dialog submitted'); // Debugging log
                        const form = html instanceof HTMLElement
                            ? html.querySelector('form')
                            : html.find('form')[0];
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
            render: (html: HTMLElement | JQuery<HTMLElement>) => {
                console.log('Dialog rendered'); // Debugging log
                if (html instanceof HTMLElement) {
                    initializeFormHandlers($(html));
                } else {
                    initializeFormHandlers(html);
                }
            },
            default: 'submit'
        });

        dialog.render(true);
    });

    const header = html instanceof HTMLElement
        ? html.querySelector('.directory-header .action-buttons')
        : html.find('.directory-header .action-buttons');

    if (header instanceof HTMLElement) {
        console.log('Appending button to header (HTMLElement)'); // Debugging log
        header.appendChild(button);
    } else if (header && 'length' in header && header.length > 0) {
        console.log('Appending button to header (jQuery)'); // Debugging log
        header.append(button);
    } else {
        console.error('Header not found'); // Debugging log
    }
});