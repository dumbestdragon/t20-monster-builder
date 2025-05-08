export const initializeFormHandlers = (html) => {
    const modeSelect = html.find('#builderMode');
    const templateMode = html.find('#templateMode');
    const guidedMode = html.find('#guidedMode');
    // Configura comportamento de troca de modos
    modeSelect.on('change', (e) => {
        const mode = $(e.target).val();
        if (mode === 'Template') {
            templateMode.show();
            guidedMode.hide();
        }
        else {
            templateMode.hide();
            guidedMode.show();
        }
    });
};
