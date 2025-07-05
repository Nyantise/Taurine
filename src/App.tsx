import "modern-normalize";
import { Route } from "wouter"
import { MainWindow } from "@windows/main";
import { AppWindow } from "@windows/app";
import { listen } from "@tauri-apps/api/event";
import { WindowComponent } from "@components/Windows/WindowComponent";
import "./style.css"
import { BaseRouter } from "@components/BaseRouter";

listen("reloadWindow", () => {
  window.location.reload();
})

export default function App() {
  return <WindowComponent>
    <BaseRouter index={MainWindow}>
      <Route path="/app" component={AppWindow} nest />
    </BaseRouter>
  </WindowComponent>
}
