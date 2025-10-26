import { createRootRoute, Outlet } from '@tanstack/react-router'
import { listen } from "@tauri-apps/api/event";

listen("reloadWindow", () => {
    window.location.reload();
})

export const Route = createRootRoute({
    component: () => <Outlet />
})