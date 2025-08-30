import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/tray/')({
    component: Tray,
})

function Tray() {
    return (
        <h3>Tray!</h3>
    )
}