import { observable } from "@legendapp/state"
import {Property} from "csstype";

export const state = observable({
    window: {
        borderRadius: "12px" as Property.BorderRadius, 
        border: "1.5px solid #00000021" as Property.Border,
        backgroundColor: "white" as Property.BackgroundColor,
        foregroundColor: "#BDBDBD" as Property.BackgroundColor,
        titlebarHeight: "36px" as Property.Height,
        titlebarColor: "transparent" as Property.BackgroundColor,
        textColor: "black" as Property.Color,
        accent: "#5c5c5c1a" as Property.Color,
    }
})

function CssInject() {
    const windowTheme = state.window.get()
    const root = document.documentElement;
    root.style.setProperty("--background", windowTheme.backgroundColor);
    root.style.setProperty("--foreground", windowTheme.foregroundColor);
    root.style.setProperty("--primary", windowTheme.textColor);
    root.style.setProperty("--window-border", windowTheme.border as any);
    root.style.setProperty("--window-titlebar-height", windowTheme.titlebarHeight as any);
    root.style.setProperty("--accent", windowTheme.accent);
}

function changeDark() {
    state.window.set({
        borderRadius: "12px",
        border: "1.5px solid #635985",
        backgroundColor: "#18122B",
        foregroundColor: "#393053",
        titlebarHeight: "32px",
        titlebarColor: "transparent",
        textColor: "#635985",
        accent: "#ffffff1a",
    })

    CssInject()
}



export const themeController = {
    state,
    changeDark,
    CssInject
}