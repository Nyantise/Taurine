import { invoke } from "@tauri-apps/api/core";
import { register } from "@tauri-apps/plugin-global-shortcut";


export default async function load(){
    await register('Alt+a', (event) => {
        if(event.state == "Pressed"){
            invoke("open_tray")
        }
    });
}