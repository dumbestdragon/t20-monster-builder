// Arquivo principal do módulo - Lida com inicialização e configuração da UI
import { MonsterBuilder } from './monsterBuilder';
import { initializeFormHandlers } from './form-handler';
// Inicializa o módulo quando o Foundry VTT inicia
Hooks.once('init', () => {
    console.log('T20 Monster Builder | Inicializando módulo');
});
// Adjusted type handling to support both HTMLElement and JQuery<HTMLElement>
Hooks.on('renderActorDirectory', (_app, html) => {
    const builder = new MonsterBuilder();
    const button = document.createElement('button');
    button.className = 'create-monster';
    button.innerHTML = '<i class="fas fa-dragon"></i> Criar Monstro';
    button.addEventListener('click', async () => {
        const content = await renderTemplate('modules/t20-monster-builder/templates/monster-builder.html', {
            ndOptions: Array.from({ length: 20 }, (_, i) => i + 1)
        });
        const dialog = new Dialog({
            title: 'Construtor de Monstros T20',
            content,
            buttons: {
                submit: {
                    label: 'Criar',
                    callback: async (html) => {
                        const form = html instanceof HTMLElement
                            ? html.querySelector('form')
                            : html.find('form')[0];
                        if (!form)
                            return;
                        const formData = new FormData(form);
                        const mode = formData.get('mode');
                        const type = formData.get('monsterType');
                        const name = formData.get('monsterName');
                        if (mode === 'Template') {
                            const nd = formData.get('nd');
                            const attributes = builder.generateMonsterFromTemplate(nd, type);
                            if (attributes) {
                                await builder.createMonsterActor({ ...attributes, name, type });
                            }
                        }
                        else {
                            const attributes = {
                                nd: '0',
                                valorAtaque: parseInt(formData.get('ndValorAtaque')) || 1,
                                danoMedio: parseInt(formData.get('ndDanoMedio')) || 1,
                                defesa: parseInt(formData.get('ndDefesa')) || 10,
                                resistenciaForte: parseInt(formData.get('ndResistenciaForte')) || 0,
                                resistenciaMedia: parseInt(formData.get('ndResistenciaMedia')) || 0,
                                resistenciaFraca: parseInt(formData.get('ndResistenciaFraca')) || 0,
                                pv: parseInt(formData.get('ndPV')) || 1,
                                efeitoPadraoCd: parseInt(formData.get('ndEfeitoPadraoCd')) || 10
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
            render: (html) => {
                if (html instanceof HTMLElement) {
                    initializeFormHandlers($(html));
                }
                else {
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
        header.appendChild(button);
    }
    else if (header && 'length' in header && header.length > 0) {
        header.append(button);
    }
});
