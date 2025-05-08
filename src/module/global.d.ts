// Definições globais para tipos do Foundry VTT
/// <reference types="@league-of-foundry-developers/foundry-vtt-types" />

declare global {
    // Declarações globais do Foundry VTT
    const Hooks: Hooks;
    const Dialog: typeof foundry.applications.Dialog;
    const renderTemplate: (path: string, data?: object) => Promise<string>;
    const Actor: typeof foundry.documents.BaseActor;
    const jQuery: typeof jquery;
    const $: typeof jQuery;
    
    // Interface da janela global com tipos do Foundry
    interface Window {
        Hooks: typeof Hooks;
        game: Game;
        Actor: typeof Actor;
        Dialog: typeof Dialog;
    }
    
    // Variáveis globais do sistema
    const game: Game;
    const ui: UI;
    const canvas: Canvas;
    const socket: Socket;
    const keyboard: KeyboardManager;
}

export {};