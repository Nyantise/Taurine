import { observable } from "@legendapp/state";
import { currentMonitor, getCurrentWindow } from "@tauri-apps/api/window";
import { sleep } from "@utils/Sleep";


const window = getCurrentWindow();
const monitor = await currentMonitor();


export const windowController = {
    state: observable({
        transition: "show" as "show" | "hide" | "expand",
        maximized: false,
        minimized: false,

    }),
    toggleMaximize: () => {
        window.toggleMaximize()
        windowController.state.maximized.toggle()
    },
    minimize: () => {
        window.minimize()
        windowController.state.minimized.set(true)
    },

    windowTransition: async () => {
        windowController.minimize()
        await sleep(1600)
        windowController.unminimize()
    },

    unminimize: async () => {
        const transition = windowController.state.transition;
        if (await window.isMinimized()) window.unminimize()
        await sleep(100)
        transition.set("show");
        await sleep(400)
        transition.set("expand")
    },
}

let last2 = []
window.onResized(async (e) => {
    last2.push(e.payload)
    if (last2.length > 2) last2.shift()

    //MINIMIZE DETECTION
    if (last2[0].height == last2[1].height && last2[0].width == last2[1].width) {
        if (await window.isMinimized()) {
            windowController.state.transition.set("hide")
            windowController.state.minimized.set(true)
            return
        }
        else {
            if (windowController.state.transition.get() == "hide") windowController.unminimize()
            windowController.state.minimized.set(false)
            return
        }
    }

    //MAXIMIZE DETECTION
    if (last2[1].height == monitor?.size.height || last2[1].width == monitor?.size.width) {
        windowController.state.maximized.set(true)
        return windowController.unminimize()
    }
    //UNMAXIMIZE DETECTION
    if (last2[0].height == monitor?.size.height || last2[0].width == monitor?.size.width) {
        windowController.state.maximized.set(false)
        return windowController.unminimize()
    }
})

