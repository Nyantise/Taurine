import "./style.css"
import ReactDOM from "react-dom/client";
import App from "./App";
import "@config/i18n"
import { changeTranslation } from "@config/i18n";
import WindowController from "@stores/windowstate.store";

changeTranslation("en")
WindowController.watchWindow()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
);
