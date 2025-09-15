import { use$ } from '@legendapp/state/react';
import { motion } from "motion/react"
import WindowController from '@stores/windowstate.store';
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useIsFirstRender } from '@uidotdev/usehooks';
import { ContextMenuApp } from '@components/Windows/ContextMenus/ContextMenuBuilder';
import { TitleBar } from '@components/Windows/TitleBar';

export const Route = createFileRoute('/app')({
    component: () => {
        const val = use$(WindowController.state.transition);
        if (useIsFirstRender()) {
            setTimeout(() => {
                WindowController.state.transition.set("expand");
            }, 250);
        }

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
                    backgroundColor: "var(--background)",
                    borderRadius: "var(--window-border-radius)",
                    border: "var(--window-border)",
                    color: "var(--primary)",
                    transition: "all 0.5s ease"
                }}
            >
                <ContextMenuApp>
                    <TitleBar />
                    <div style={{ height: "calc(100% - var(--window-titlebar-height))", width: "100%" }}>
                        <Outlet />
                    </div>
                </ContextMenuApp>
            </motion.div >
        </motion.div>
    }
})
