import {
    ContextMenuContent,
    ContextMenuItem,
} from "@shadcn/components/ui/context-menu";
import { ContextMenuShortcut } from "@shadcn/components/ui/context-menu";
import { emitReload } from "@utils/EmitReload";

export function TitleBarCtxMenu() {
    function preventDefault(e) {
        e.preventDefault()
    }
    return <ContextMenuContent className="w-52" onContextMenu={preventDefault}>
            <ContextMenuItem inset>
                Back
                <ContextMenuShortcut>Win+[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
                Forward
                <ContextMenuShortcut>Win+]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset onClick={emitReload}>
                Reload
                <ContextMenuShortcut>Win+R</ContextMenuShortcut>
            </ContextMenuItem>
        </ContextMenuContent>
}