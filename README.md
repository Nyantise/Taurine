# Taurine

This is a template for Tauri + React + TS that i've been creating, testing and prototyping, most of these features are coming from a side project.
you can help me with features, better code practices and architecture (if possible i would like explanations why your approach is a better one)

It comes with some pre-configured things, like

- i18n with autocompletion (i18next, autocompletion with TS magic).
- Maximize, minimize, unmaximizing window events and custom window animations. (Tauri dont come with most of these)
- Multi window store sync, store persistance.
- Shadcn (for faster prototyping) => Dropdown menu, Context menu and Menubar.
- Custom Tray
    
! Tray wont show up on linux (Tauri specific, cause i tried in 3 different distros with Gnome and KDE) !

! work in progress, don't recommended to use for production yet !

Planning to add:

- Configuration sample page
- Window and app theming.
- Overlay Example

Maybe in the long run this can get a CLI and be customizable or even be transformed to an actual lib.