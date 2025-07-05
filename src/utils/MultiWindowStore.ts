import { observe, Observable } from "@legendapp/state"
import { emit, listen } from "@tauri-apps/api/event"
import { getCurrentWebview } from "@tauri-apps/api/webview"
import { BaseDirectory, readTextFile, writeTextFile } from "@tauri-apps/plugin-fs"

type Options = {
    store: {
        isSignal: boolean,
        state: Observable<any>
    }
    tauriEvent: string
    persistKey?: string
    logging?: boolean
}

export async function MultiWindowStore({
    store,
    tauriEvent,
    persistKey,
    logging = false,
}: Options) {
    const window = getCurrentWebview().label
    const log = (...args: any[]) => logging && console.log("[store-sync]", ...args)

    const savePersisted = async () => {
        if (!persistKey) return
        if (window != "main") return
        try {
            await writeTextFile(persistKey, JSON.stringify(store.state.get()), { baseDir: BaseDirectory.AppData })
            log("Store salvo no disco.")
        } catch (err) {
            console.error("[store-sync] Erro ao salvar store:", err)
        }
    }

    const loadPersisted = async () => {
        if (!persistKey) return
        if (window != "main") return
        try {
            const raw = await readTextFile(persistKey, { baseDir: BaseDirectory.AppData })
            const parsed = JSON.parse(raw)
            store.state.set(parsed)
            log("Store carregado do disco.")
        } catch {
            log("Nenhum valor persistido encontrado.")
        }
    }

    await loadPersisted();

    observe(store.state, (e) => {
        if (!store.isSignal) {
            emit(tauriEvent, {
                from: window,
                value: e.value
            });
            log("Enviando valores de:", window);
        }
        store.isSignal = false;
        savePersisted();
    })
    listen(tauriEvent, ({ payload }: { payload: { from: string, value: any } }) => {
        if (payload.from == window) return;
        store.isSignal = true;
        store.state.set(payload.value);
        log("Recebendo valores de:", payload.from);

        store.isSignal = false;
    });
}