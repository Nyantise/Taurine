import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { TitleBarStyle } from "@tauri-apps/api/window";

export const baseWindow = {
    hiddenTitle: true,
    transparent: true,
    titleBarStyle: "overlay" as TitleBarStyle | undefined,
    shadow: false,
    decorations: false,
    windowEffects: undefined
}

export function createAppWindow() {
    return new WebviewWindow('app', {
        url: '/app',
        title: 'Taurine App',
        width: 800,
        height: 600,
        center: true,
        focus: true,
        ...baseWindow
    });
}