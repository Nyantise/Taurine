import { emit } from "@tauri-apps/api/event";

export function emitReload() {
  emit("reloadWindow");
}