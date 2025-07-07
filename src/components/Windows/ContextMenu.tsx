import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@shadcn/components/ui/context-menu"
import { emitReload } from "@utils/EmitReload";
import { ReactNode } from "react"
let canOpen = true;
export function ContextMenuApp({ children }: { children?: ReactNode | undefined }) {
  function handleClick(evt: React.MouseEvent<HTMLButtonElement>) {
    if (evt.button === 2) {
      console.log(evt.currentTarget)
      if (!canOpen) {
        evt.preventDefault();
        canOpen = true
      }
      else {
        canOpen = false
      }
    }
  }
  function stateit(val) {
    if (!val) {
      setTimeout(() => {
        canOpen = true
      }, 200);
    }
  }
  function preventDefault(e){
    e.preventDefault()
  }

  return (
    <ContextMenu onOpenChange={stateit}>
      <ContextMenuTrigger onContextMenu={handleClick} onClick={handleClick}>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52" onContextMenu={preventDefault}>
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset onClick={emitReload}>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>Save Page...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="colm">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
