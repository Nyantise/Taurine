import { IconWindowClose } from '@components/Icons/IconWindowClose'
import { IconWindowExpand } from '@components/Icons/IconWindowExpand'
import { IconWindowMinimize } from '@components/Icons/IconWindowMinimize'
import styled from '@emotion/styled'
import { windowController } from '@stores/windowstate.store'

export function TitleBar() {
    return <TittleBarStyle>
        <div className="options"></div>
        <div data-tauri-drag-region className="blank"></div>
        <div className="controls">
            <div className='minimize' onClick={() => windowController.minimize()}><IconWindowMinimize /></div>
            <div className='maximize' onClick={() => windowController.toggleMaximize()}><IconWindowExpand /></div>
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
`