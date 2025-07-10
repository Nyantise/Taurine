import "./style.css"
import ReactDOM from "react-dom/client";
import App from "./App";
import "@config/i18n"
import { changeTranslation } from "@config/i18n";
import WindowController from "@stores/windowstate.store";
import { TrayIcon } from '@tauri-apps/api/tray';
import { defaultWindowIcon } from '@tauri-apps/api/app';

changeTranslation("en")
WindowController.watchWindow()

async function loadTray() {
    const options = {
        icon: await defaultWindowIcon(),
    };
    await TrayIcon.new(options);
}

loadTray()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
);
