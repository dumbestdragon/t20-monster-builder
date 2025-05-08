// Manipulador de Formulário - Gerencia comportamento dinâmico do formulário e troca de modos

// Aguarda o DOM ser completamente carregado antes de anexar manipuladores de eventos
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referências aos elementos do formulário
    const modeSelect = document.getElementById('builderMode') as HTMLSelectElement;
    const templateMode = document.getElementById('templateMode');
    const guidedMode = document.getElementById('guidedMode');

    // Configura comportamento de troca de modos se todos os elementos estiverem presentes
    if (modeSelect && templateMode && guidedMode) {
        modeSelect.addEventListener('change', (e) => {
            // Mostra/esconde seções apropriadas do formulário baseado no modo selecionado
            const mode = (e.target as HTMLSelectElement).value;
            if (mode === 'Template') {
                templateMode.style.display = 'block';
                guidedMode.style.display = 'none';
            } else {
                templateMode.style.display = 'none';
                guidedMode.style.display = 'block';
            }
        });
    }
});