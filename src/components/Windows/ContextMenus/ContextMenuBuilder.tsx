import { ContextMenu, ContextMenuTrigger } from "@shadcn/components/ui/context-menu"
import { ReactNode } from "react"
import { TitleBarCtxMenu } from "./menus/TitleBarCtxMenu";
import { menuContext } from "./Contexter";
import { use$ } from "@legendapp/state/react";
import { BaseCtxMenu } from "./menus/BaseCtxMenu";

let canOpen = true;

export function ContextMenuApp({ children }: { children?: ReactNode | undefined }) {
  const ctx = use$(menuContext);
  function handleClick(evt: React.MouseEvent<HTMLButtonElement>) {
    if (!canOpen) {
      evt.preventDefault()
      canOpen = true
    }
    else {
      canOpen = false
    }
  }
  function stateit(val) {
    console.log(val)
    if (!val) {
      setTimeout(() => {
        menuContext.set("none")
        canOpen = true
      }, 250);
    }
  }

  return (
    <ContextMenu onOpenChange={stateit}>
      <ContextMenuTrigger onContextMenu={handleClick} onClick={handleClick}>
        {children}
      </ContextMenuTrigger>
      {ctx == "titlebar" && <TitleBarCtxMenu />}
      {ctx == "none" && <BaseCtxMenu />}
    </ContextMenu>
  )
}
