import { createFileRoute } from '@tanstack/react-router'
import { createAppWindow } from '@windows/AppWindow'

export const Route = createFileRoute('/')({
    component: Main,
    beforeLoad: () => {
        createAppWindow()
    }
})

function Main() {
    return <></>
}