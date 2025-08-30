import "./style.css"
import ReactDOM from "react-dom/client";
import "@config/i18n"
import { changeTranslation } from "@config/i18n";
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import WindowController from "@stores/windowstate.store.ts";

const router = createRouter({ routeTree })
// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

changeTranslation("en")
WindowController.watchWindow()

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <RouterProvider router={router} />
    )
}