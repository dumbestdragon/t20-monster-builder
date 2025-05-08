// Arquivo principal do módulo - Lida com inicialização e configuração da UI
import { MonsterBuilder } from './monsterBuilder';
import { initializeFormHandlers } from './form-handler';
// Inicializa o módulo quando o Foundry VTT inicia
Hooks.once('init', () => {
    console.log('T20 Monster Builder | Inicializando módulo');
});
// Adiciona botão de criação de monstros ao Diretório de Atores
Hooks.on('renderActorDirectory', (_app, html) => {
    // Cria nova instância do construtor de monstros
    const builder = new MonsterBuilder();
    // Cria o botão "Criar Monstro" com ícone de dragão
    const button = $(`<button class="create-monster">
        <i class="fas fa-dragon"></i> Criar Monstro
    </button>`);
    // Manipula clique no botão - Abre diálogo de criação de monstro
    button.click(async () => {
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
                        const $html = $(html);
                        const form = $html.find('form')[0];
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
