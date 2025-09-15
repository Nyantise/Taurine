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
import { Contexter } from './ContextMenus/Contexter';
import { themeController } from '@stores/theme.store';
import { use$ } from '@legendapp/state/react';

export function TitleBar() {
    const theme = use$(themeController.state)



    return <Contexter context='titlebar'>
        <div style={{
            display: "flex",
            height: theme.window.titlebarHeight,
            backgroundColor: theme.window.titlebarColor,
            width: "100%",
            fontSize: "14px",
            paddingLeft: "12px",
            borderBottom: theme.window.border,
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px"

        }}>
            <Menubar className="border-none">
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
                        Test
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <TittleBarStyle>
                <div className="options"></div>
                <div data-tauri-drag-region className="blank"></div>
                <div className="controls">
                    <div className='minimize' onClick={() => WindowController.minimize()}><IconWindowMinimize /></div>
                    <div className='maximize' onClick={() => WindowController.toggleMaximize()}><IconWindowExpand /></div>
                    <div className='close' onClick={() => WindowController.close()}><IconWindowClose /></div>
                </div>
            </TittleBarStyle>
        </div>
    </Contexter >
}
const TittleBarStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
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
`