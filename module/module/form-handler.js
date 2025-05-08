// Updated paths to match the new directory structure
import { initializeFormHandlers } from '../scripts/form-handler';

export const initializeFormHandlers = (html) => {
    const modeSelect = html.find('#builderMode');
    const templateMode = html.find('#templateMode');
    const guidedMode = html.find('#guidedMode');
    // Verify that all required elements exist
    if (!modeSelect.length || !templateMode.length || !guidedMode.length) {
        console.error('Required form elements not found');
        return;
    }
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
    // Set initial state based on current selection
    const initialMode = modeSelect.val();
    if (initialMode === 'Template') {
        templateMode.show();
        guidedMode.hide();
    }
    else {
        templateMode.hide();
        guidedMode.show();
    }
};
