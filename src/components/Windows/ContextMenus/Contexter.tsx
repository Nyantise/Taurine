import { observable } from "@legendapp/state";
import { ReactNode } from "react";

export const menuContext = observable("none");

export function Contexter({ children, context }: { children: ReactNode | undefined, context: string }) {
    function mousedown() {
        menuContext.set(context)
    }

    return <div onContextMenu={mousedown}>
        {children}
    </div>

}