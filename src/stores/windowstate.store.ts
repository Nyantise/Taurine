import { observable } from "@legendapp/state";
import { currentMonitor, getCurrentWindow } from "@tauri-apps/api/window";
import { sleep } from "@utils/Sleep";


const window = getCurrentWindow();
let last2 = []
let watching = false;


const state = observable({
    transition: "show" as "show" | "hide" | "expand",
    maximized: false,
    minimized: false,
});

function toggleMaximize() {
    window.toggleMaximize()
    state.maximized.toggle()
}
function minimize() {
    window.minimize()
    state.minimized.set(true)
}

async function unminimize() {
    if (await window.isMinimized()) window.unminimize()
    await sleep(100)
    state.transition.set("show");
    await sleep(400)
    state.transition.set("expand")
}


async function watchWindow() {
    if (watching) return;
    watching = true;
    const monitor = await currentMonitor();
    window.onResized(async (e) => {
        last2.push(e.payload)
        if (last2.length > 2) last2.shift()

        //MINIMIZE DETECTION
        if (last2[0].height == last2[1].height && last2[0].width == last2[1].width) {
            if (await window.isMinimized()) {
                state.transition.set("hide")
                state.minimized.set(true)
                return
            }
            else {
                if (state.transition.get() == "hide") unminimize()
                state.minimized.set(false)
                return
            }
        }

        //MAXIMIZE DETECTION
        if (last2[1].height == monitor?.size.height || last2[1].width == monitor?.size.width) {
            state.maximized.set(true)
            return unminimize()
        }
        //UNMAXIMIZE DETECTION
        if (last2[0].height == monitor?.size.height || last2[0].width == monitor?.size.width) {
            state.maximized.set(false)
            return unminimize()
        }
    })
}

const WindowController = {
    state,
    toggleMaximize,
    minimize,
    unminimize,
    watchWindow
}
export default WindowController