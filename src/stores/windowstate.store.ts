import { observable } from "@legendapp/state";
import { currentMonitor, getCurrentWindow } from "@tauri-apps/api/window";
import { sleep } from "@utils/Sleep";


const window = getCurrentWindow();
let last2 = []
let watching = false;


const state = observable({
    transition: "show" as "show" | "hide" | "expand",
});

function toggleMaximize() {
    window.toggleMaximize()
}

function minimize() {
    window.minimize()
}

function close() {
    window.close()
}

async function unminimize() {
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
        // @ts-ignore
        last2.push(e.payload)
        if (last2.length > 2) last2.shift()

        // console.log(last2)

        //MINIMIZE DETECTION
        if (await window.isMinimized()) {
            return 
        }

        // @ts-ignore
        if (last2[0].height < monitor?.size.height / 15 && last2.length > 1) {
            return unminimize()
        }

        //MAXIMIZE DETECTION
        try {
            // @ts-ignore
            if (last2[1].height == monitor?.size.height || last2[1].width == monitor?.size.width) {
                return unminimize()
            }
        } catch (error) {
            return unminimize()
        }
        //UNMAXIMIZE DETECTION
        // @ts-ignore
        if (last2[0].height == monitor?.size.height || last2[0].width == monitor?.size.width) {
            return unminimize()
        }
    })
}

const WindowController = {
    state,
    toggleMaximize,
    minimize,
    unminimize,
    watchWindow,
    close
}
export default WindowController