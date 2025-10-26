import { IconWindowClose } from '@components/Icons/IconWindowClose'
import { IconWindowExpand } from '@components/Icons/IconWindowExpand'
import { IconWindowMinimize } from '@components/Icons/IconWindowMinimize'
import WindowController from '@stores/windowstate.store'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@shadcn/components/ui/menubar"
import { Contexter } from './ContextMenus/Contexter';

export function TitleBar() {
    return <Contexter context='titlebar'>
        <div className='flex 
            h-[var(--window-titlebar-height)]
            bg-[var(--color-background)]
            w-full text-sm rounded-tl-lg rounded-tr-lg'>
            <Menubar className='mt-2 ml-2.5'>
                <MenubarMenu>
                    <MenubarTrigger>
                        File
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        Edit
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        View
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        Profiles
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <div className='flex w-full h-full'>
                <div className="options"></div>
                <div data-tauri-drag-region className="w-full h-full"></div>
                <div className="pr-[4px] w-auto flex h-full gap-[8px] justify-center items-center
                *:flex *:justify-center *:items-center
                [&_svg]:scale-75 [&_svg]:hover:scale-95 [&_svg]:hover:text-[#000000ca] [&_svg]:hover:transition-all
                ">
                    <div className='minimize' onClick={() => WindowController.minimize()}><IconWindowMinimize /></div>
                    <div className='ml-[2px]' onClick={() => WindowController.toggleMaximize()}><IconWindowExpand /></div>
                    <div className='close' onClick={() => WindowController.close()}><IconWindowClose /></div>
                </div>
            </div>
        </div>
    </Contexter >
}