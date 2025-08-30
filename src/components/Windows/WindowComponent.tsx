import { use$ } from "@legendapp/state/react"
import { motion } from "motion/react"
import { ReactNode, useEffect } from "react"
import { useIsFirstRender } from "@uidotdev/usehooks";
import { TitleBar } from "./TitleBar";
import WindowController from "@stores/windowstate.store";
import { ContextMenuApp } from "@components/Windows/ContextMenus/ContextMenuBuilder";

export function WindowComponent({ children }: { children?: ReactNode | undefined }) {
    const val = use$(WindowController.state.transition);
    const isFirst = useIsFirstRender()
    useEffect(() => {
        if (isFirst) {
            setTimeout(() => {
                WindowController.state.transition.set("expand");
            }, 250);
        }
    })

    return <motion.div
        style={{ overflowY: "hidden", width: "100vw", height: "100vh" }}
        animate={val}
        variants={{
            expand: {
                padding: 0,
                transition: { duration: 0.3, ease: "easeOut", }
            },
            show: {
                padding: 14,
                transition: { duration: 0.6, ease: "easeInOut", type: "spring", bounce: 0.5 }
            },
            hide: {
                padding: 28,
                transition: { duration: 0.2 }
            }
        }}

    >
        < motion.div
            animate={val}
            variants={{
                show: {
                    transform: "translateX(0px)",
                    transition: { duration: 0.9, ease: "easeInOut", type: "spring", bounce: 0.5 }
                },
                hide: {
                    transform: "translateY(50px)",
                    transition: { duration: 0.4, ease: "easeInOut", type: "spring", bounce: 0.25 }
                }
            }}
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: "12px",
                border: "1.5px solid #00000021"
            }}
        >
            <ContextMenuApp>
                <TitleBar />
                <div style={{ height: "calc(100% - 36px)", width: "100%" }}>
                    {children}
                </div>
            </ContextMenuApp>
        </motion.div >
    </motion.div>
}