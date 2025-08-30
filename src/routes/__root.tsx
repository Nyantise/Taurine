import { createRootRoute, Outlet } from '@tanstack/react-router'
import styled from "@emotion/styled";
import { listen } from "@tauri-apps/api/event";

listen("reloadWindow", () => {
    window.location.reload();
})

export const Route = createRootRoute({
    component: () =>
        <LoadGlobalStyle>
            <Outlet />
        </LoadGlobalStyle>
})

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
    user-select: none;
    -webkit-user-drag: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`