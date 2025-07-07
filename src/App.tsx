import { Route } from "wouter"
import { MainWindow } from "@windows/main";
import { AppWindow } from "@windows/app";
import { listen } from "@tauri-apps/api/event";
import { WindowComponent } from "@components/Windows/WindowComponent";
import { BaseRouter } from "@components/BaseRouter";
import styled from '@emotion/styled'

listen("reloadWindow", () => {
  window.location.reload();
})

export default function App() {
  return <LoadGlobalStyle>
    <WindowComponent>
      <BaseRouter index={MainWindow}>
        <Route path="/app" component={AppWindow} nest />
      </BaseRouter>
    </WindowComponent>
  </LoadGlobalStyle>
}

const LoadGlobalStyle = styled.div`
:root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: #0f0f0f;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`