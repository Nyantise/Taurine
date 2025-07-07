import { IconWindowClose } from '@components/Icons/IconWindowClose'
import { IconWindowExpand } from '@components/Icons/IconWindowExpand'
import { IconWindowMinimize } from '@components/Icons/IconWindowMinimize'
import styled from '@emotion/styled';
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

export function TitleBar() {
    return <TittleBarStyle>
        <Menubar className="bg-transparent border-none">
            <MenubarMenu>
                <MenubarTrigger className='rounded-s-xs bg-transparent border-none focus-visible:ring-offset-0 focus-visible:ring-0 cpad hover:bg-gray-200'>
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
                <MenubarTrigger className='rounded-s-xs bg-transparent border-none focus-visible:ring-offset-0 focus-visible:ring-0 cpad hover:bg-gray-200'>
                    Test
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
        </Menubar>
        <div className="options"></div>
        <div data-tauri-drag-region className="blank"></div>
        <div className="controls">
            <div className='minimize' onClick={() => WindowController.minimize()}><IconWindowMinimize /></div>
            <div className='maximize' onClick={() => WindowController.toggleMaximize()}><IconWindowExpand /></div>
            <div className='close' onClick={() => { }}><IconWindowClose /></div>
        </div>
    </TittleBarStyle>
}

const TittleBarStyle = styled.div`
    height: 36px;   
    width: 100%;
    border-bottom: 1px solid #00000021;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    display: flex;

    .blank{
        width: 100%;
        height: 100%;
    }

    .controls{
        padding-right: 4px;
        width: auto;
        display: flex;
        height: 100%;
        border-top-right-radius: 12px;
        gap: 8px;
        justify-content: center;
        align-items: center;
        color: #0000008b;


        div{
            display: flex;
            justify-content: center;
            align-items: center;

            svg{
                transform: scale(0.8);

                :hover{
                    transform: scale(0.92);
                    transition: all 0.2s ease;
                    color: #000000ca;
                }
            }
        }
        .minimize{}
        .maximize{
            margin-left: 2px;
        }
        .close{}
    }

    .cpad{
        padding: 3px;
        padding-inline: 6px;
    }
`